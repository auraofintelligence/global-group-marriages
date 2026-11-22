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

const prospectusPages = ['prospectus.html', 'ai-and-sovereignty.html', 'documents.html', 'references.html'];
const sitemap = await readFile(path.join(rootDirectory, 'sitemap.xml'), 'utf8');
const sitemapRoutes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, location]) => (
  new URL(location.trim()).pathname.slice(1) || 'index.html'
));
const sitemapPages = new Set(sitemapRoutes);
const pageJourneys = new Map();
if (sitemapPages.size !== sitemapRoutes.length) errors.push('sitemap.xml: duplicate page locations');
if (!sitemapPages.has('index.html')) errors.push('sitemap.xml: missing the home page');

const pageIds = new Map();
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  pageIds.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1])));
}

for (const relative of [...requiredPages, ...prospectusPages, ...requiredImages, 'LICENSE']) {
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
  if (/(?:\u2014|&mdash;|&#(?:8212|x2014);)/i.test(html)) errors.push(`${relative}: replace em dashes in site copy`);
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
      const fragment = link.split('#')[1];
      if (fragment && pageIds.has(target) && !pageIds.get(target).has(decodeURIComponent(fragment))) {
        errors.push(`${relative}: broken page anchor ${link}`);
      }
    } catch {
      errors.push(`${relative}: broken local reference ${link}`);
    }
  }

  const journeys = [...html.matchAll(/<nav\b[^>]*\bclass="page-journey(?:\s[^"]*)?"[^>]*>[\s\S]*?<\/nav>/g)];
  if (!sitemapPages.has(relative)) {
    if (journeys.length) errors.push(`${relative}: footer navigation page is missing from the sitemap`);
    continue;
  }
  const footer = html.match(/<footer\b[^>]*>[\s\S]*?<\/footer>/)?.[0];
  if (journeys.length !== 1 || !footer?.includes(journeys[0][0])) {
    errors.push(`${relative}: expected one previous and next navigation inside the footer`);
    continue;
  }
  const directions = new Map();
  for (const [anchor] of journeys[0][0].matchAll(/<a\b[^>]*>/g)) {
    const direction = anchor.match(/\srel="(prev|next)"/)?.[1];
    if (!direction) continue;
    const href = anchor.match(/\shref="([^"]+)"/)?.[1];
    const target = href && path.posix.normalize(path.posix.join(path.posix.dirname(relative), href));
    if (!sitemapPages.has(target)) errors.push(`${relative}: footer ${direction} link must point to a sitemap page`);
    if (directions.has(direction)) errors.push(`${relative}: more than one footer ${direction} link`);
    directions.set(direction, target);
  }
  pageJourneys.set(relative, directions);
}

const visitedPages = new Set();
let page = 'index.html';
let previous;
while (page && sitemapPages.has(page) && !visitedPages.has(page)) {
  const journey = pageJourneys.get(page);
  if (!journey) break;
  if (journey.get('prev') !== previous) {
    errors.push(`${page}: footer previous link must point to ${previous ?? 'no page before Home'}`);
  }
  visitedPages.add(page);
  previous = page;
  page = journey.get('next');
}
if (visitedPages.has(page)) errors.push(`${page}: footer next link creates a loop`);
for (const route of sitemapPages) {
  if (!visitedPages.has(route)) errors.push(`${route}: missing from the footer reading order`);
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
