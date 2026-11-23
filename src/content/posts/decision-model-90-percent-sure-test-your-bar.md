---
title: "Set your decision model’s bar on your own cases, not on its percentages"
dek: "Stop using LLMs alone. In one outsider’s test, a decision model’s very sure answers made about five times the mistakes its own numbers implied."
kind: Reality check
readMinutes: 10
author: Peter Schmitt
audience: For executives deciding how sure a decision model must be before it acts
published: 2026-11-23
lastChecked: 2026-11-23
modelVersion: jev-1.13.0 in Knudson’s test; Raindrop names no version
stats:
  - value: "About 5 times"
    label: "as many mistakes as Jev’s percentages implied, when very sure"
  - value: "About 70%"
    label: "of test cases got a very sure answer from Jev"
  - value: "Under 1%"
    label: "of an LLM’s price for each Jev answer"
statsNote: "The first two come from David J Knudson’s test of Jev, published Nov. 21, 2026. “Very sure” means 90% or more. The third compares Jev with OpenAI’s Astra in Raindrop’s test of Nov. 18, 2026. The first and third are my arithmetic. The fine print has the details."
sources:
  - title: "David J Knudson: At a 0.9 threshold, three decision APIs implied under 5% error. Five annotators said 17–37% (Towards AI, Nov. 21, 2026)"
    url: https://pub.towardsai.net/at-a-0-9-threshold-three-decision-apis-implied-under-5-error-five-annotators-said-17-37-70a55bf1abf0
    grade: Independent reporting
  - title: "Afika Nyati, Raindrop: A practical guide to choosing decision models (Nov. 18, 2026)"
    url: https://www.raindrop.ai/blog/choosing-decision-models/
    grade: Company report
  - title: "Raindrop’s data and code for the test"
    url: https://raindrop-ai.github.io/choosing-decision-models/
    grade: Company report
  - title: "recalibench: Jev’s percentages on public injury and claims data (GitHub, Nov. 22, 2026)"
    url: https://github.com/dagap/recalibench
    grade: Independent reporting
  - title: "TypeSafe docs: confidence"
    url: https://docs.typesafe.ai/confidence
    grade: Official docs
---

David J Knudson wanted to know whether an AI means what it says. This month he tested three decision models on his own, with no tie to their makers. He spent more than twenty years in hotel operations and is now moving into IT.

A decision model is an AI that answers a fixed question by giving each possible answer a percentage. It writes no words. Knudson asked a simple question. When a decision model says it is very sure, how often is it right?

That matters to anyone who uses AI to make choices. An LLM alone gives an answer, but no built-in number on how sure it is. That is an unknown risk. Stop using LLMs alone.

However, when coupled with a decision model, the LLM handles the open-ended work. The decision model makes the fixed choices it is sure of.

The bar is how sure the decision model must be before its answer is used. Below the bar, the LLM takes the case.

Knudson’s test shows why you set that bar on your own cases. Higher percentages did mean fewer mistakes. But the percentages did not tell him how many mistakes to expect.

## The test

Knudson used 300 pairs of sentences from a public set that researchers use to test AI. Each pair asks one question. Does the second sentence follow from the first, contradict it, or neither?

Five people had already answered each pair. On some pairs, all five agreed. On others, they split. Knudson picked pairs of both kinds on purpose.

He tested Google’s Gemini Decisions, OpenAI’s Decisions and TypeSafe’s Jev. He wrote down his method and froze it before he started. He paid for the calls himself.

## Five questions, and what the test found

### Do the percentages match the mistakes?

No. I’ll call a model “very sure” when it puts 90% or more on one answer.

Take Jev. On the pairs where it was very sure, its percentages averaged about 98%. So its own numbers implied it would be wrong on about two pairs in a hundred.

Judged against the answer most of the five people gave, it was wrong on about nine in a hundred. That is about five times the mistakes its numbers implied.

Gemini’s gap was smaller. OpenAI’s was far larger. Its very sure answers were wrong about three times in ten.

| Decision model | How sure it said it was | How often it was right |
| --- | --- | --- |
| Jev | About 98% | About 92% |
| Gemini Decisions | About 95% | About 91% |
| OpenAI Decisions | About 98% | About 70% |

So a percentage is not an error rate. Jev and Gemini were still right more than nine times in ten when very sure. But their numbers said they would do better.

### Does a higher bar mean fewer mistakes?

