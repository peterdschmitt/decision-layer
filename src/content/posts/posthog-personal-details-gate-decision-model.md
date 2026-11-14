---
title: "How PostHog’s decision model lets 98.7% of session summaries skip the LLM"
dek: "Stop using LLMs alone. PostHog has a decision model check each recording summary for personal details. Only the flagged ones go to an LLM to be rewritten. Here is what it learned."
kind: How-to
readMinutes: 9
author: Peter Schmitt
audience: For executives whose AI writes or stores text that could hold customers’ personal details
published: 2026-11-14
lastChecked: 2026-11-14
modelVersion: not named by PostHog
stats:
  - value: "98.7%"
    label: "of summaries skip the LLM, in production"
  - value: "About a tenth"
    label: "the false alarms, with two narrow questions instead of one"
  - value: "40%"
    label: "the low bar, because missing personal details costs most"
  - value: "About 25%"
    label: "better search results once the decision model re-sorts them"
statsNote: "All four come from PostHog’s own newsletter of Nov. 9, 2026, about its production use. PostHog gave no volumes or costs. The fine print says more."
sources:
  - title: "PostHog: Not everything needs an LLM (Jina Yoon, Nov. 9, 2026)"
    url: https://posthog.com/newsletter/decision-models
    grade: Company report
  - title: "PostHog Jeeves on GitHub: README"
    url: https://github.com/PostHog/jeeves
    grade: Company report
  - title: "Altis AI: Using Jev to Reduce Our Reasoner Cost by 30% (Nayan Kote, HackerNoon, Oct. 6, 2026)"
    url: https://hackernoon.com/using-jev-to-reduce-our-reasoner-cost-by-30percent
    grade: Company report
  - title: "Emuyn LLC on Qiita: dictionary review with Jev and Claude Code (Nov. 14, 2026)"
    url: https://qiita.com/emuyn/items/50bbed74e49e49198587
    grade: Company report
---

PostHog makes tools that show software teams how people use their apps. One of them watches recordings of users clicking around and writes a short summary of each visit.

A summary can pick up things it should never keep. A user types a colleague’s name into an invite form. Another enters an email address at checkout.

PostHog has to scrub those details before the summary is saved. Almost every summary is clean. The hard part is finding the few that aren’t.

## The trap

An LLM is the kind of AI behind ChatGPT. It is good at rewriting a summary so a name or an email address disappears.

Used alone, it has to read every summary to find the few that need it. PostHog’s Jina Yoon put the choice plainly. Without another tool, they would be “sending every summary to Gemini to catch the 1% that need it.”

Gemini is Google’s LLM. The other choice was hand-written rules, which she says “miss things.” Either way, nothing tells you how likely a summary is to hold personal details. That is an unknown risk on every one.

However, when coupled with a decision model, the LLM sees only the summaries that need it.

A decision model is an AI that answers a fixed yes-or-no question and gives a percentage. It writes no words, so it is fast and cheap.

## The story

**The gate.** Each summary now gets two questions from a decision model. “Does this name a real person?” “Does this show contact details or an ID?”

Each answer comes back as a percentage. PostHog set a bar: the score at which a summary counts as flagged.

The bar is 40%. If either question scores that high, Gemini rewrites the summary without the personal details. Then the decision model checks it again.

If both scores stay under the bar, the summary is saved as it is. Gemini never sees it.

**The result.** In production, 98.7% of summaries skip the LLM entirely, PostHog says. Gemini rewrites only the few the decision model flags.

PostHog has written up four lessons from running decision models like this. I think each one applies well beyond session recordings.

## Lesson 1: Set the bar by the mistake that costs more

A decision model is sometimes wrong, so PostHog chose which mistake it would rather make.

A false alarm sends a clean summary to Gemini. That costs one extra LLM call. A miss saves personal data as if it were clean.

The miss is far worse. So PostHog set the bar low, at 40%. Anything that looks even slightly like personal data goes to the rewrite.

PostHog’s Slack bot shows the other side. It can now answer questions in a channel without being asked by name. There, the costly mistake is butting in when no one wanted it.

So the bot asks two questions about each message. Is someone asking for information? Could PostHog answer it? It replies only when both score 85% or more.

## Lesson 2: Ask narrow questions

PostHog asks two narrow questions about personal details, not one broad one.

The narrow pair cuts false alarms to about a tenth of what a single question produced, PostHog says. Fewer clean summaries go to Gemini for nothing.

## Lesson 3: Let the decision model pick the cheapest LLM that will do the job

