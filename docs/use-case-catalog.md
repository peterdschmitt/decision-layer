# Use-case catalog

A running list of every real use case of a decision model coupled with an LLM (or used in a process an LLM feeds) that research turns up. Every daily run adds what its full research finds. Posts draw from here; the post queue is built from here (Peter, 2026-10-31 14:46Z, "Change all five").

**Labels:** **published case** (a named company's deployment, self-reported by the company or vendor), **vendor claim** (a vendor's own demo or docs, no named customer), **community demo** (a builder's post or repo, self-reported), **independent result** (third-party or peer-reviewed). **Unverified** means we saw it only second-hand. Keep thin items in with their label; drop only what is fabricated or contradicted.

Columns: what the LLM does, what the decision model does, the numbers as published, source, label, date checked.

## Published deployments at scale

| Company (industry) | LLM does | Decision model does | Numbers as published | Source | Label | Checked |
| --- | --- | --- | --- | --- | --- | --- |
| Jack & Jill (hiring) | A higher-power model reviews the shortlist (about 2,000 of 6,000) | Jev does the first scoring of every candidate | 88% lower cost; median 20.3s to 10.3s; recall 94.6% vs 93.9% on 150 live roles; live in 10 days; $265K now, $500K projected; 15+ workflows | typesafe.ai/blog/jack-jill-jev-case-study | published case | 2026-10-31 |
| Datadog (software ops, AI agents) | The AI agent writes shell commands | Scores the risk of each command before it runs | 40x faster p95 than frontier models, comparable accuracy | OpenAI Decisions API GA, via unite.ai | published case | 2026-10-31 |
| Box (documents, insurance certificates) | Box Extract pulls the data | Routes certificates of insurance; lower confidence goes to reviewers | About 5x faster routing at the same accuracy | OpenAI Decisions API GA, via unite.ai | published case | 2026-10-31 |
| Sierra (customer service) | The agent converses | Chooses the next action | Under 280ms p95, about 3x faster, 90% lower cost per call, no drop in outcomes | OpenAI Decisions API GA, via unite.ai | published case | 2026-10-31 |
| Ramp (finance) | n/a in source | Attributes AI costs to the work behind them | 4x faster, 30% cheaper, no loss of accuracy | OpenAI Decisions API GA, via unite.ai | published case | 2026-10-31 |
| Speak (education, real time) | The tutor converses | Decides the next action | 1.4s to 0.13s | TechCrunch; unite.ai | published case | 2026-10-31 |
| Invoices (accounts payable) | An LLM-based reader pulls invoice details | Judges each detail; wrong ones stopped | Alone 1 in 5 details wrong; coupled, every call right (small published test: show mechanism, not a rate) | TypeSafe OCR cookbook | vendor claim | 2026-10-31 |

## Ad copy and creative (full research 2026-10-31)

Full report: /mnt/project-files/decision-layer/reports/Decision models for ad creative.md. Notes: /mnt/project-files/decision-layer/research_notes/Decision models for ad creative/. No company has published an ad case study with outcome numbers; no build validates against real CTR, CPA or ROAS.

| Build (who) | LLM does | Decision model does | Numbers as published | Label |
| --- | --- | --- | --- | --- |
| Competitor ad teardown (@TheMattBerman, StealAds), Sep 17 | none named | Jev labels hook, format, offer, CTA, awareness stage, landing-page mismatch | 724 live ads, 37 brands, about 40s, about $0.09; 6,817 likes, 1.1M views | community demo (builder sells the tool) |
| Synthetic focus group (@TheMattBerman) | none named | 30 personas judge stop or scroll | 723 ads, 21,690 decisions, $0.22 | community demo |
| Higgsfield, Sep 19 | DeepSeek and Higgsfield generate the ads | Jev filters and picks the assets | no numbers | vendor claim |
| Ad Lab (artemnovitckii/ad-pattern-lab) | optional chat model writes briefs | Jev classifies format, hook, angle, offer, proof, objection, CTA from images; reviews briefs for brand fit and claim support | one verified call: 911 ms | community demo |
| openai-decisions-marketing (same author) | writes briefs | gpt-6-luna on /v1/decisions, same labels | mocked tests only | community demo |
| jev-adrank (leepokai) | none | Compliance review at ingest plus ad ranking | 23 creatives in 1.3s: 5 of 5 planted violations caught, 0 false positives; simulated auction +29% revenue (author: not a production benchmark) | community demo |
| Grüns competitor scan (@raph_guilhem, Pletor), Sep 23 | Opus 5.5 finds competitors, pulls ads, writes the code; Pletor makes new versions | Jev scores 120 ads on 7 questions incl. health-claim risk; code shortlists 10 | 120 ads, 12 competitors | community demo |
| Resilia ad library (Maxfusion founders) | Maxfusion describes video shots | Jev labels funnel stage and style; scores shots | 1,891 ads in 19s for $0.12; 450+ video ads under 3 min | community demo (vendor) |
| TikTok ads (@frevana_ai), Sep 24 | n/a | Sorts into winners, watches, dogs | 294 ads, 68 brands, 20s | community demo (vendor) |
| Jev for Marketers (brent-phillips) | Claude or another LLM writes | Messaging fit, pillar, unsupported-claim check; persona and funnel tags; auto/review/human bands at 0.85 and 0.60 | test set of 50 made-up leads only | community demo |
| n8n template #21820 | GPT-4o mini drafts or rewrites a social post | Jev scores quality, overclaiming, weak hooks; loop until it passes, failures to a person | none | community demo |
| Shhots AI reference design | Claude writes briefs; Shhots generates | Jev tags past ads (joined to CPA/ROAS in code), then checks each creative against its brief | no end-to-end run published | vendor claim |
| TypeSafe docs, "Advertising" use cases | n/a | Creative and copy evaluation, brand safety, prohibited claims, ad-to-landing-page fit | none | vendor claim |
| Fastino GLiDE docs | n/a | Advertising policy and regulated-claims checks | none | vendor claim |

**Independent evidence on predicting ad performance:**

- LLM-only judging is weak. In LOLA (Upworthy A/B tests), pure LLMs were barely above random; arXiv 2609.25010 found Kendall τ = 0.361.
- Training on outcomes helps. Meta's AdLlama gave +6.7% CTR, but this is company research.
- Kantar LINK AI matches its surveys about 7 in 10 times. That is a vendor claim.
- Nielsen attributes about 47% of sales lift to creative.

**Defensible use:** high-volume labelling and compliance flags, joined to the advertiser's own results or used as the prior for A/B tests, not as a replacement for testing.

## Still to research (every run adds a row group)

Claims and underwriting, lending and credit, KYC and fraud, healthcare prior authorization and coding, legal intake and contract review, logistics exceptions, retail returns and catalog tagging, content moderation (e.g. Musubi, TechCrunch Oct 6), security alert triage, IT tickets, sales lead routing, procurement, HR and recruiting beyond Jack & Jill, and public sector casework. For each, search vendor and rival docs and customer pages (TypeSafe, OpenAI, Microsoft, Cloudflare, AWS, Fastino, Liquid, Base Labs, Inception), news, GitHub, community catalogs, n8n and Make, X, LinkedIn and YouTube.