Yes, on every model. Raising the bar always cut mistakes, as long as some pairs still cleared it.

Here is Jev again. With the bar at 90%, it was sure enough on about seven in ten pairs. With the bar at 99%, it was sure enough on fewer than half.

But on those pairs, its mistakes fell from about nine in a hundred to about five. In a coupled setup, the pairs it skipped would go to the LLM.

That is the trade. A higher bar means fewer mistakes from the decision model. It also means more work for the LLM.

Knudson put it simply. “Use the number to sort your cases. Take the error rate from your own hard ones.”

### Is every decision model the same?

No. At the same bar, they took very different shares of the work.

With the bar at 90%, Gemini Decisions was sure enough on about half the pairs. With the bar at 99%, it was sure on none. OpenAI’s model was sure most often, but it was also wrong most often.

OpenAI’s mistakes followed a pattern. Some pairs were plain contradictions that all five people agreed on. OpenAI’s model called most of them “neither.”

Knudson found that only by counting mistakes separately for “follows,” “contradicts” and “neither.” One overall score would have hidden it.

### Does it give the same answer twice?

Not always. Knudson asked each model every question three times.

Gemini and OpenAI gave the same percentages every time. Jev’s percentages moved on more than half the pairs, usually by about one point. Its top answer changed on about one pair in a hundred.

That is small. Check it before you go live.

### Could you just ask the LLM how sure it is?

You can ask. Knudson did, as a point of comparison. He asked an LLM, Claude, to give three percentages for each pair.

Claude was right more often than any of the three decision models. When it was very sure, it was rarely wrong. But its percentages were off too, in the other direction. They implied more mistakes than it made.

It was very sure less often than any decision model. Its top answer also changed more often from run to run. Knudson makes no claim that either kind of number is better.

So use each where it does best. The decision model takes the cases it is very sure of. There, Jev was right more than nine times in ten. The LLM takes the rest.

## How it works

**What the percentage means.** A decision model gives each allowed answer a percentage, and the top one is its pick. TypeSafe’s docs explain what a very sure bar means. It means acting “when the chance of the wrong option is under 10%.”

**How it is trained.** TypeSafe says Jev is trained so that its percentages match how often it is right.

**Why the numbers can be off.** On Knudson’s pairs, Jev’s very sure answers were wrong about nine times in a hundred. Its own percentages said about two. A percentage means what it says only if it matches how often the model is right on your kind of case.

**What all three makers say.** Each tells customers to set the bar on their own examples. TypeSafe says, “Start with conservative thresholds, test with your own data, and adjust as you observe results.” Google and OpenAI say much the same.

**How the two work together.** The decision model answers each case. When its answer clears the bar, that answer is used. When it doesn’t, the LLM takes the case, as it does today.

| | LLM alone | Coupled, bar set on your cases |
| --- | --- | --- |
| How sure it is | No built-in number | A percentage you have tested |
| Who answers | The LLM, every time | The decision model above the bar, the LLM below |
| What it costs | The LLM’s price on every case | The LLM’s price only below the bar |

## What it means for you

**Money.** Each case below the bar costs what an LLM call costs today. Raindrop, a company that sells tools that watch AI for problems, ran a separate test. There, a Jev answer cost under 1% of an LLM answer. So the share that clears the bar sets the saving.

**Customers.** In the same test, Jev answered about 15 times faster than the LLM. Cases below the bar wait as long as they do today.

**Revenue.** Neither test tied the bar to sales. A bar set too high sends work back to the slow, costly path. A bar set too low lets mistakes through to customers.

**Risk.** A higher bar lowers the decision model’s mistakes. That held for all three models. But only your own cases tell you the error rate on your work.

### Decide which mistake costs more

Raindrop’s research engineer, Afika Nyati, tested 11 decision models. Each answered more than a thousand questions from public test sets.

On yes-or-no questions, Jev missed fewer real problems than GLiDE, a decision model from Fastino. But Jev raised more false alarms.

“Choosing between them therefore means weighing the cost of unnecessary flags against the cost of problems going undetected,” Nyati wrote. The same holds when you set the bar.

### The same pattern in other industries

