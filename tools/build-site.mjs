import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { countries } from '../content/countries.mjs';
import { prospectusPages } from '../content/prospectus.mjs';

const toolDirectory = path.dirname(fileURLToPath(import.meta.url));
const rootDirectory = path.resolve(toolDirectory, '..');
const cleanGeneratedText = (text) => text.replace(/[ \t]+$/gm, '');
const assetVersion = '20261123-global';

const pages = [
  ...prospectusPages,
  {
    slug: 'why-now',
    shortTitle: 'Why now',
    title: 'Why family formation feels harder',
    description: 'Current evidence on fertility intentions, cost, housing, work, uncertainty and the search for suitable partners.',
    heading: 'People want families. The systems around them are getting harder to carry.',
    lead: 'Love, parenting, care, housing and financial security place many demands on a household. What could families do differently if more adults chose to share the work?',
    heroAlt: 'Concept artwork of adults considering family life beside a city, home and changing climate at dawn.',
    body: `
    <section class="content-section section-cream">
      <div class="wrap prose-intro">
        <span class="evidence-label">Documented reality</span>
        <h2>What people say is in the way</h2>
        <p class="large-copy">The desire for children has not simply evaporated. In UNFPA's 2025 survey across 14 countries, nearly one in five reproductive-age adults expected not to have the number of children they wanted.</p>
      </div>
      <div class="wrap barrier-grid">
        <article><img class="inline-topic-icon" src="assets/images/icons/households.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Cost and housing</h3><p>People described the cost of parenthood and insecure or unsuitable housing as major barriers to the families they wanted.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/documents.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Work and time</h3><p>Job insecurity, demanding work and the unequal weight of care make a two-adult household feel brittle before a child arrives.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/agreements.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Finding the right people</h3><p>Lack of a suitable partner is not a side issue. The search often asks one person to match a lifetime of emotional, sexual, practical and parenting needs.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/atlas.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>The state of the world</h3><p>War, climate change and wider uncertainty affect how people imagine the future their children would inherit.</p></article>
      </div>
      <div class="wrap source-callout">
        <p><strong>Source:</strong> <a href="https://www.unfpa.org/swp2025?lang=en">UNFPA, State of World Population 2025</a>. The report focuses on reproductive agency: helping people have the families they actually want.</p>
      </div>
    </section>

    <section class="content-section section-indigo">
      <div class="wrap split-intro">
        <div><h2>Below replacement is now ordinary across most wealthy countries</h2></div>
        <div class="lead-copy">
          <p>The OECD's 2023 figures run from a low of 0.7 to a high of 2.8 children per woman, with an OECD mean of 1.4.</p>
          <p>This is not a prediction that any society will disappear. It is evidence that the conditions around partnership, care and children have changed.</p>
          <a class="text-link aqua-link" href="https://www.oecd.org/en/topics/sub-issues/child-and-family-well-being.html">Read the OECD evidence</a>
        </div>
      </div>
    </section>

    <section class="content-section section-sand">
      <div class="wrap prose-intro">
        <span class="evidence-label proposal-label">Proposed pathway</span>
        <h2>Share the practical work of family life</h2>
        <p class="large-copy">A larger marriage does not remove cost, grief, conflict or uncertainty. It changes how many adults meet them together. More incomes, more carers, more skills and more enduring relationships create a different starting equation.</p>
      </div>
      <div class="wrap statement-panel">
        <p>Global group marriage is an additional framework for people who see strength, love and possibility in a larger family constellation.</p>
        <a class="button button-primary" href="framework.html">See how the framework works</a>
      </div>
      <div class="wrap link-pair"><a class="button button-outline" href="prospectus.html">Read Luke’s invitation</a></div>
    </section>`
  },
  {
    slug: 'framework',
    shortTitle: 'The framework',
    title: 'How global group marriage works',
    description: 'A practical pro-group-marriage framework for sharing love, parenting, money, time, care and risk.',
    heading: 'How adults could build a larger family together',
    lead: 'Independent groups of three or more adults can build families around the relationships they choose. Each group decides what size and shape work for them.',
    heroImage: 'framework-conversation.png',
    heroAlt: 'Luke and one adult partner review a household calendar in a coastal home.',
    body: `
    <section class="content-section section-cream">
      <div class="wrap prose-intro">
        <span class="evidence-label proposal-label">Proposed pathway</span>
        <h2>A marriage is the relationship people practise</h2>
        <p class="large-copy">Law currently recognises different parts of this idea in different places. The lived framework is broader: shared commitment, shared care, shared futures and a household constitution designed by the adults inside it.</p>
      </div>
      <div class="wrap principle-grid">
        <article class="idea-card"><img class="inline-topic-icon" src="assets/images/icons/agreements.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Love is not a ration</h3><p>Affection and intimacy grow through attention, honesty and practice. A larger family does not require every bond to look identical.</p></article>
        <article class="idea-card"><img class="inline-topic-icon" src="assets/images/icons/households.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>More people can share care</h3><p>Illness, newborn nights, paid work, school runs and elder care no longer fall across one narrow bridge.</p></article>
        <article class="idea-card"><img class="inline-topic-icon" src="assets/images/icons/households.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Children gain a village at home</h3><p>More committed adults may bring continuity, varied skills, wider culture and more available attention to daily family life.</p></article>
        <article class="idea-card"><img class="inline-topic-icon" src="assets/images/icons/aura.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Adults remain self-sovereign</h3><p>The group is an agreement among whole people. Individual voice, privacy, property, friendships and freedom of conscience remain real.</p></article>
        <article class="idea-card"><img class="inline-topic-icon" src="assets/images/icons/atlas.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Difference becomes useful</h3><p>One person may love cooking, another numbers, another teaching, another travel. Complementarity becomes household capacity.</p></article>
        <article class="idea-card"><img class="inline-topic-icon" src="assets/images/icons/documents.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Risk is shared</h3><p>Income loss, injury, exhaustion and change still happen. A larger support network gives the family more ways to adapt.</p></article>
      </div>
    </section>

    <section class="content-section section-indigo">
      <div class="wrap section-heading light-heading">
        <h2>The household is designed in layers</h2>
        <p>Romance is one layer. A durable family also makes the practical layers visible.</p>
      </div>
      <div class="wrap layer-list">
        <article><strong>People</strong><p>Who is part of the marriage, who lives together, how people get to know prospective members and who takes part in shared decisions about joining.</p></article>
        <article><strong>Love</strong><p>How affection, sexuality, privacy, sleep, dates and changing desire are talked about without pretending every bond is equal.</p></article>
        <article><strong>Care</strong><p>How children, adults, elders, homes, meals and rest receive time and attention.</p></article>
        <article><strong>Resources</strong><p>What stays individual, what is shared, and how housing, income, debt, inheritance and work are handled.</p></article>
        <article><strong>Voice</strong><p>Which decisions are individual, relational, household-wide or child-centred, and what happens when agreement is not immediate.</p></article>
        <article><strong>Change</strong><p>How the family welcomes growth, handles conflict, supports repair and makes an exit survivable.</p></article>
      </div>
    </section>

    <section class="content-section section-sand">
      <div class="wrap split-intro">
        <div><h2>One framework. Many constellations.</h2></div>
        <div class="lead-copy">
          <p>Group marriage does not prescribe one number of people, one gender balance, one sexuality, one home or one division of roles. The meaningful question is whether the relationships form a capable, conscious family.</p>
          <div class="button-row">
            <a class="button button-primary" href="constellations.html">Explore relationship constellations</a>
            <a class="button button-outline" href="prospectus.html#shared-life">Read about sharing a life</a>
          </div>
        </div>
      </div>
    </section>`
  },
  {
    slug: 'constellations',
    shortTitle: 'Constellations',
    title: 'Relationship constellations',
    description: 'Explore possible group-marriage forms without forcing every family into one gender, home or relationship pattern.',
    heading: 'There is no single shape for a larger family.',
    lead: 'A constellation describes the pattern of commitment, homes, parenting, intimacy and shared life. It is a starting language, not a box.',
    heroAlt: 'Concept artwork looking across connected homes and gardens as adults move naturally between shared family spaces at dusk.',
    script: 'assets/constellations.js',
    body: `
    <section class="content-section section-cream">
      <div class="wrap filter-panel" aria-labelledby="constellation-filter-title">
        <h2 id="constellation-filter-title">Explore by emphasis</h2>
        <div class="filter-buttons" data-constellation-filters>
          <button class="filter-button is-active" type="button" data-filter="all">All constellations</button>
          <button class="filter-button" type="button" data-filter="one-home">One home</button>
          <button class="filter-button" type="button" data-filter="multi-home">More than one home</button>
          <button class="filter-button" type="button" data-filter="parenting">Parenting</button>
          <button class="filter-button" type="button" data-filter="global">Global</button>
        </div>
      </div>

      <div class="wrap constellation-grid" data-constellation-grid>
        <article class="constellation-card" data-tags="one-home parenting">
          <img class="inline-topic-icon" src="assets/images/icons/households.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>The shared home circle</h3>
          <p>Several committed adults build one home, share daily care and raise children within the same practical rhythm.</p>
        </article>
        <article class="constellation-card" data-tags="multi-home">
          <img class="inline-topic-icon" src="assets/images/icons/atlas.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>The connected households</h3>
          <p>The marriage spans two or more homes. Time, care and resources move between them without treating distance as lesser commitment.</p>
        </article>
        <article class="constellation-card" data-tags="parenting one-home">
          <img class="inline-topic-icon" src="assets/images/icons/agreements.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>The co-parenting core</h3>
          <p>Parenthood and stable care form the centre while romantic and sexual bonds have their own negotiated patterns.</p>
        </article>
        <article class="constellation-card" data-tags="global multi-home">
          <img class="inline-topic-icon" src="assets/images/icons/atlas.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>The global marriage</h3>
          <p>Partners from different countries build a cross-cultural family, sometimes across borders, languages and seasons.</p>
        </article>
        <article class="constellation-card" data-tags="multi-home parenting">
          <img class="inline-topic-icon" src="assets/images/icons/households.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>The village network</h3>
          <p>Several nearby homes share meals, childcare, transport, gardens and companionship while preserving domestic space.</p>
        </article>
        <article class="constellation-card" data-tags="global one-home">
          <img class="inline-topic-icon" src="assets/images/icons/aura.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>The cultural garland</h3>
          <p>A household consciously carries several cultural, spiritual or linguistic traditions and creates new rituals together.</p>
        </article>
      </div>
    </section>

    <section class="content-section section-sand">
      <div class="wrap section-heading">
        <h2>Find your place on five household spectrums</h2>
        <p>This is a reflection surface, not a compatibility score. Move each slider to describe what feels alive for you now.</p>
      </div>
      <div class="wrap constellation-compass" data-constellation-compass>
        <div class="compass-controls">
          <label><strong>Home</strong><span><i>Several independent homes</i><i>One shared home</i></span><input type="range" min="0" max="4" value="2" data-compass-axis="home"></label>
          <label><strong>Time</strong><span><i>Loose shared rhythm</i><i>Highly coordinated days</i></span><input type="range" min="0" max="4" value="2" data-compass-axis="time"></label>
          <label><strong>Resources</strong><span><i>Mostly individual</i><i>Mostly pooled</i></span><input type="range" min="0" max="4" value="2" data-compass-axis="resources"></label>
          <label><strong>Relationship pattern</strong><span><i>Each bond is distinct</i><i>Strong shared group identity</i></span><input type="range" min="0" max="4" value="2" data-compass-axis="bonds"></label>
          <label><strong>Family centre</strong><span><i>Adult relationships</i><i>Parenting and care</i></span><input type="range" min="0" max="4" value="2" data-compass-axis="care"></label>
        </div>
        <aside class="compass-reading" aria-live="polite">
          <span class="evidence-label proposal-label">Your current reflection</span>
          <h3>No end of a spectrum is the correct one.</h3>
          <div data-compass-reading></div>
          <p>Try moving the sliders as the person you are now, the family you imagine in five years, and the household another partner may want.</p>
        </aside>
      </div>
    </section>

    <section class="content-section section-indigo">
      <div class="wrap prose-intro">
        <h2>The lines are relationships, not rankings</h2>
        <p class="large-copy">Some bonds are romantic. Some are sexual. Some are co-parenting, practical, creative or deeply companionate. A family becomes more truthful when it names those differences instead of manufacturing symmetry.</p>
      </div>
      <div class="wrap statement-panel statement-panel-light">
        <p>A constellation may change as people grow, children arrive, homes move and relationships deepen. Its design is a living conversation.</p>
        <a class="button button-light" href="household-lab.html">Sketch your household</a>
      </div>
    </section>`
  },
  {
    slug: 'world-atlas',
    shortTitle: 'World Law Atlas',
    title: 'World Law Atlas: A Global Method',
    description: 'A global research framework for group marriage, family, self sovereignty, enterprise and the laws of each place.',
    heading: 'Follow the people, the places and the commitments.',
    lead: 'A global method for exploring group marriage, family, self sovereignty and enterprise through the laws and protocols of each place.',
    heroAlt: 'Concept artwork of an illuminated world map, civic landscapes and open legal source books.',
    body: `
    <section class="content-section section-cream">
      <div class="wrap prose-intro">
        <span class="evidence-label proposal-label">Global research design</span>
        <h2>One family can cross several legal worlds</h2>
        <p class="large-copy">This is a way to ask better questions about marriage, family, personal autonomy and a group’s shared enterprise wherever its members live or travel. It is a proposed adaptation of Luke Nathan Hayes’s Australian citizen research, not a completed global law database or a verdict on any particular relationship.</p>
        <div class="link-pair"><a class="button button-primary" href="household-lab.html">Sketch a group in the Household Lab</a><a class="button button-outline" href="research-method.html">How evidence is handled</a></div>
      </div>
      <div class="wrap compact-grid atlas-lenses">
        <article><img class="inline-topic-icon" src="assets/images/icons/agreements.webp" alt="" width="48" height="48" loading="lazy"><h3>Marriage and recognition</h3><p>Ask which relationships the place recognises, what it prohibits, and which commitments people can make without treating private agreements as marriage.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/households.webp" alt="" width="48" height="48" loading="lazy"><h3>Families and care</h3><p>Track parentage, children’s interests, guardianship, succession, housing, healthcare and responsibilities across the whole group.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/aura.webp" alt="" width="48" height="48" loading="lazy"><h3>Self sovereignty</h3><p>Record each adult’s consent, privacy, independent resources, mobility and ability to revise or leave an arrangement.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/compute.webp" alt="" width="48" height="48" loading="lazy"><h3>Group enterprise</h3><p>Distinguish the family from any cooperative, company, trust or other venture: membership, work, ownership, liability, accounting and exit need their own rules.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/atlas.webp" alt="" width="48" height="48" loading="lazy"><h3>Law of the land</h3><p>Follow citizenship, residence, the site of an event or asset, local rules, cultural protocols and any customary authority. A national headline alone cannot answer a local question.</p></article>
      </div>
    </section>

    <section class="content-section section-indigo">
      <div class="wrap section-heading light-heading">
        <span class="evidence-label proposal-label">A reusable pathway</span>
        <h2>From a lived situation to a sourced question</h2>
        <p>Each fork starts with its own people and places. The original Australian work supplies methods, while the local branch needs its own sources and review.</p>
      </div>
      <ol class="wrap method-list">
        <li><strong>Map the group and its places</strong><p>List members, citizenships, residences, children, homes, assets, ventures and planned travel. Note whose law or protocol may apply to each event.</p></li>
        <li><strong>Use a relevance ladder</strong><p>Gather, chomp, sort, plan and act on what matters to those people. This adapts Luke’s 2012–13 Australian personal filing method; it does not make the old documents current law elsewhere.</p></li>
        <li><strong>Trace authority and time</strong><p>Record a publisher, exact provision or policy, jurisdiction, version or effective date, and the date it was checked. Keep binding law, official guidance, practice, protocol and proposed reform in separate lanes.</p></li>
        <li><strong>Test the practical instruments</strong><p>Check bills, contracts, property and business documents clause by clause: who pays, who may decide, what renews, and what happens on exit or a move.</p></li>
        <li><strong>Leave unknowns visible</strong><p>Write the unresolved question, source still needed and person who could review it. Export a brief for a local adviser or a separately chosen research tool; do not turn missing evidence into a universal answer.</p></li>
      </ol>
    </section>

    <section class="content-section section-sand">
      <div class="wrap prose-intro">
        <h2>A record that travels without pretending places are identical</h2>
        <p class="large-copy">A group might form in one country, share care in another and own a venture in a third. Keep one scenario, then attach a separate evidence record to each place and authority. A local fork can change the questions, language and institutions while preserving links back to the original work.</p>
      </div>
      <div class="wrap compact-grid">
        <article><h3>Situation</h3><p>Who is involved, what they want to do, and which person or entity makes each choice?</p></article>
        <article><h3>Place and authority</h3><p>Where does the event happen, and which state, local, Indigenous, customary or other authority is relevant?</p></article>
        <article><h3>Evidence</h3><p>What primary source supports the statement, what version was checked, and what remains uncertain?</p></article>
        <article><h3>Action</h3><p>What conversation, document, professional review or fresh source check comes next?</p></article>
      </div>
    </section>

    <section class="content-section section-cream">
      <div class="wrap prose-intro"><span class="evidence-label">Sources of the method</span><h2>Four Australian-origin systems, one global question</h2><p>Luke originally developed these around his Australian citizen situation and related local work. This page infers a reusable relationship among them; it does not claim the repositories already provide a complete global service.</p></div>
      <div class="wrap source-repo-grid">
        <article><h3><a href="https://github.com/auraofintelligence/australian-law-2012-lukes-relevance">Australian Law 2012: Luke’s Relevance</a></h3><p>The personal circumstance-first Relevance Ladder and local brief become the entry point for each person’s question.</p><a href="https://github.com/auraofintelligence/australian-law-2012-lukes-relevance/blob/main/pages/the-method.html">Read the method</a></article>
        <article><h3><a href="https://github.com/auraofintelligence/australian-legal-engine">Australian Legal Engine</a></h3><p>A citation-first way to index law already in hand, with provision addresses, source authority and currency. A global fork would need local jurisdiction profiles and source review.</p><a href="https://github.com/auraofintelligence/australian-legal-engine/blob/main/docs/DESIGN.md">Read the design</a></article>
        <article><h3><a href="https://github.com/auraofintelligence/household-bill-check">Household Bill Check</a></h3><p>Private comparison of household bills and terms adds the money, contracts, renewal and exit layer to family and enterprise plans.</p><a href="https://github.com/auraofintelligence/household-bill-check/blob/main/docs/how-it-works.md">Read how it works</a></article>
        <article><h3><a href="https://github.com/auraofintelligence/world-travel-patterns">World Travel Patterns</a></h3><p>A nested map of countries, regions and local places suggests where legal, family and cultural questions should be rechecked while travelling.</p><a href="https://github.com/auraofintelligence/world-travel-patterns/blob/main/patterns/README.md">Read the pattern model</a></article>
      </div>
      <div class="wrap source-callout"><p><strong>Use and adaptation:</strong> the linked work is available for attributed non-commercial personal and community adaptation under its stated licences. Commercial, corporate, institutional, government, startup, agency or employer use requires a separate written agreement with Luke Nathan Hayes. Review the <a href="LICENSE">site licence</a> and each original repository’s licence before forking.</p></div>
    </section>`
  },
  {
    slug: 'household-lab',
    shortTitle: 'Household Lab',
    title: 'Global Household Lab',
    description: 'A private group planning brief for marriage, family, sovereignty, shared enterprise, household terms and local law questions.',
    heading: 'Plan a shared life without losing the people in it.',
    lead: 'Sketch the group’s chosen commitments, business structure, household terms and place-specific questions. Your answers remain in this browser unless you choose to copy them.',
    heroAlt: 'Concept artwork of adults around a table with notebooks, choice cards and a warm model of a shared home.',
    script: 'assets/lab.js',
    body: `
    <section class="content-section section-cream">
      <div class="wrap prose-intro">
        <span class="evidence-label proposal-label">A private group planning sketch</span>
        <h2>Give the group a plan without taking anyone’s agency</h2>
        <p class="large-copy">Start with the people and their choices, then separate the marriage vision, family commitments, personal sovereignty, shared business and legal questions. This global adaptation draws on Luke’s Australian household, legal and travel work. It does not calculate legal status, eligibility or a bill saving.</p>
      </div>
      <div class="wrap compact-grid">
        <article><img class="inline-topic-icon" src="assets/images/icons/agreements.webp" alt="" width="48" height="48" loading="lazy"><h3>Relationships</h3><p>What marriage or recognition means to the group, and what each adult chooses independently.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/households.webp" alt="" width="48" height="48" loading="lazy"><h3>Family and home</h3><p>Children, care, housing, time, costs, privacy and plans when circumstances change.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/compute.webp" alt="" width="48" height="48" loading="lazy"><h3>Business structure</h3><p>Keep work, ownership, funding, liabilities and membership distinct from love or parenting.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/atlas.webp" alt="" width="48" height="48" loading="lazy"><h3>Local checks</h3><p>Find the right place, authority, source and version before acting on a legal or travel assumption.</p></article>
      </div>
    </section>

    <section class="content-section section-sand">
      <div class="wrap prose-intro"><h2>Make a first brief together</h2><p>All entries stay in this browser tab. The Markdown copy action is yours to choose; refreshing clears the sketch. Use broad descriptions here and leave sensitive facts for a secure conversation.</p></div>
      <div class="wrap lab-layout">
        <form class="household-form" data-household-form>
          <div class="lab-progress" role="progressbar" aria-label="Household sketch progress" aria-valuemin="1" aria-valuemax="5" aria-valuenow="1"><span data-lab-progress>1 of 5</span><div><i data-lab-bar></i></div></div>
          <fieldset class="lab-step is-active" data-lab-step="1">
            <legend>What are you trying to make possible?</legend>
            <p>Choose as many purposes as fit. The group does not have a preset size or shape.</p>
            <div class="choice-grid">
              <label><input type="checkbox" name="purpose" value="Marriage or public recognition"> Marriage or public recognition</label>
              <label><input type="checkbox" name="purpose" value="Raising children and family care"> Raising children and family care</label>
              <label><input type="checkbox" name="purpose" value="Homes and mutual support"> Homes and mutual support</label>
              <label><input type="checkbox" name="purpose" value="A group business or cooperative"> A group business or cooperative</label>
              <label><input type="checkbox" name="purpose" value="Cross-border life and travel"> Cross-border life and travel</label>
              <label><input type="checkbox" name="purpose" value="Individual freedom and shared joy"> Individual freedom and shared joy</label>
            </div>
          </fieldset>
          <fieldset class="lab-step" data-lab-step="2">
            <legend>Who and where are part of this sketch?</legend>
            <label class="field-label">Adults involved or being considered <input type="number" name="adults" min="3" step="1" placeholder="No preset maximum"></label>
            <label class="field-label">Home pattern <select name="homes"><option>Still open</option><option>One shared home</option><option>Two connected homes</option><option>A local network of homes</option><option>Homes across countries</option></select></label>
            <label class="field-label">Children and future children <select name="children"><option>Part of the conversation</option><option>Central to the family vision</option><option>Not currently planned</option><option>Already part of the group</option><option>Different adults hold different hopes</option></select></label>
            <label class="field-label">Places to check (country, region, local or customary authority) <input type="text" name="places" placeholder="For example: home, destination, place of a shared asset"></label>
          </fieldset>
          <fieldset class="lab-step" data-lab-step="3">
            <legend>Which commitments need separate decisions?</legend>
            <div class="choice-grid">
              <label><input type="checkbox" name="layers" value="Marriage, recognition and consent"> Marriage, recognition and consent</label>
              <label><input type="checkbox" name="layers" value="Parenting, guardianship and care"> Parenting, guardianship and care</label>
              <label><input type="checkbox" name="layers" value="Time, rest, intimacy and privacy"> Time, rest, intimacy and privacy</label>
              <label><input type="checkbox" name="layers" value="Bills, property, debt and exit"> Bills, property, debt and exit</label>
              <label><input type="checkbox" name="layers" value="Group enterprise, ownership and work"> Group enterprise, ownership and work</label>
              <label><input type="checkbox" name="layers" value="Travel, residence and law of the land"> Travel, residence and law of the land</label>
            </div>
          </fieldset>
          <fieldset class="lab-step" data-lab-step="4">
            <legend>What needs evidence before a decision?</legend>
            <label class="field-label">First bill, agreement or business document to review <input type="text" name="document" placeholder="A title only; keep account details out"></label>
            <label class="field-label">A term, renewal, fee or exit condition to check <input type="text" name="term" placeholder="What needs a closer read?"></label>
            <label class="field-label">A local legal or cultural question <textarea name="legalQuestion" rows="3" placeholder="What source and authority could answer it?"></textarea></label>
            <label class="field-label">Source to check and date, if known <input type="text" name="source" placeholder="Unknown is a valid starting point"></label>
          </fieldset>
          <fieldset class="lab-step" data-lab-step="5">
            <legend>Write the next honest conversation</legend>
            <label class="field-label">An opening sentence <textarea name="conversation" rows="4" placeholder="What would we each need to know before making a shared commitment?"></textarea></label>
            <label class="field-label">A principle nobody should lose <input type="text" name="principle" placeholder="For example: each person can keep independent resources"></label>
          </fieldset>
          <div class="lab-actions"><button class="button button-outline" type="button" data-lab-back disabled>Back</button><button class="button button-primary" type="button" data-lab-next>Next question</button></div>
        </form>
        <aside class="lab-summary">
          <span class="evidence-label proposal-label">Private local sketch</span>
          <h2 tabindex="-1" data-lab-summary-heading>Your group starting point</h2>
          <div data-lab-output><p>Your choices will form a conversation and research brief here.</p></div>
          <button class="button button-light" type="button" data-lab-copy hidden>Copy as Markdown</button>
          <p class="privacy-note">Nothing is sent from this form. Refreshing the page clears the sketch.</p>
        </aside>
      </div>
    </section>

    <section class="content-section section-cream">
      <div class="wrap prose-intro"><h2>Move from a sketch to a checked plan</h2><p class="large-copy">Use the copied brief to review the real documents with the people involved. Compare terms and dates in <a href="https://github.com/auraofintelligence/household-bill-check">Household Bill Check</a>; take each place-specific question to the <a href="world-atlas.html">global Atlas method</a>; use <a href="https://github.com/auraofintelligence/australian-legal-engine">Australian Legal Engine</a> only with sources you have selected and checked. This page does not send the brief to any service.</p></div>
      <div class="wrap source-repo-grid">
        <article><h3><a href="https://github.com/auraofintelligence/australian-law-2012-lukes-relevance">Australian Law 2012: Luke’s Relevance</a></h3><p>Start with whose situation the law is relevant to, then sort a private brief before seeking a source.</p></article>
        <article><h3><a href="https://github.com/auraofintelligence/household-bill-check">Household Bill Check</a></h3><p>Track costs, clauses, renewals and cancellation in the actual agreements. The Minjerribah mutuals experiment is a local example, not a global default.</p></article>
        <article><h3><a href="https://github.com/auraofintelligence/world-travel-patterns">World Travel Patterns</a></h3><p>Place each move and family question within its country, region and local context, leaving unknowns visible.</p></article>
        <article><h3><a href="https://github.com/auraofintelligence/australian-legal-engine">Australian Legal Engine</a></h3><p>Link a later research brief to exact sources and versions. It does not fetch all current laws automatically.</p></article>
      </div>
      <div class="wrap source-callout"><p><strong>From Luke’s Australian work:</strong> these original systems can be forked and customised for a local non-commercial setting with attribution under their stated licences. Commercial, corporate, institutional, government, startup, agency or employer use requires a separate written agreement with Luke Nathan Hayes. Check the <a href="LICENSE">site licence</a> and the linked repositories’ licences.</p></div>
    </section>`
  },
  {
    slug: 'sovereignty-care',
    shortTitle: 'Sovereignty and care',
    title: 'Love, sovereignty and care',
    description: 'A positive foundation for self-sovereign group marriage: clear voice, continuing choice, shared care, privacy, power awareness and repair.',
    heading: 'Nobody disappears into the group.',
    lead: 'A strong group marriage is made of whole people. Love deepens when voice, privacy, desire, responsibility and the freedom to change remain alive inside the family.',
    heroAlt: 'Concept artwork of adults at an open round table, each warmly lit and connected without hierarchy.',
    body: `
    <section class="content-section section-cream">
      <div class="wrap prose-intro">
        <h2>Sovereignty grows through relationship</h2>
        <p class="large-copy">Self-sovereignty means keeping your voice, privacy and ability to make choices while you build a life with others.</p>
      </div>
      <div class="wrap principle-grid">
        <article class="idea-card"><img class="inline-topic-icon" src="assets/images/icons/aura.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Individual voice</h3><p>Each adult speaks for their own desires, boundaries, health, friendships, work and conscience.</p></article>
        <article class="idea-card"><img class="inline-topic-icon" src="assets/images/icons/agreements.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Relational agreements</h3><p>Every bond develops its own language for time, intimacy, disclosure, care and change.</p></article>
        <article class="idea-card"><img class="inline-topic-icon" src="assets/images/icons/households.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Household voice</h3><p>Shared decisions include the people who carry their effects, with clear ways to slow down and think again.</p></article>
        <article class="idea-card"><img class="inline-topic-icon" src="assets/images/icons/households.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Children’s welfare</h3><p>Family decisions give weight to children’s safety, trusted relationships, development and growing ability to express what they want.</p></article>
        <article class="idea-card"><img class="inline-topic-icon" src="assets/images/icons/documents.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Real privacy</h3><p>A loving family has shared life and private rooms, conversations, friendships, devices, thoughts and moments of solitude.</p></article>
        <article class="idea-card"><img class="inline-topic-icon" src="assets/images/icons/agreements.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Ongoing consent</h3><p>Consent depends on the situation and the continuing freedom to change your mind. People can keep discussing what they want as their lives change.</p></article>
      </div>
    </section>

    <section class="content-section section-indigo">
      <div class="wrap split-intro">
        <div><h2>Make power visible enough to work with</h2></div>
        <div class="lead-copy">
          <p>Money, housing, age, health, migration status, fertility, language and social standing affect how freely someone can choose. A household can acknowledge those differences and work out how everyone gets a say.</p>
          <p>Independent money, private support networks, written property interests, separate legal advice and realistic exit plans help people choose when and how to rely on one another.</p>
        </div>
      </div>
      <div class="wrap care-rhythm">
        <article><h3>Notice</h3><p>What has changed in the people, relationships, children or wider world?</p></article>
        <article><h3>Name</h3><p>What does each person actually want, fear, need or no longer consent to?</p></article>
        <article><h3>Design</h3><p>Which agreement, resource or rhythm needs to change?</p></article>
        <article><h3>Repair</h3><p>What action restores trust, dignity and practical safety?</p></article>
      </div>
    </section>

    <section class="content-section section-sand">
      <div class="wrap split-intro">
        <div><h2>Making room for relationships to change</h2></div>
        <div class="lead-copy">
          <p>A relationship may change while parenting, friendship, housing, property and care continue. Talking through those possibilities early gives people more options if they need to change their arrangements.</p>
          <p>Portable records and clear data permissions can help people carry their knowledge, choices and agreed responsibilities through a change in household, device or provider.</p>
          <div class="editorial-links">
            <a href="ai-and-sovereignty.html#aura">How an Aura could support personal control</a>
            <a href="https://auraofintelligence.github.io/grey-area-commons/">Adult reflection tools at Grey Area Commons</a>
          </div>
        </div>
      </div>
    </section>`
  },
  {
    slug: 'possible-futures',
    shortTitle: 'Possible futures',
    title: 'Stories and possible futures',
    description: 'Human-scale stories that make group marriage tangible through ordinary homes, children, travel, conflict, care and celebration.',
    heading: 'The future becomes thinkable when somebody lives through a Tuesday.',
    lead: 'These imagined scenes explore what shared life could feel like through breakfasts, school runs, budgets and difficult conversations.',
    heroAlt: 'Concept artwork showing one multi-adult family sharing care, work and everyday life across the connected rooms of a warm home.',
    body: `
    <section class="content-section section-cream">
      <div class="wrap prose-intro">
        <span class="evidence-label imagination-label">Fiction and imagination</span>
        <h2>Four ordinary moments</h2>
        <p class="large-copy">The details matter because a family is not an abstract network. It is the repeated experience of being expected, remembered and cared for.</p>
      </div>
      <div class="wrap story-grid">
        <article class="story-card">
          <p class="story-time">6:20 am</p>
          <h3>The kitchen is already awake</h3>
          <p>Mei is packing lunches while Asha feeds the baby and Tomas checks the rain radar before the school ride. Daniel finished the night shift and sleeps behind a closed door. Nobody calls that absence. His rest is part of today's shared work.</p>
        </article>
        <article class="story-card">
          <p class="story-time">11:45 am</p>
          <h3>The appointment has three kinds of support</h3>
          <p>One partner asks the medical questions. One remembers what happened last time. One waits outside with the toddler. The family does not need every person in every room to be present as a whole.</p>
        </article>
        <article class="story-card">
          <p class="story-time">5:10 pm</p>
          <h3>A border shapes the evening</h3>
          <p>Two adults cook in Brisbane while another joins from Cape Town. The law recognises only part of the relationship, but the children know exactly who will read tonight's chapter. Careful research turns a vague obstacle into practical questions about evidence, visits and independent visas.</p>
        </article>
        <article class="story-card">
          <p class="story-time">9:30 pm</p>
          <h3>Love does not mean automatic agreement</h3>
          <p>Two people want another child. One is unsure. Another wants a year without pregnancy or newborn care. They do not vote a body into service. They name the hopes underneath the disagreement and keep talking.</p>
        </article>
      </div>
    </section>

    <section class="content-section section-indigo">
      <div class="wrap split-intro">
        <div><h2>Writing about the whole of a life</h2></div>
        <div class="lead-copy">
          <p>Useful stories include delight, boredom, attraction, jealousy, competence, illness, money, travel, culture, children, ageing and repair. They let readers test the idea against lived texture.</p>
          <a class="text-link aqua-link" href="https://auraofintelligence.github.io/australian-sire-story-forge/">Visit the Australian Sire Story Forge</a>
        </div>
      </div>
    </section>

    <section class="content-section section-cream">
      <div class="wrap section-heading">
        <h2>Looking across generations and beyond Earth</h2>
        <p>These are Luke’s long-range proposals and interpretations from the prospectus. They carry the same question about continuity from a household to a community and further.</p>
      </div>
      <div class="wrap compact-grid">
        <article><h3>Keep people and knowledge safe</h3><p>The Silica Citadel plan explores how an underground settlement could keep food, water, energy, repairs, manufacturing and shared knowledge available through prolonged disruption. Grain by Grain begins at a local scale with a ferry terminal, workshops and energy.</p><p><a class="text-link" href="https://auraofintelligence.github.io/grain-by-grain/">Explore Grain by Grain</a></p></article>
        <figure class="editorial-photo">
          <img src="assets/images/possible-futures-underground.webp" alt="An imagined underground civic space with shared workshops." loading="lazy" decoding="async">
          <figcaption>An imagined Silica Citadel workshop for local repair and manufacturing.</figcaption>
        </figure>
        <article><h3>Imagine a society beneath the ocean</h3><p>The prospectus records Luke's belief in sub-ocean technates, technologically organised societies beneath the ocean. This artwork imagines how people might live and work in one.</p><p><a class="text-link" href="docs/global-group-marriages-business-prospectus-2026-11-22.docx" download>Download the prospectus</a></p></article>
        <figure class="editorial-photo">
          <img src="assets/images/possible-futures-sub-ocean.webp" alt="An imagined settlement beneath the ocean." loading="lazy" decoding="async">
          <figcaption>An imagined sub-ocean technate.</figcaption>
        </figure>
        <article><h3>Learn to work off Earth</h3><p>Virtual Solar Swarm lets people explore how a fleet of spacecraft could observe the Sun and send information home. Luke’s wider proposal considers off-world habitats and ways to sustain life and work across generations.</p><p><a class="text-link" href="https://auraofintelligence.github.io/virtual-solar-swarm/">Explore Virtual Solar Swarm</a></p></article>
        <figure class="editorial-photo">
          <img src="assets/images/possible-futures-off-world.webp" alt="People in an imagined off-world habitat with Earth visible outside." loading="lazy" decoding="async">
          <figcaption>An imagined habitat for living and working off Earth.</figcaption>
        </figure>
        <article><h3>Imagine contact across worlds</h3><p>Luke believes there are communities and other intelligences beyond Earth, and assigns a high probability to contact by November 2031. This is his personal interpretation and forecast. He explores what lasting relationships, family and cooperation could mean if contact took place.</p><p class="editorial-links"><a class="text-link" href="references.html#sky-traditions">Read the sky and origin traditions</a><a class="text-link" href="https://science.nasa.gov/uap/faqs/">NASA's UAP research and evidence FAQ</a></p></article>
        <figure class="editorial-photo">
          <img src="assets/images/possible-futures-visitors.webp" alt="Four women share a map at a mountain observatory at dusk." loading="lazy" decoding="async">
          <figcaption>An imagined meeting with human-looking Nordic visitors from modern UFO folklore.</figcaption>
        </figure>
      </div>
      <div class="wrap link-pair"><a class="button button-outline" href="documents.html">Read the full prospectus</a></div>
    </section>

    <section class="content-section section-sand">
      <div class="wrap statement-panel">
        <p>What would your household do on an ordinary Tuesday that two people struggle to do alone?</p>
        <a class="button button-primary" href="household-lab.html">Begin a private sketch</a>
      </div>
    </section>`
  },
  {
    slug: 'research-method',
    shortTitle: 'Research',
    title: 'Research and method',
    description: 'The source discipline behind Global Group Marriages: documented reality, proposed pathways, imagination, official sources and visible gaps.',
    heading: 'Big ideas deserve clear sources and visible seams.',
    lead: 'Global Group Marriages is openly pro-group-marriage. Advocacy becomes stronger when present law, current evidence, practical proposals and imaginative futures are easy to tell apart.',
    heroAlt: 'Concept artwork of a luminous library table with source books, world maps, notes and dated research receipts.',
    body: `
    <section class="content-section section-cream">
      <div class="wrap section-heading">
        <h2>Three lanes of knowledge</h2>
        <p>Each lane serves a different purpose. None needs to pretend to be another.</p>
      </div>
      <div class="wrap lane-grid">
        <article class="lane-card reality-lane"><span class="evidence-label">Documented reality</span><img class="inline-topic-icon" src="assets/images/icons/documents.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>What is evidenced now</h3><p>Official law, government guidance, court decisions, demographic research and clearly sourced history.</p></article>
        <article class="lane-card proposal-lane"><span class="evidence-label proposal-label">Proposed pathway</span><img class="inline-topic-icon" src="assets/images/icons/agreements.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>What people could design</h3><p>Household agreements, care systems, policy reform, practical tools and testable social structures.</p></article>
        <article class="lane-card imagination-lane"><span class="evidence-label imagination-label">Fiction and imagination</span><img class="inline-topic-icon" src="assets/images/icons/aura.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>What stretches the mind</h3><p>Stories, simulacra, future institutions and concept artwork that reveal questions before reality answers them.</p></article>
      </div>
    </section>

    <section class="content-section section-indigo">
      <div class="wrap section-heading light-heading">
        <h2>How the research is built</h2>
        <p>The method takes inspiration from the Australian Legal Engine and Australian Visa and Activity Atlas, then checks sources country by country.</p>
      </div>
      <ol class="wrap method-list">
        <li><strong>Start with the question.</strong><p>Separate marriage status, offences, contracts, property, inheritance, parentage, adoption, immigration and healthcare.</p></li>
        <li><strong>Prefer official sources.</strong><p>Use legislation, government guidance, courts and official reform material before commentary.</p></li>
        <li><strong>Name the jurisdiction.</strong><p>National, state, provincial, local, customary and religious systems are not interchangeable.</p></li>
        <li><strong>Quote narrowly and explain plainly.</strong><p>Keep the legal meaning visible without burying the reader in formal language.</p></li>
        <li><strong>Date the check.</strong><p>Every country guide states when sources were reviewed and what needs checking next.</p></li>
        <li><strong>Keep gaps public.</strong><p>An unanswered question is recorded as a gap, not filled by confidence.</p></li>
      </ol>
      <div class="wrap link-pair">
        <a class="button button-light" href="https://github.com/auraofintelligence/australian-legal-engine">Australian Legal Engine</a>
        <a class="button button-glass" href="https://github.com/auraofintelligence/Australian-visa-activity-atlas">Australian Visa and Activity Atlas</a>
      </div>
    </section>

    <section class="content-section section-sand">
      <div class="wrap prose-intro">
        <h2>Core source register</h2>
      </div>
      <div class="wrap source-list">
        <a href="https://www.oecd.org/en/topics/sub-issues/child-and-family-well-being.html"><strong>OECD child and family well-being</strong><span>Fertility, family and policy indicators</span></a>
        <a href="https://www.unfpa.org/swp2025?lang=en"><strong>UNFPA State of World Population 2025</strong><span>Reproductive intentions and barriers</span></a>
        <a href="https://www.un.org/en/our-work/"><strong>United Nations: Our Work</strong><span>Present UN work and institutional context</span></a>
        <a href="https://www.un.org/en/about-us/un-charter/full-text"><strong>Charter of the United Nations</strong><span>Background to the name United Nations of Love</span></a>
      </div>
    </section>

    <section class="content-section section-cream">
      <div class="wrap source-callout">
        <p><strong>Country-law checkpoint:</strong> initial guides were checked against official sources on 29 August 2026. They are public legal information, not advice for a particular person or household.</p>
      </div>
      <div class="wrap link-pair">
        <a class="button button-outline" href="references.html">Explore the references and image credits</a>
        <a class="button button-outline" href="documents.html">Browse the document library</a>
      </div>
    </section>`
  },
  {
    slug: 'un-of-love',
    shortTitle: 'United Nations of Love',
    title: 'United Nations of Love',
    description: 'Luke Nathan Hayes proposes a cross-cultural love marriage and family enterprise that contributes to world peace through Joyful Responsible Abundance.',
    heading: 'United Nations of Love',
    lead: 'The family business and love marriage across cultures that Luke Nathan Hayes wants to build.',
    heroAlt: 'Concept artwork of adults from many cultures gathered in a circular pavilion.',
    body: `
    <section class="content-section section-cream" aria-labelledby="my-vision">
      <div class="wrap prose-intro">
        <h2 id="my-vision">The family I want to build</h2>
        <p class="large-copy">I'd like to build a family with people from different cultures who choose to share love, care and enterprise. We'd work out what we want to make together and what each person wants to pursue in their own life.</p>
        <p>This is my proposal within the wider <a href="framework.html">Global Group Marriages framework</a>. Other people can form their own groups, starting with a throuple and growing to whatever size works for them. This kind of marriage will suit some people and add one more possibility to the many ways families already live.</p>
      </div>
    </section>

    <section class="content-section section-indigo" aria-labelledby="choosing-each-other">
      <div class="wrap section-heading light-heading">
        <h2 id="choosing-each-other">We choose each other</h2>
        <p>I want to be free to say who and what brings me joy and helps me live responsibly and abundantly. Everyone involved gets to define that for themselves.</p>
      </div>
      <div class="wrap compact-grid">
        <article><img class="inline-topic-icon" src="assets/images/icons/agreements.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>My romantic relationships</h3><p>I want to choose the women who also choose me. Each person has the same freedom to choose their own partners.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/households.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>How the group grows</h3><p>I encourage women in the group to vet and invite men they'd like to join. I'd have the same say as any other partner. The people taking on each shared commitment decide together, on equal terms.</p></article>
      </div>
    </section>

    <section class="content-section section-sand" aria-labelledby="shared-practice">
      <div class="wrap prose-intro">
        <h2 id="shared-practice">What we'd take care of together</h2>
      </div>
      <div class="wrap organ-grid">
        <article><img class="inline-topic-icon" src="assets/images/icons/agreements.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Family decisions</h3><p>Hear from everyone affected, including children in ways that suit their age.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/households.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Everyday care</h3><p>Make time for rest, meals, health and the people who need support.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/documents.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Family enterprise</h3><p>Agree on pay, ownership, risk and what each person wants to keep independent.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/atlas.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Culture and hospitality</h3><p>Make room for each other's languages, food, stories and occasions.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/households.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Future generations</h3><p>Think about the care, education and relationships that children can count on over time.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/agreements.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Making things right</h3><p>Listen when something hurts, take responsibility and revisit agreements when life changes.</p></article>
      </div>
    </section>

    <section class="content-section section-cream" aria-labelledby="peace">
      <div class="wrap split-intro">
        <figure class="editorial-photo full-art">
          <img src="assets/images/inland-festival.webp" alt="Two women talking at an arts gathering in a mountain valley." loading="lazy" decoding="async" width="756" height="500">
          <figcaption>AI-generated illustration of a gathering for music and art.</figcaption>
        </figure>
        <div class="lead-copy">
          <h2 id="peace">A cultural contribution to world peace</h2>
          <p>The name draws on the idea of coming together across borders. Our contribution would come through Joyful Responsible Abundance in daily life. We'd share food and hospitality, make music and stories, build businesses and keep turning up for people across cultures.</p>
          <p>I'd like us to see how close we can come to unconditional love by caring about each other through change. Each person would keep the freedom to set boundaries, choose their relationships and decide which commitments they want to make.</p>
          <div class="editorial-links">
            <a href="prospectus.html">Read my business prospectus</a>
            <a href="gajra-earth.html">Explore the wider GAJRA Earth vision</a>
          </div>
        </div>
      </div>
    </section>`
  },
  {
    slug: 'gajra-earth',
    shortTitle: 'GAJRA Earth',
    title: 'GAJRA Earth',
    description: 'How Global Group Marriages and Luke Nathan Hayes’s United Nations of Love proposal connect to GAJRA Earth and Aura of Intelligence.',
    heading: 'A family constellation inside a planetary garland.',
    lead: 'GAJRA Earth imagines joyful responsible abundance: distinct people, cultures, places and intelligences held in relationship without being made the same.',
    heroAlt: 'Concept artwork of a diverse multi-adult family weaving a real flower garland together in a planetary garden at sunrise.',
    body: `
    <section class="content-section section-cream">
      <div class="wrap split-intro">
        <div><h2>The garland holds distinct flowers</h2></div>
        <div class="lead-copy">
          <p>In a gajra, each flower keeps its identity while the thread holds them together. Global Group Marriages brings that idea to many independent families, each with its own bonds and agreements.</p>
          <p>Luke's <a href="un-of-love.html">United Nations of Love</a> would bring people from different cultures together in a family and shared enterprise. GAJRA Earth opens up cooperation across cultures to anyone who wants to take part in its wider work.</p>
          <p>The <a href="prospectus.html#creative-work">prospectus connects creative work with the proposed 2035 gathering</a>, three days of music, art and votes on values led by communities that choose to participate.</p>
        </div>
      </div>
      <div class="wrap inline-scene-band">
        <figure class="editorial-photo inline-scene">
          <img src="assets/images/inland-festival.webp" alt="Two women talk in the middle of a festival in a mountain valley." loading="lazy" decoding="async">
          <figcaption>AI-generated illustration of a gathering for music and art.</figcaption>
        </figure>
      </div>
      <div class="wrap gajra-link-grid">
        <a class="gajra-link-card" href="https://auraofintelligence.github.io/gajra-earth-claude-build/">
          <span>Public world</span>
          <h3>GAJRA Earth Claude Build</h3>
          <p>A garland-shaped world of open questions, public records and planetary imagination.</p>
          <strong>Enter this build</strong>
        </a>
        <a class="gajra-link-card gajra-link-dark" href="https://auraofintelligence.github.io/GAJRA-earth-infinity/">
          <span>Infinite world</span>
          <h3>GAJRA Earth Infinity</h3>
          <p>Orbital pathways through private reflection, meeting together and public fieldwork.</p>
          <strong>Enter this build</strong>
        </a>
      </div>
    </section>

    <section class="content-section section-indigo">
      <div class="wrap section-heading light-heading">
        <h2>The shared thread</h2>
        <p>These ideas connect through lived principles rather than one central authority.</p>
      </div>
      <div class="wrap compact-grid">
        <article><img class="inline-topic-icon" src="assets/images/icons/aura.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Joyful</h3><p>Love, sexuality, play, beauty, celebration and curiosity belong in serious thinking about the future.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/agreements.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Responsible</h3><p>Children, care, law, resources, power and long consequences remain part of the same picture.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/atlas.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Abundant</h3><p>Value includes time, knowledge, affection, culture, creativity, nature and relationship, not only money.</p></article>
        <article><img class="inline-topic-icon" src="assets/images/icons/documents.webp" alt="" width="48" height="48" loading="lazy" decoding="async"><h3>Self-sovereign</h3><p>People participate as whole intelligences, with private interiors and real agency inside the shared world.</p></article>
      </div>
    </section>

    <section class="content-section section-sand">
      <div class="wrap prose-intro">
        <h2>Related worlds</h2>
        <p class="large-copy">Global Group Marriages is one public doorway inside a wider ecosystem of law, place, desire, story, music, travel, personal reflection and cognitive architecture.</p>
      </div>
      <div class="wrap ecosystem-grid">
        <a href="https://github.com/auraofintelligence/australian-legal-engine"><strong>Australian Legal Engine</strong><span>Source-led legal reasoning</span></a>
        <a href="https://github.com/auraofintelligence/Australian-visa-activity-atlas"><strong>Australian Visa Activity Atlas</strong><span>Country and movement guides</span></a>
        <a href="https://github.com/auraofintelligence/australian-sire-story-forge"><strong>Australian Sire Story Forge</strong><span>Possible lives through story</span></a>
        <a href="https://github.com/auraofintelligence/auraofintelligence.github.io"><strong>Aura of Intelligence</strong><span>The wider public constellation</span></a>
        <a href="https://github.com/auraofintelligence/strange-but-true-desire-atlas"><strong>Strange But True Desire Atlas</strong><span>Desire across the world</span></a>
        <a href="https://github.com/auraofintelligence/aura-horn-torus"><strong>Aura Horn Torus</strong><span>Relationship geometry and memory</span></a>
        <a href="https://github.com/auraofintelligence/right-place-right-time"><strong>Right Place, Right Time</strong><span>Reality, timing and possibility</span></a>
        <a href="https://github.com/auraofintelligence/i-C-infinity-music-universe"><strong>i C. infinity Music Universe</strong><span>Emotional and musical worlds</span></a>
        <a href="https://github.com/auraofintelligence/strange-but-true-travel-oracle"><strong>Strange But True Travel Oracle</strong><span>Private place and relationship inquiry</span></a>
        <a href="https://github.com/auraofintelligence/grey-area-commons"><strong>Grey Area Commons</strong><span>Adult self-sovereign reflection</span></a>
      </div>
    </section>

    <section class="content-section closing-section">
      <div class="wrap closing-copy">
        <p>Love, play, learn, teach.</p>
        <h2>The household is one place to begin designing the world we want to live in.</h2>
      </div>
    </section>`
  },
];

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

