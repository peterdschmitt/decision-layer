// Site-wide settings. Placeholders in [BRACKETS] still need Peter's input.
export const SITE = {
  name: 'Decision Layer',
  publisher: 'Conversely',
  services: 'performance services',
  tagline: 'The independent field guide to Jev: what it is good at, where it breaks, and how to put it to work.',
  byline: 'The Decision Layer desk', // [BYLINE: Peter to confirm the author name]
  email: 'info@converselyai.com',
};

export const UNOFFICIAL = 'Decision Layer is independent. It is not affiliated with, sponsored by or endorsed by TypeSafe AI. Jev is a product of TypeSafe AI.';

export const DISCLOSURE_LINE = `Published by ${SITE.publisher}, which provides ${SITE.services} to insurance agencies. We are not paid by any vendor we review. [CONFIRM: Conversely has no commercial relationship with TypeSafe AI or its competitors.]`;

// The blog and the podcast lead. Use cases, how-tos and the glossary sit under Guides.
export const NAV = [
  { href: '/blog/', label: 'Blog' },
  { href: '/podcast/', label: 'Podcast' },
  { href: '/guides/', label: 'Guides', also: ['/use-cases/', '/how-to/', '/glossary/', '/start/'] },
  { href: '/tests/', label: 'Tests' },
  { href: '/about/', label: 'About' },
];

export const PODCAST = {
  title: 'Decision Layer',
  tagline: 'Short, sourced episodes on Jev: what it decides well, where it breaks, and how to put it to work.',
  category: 'Technology',
};

// Cornerstone posts planned in the content strategy (section 7, step 3). Shown as "in the works" until written.
export const PLANNED = [
  { title: 'What Jev is, and what it isn’t', dek: 'A plain-English guide to “decision models” and why they are not small chatbots.', kind: 'Explainer', minutes: 9 },
  { title: 'Jev vs an LLM vs a classifier', dek: 'When to use which, with the cost of a million decisions a month.', kind: 'Comparison', minutes: 12 },
  { title: 'Your first Jev call: routing support tickets', dek: 'Python and JavaScript, from API key to a working router.', kind: 'How-to', minutes: 10 },
  { title: 'Confidence thresholds, explained', dek: 'When to let Jev act on its own and when to send it to a person.', kind: 'How-to', minutes: 8 },
  { title: 'Scoring insurance leads with Jev', dek: 'A worked example with synthetic data, code and results.', kind: 'Worked example', minutes: 14 },
];

export const ROLES = [
  { key: 'manager', label: 'I run a team', blurb: 'Support, sales or operations. You want to know what Jev can decide for you and what it costs.' },
  { key: 'developer', label: 'I write code', blurb: 'You want working requests, patterns that hold up, and honest test numbers.' },
  { key: 'agency', label: 'I run an insurance agency', blurb: 'Leads, calls, service tickets and claims intake, with a person in the loop.' },
];