The same Slack bot uses a decision model to choose which LLM handles each request. It asks one multiple-choice question.

The question reads: “Pick the cheapest option that will most likely finish the task correctly on the first try. A failed run costs more than a smarter option.”

Each option carries a short note on what that LLM is good for. One cheap model is described as good for “short answers, lookups, summaries and very small edits.”

## Lesson 4: Let search find, and let the decision model judge

The same tool lets people search recordings by theme, such as “onboarding friction.” The search sometimes brings back odd results.

So PostHog lets the search pull a first list. Then the decision model asks of each result whether it matches what the person searched for. The list is re-sorted by that score.

PostHog tried it on 20 test searches. Ranking quality improved by about 25%, it says.

## Where it failed

PostHog is candid about what didn’t work.

**Several steps at once.** It tried chaining two decision-model questions to pick recordings worth a person’s time. The requests grew so large that they jammed PostHog’s shared AI server for hours.

**Open-ended judgment.** It asked a decision model which findings from its code-review AI deserved a developer’s attention. The answers were no better than chance.

**New versions.** In a test on merging similar error reports, the bars that worked on one version of a decision model shifted on the next. PostHog now sets the bars separately for each customer project. It kept the check running without acting on it until the bars were set again from hand-checked examples.

PostHog then built its own decision model, Jeeves. It answers right away when it is sure and stops to reason when it is not. It is now PostHog’s default.

## My verdict

PostHog sums up its own lesson well. Use a decision model where a job is “too simple for a language model, yet too fuzzy for a regex.” A regex is a hand-written text rule.

Screening for personal details is that kind of job. The LLM still does the writing. The decision model decides which summaries it has to write at all.

## How it works

**What a decision model does.** You send it a short text and one or more questions. It returns a percentage for each.

PostHog’s own example: “Are hedgehogs mammals?” comes back “Yes, 0.99.”

**What the percentage means.** A well-trained decision model is right about as often as it says. Answers that score 80% should be right about eight times in ten, PostHog says. An answer at 50% is a coin flip.

**How it is trained.** PostHog does not say which decision model runs the personal-details check. Jeeves, its default, was trained on public data. PostHog has published its weights, training code and test data.

## What it means for you

**Risk.** With an LLM alone, every summary goes through and nothing tells you which ones held personal data. With a decision model, every summary gets a number. You choose the bar, and you know which way your mistakes will lean.

**Money.** PostHog published no costs. But the expensive LLM now runs on only the small share of summaries that need it. The decision model is the step that runs on every one.

**Customers.** People whose sessions are recorded expect their names and emails not to be kept. A low bar errs on their side.

**Revenue.** This post shows no revenue gain. The gain is a privacy check on every summary, without paying the LLM to read every one.

**Ownership.** The team that owns the data should own the questions and the bar. Someone should re-check the bar whenever the decision model changes version.

### The same pattern in other industries

