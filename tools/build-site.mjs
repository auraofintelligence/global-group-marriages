import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { countries } from '../content/countries.mjs';

const toolDirectory = path.dirname(fileURLToPath(import.meta.url));
const rootDirectory = path.resolve(toolDirectory, '..');
const cleanGeneratedText = (text) => text.replace(/[ \t]+$/gm, '');

const pages = [
  {
    slug: 'why-now',
    shortTitle: 'Why now',
    title: 'Why family formation feels harder',
    description: 'Current evidence on fertility intentions, cost, housing, work, uncertainty and the search for suitable partners.',
    heading: 'People want families. The systems around them are getting harder to carry.',
    lead: 'The question is not whether family remains possible. It does. The question is whether one inherited structure should carry every hope for love, children, care, housing and security.',
    heroAlt: 'Concept artwork of adults considering family life beside a city, home and changing climate at dawn.',
    body: `
    <section class="content-section section-cream">
      <div class="wrap prose-intro">
        <span class="evidence-label">Documented reality</span>
        <h2>What people say is in the way</h2>
        <p class="large-copy">The desire for children has not simply evaporated. In UNFPA's 2025 survey across 14 countries, nearly one in five reproductive-age adults expected not to have the number of children they wanted.</p>
      </div>
      <div class="wrap barrier-grid">
        <article><h3>Cost and housing</h3><p>People described the cost of parenthood and insecure or unsuitable housing as major barriers to the families they wanted.</p></article>
        <article><h3>Work and time</h3><p>Job insecurity, demanding work and the unequal weight of care make a two-adult household feel brittle before a child arrives.</p></article>
        <article><h3>Finding the right people</h3><p>Lack of a suitable partner is not a side issue. The search often asks one person to match a lifetime of emotional, sexual, practical and parenting needs.</p></article>
        <article><h3>The state of the world</h3><p>War, climate change and wider uncertainty affect how people imagine the future their children would inherit.</p></article>
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
        <h2>Change the load-bearing structure</h2>
        <p class="large-copy">A larger marriage does not remove cost, grief, conflict or uncertainty. It changes how many adults meet them together. More incomes, more carers, more skills and more enduring relationships create a different starting equation.</p>
      </div>
      <div class="wrap statement-panel">
        <p>Global group marriage is an additional framework for people who see strength, love and possibility in a larger family constellation.</p>
        <a class="button button-primary" href="framework.html">See how the framework works</a>
      </div>
    </section>`
  },
  {
    slug: 'framework',
    shortTitle: 'The framework',
    title: 'How global group marriage works',
    description: 'A practical pro-group-marriage framework for sharing love, parenting, money, time, care and risk.',
    heading: 'Add adults, not pressure.',
    lead: 'Global group marriage begins with a simple possibility: three or more adults may choose to understand their relationships as one larger marriage and deliberately build a family around it.',
    heroAlt: 'Concept artwork of several adults weaving colourful fabric together around a household table while children play nearby.',
    body: `
    <section class="content-section section-cream">
      <div class="wrap prose-intro">
        <span class="evidence-label proposal-label">Proposed pathway</span>
        <h2>A marriage is the relationship people practise</h2>
        <p class="large-copy">Law currently recognises different parts of this idea in different places. The lived framework is broader: shared commitment, shared care, shared futures and a household constitution designed by the adults inside it.</p>
      </div>
      <div class="wrap principle-grid">
        <article class="idea-card"><span>01</span><h3>Love is not a ration</h3><p>Affection and intimacy grow through attention, honesty and practice. A larger family does not require every bond to look identical.</p></article>
        <article class="idea-card"><span>02</span><h3>Care has redundancy</h3><p>Illness, newborn nights, paid work, school runs and elder care no longer fall across one narrow bridge.</p></article>
        <article class="idea-card"><span>03</span><h3>Children gain a village at home</h3><p>More committed adults may bring continuity, varied skills, wider culture and more available attention to daily family life.</p></article>
        <article class="idea-card"><span>04</span><h3>Adults remain self-sovereign</h3><p>The group is an agreement among whole people. Individual voice, privacy, property, friendships and freedom of conscience remain real.</p></article>
        <article class="idea-card"><span>05</span><h3>Difference becomes useful</h3><p>One person may love cooking, another numbers, another teaching, another travel. Complementarity becomes household capacity.</p></article>
        <article class="idea-card"><span>06</span><h3>Risk is shared</h3><p>Income loss, injury, exhaustion and change still happen. A larger support network gives the family more ways to adapt.</p></article>
      </div>
    </section>

    <section class="content-section section-indigo">
      <div class="wrap section-heading light-heading">
        <h2>The household is designed in layers</h2>
        <p>Romance is one layer. A durable family also makes the practical layers visible.</p>
      </div>
      <div class="wrap layer-list">
        <article><strong>People</strong><p>Who is part of the marriage, who lives together, and how new relationships join the constellation.</p></article>
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
          <a class="button button-primary" href="constellations.html">Explore relationship constellations</a>
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
          <h3>The shared home circle</h3>
          <p>Several committed adults build one home, share daily care and raise children within the same practical rhythm.</p>
        </article>
        <article class="constellation-card" data-tags="multi-home">
          <h3>The connected households</h3>
          <p>The marriage spans two or more homes. Time, care and resources move between them without treating distance as lesser commitment.</p>
        </article>
        <article class="constellation-card" data-tags="parenting one-home">
          <h3>The co-parenting core</h3>
          <p>Parenthood and stable care form the centre while romantic and sexual bonds have their own negotiated patterns.</p>
        </article>
        <article class="constellation-card" data-tags="global multi-home">
          <h3>The global marriage</h3>
          <p>Partners from different countries build a cross-cultural family, sometimes across borders, languages and seasons.</p>
        </article>
        <article class="constellation-card" data-tags="multi-home parenting">
          <h3>The village network</h3>
          <p>Several nearby homes share meals, childcare, transport, gardens and companionship while preserving domestic space.</p>
        </article>
        <article class="constellation-card" data-tags="global one-home">
          <h3>The cultural garland</h3>
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
    title: 'World Law Atlas',
    description: 'Country-by-country legal starting points for group marriage, cohabitation, property, parenting, migration and care.',
    heading: 'Love crosses borders. Law does not move as easily.',
    lead: 'The World Law Atlas separates adult relationship status, property, parentage, immigration, healthcare and reform. No country fits honestly into one simple legal-or-illegal label.',
    heroAlt: 'Concept artwork of an illuminated world map, civic landscapes and open legal source books.',
    script: 'assets/atlas.js',
    body: `
    <section class="content-section section-cream">
      <div class="wrap prose-intro">
        <span class="evidence-label">Documented reality</span>
        <h2>Six starting points</h2>
        <p class="large-copy">These first guides use official government, legislation and court sources checked on 29 August 2026. They explain the present landscape and the lawful building blocks people may investigate with local professional advice.</p>
      </div>
      <div class="wrap atlas-controls">
        <label for="country-search">Find a country guide</label>
        <input id="country-search" type="search" placeholder="Search country or legal feature" autocomplete="off" data-country-search>
        <div class="filter-buttons" data-atlas-filters>
          <button class="filter-button is-active" type="button" data-atlas-filter="all">All guides</button>
          <button class="filter-button" type="button" data-atlas-filter="plural-status">Plural status</button>
          <button class="filter-button" type="button" data-atlas-filter="multi-parent">Multi-parent pathways</button>
          <button class="filter-button" type="button" data-atlas-filter="contracts">Contract building blocks</button>
        </div>
      </div>
      <div class="wrap country-grid" data-country-grid>
        <a class="country-card" href="countries/australia.html" data-tags="australia oceania contracts multi-parent"><img src="assets/images/hero-country-australia.webp" alt="" loading="lazy" decoding="async"><span>Oceania</span><h3>Australia</h3><p>De facto pathways, state-based parentage and a federal marriage framework.</p><strong>Open guide</strong></a>
        <a class="country-card" href="countries/new-zealand.html" data-tags="new zealand oceania contracts"><img src="assets/images/hero-country-new-zealand.webp" alt="" loading="lazy" decoding="async"><span>Oceania</span><h3>New Zealand</h3><p>Dyadic adult status with relationship-property and care planning questions.</p><strong>Open guide</strong></a>
        <a class="country-card" href="countries/canada.html" data-tags="canada north america contracts multi-parent"><img src="assets/images/hero-country-canada.webp" alt="" loading="lazy" decoding="async"><span>North America</span><h3>Canada</h3><p>Federal criminal law, provincial family law and emerging multi-parent decisions.</p><strong>Open guide</strong></a>
        <a class="country-card" href="countries/united-states.html" data-tags="united states north america contracts multi-parent plural-status"><img src="assets/images/hero-country-united-states.webp" alt="" loading="lazy" decoding="async"><span>North America</span><h3>United States</h3><p>State-by-state variation, local multi-person registries and limited multi-parent routes.</p><strong>Open guide</strong></a>
        <a class="country-card" href="countries/netherlands.html" data-tags="netherlands europe contracts multi-parent"><img src="assets/images/hero-country-netherlands.webp" alt="" loading="lazy" decoding="async"><span>Europe</span><h3>Netherlands</h3><p>Dyadic status with active 2026 work towards three- and four-parent recognition.</p><strong>Open guide</strong></a>
        <a class="country-card" href="countries/south-africa.html" data-tags="south africa contracts multi-parent plural-status"><img src="assets/images/hero-country-south-africa.webp" alt="" loading="lazy" decoding="async"><span>Africa</span><h3>South Africa</h3><p>Recognised customary polygyny and unusually flexible child-centred mechanisms.</p><strong>Open guide</strong></a>
      </div>
      <p class="wrap no-results" role="status" data-atlas-empty hidden>No current guide matches that search.</p>
    </section>

    <section class="content-section section-indigo">
      <div class="wrap section-heading light-heading">
        <h2>Every guide asks the same questions</h2>
        <p>Consistency makes country differences visible without pretending that private contracts reproduce marriage.</p>
      </div>
      <div class="wrap compact-grid">
        <article><h3>Adult status</h3><p>Marriage, civil union, customary marriage, cohabitation and offence provisions.</p></article>
        <article><h3>Home and resources</h3><p>Property, inheritance, tax, contracts, pensions and what happens on exit.</p></article>
        <article><h3>Children</h3><p>Parentage, parental responsibility, adoption, guardianship and child-centred orders.</p></article>
        <article><h3>Movement and care</h3><p>Immigration sponsorship, healthcare authority and end-of-life decisions.</p></article>
      </div>
    </section>

    <section class="content-section section-sand">
      <div class="wrap source-callout">
        <p><strong>Important:</strong> the atlas is public legal information, not personal legal advice. Law changes, facts matter, and local language may carry meanings an English summary misses. Every guide shows its checked date, official sources, known gaps and next verification step.</p>
      </div>
    </section>`
  },
  {
    slug: 'household-lab',
    shortTitle: 'Household Lab',
    title: 'Private Household Lab',
    description: 'A private browser-based tool for sketching a group-marriage household, care system, decision process and next conversation.',
    heading: 'Design the household before the household designs you.',
    lead: 'Use this private lab to turn a large idea into a first shared sketch. Your answers remain in this browser unless you choose to copy them.',
    heroAlt: 'Concept artwork of adults around a table with notebooks, choice cards and a warm model of a shared home.',
    script: 'assets/lab.js',
    body: `
    <section class="content-section section-cream">
      <div class="wrap lab-layout">
        <form class="household-form" data-household-form>
          <div class="lab-progress" role="progressbar" aria-label="Household sketch progress" aria-valuemin="1" aria-valuemax="4" aria-valuenow="1"><span data-lab-progress>1 of 4</span><div><i data-lab-bar></i></div></div>

          <fieldset class="lab-step is-active" data-lab-step="1">
            <legend>What is the family trying to make possible?</legend>
            <p>Choose the purposes that matter most right now.</p>
            <div class="choice-grid">
              <label><input type="checkbox" name="purpose" value="A loving long-term partnership"> A loving long-term partnership</label>
              <label><input type="checkbox" name="purpose" value="Raising children together"> Raising children together</label>
              <label><input type="checkbox" name="purpose" value="A resilient shared home"> A resilient shared home</label>
              <label><input type="checkbox" name="purpose" value="Cross-cultural family life"> Cross-cultural family life</label>
              <label><input type="checkbox" name="purpose" value="Shared care across generations"> Shared care across generations</label>
              <label><input type="checkbox" name="purpose" value="Creative and spiritual growth"> Creative and spiritual growth</label>
            </div>
          </fieldset>

          <fieldset class="lab-step" data-lab-step="2">
            <legend>What shape are you exploring?</legend>
            <label class="field-label">Number of adult partners <input type="number" name="adults" min="3" max="20" value="4"></label>
            <label class="field-label">Homes
              <select name="homes"><option>One shared home</option><option>Two connected homes</option><option>A local network of homes</option><option>Homes across countries</option><option>Still open</option></select>
            </label>
            <label class="field-label">Children and future children
              <select name="children"><option>Central to the family vision</option><option>Part of the conversation</option><option>Not currently planned</option><option>Already part of the household</option><option>Different adults hold different hopes</option></select>
            </label>
          </fieldset>

          <fieldset class="lab-step" data-lab-step="3">
            <legend>Which practical layers need the first conversation?</legend>
            <div class="choice-grid">
              <label><input type="checkbox" name="layers" value="Time, work and rest"> Time, work and rest</label>
              <label><input type="checkbox" name="layers" value="Money, property and debt"> Money, property and debt</label>
              <label><input type="checkbox" name="layers" value="Parenting and care"> Parenting and care</label>
              <label><input type="checkbox" name="layers" value="Love, intimacy and privacy"> Love, intimacy and privacy</label>
              <label><input type="checkbox" name="layers" value="Decisions and conflict repair"> Decisions and conflict repair</label>
              <label><input type="checkbox" name="layers" value="Law, migration and documents"> Law, migration and documents</label>
            </div>
          </fieldset>

          <fieldset class="lab-step" data-lab-step="4">
            <legend>Write the next honest conversation</legend>
            <label class="field-label">A sentence you want the group to begin with
              <textarea name="conversation" rows="5" placeholder="What would become easier if we designed this as a family rather than a set of separate couples?"></textarea>
            </label>
            <label class="field-label">A principle nobody should lose
              <input type="text" name="principle" placeholder="For example: private time remains real">
            </label>
          </fieldset>

          <div class="lab-actions">
            <button class="button button-outline" type="button" data-lab-back disabled>Back</button>
            <button class="button button-primary" type="button" data-lab-next>Next question</button>
          </div>
        </form>

        <aside class="lab-summary">
          <span class="evidence-label proposal-label">Private local sketch</span>
          <h2 tabindex="-1" data-lab-summary-heading>Your household starting point</h2>
          <div data-lab-output><p>Your choices will form a clear conversation brief here.</p></div>
          <button class="button button-light" type="button" data-lab-copy hidden>Copy as Markdown</button>
          <p class="privacy-note">Nothing is sent anywhere. Refreshing the page clears the sketch.</p>
        </aside>
      </div>
    </section>

    <section class="content-section section-sand">
      <div class="wrap prose-intro">
        <h2>A sketch is an invitation to think together</h2>
        <p class="large-copy">It is not a test, a matching score or an authority over anyone's feelings. The adults involved remain the source of their own choices, and children remain people whose interests deserve direct attention.</p>
      </div>
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
        <p class="large-copy">Self-sovereignty is not isolation. It is the capacity to meet others as a person with a voice, a body, a history, private interior space and real influence over the life being built together.</p>
      </div>
      <div class="wrap principle-grid">
        <article class="idea-card"><span>01</span><h3>Individual voice</h3><p>Each adult speaks for their own desires, boundaries, health, friendships, work and conscience.</p></article>
        <article class="idea-card"><span>02</span><h3>Relational agreements</h3><p>Every bond develops its own language for time, intimacy, disclosure, care and change.</p></article>
        <article class="idea-card"><span>03</span><h3>Household voice</h3><p>Shared decisions include the people who carry their effects, with clear ways to slow down and think again.</p></article>
        <article class="idea-card"><span>04</span><h3>Children as people</h3><p>Children are not relationship glue or future labour. Their safety, attachment, development and emerging voice shape family decisions.</p></article>
        <article class="idea-card"><span>05</span><h3>Real privacy</h3><p>A loving family has shared life and private rooms, conversations, friendships, devices, thoughts and moments of solitude.</p></article>
        <article class="idea-card"><span>06</span><h3>Living consent</h3><p>Consent lives in words, actions, context and the continuing freedom to choose. It is a relationship practice, not a one-time form.</p></article>
      </div>
    </section>

    <section class="content-section section-indigo">
      <div class="wrap split-intro">
        <div><h2>Make power visible enough to work with</h2></div>
        <div class="lead-copy">
          <p>Money, housing, age, health, confidence, migration status, fertility, language and social standing affect how free a choice feels. Intelligent families name those differences and design counterweights.</p>
          <p>Independent money, private support networks, written property interests, separate legal advice and realistic exit plans are not signs of weak love. They make chosen interdependence more truthful.</p>
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
        <div><h2>Change does not erase the family that was real</h2></div>
        <div class="lead-copy">
          <p>A relationship may change form while parenting, friendship, housing, property and care continue. Designing transitions early gives the family more graceful options later.</p>
          <a class="text-link" href="https://auraofintelligence.github.io/grey-area-commons/">Explore the adult-only Grey Area Commons reflection tools</a>
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
    lead: 'These scenes are imagination, not prediction. They bring the proposal down from institutions and diagrams into breakfasts, school runs, bedrooms, budgets and difficult conversations.',
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
          <p>Two adults cook in Brisbane while another joins from Cape Town. The law recognises only part of the relationship, but the children know exactly who will read tonight's chapter. The atlas turns a vague obstacle into a plan for evidence, visits and independent visas.</p>
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
        <div><h2>Tell the life, not just the premise</h2></div>
        <div class="lead-copy">
          <p>Useful stories include delight, boredom, attraction, jealousy, competence, illness, money, travel, culture, children, ageing and repair. They let readers test the idea against lived texture.</p>
          <a class="text-link aqua-link" href="https://auraofintelligence.github.io/australian-sire-story-forge/">Visit the Australian Sire Story Forge</a>
        </div>
      </div>
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
        <article class="lane-card reality-lane"><span class="evidence-label">Documented reality</span><h3>What is evidenced now</h3><p>Official law, government guidance, court decisions, demographic research and clearly sourced history.</p></article>
        <article class="lane-card proposal-lane"><span class="evidence-label proposal-label">Proposed pathway</span><h3>What people could design</h3><p>Household agreements, care systems, policy reform, practical tools and testable social structures.</p></article>
        <article class="lane-card imagination-lane"><span class="evidence-label imagination-label">Fiction and imagination</span><h3>What stretches the mind</h3><p>Stories, simulacra, future institutions and concept artwork that reveal questions before reality answers them.</p></article>
      </div>
    </section>

    <section class="content-section section-indigo">
      <div class="wrap section-heading light-heading">
        <h2>How the atlas is built</h2>
        <p>The method takes inspiration from the Australian Legal Engine and Australian Visa and Activity Atlas, then repeats the source work country by country.</p>
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
        <a href="https://www.un.org/en/about-us/un-charter/full-text"><strong>Charter of the United Nations</strong><span>Purposes and principles used in the U.N. of Love comparison</span></a>
      </div>
    </section>

    <section class="content-section section-cream">
      <div class="wrap source-callout">
        <p><strong>Country-law checkpoint:</strong> initial guides were checked against official sources on 29 August 2026. They are public legal information, not advice for a particular person or household.</p>
      </div>
    </section>`
  },
  {
    slug: 'un-of-love',
    shortTitle: 'U.N. of Love',
    title: 'The U.N. of Love',
    description: 'A specific thought experiment comparing the present United Nations with a cross-cultural love marriage raising children together.',
    heading: 'What if the United Nations were also one marriage?',
    lead: 'Imagine a specific love marriage among beautiful, intelligent, sexually active adult women and men in their prime, drawn from many cultures, making and raising children together.',
    heroAlt: 'Concept artwork of adult women and men from many cultures gathered as one loving family in a circular world pavilion, with no official emblems.',
    body: `
    <section class="content-section section-cream">
      <div class="wrap prose-intro">
        <span class="evidence-label imagination-label">A specific thought experiment</span>
        <h2>Take the metaphor all the way</h2>
        <p class="large-copy">The present United Nations brings states together to maintain peace, develop friendly relations, cooperate on international problems and harmonise action. The U.N. of Love asks what those purposes reveal when the members are not states but spouses sharing bodies, homes, work, culture, sexuality and future generations.</p>
      </div>
      <div class="wrap source-callout">
        <p>The U.N. of Love is not affiliated with the United Nations and is not proposed as its replacement. It is a mind-stretching marriage thought experiment placed beside the wider GAJRA Earth vision.</p>
      </div>
    </section>

    <section class="content-section section-indigo">
      <div class="wrap section-heading light-heading">
        <h2>Two kinds of union</h2>
        <p>The comparison is deliberately exact enough to produce new questions.</p>
      </div>
      <div class="wrap comparison-wrap">
        <table class="comparison-table">
          <thead><tr><th>Present United Nations</th><th>U.N. of Love</th></tr></thead>
          <tbody>
            <tr><td>193 member states</td><td>A specific constellation of self-sovereign adult spouses</td></tr>
            <tr><td>A Charter between nations</td><td>A living marriage covenant between people</td></tr>
            <tr><td>Diplomatic and institutional relationships</td><td>Romantic, sexual, familial, cultural and creative relationships</td></tr>
            <tr><td>International cooperation</td><td>One cross-cultural household cooperating every day</td></tr>
            <tr><td>Peace, security and mediation</td><td>Intimate diplomacy, conflict repair and protection of belonging</td></tr>
            <tr><td>Budgets, agencies and programmes</td><td>Pooled time, care, income, housing, skills and attention</td></tr>
            <tr><td>Future generations as a policy responsibility</td><td>Their own children as loved people present in the room</td></tr>
            <tr><td>Knowledge gathered from institutions</td><td>Collective intelligence grown through shared life</td></tr>
          </tbody>
        </table>
      </div>
      <p class="wrap table-source">Present UN purposes: <a href="https://www.un.org/en/about-us/un-charter/full-text">Charter of the United Nations, Article 1</a>. Membership figure: <a href="https://www.un.org/en/about-us/membership-of-principal-un-organs">United Nations membership of principal organs</a>.</p>
    </section>

    <section class="content-section section-sand">
      <div class="wrap prose-intro">
        <h2>The organs of an intimate union</h2>
        <p class="large-copy">Not departments imposed on love, but useful names for capacities the family practises.</p>
      </div>
      <div class="wrap organ-grid">
        <article><h3>Family Assembly</h3><p>Every adult voice and the age-appropriate voices of children enter the shared picture.</p></article>
        <article><h3>Council of Care</h3><p>Health, rest, parenting, meals, home-making, elder care and emotional load become visible work.</p></article>
        <article><h3>Household Economy</h3><p>Money, property, paid work, education, risk and abundance are coordinated without erasing personal resources.</p></article>
        <article><h3>Cultural Circle</h3><p>Languages, food, stories, rituals and places of origin meet without one culture becoming the default world.</p></article>
        <article><h3>Future Generations Council</h3><p>Pregnancy, birth, children, education and the world they inherit receive direct long-term attention.</p></article>
        <article><h3>Chamber of Repair</h3><p>Conflict is translated, responsibility is named and relationships receive time to change course.</p></article>
      </div>
    </section>

    <section class="content-section section-cream">
      <div class="wrap split-intro">
        <div><h2>A day changes the comparison</h2></div>
        <div class="lead-copy">
          <p>The present UN may negotiate food systems. The marriage grows food, cooks dinner and notices who has not eaten.</p>
          <p>The present UN debates displacement. The marriage feels borders when a spouse cannot travel home.</p>
          <p>The present UN speaks for future generations. The marriage wakes at 2 am with one of them.</p>
          <p>The present UN convenes cultures. The marriage discovers whether several cultures can share one kitchen, calendar, body of rituals and lineage of children.</p>
        </div>
      </div>
    </section>

    <section class="content-section section-indigo">
      <div class="wrap prose-intro">
        <h2>Questions worth carrying out of the experiment</h2>
      </div>
      <div class="wrap question-stack">
        <p>What would diplomacy become if nobody could leave the consequences in another country?</p>
        <p>What would collective intelligence become if it included desire, birth, jealousy, tenderness, sleep and daily care?</p>
        <p>What would peace mean if it had to be practised between breakfast and bedtime?</p>
        <p>What kind of children might grow from a family that treats cultural difference as inherited wealth?</p>
      </div>
      <div class="wrap centred-action"><a class="button button-light" href="gajra-earth.html">Continue into GAJRA Earth</a></div>
    </section>`
  },
  {
    slug: 'gajra-earth',
    shortTitle: 'GAJRA Earth',
    title: 'GAJRA Earth',
    description: 'How Global Group Marriages and the U.N. of Love connect to GAJRA Earth and the wider Aura of Intelligence project constellation.',
    heading: 'A family constellation inside a planetary garland.',
    lead: 'GAJRA Earth imagines joyful responsible abundance: distinct people, cultures, places and intelligences held in relationship without being made the same.',
    heroAlt: 'Concept artwork of a diverse multi-adult family weaving a real flower garland together in a planetary garden at sunrise.',
    body: `
    <section class="content-section section-cream">
      <div class="wrap split-intro">
        <div><h2>The garland holds distinct flowers</h2></div>
        <div class="lead-copy">
          <p>A gajra is made through relationship. Each flower remains itself while the thread creates a larger form. Global group marriage brings that image into the household: many adults, many bonds, one consciously tended family.</p>
          <p>The U.N. of Love stretches the same principle across culture and future generations. GAJRA Earth carries it out to the planetary scale.</p>
        </div>
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
        <article><h3>Joyful</h3><p>Love, sexuality, play, beauty, celebration and curiosity belong in serious thinking about the future.</p></article>
        <article><h3>Responsible</h3><p>Children, care, law, resources, power and long consequences remain part of the same picture.</p></article>
        <article><h3>Abundant</h3><p>Value includes time, knowledge, affection, culture, creativity, nature and relationship, not only money.</p></article>
        <article><h3>Self-sovereign</h3><p>People participate as whole intelligences, with private interiors and real agency inside the shared world.</p></article>
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

function renderPage(page, index) {
  const previous = index > 0 ? pages[index - 1] : null;
  const next = index < pages.length - 1 ? pages[index + 1] : null;
  const previousLink = previous
    ? `<a href="${previous.slug}.html"><span>Previous</span><strong>${previous.shortTitle}</strong></a>`
    : `<a href="index.html"><span>Previous</span><strong>Home</strong></a>`;
  const nextLink = next
    ? `<a class="next-link" href="${next.slug}.html"><span>Next</span><strong>${next.shortTitle}</strong></a>`
    : `<a class="next-link" href="index.html"><span>Next</span><strong>Home</strong></a>`;

  return `<!doctype html>
<html lang="en-AU" data-root="">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#151532">
  <meta name="description" content="${page.description}">
  <link rel="canonical" href="https://auraofintelligence.github.io/global-group-marriages/${page.slug}.html">
  <meta property="og:title" content="${page.title} | Global Group Marriages">
  <meta property="og:description" content="${page.description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://auraofintelligence.github.io/global-group-marriages/${page.slug}.html">
  <meta property="og:image" content="https://auraofintelligence.github.io/global-group-marriages/assets/images/hero-${page.slug}.webp">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title} | Global Group Marriages">
  <meta name="twitter:description" content="${page.description}">
  <meta name="twitter:image" content="https://auraofintelligence.github.io/global-group-marriages/assets/images/hero-${page.slug}.webp">
  <title>${page.title} | Global Group Marriages</title>
  <link rel="icon" href="assets/favicon.ico" sizes="any">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32.png">
  <link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
  <link rel="stylesheet" href="assets/styles.css?v=20260829-royal">
  ${page.script ? `<script src="${page.script}?v=20260829-royal" defer></script>` : ''}
  <script src="assets/site.js?v=20260829-royal" defer></script>
</head>
<body class="page-${page.slug}">
  <a class="skip-link" href="#main-content">Skip to content</a>
  <div data-site-header></div>
  <main id="main-content">
    <section class="page-hero" aria-labelledby="page-title">
      <img class="page-hero-image" src="assets/images/hero-${page.slug}.webp" alt="${page.heroAlt}" fetchpriority="high" decoding="async">
      <div class="hero-shade"></div>
      <div class="wrap page-hero-content">
        <h1 id="page-title">${page.heading}</h1>
        <p>${page.lead}</p>
      </div>
      <p class="concept-art-note">Concept artwork</p>
    </section>
    ${page.body}
    <nav class="page-journey wrap" aria-label="Continue through the site">
      ${previousLink}
      ${nextLink}
    </nav>
  </main>
  <div data-site-footer></div>
</body>
</html>
`;
}

function renderCountryPage(country, index) {
  const previous = countries[index - 1] ?? countries[countries.length - 1];
  const next = countries[index + 1] ?? countries[0];
  const statusCards = country.statuses
    .map(([label, value]) => `<article><span>${label}</span><p>${value}</p></article>`)
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
<html lang="en-AU" data-root="../">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#151532">
  <meta name="description" content="${country.snapshot}">
  <link rel="canonical" href="https://auraofintelligence.github.io/global-group-marriages/countries/${country.slug}.html">
  <title>${country.name} | World Law Atlas | Global Group Marriages</title>
  <meta property="og:title" content="${country.name} | World Law Atlas">
  <meta property="og:description" content="${country.snapshot}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://auraofintelligence.github.io/global-group-marriages/countries/${country.slug}.html">
  <meta property="og:image" content="https://auraofintelligence.github.io/global-group-marriages/assets/images/hero-country-${country.slug}.webp">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${country.name} | World Law Atlas">
  <meta name="twitter:description" content="${country.snapshot}">
  <meta name="twitter:image" content="https://auraofintelligence.github.io/global-group-marriages/assets/images/hero-country-${country.slug}.webp">
  <link rel="icon" href="../assets/favicon.ico" sizes="any">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/favicon-32.png">
  <link rel="apple-touch-icon" href="../assets/apple-touch-icon.png">
  <link rel="stylesheet" href="../assets/styles.css?v=20260829-royal">
  <script src="../assets/site.js?v=20260829-royal" defer></script>
</head>
<body class="country-page country-${country.slug}">
  <a class="skip-link" href="#main-content">Skip to content</a>
  <div data-site-header></div>
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
    </section>

    <section class="content-section section-cream">
      <div class="wrap country-sources">
        <h2>Official sources</h2>
        <ol>${sources}</ol>
        <div class="next-check"><strong>Next verification step</strong><p>${country.nextCheck}</p></div>
      </div>
    </section>

    <nav class="page-journey wrap" aria-label="Continue through country guides">
      <a href="${previous.slug}.html"><span>Previous country</span><strong>${previous.name}</strong></a>
      <a class="next-link" href="${next.slug}.html"><span>Next country</span><strong>${next.name}</strong></a>
    </nav>
  </main>
  <div data-site-footer></div>
</body>
</html>
`;
}

await mkdir(path.join(rootDirectory, 'countries'), { recursive: true });

for (const [index, page] of pages.entries()) {
  await writeFile(path.join(rootDirectory, `${page.slug}.html`), cleanGeneratedText(renderPage(page, index)), 'utf8');
}

for (const [index, country] of countries.entries()) {
  await writeFile(
    path.join(rootDirectory, 'countries', `${country.slug}.html`),
    cleanGeneratedText(renderCountryPage(country, index)),
    'utf8'
  );
}

const sitemapEntries = [
  '',
  ...pages.map((page) => `${page.slug}.html`),
  ...countries.map((country) => `countries/${country.slug}.html`)
]
  .map((pathname) => `  <url><loc>https://auraofintelligence.github.io/global-group-marriages/${escapeXml(pathname)}</loc></url>`)
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
Sitemap: https://auraofintelligence.github.io/global-group-marriages/sitemap.xml
`,
  'utf8'
);

console.log(`Built ${pages.length} core pages and ${countries.length} country guides.`);
