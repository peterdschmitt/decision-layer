---
title: "How a news search company cut what its LLM reads 16% with a decision model"
dek: "Stop using LLMs alone. Currents had a decision model screen 2,000 news articles before its LLMs wrote briefings. Quality barely moved. But by Currents’ math, screening loses money in front of a cheap LLM."
kind: Reality check
readMinutes: 9
author: Peter Schmitt
audience: For executives whose AI reads large piles of documents before it writes
published: 2026-11-12
lastChecked: 2026-11-12
modelVersion: jev (typesafe-sdk 0.6.0)
stats:
  - value: "16–18%"
    label: "less text sent to the LLM to read"
  - value: "5 of 6"
    label: "blind comparisons where quality scores were too close to call"
  - value: "2,000"
    label: "live news articles in the test"
  - value: "Would lose money"
    label: "when screening a cheap LLM’s reading, by Currents’ math"
statsNote: "All four come from one test Currents News API ran on its own service and published Sept. 20, 2026. AI models, not people, judged the quality. The fine print says more."
sources:
  - title: "Currents News API: Cutting LLM Token Costs with Currents News API and TypeSafe Jev Pre-Filtering (Currents Team, Sept. 20, 2026)"
    url: https://currentsapi.services/en/blog/cut-llm-token-costs-typesafe-jev-prefiltering
    grade: Company report
  - title: "TypeSafe docs: Models (how Jev is trained)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
  - title: "AWS Builder Center: Classifying Images with Strands Decider 2B Decision Model (Nick Ihm, AWS, Nov. 10, 2026)"
    url: https://builder.aws.com/content/3GJlg7QPWdrYGQbeZVaowHNSTeo/classifying-images-with-strands-decider-2b-decision-model
    grade: Vendor claim
---

Currents News API sells news search to AI agents. Say one agent follows a single stock, such as AST SpaceMobile, a satellite company. Every day, it searches the news for that company and gets back a pile of articles.

Some are real reporting. Others are press releases, copies of the same wire story, or lists that name the stock in passing.

An LLM reads every one of them before it writes the morning briefing. Whoever runs it pays for every word it reads, on topic or not.

## The trap

An LLM is the kind of AI behind ChatGPT. It is good at writing a briefing. But it is a costly way to decide which articles belong in the briefing.

Used alone, it reads everything you hand it. It gives no sign of which articles were worth reading.

However, when coupled with a decision model, the LLM gets only the articles that score high enough.

A decision model is an AI that answers one fixed yes-or-no question and gives a percentage. It writes no words, so it is cheap.

The decision model asks of each article: is this really about the company? Only articles that clear a bar reach the LLM. The bar is the minimum percentage you set.

## The story

**Who.** On Sept. 20, the Currents team published a test of this setup on its own service.

**Before.** A search returns every article that mentions the topic. Currents says its search is built to find everything that matches. So the LLM read the whole pile, every time the agent ran.

**The change.** Currents put a decision model, Jev from a company called TypeSafe, in front of the LLM. Jev read each article’s headline and summary. It gave each one a percentage: how likely it was to be real news about the topic.

Articles at 70% or above went to the LLM. The rest were dropped before the LLM saw them.

**The test.** Currents pulled 2,000 live articles from its own service on two topics. One was U.S. ties with Greenland and Arctic defense. The other was AST SpaceMobile.

Three LLMs wrote the briefings. Each wrote one from the full pile and another from the screened pile. Each LLM briefed both topics, which made six comparisons.

Four AI models then judged the pairs. They did not know which briefing was which.

## The result

**Less to read.** Jev dropped about one article in five. That cut the text the LLMs read by at least 16%.

**Quality held, mostly.** In five of the six comparisons, the quality scores were too close to call. In the sixth, the screened briefing scored clearly lower.

**The twist.** The decision model costs money too. With Claude Sonnet, a pricey LLM in the test, screening cost about 20 cents for every dollar it saved.

