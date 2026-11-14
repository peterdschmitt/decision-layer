---
title: "How PostHog keeps 98.7% of its recording summaries away from the LLM with a decision model"
dek: "Stop using LLMs alone. A decision model screens every PostHog recording summary for personal details. Only the flagged few go to an LLM to be rewritten."
kind: How-to
readMinutes: 9
author: Peter Schmitt
audience: For executives whose AI writes or stores text that could hold customers’ personal details
published: 2026-11-14
lastChecked: 2026-11-14
modelVersion: PostHog’s newsletter (model not named)
stats:
  - value: "98.7%"
    label: "of summaries skip the LLM, in production"
  - value: "About a tenth"
    label: "as many false alarms with two narrow questions, not one"
  - value: "40%"
    label: "the score that sends a summary to the LLM"
statsNote: "All three come from PostHog’s own newsletter of Nov. 9, 2026. Only the 98.7% is reported as a result from live use. The fine print says more."
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

PostHog has to scrub those details before the summary is saved. Almost every summary is clean. The hard part is finding the few that aren’t. Any company whose AI stores what customers type has the same problem.

## The trap

An LLM is the kind of AI behind ChatGPT. It is good at rewriting a summary so a name or an email address disappears.

Used alone, it has to read every summary to find the few that need it. PostHog’s Jina Yoon put the choice plainly. Without the decision model, they would be “sending every summary to Gemini to catch the 1% that need it.”

Gemini is Google’s LLM. The other choice was hand-written rules, which she says “miss things.” Either way, nothing tells you how likely a summary is to hold personal details. That is an unknown risk on every one.

However, when coupled with a decision model, the LLM sees only the summaries that need it.

A decision model is an AI that answers a fixed yes-or-no question and gives a percentage. It writes no words. TypeSafe, which makes one, says that makes it far cheaper to run than an LLM.

| | An LLM alone | Coupled with a decision model |
| --- | --- | --- |
| Who reads every summary | Gemini | The decision model |
| What Gemini does | Reads every one, rewrites a few | Rewrites only the flagged few |
| What you know about the risk | Nothing, summary by summary | A score on every summary, and a bar you set |

## The story

**The check.** Each summary now gets two questions from a decision model. “Does this name a real person?” “Does this show contact details or an ID?”

Each answer comes back as a percentage. PostHog set a bar: the score at which a summary counts as flagged.

The bar is 40%. If either answer scores 40% or more, Gemini rewrites the summary without the personal details. Then the rewritten summary is checked again.

If both scores stay under the bar, the summary is saved as it is. Gemini never sees it.

**The result.** In production, 98.7% of summaries skip the LLM entirely, PostHog says. Gemini rewrites only the few the decision model flags.

I take four lessons from PostHog’s write-up. Each one fits any company that pays an LLM to read everything.

## Lesson 1: Set the bar by the mistake that costs more

A decision model is sometimes wrong, so PostHog chose which mistake it would rather make.

A false alarm sends a clean summary to Gemini. That costs one extra LLM call. A miss saves personal data as if it were clean.

The miss is far worse. So PostHog set the bar low, at 40%. A summary that scores 40% is probably clean. It still goes to the rewrite.

PostHog’s Slack bot shows the other side. It can now answer questions in a channel without being asked by name. There, the costly mistake is butting in when no one wanted it.

So a decision model asks two questions about each message. Is someone asking for information? Could PostHog answer it? It replies only when both score 85% or more.

## Lesson 2: Ask narrow questions

PostHog asks two narrow questions about personal details, not one broad one. A broad question, such as “Is there anything private here?”, leaves the decision model to guess what private means. Each narrow question looks for one thing.

The narrow pair cuts false alarms to about a tenth of what a single question produced, PostHog says. Fewer clean summaries go to Gemini for nothing.

## Lesson 3: Let the decision model pick the cheapest LLM that will do the job

The same Slack bot uses a decision model to choose which LLM handles each request. Here the decision model picks from a list instead of answering yes or no.

The question reads: “Pick the cheapest option that will most likely finish the task correctly on the first try. A failed run costs more than a smarter option.”

