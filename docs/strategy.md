# Jev: Landscape and Content Strategy

*Prepared 2026-10-10 for Peter. Step 1 of 5 for the new Jev expert site. Peter confirmed JEV means Jev from TypeSafe AI (he shared typesafe.ai). Revised the same day after an in-depth review of typesafe.ai (section 2b). Nothing here changes the DPC site.*

---

## 1. Executive summary

- **What Jev is.** Jev is TypeSafe AI's "System One" model, launched in early access on Tuesday, Sept 15, 2026. It does not write text. You hand it a block of state (a ticket, an email, game state, JSON) plus typed questions, and it returns typed answers with probabilities: a yes/no probability (`noul`), a pick from up to 255 options (`choice`), or a level on a 2 to 10 point scale (`score`). TypeSafe's own line: "LLMs produce words for people. Jev produces typed decisions and is more like code." [typesafe.ai][ts-home] · [docs][ts-intro] · [The Register][reg1]
- **Why now.** It is four weeks old, developers are excited, and it is well funded: a $40M seed led by DCVC, then $870M at a $7.5B valuation led by a16z (Oct 9). It is already on Vercel AI Gateway, OpenRouter and Cloudflare Workers AI, and OpenAI has a competing "Decisions API" in limited preview. [New Stack][tns] · [TypeSafe blog][ts-series] · [SiliconANGLE][sa] · [TechCrunch, Sep 30][tc2]
- **The gap.** Official material is developer docs and 18 cookbooks. There is no independent, plain-language source that (a) tests Jev on real business data, (b) says honestly where it fails, (c) gives recipes for business operations like support, sales and insurance agencies, and (d) helps a manager decide when to use Jev versus an LLM or a classic classifier. That is the opening.
- **Positioning recommendation:** "The independent field guide to Jev: what it's good at, where it breaks, and how to put it to work." Use cases, worked examples and how-tos, each one tested, with the code and the numbers shown. Independence from TypeSafe is the brand, the same way neutrality was for the DPC site.
- **Speed matters.** Search results for "Jev use cases" and "Jev tutorial" are thin today and mostly aggregators. Being first with tested, well-sourced how-tos is how this site becomes the reference.

---

## 2. Landscape (as of Oct 10, 2026)

**The product**
| Item | Detail | Source |
|---|---|---|
| Maker | TypeSafe AI; founder Diogo Almeida (ex-OpenAI, credited with co-inventing RLHF/InstructGPT); co-founders Erik Gafni and Sasha Sheng | [TechCrunch][tc1], [New Stack][tns] |
| Model | `jev-1.13.0` (aliases `jev-latest`, `jev-preview`), text input only | [docs: models][ts-models] |
| API | `POST https://api.typesafe.ai/v1/systemone` with `state`, `model`, `questions`; Python and JS SDKs | [docs: API][ts-api] |
| Price | $0.042 per million input tokens; output free | [docs: models][ts-models] |
| Limits | 64k tokens per request; 32k for state plus the longest question; 100K tokens/s, 80 requests/s | [docs: models][ts-models] |
| Speed | 70ms to 500ms end to end (company claim) | [launch post][ts-launch] |
| Where | TypeSafe API; Vercel AI Gateway (`typesafe-ai/jev`, yes/no type named `boolean` there); OpenRouter (`typesafe/jev-1.13`); Cloudflare Workers AI (`typesafe/jev`) | [Vercel][vercel], [OpenRouter][or], [Cloudflare][cf] |

