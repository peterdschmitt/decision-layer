// Use cases. Every one starts as "Guide in progress" until we have written it up, and moves to
// "Tested" only after we have run it ourselves (see /tests/). Nothing here is a test result.
import type { SrcKey } from './sources';

export type Fit = 'Strong fit' | 'Test first' | 'Person in the loop';
export type Q = 'Choice' | 'Score' | 'Noul';

export interface UseCase {
  slug: string;
  title: string;
  area: 'Support' | 'Sales' | 'Insurance' | 'Operations' | 'AI engineering' | 'Real time';
  decides: string; // what Jev decides, in one line
  questions: Q[];
  fit: Fit;
  why: string;
  watch: string;
  status: 'Guide in progress' | 'Tested';
  agency?: boolean; // shown on the For agencies page
  sources: SrcKey[];
}

export const USE_CASES: UseCase[] = [
  {
    slug: 'ticket-routing', title: 'Support ticket routing', area: 'Support',
    decides: 'Which team gets the ticket, how urgent it is, how upset the customer sounds.',
    questions: ['Choice', 'Noul', 'Score'], fit: 'Strong fit',
    why: 'Short text, a fixed list of teams, and a cheap mistake: a misrouted ticket gets bounced, not lost. TypeSafe’s own quick start uses this example.',
    watch: 'Send low-confidence tickets to a person. TypeSafe’s routing pattern escalates below 0.5 confidence; set your own line from your data.',
    status: 'Guide in progress', agency: true, sources: ['quickstart', 'routing'],
  },
  {
    slug: 'lead-scoring', title: 'Insurance lead scoring', area: 'Insurance',
    decides: 'How well an inbound lead fits, what they are shopping for, and whether they are ready to talk now.',
    questions: ['Score', 'Choice', 'Noul'], fit: 'Test first',
    why: 'Lead generation is on TypeSafe’s use-case list (scoring against an ideal customer profile and detecting intent). Agencies get many short web forms and call notes, which suits Jev.',
    watch: 'Never score on protected traits. Jev handles raw numbers and dates poorly, so do age, ZIP and renewal-date math in code and give Jev words.',
    status: 'Guide in progress', agency: true, sources: ['useCaseMap', 'jagged'],
  },
  {
    slug: 'claims-intake', title: 'Claims intake triage', area: 'Insurance',
    decides: 'Claim type, how complex it looks, and whether it should go to a senior adjuster for review.',
    questions: ['Choice', 'Score', 'Noul'], fit: 'Person in the loop',
    why: 'TypeSafe lists insurance claims (classifying loss reports and adjuster notes, flagging complexity and fraud indicators, prioritizing for review). We have found no published worked example yet.',
    watch: 'Use it to sort the queue, never to deny or pay a claim. Many states have adopted the NAIC’s model bulletin on insurers’ use of AI; a person makes every decision about a claim.',
    status: 'Guide in progress', agency: true, sources: ['useCaseMap', 'naic'],
  },
  {
    slug: 'call-qa', title: 'Call QA scorecards', area: 'Support',
    decides: 'Did the rep cover each required point: greeting, disclosures, needs questions, next step.',
    questions: ['Noul', 'Score'], fit: 'Test first',
    why: 'A QA rubric is a set of narrow yes/no and 1-to-5 questions, which is exactly how TypeSafe says to build: many small questions in one request, combined in code.',
    watch: 'Long calls hit the 32k-token state limit and Jev gets less accurate on long, noisy input. Score the transcript in sections.',
    status: 'Guide in progress', agency: true, sources: ['composite', 'build', 'models', 'jagged'],
  },
  {
    slug: 'compliance-review', title: 'Marketing compliance checks', area: 'Insurance',
    decides: 'Does this ad, email or script make a claim on your prohibited list, or leave out a required line?',
    questions: ['Noul', 'Choice'], fit: 'Person in the loop',
    why: 'TypeSafe’s list includes detecting missing clauses and prohibited claims. Cheap enough to check every piece of copy, not a sample.',
    watch: 'Jev answers the question you wrote, not the one you meant. Write one question per rule, and keep a compliance person as the final sign-off.',
    status: 'Guide in progress', agency: true, sources: ['useCaseMap', 'jagged'],
  },
  {
    slug: 'email-triage', title: 'Business email triage', area: 'Operations',
    decides: 'What kind of email this is and who should handle it.',
    questions: ['Choice', 'Noul'], fit: 'Strong fit',
    why: 'TechCrunch reports a CTO using Jev to classify business email. Short text and a fixed set of buckets.',
    watch: 'Long threads: pass only the newest message plus a short summary field.',
    status: 'Guide in progress', agency: true, sources: ['tc1'],
  },
  {
    slug: 'guardrails', title: 'Guardrails for AI agents', area: 'AI engineering',
    decides: 'Is this command, tool call or output safe to run, or should it stop for review?',
    questions: ['Noul', 'Choice'], fit: 'Test first',
    why: 'Vercel replaced OpenAI’s Luna with Jev for a command-safety classifier and, per TechCrunch, got results five to 18 times faster with greater accuracy.',
    watch: 'TypeSafe says Jev does not treat adversarial content as hostile by default. Ask about it explicitly.',
    status: 'Guide in progress', sources: ['tc1', 'guardrails', 'jagged'],
  },
  {
    slug: 'model-routing', title: 'Model routing', area: 'AI engineering',
    decides: 'Is this request easy enough for a cheap model, or does it need a stronger one?',
    questions: ['Choice', 'Score'], fit: 'Test first',
    why: 'On TypeSafe’s use-case list. A routing call that costs a fraction of a cent can decide whether to spend dollars on a large model.',
    watch: 'Measure the whole pipeline’s quality, not just the router’s.',
    status: 'Guide in progress', sources: ['useCaseMap'],
  },
  {
    slug: 'reranking', title: 'Re-ranking search results', area: 'AI engineering',
    decides: 'Which of these passages actually answers the question.',
    questions: ['Score', 'Choice'], fit: 'Strong fit',
    why: 'Official cookbook. Choice questions accept up to 255 options, so one call can rank a full results page.',
    watch: 'TypeSafe notes a bias toward the first option in a Choice. Shuffle candidates before asking.',
    status: 'Guide in progress', sources: ['rerank', 'jagged'],
  },
  {
    slug: 'candidate-screening', title: 'Candidate screening', area: 'Operations',
    decides: 'Which applicants make the shortlist for a person to review.',
    questions: ['Score'], fit: 'Person in the loop',
    why: 'TypeSafe’s one published case study: Jack & Jill replaced Gemini 3.1 Flash Lite for first-pass screening; cost per 1,000 candidates fell from $0.755 to $0.092 with similar accuracy.',
    watch: 'That case study is the vendor’s own write-up, and its accuracy gain was not statistically significant. Hiring decisions about people need human review and bias checks.',
    status: 'Guide in progress', sources: ['jackJill'],
  },
  {
    slug: 'moderation', title: 'Content moderation', area: 'Operations',
    decides: 'Allow, warn, send to review, or block.',
    questions: ['Choice', 'Score'], fit: 'Test first',
    why: 'On TypeSafe’s use-case list. One Choice question maps straight onto your moderation actions.',
    watch: 'Adversarial users will probe it. Test with real abuse samples before trusting it.',
    status: 'Guide in progress', sources: ['useCaseMap', 'jagged'],
  },
  {
    slug: 'real-time', title: 'Real-time game and UI decisions', area: 'Real time',
    decides: 'The next move, from a text description of the current state.',
    questions: ['Choice'], fit: 'Test first',
    why: 'TypeSafe’s Doom demo makes about 10 decisions a second; the company quotes 70 to 500 milliseconds end to end.',
    watch: 'Text state only: Jev takes no images. The speed numbers are TypeSafe’s own.',
    status: 'Guide in progress', sources: ['launch'],
  },
];
