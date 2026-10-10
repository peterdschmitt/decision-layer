// Static search index for the header search, built at deploy time.
import { getCollection } from 'astro:content';
import { USE_CASES } from '../data/usecases';
import { HOWTOS } from '../data/howtos';
import { TERMS } from '../data/glossary';

const plain = (s = '') => s.replace(/<[^>]+>/g, ' ').replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[#*_`>|]/g, ' ').replace(/\s+/g, ' ').trim();

const PAGES = [
  { t: 'Start here', u: '/start/', d: 'Three paths into Jev: for team leads, developers and insurance agencies.' },
  { t: 'Use cases', u: '/use-cases/', d: 'What Jev can decide, with fit ratings, cautions and sources.' },
  { t: 'How-tos', u: '/how-to/', d: 'From first API call to production: gateways, question types, state, thresholds, testing and cost.' },
  { t: 'Tests', u: '/tests/', d: 'How we test Jev: data, baseline, accuracy, calibration, speed, cost, version and code.' },
  { t: 'For insurance agencies', u: '/for-agencies/', d: 'Lead scoring, routing, QA scorecards, compliance checks and claims intake, with a person in the loop.' },
  { t: 'Glossary', u: '/glossary/', d: 'Plain-English definitions of Jev and System One terms.' },
  { t: 'Methodology and disclosures', u: '/methodology/', d: 'How we source, label vendor claims, test, stay independent of TypeSafe AI, and log corrections.' },
  { t: 'About', u: '/about/', d: 'Why Decision Layer exists and who publishes it.' },
];

export async function GET() {
  const posts = await getCollection('posts', (p) => !p.data.draft);
  const items = [
    ...posts.map((p) => ({ s: `Blog · ${p.data.kind}`, t: p.data.title, u: `/blog/${p.id}/`, d: p.data.dek, x: plain([p.data.summary.join(' '), p.body].join(' ')) })),
    ...USE_CASES.map((u) => ({ s: `Use case · ${u.area}`, t: u.title, u: `/use-cases/#${u.slug}`, d: u.decides, x: [u.why, u.watch, u.questions.join(' '), u.fit].join(' ') })),
    ...HOWTOS.map((h) => ({ s: `How-to · ${h.level}`, t: h.title, u: '/how-to/', d: h.outcome, x: '' })),
    ...TERMS.map((t) => ({ s: 'Glossary', t: t.term, u: `/glossary/#${t.id}`, d: t.def, x: '' })),
    ...PAGES.map((p) => ({ s: 'Page', t: p.t, u: p.u, d: p.d, x: '' })),
  ];
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json' } });
}
