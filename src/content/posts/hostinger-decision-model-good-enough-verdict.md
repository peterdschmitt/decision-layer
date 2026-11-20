---
title: "Hostinger found a decision model about 80% cheaper than LLMs, yet fit for only one job"
dek: "Stop using LLMs alone, but test before you switch. The decision model Hostinger tested was good enough to spot phishing sites, not yet to sort support chats."
kind: Reality check
readMinutes: 10
author: Peter Schmitt
audience: For executives deciding which AI choices can move off an LLM
published: 2026-11-20
lastChecked: 2026-11-20
modelVersion: Jev, per Hostinger (version not named)
stats:
  - value: "About 80%"
    label: "lower cost than the LLMs it was priced against"
  - value: "About 5x"
    label: "faster than the most accurate LLM on each job"
  - value: "88.5%"
    label: "of phishing checks right, against 90% for the best LLM"
  - value: "79.3%"
    label: "of support chats filed right, against 86.9% for its LLM"
statsNote: "All four come from Hostinger’s own test, published Oct. 7, 2026. The cost percentage is my arithmetic. The fine print has the details."
sources:
  - title: "Hostinger: Jev AI in practice: 5x faster, but is it accurate enough? (Simon Lim and Mantas Lukauskas, Oct. 7, 2026)"
    url: https://www.hostinger.com/blog/jev-ai-in-practice/
    grade: Company report
  - title: "Unblocked: We put Jev in production against a cross-encoder (Morteza Milani, Sept. 22, 2026)"
    url: https://getunblocked.com/blog/jev-in-production-vs-cross-encoder/
    grade: Company report
  - title: "Airbnb: Frontier quality at 1% of the cost, a production benchmark of LLM classifiers (Clay Gibson and Adel Elmalaha, Nov. 3, 2026)"
    url: https://airbnb.tech/ai-ml/frontier-quality-at-1-of-the-cost-a-production-benchmark-of-llm-classifiers/
    grade: Company report
  - title: "Gen-AX: decision models against LLMs on checking help-center answers (Nov. 20, 2026, in Japanese)"
    url: https://zenn.dev/genax_corp/articles/20261109-judge-models-faq-check
    grade: Company report
  - title: "TypeSafe: Introducing System One models and Jev"
    url: https://typesafe.ai/blog/introducing-system-one-models-and-jev
    grade: Vendor claim
  - title: "TypeSafe docs: Models (how Jev is trained)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
---

Hostinger hosts websites and sells web addresses. Some web addresses are fakes, set up to trick people into typing a password. Telling a fake from a real one is a small choice. Is this a phishing site, yes or no?

Hostinger also sorts the chats its customers start with support. Each chat needs a product name, such as hosting or email.

Hostinger tested whether a decision model could make those two choices in place of its LLMs. It got two different answers.

A decision model is an AI that picks from a list it is given and says how sure it is. An LLM alone, as Hostinger put it, rarely says when it is guessing. That is an unknown risk, on every choice. Stop using LLMs alone for small choices like these.

However, when coupled with a decision model, each choice comes with a percentage. The sure ones can stand. The unsure ones go to the LLM.

Hostinger tested the decision model alone, against its LLMs. The coupled setup is my recommendation.

| | An LLM alone | A decision model coupled with the LLM |
| --- | --- | --- |
| Who makes the choice | The LLM, every time | The decision model, when it is sure |
| How sure it was | Unknown | A percentage on every choice |
| What happens when unsure | Nobody knows | The LLM makes the choice instead |

## The trap

The first trap is trusting a vendor’s best case. Hostinger tested Jev, a decision model made by a company called TypeSafe. TypeSafe’s home page said Jev was more than 190 times faster than LLMs.

It also said Jev was more than 440 times cheaper. TypeSafe’s own launch post says it expects those figures are “on the higher end of real world gains.”

The second trap is dropping an LLM that works just because a cheaper model looks close. Hostinger’s test avoided both.

## The story

**Who.** Hostinger is a large web-hosting company. Mantas Lukauskas, a data scientist there, wrote up the test with Simon Lim, a writer. They published it on Hostinger’s blog on Oct. 7.

**Before.** Hostinger compared the decision model with the smaller, cheaper LLMs it runs. Some run on its own computers. For support chats, it uses OpenAI’s GPT-5 mini.

**Job one: phishing.** Hostinger did not trust the decision model’s percentages on faith. It used one set of past examples to pick the score at which an address counts as phishing. Then it locked that score in.

Only then did it test on 781 web addresses the model had never seen. The decision model judged 88.5% of them right.

The best LLM in the test, Google’s Gemma, got 90.0% right. The decision model answered about 5 times faster than Gemma.

**Job two: support chats.** The test used 528 past chats. The decision model named the right product for 79.3% of them.

The LLM Hostinger uses today got 86.9% right. The decision model was again about 5 times faster than that LLM, and far cheaper.

**The decision.** For phishing, Hostinger wrote, it would “take that trade without much thought.” For support chats, the gap was “too much for us to switch today.”

