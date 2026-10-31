# Use-case catalog

A running list of every real use case of a decision model coupled with an LLM (or used in a process an LLM feeds) that research turns up. Every daily run adds what its full research finds. Posts draw from here; the post queue is built from here (Peter, 2026-10-31 14:46Z, "Change all five").

**Labels:** **published case** (a named company's deployment, self-reported by the company or vendor), **vendor claim** (a vendor's own demo or docs, no named customer), **community demo** (a builder's post or repo, self-reported), **independent result** (third-party or peer-reviewed). **Unverified** means we saw it only second-hand. Keep thin items in with their label; drop only what is fabricated or contradicted.

Columns: what the LLM does, what the decision model does, the numbers as published, source, label, date checked.

## Published deployments at scale

| Company (industry) | LLM does | Decision model does | Numbers as published | Source | Label | Checked |
| --- | --- | --- | --- | --- | --- | --- |
| Jack & Jill (hiring) | Before: a low-cost LLM (Gemini 3.1 Flash Lite) gave all 6,000 candidates per role a first score; a higher-power model still reviews the top 2,000 | Jev replaced the LLM for the first score of every candidate | 88% lower cost; median 20.3s to 10.3s; on 150 live roles Jev kept 94.6% of the candidates hiring managers later asked to meet vs 93.9% for Gemini (not significant); fully live within 10 days of the first test; $265K now, $500K projected; 15+ workflows | typesafe.ai/blog/jack-jill-jev-case-study | published case | 2026-10-31 |
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
| Grüns competitor scan (@raph_guilhem, Pletor), Sep 23 | Opus 5.5 finds competitors, pulls ads, writes the code; Pletor makes new versions | Jev scores 120 ads on 7 questions incl. health-claim risk; code shortlists 10 | 120 ads, 12 competitors | vendor claim (he works at Pletor) |
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

## YouTube creators (research 2026-10-31)

Full report: /mnt/project-files/decision-layer/reports/YouTube creators decision model use cases.md (about 75 creators, 7 languages, ranked by business use cases). No transcripts were available; every item rests on the creator's title, description and chapters or a secondary write-up, as the creator described it. Strongest coupling evidence: Builder.io's public benchmark (BuilderIO/jev-computer-use-tests): decision model first, then gpt-6-luna, matched Luna alone at 96.5% success at about 30% lower cost per success; the decision model alone managed 34.6-37.3%.

# 25 strongest business use cases of decision models on YouTube (Sep 15 – Oct 31, 2026)

No transcripts were available. Every row rests on the creator's own title, description and chapters, or on a transcript-based secondary write-up (Riley Brown, Builder.io). Numbers are as the creator described them. Video URLs are https://www.youtube.com/watch?v=ID. The decision model is Jev unless a row names another.

| Use case (creator, video ID, date) | Industry / function | LLM does | Decision model does | Numbers as described | Label |
|---|---|---|---|---|---|
| Speed-to-lead remodel leads (Derek Cheung, nhqpqGH7IH4, 2026-10-08) | Home services / sales | Image, video and TTS "reveal" for hot leads; Claude Opus 5.5 built the workflow | Judges each lead: hot, unsure (to owner in Slack) or tire-kicker | ~$0.27 per hot lead; $27 vs $180/mo video; 3 real leads | Own run |
| Inbox gate + reply drafts (Creator Magic, 3lBmrYFREZU, 2026-09-21) | Ops / email | Claude drafts replies | Needs a reply? Urgency, tone and category | 250 emails for ~1 cent vs Opus 5: 14 min, $1.39 | Own run |
| Real-estate agency urgent inbox (Julio Barroeta, ywaHzjEqCmY, 2026-09-24) | Real estate / customer ops | One Haiku agent per specialty acts | Type and urgency; second-level applicant screen | 200 msgs live, cost per decision on screen | Own run |
| "Bouncer in front of Claude" (Sharbel A., IBONLMfA3Cw, 2026-09-27) | Research / content ops | Claude reads the sources that pass | Screens 173 sources, passes 33 | 78% fewer expensive-model tokens | Own run |
| Shop chatbot model router (Kris AI2ROI, LzCwSlZUyJs, 2026-09-22) | E-commerce support | Tiered LLMs answer | Type, difficulty, harm risk; code picks the tier | $1,425/mo baseline at 5K q/day; cost factor 98 live | Own run |
| Google Ads search terms, 70% rule (Nir Dovrat, rhsZ_9F18Ck, 2026-10-08) | Paid search marketing | Opus takes items under 70% confidence | Classifies search terms | 472 terms: 1.41 s vs 104 s (74x) | Own run |
| Lead temperature vs Claude (Nuno Tavares, jO8uzewZGwo, 2026-09-25) | Sales | Claude as baseline | Hot / warm / cold | 89/100 same as Claude; $0.002 vs $0.27 | Own run |
| 100K-row ICP race (Avi, XE8IItiX8Ts, 2026-09-28) | B2B GTM | Codex builds; GPT 5.6 Sol is comparator | ICP fit per row | 100,000 rows in 4m06s; GPT >3x spend, few thousand rows in | Own run |
| Google Ads negatives (TrueClicks, nlb_1AGzIzc, 2026-09-21) | Paid search | Claude Code orchestrates, pushes negatives | Classifies search terms | 10,000 terms in 2 min for $0.29 | Own run (vendor) |
| Lead-gen signal scoring (Instantly, IoQgnCIjYEs, 2026-10-11) | Outbound sales | Not described | Scores businesses; signals, cleaning, suppression | 1,000 businesses in 6.8 s, ~4.5 cents | Own run (vendor) |
| ICP scoring + Claude writing (Automate with Marc, iMEd03HRvK0, 2026-09-23) | Sales | Claude drafts criteria (human approves), writes | Scores contacts 1–4 | 100 contacts for $0.002; ~90–95% match (by eye) | Own run |
| Ticket routing, Decisions API (AI Bri, YkmVagxvxEQ, 2026-10-16) | SaaS support | None | gpt-6-luna Decisions API: queue + "enough detail?" | 8/8 answered, 7 exact, 1 alt; 5 auto, 3 human; ~$0.0003 | Own run (fictional tickets) |
| Jev vs Decisions API, support inbox (Hyperautomation Labs, zb4TCFrfHoU, 2026-10-07) | Support | None ("two judges" trick) | Classifies labelled items | 505 labelled items; 1–2 pt gap = tie | Own run |
| Decisions API latency (Omar Kamal, hLYJtIFdd64, 2026-10-07) | Support | Responses API as comparator | Routes support tickets | Median 169 ms vs 1,194 ms (~7x; OpenAI says 10x), 20 tickets | Own run |
| Voice query to Dataverse (Andreas, bfwdq9QeKs4, 2026-10-11) | Enterprise data / CRM | GPT-6 Luna reasons, calls Dataverse | Microsoft-Decision-1 picks intent, suggests tools | None given | Own run |
| WhatsApp CRM irritation guard (Rafael Melgaço, CDxt2r-aau4, 2026-09-25) | Customer service | AI agent writes replies | Detects irritation, pauses agent, hands to human | Under 1 s; fraction of a cent | Own run |
| Support screenshot check (The AI Automators, V-fTrJqkG7k, 2026-10-15) | Software support | Not described | Does the screenshot back the reported bug? | 200 public bug reports + 1,000 synthetic cases | Own run |
| Clinic multi-channel inbox (Josema Fernández, CxUjwh9iHXE, 2026-09-24) | Healthcare clinic | LLM answers routine messages | Urgency of WhatsApp, email, Instagram msgs | Race vs GPT-6 Luna (figures not in description) | Own run |
| 50 finance workflows (The Fintech Builder, cDhFRtHKS7E, 2026-09-22) | Finance / risk / back office | Not described | Reconciliation, three-way match, AML, fraud triage, etc. | 50 workflows; replays, synthetic or mixed data | Own run (replayed) |
| Salesforce lead enrichment (Salesforce For Everyone, eNYg9aH7TMw, 2026-09-26) | CRM / sales ops | None | Lead quality, opp type, buying intent, with confidence | None given | Own run |
| Meta ad library tagging (Alex Moreau, Zpov--rKnmk, 2026-09-26) | Advertising | LLM writes ("Jev judges") | Labels ads by hook, format, offer | 724 ads in 40 s; 20,000 terms ~7 cents (computed) | Own run + calculated |
| Restaurant lead scoring in n8n (Saswati Gorai, _8sp2yMfTZY, 2026-10-09) | Agency sales | OpenRouter models in n8n | Scores leads | 138 leads live; LLM cost comparisons estimated | Own run |
| SEO jobs on a real client site (Oliver Hodgson, PNs0IZi2nqI, 2026-09-21) | SEO | Claude Code orchestrates with GSC, Ahrefs, DataForSEO | Freshness, links, teardown, page-one checks | 2,100+ pages; 20 searches | Own run |
| Own-inbox email triage (Greg Isenberg / Ryan Vogel, 4mTLpuQpB80, 2026-09-18) | Ops / email | None (traffic-cop idea: mid tier to LLM) | Category, priority, spam, reply likelihood | 1,700 emails; 4.2M in / 0.5M out tokens; $0.18 | Own run |
| Inbox monitor + scam flags (Riley Brown, o1CogAtWdBk, 2026-09-18) | Creator business ops | None in run (LLM could reply) | Category, importance, brand deal, scam | 500 emails; 55 flagged, not checked | Own run |

## Still to research (every run adds a row group)

Claims and underwriting, lending and credit, KYC and fraud, healthcare prior authorization and coding, legal intake and contract review, logistics exceptions, retail returns and catalog tagging, content moderation (e.g. Musubi, TechCrunch Oct 6), security alert triage, IT tickets, sales lead routing, procurement, HR and recruiting beyond Jack & Jill, and public sector casework. For each, search vendor and rival docs and customer pages (TypeSafe, OpenAI, Microsoft, Cloudflare, AWS, Fastino, Liquid, Base Labs, Inception), news, GitHub, community catalogs, n8n and Make, X, LinkedIn and YouTube.
