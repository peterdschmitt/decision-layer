---
title: "How a data company cut the cost of matching records 86% with a decision model"
dek: "Stop using LLMs alone. Southbridge AI tested LLMs, a decision model, and the two coupled. Coupled, they matched records as well as the LLMs alone, at 86% lower cost."
kind: How-to
readMinutes: 10
author: Peter Schmitt
audience: For executives and operations leaders whose systems hold duplicate records
published: 2026-11-05
lastChecked: 2026-11-05
modelVersion: jev-1.13.0
stats:
  - value: "86%"
    label: "lower AI cost than the LLMs alone, same test"
  - value: "199 of 200"
    label: "record groups judged right, the same as the LLMs alone"
  - value: "5"
    label: "groups the LLM reviewed; the decision model decided the rest"
  - value: "About 1/6"
    label: "of the AI waiting time the LLMs alone needed"
statsNote: "All four figures come from one test by Southbridge AI, published on Sept. 20, 2026. It used 200 groups of Ohio campaign-finance records that Southbridge picked because they were hard. The fine print says what the test can and can’t show."
sources:
  - title: "Southbridge AI: Using system-one models inside high-throughput data pipelines (Hrishi Olickel, Sept. 20, 2026)"
    url: https://www.southbridge.ai/blog/jev-entity-resolution
    grade: Company report
  - title: "Southbridge AI: the test’s published cost and time data (economics.json)"
    url: https://www.southbridge.ai/files/jev-entity-resolution/economics.json
    grade: Company report
  - title: "Ohio Secretary of State: campaign finance search and downloads"
    url: https://www.ohiosos.gov/campaign-finance/search/
    grade: Official docs
  - title: "Trellis Tech Blog: Jev vs Qwen, better constituent matching at 3% of the cost (Jay Bell, Sept. 18, 2026)"
    url: https://tech.trellis.org/blog/2026-09-18-Jev-vs-Qwen-Better-Constituent-Matching-at-3-Percent-of-the-Cost/
    grade: Company report
  - title: "Recruitly: model benchmarks (as of Sept. 27, 2026)"
    url: https://recruitly.io/ai/model-benchmarks
    grade: Company report
  - title: "Recruitly: a decision model in production the day it was released (Sept. 18, 2026)"
    url: https://recruitly.io/resources/decision-model-in-production-the-day-it-was-released
    grade: Company report
  - title: "YTAL: replaying production record merging through Jev (Sept. 17, 2026; in Japanese)"
    url: https://ytal.io/blog/typesafe-jev-entity-resolution-production-replay/
    grade: Company report
  - title: "TypeSafe docs: Models (how Jev is trained)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
---

Here is a puzzle from a data company’s write-up. One donor record says Daniel R. Okafor. Another says Daniel Okafor Jr., at the same street address. Are they the same person?

Get it wrong one way, and two people’s donations merge into one. Get it wrong the other way, and one donor looks like two. Either way, the record of who gave money to whom is wrong.

Every company has this problem somewhere. Customers appear twice in a sales system. A supplier is listed under two names. A donor gives under a nickname.

## The trap

Many companies now hand this job to an LLM. An LLM is the kind of AI behind ChatGPT. It reads both records and writes out an answer.

That works, but it is slow and costly. It also gives no sign of which answers are shaky. No one checks every answer by hand, so you take an unknown risk on each one.

However, when coupled with a decision model, each answer comes back with a number that says how sure it is. A decision model is an AI that picks from a fixed list of answers, such as “same person” or “different person.” It gives a percentage for each.

It writes no words, so it is fast and cheap. The answers it is surest of go through. The LLM reviews only the least sure.

That is full automation with confidence: the sure answers go through without review.

## The test

Southbridge AI is a small company that builds software to clean up large sets of records. One of its test projects is Ohio’s public campaign-finance data. Those files list about 883,000 donations, and many donors appear more than once.

In September, Southbridge’s Hrishi Olickel published a test of three setups. Each judged the same 200 groups of look-alike Ohio records. Southbridge chose those groups because they were hard.

- **LLMs alone.** One LLM judged every group. It sent some of its work on to a second LLM for another look.
- **A decision model alone.** A decision model called Jev judged every group. Jev comes from a company called TypeSafe.
- **The two coupled.** Jev judged every group. Then an LLM reviewed only the five groups at the top of Jev’s unsure list.

## The result

The LLMs alone judged 199 of the 200 groups right.