Each option carries a short note on what that LLM is good for. One cheap model is described as good for “short answers, lookups, summaries and very small edits.”

## Lesson 4: Let search find, and let the decision model judge

PostHog’s recording tool also lets people search recordings by theme, such as “onboarding friction.” The search sometimes brings back odd results.

A decision model can’t rank a whole list at once, PostHog says. So the search pulls a first list. Then the decision model scores how well each result matches the search, one at a time. The list is re-sorted by that score.

PostHog tried it on 20 test searches. Ranking quality improved by about 25%, it says.

## Where it failed

PostHog is candid about what didn’t work.

**Several steps at once.** It tried chaining two decision-model questions to pick recordings worth a person’s time. The requests grew so large that they jammed PostHog’s shared AI server for hours.

**Open-ended judgment.** It asked a decision model which findings from its code-review AI deserved a developer’s attention. The answers were no better than chance.

**New versions.** PostHog tested a decision model on merging similar error reports. When the model got a new version, the old bars stopped working.

PostHog made the bars adjustable for each customer. Then it reset them using examples people had checked by hand. The check kept running during that time, but PostHog ignored its answers.

For harder calls, PostHog points to Jeeves, a decision model its own AI research team built. It answers right away when it is sure and stops to reason when it is not. It is now PostHog’s default when a request names no model.

## My verdict

PostHog sums up its own lesson well. Use a decision model where a job is “too simple for a language model, yet too fuzzy for a regex.” A regex is a hand-written text rule.

Screening for personal details is that kind of job. The LLM still does the writing. The decision model decides which summaries it has to write at all.

## How it works

**What a decision model does.** You send it a short text and one or more questions. It returns a percentage for each.

PostHog’s own example: “Are hedgehogs mammals?” comes back “Yes, 0.99.”

**What the percentage means.** A decision model trained to be honest about its odds is right about as often as it says. Answers that score 80% should be right about that often, PostHog says. An answer at 50% is a coin flip.

**How it is trained.** PostHog does not say which decision model runs the personal-details check. Jeeves, its default, was trained on public data. PostHog has published its weights, training code and test data.

## What it means for you

**Risk.** With an LLM alone, nothing tells you how likely each summary was to hold personal data. With a decision model, every summary gets a number. You choose the bar, so you choose which mistake you make more often.

**Money.** PostHog published no costs. Next to sending every summary to Gemini, the LLM now sees only 1.3% of them. The decision model runs on all of them, so the net saving turns on its price.

**Customers.** The people in these recordings never asked for their names or emails to be stored. A low bar errs on their side. The Slack bot’s high bar protects people too, from an AI that butts into their conversations.

**Revenue.** PostHog reports no revenue gain, and I won’t claim one. I think the case is indirect. A tool that screens every summary for personal details is easier to sell to buyers who worry about privacy.

**Ownership.** The team that owns the stored data should own the questions and the bar. That same team re-sets the bar whenever the decision model changes version.

### The same pattern in other industries

- **Insurance claims.** Altis AI builds an AI that helps repair shops with insurance claims. A decision model decides which technical documents are worth sending to its expensive LLM.

  Altis tested the bar on past cases it had reviewed. The LLM still saw the documents behind more than 90% of those suggestions. Its CEO says that cut the cost of the LLM step by 30%.
