---
title: "How Rakuten’s decision model and new search lifted conversion 32.3% in a test"
dek: "Stop using LLMs alone. Rakuten has a decision model judge whether each product matches a shopper’s search, then re-sorts the results. In a live test, more shoppers bought."
kind: Reality check
readMinutes: 9
author: Peter Schmitt
audience: For executives whose customers search before they buy
published: 2026-11-15
lastChecked: 2026-11-15
modelVersion: Rakuten’s Q3 2026 results (model not named)
stats:
  - value: "+32.3%"
    label: "conversion in a live test, with a new search engine"
  - value: "Up to 50"
    label: "products the decision model judges for each search"
  - value: "Two"
    label: "changes tested at once: decision model and new search"
statsNote: "All three come from one slide in Rakuten’s third-quarter results, published Nov. 13, 2026. Rakuten says the test does not separate the decision model from the new search engine. The fine print says more."
sources:
  - title: "Rakuten Group: Q3 FY2026 results presentation, slides 55-56 (Nov. 13, 2026)"
    url: https://global.rakuten.com/corp/investors/assets/doc/documents/26Q3MAINPPT_E.pdf
    grade: Company report
  - title: "PPC Land: Rakuten’s Q3 results and the Ichiba decision model (Nov. 14, 2026)"
    url: https://ppc.land/rakuten-loses-62-7bn-yen-in-q3-even-as-ad-sales-climb-11/
    grade: Independent reporting
  - title: "PostHog: Not everything needs an LLM (Jina Yoon, Nov. 9, 2026)"
    url: https://posthog.com/newsletter/decision-models
    grade: Company report
  - title: "Subworkflow: RAG vs JAG (Jim Le, Oct. 18, 2026)"
    url: https://subworkflow.ai/blog/ragextract/rag-vs-jag
    grade: Company report
---

A shopper on Rakuten Ichiba, Japan’s big online mall, types “waterproof hiking boots, wide fit.” The search brings back dozens of products.

Some are exactly right. Others are boot covers, narrow boots or walking shoes that only share a few words with the search.

The order matters. A shopper who has to scroll past the wrong boots may never buy.

## The trap

Ordinary search matches words. It can’t tell that “wide fit” is a requirement, not a nice extra.

An LLM, the kind of AI behind ChatGPT, does understand that. But an LLM writes text. Reading every product and writing about it for every search is slow and costly.

However, when coupled with a decision model, the LLM’s understanding goes into a plain yes or no for each product.

A decision model is an AI that answers a fixed yes-or-no question and gives a percentage. It writes no words.

Rakuten’s own slide makes the contrast plainly. An LLM puts out “generated text.” A decision model puts out a yes or no, with a probability.

Rakuten says its version uses an LLM to understand what the shopper means.

| | An LLM alone | A decision model built on an LLM |
| --- | --- | --- |
| What it returns | Written text | Match or not, with a percentage |
| What you can do with it | Read it | Sort the results by it |

## The story

**Who.** Rakuten is a Japanese company that runs Ichiba, a marketplace with tens of thousands of merchants. Ting Cai is its Chief AI and Data Officer. He presented the result with Rakuten’s third-quarter earnings on Nov. 13.

**Before.** Ichiba’s live search chose and ordered the products. Rakuten does not describe how it worked.

**The change.** Search now pulls up to 50 candidates for each query. A decision model then looks at each product’s photos, its description and the full context of the search.

It answers one question per product: does this match what the shopper asked for? The answer is match or no match, with a percentage. Rakuten re-orders the results from those answers.

Cai summed up the trade. “So, we get the understanding of an LLM at the cost and speed of traditional search,” he said, as reported by PPC Land, a trade publication.

**The test.** In October, Rakuten ran an A/B test against its live search. Some shoppers got the old search. Others got the decision model and a new search engine.

Conversion is the share of shoppers who buy. It rose 32.3% against the old search, a relative gain.

Rakuten says a gain that large would be very unlikely if the new setup did nothing.

## The twist

The new setup changed two things at once. It added the decision model, and it added what Rakuten calls a next-generation search engine.

Rakuten says so in its own footnote. “The test does not isolate the Decision Model contribution.”

So the gain belongs to the pair. Rakuten has not said how much came from the decision model.

## My verdict

This is the first time I have seen a company this size put a decision model in front of investors with a sales number attached.

Rakuten also put its plan in one line. It will use the power of LLMs inside decision models to improve search, recommendations and ads. That is the method change this site argues for.

Stop using LLMs alone to write. Use their understanding to decide.

But I can’t tell you the decision model earned the gain. Neither can Rakuten, by its own account. The honest claim is that a decision model is part of a change that made more shoppers buy.

## How it works

**What a decision model does.** You send it a short text, and sometimes images, plus one question. It returns a percentage.

Here the text is the shopper’s search and the product’s details. The question is whether they match.

**How it is ranked.** Say the decision model rates one pair of boots 93% likely to match. It goes above a pair it rates lower. The search still decides which products get judged at all.

**How it is trained.** Rakuten has not said which decision model it uses, whether it built its own, or how it was trained. Its slide says only that the model draws on an LLM to understand what the shopper means.

## What it means for you

**Revenue.** If your customers search before they buy, putting the right products first can raise sales, not just cut costs.

**Money.** Rakuten gave no costs. Cai’s claim is that the decision model runs at about the cost and speed of ordinary search. Judging up to 50 products for every search still adds up, so work out the cost at your own number of searches.