Currents then priced a cheap LLM it did not test, GPT-5 Mini. There, screening would cost nearly $3 for every dollar it saved.

Currents drew a plain lesson. A decision model pays in front of an expensive LLM. In front of a cheap one, it may not be worth doing.

## Why the savings were modest

There was less junk than people often assume, Currents says.

When a search names one company or one event, most of what comes back is on topic. So at the 70% bar, there was little to drop.

A stricter bar drops more. At the strictest bar Currents tried, 95%, Jev dropped about half the articles.

But Currents judged quality only at the 70% bar. It has not shown what a stricter bar does to the briefings.

## How it works

**What a decision model does.** You send it a short text and one question. It returns a percentage.

Here, the text was a headline and summary. The question was whether the article was real reporting about the topic.

**How Currents set it up.** In Currents’ published example code, the question told Jev what to drop: watchlists, news about other companies, and law-firm ads seeking shareholders. Your code compares each percentage with the bar. Only the articles that clear it go on to the LLM.

**How it is trained.** TypeSafe says it trains Jev so that its percentages are honest. When it says 70%, it should be right about seven times in ten.

It says Jev is not trained on customer data. It has not published what data it does use.

## What it means for you

**Money.** Coupling pays when two things are true. The LLM is expensive, and much of what it reads is noise. Check both before you build anything. The cheaper the LLM, the less the decision model saves.

**Risk.** With an LLM alone, every article goes in, junk included, and nothing tells you which ones mattered. That is an unknown risk. With a decision model, every article gets a number. You set the bar, and you can see what was dropped.

**Customers.** Readers of the briefings should not notice the screening. In five of Currents’ six comparisons, the blind judges’ scores were too close to call.

**Revenue.** This test shows no revenue gain. The gain is profit margin: the same briefing for less money, when the LLM is expensive.

**The bar.** A higher bar saves more and risks dropping something that mattered. Test quality at the bar you plan to use. Currents advises a lower bar when missing an article is costly.

### The same pattern in other industries