const [home, documents, references] = [
  ['index.html', 'Home'],
  ['documents.html', 'Document library'],
  ['references.html', 'References and image credits']
];
const readingOrder = [
  ['index.html', "Home"],
  ['prospectus.html', "Prospectus"],
  ['un-of-love.html', "United Nations of Love"],
  ['why-now.html', "Why now"],
  ['framework.html', "The framework"],
  ['constellations.html', "Constellations"],
  ['sovereignty-care.html', "Sovereignty and care"],
  ['gajra-earth.html', "GAJRA Earth"],
  ['ai-and-sovereignty.html', "AI and self-sovereignty"],
  ['possible-futures.html', "Possible futures"],
  ['research-method.html', "Research method"],
  ['world-atlas.html', "World Law Atlas"],
  ['household-lab.html', "Household Lab"],
  ['music.html', "Music"],
  ['documents.html', "Document library"],
  ['references.html', "References and image credits"]
];
const primaryLinks = [
  ['prospectus.html', "Luke's prospectus"],
  ['un-of-love.html', "United Nations of Love"],
  ['why-now.html', "Why now"],
  ['framework.html', "Family framework"],
  ['constellations.html', "Constellations"],
  ['sovereignty-care.html', "Sovereignty and care"],
  ['gajra-earth.html', "GAJRA Earth"],
  ['ai-and-sovereignty.html', "AI and self-sovereignty"],
  ['possible-futures.html', "Possible futures"],
  ['research-method.html', "Research method"],
  ['world-atlas.html', "World Law Atlas"],
  ['household-lab.html', "Household Lab"],
  ['music.html', "Music"],
  ['documents.html', "Documents"],
  ['references.html', "References"]
];
const footerGroups = [
  ['Aura of Intelligence', [
    ['ai-and-sovereignty.html#aura', 'How Aura fits in'],
    ['https://auraofintelligence.github.io/', 'Aura of Intelligence'],
    ['https://auraofintelligence.github.io/aura-genesis-geode-atlas/index.html', 'Aura Genesis Protocol'],
    ['https://auraofintelligence.github.io/aura-verse-box/', 'Verse Box']
  ]],
  ['Families and law', [
    ['why-now.html', 'Why now'],
    ['framework.html', 'Family framework'],
    ['constellations.html', 'Relationship constellations'],
    ['household-lab.html', 'Household Lab'],
    ['sovereignty-care.html', 'Consent and care']
  ]],
  ['Ideas and research', [
    ['ai-and-sovereignty.html', 'AI and self-sovereignty'],
    ['possible-futures.html', 'Possible futures'],
    ['un-of-love.html', 'United Nations of Love'],
    ['gajra-earth.html', 'GAJRA Earth'],
    ['research-method.html', 'Research method'],
    ['world-atlas.html', 'World Law Atlas']
  ]],
  ['Sources', [
    documents,
    references,
    ['LICENSE', 'Strange But True Public Source Licence']
  ]]
];

