// How-to guides, in the order a newcomer needs them. Status stays "In the works" until published.
import type { SrcKey } from './sources';

export interface HowTo { n: number; title: string; outcome: string; level: 'Start' | 'Build' | 'Production'; sources: SrcKey[] }

export const HOWTOS: HowTo[] = [
  { n: 1, title: 'Make your first Jev call', outcome: 'An API key, one request with curl, then the same request in Python and JavaScript.', level: 'Start', sources: ['quickstart', 'api'] },
  { n: 2, title: 'Call Jev through Vercel, OpenRouter or Cloudflare', outcome: 'The same question on each gateway, and what changes (Vercel calls the yes/no type “boolean”).', level: 'Start', sources: ['vercel', 'openrouter', 'cloudflare'] },
  { n: 3, title: 'Pick the right question type', outcome: 'Choice for a set of options, Score for a scale, Noul for yes or no, with a test for each.', level: 'Start', sources: ['primitives'] },
  { n: 4, title: 'Write questions Jev answers well', outcome: 'Narrow, one-property questions instead of one broad one, and why that matters.', level: 'Build', sources: ['build', 'jagged'] },
  { n: 5, title: 'Shape the state you send', outcome: 'Only what the decision needs, as structured JSON, with numbers and dates turned into words.', level: 'Build', sources: ['build', 'jagged'] },
  { n: 6, title: 'Set confidence thresholds', outcome: 'Act, ask a stronger model, or ask a person, with thresholds set from your own data.', level: 'Build', sources: ['confidence', 'confRouting'] },
  { n: 7, title: 'Combine answers into one score', outcome: 'Many small questions in one request, weighted in code: the QA scorecard pattern.', level: 'Build', sources: ['composite'] },
  { n: 8, title: 'Test Jev on your own data', outcome: 'A small private evaluation: labels, accuracy, calibration, cost and speed, in an afternoon.', level: 'Production', sources: ['bench', 'confidence'] },
  { n: 9, title: 'Estimate your monthly cost', outcome: 'Tokens per decision times volume, at $0.042 per million input tokens, with output free.', level: 'Production', sources: ['models'] },
  { n: 10, title: 'Replace an LLM classifier with Jev', outcome: 'Run both side by side, compare, then switch, as Vercel and Jack & Jill describe doing.', level: 'Production', sources: ['tc1', 'jackJill'] },
];