**Customers.** Shoppers see the products that meet every part of their search first. The boot covers drop down the list.

**Risk.** An LLM alone is an unknown risk. It gives you text and no measure of how sure it is. A decision model gives every product a percentage, so you can see how sure it was about each one.

**Ads.** PPC Land notes that reshuffling the regular results can pull shoppers’ attention toward or away from paid ads. Rakuten has not said whether the decision model ranks ads yet. Its slide names ads as a next step.

### The same pattern in other industries

- **Software.** PostHog lets search pull a first list of user recordings. A decision model then scores how well each one matches, and the list is re-sorted. Ranking improved, PostHog says. [PostHog’s write-up](https://posthog.com/newsletter/decision-models).
- **Legal documents.** Subworkflow had a decision model judge pages that search had shortlisted. The right page came first far more often than with search alone. [Subworkflow’s write-up](https://subworkflow.ai/blog/ragextract/rag-vs-jag).
- **Hiring.** Jack & Jill had a decision model score every candidate. An LLM read only the shortlist. Its screening costs fell 88%. [How Jack & Jill did it](/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**How much of the 32.3% is the decision model?** Unknown. Rakuten says its test can’t tell.

**Is it live for every shopper?** Rakuten hasn’t said. It reported a test against live search.

**How big was the test, and how long did it run?** Rakuten hasn’t said.

**Which decision model is it?** Rakuten hasn’t named it.

**What would I want to see next?** A test that adds the decision model to the new search alone, so its own share shows.

### How to make the change

1. **Pick one search where wrong results cost sales,** such as product or listing search.
2. **Write one plain question:** does this item match everything the customer asked for?
3. **Let your search pick the candidates,** and have the decision model judge only those.
4. **Re-sort by the decision model’s percentage,** and fall back to search’s original order if the decision model goes down.
5. **Test it on live traffic against your current search.**
6. **Change one thing per test.** If you also change the search, run a third group, so you can see what the decision model adds on its own.
7. **Check what the new order does to paid placements** before you roll it out.

## For your developer

Here is the pattern as code. Search finds the candidates. The decision model scores whether each one matches. The list is re-sorted by that score. This is my sketch, not Rakuten’s code. I haven’t run it on Rakuten’s data, so treat it as expected, not measured.

```python
def rerank(search, candidates, judge, limit=50):
    pool = candidates[:limit]  # search's candidates, in search's order
    try:
        scored = [(judge(search, p), i, p) for i, p in enumerate(pool)]  # decision model: chance it matches
    except Exception:
        return pool, "search"  # decision model down: search's order, as before
    scored.sort(key=lambda s: (-s[0], s[1]))  # best match first; ties keep search's order
    return [p for _, _, p in scored], "decision_model"
```

My worked example shows how. It re-ranks a sample search and reads a test with three groups, so the decision model’s share of the gain shows on its own. It comes with tests. [Subscribe for access](/subscribe/).

Public material from others:

- **[PostHog’s newsletter](https://posthog.com/newsletter/decision-models)** (company report): its own re-rank after search, with the question it asks.
- **[Subworkflow’s write-up](https://subworkflow.ai/blog/ragextract/rag-vs-jag)** (company report): a decision model judging shortlisted pages, with every table.

## The fine print

- **Who published the numbers.** The 32.3%, the 50 candidates and the significance level come from slide 56 of Rakuten’s Q3 FY2026 results presentation, dated Nov. 13, 2026. I opened the PDF. I have measured none of it.
- **The test, in Rakuten’s words.** “A/B test vs. production baseline, Oct 2026 (p < 0.01). Combined effect: Decision Model + Next-Generation Search Engine. The test does not isolate the Decision Model contribution.” “Very unlikely” is my plain reading of p < 0.01: if the new setup did nothing, a gain this large would show up less than 1 time in 100.
- **The setup, in Rakuten’s words.** “Retrieves up to 50 candidates.” The decision model will “Match candidate products against shopper requirements” and “Output a decision: Match or not with a probability to simplify the ranking.” Rakuten AI for Ichiba “uses product photos, description, and full context to assess matches and optimize result order.”
- **The plan.** Slide 55: “Generative AI is more than chat” and “Leverage the power of LLMs in decision models to improve search, recommendation, and ads.”
- **The quote.** Ting Cai’s line comes from PPC Land’s report of Nov. 14, 2026. I could not open the analyst-call transcript, and the media Q&A transcript I opened does not mention the decision model.
- **Merchants.** PPC Land puts Ichiba’s merchant count at 55,423.
- **What Rakuten didn’t disclose.** Which model it is, how it was trained, the test’s size, length and share of traffic, the cost and speed, whether it is now live for all shoppers, and whether it ranks ads.
- **The boots.** The shopper’s search and the 93% score are my illustrations, not Rakuten data. Rakuten’s own wording for the model is “a specialized model that leverages LLM for intent-understanding and returns a decision of 1 or 0, with a probability.”
- **PostHog and Subworkflow.** Each company’s own report. PostHog’s re-rank result is “about 25%” better ranking on 20 test queries. Subworkflow’s test used a made-up legal file: an answer page came first for 19 of 20 questions, against 12 for search alone.
- **Jack & Jill.** From my earlier post, which cites its sources.
- **This site** is independent and not affiliated with Rakuten, PostHog, Subworkflow or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