function renderHeader(route, rootPath) {
  const links = primaryLinks.map(([href, label]) => {
    const current = href === route ? ' aria-current="page"' : '';
    return `          <a href="${rootPath}${href}"${current}>${escapeXml(label)}</a>`;
  }).join('\n');
  return `  <header class="site-header">
    <div class="site-header-inner">
      <a class="brand" href="${rootPath}index.html" aria-label="Global Group Marriages home">
        <img src="${rootPath}assets/favicon-192.png" alt="">
        <span>Global Group Marriages</span>
      </a>
      <details class="site-menu">
        <summary>Menu</summary>
        <nav class="site-nav" aria-label="Primary navigation">
${links}
        </nav>
      </details>
    </div>
  </header>`;
}

function renderFooter(route, rootPath) {
  const index = readingOrder.findIndex(([href]) => href === route);
  const previous = readingOrder[index - 1];
  const next = index < 0 ? undefined : readingOrder[index + 1];
  const sectionLinks = footerGroups.map(([heading, links]) => `      <div>
        <h2>${escapeXml(heading)}</h2>
${links.map(([href, label]) => `        <a href="${href.startsWith('https:') ? href : rootPath + href}">${escapeXml(label)}</a>`).join('\n')}
      </div>`).join('\n');
  return `  <footer class="site-footer">
    <nav class="page-journey wrap" aria-label="Continue through the site">
      ${previous ? `<a href="${rootPath}${previous[0]}" rel="prev"><span>Previous</span><strong>${escapeXml(previous[1])}</strong></a>` : ''}
      ${next ? `<a class="next-link" href="${rootPath}${next[0]}" rel="next"><span>Next</span><strong>${escapeXml(next[1])}</strong></a>`
    : `<a class="next-link" href="${rootPath}index.html"><span>Return to</span><strong>Home</strong></a>`}
    </nav>
    <div class="wrap footer-grid">
      <div>
        <p class="footer-brand">Global Group Marriages</p>
        <p>A framework for independent groups to explore love, family and shared life.</p>
        <a href="${rootPath}prospectus.html">Read Luke's prospectus</a>
      </div>
${sectionLinks}
    </div>
    <div class="wrap footer-bottom">
      <span>Concept by Luke Nathan Hayes / Aura of Intelligence</span>
      <a class="back-to-top" href="#site-top">Back to top</a>
    </div>
  </footer>
  <a class="floating-top" href="#site-top" hidden><span aria-hidden="true">↑</span> Back to top</a>`;
}

