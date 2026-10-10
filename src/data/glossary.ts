// Plain-English definitions of the terms TypeSafe uses. Each cites where the term is defined.
import type { SrcKey } from './sources';

export interface Term { term: string; id: string; def: string; source: SrcKey }

export const TERMS: Term[] = [
  { term: 'Jev', id: 'jev', def: 'TypeSafe AI’s first “System One” model, launched in early access in September 2026. It answers typed questions about a piece of state and returns structured answers with probabilities. It does not write text.', source: 'intro' },
  { term: 'System One model', id: 'system-one', def: 'TypeSafe’s name for models built for fast, structured decisions rather than long reasoning or writing. The name borrows Daniel Kahneman’s “System 1”, fast thinking.', source: 'launch' },
  { term: 'State', id: 'state', def: 'The input Jev judges: a ticket, an email, a transcript, a JSON object or an array of text. Text only; no images, audio or video.', source: 'build' },
  { term: 'Question', id: 'question', def: 'One typed thing you want decided about the state. You send many at once, each with an ID you choose, and they are answered in parallel and in isolation.', source: 'primitives' },
  { term: 'Choice', id: 'choice', def: 'A question whose answer is one of a set of options with no order between them, such as which team gets a ticket. Returns the pick, a probability for every option, and a confidence.', source: 'primitives' },
  { term: 'Score', id: 'score', def: 'A question whose answer sits on a scale you describe level by level, such as how frustrated a customer sounds. Returns a position on the scale (it can fall between levels), the probabilities and a confidence.', source: 'primitives' },
  { term: 'Noul', id: 'noul', def: 'TypeSafe’s yes/no question. Returns one number from 0 to 1: the probability the answer is yes. Vercel’s gateway calls this type “boolean”.', source: 'primitives' },
  { term: 'Confidence', id: 'confidence', def: 'A 0-to-1 summary of how concentrated a Choice or Score answer’s probabilities are: 1 when all the probability sits on one answer, 0 when it is spread evenly. TypeSafe does not claim it equals real-world accuracy.', source: 'confidence' },
  { term: 'Confidence-gated routing', id: 'confidence-routing', def: 'Letting code act on confident answers and sending unsure ones to a person or a stronger model.', source: 'confRouting' },
  { term: 'Composite scoring', id: 'composite', def: 'Asking several narrow questions at once and combining the answers in code, for example with weights, instead of asking one broad question.', source: 'composite' },
  { term: 'Speculative fan-out', id: 'fan-out', def: 'Asking questions you may or may not need in the same request, because extra questions run in parallel and add little time.', source: 'fanout' },
  { term: 'RLCD', id: 'rlcd', def: 'Reinforcement Learning for Calibrated Decisions, TypeSafe’s name for how Jev is trained. It aims for honest probabilities rather than fluent text.', source: 'launch' },
  { term: 'Jaggedness', id: 'jaggedness', def: 'TypeSafe’s page listing where the current Jev version is weak: counting, raw numbers, dates, long noisy state, double negatives, option order and adversarial input.', source: 'jagged' },
  { term: 'jev-latest', id: 'jev-latest', def: 'The model alias most code uses. As of October 2026 it points to jev-1.13.0, priced at $0.042 per million input tokens with free output.', source: 'models' },
];