## The twist

Hostinger wrote that “speed and price get the headlines.” But “the confidence score is the most useful part of Jev.” That score says how clear-cut each answer was.

Even a model that is almost always right can’t be left alone if nothing flags its likely mistakes. The decision model flags its own shaky answers.

Hostinger’s advice follows from that. Let the software act on the sure answers. Pass the unsure ones to a bigger model, such as the LLM you already run.

## My verdict

A decision model is good enough where it comes within a small gap of the LLM on your own examples. On phishing, it did.

It is not yet good enough to replace an LLM where the gap is large. On support chats, it was.

But the choice isn’t one model or the other. On support chats, the decision model can file the chats it is sure of. The LLM can take the rest.

Stop using LLMs alone. Couple the LLM with a decision model. Then test each job on your own examples.

## How it works

**What a decision model is.** It answers a question with a percentage for each answer it is allowed to give. It writes no words. At Hostinger, one question was “is this web address a phishing site?”

**How it is trained.** TypeSafe says Jev is trained so that its percentages match how often it is right. Hostinger wrote that it wouldn’t take that claim on faith. TypeSafe hasn’t published its training data.

**How Hostinger set it up.** Hostinger reached the decision model through OpenRouter, a service that connects to many AI models. It asked each question with a fixed list of answers, and scored every answer against a known right one.

## What it means for you

**Money.** Don’t budget on a vendor’s best case. Hostinger found costs about 80% lower than the LLMs it priced against. Each unsure choice sent to the LLM costs what it costs today. The more you send, the less you save.

**Customers.** Hostinger held back on support chats because the gap was too large. Customers feel that kind of gap when a chat lands with the wrong team. Set the highest bar where a mistake reaches a customer.

**Revenue.** Hostinger didn’t tie the test to sales. But a wrong answer can cost sales. In Hostinger’s example, a sales lead filed as spam could lose a customer.

**Risk.** Set a bar for each job: how sure the decision model must be for its answer to stand. If too many wrong answers get through, Hostinger says to rebuild the example set, not nudge the bar.

### What other companies found