function renderPage(page) {
  const heroImage = page.heroImage ?? `hero-${page.slug}.webp`;
  const route = `${page.slug}.html`;

  return `<!doctype html>
<html lang="en-AU" id="site-top">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#151532">
  <meta name="description" content="${page.description}">
  <link rel="canonical" href="https://globalgroupmarriages.com/${page.slug}.html">
  <meta property="og:title" content="${page.title} | Global Group Marriages">
  <meta property="og:description" content="${page.description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://globalgroupmarriages.com/${page.slug}.html">
  <meta property="og:image" content="https://globalgroupmarriages.com/assets/images/${heroImage}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title} | Global Group Marriages">
  <meta name="twitter:description" content="${page.description}">
  <meta name="twitter:image" content="https://globalgroupmarriages.com/assets/images/${heroImage}">
  <title>${page.title} | Global Group Marriages</title>
  <link rel="icon" href="assets/favicon.ico" sizes="any">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32.png">
  <link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
  <link rel="stylesheet" href="assets/styles.css?v=${assetVersion}">
  ${page.script ? `<script src="${page.script}?v=${assetVersion}" defer></script>` : ''}
  <script src="assets/site.js?v=${assetVersion}" defer></script>
</head>
<body class="page-${page.slug}">
  <a class="skip-link" href="#main-content">Skip to content</a>
${renderHeader(route, '')}
  <main id="main-content">
    <section class="page-hero" aria-labelledby="page-title">
      <img class="page-hero-image" src="assets/images/${heroImage}" alt="${page.heroAlt}" fetchpriority="high" decoding="async">
      <div class="hero-shade"></div>
      <div class="wrap page-hero-content">
        <h1 id="page-title">${page.heading}</h1>
        <p>${page.lead}</p>
      </div>
      <p class="concept-art-note">${page.imageNote ?? 'Concept artwork'}</p>
    </section>
    ${page.body}
  </main>
${renderFooter(route, '')}
</body>
</html>
`;
}