- **Education.** Emuyn, a small Japanese app maker, had a decision model check 1,727 word groupings in its dictionary. Claude, an LLM, then looked only at the groupings the decision model doubted, and fixed the mistakes it found.
- **Hiring.** Jack & Jill had a decision model score every candidate. An LLM read only the shortlist. Its screening costs fell 88%. [How Jack & Jill did it](/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Is this live?** Yes. PostHog says the personal-details check runs in production.

**How many misses get through?** PostHog doesn’t say. It set the bar low so that misses would be rare.

**What if the decision model is down?** PostHog doesn’t say. In my code sketch below, the summary counts as flagged and goes to the rewrite. Altis AI does the same when its decision model fails.

**What happens to a summary that stays flagged?** PostHog doesn’t say. In my sketch, it is held for a person after two rewrites.

### How to make the change

1. **Find a step where an LLM reads everything** to catch the few items that need it.
2. **Write two or three narrow yes-or-no questions** that spot those items.
3. **Mark a sample by hand,** so you know which items really need the LLM.
4. **Price both mistakes.** What does a false alarm cost, and what does a miss cost?
5. **Set the bar** where the total cost of mistakes is lowest. A costly miss means a low bar.
6. **Ask the same questions of the rewritten text,** and hold anything still flagged for a person.
7. **Decide what happens when the decision model is down.** Treat every item as flagged.
8. **Run it without acting on it first,** and compare its answers with your hand-checked sample.
9. **Re-set the bar** every time the decision model changes version, before the new one acts.

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
- **The 98.7%.** PostHog’s words: “In production, 98.7% skip the LLM call entirely.” It is the share of summaries that never go to Gemini. It is not an accuracy figure, and PostHog gives no miss rate, volume, cost or speed for the check. The 1.3% in the Money section is my arithmetic from that figure. PostHog’s own “1%” is its rough estimate of how many summaries need the rewrite.
- **The bars.** 0.4 for the two personal-details questions, and 0.85 on both questions for the Slack bot. PostHog: “a false positive only costs us an extra LLM call, whereas a false negative stores personal data as clean.”
- **Narrow questions.** “Using narrow questions like this cuts false flags to about a tenth of what a single question produced.” PostHog does not give the underlying counts or publish the single question it replaced. The broad question in Lesson 2 is my illustration.
- **Search.** “On 20 test queries, this improved ranking quality by about 25%.” PostHog does not name the measure.
- **The failures.** The chained job “sent large requests – up to 32 sessions and 12-38k tokens each – which flooded the model server and blocked other products’ calls for hours.” The code-review test used five yes-or-no questions and scored an AUC of 0.52, where 0.5 is chance. The bars that changed between versions came from a test on merging similar error logs. PostHog says it kept that check “in shadow mode while recalibrating based on hand-labeled data.”
- **Which decision model.** PostHog names TypeSafe’s Jev for a tool that picks chart types and for the code-review test. It does not say which model runs the personal-details check or the Slack bot. Jeeves is “our default for any decision call at PostHog that doesn’t name a model.”
- **Jeeves.** From its GitHub README: a 9-billion-parameter model built on Qwen3.5-9B, MIT license, “trained on public data.” It answers directly at 0.9 confidence or more and reasons otherwise. On test data it was not trained on, it scored 0.905. The 0.857 it lists for Jev comes from the makers of Kev, another open decision model, on different items from the same sources.
- **TypeSafe’s claim.** PostHog cites TypeSafe that decision models are “up to 444.6x cheaper and 193.6x faster than frontier models.” That is a vendor claim, and I have not checked it.
- **Altis AI.** From co-founder and CEO Nayan Kote’s HackerNoon post, Oct. 6, 2026. The 30% is in the post’s title only. The body gives no cost table or volumes. On failures, Altis writes that they “fail open.” The “more than 90%” is how much reviewed source material was kept, not final accuracy. The post does not say whether the filter is fully live.
- **Emuyn.** From the company’s Qiita post, Nov. 14, 2026, in Japanese. A one-off cleanup, not a live service. Its LLM looked at 60 of the 1,727 groupings, about 3.5%, and fixed 42 errors. Jev cost about $0.06 for the 1,727 checks, by the company’s estimate. In a 150-pair test with known answers, Jev scored an AUC of 0.973.
- **Jack & Jill.** Those details come from my earlier post, which cites its sources.
- **The product.** The tool that summarizes recordings is PostHog’s Replay Vision.
- **The opening examples.** The colleague’s name and the email at checkout are my illustrations of what PostHog’s questions look for.
- **What we don’t know.** How many summaries PostHog screens, what the check costs, how many misses get through, what happens when the decision model is down, and where it runs. PostHog also reports no result for the Slack bot’s model picker.
- **This site** is independent and not affiliated with PostHog, TypeSafe, Google, Altis AI, Emuyn or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