- **Security cameras.** An AWS architect put a decision model in front of an LLM that describes camera frames. With no loss in accuracy, it removed only 7% of the LLM’s work. Removing more meant missing real events, such as a blocked fire exit.
- **Security software.** Harness tested a decision model on real customer traffic. Every mistake it made came on the few cases where it said it was unsure. [How Harness did it](/blog/harness-ai-api-inventory-decision-model/).
- **Hiring.** Jack & Jill had a decision model score every candidate. An LLM read only the shortlist. Its screening costs fell 88%. [How Jack & Jill did it](/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Is this a customer’s result?** No. Currents tested its own service on live articles. It sells news search, not the decision model.

**Who judged quality?** Four AI models, not people. Each was blind to which briefing was screened.

**Would a broad search save more?** A broad search, such as a whole industry, would likely bring back more noise. That is my expectation, not Currents’ result.

**Who should own it?** The team that owns the briefings should own the question, the bar and the quality checks.

### How to make the change

1. **Find a step where an LLM reads a big pile** before it writes.
2. **Count the noise.** Have someone mark a sample as useful or not.
3. **Price it.** Compare what the LLM charges to read with what screening costs.
4. **Write one plain question** that says what to drop.
5. **Run both ways on live work,** and have blind judges compare the results.
6. **Set the bar** where quality holds and the savings beat the screening cost.
7. **Reuse the screening.** One screening can feed several LLMs, and its answers can be saved for repeat articles.

## For your developer

Here is the pattern as code. The decision model screens every document, and the LLM writes from what is left. A second function checks whether screening pays at your LLM’s price. This is my sketch, not Currents’ code. I haven’t run it on Currents’ data, so treat it as expected, not measured.

```python
def screen_then_brief(articles, decide, brief, bar=0.70):
    kept = []
    for a in articles:
        try:
            p = decide(a["title"] + "\n" + a["summary"])  # decision model: chance it is on topic
        except Exception:
            p = 1.0  # decision model down: keep the article, as before
        if p >= bar:
            kept.append(a)
    return brief(kept), len(kept) / max(len(articles), 1)  # the LLM writes from what is left

def screening_pays(words_dropped, llm_price_per_word, screening_cost):
    return words_dropped * llm_price_per_word > screening_cost  # true only when the LLM's reading costs more
```

I show you how in a worked example. It screens a pile of articles, reports what share was dropped, and checks whether screening pays at several LLM prices. It comes with tests. [Subscribe for access](/subscribe/).

Public material from others:

- **[Currents’ write-up](https://currentsapi.services/en/blog/cut-llm-token-costs-typesafe-jev-prefiltering)** (company report): every table, plus its own example code.
- **[The AWS camera test](https://builder.aws.com/content/3GJlg7QPWdrYGQbeZVaowHNSTeo/classifying-images-with-strands-decider-2b-decision-model)** (vendor employee’s demo): the decision model as a filter in front of an LLM, with its savings at each bar.

## The fine print

- **Who published the numbers.** Every Currents figure comes from its post by the “Currents Team”, dated Sept. 20, 2026. I have measured none of it. Currents sells news search, so the test also promotes its service. It sells no decision model.
- **The test.** Two topic pools of 1,000 live articles each, pulled from Currents at test time, split into batches of 200. Each batch was briefed twice by each of three LLMs: Claude Sonnet 4.6, Gemini 3.8 Flash and GLM 5.3 Flash. That made 60 briefings.
- **The judges.** Four AI judge models, none of them the author of a briefing it scored, Currents says, scored 30 pairs on coverage, faithfulness, unsupported claims and usefulness. They gave 82 verdicts. The Claude judge finished 12 of its 20 assignments before hitting a usage quota.
- **Quality.** Five of six model-and-topic cells were within the margin of error. GLM 5.3 Flash on the Greenland topic scored 1.2 points lower when screened, and its range of likely values stayed below zero. Claude Sonnet 4.6 on AST SpaceMobile scored 3.0 points lower, but its wider range crossed zero. Each cell has its own range. Currents does not give the scale. In three of six cells, judges slightly preferred the screened briefing.
- **Less to read.** Text sent to the LLMs fell 18.0% on Greenland and 16.3% on AST SpaceMobile at the 70% bar. Jev kept about 82% of articles. At an 85% bar it dropped 30% to 35% of articles. At 95%, about half.
- **Cost.** By Currents’ figures, screening cost about 22% of what it saved with Claude Sonnet 4.6. GPT-5 Mini was not in the test: Currents applied its list price to the average text removed, and screening came to about 2.75 times the saving. Currents also notes that one screening can feed several LLMs, and that its numbers assume no saved screening answers. Currents priced the LLMs at list input rates. It did not report total briefing costs, so I give no percentage cut in the total bill.
- **The opening example.** The agent that follows one stock is my illustration. Currents’ test pulled news on AST SpaceMobile and on Greenland.
- **Speed.** Currents says less text means the LLM starts writing sooner. It did not measure this.
- **The decision model.** TypeSafe’s Jev, called through typesafe-sdk 0.6.0. The post does not name the Jev version. Training details come from TypeSafe’s own docs, not from Currents.
- **The camera example.** From a Nov. 10, 2026, post by Nick Ihm, an AWS solutions architect, testing AWS’s own Strands Decider in front of Google’s Gemma 4. He picked the bar on the same frames he scored, and the coupling was simulated from stored answers. He does not give the size of the test set.
- **Harness and Jack & Jill.** Those details come from each company’s own report.
- **What we don’t know.** How screening affects quality at a stricter bar, results on broad searches, and whether any Currents customer runs this in production.
- **This site** is independent and not affiliated with Currents, TypeSafe, AWS, Anthropic, Google, OpenAI or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