const countryStatusIcons = new Map([
  ['Adult status', 'agreements'],
  ['Children', 'households'],
  ['Migration', 'atlas'],
]);

function renderCountryPage(country) {
  const route = `countries/${country.slug}.html`;
  const statusCards = country.statuses
    .map(([label, value]) => {
      const icon = countryStatusIcons.get(label) ?? 'documents';
      return `<article><div class="country-status-heading"><img src="../assets/images/icons/${icon}.webp" alt="" loading="lazy" decoding="async" width="160" height="160"><span>${label}</span></div><p>${value}</p></article>`;
    })
    .join('\n');
  const sections = country.sections
    .map((section) => `<section class="country-section"><h2>${section.title}</h2><div class="country-prose">${section.html}</div></section>`)
    .join('\n');
  const buildingBlocks = country.buildingBlocks
    .map((item) => `<li>${item}</li>`)
    .join('\n');
  const gaps = country.gaps
    .map((item) => `<li>${item}</li>`)
    .join('\n');
  const sources = country.sources
    .map(([label, url]) => `<li><a href="${url}">${label}</a></li>`)
    .join('\n');

  return `<!doctype html>
<html lang="en-AU" id="site-top">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#151532">
  <meta name="robots" content="noindex, follow">
  <meta name="description" content="${country.snapshot}">
  <link rel="canonical" href="https://globalgroupmarriages.com/countries/${country.slug}.html">
  <title>${country.name} | World Law Atlas | Global Group Marriages</title>
  <meta property="og:title" content="${country.name} | World Law Atlas">
  <meta property="og:description" content="${country.snapshot}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://globalgroupmarriages.com/countries/${country.slug}.html">
  <meta property="og:image" content="https://globalgroupmarriages.com/assets/images/hero-country-${country.slug}.webp">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${country.name} | World Law Atlas">
  <meta name="twitter:description" content="${country.snapshot}">
  <meta name="twitter:image" content="https://globalgroupmarriages.com/assets/images/hero-country-${country.slug}.webp">
  <link rel="icon" href="../assets/favicon.ico" sizes="any">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/favicon-32.png">
  <link rel="apple-touch-icon" href="../assets/apple-touch-icon.png">
  <link rel="stylesheet" href="../assets/styles.css?v=${assetVersion}">
  <script src="../assets/site.js?v=${assetVersion}" defer></script>
</head>
<body class="country-page country-${country.slug}">
  <a class="skip-link" href="#main-content">Skip to content</a>
${renderHeader(route, '../')}
  <main id="main-content">
    <section class="page-hero country-hero" aria-labelledby="country-title">
      <img class="page-hero-image" src="../assets/images/hero-country-${country.slug}.webp" alt="${country.heroAlt}" fetchpriority="high" decoding="async">
      <div class="hero-shade"></div>
      <div class="wrap page-hero-content">
        <p class="country-region">${country.region}</p>
        <h1 id="country-title">${country.name}</h1>
        <p>${country.snapshot}</p>
      </div>
      <p class="concept-art-note">Concept artwork</p>
    </section>

    <section class="content-section section-cream">
      <div class="wrap country-meta">
        <span class="evidence-label">Documented reality</span>
        <p><strong>Sources checked:</strong> ${country.checked}</p>
        <p>Public legal information, not personal legal advice. Local facts and current law need professional verification before action.</p>
      </div>
      <div class="wrap country-status-grid">${statusCards}</div>
    </section>

    <div class="content-section section-sand">
      <article class="wrap country-article">
        ${sections}
      </article>
    </div>

    <section class="content-section section-indigo">
      <div class="wrap country-two-column">
        <div>
          <h2>Present building blocks</h2>
          <p>These are pathways to investigate with lawyers and other local specialists. They do not add up automatically to group marriage.</p>
          <ul class="country-list">${buildingBlocks}</ul>
        </div>
        <div>
          <h2>Reform gaps</h2>
          <p>These are the places where present law does not match a chosen multi-adult family.</p>
          <ul class="country-list">${gaps}</ul>
        </div>
      </div>
      <div class="wrap country-planning-visual">
        <figure class="editorial-photo">
          <img src="../assets/images/shared-life.webp" alt="Two women looking over a map at a kitchen table." loading="lazy" decoding="async" width="756" height="500">
          <figcaption>Concept artwork. <a href="../household-lab.html">Use the Household Lab to work through practical arrangements together.</a></figcaption>
        </figure>
      </div>
    </section>

    <section class="content-section section-cream">
      <div class="wrap country-sources">
        <h2>Official sources</h2>
        <ol>${sources}</ol>
        <div class="next-check"><strong>Next verification step</strong><p>${country.nextCheck}</p></div>
      </div>
    </section>

  </main>
${renderFooter(route, '../')}
</body>
</html>
`;
}