The decision model alone judged 195 right. On four groups it said it was unsure and gave no answer. It got one wrong.

Coupled, the setup judged 199 right, the same as the LLMs alone. It cost 86% less. It also needed about a sixth of the model time, meaning the time spent waiting on AI models.

The decision model did most of the work. The LLM did only the part the decision model flagged.

## What decided the result

**The decision model knew what it didn’t know.** Four of its five misses were groups it had marked as unsure. That flag told Southbridge which groups to send to the LLM. The LLM’s review fixed all four.

**More LLM review was not better.** Southbridge also tried sending the ten least-sure groups to the LLM. The LLM fixed one more group, but it broke one that had been right. The score stayed at 199, and the cost went up.

**The wording of the question mattered.** One question asked Jev whether two people shared a household. Southbridge’s first version listed what did not count as proof. On a practice set, Jev then said no every time.

So Southbridge rewrote the question to say what did count: two different people at the same house number and street. On the same practice set, Jev got every answer right.

**Every answer that changes a record needs a bar, a minimum level of sureness.** The coupled setup’s one mistake was a near coin flip. Jev was only 53% sure a small business was a political committee.

The LLM’s review of five groups did not catch it. Southbridge set no bar in this test, so the guess went through. A bar would have held it for review.

## How it works

**What a decision model does.** You send it the records and a question. You also send the answers you allow. It returns a percentage for each answer, in a single step.

**How Southbridge set it up.** Ordinary code first groups records that look alike. Jev then answers short questions about each group.

Is it a person, a company or a committee? Are these two groups the same donor? Do these two people share a household?

Code then joins the answers back to every original record. A sorted list ranks the groups by how unsure Jev was. The LLM reviews the top of that list and sees the original records, not Jev’s answers.

**How it is trained.** TypeSafe says it trains Jev so that when Jev says 90% sure, it is right about nine times in ten. It has not said what data it used.

## What it means for you

**Money.** On this test, the coupled setup cost 86% less than the LLMs alone.

Take a company that spends $1 million a year on LLM record matching. By my arithmetic, it would spend about $144,000.

Southbridge also projected the cost of matching a full terabyte of records. Using only its most expensive LLM, it estimated about $8 million. Coupled, it estimated about $36,000.

**Customers.** Duplicate records mean two mailings, or a sales call that ignores a customer’s history. A wrong merge is worse: one person’s record now holds someone else’s details.

**Risk.** With an LLM alone, you can’t tell which answers are shaky. Coupled with a decision model, the shaky ones are flagged, and the LLM reviews only those.

**Speed.** The coupled setup needed about a sixth of the model time. For a company that matches records every night, the job finishes sooner, and adding more records costs less.

### The same pattern in other industries

- **Charities.** Trellis checked its LLM’s past donor matches and found 109 mistakes. A decision model made 23, plus some cases Trellis treats as a policy choice. Trellis hasn’t switched over yet.
- **Recruiting software.** Before Recruitly overwrites a company record, a decision model checks that it found the same business. So a record for Apex Recruitment can no longer be overwritten with details for Apex Group, a fund administrator in Bermuda. When the decision model is unsure, the LLM decides as before.
- **A warning from Japan.** YTAL, a software firm, tried a decision model for merging records. When one case was unsure, its whole batch went back to the old LLM process. That raised its total cost about 4%, so it chose not to use that design.

### The hard questions

**Is 199 of 200 really right?** Southbridge built its answer key with AI models and checked each mistake by hand. So the score shows agreement with that key, not proven truth.

**Why not just use the best LLM?** Southbridge’s most expensive LLM matched all 200 groups. It cost more than 200 times as much as the coupled setup. For most record work, one extra match isn’t worth that.

**What if the decision model is unsure about a lot?** Then the savings shrink, as YTAL found. Send only the unsure cases to the LLM, one at a time, not whole batches.

**Who owns it?** The team that owns the records should own the test cases and the bars.

### How to make the change

1. **Pick one matching job** that runs often, such as customer or supplier records.
2. **Write test cases** with known answers. Include the near misses, like a middle initial or a “Jr.”
3. **Run your LLM and a decision model on the same cases.**
4. **Write each question as what counts,** not what doesn’t.
5. **Put a bar on every answer that changes a record.** Below it, the case goes to review.
6. **Send only the least-sure cases to the LLM.** Try five, then ten, and keep the number that scores best.
7. **Measure again on real records** before you switch.

## For your developer

