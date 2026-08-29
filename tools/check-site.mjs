import { access, readFile, readdir, stat } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const toolDirectory = path.dirname(fileURLToPath(import.meta.url));
const rootDirectory = path.resolve(toolDirectory, '..');
const errors = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(absolute));
    else files.push(absolute);
  }
  return files;
}

const files = await walk(rootDirectory);
const relativeFiles = files.map((file) => path.relative(rootDirectory, file).replaceAll('\\', '/'));
const htmlFiles = files.filter((file) => file.endsWith('.html'));

const requiredPages = [
  'index.html',
  'why-now.html',
  'framework.html',
  'constellations.html',
  'world-atlas.html',
  'household-lab.html',
  'sovereignty-care.html',
  'possible-futures.html',
  'research-method.html',
  'un-of-love.html',
  'gajra-earth.html',
  'countries/australia.html',
  'countries/new-zealand.html',
  'countries/canada.html',
  'countries/united-states.html',
  'countries/netherlands.html',
  'countries/south-africa.html'
];

const requiredImages = [
  'assets/images/hero-home.webp',
  ...requiredPages.slice(1, 11).map((page) => `assets/images/hero-${page.replace('.html', '')}.webp`),
  ...requiredPages.slice(11).map((page) => `assets/images/hero-country-${path.basename(page, '.html')}.webp`),
  'assets/images/social-preview.webp'
];

for (const relative of [...requiredPages, ...requiredImages, 'LICENSE']) {
  if (!relativeFiles.includes(relative)) errors.push(`Missing required file: ${relative}`);
}

const svgFiles = relativeFiles.filter((file) => file.toLowerCase().endsWith('.svg'));
if (svgFiles.length) errors.push(`SVG files are not allowed: ${svgFiles.join(', ')}`);

for (const file of htmlFiles) {
  const relative = path.relative(rootDirectory, file).replaceAll('\\', '/');
  const html = await readFile(file, 'utf8');
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${relative}: missing title`);
  if (!/<meta name="description" content="[^"]+">/.test(html)) errors.push(`${relative}: missing description`);
  if (!/<link rel="canonical" href="https:\/\/[^"]+">/.test(html)) errors.push(`${relative}: missing canonical URL`);
  if (!/<h1(?:\s|>)/.test(html)) errors.push(`${relative}: missing h1`);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const repeatedIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (repeatedIds.length) errors.push(`${relative}: duplicate IDs ${[...new Set(repeatedIds)].join(', ')}`);
  const imagesWithoutAlt = [...html.matchAll(/<img\b[^>]*>/g)].filter((match) => !/\salt="[^"]*"/.test(match[0]));
  if (imagesWithoutAlt.length) errors.push(`${relative}: image missing alt attribute`);
  if (/\[cite\s*:/i.test(html)) errors.push(`${relative}: unresolved citation marker`);
  if (/\b(?:blockchain|cryptocurrency|wallet)\b/i.test(html)) errors.push(`${relative}: excluded financial-system language`);
  if (/\bIsrael\b/i.test(html)) errors.push(`${relative}: excluded country name in OECD comparison`);
  if (/\.svg(?:[?#"'])/i.test(html)) errors.push(`${relative}: SVG reference`);

  const links = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const fragment of links.filter((link) => link.startsWith('#') && link.length > 1)) {
    const id = decodeURIComponent(fragment.slice(1));
    if (!ids.includes(id)) errors.push(`${relative}: broken fragment reference ${fragment}`);
  }
  for (const controlledId of [...html.matchAll(/\saria-controls="([^"]+)"/g)].map((match) => match[1])) {
    if (!ids.includes(controlledId)) errors.push(`${relative}: aria-controls target not found ${controlledId}`);
  }
  for (const link of links) {
    if (/^(?:https?:|mailto:|tel:|data:|#)/.test(link)) continue;
    const clean = link.split('#')[0].split('?')[0];
    if (!clean) continue;
    const target = path.resolve(path.dirname(file), clean);
    try {
      const targetStat = await stat(target);
      if (targetStat.isDirectory()) await access(path.join(target, 'index.html'));
    } catch {
      errors.push(`${relative}: broken local reference ${link}`);
    }
  }
}

const siteScript = await readFile(path.join(rootDirectory, 'assets', 'site.js'), 'utf8');
for (const generatedLink of [...siteScript.matchAll(/href="\$\{rootPath\}([^"]+)"/g)].map((match) => match[1])) {
  const target = path.join(rootDirectory, generatedLink);
  try {
    await access(target);
  } catch {
    errors.push(`assets/site.js: broken generated navigation target ${generatedLink}`);
  }
}

const heroHashes = new Map();
for (const relative of requiredImages.filter((image) => image.includes('/hero-'))) {
  const data = await readFile(path.join(rootDirectory, relative));
  const hash = createHash('sha256').update(data).digest('hex');
  const existing = heroHashes.get(hash);
  if (existing) errors.push(`Hero images must be unique: ${existing} and ${relative}`);
  heroHashes.set(hash, relative);
}

for (const file of files.filter((candidate) => /\.(?:js|mjs)$/.test(candidate))) {
  const result = spawnSync(process.execPath, ['--check', file], { cwd: rootDirectory, encoding: 'utf8' });
  if (result.status !== 0) {
    const relative = path.relative(rootDirectory, file).replaceAll('\\', '/');
    errors.push(`${relative}: JavaScript syntax check failed\n${result.stderr.trim()}`);
  }
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML pages, ${requiredImages.length} image assets and all local links.`);