await mkdir(path.join(rootDirectory, 'countries'), { recursive: true });

for (const page of pages) {
  await writeFile(path.join(rootDirectory, `${page.slug}.html`), cleanGeneratedText(renderPage(page)), 'utf8');
}

for (const country of countries) {
  await writeFile(
    path.join(rootDirectory, 'countries', `${country.slug}.html`),
    cleanGeneratedText(renderCountryPage(country)),
    'utf8'
  );
}

for (const [route] of [home, documents, references]) {
  const file = path.join(rootDirectory, route);
  let html = await readFile(file, 'utf8');
  for (const [section, markup] of [['header', renderHeader(route, '')], ['footer', renderFooter(route, '')]]) {
    const start = `  <!-- site-${section}:start -->`;
    const end = `  <!-- site-${section}:end -->`;
    const bounds = new RegExp(`${start}[\\s\\S]*?${end}`);
    if (!bounds.test(html)) throw new Error(`${route} is missing the site-${section} markers.`);
    html = html.replace(bounds, () => `${start}\n${markup}\n${end}`);
  }
  html = html.replace(/(assets\/(?:styles\.css|site\.js))\?v=[\w-]+/g, (_match, asset) => `${asset}?v=${assetVersion}`);
  await writeFile(file, cleanGeneratedText(html), 'utf8');
}

const sitemapEntries = readingOrder.map(([route]) => route === 'index.html' ? '' : route)
  .map((pathname) => `  <url><loc>https://globalgroupmarriages.com/${escapeXml(pathname)}</loc></url>`)
  .join('\n');

await writeFile(
  path.join(rootDirectory, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`,
  'utf8'
);

await writeFile(
  path.join(rootDirectory, 'robots.txt'),
  `User-agent: *
Allow: /
Sitemap: https://globalgroupmarriages.com/sitemap.xml
`,
  'utf8'
);

console.log(`Built ${pages.length} core pages and ${countries.length} country guides.`);