- **Insurance claims.** Altis AI builds an AI that helps repair shops with insurance claims. A decision model decides which technical documents are worth sending to its expensive LLM. It tuned the bar to keep the material behind more than 90% of suggestions it had already reviewed.
- **Education.** Emuyn, a small Japanese app maker, had a decision model check 1,727 word groupings in its dictionary. Claude, an LLM, then looked at only the few dozen that scored low and fixed the mistakes it found.
- **Hiring.** Jack & Jill had a decision model score every candidate. An LLM read only the shortlist. Its screening costs fell 88%. [How Jack & Jill did it](/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Is this in production?** Yes, PostHog says the personal-details check runs in production. It gives no volumes, costs or error rates.

**How many misses get through?** PostHog doesn’t say. The bar is set low so that misses are rare. The post gives no measured rate.

**What if the decision model is down?** PostHog doesn’t say. In my own version, a summary counts as flagged and goes to the rewrite.

**Who should own it?** The team that owns the stored data, with the bar written down and checked at every model change.

### How to make the change

1. **Find a step where an LLM reads everything** to catch the few items that need it.
2. **Write two or three narrow yes-or-no questions** that spot those items.
3. **Label a sample by hand,** so you know which items really need the LLM.
4. **Price both mistakes.** What does a false alarm cost, and what does a miss cost?
5. **Set the bar** where the total cost of mistakes is lowest. A costly miss means a low bar.
6. **Check the LLM’s work again** with the same questions.
7. **Re-set the bar** every time the decision model changes version, before the new one acts.

## For your developer

Here is the pattern as code. The decision model asks two narrow questions. A summary at or over the bar goes to the LLM to be rewritten and is checked again. A clean one is saved and the LLM is never called. This is my sketch, not PostHog’s code. I haven’t run it on PostHog’s data, so treat it as expected, not measured.

```python
QUESTIONS = ["Does this name a real person?", "Does this show contact details or an ID?"]

def scrub(summary, decide, rewrite, bar=0.40, max_rewrites=2):
    calls = 0
    while True:
        try:
            flagged = any(decide(summary, q) >= bar for q in QUESTIONS)  # decision model: chance of personal details
        except Exception:
            flagged = True  # decision model down: treat as flagged, never save unchecked
        if not flagged:
            return summary, calls  # clean: saved as is
        if calls == max_rewrites:
            return None, calls  # still flagged after the rewrites: hold it for a person
        summary = rewrite(summary)  # the LLM rewrites it without the personal details
        calls += 1
```

My worked example shows how. It screens a set of summaries, counts false alarms and misses, and picks the bar from what each mistake costs you. It comes with tests. [Subscribe for access](/subscribe/).

Public material from others:

- **[PostHog’s newsletter](https://posthog.com/newsletter/decision-models)** (company report): all four lessons, with the exact questions and bars.
- **[PostHog’s Jeeves](https://github.com/PostHog/jeeves)** (company repo): its own decision model that reasons when unsure, with weights, training code and data.

## The fine print

- **Who published the numbers.** Every PostHog figure comes from “Not everything needs an LLM,” by Jina Yoon, in PostHog’s newsletter, dated Nov. 9, 2026. I have measured none of it. PostHog sells product analytics and developer tools, not decision models.
- **The 98.7%.** PostHog’s words: “In production, 98.7% skip the LLM call entirely.” It is the share of summaries that never go to Gemini. It is not an accuracy figure, and PostHog gives no miss rate, volume, cost or speed for the check.
- **The bars.** 0.4 for the two personal-details questions, and 0.85 on both questions for the Slack bot. PostHog: “a false positive only costs us an extra LLM call, whereas a false negative stores personal data as clean.”
- **Narrow questions.** “Using narrow questions like this cuts false flags to about a tenth of what a single question produced.” PostHog does not give the underlying counts.
- **Search.** “On 20 test queries, this improved ranking quality by about 25%.” PostHog does not name the measure.
- **The failures.** The chained job “sent large requests – up to 32 sessions and 12-38k tokens each – which flooded the model server and blocked other products’ calls for hours.” The code-review test used five yes-or-no questions and scored an AUC of 0.52, where 0.5 is chance. The bars that changed between versions came from a test on merging similar error logs. PostHog says it kept that check “in shadow mode while recalibrating based on hand-labeled data.”
- **Which decision model.** PostHog names TypeSafe’s Jev for its chart picker and the code-review test. It does not say which model runs the personal-details check or the Slack bot. Jeeves is “our default for any decision call at PostHog that doesn’t name a model.”
- **Jeeves.** From its GitHub README: a 9-billion-parameter model built on Qwen3.5-9B, MIT license, “trained on public data.” It answers directly at 0.9 confidence or more and reasons otherwise. On test data it was not trained on, it scored 0.905 against 0.857 for Jev, by PostHog’s own measure.
- **TypeSafe’s claim.** PostHog cites TypeSafe that decision models are “up to 444.6x cheaper and 193.6x faster than frontier models.” That is a vendor claim, and I have not checked it.
- **Altis AI.** From co-founder and CEO Nayan Kote’s HackerNoon post, Oct. 6, 2026. The title claims a 30% cut in what its LLM step costs, but the body gives no cost table or volumes. The “more than 90%” is how much reviewed source material was kept, not final accuracy. The post does not say whether the filter is fully live.
- **Emuyn.** From the company’s Qiita post, Nov. 14, 2026, in Japanese. A one-off cleanup, not a live service. Jev cost about $0.06 for the 1,727 checks, by the company’s estimate. In a 150-pair test with known answers, Jev scored an AUC of 0.973.
- **Jack & Jill.** Those details come from the company’s own report.
- **The product.** The tool that summarizes recordings is PostHog’s Replay Vision. Emuyn’s LLM looked at 60 of the 1,727 groupings, about 3.5%, and fixed 42 errors.
- **The opening examples.** The colleague’s name and the email at checkout are my illustrations of what PostHog’s questions look for.
- **What we don’t know.** How many summaries PostHog screens, what the check costs, how many misses get through, and what happens when the decision model is down.
- **This site** is independent and not affiliated with PostHog, TypeSafe, Google, Altis AI, Emuyn or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