- **Developer tools.** In production, Jev now picks which saved notes Unblocked’s AI agent reads before answering staff questions. In Unblocked’s test, the share of useful notes rose by about a third. [Unblocked’s write-up](https://getunblocked.com/blog/jev-in-production-vs-cross-encoder/).
- **Travel.** Airbnb screens content for breaks in its rules on pricing and payments, thousands of times a minute. It found Jev the most accurate ready-made model that answered in under a tenth of a second. A model Airbnb trained itself on its own examples did better still. [Airbnb’s test](https://airbnb.tech/ai-ml/frontier-quality-at-1-of-the-cost-a-production-benchmark-of-llm-classifiers/).
- **Customer service.** Gen-AX, a Japanese software company, found Jev matched LLMs at spotting clear faults in help-center answers. But every decision model it tested missed more than 80% of answers that left out one condition. [The write-up, in Japanese](https://zenn.dev/genax_corp/articles/20261109-judge-models-faq-check).

### The hard questions

**Did Hostinger switch for phishing?** It hasn’t said. None of its later posts mention the decision model.

**Is 1.5 points a big gap?** Hostinger judged it worth the speed and the price. On a job where each miss is costly, you might not.

**Why did support chats go worse?** Hostinger doesn’t say exactly. It writes that the decision model “only works on small, clear questions,” such as “Is this a refund request?”

**Would the coupled setup fix support chats?** No one has measured it. The test is simple to run on your own chats.

### How to make the change

1. **Find the spots where your LLM answers yes or no,** or picks from a short list. Name an owner for each.
2. **Run a decision model on those same choices for a week,** next to your current setup.
3. **Pick a bar on one set of past examples,** and lock it in.
4. **Test that bar on a second set** with known right answers.
5. **Let sure answers stand.** Send the rest to the LLM you already use.
6. **Record who made each choice,** and how sure it was.

## For your developer

Here is the pattern as code. Sure answers stand, and unsure ones go to the LLM. Then each job gets a verdict on past items the bar was not tuned on. This is my sketch, not Hostinger’s code. I haven’t run it on their data, so treat it as expected, not measured.

```python
def answer(item, decide, llm, bar):
    probs = decide(item)  # decision model: a percentage per answer
    best = max(probs, key=probs.get)
    if probs[best] >= bar:
        return best, "decision_model"  # sure: the answer stands
    return llm(item), "llm"  # unsure: the LLM you already use

def verdict(holdout, decide, llm, bar, gap=0.02):
    n = len(holdout)  # past items with known answers, not used to pick the bar
    today = sum(llm(x) == right for x, right in holdout) / n
    alone = sum(answer(x, decide, llm, 0)[0] == right for x, right in holdout) / n
    coupled = sum(answer(x, decide, llm, bar)[0] == right for x, right in holdout) / n
    if alone >= today - gap:
        return "switch"
    return "couple" if coupled >= today - gap else "keep the LLM"
```

My worked example adds picking the bar on one set and locking it in, with tests. It also reports how much of the work each model did, and the cost saved. [Subscribe for access](/subscribe/).

Public material from others:

- **[Hostinger’s write-up](https://www.hostinger.com/blog/jev-ai-in-practice/)** (company report): both tests, its tables and its advice.
- **[Unblocked’s write-up](https://getunblocked.com/blog/jev-in-production-vs-cross-encoder/)** (company report): how it built its own test from real questions.

## The fine print

- **Hostinger’s numbers.** All come from its post of Oct. 7, 2026, by Simon Lim and Mantas Lukauskas. I read it in full, including both tables. It names Jev but not the version. It hasn’t published the data. It gives no volumes, so I can’t give a yearly saving.
- **Phishing.** “Jev got 88.5% of the 781 domains right. The most accurate model in the test, a self-hosted Gemma 4 31B, reached 90.0%, so Jev was only 1.5 percentage points behind while answering 5.3x faster, in 0.38 seconds on average against 2.03.” The gap is about a dozen addresses.
- **The phishing score.** “We picked the cutoff using training examples, locked it in, and only then ran it on 781 domains it had never seen.” Hostinger doesn’t give the cutoff. It describes this method only for phishing.
- **Phishing cost.** Gemma runs on Hostinger’s own computers, so it has no price per question. Hostinger priced Jev against OpenAI’s GPT-5.6 Luna, which scored 84.5%. Jev cost about $0.021 per 1,000 web addresses, against an estimated $0.09 for Luna. That is about 77% less. Luna’s figure is Hostinger’s estimate, not a bill. Jev was 4.1 times faster than Luna.
- **Support chats.** “Jev picked the right product 79.3% of the time, against 86.9% for GPT-5 mini.” When both the product and the reason for the chat had to be right, Jev scored 42.9% and GPT-5 mini 42.4%. Jev took a median of 0.81 seconds against 4.54, and cost $0.23 per 1,000 chats against $1.27. That is about 82% less.
- **Speed.** Phishing times are averages. Support-chat times are medians.
- **LLMs and guessing.** Hostinger: “LLMs rarely say when they’re guessing.”
- **Upkeep.** Hostinger: “If too many wrong answers slip through, build a better calibration set and repeat the process rather than nudging the cutoff on the test results.”
- **Spam and sales leads.** Hostinger: “a sales lead filed as spam could cost you a customer, so we’d set a much higher bar before anything gets marked as spam.”
- **The summary line.** In Hostinger’s words: “In both tests, Jev was about 5x faster and 4 to 6 times cheaper. That’s far less than TypeSafe’s launch claims of roughly 193x faster and 444x cheaper.” Hostinger explains that TypeSafe “measured against large frontier models. We measured against the smaller, cheaper models we actually run, on real workloads.”
- **TypeSafe’s claim.** Its launch post: “This is where the claims of 193.6x faster, 444.6x cheaper on our home page come from, and we expect that these are on the higher end of real world gains.”
- **The confidence score.** Jev returns a percentage for each answer and, usually, a separate confidence score. In Hostinger’s words, confidence “tells you how clear-cut the decision was.”
- **The coupling.** Hostinger’s full advice: “let your code act on high-confidence answers, ask for confirmation on the ones in between, and pass low-confidence ones to a person or a bigger model.” It did not build or measure that setup. Sending unsure answers to your current LLM is my version of it.
- **Follow-up.** I found no later Hostinger post, changelog entry or press release that mentions Jev. That doesn’t prove it isn’t in use.
- **Unblocked.** From its post of Sept. 22, 2026, by Morteza Milani. “Jev is now making one of the decisions we care most about, on every question, in production.” The share of useful notes went from 34.8% to 46.4%. The test used 292 real questions, graded by an LLM. Unblocked: “This is one workload. Our numbers are not a benchmark and we would not hand them to you as one.” The note-picking step took 0.35 seconds at the median against 0.20, at about the same cost.
- **Airbnb.** From its post of Nov. 3, 2026. The classifier is “called thousands of times per minute.” Of Jev: “It is the most accurate off-the-shelf model we tested under 100ms.” Airbnb trained a small version of Google’s Gemma on its own examples. Training lifted that model’s F1, a standard accuracy score, “from 0.563 to 0.902.” Airbnb doesn’t say it uses Jev.
- **Gen-AX.** From its post of Nov. 20, 2026, on Zenn, in Japanese. It used public government help-center answers, with faults added on purpose. Three of its four decision models, Jev among them, matched the LLMs on clear faults. On answers missing one condition: “Decision Model の 4 つはいずれも 8 割以上を見逃し” [all four decision models missed more than 80%]. Jev answered in a median of 0.16 seconds, at about a third to a twenty-fifth of the LLMs’ cost. It is a test, not a deployment.
- **Training.** From TypeSafe’s docs page on its models.
- **This site** is independent and not affiliated with Hostinger, TypeSafe, Unblocked, Airbnb, Gen-AX, OpenAI, Google, OpenRouter or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