**Documented use cases:** customer-service intent routing with escalation to a human below a confidence threshold; ticket urgency and alert severity scoring; business-email classification; agent tool choice and stop/retry/escalate decisions; guardrails and command-safety checks (Vercel replaced OpenAI's Luna with Jev for a command-safety classifier and "got results five to 18 times more quickly and with greater accuracy"); re-ranking; eval scoring; demos playing Doom and wikiracing. [TechCrunch][tc1] · [docs: intent routing][ts-route] · [cookbooks][ts-cook] · [launch post][ts-launch]

**Documented weaknesses (TypeSafe's own "jaggedness" page):** "answers the question you wrote, not the one you meant"; "Jev is not a calculator" and "does not count reliably"; weak numeric calibration on score levels; treats dates as text; worse on multi-hop reasoning and noisy state; bias toward the first option; doesn't treat adversarial content as hostile by default. Outside critics add that probabilities push judgment back to the user (Armin Ronacher: "it delegates the hallucination problem a little bit to the user"). [docs: jaggedness][ts-jag] · [TechCrunch][tc1]

**Competitors and alternatives:** OpenAI Decisions API (limited preview); LLMs with structured outputs (OpenAI, Gemini, BAML, Instructor, Outlines), which give valid JSON but not calibrated probabilities; trained classifiers (e.g. Hugging Face AutoTrain); a reported Cloudflare decision model, "Clef" (unverified). [TechCrunch, Sep 30][tc2] · [eesel][eesel]

**Who already covers it:** TypeSafe docs and blog (official, developer-only); TechCrunch, Bloomberg, The Register, The New Stack, SiliconANGLE (news, not how-to); a community cookbook on GitHub; scattered aggregator explainers. No one owns "tested business use cases."

---

## 2b. What typesafe.ai says, and what holds up (review of Oct 10, 2026)

**The pitch.** Homepage: "We took the opposite research direction." Three pillars: decisions, not strings; calibrated confidence on every decision; "more like code." Enterprise page: "Jev makes typed decisions for your software," aimed at teams that "Classify, score, and route quickly, at low cost." [home][ts-home] · [enterprise][ts-ent]

**Where the site is strong (useful for us to build on)**
- **Developer docs are thorough:** quickstart with curl and Python, primitives (Choice, Score, Noul), confidence, four patterns (fan-out, confidence-gated routing, composite scoring, intent routing), 19 cookbooks, Python and JS SDKs, and an agent skill for coding agents. [docs index][ts-llms] · [quickstart][ts-qs]
- **A clear build method** we can teach in plain English: keep deterministic work in code; pass only relevant, structured state; split broad judgments into narrow questions ("Broad questions hide several judgments behind one answer"); ask many at once; combine answers in code; route on confidence. [how to build][ts-build]
- **Honest about weaknesses:** a published "jaggedness" page, and a blog post against benchmark gaming that tells users to "run your own private evals, treat public ones with a grain of salt." [jaggedness][ts-jag] · [antibenchmaxxing][ts-bench]
- **Their own use-case map names insurance twice:** "Insurance claims" (classify loss reports and adjuster notes, flag complexity and fraud indicators, prioritize claims for review) and "Risk assessment" (insurance, underwriting). It also lists lead generation and customer support, including extracting issues from call transcripts. [use-case map][ts-map]
- **One real case study:** Jack & Jill (AI recruiting marketplace) replaced Gemini 3.1 Flash Lite with Jev for initial candidate screening. Cost per 1,000 candidates fell from $0.755 to $0.092, ranking quality (AUC) went from 0.924 to 0.933, and recall of eventual "winners" went from 93.9% to 94.6%, a gain TypeSafe itself says isn't statistically significant. [case study][ts-jj]

**Where claims need care (our "reality check" angle)**
- **"Zero Hallucinations."** The launch post explains this means outputs always match the schema, and calls the 0% figure "not empirical." Jev can still pick the wrong answer. [launch post][ts-launch]
- **Speed and cost multiples.** The homepage headline says "193.6x Faster, 444.6x Cheaper," but the example shown beside it ($0.000081 in 0.114s vs $0.013880 in 8.566s) works out to about 75x faster and 171x cheaper. Both come from TypeSafe's own workflow evals. [home][ts-home]
- **Confidence isn't proven calibration.** The confidence page defines confidence as the shape of the probability distribution and makes no claim that it matches real accuracy; thresholds "depend on your domain." The launch post does say the training aims for "epistemically honest probabilities." Testing calibration on real data is a gap we can fill. [confidence][ts-conf]
- **Adoption numbers don't match.** The enterprise page says "25% of the Fortune 500 adopted"; the funding post says "A third of the Fortune 500 are getting their Jev on." No customers are named besides Jack & Jill (and Vercel in press). [enterprise][ts-ent] · [funding post][ts-series]
- **Gaps for business buyers.** No published enterprise pricing, no answers yet on VPC/on-prem, data residency or a BAA (the questions are listed, unanswered). SOC 2 Type II and zero data retention for enterprise are stated. No free tier is mentioned; access is early access via console.typesafe.ai. [enterprise][ts-ent] · [quickstart][ts-qs]
- **Terms are thin.** The acceptable-use policy says nothing about automated decisions about people (insurance, credit, employment). That doesn't make those uses OK: insurers using AI face state rules (for example the NAIC model bulletin on insurers' use of AI, adopted by many states, and Colorado's law on unfair discrimination in insurance AI; to verify and cite before we publish on it). [AUP][ts-aup]

**What this means for the site**
1. The official docs teach *how to call* Jev. We teach *what to use it for, whether it worked, and what it cost*, for people running a business.
2. Insurance is on TypeSafe's own list but has zero worked examples anywhere. That is Peter's lane: agency lead scoring, call and service-ticket routing, QA scoring of call transcripts, and claims-intake triage, each with a human-review step and a compliance note.
3. Every vendor number gets labeled as TypeSafe's claim, and the mismatches above get a calm, sourced "reality check" post rather than hype or a takedown.

---

## 3. Audiences

**Primary: operations and business leaders who aren't ML engineers** (heads of support, sales ops, revenue ops, agency owners). Need: what Jev can decide for them, what it costs at their volume, where it fails, and how to start without a big build.

**Secondary: developers and AI engineers** shipping automations and agents. Need: copy-paste recipes, gateway differences, threshold tuning, testing and monitoring, migration from an LLM classifier.

**Tertiary: insurance agencies and contact centers** (Conversely's world). Need: concrete recipes for lead scoring, call and ticket routing, QA scorecards and script-compliance checks. No one has published these, and they're where Peter has real expertise.

---

## 4. Content pillars

| Pillar | Purpose | Example pieces |
|---|---|---|
| **1. Jev explained** | Own the basics | What Jev is (and isn't); Jev vs an LLM vs a classifier; the three question types; reading probabilities and confidence; pricing math at real volumes |
| **2. Use cases** | The flagship angle | Ticket and call routing; lead scoring; email triage; QA scorecards; compliance checks; agent guardrails; re-ranking search results |
| **3. How-tos** | Practical, tested | Your first Jev call in 10 minutes (Python, JS, Vercel AI SDK); setting confidence thresholds; writing questions Jev answers well; fan-out and composite scoring; human-in-the-loop escalation |
| **4. Tested examples** | Credibility | Each use case run on a public or synthetic dataset, with code, accuracy, cost and latency shown; failures shown too |
| **5. For agencies and contact centers** | Peter's niche | Lead scoring for an insurance agency; routing inbound calls by intent; scoring call transcripts against a QA rubric; claims-intake triage (on TypeSafe's own use-case list, no worked example exists); where AI rules for insurers require human review |
| **6. News and reality checks** | Reasons to return | Release notes explained; funding and competitor moves; "does the claim hold up?" tests of vendor numbers ("zero hallucinations", 193.6x vs 75x, calibration); the Jack & Jill case study read closely |

---

## 5. Priority keywords and gaps

Search volumes weren't measured (SEO connectors are down in this project), so this is ranked by intent and timeliness.

| Cluster | Example queries | Gap |
|---|---|---|
| Basics | what is jev ai; typesafe jev; system one model | Aggregators only; room for the clearest explainer |
| Comparison | jev vs gpt; jev vs structured outputs; jev vs classifier; openai decisions api vs jev | Almost nothing neutral |
| How-to | jev api tutorial; jev python example; jev vercel ai sdk; jev confidence threshold | Docs exist, tutorials don't |
| Use cases | jev ticket routing; jev lead scoring; jev customer service | Official cookbooks skip sales, support transcripts and lead scoring |
| Cost | jev pricing; jev cost per million | Easy win with a calculator |

---

## 6. Editorial stance: independence and disclosure

1. **Clearly unofficial.** The site is not affiliated with TypeSafe AI, says so in the header or footer, and doesn't use TypeSafe's logo or a name that implies it's official. "Jev" appears in content, not as the brand name.
2. **Conversely disclosure.** Footer and About: "Published by Conversely, which provides performance services to insurance agencies." If Conversely builds on Jev for clients, or has any relationship with TypeSafe or a competitor, that is disclosed on the first screen of related pages.
3. **Test, don't repeat.** Vendor numbers (speed, cost, accuracy) are labeled "TypeSafe's claim" unless we've reproduced them. Every tested example publishes its data, code, model version and date.
4. **Show failures.** Every use case lists where Jev did badly and when an LLM or a plain rule is the better choice.
5. **Carried over from the DPC site:** validated citations and verbatim quotes; headlines from household-name outlets (see open question 3); a byline; "last tested" dates; a public corrections log; PR plus preview, nothing goes live until Peter says "publish"; dense, responsive layouts with search on every page.
6. **No compliance overreach.** Insurance-agency recipes describe operations tooling only, not advice to consumers, and flag where a human must review (anything affecting coverage or pricing for a person).

---

## 7. Plan for steps 2 to 5

**Step 2, site build.** New Astro static site on Vercel, same stack as the DPC site, its own look (a more technical, code-forward design). Pages: Home, Start here, Use cases hub, How-tos hub, Tested examples, For agencies and contact centers, News, About, Methodology (how we test), Corrections, search on every page. Templates: Use case, How-to (with runnable code blocks), Test report, News note. Needs a new GitHub repo from Peter; suggested name `jev-field-guide`.

**Step 3, cornerstone posts (first five, in order)**
1. What Jev is, and what it isn't: a plain-English guide to "decision models"
2. Jev vs an LLM vs a classifier: when to use which, with costs at 1M decisions a month
3. Your first Jev call: routing support tickets in Python and JavaScript
4. Confidence thresholds: when to let Jev act and when to send it to a person
5. Scoring insurance leads with Jev, a worked example (synthetic data, code, results)

**Step 4, Q&A and tools**
- Q&A page: 20 to 30 real questions developers and managers are asking, answered and sourced.
- Cost calculator: decisions per month, average state size, questions per call; Jev vs LLM cost, using published prices.
- Question builder: pick a type (yes/no, choice, score), see a correct request body for the TypeSafe API and for Vercel's gateway.

**Step 5, daily post routine.** Same flow as the DPC site: one post a day as a PR for Peter's "publish", led by real news from a major outlet.

---

## 8. Open questions for Peter

1. ~~Is JEV the TypeSafe Jev model?~~ Confirmed by Peter, Oct 10.
1a. Do you have, or want, early access to Jev? Tested examples need an API key from console.typesafe.ai; until then, posts can explain and cite but not show our own test results.
2. Site name. Options that don't imply TypeSafe endorsement: **Decision Layer** (recommended), **System One Field Guide**, **Typed Decisions**.
3. Headline outlets. The DPC rule names consumer household names (WSJ, NYT, CNBC...). Jev is covered mainly by TechCrunch, Bloomberg and tech press. Proposed list for this site: Bloomberg, Reuters, WSJ, NYT, CNBC, Forbes, Business Insider, Axios, TechCrunch, The Verge, Wired. OK?
4. Does Conversely use Jev, or have any tie to TypeSafe or its competitors? (Drives disclosure.)
5. Author byline: reuse Sophia Cranbrook, or a different name for this site?
6. New GitHub repo: please create `jev-field-guide` (or your choice) and add it to the project.

---

## Sources

[ts-home]: https://typesafe.ai
[ts-intro]: https://docs.typesafe.ai/introduction
[ts-models]: https://docs.typesafe.ai/models.md
[ts-api]: https://docs.typesafe.ai/api.md
[ts-launch]: https://typesafe.ai/blog/introducing-system-one-models-and-jev
[ts-series]: https://typesafe.ai/blog/series-ai
[ts-jag]: https://docs.typesafe.ai/model-jaggedness/jev-1.13.md
[ts-route]: https://docs.typesafe.ai/patterns/intent-routing.md
[ts-cook]: https://docs.typesafe.ai/cookbooks.md
[tc1]: https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/
[tc2]: https://techcrunch.com/2026/09/30/openais-jev-clone-could-help-the-frontier-lab-stop-its-swarming-agents/
[reg1]: https://www.theregister.com/a/5296711
[tns]: https://thenewstack.io/typesafe-jev-system-one/
[sa]: https://siliconangle.com/2026/10/09/jev-creator-typesafe-closes-870m-round-at-7-5b-valuation/
[vercel]: https://vercel.com/changelog/ai-gateway-now-supports-typesafe-clients-and-an-http-api-for-jev
[or]: https://openrouter.ai/typesafe/jev-1.13
[cf]: https://developers.cloudflare.com/ai/models/typesafe/jev/
[eesel]: https://www.eesel.ai/blog/typesafe-jev-alternatives
[ts-ent]: https://typesafe.ai/enterprise
[ts-llms]: https://docs.typesafe.ai/llms.txt
[ts-qs]: https://docs.typesafe.ai/introduction/quickstart.md
[ts-build]: https://docs.typesafe.ai/concepts/how-to-build-with-system-one.md
[ts-bench]: https://typesafe.ai/blog/antibenchmaxxing
[ts-map]: https://docs.typesafe.ai/concepts/use-case-map.md
[ts-jj]: https://typesafe.ai/blog/jack-jill-jev-case-study
[ts-conf]: https://docs.typesafe.ai/confidence.md
[ts-aup]: https://typesafe.ai/legal/acceptable-use-policy

- TypeSafe homepage: https://typesafe.ai
- TypeSafe docs, introduction: https://docs.typesafe.ai/introduction
- TypeSafe docs, models: https://docs.typesafe.ai/models.md
- TypeSafe docs, API: https://docs.typesafe.ai/api.md
- TypeSafe launch post: https://typesafe.ai/blog/introducing-system-one-models-and-jev
- TypeSafe funding post: https://typesafe.ai/blog/series-ai
- TypeSafe docs, jev-1.13 jaggedness: https://docs.typesafe.ai/model-jaggedness/jev-1.13.md
- TypeSafe docs, intent routing: https://docs.typesafe.ai/patterns/intent-routing.md
- TypeSafe cookbooks: https://docs.typesafe.ai/cookbooks.md
- TechCrunch, "A new kind of AI model from a ChatGPT inventor is thrilling developers," Sep 18, 2026: https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/
- TechCrunch, "OpenAI's Jev clone could help the frontier lab stop its swarming agents," Sep 30, 2026: https://techcrunch.com/2026/09/30/openais-jev-clone-could-help-the-frontier-lab-stop-its-swarming-agents/
- The Register, "TypeSafe AI debuts model for machines that plays Doom," Sep 16, 2026: https://www.theregister.com/a/5296711
- The New Stack, Sep 21, 2026: https://thenewstack.io/typesafe-jev-system-one/
- SiliconANGLE, "Jev creator TypeSafe closes $870M round at $7.5B valuation," Oct 9, 2026: https://siliconangle.com/2026/10/09/jev-creator-typesafe-closes-870m-round-at-7-5b-valuation/
- Bloomberg, Oct 9, 2026 (headline not verified, paywalled): https://www.bloomberg.com/news/articles/2026-10-09/andreessen-horowitz-backs-jev-maker-at-7-5-billion-value
- Vercel changelog: https://vercel.com/changelog/ai-gateway-now-supports-typesafe-clients-and-an-http-api-for-jev
- OpenRouter listing: https://openrouter.ai/typesafe/jev-1.13
- Cloudflare Workers AI listing: https://developers.cloudflare.com/ai/models/typesafe/jev/
- eesel, Jev alternatives: https://www.eesel.ai/blog/typesafe-jev-alternatives
- TypeSafe enterprise page: https://typesafe.ai/enterprise
- TypeSafe docs index: https://docs.typesafe.ai/llms.txt
- TypeSafe quickstart: https://docs.typesafe.ai/introduction/quickstart.md
- TypeSafe, how to build with System One: https://docs.typesafe.ai/concepts/how-to-build-with-system-one.md
- TypeSafe, example use cases: https://docs.typesafe.ai/concepts/use-case-map.md
- TypeSafe, confidence: https://docs.typesafe.ai/confidence.md
- TypeSafe, "Lies, Damned Lies, and Benchmarks": https://typesafe.ai/blog/antibenchmaxxing
- TypeSafe, "How Jack & Jill Cut Candidate Screening Costs By 88% With Jev": https://typesafe.ai/blog/jack-jill-jev-case-study
- TypeSafe acceptable use policy: https://typesafe.ai/legal/acceptable-use-policy
