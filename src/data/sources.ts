// Every source the site cites, in one place. `grade` says what kind of evidence it is.
export type Grade = 'Regulator' | 'Official docs' | 'Vendor claim' | 'Vendor case study' | 'Independent reporting' | 'Our test';

export const SRC = {
  intro: { title: 'TypeSafe docs: Introduction', url: 'https://docs.typesafe.ai/introduction', grade: 'Official docs' },
  quickstart: { title: 'TypeSafe docs: Quick start', url: 'https://docs.typesafe.ai/introduction/quickstart.md', grade: 'Official docs' },
  models: { title: 'TypeSafe docs: Models (pricing, limits)', url: 'https://docs.typesafe.ai/models.md', grade: 'Official docs' },
  api: { title: 'TypeSafe docs: API reference', url: 'https://docs.typesafe.ai/api.md', grade: 'Official docs' },
  primitives: { title: 'TypeSafe docs: Primitives (questions)', url: 'https://docs.typesafe.ai/primitives.md', grade: 'Official docs' },
  confidence: { title: 'TypeSafe docs: Confidence', url: 'https://docs.typesafe.ai/confidence.md', grade: 'Official docs' },
  build: { title: 'TypeSafe docs: How to build with System One', url: 'https://docs.typesafe.ai/concepts/how-to-build-with-system-one.md', grade: 'Official docs' },
  useCaseMap: { title: 'TypeSafe docs: Example use cases', url: 'https://docs.typesafe.ai/concepts/use-case-map.md', grade: 'Official docs' },
  jagged: { title: 'TypeSafe docs: Jev 1.13 jaggedness', url: 'https://docs.typesafe.ai/model-jaggedness/jev-1.13.md', grade: 'Official docs' },
  routing: { title: 'TypeSafe docs: Intent routing pattern', url: 'https://docs.typesafe.ai/patterns/intent-routing.md', grade: 'Official docs' },
  confRouting: { title: 'TypeSafe docs: Confidence-gated routing', url: 'https://docs.typesafe.ai/patterns/confidence-routing.md', grade: 'Official docs' },
  composite: { title: 'TypeSafe docs: Composite scoring', url: 'https://docs.typesafe.ai/patterns/composite-scoring.md', grade: 'Official docs' },
  fanout: { title: 'TypeSafe docs: Speculative fan-out', url: 'https://docs.typesafe.ai/patterns/fan-out.md', grade: 'Official docs' },
  cookbooks: { title: 'TypeSafe docs: Cookbooks', url: 'https://docs.typesafe.ai/cookbooks.md', grade: 'Official docs' },
  rerank: { title: 'TypeSafe cookbook: Re-ranking', url: 'https://docs.typesafe.ai/cookbooks/rerank_typesafe.md', grade: 'Official docs' },
  guardrails: { title: 'TypeSafe cookbook: Guardrails for LLMs', url: 'https://docs.typesafe.ai/cookbooks/llm_guardrails.md', grade: 'Official docs' },
  launch: { title: 'TypeSafe: Introducing System One Models & Jev', url: 'https://typesafe.ai/blog/introducing-system-one-models-and-jev', grade: 'Vendor claim' },
  home: { title: 'TypeSafe AI homepage', url: 'https://typesafe.ai', grade: 'Vendor claim' },
  enterprise: { title: 'TypeSafe AI: Enterprise', url: 'https://typesafe.ai/enterprise', grade: 'Vendor claim' },
  jackJill: { title: 'TypeSafe: How Jack & Jill Cut Candidate Screening Costs By 88% With Jev', url: 'https://typesafe.ai/blog/jack-jill-jev-case-study', grade: 'Vendor case study' },
  bench: { title: 'TypeSafe: Lies, Damned Lies, and Benchmarks', url: 'https://typesafe.ai/blog/antibenchmaxxing', grade: 'Vendor claim' },
  vercel: { title: 'Vercel changelog: AI Gateway supports TypeSafe clients and an HTTP API for Jev', url: 'https://vercel.com/changelog/ai-gateway-now-supports-typesafe-clients-and-an-http-api-for-jev', grade: 'Official docs' },
  openrouter: { title: 'OpenRouter: TypeSafe Jev 1.13', url: 'https://openrouter.ai/typesafe/jev-1.13', grade: 'Official docs' },
  cloudflare: { title: 'Cloudflare Workers AI: typesafe/jev', url: 'https://developers.cloudflare.com/ai/models/typesafe/jev/', grade: 'Official docs' },
  tc1: { title: 'TechCrunch: A new kind of AI model from a ChatGPT inventor is thrilling developers (Sep 18, 2026)', url: 'https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/', grade: 'Independent reporting' },
  tc2: { title: 'TechCrunch: OpenAI’s Jev clone could help the frontier lab stop its swarming agents (Sep 30, 2026)', url: 'https://techcrunch.com/2026/09/30/openais-jev-clone-could-help-the-frontier-lab-stop-its-swarming-agents/', grade: 'Independent reporting' },
  reg1: { title: 'The Register: TypeSafe AI debuts model for machines that plays Doom (Sep 16, 2026)', url: 'https://www.theregister.com/a/5296711', grade: 'Independent reporting' },
  tns: { title: 'The New Stack: TypeSafe launched Jev because sequential LLMs are ‘totally useless for computers’', url: 'https://thenewstack.io/typesafe-jev-system-one/', grade: 'Independent reporting' },
  sa: { title: 'SiliconANGLE: Jev creator TypeSafe closes $870M round at $7.5B valuation (Oct 9, 2026)', url: 'https://siliconangle.com/2026/10/09/jev-creator-typesafe-closes-870m-round-at-7-5b-valuation/', grade: 'Independent reporting' },
  naic: { title: 'NAIC: Adoption map for the Model Bulletin on the Use of AI Systems by Insurers', url: 'https://content.naic.org/sites/default/files/legal-adoption-map-ai-model-bulletin.pdf', grade: 'Regulator' },
} as const satisfies Record<string, { title: string; url: string; grade: Grade }>;

export type SrcKey = keyof typeof SRC;
