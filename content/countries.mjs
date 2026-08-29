export const countries = [
  {
    slug: 'australia',
    name: 'Australia',
    region: 'Oceania',
    checked: '29 August 2026',
    heroAlt: 'Concept artwork of a diverse adult family beside a contemporary Australian coastal home and civic landscape.',
    snapshot: 'Australia does not recognise multi-person civil marriage. Its strongest present building blocks come from overlapping pairwise de facto recognition, property planning, parenting orders and state-based succession and healthcare documents.',
    statuses: [
      ['Adult status', 'Two-person marriage and pairwise de facto relationships'],
      ['Children', 'Additional carers may receive parenting responsibility, but no general multi-parent registration'],
      ['Migration', 'One exclusive spouse or de facto partner route'],
      ['Local variation', 'State and territory law is decisive for succession, adoption, parentage and healthcare']
    ],
    sections: [
      {
        title: 'Marriage and present recognition',
        html: `<p>The federal Marriage Act defines marriage as the union of two people, exclusive of all others. Going through another form or ceremony of marriage while already married is an offence with a maximum penalty of five years.</p><p>An overseas union that is or was polygamous may receive functional recognition for proceedings under the Family Law Act. That gives access to particular remedies. It does not create a generally valid Australian group marriage.</p>`
      },
      {
        title: 'De facto relationships, property and inheritance',
        html: `<p>Federal de facto status remains pairwise, but the Family Law Act expressly allows a de facto relationship to exist while a person is married or in another de facto relationship. A multi-adult family may therefore contain several legally relevant pairwise relationships without becoming one legal group.</p><p>Property adjustment and maintenance may be available relationship by relationship. State succession laws may also recognise more than one surviving spouse, including a married spouse and a qualifying de facto partner. Co-ownership records, wills, binding agreements and beneficiary nominations remain important because there is no single group property pool.</p>`
      },
      {
        title: 'Children and parentage',
        html: `<p>There is no general national route to register three or more parents by agreement. Federal parenting orders may allocate parental responsibility, care and time to additional adults, allowing several people to hold legally supported caring roles.</p><p>Parentage, surrogacy and adoption are state and territory matters. Most current adoption and intended-parent pathways are framed around one person or a two-person couple.</p>`
      },
      {
        title: 'Immigration and healthcare',
        html: `<p>Federal partner migration requires a mutual commitment to life together to the exclusion of all others. There is no group-partner visa. Additional adults need independent migration pathways.</p><p>Healthcare and end-of-life authority are state and territory matters. Formal advance directives, enduring powers and written authority to share medical information are more dependable than assuming each household member has equal standing.</p>`
      }
    ],
    buildingBlocks: [
      'Multi-adult cohabitation without another purported marriage ceremony',
      'Coordinated cohabitation, property and financial agreements with independent advice',
      'Recorded co-ownership shares and clear contribution, departure and sale rules',
      'Wills, testamentary trusts, superannuation and insurance nominations',
      'Parenting orders for additional carers where the facts support them',
      'Advance health directives and carefully coordinated attorneys'
    ],
    gaps: [
      'No prospective multi-person marriage or relationship register',
      'No integrated group property, inheritance or health-authority framework',
      'No general multi-parent or multi-adult adoption status',
      'Partner migration remains exclusive and dyadic',
      'State and territory differences require separate checking'
    ],
    sources: [
      ['Marriage Act 1961', 'https://www.legislation.gov.au/C1961A00012/latest'],
      ['Family Law Act 1975', 'https://www.legislation.gov.au/C2004A00275/latest'],
      ['Family Law Regulations 2024', 'https://www.legislation.gov.au/F2024L01638/latest'],
      ['Queensland Succession Act 1981', 'https://www.legislation.qld.gov.au/view/whole/html/current/act-1981-069'],
      ['NSW Succession Act 2006', 'https://legislation.nsw.gov.au/view/whole/html/inforce/current/act-2006-080'],
      ['Migration Act 1958', 'https://www.legislation.gov.au/C1958A00062/latest'],
      ['Department of Home Affairs partner visa overview', 'https://immi.homeaffairs.gov.au/programs-subsite/Pages/family-migration/about-partner-visas.aspx'],
      ['Queensland Powers of Attorney Act 1998', 'https://www.legislation.qld.gov.au/view/whole/html/current/act-1998-022']
    ],
    nextCheck: 'Build separate state and territory layers for adoption, parentage, succession and healthcare authority.'
  },
  {
    slug: 'new-zealand',
    name: 'New Zealand',
    region: 'Oceania',
    checked: '29 August 2026',
    heroAlt: 'Concept artwork of a multi-adult family between a warm New Zealand home, ocean and green mountain landscape.',
    snapshot: 'New Zealand keeps adult marriage, civil union and de facto status pairwise, yet expressly handles some concurrent partner claims in property and inheritance law.',
    statuses: [
      ['Adult status', 'Two-person marriage, civil union and de facto relationships'],
      ['Children', 'Additional guardians are possible, but parentage remains principally dyadic'],
      ['Migration', 'Only one partner receives relationship-based entry'],
      ['Inheritance', 'Statute expressly handles more than one qualifying surviving partner']
    ],
    sections: [
      {
        title: 'Marriage and present recognition',
        html: `<p>Marriage and civil union are each between two people. Bigamy covers additional marriage and civil-union forms and carries a maximum sentence of seven years in the primary offence.</p><p>The Family Proceedings Act may functionally recognise an overseas union that was polygamous where the parties' domiciles permitted it. That limited recognition does not authorise forming a plural marriage in New Zealand.</p>`
      },
      {
        title: 'Relationships, property and inheritance',
        html: `<p>A de facto relationship is expressly between two people. The Property (Relationships) Act nevertheless contains rules for a marriage or civil union overlapping with a de facto relationship, and for two contemporaneous de facto relationships. Claims remain allocated to the relevant pairwise relationships.</p><p>The Administration Act directly addresses an intestate person leaving several qualifying partners. This is meaningful functional recognition at death, not a prospective group status.</p>`
      },
      {
        title: 'Children and guardianship',
        html: `<p>Assisted-reproduction parentage rules generally recognise a birth mother and one qualifying partner. There is no general pre-conception path for three or more legal parents.</p><p>The Care of Children Act offers a wider practical route: an eligible partner may become an additional guardian and a court may appoint a guardian alongside existing guardians. Several adults may hold guardianship even when they are not all legal parents.</p>`
      },
      {
        title: 'Immigration and healthcare',
        html: `<p>Immigration instructions acknowledge polygamous relationships in limited circumstances but permit only one partner to be included through the relationship route. Other adults need independent eligibility.</p><p>A personal-care and welfare enduring power of attorney normally has one acting individual, with a successor and named people who must be consulted. Property powers may appoint several attorneys.</p>`
      }
    ],
    buildingBlocks: [
      'Multi-adult cohabitation without another marriage or civil-union form',
      'Coordinated contracting-out and property agreements with independent advice',
      'Co-ownership shares, exit rules, wills, trusts and beneficiary nominations',
      'Additional guardianship and parenting orders',
      'Written donor and parenting intentions within the statutory parentage limits',
      'One welfare attorney, a successor and a named consultation circle'
    ],
    gaps: [
      'No multi-person marriage, civil union or prospective relationship register',
      'Concurrent claims remain a set of pairwise property and succession rules',
      'No general multi-parent or multi-adult adoption pathway',
      'Only one partner receives relationship-based immigration entry',
      'Personal-care attorney authority remains centred on one acting person'
    ],
    sources: [
      ['Marriage Act 1955', 'https://www.legislation.govt.nz/act/public/1955/92/en/latest/'],
      ['Civil Union Act 2004', 'https://www.legislation.govt.nz/act/public/2004/102/en/latest/'],
      ['Crimes Act 1961', 'https://www.legislation.govt.nz/act/public/1961/43/en/latest/'],
      ['Property (Relationships) Act 1976', 'https://www.legislation.govt.nz/act/public/1976/166/en/latest/'],
      ['Administration Act 1969', 'https://www.legislation.govt.nz/act/public/1969/52/en/latest/'],
      ['Care of Children Act 2004', 'https://www.legislation.govt.nz/act/public/2004/90/en/latest/'],
      ['Immigration New Zealand partnership guidance', 'https://www.immigration.govt.nz/process-to-apply/once-you-have-a-visa/bringing-family-to-new-zealand/partnership-and-how-to-prove-it/'],
      ['Protection of Personal and Property Rights Act 1988', 'https://www.legislation.govt.nz/act/public/1988/4/en/latest/']
    ],
    nextCheck: 'Add detailed conception, adoption and guardianship pathways, then test how concurrent partner provisions operate in current decisions.'
  },
  {
    slug: 'canada',
    name: 'Canada',
    region: 'North America',
    checked: '29 August 2026',
    heroAlt: 'Concept artwork of a diverse adult family in a timber home beside a Canadian city, lake and northern landscape.',
    snapshot: 'Canada has no multi-person civil marriage and has a criminal formalisation boundary. Provincial family law varies widely, while Ontario and British Columbia contain notable multi-parent pathways.',
    statuses: [
      ['Adult status', 'Two-person civil marriage with a criminal formalisation boundary'],
      ['Children', 'Up to four intended parents in some Ontario pathways and defined three-parent routes in British Columbia'],
      ['Migration', 'One sponsored spouse or partner relationship'],
      ['Local variation', 'Property, succession, healthcare and common-law status differ by province']
    ],
    sections: [
      {
        title: 'Marriage and the formalisation boundary',
        html: `<p>Federal law defines marriage as the lawful union of two people, exclusive of all others. Criminal Code provisions prohibit bigamy and participation in a form of polygamy or a conjugal union with more than one person when a rite, ceremony, contract or consent purports to sanction it.</p><p>A 2011 British Columbia Supreme Court reference interpreted that offence as directed to marriage-like sanctioned unions rather than mere multi-party unmarried cohabitation. It is an important but jurisdictionally limited decision, not a national declaration that every informal arrangement is risk-free.</p>`
      },
      {
        title: 'Property and inheritance',
        html: `<p>Provincial rules differ sharply. British Columbia gives some marriage-like cohabitants spouse status and expressly handles two or more surviving spouses in succession. Ontario's statutory matrimonial-property equalisation remains primarily for married spouses, and common-law partners do not ordinarily receive the married-spouse intestacy share.</p><p>Any multi-adult household needs province-specific advice on whether concurrent common-law relationships are recognised for the particular statute involved.</p>`
      },
      {
        title: 'Multi-parent pathways',
        html: `<p>Ontario has a genuine statutory route for pre-conception agreements involving two or more intended parents, normally up to four parties, plus court pathways for larger intended-parent groups. British Columbia permits defined three-parent structures in particular assisted-conception arrangements.</p><p>These are parentage rules, not group-marriage rules. Timing, conception method, consent and written-agreement requirements are decisive. Joint adoption generally remains limited to one or two applicants.</p>`
      },
      {
        title: 'Immigration and healthcare',
        html: `<p>Federal family sponsorship recognises one spouse, common-law partner or conjugal partner. Several adults cannot be sponsored together as one partner group.</p><p>Healthcare authority is provincial. Ontario uses a ranked substitute-decision hierarchy and allows multiple attorneys. British Columbia representation agreements may also appoint several representatives and allocate authority among them.</p>`
      }
    ],
    buildingBlocks: [
      'Unmarried multi-adult cohabitation kept distinct from a marriage-like rite or contract',
      'Coordinated cohabitation, property, co-ownership and exit agreements',
      'Wills, trusts, retirement and insurance nominations',
      'A co-operative, corporation or trust for housing or a shared project',
      'Ontario or British Columbia multi-parent agreements where the statutory route fits',
      'Representation agreements, powers of attorney and advance-care documents'
    ],
    gaps: [
      'No multi-person civil marriage',
      'The criminal formalisation boundary requires careful local advice',
      'Common-law and property rights vary substantially by province',
      'Advanced multi-parent pathways exist only in particular provinces and circumstances',
      'Immigration recognises only one sponsored partner relationship'
    ],
    sources: [
      ['Civil Marriage Act', 'https://laws-lois.justice.gc.ca/eng/acts/c-31.5/FullText.html'],
      ['Criminal Code section 293', 'https://laws-lois.justice.gc.ca/eng/acts/C-46/section-293.html'],
      ['Reference re Section 293, 2011 BCSC 1588', 'https://www.bccourts.ca/jdb-txt/SC/11/15/2011BCSC1588.htm'],
      ['British Columbia Family Law Act', 'https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/11025_00'],
      ['Ontario Children’s Law Reform Act', 'https://www.ontario.ca/laws/statute/90c12'],
      ['British Columbia Family Law Act parentage provisions', 'https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/11025_03'],
      ['Immigration and Refugee Protection Regulations section 117', 'https://laws-lois.justice.gc.ca/eng/regulations/sor-2002-227/section-117.html'],
      ['Ontario Health Care Consent Act 1996', 'https://www.ontario.ca/laws/statute/96h02']
    ],
    nextCheck: 'Expand to a province-by-province map of common-law status, succession, assisted reproduction, adoption and healthcare representation.'
  },
  {
    slug: 'united-states',
    name: 'United States',
    region: 'North America',
    checked: '29 August 2026',
    heroAlt: 'Concept artwork of a diverse multi-adult family across several American homes, cities and landscapes.',
    snapshot: 'The United States has no single family-law code. Federal recognition and immigration remain dyadic, while state parentage laws and a small number of local multi-person partnership registries create narrow experiments.',
    statuses: [
      ['Adult status', 'Federal recognition is between two individuals; state and local rules vary'],
      ['Local recognition', 'A small number of local bylaws register multi-person domestic partnerships'],
      ['Children', 'Some states allow more than two legal parents in limited child-centred cases'],
      ['Migration', 'No simultaneous group-spouse sponsorship route']
    ],
    sections: [
      {
        title: 'Marriage and jurisdictional variation',
        html: `<p>Federal law defines marriage for federal purposes as a marriage between two individuals and expressly does not require or authorise recognition of marriages between more than two. Marriage licensing, bigamy, domestic partnerships, property, succession and parentage are mainly state matters.</p><p>California is one illustrative jurisdiction: its marriage law is between two people and its bigamy provision applies to a further marriage while a spouse is living. The detail cannot be treated as a national rule.</p>`
      },
      {
        title: 'Local recognition and household property',
        html: `<p>Arlington, Massachusetts, officially registers a domestic partnership of two or more people. This local status is meaningful civic recognition, but it is not marriage and does not create federal or statewide spousal rights.</p><p>Several adults may co-own property or hold interests through an entity. Intestacy and most default survivor rights continue to prioritise legal spouses and relatives, making wills, trusts, beneficiary nominations and clear exit terms central building blocks.</p>`
      },
      {
        title: 'Children and parentage',
        html: `<p>Parentage is state-specific. California permits a court to find more than two legal parents where recognising only two would be detrimental to the child. The route is exceptional and child-centred, not an automatic adult group status.</p><p>Other states recognise different combinations of de facto, intended or multiple parents, while some do not. Every plan needs a separate state analysis.</p>`
      },
      {
        title: 'Immigration and healthcare',
        html: `<p>Federal immigration guidance does not recognise a polygamous marriage for sponsorship, even where it was validly celebrated. There is no group-spouse route and additional adults need independent visa eligibility.</p><p>Healthcare authority is state-specific. Written advance directives, healthcare powers, privacy authorisations and funeral directions are more dependable than assuming the whole household has collective authority.</p>`
      }
    ],
    buildingBlocks: [
      'A shared residence without purporting to create additional legal marriages',
      'Household governance, contribution, exit and dispute agreements',
      'Co-ownership, a partnership or another suitable entity',
      'Wills, trusts and beneficiary designations',
      'State-specific parentage, adoption or guardianship orders where available',
      'Healthcare and financial powers, privacy authorisations and disposition directions'
    ],
    gaps: [
      'No federal or state group-marriage framework',
      'Local multi-person registries have narrow geographic and legal effect',
      'Property, parentage and healthcare rules change across states',
      'No group immigration, federal tax or Social Security status',
      'Default inheritance and decision hierarchies do not map cleanly to a multi-adult family'
    ],
    sources: [
      ['1 USC section 7', 'https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title1-section7&num=0&edition=prelim'],
      ['California Family Code section 300', 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FAM&sectionNum=300.'],
      ['California Penal Code section 281', 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=281.'],
      ['Arlington, Massachusetts Town Bylaws', 'https://www.arlingtonma.gov/town-governance/laws-and-regulations/town-bylaws/title-i-general-government'],
      ['California Civil Code section 682', 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=682.'],
      ['California Family Code section 7612', 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FAM&sectionNum=7612.'],
      ['USCIS Adjudicator’s Field Manual', 'https://www.uscis.gov/sites/default/files/document/policy-manual-afm/afm21-external.pdf'],
      ['California Probate Code section 4671', 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PROB&sectionNum=4671.']
    ],
    nextCheck: 'Create a state and locality map for partnership registration, cohabitation, multi-parent law, property, succession and healthcare authority.'
  },
  {
    slug: 'netherlands',
    name: 'Netherlands',
    region: 'Europe',
    checked: '29 August 2026',
    heroAlt: 'Concept artwork of a multi-adult family beside a warm canal home, bicycles and a contemporary Dutch civic landscape.',
    snapshot: 'Dutch adult relationship status remains strictly dyadic. Notarial cohabitation planning is useful, and active 2026 legislative work may create recognition for three or four legal parents, but it is not law yet.',
    statuses: [
      ['Adult status', 'Two-person marriage or registered partnership'],
      ['Household contracts', 'Notarial cohabitation agreements organise selected private rights'],
      ['Children', 'Two-parent cap today, with active work towards three- and four-parent recognition'],
      ['Migration', 'One spouse, registered partner or exclusive unmarried partner']
    ],
    sections: [
      {
        title: 'Marriage and registered partnership',
        html: `<p>The Civil Code provides that marriage is entered by two people and that a person may be married to only one other person at a time. Registered partnership is also dyadic. The Penal Code criminalises intentionally entering a double marriage.</p><p>There is no multi-person civil marriage or registered partnership status.</p>`
      },
      {
        title: 'Cohabitation, property and inheritance',
        html: `<p>Government guidance recognises marriage, registered partnership, a notarial cohabitation agreement and informal cohabitation as distinct practical forms. A cohabitation agreement may address housing, living costs, accounts, children's costs, separation and survivorship.</p><p>Cohabitants have no automatic community of property. Spouses and registered partners are statutory heirs, while an informal cohabitant needs a will and carefully designed survivorship provisions. A multi-party agreement may organise private duties but does not reproduce group civil status.</p>`
      },
      {
        title: 'Parentage and current reform',
        html: `<p>Current law remains capped at two legal parents and two holders of parental authority. Adoption is by two people jointly or one person under the statutory conditions.</p><p>A 2026 parliamentary motion calls for systems to be prepared for three or four parents and multi-parent legislation is under active development. It should be described as a live reform pathway, not present law.</p>`
      },
      {
        title: 'Immigration and healthcare',
        html: `<p>The partner residence route covers one spouse, registered partner or unmarried partner. The unmarried route requires a lasting and exclusive relationship. There is no group-partner sponsorship route.</p><p>Healthcare representation uses a priority structure and allows a person appointed in writing. A written designation gives a multi-adult household more clarity than relying on competing claims to be a life partner.</p>`
      }
    ],
    buildingBlocks: [
      'Shared residence with a carefully drafted multi-party agreement',
      'Co-ownership and written cost, care, decision and exit arrangements',
      'Wills, survivorship provisions and pension or insurance nominations',
      'A written healthcare representative and advance statement',
      'Practical parenting agreements alongside current dyadic legal status',
      'Ongoing review of the active multi-parent reform programme'
    ],
    gaps: [
      'No group marriage or multi-person registered partnership',
      'Double-marriage offence provisions remain active',
      'Public-law inheritance, pension and immigration effects stay dyadic',
      'No current recognition of more than two legal parents or authority holders',
      'Private contracts cannot reproduce all incidents of marriage'
    ],
    sources: [
      ['Dutch Civil Code Book 1', 'https://wetten.overheid.nl/BWBR0002656/'],
      ['Dutch Penal Code', 'https://wetten.overheid.nl/BWBR0001854/'],
      ['Government guide to marriage, partnership and cohabitation', 'https://www.government.nl/themes/family-health-and-care/marriage-cohabitation-agreement-civil-partnership/marriage-civil-partnership-and-cohabitation-agreements'],
      ['Government guide to cohabitation agreements', 'https://www.government.nl/faq/entering-into-a-cohabitation-agreement'],
      ['Dutch Civil Code Book 4', 'https://wetten.overheid.nl/BWBR0002761/'],
      ['Parliamentary motion on three- and four-parent systems', 'https://www.tweedekamer.nl/kamerstukken/moties/detail?did=2026D25122&id=2026Z11087'],
      ['IND residence permit for partner', 'https://ind.nl/en/residence-permits/family-and-partner/residence-permit-for-partner'],
      ['Dutch Civil Code Book 7', 'https://wetten.overheid.nl/BWBR0005290/']
    ],
    nextCheck: 'Track the multi-parent bill from proposal through parliamentary text, commencement rules and system implementation.'
  },
  {
    slug: 'south-africa',
    name: 'South Africa',
    region: 'Africa',
    checked: '29 August 2026',
    heroAlt: 'Concept artwork of a multi-generational adult family in a South African courtyard with city, coast and highveld landscapes.',
    snapshot: 'South Africa recognises valid customary polygynous marriages and separately offers unusually flexible child-centred care and adoption mechanisms. This is not a general multi-adult civil marriage.',
    statuses: [
      ['Adult status', 'Civil marriage and union are dyadic; customary law recognises polygyny'],
      ['Gender structure', 'Present plural-marriage recognition is asymmetrical and does not recognise polyandry'],
      ['Children', 'Several adults may hold responsibilities and a permanent family unit may apply to adopt'],
      ['Migration', 'Customary spouses are included in the statutory spouse definition, with practical questions still to verify']
    ],
    sections: [
      {
        title: 'Marriage and customary recognition',
        html: `<p>South Africa has civil marriages, customary marriages and civil unions. Civil union is an exclusive union of two people. The Recognition of Customary Marriages Act recognises valid customary marriages, including polygynous marriages, where adult consent and customary requirements are met.</p><p>A husband seeking a further customary marriage must apply to court for approval of a written property contract, join existing spouses and protect their interests. This is not one group civil marriage. Current recognition is culturally specific and gender-asymmetrical.</p>`
      },
      {
        title: 'Cohabitation, property and inheritance',
        html: `<p>There is no complete general domestic-partnership system for cohabitants. Targeted 2023 amendments extended intestate-succession and maintenance protection to a partner in a permanent life partnership with reciprocal duties of support.</p><p>The enacted language and originating case are dyadic, so simultaneous claims by several life partners remain uncertain in the official material reviewed. Outside customary-marriage protections, contracts, title records, wills, trusts and nominations matter greatly.</p>`
      },
      {
        title: 'Children, care and adoption',
        html: `<p>The Children's Act expressly allows more than one person to hold parental responsibilities and rights for the same child. Interested people may seek care, contact or guardianship, and agreements may confer specified responsibilities where registered or made a court order.</p><p>Adoption may be sought by spouses, permanent domestic life partners, or other people sharing a household and forming a permanent family unit. The wording does not state a two-applicant cap, but every case remains subject to assessment, eligibility and the child's best interests. It is a plausible route, not a guaranteed group adoption.</p>`
      },
      {
        title: 'Immigration and healthcare',
        html: `<p>Immigration law includes a valid customary-marriage party within the spouse definition. The official sources reviewed do not clearly resolve concurrent applications involving several customary spouses, so that practical question needs confirmation with current specialist guidance.</p><p>The National Health Act prioritises a person mandated in writing before default spouse, partner and family categories. A written mandate gives clearer authority than relying on a hierarchy that does not explain competing same-level claimants.</p>`
      }
    ],
    buildingBlocks: [
      'Valid customary marriages formed and managed under the Recognition of Customary Marriages Act',
      'Court-approved property arrangements protecting existing customary spouses',
      'Multi-adult household governance, co-ownership, wills, trusts and nominations',
      'Children’s Act agreements or orders for care, contact, guardianship and responsibilities',
      'Adoption assessment as a permanent family unit where the facts support it',
      'Written healthcare mandates'
    ],
    gaps: [
      'No general multi-adult civil union or domestic-partnership framework',
      'Gender asymmetry between recognised customary polygyny and unrecognised polyandry',
      'Uncertain treatment of several permanent life partners in default succession and care rules',
      'The unmarried immigration route remains exclusive and dyadic',
      'The proposed unified Marriage Bill is not current law'
    ],
    sources: [
      ['South African Government marriage services', 'https://www.gov.za/services/services-residents/relationships/getting-married'],
      ['Civil Union Act 17 of 2006', 'https://www.gov.za/sites/default/files/gcis_document/201409/a17-061.pdf'],
      ['Recognition of Customary Marriages Act 120 of 1998', 'https://www.justice.gov.za/legislation/acts/1998-120.pdf'],
      ['White Paper on Marriages in South Africa', 'https://www.dha.gov.za/images/PDFs/White-Paper-on-Marriage-in-SA-5-May2022.pdf'],
      ['Judicial Matters Amendment Act 15 of 2023', 'https://www.justice.gov.za/legislation/acts/2023-015-Judicial-Matters-Amendment-Act.pdf'],
      ['Children’s Act 38 of 2005', 'https://www.justice.gov.za/legislation/acts/2005-038%20childrensact.pdf'],
      ['Immigration Act 13 of 2002', 'https://www.dha.gov.za/images/PDFs/IMMIGRATION-ACT-2002---UPDATED-2015.pdf'],
      ['National Health Act 61 of 2003', 'https://www.gov.za/sites/default/files/gcis_document/201409/a61-03.pdf']
    ],
    nextCheck: 'Confirm current Home Affairs practice for multiple valid customary spouses and track the Marriage Bill beyond introduction.'
  },
];
