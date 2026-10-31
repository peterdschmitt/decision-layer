# Post queue

Peter (2026-10-31 14:40Z): "We should do a separate post on each one!" Each daily run takes the next unchecked item, writes a full post on it following [post-brief.md](post-brief.md), then ticks it here. Every post still leads with the method change (stop using LLMs alone; couple the LLM with a decision model) and the unknown-risk theme. Run full research on each one before writing, and verify every number at its source.

- [ ] **Jack & Jill (hiring):** a decision model scores 6,000 candidates per role and an LLM reviews the shortlist. 88% lower screening cost, twice as fast, no loss in quality, live in 10 days, $500K a year projected, 15+ workflows. Source: https://typesafe.ai/blog/jack-jill-jev-case-study
- [ ] **Datadog (software operations, AI agents):** a decision model scores the risk of every command an AI agent writes before it runs. 40x faster p95 than frontier models, comparable accuracy. Source: OpenAI Decisions API announcement, via https://www.unite.ai/openai-makes-decisions-api-generally-available-with-gpt-6-luna/
- [ ] **Ad copy and creative (marketing):** the LLM writes, the decision model chooses. Ad Lab, Higgsfield, Matt Berman's 724-ad teardown, Jev for Marketers. Use the full research report in /mnt/project-files/decision-layer/reports/.
- [ ] **Sierra (customer service):** a decision model chooses the next action in live customer conversations. About 3x faster, 90% lower cost per call, no drop in customer outcomes.
- [ ] **Box (documents, insurance certificates):** Box Extract pulls the data and a decision model routes certificates of insurance, sending lower-confidence ones to reviewers. About 5x faster routing at the same accuracy.
- [ ] **Ramp (finance):** attributing AI costs to the work behind them, 4x faster and 30% cheaper with no loss of accuracy.
- [ ] **Speak (education, real-time):** time to the next action cut from 1.4 seconds to 0.13.
- [ ] **Invoices (accounts payable, accuracy):** an LLM alone got 1 in 5 invoice details wrong; coupled with a decision model, every call was right. Don't feature the small sample size (Peter); one fine-print line only.