Here is Southbridge’s pattern as code. The decision model answers every case. The LLM reviews only the least-sure few, and any answer below the bar is held. This is my sketch, not Southbridge’s code. I haven’t run it on its data, so treat it as expected, not measured.

```python
def match(cases, decide, review, max_reviews=5, bar=0.8):
    answers = {c["id"]: decide(c) for c in cases}  # decision model: {"same": p, "different": p, "unsure": p}

    def sureness(probs):  # an "unsure" answer counts as least sure of all
        return 0.0 if max(probs, key=probs.get) == "unsure" else max(probs.values())

    queue = sorted(cases, key=lambda c: sureness(answers[c["id"]]))[:max_reviews]
    for c in queue:
        answers[c["id"]] = review(c)  # LLM verdict, e.g. {"same": 1.0}; it sees the records only

    def final(p):  # every answer that changes a record has a bar
        top = max(p, key=p.get)
        return top if top != "unsure" and p[top] >= bar else "hold"

    return {cid: final(p) for cid, p in answers.items()}
```

We show you how in the worked example for this post. It matches pairs of donor records and sends the least-sure few to an LLM. Anything below the bar is held. It comes with offline tests. [Subscribe for access](/subscribe/).

Public material from others:

- **Southbridge’s data files** (company report): costs, times and research results from the test, at the links in the sources below.
- **TypeSafe’s docs** (vendor docs): the choice and yes-or-no question types.

## The fine print

- **Who published the numbers.** Every Southbridge figure comes from its own post by Hrishi Olickel, dated Sept. 20, 2026, and its published data files. I have measured none of them. Southbridge sells a tool for building data pipelines. It does not sell the decision model.
- **The test.** 200 groups of records, 205 cases and 903 rows, from Ohio’s 2022 and 2024 campaign-finance files. Southbridge picked the groups because they were hard. The Okafor names are Southbridge’s example of the problem, not a case from the results.
- **The setups and models.** LLMs alone: GPT-5.6 Luna judged all 52 batches and passed 10 to Gemini 3.7 Flash. Decision model alone: Jev 1.13. Coupled: Jev, then Luna reviewing the five groups at the top of the unsure list. The most expensive LLM was Claude Fable 5.1, run alone.
- **The scores.** Groups matched: LLMs alone 199, decision model alone 195, coupled 199, Fable 200. Decision model alone: one mistake and four groups it declined to answer. With five groups reviewed, the LLM fixed four. With ten, it fixed five and broke one, so the score stayed at 199. Southbridge ranked groups for review by invalid answers first, then answers Jev marked unsure, then the lowest probability. Its post does not say where the 53% group ranked. Southbridge itself calls these probabilities ranking signals, not guarantees.
- **The answer key.** Southbridge’s right answers were built by AI models, and the Luna model helped build them. Mistakes were checked by hand. That may favour setups that use Luna, including the coupled one. The scores are agreement with the key, not human-checked accuracy on every group.
- **Cost and time.** Coupled: 4.35 cents and 115 seconds of model time. LLMs alone: 30.12 cents and 715 seconds. Eight calls in the LLMs-alone setup were never priced, so its cost is a floor. The coupled setup had no unpriced calls, so the saving is at least 85.6%, which I round to 86%. Fable alone: $9.83 and 845 seconds. Model time adds up the time spent waiting on each model call. It is not the time the whole job took. The costs are Southbridge’s estimates, not invoices.
- **The terabyte projection.** About $8.16 million with Fable alone and $36,100 coupled. These are Southbridge’s projections from the test, not measured runs. The $1 million example is my arithmetic.
- **The household question.** Jev went from no on all 13 practice questions to all 13 right after the rewrite. Southbridge calls these development results, not the final score.
- **What we don’t know.** Whether Southbridge runs this setup for any customer, how it does on easy records, and how it does on data other than Ohio’s.
- **Trellis, Recruitly and YTAL.** Those figures come from each company’s own post. Trellis’s numbers compare an LLM with a decision model on 2,024 real past decisions: 109 mistakes for the LLM and 23 for the decision model. The 23 leaves out 31 cases Trellis treats as a policy choice. Trellis had not switched over when it wrote. Recruitly’s Apex example is from its benchmark page, and its “unsure goes to the LLM” design is from its blog. YTAL’s 4% is its own estimate.
- **This site** is independent and not affiliated with Southbridge AI, TypeSafe, Trellis, Recruitly, YTAL or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