- **Workplace safety.** A developer adjusted Jev’s percentages using past injury reports with known answers. Afterward, Jev was sure enough on more than nine in ten cases, up from about four in five, while still right 99 times in a hundred. [The recalibench project](https://github.com/dagap/recalibench).
- **Database monitoring.** pgEdge lets Jev decide whether a database alert is real. Its software sets a bar for dismissing one. [pgEdge’s announcement](https://www.pgedge.com/press-releases/pgedge-ai-dba-workbench-now-supports-jev-and-other-decision-models).
- **Hiring.** Jack & Jill had a decision model score every candidate. An LLM read only the shortlist, and screening costs fell 88%. [How Jack & Jill did it](https://decision-layer-indol.vercel.app/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Does this mean decision models can’t be trusted?** No. A higher bar still meant fewer mistakes for every model. What failed was reading the percentage as the error rate.

**Is a sentence puzzle like my work?** No. These were public test pairs. Your cases may be easier or harder.

**Is this the current Jev?** No. Knudson used an older version and did not test the newer one.

**Has anyone checked his work?** Not in public. He offers his data and code to anyone who asks.

### How to make the change

1. **Pull a few hundred past cases** for one choice your LLM makes today, with the right answers.
2. **Include the hard ones,** where your own people disagree.
3. **Run the decision model on all of them,** and keep its percentages.
4. **For each possible bar, count two things:** the share of cases it clears, and the mistakes among those.
5. **Pick the lowest bar with a mistake rate you accept.** Send the rest to the LLM.
6. **Count mistakes for each answer,** not just overall.
7. **Ask each question more than once** before you go live.

## For your developer

Here is the bar check as code. It takes your past cases, each with the decision model’s percentages and the right answer. For each bar, it reports the share the decision model takes. It also reports the error its numbers imply and the error you actually saw. This is my sketch. I haven’t run it on anyone’s data, so treat it as expected, not measured.

```python
def bar_report(cases, bars=(0.7, 0.8, 0.9, 0.95, 0.99)):
    # cases: list of (probs, truth); probs maps each allowed answer to a percentage as 0-1
    rows = []
    for bar in bars:
        kept = [(p, t) for p, t in cases if max(p.values()) >= bar]
        if not kept:
            rows.append((bar, 0.0, None, None))  # nothing clears this bar
            continue
        implied = sum(1 - max(p.values()) for p, _ in kept) / len(kept)
        wrong = sum(max(p, key=p.get) != t for p, t in kept) / len(kept)
        rows.append((bar, len(kept) / len(cases), implied, wrong))
    return rows  # bar, share the decision model takes, error implied, error seen

def pick_bar(rows, max_wrong=0.05):
    ok = [r for r in rows if r[3] is not None and r[3] <= max_wrong]
    return min(ok)[0] if ok else None  # lowest bar that meets your limit, else keep the LLM
```

My worked example adds a mistake count for each answer, a repeat check and the cost of the share that goes to the LLM. [Subscribe for access](https://decision-layer-indol.vercel.app/subscribe/).

## The fine print

- **Knudson’s post.** David J Knudson, “At a 0.9 Threshold, Three Decision APIs Implied Under 5% Error. Five Annotators Said 17–37%,” Towards AI, Nov. 21, 2026. I read the full text through his Medium feed. His background is from his own site, davidjknudson.com.
- **His independence.** In his words: “I have no relationship with Google, OpenAI, TypeSafe or Anthropic beyond using their products. I paid for the OpenAI and TypeSafe calls myself; Gemini’s ran on its free tier and the Claude arm on my own subscription.”
- **The models.** Google’s gemini-decision-1, OpenAI’s gpt-6-luna through its Decisions API, and Jev pinned to jev-1.13.0. The reference LLM was Claude Sonnet 5.5.
- **The data.** 300 pairs from the SNLI 1.0 test set: 100 where all five people agreed, 100 where four did and 100 where three did. Each model saw every pair three times on Nov. 16, 2026. The first run is the scored one. He froze the design in his own repository at 11:13 UTC that day. It was not filed with an outside registry. He had used the same pairs in an October test.
- **Weighting.** His headline figures are weighted back to how often each level of agreement occurs in the full SNLI test set. He writes that this “undoes my equal-thirds sampling.” Without the weighting, Jev answered 200 of 300 pairs at 90%.
- **“Implied” error.** Knudson averages one minus the top percentage over the pairs that clear the bar. He calls it “promised error” but says it is “not a vendor promise.” I use “implied.” At 90%, it was 1.7% for Jev, 4.7% for Gemini and 1.8% for OpenAI.
- **Two ways to count a mistake.** Against the answer most of the five people gave, the error at 90% was 8.5% for Jev, 8.7% for Gemini and 30.1% for OpenAI. Knudson’s title uses a stricter count. It treats a pair where two of five people disagreed as 0.4 wrong. On that count the errors were 17.4%, 17.1% and 36.7%. OpenAI’s rose by about a fifth. I use the majority count in the body because it is closer to “was it wrong?”
- **The ratios.** Jev: 8.5% against 1.7% implied is 5.0 times, by my arithmetic. Gemini: 8.7% against 4.7%, about 1.9 times. OpenAI: 30.1% against 1.8%, about 17 times. The “how sure it said” column is one minus the implied error.
- **Share answered.** At 90%: about 70% for Jev, 54% for Gemini and 76% for OpenAI, weighted. At 99%: 44% for Jev, 0% for Gemini and 52% for OpenAI. Jev’s majority-count error fell from 8.5% at 90% to 4.6% at 99%. I read these from his Figure 2.
- **His quotes.** His advice, verbatim: “Use the number to sort your cases. Take the error rate from your own hard ones.” On sorting, in full: “for each of the three, every higher threshold that kept anything meant fewer errors against these five annotators.”
- **OpenAI’s pattern.** “Of the 44 unanimous contradictions, OpenAI called 39 ‘neutral,’ which accounts for 39 of its 41 misses on those pairs.”
- **Repeats.** Jev’s percentages moved on 55.3% of pairs, and its top answer changed on 1.3%. On the median pair, the largest change between two calls was 0.01. Gemini and OpenAI returned the same percentages on all three runs.
- **Claude.** At 90%, its stated percentages implied 7.2% wrong. It was 1.1% wrong by the majority count and 8.6% by the stricter count. It answered 45% of pairs at that bar. Its overall accuracy by the majority count was 88.8%, against 82.6% for Jev, 81.6% for Gemini and 63.7% for OpenAI. Its numbers moved on 80.3% of pairs, and its top answer changed on 4.3%. Knudson gives no cost and runs it as a reference only.
- **What Knudson can’t rule out.** SNLI has been public since 2015, so the models may have seen it. His formal test assumes the five people’s answers are interchangeable, and his own data show the first answer agrees with the majority more often than expected.
- **Checking his work.** He offers “the manifest, the design document, the raw responses and the analysis code to anyone who asks.” They are not public. I found no reply from Google, OpenAI or TypeSafe.
- **Training.** From TypeSafe’s docs page on its models.
- **Raindrop’s test.** Afika Nyati, Raindrop, Nov. 18, 2026, run Nov. 9. 1,005 questions from public test sets, given to 11 decision models and two LLMs. Jev was right on 88.8%, GLiDE v1.2 on 94.9% and OpenAI’s Astra, an LLM, on 99.4%. Raindrop scored only top answers and did not test any bar. The Jev version is not named.
- **Raindrop’s price and time.** Jev cost $0.028 per 1,000 requests against $7.319 for Astra. That is about 0.4%, by my arithmetic. Median time was 219 ms against 3,217 ms, about 15 times faster.
- **Nyati’s quote.** From the post’s section on error costs, verbatim.
- **Raindrop’s yes-or-no items.** On 214 of them, Jev missed 3 real problems and raised 5 false alarms. GLiDE missed 6 and raised 1. Raindrop’s heading says to consider Jev “when misses are costly,” and its closing advice says GLiDE “may still be the better choice” when error costs are high. TypeSafe’s chief executive quoted the heading on X.
- **recalibench.** A GitHub project by a developer who goes by dagap, created Nov. 22, 2026, on public OSHA injury and workers’ compensation data, with jev-1.14.0. On “Did this incident result in an amputation?” at a 95% bar, the share handled went from 81% to 94% “at 99% accuracy” after the percentages were adjusted on past cases. I read its README, not its code.
- **pgEdge.** From its announcement of Nov. 19, 2026. Its software dismisses an alert when Jev is at least 50% sure it is not real. Jack & Jill is from my earlier post, which cites its sources.
- **How solid this is.** Knudson’s test is independent but small, on one public task with one wording of the question. Raindrop’s is a company’s own test on public questions. Neither tested business work. Treat both as early signs.
- **This site** is independent and not affiliated with Google, OpenAI, TypeSafe, Anthropic, Raindrop, Fastino, pgEdge or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
