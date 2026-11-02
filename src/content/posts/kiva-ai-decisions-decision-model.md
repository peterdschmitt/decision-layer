---
title: "How a software company cut AI decision costs about 90% with a decision model"
dek: "Stop using LLMs alone. Kiva’s LLM was 70% sure even when it was wrong. Kiva coupled it with a decision model. None of the decisions Kiva compared got worse."
kind: How-to
readMinutes: 11
author: Peter Schmitt
audience: For executives and operations leaders whose AI already makes decisions no one sees
published: 2026-11-02
lastChecked: 2026-11-02
modelVersion: jev-1.13.0
stats:
  - value: "About 90%"
    label: "lower cost on the five decisions Kiva priced"
  - value: "0"
    label: "of the seven decisions Kiva compared got worse"
  - value: "4.5x"
    label: "faster, at best, on the seven decisions Kiva compared"
  - value: "2 days"
    label: "to move ten decisions to the decision model"
statsNote: "All four figures come from Kiva’s own test, published by its chief technology officer on Sept. 21, 2026. Kiva ran its old LLM and the decision model on the same test cases. The fine print says what the test can and can’t show."
sources:
  - title: "Kiva Tech Blog: Evaluating our move of a live service’s decisions to Jev (Kiva CTO, Sept. 21, 2026; in Japanese)"
    url: https://zenn.dev/kiva/articles/c325f91bd8eab8
    grade: Company report
  - title: "Samurai App, Kiva’s work platform for companies"
    url: https://samuraiax.com/
    grade: Official docs
  - title: "Isotopes AI: Beyond the leaderboard. Decision models in a real workflow (Prasanth Jayachandran, Oct. 15, 2026)"
    url: https://isotopes.ai/blog/decision-models
    grade: Company report
  - title: "TypeSafe docs: Noul (yes-or-no questions answered with a probability)"
    url: https://docs.typesafe.ai/primitives/noul.md
    grade: Official docs
  - title: "TypeSafe docs: Models (how Jev is trained and customized)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
---

Kiva, a software company in Japan, sells companies an AI assistant that does work for them. Staff can schedule a task, and the assistant’s AI agent runs it on its own.

When a task ended, an LLM, the kind of AI behind ChatGPT, read the agent’s last message. It decided whether the task had worked. Then the app told the user.

In Kiva’s tests, the LLM sometimes got it wrong. It judged finished tasks as failed, which would send the user a false notice. One message it misread said, “The investigation is complete. The two items that need a decision have been handed to the person in charge.”

The LLM also gave a number for how sure it was. That number meant little on its own. When Kiva had the LLM work a computer screen, step by step, it was about 95% sure of the steps it got right.

It was still 70% sure of the steps it got wrong.

## The trap

That is the trap of using an LLM alone. No one automates a process and then checks every answer by hand. So the LLM runs, and you take an unknown risk.

Kiva’s product made many decisions like these behind the scenes. Is this document safe to read? Does this message break a company rule? Did the task succeed?

Every one ran on the LLM’s own guess about how sure it was.

However, when coupled with a decision model, each decision comes back with a number you can use. A decision model is an AI that picks from a fixed list of answers and says how sure it is. You set a bar, a level of confidence, and the system acts above it.

The LLM keeps doing the agent’s work: reading, writing and acting. The decision model makes the decisions.

In September, Kiva’s chief technology officer, Uchida, coupled the company’s LLM with a decision model called Jev, from the company TypeSafe. Jev took over ten of those decisions. The switch took two days.

Uchida then published the results, the mistakes included. Seven of the decisions had an LLM version to compare against. Three got better, and four stayed the same. None got worse.

Those seven also ran up to 4.5 times faster. Kiva had costs for five of them. Those cost about 90% less.

Here is what I take from Kiva’s write-up. I think it applies to any company whose AI makes decisions no one sees.

## Takeaway 1: an LLM’s own confidence is not a measure

Ask an LLM how sure it is, and it will give you a number. But that number is a guess, written like any other text.

The right steps did score higher. But nobody could know where to draw the line without measuring each decision first. The LLM’s number, Uchida wrote, “has no absolute meaning.”

TypeSafe says Jev is built to give a number that means what it says. If it says 90% sure, it should be right about nine times in ten.

## Takeaway 2: run both on the same cases before you switch

Kiva did not switch on faith. For every decision, it ran the old LLM and Jev on the same test cases. Only then did it switch over.

Kiva’s usual code tests passed with both models. So those tests couldn’t show which model judged better. “This kind of change can’t be judged without measuring it,” Uchida wrote.

The test found the problem with the task notices. The old LLM got three of the test answers wrong. Each time, a finished task was reported as failed.

Jev had three answers to choose from: succeeded, failed or “needs a person.” At first it made the same mistake. Kiva then added one sentence to the description of “needs a person”: handing finished work to a person does not mean the task needs a person. After that, Jev got every case right.

## Takeaway 3: put the bar on the safe answer

Kiva asked Jev to sort each incoming document. It could be clean, or one of four kinds of attack. An attack here means hidden text that tries to take over the AI.

At first, Kiva stopped a document only when Jev was sure enough of one answer. That backfired.

The worst attacks looked like two kinds of attack at once. So Jev split its answer between them and wasn’t sure of either. Its confidence fell to about 45%. With a bar at 50%, the attack would have got through.

So Kiva put the bar on one question instead: how likely is this document to be clean? That number doesn’t split, whatever kind of attack it is. Kiva did the same for “did the task succeed?”

## Takeaway 4: when it goes wrong, fix the wording, not the bar

One decision did get worse at first, before Kiva fixed it. It chose which of the agent’s skills should handle a request. A skill is a set of steps the agent knows.

Jev judges each option on its own. It doesn’t compare them side by side, the way an LLM reads a whole list. So it struggled to pick the single best one.

Raising the bar didn’t fix it. Rewriting the options did. Kiva added a sentence to the description of some skills, saying what each one covers or doesn’t.

A request to book paid leave had been matched to a skill for looking up other software. After the new sentence, that match fell away. The decision ended up as good as the LLM had been.

But a “this does not cover” line can also turn away requests that belong. In one draft Uchida tried, Jev’s confidence in a correct match fell from 84% to well below the bar. So check case by case, not just the average.

## Takeaway 5: plan for the day the decision model is down

The Jev service Kiva used was still an early test version. So Kiva kept a backup in case Jev failed: a fast, general LLM.

That LLM gave no percentages. So none of its answers could clear the bar. During an outage, users would have got no task notices at all.

Kiva made two fixes. First, the backup is now the old LLM setup, which gives a score of its own. Second, that score gets its own, stricter bar, because an LLM’s own scores run high.

## How it works

**What a decision model does.** You send it the text to judge and a question. You also send the answers you allow. It returns a percentage for each one, in a single step.

It writes no words. That is why it is fast and cheap.

**What Kiva asked.** Some questions were yes or no. Others were one choice from a list.

Kiva tried a third kind, a score on a scale. It cost more and made the bar harder to set, so Kiva chose yes or no instead.

**How it is trained.** TypeSafe says it trains Jev so its percentages match how often it is right. It has not said what data it used. It says customer requests are not used for training.

**Where the bar sits.** Kiva set each bar from its own test cases, one bar per call.

## What it means for you

**Money.** In its tests, Kiva cut the cost of these decisions by about 90%. The saving grows with use, Uchida wrote, because the decisions run every time a user does something.

By my arithmetic, a company spending $1 million a year on LLM decisions like these would spend about a tenth of that.

**Customers.** Think about what the old mistake costs. A false “your task failed” notice makes people stop trusting the tool. They start checking its work by hand, and the point of automation is lost.

**Speed and revenue.** Some of Kiva’s agents ask Jev what to do at every step on a screen or in a browser. On one task, Kiva says, that can be dozens of times. There, Kiva says, faster answers made the whole agent feel faster.

Kiva didn’t report revenue. Any gain there is indirect, through a product that is right more often and quicker.

**Risk.** With the LLM alone, Kiva had a number it couldn’t trust. Now each decision comes back with a percentage, and Kiva sets the bar.

### The same pattern in other industries

- **Security software.** Harness tested a decision model on real customer traffic. Every mistake fell among the few cases where it said it was unsure. [How Harness did it](/blog/harness-ai-api-inventory-decision-model/).
- **Recruiting.** Jack & Jill had a decision model score job candidates one criterion at a time. Its screening costs fell 88%. [How Jack & Jill did it](/blog/jack-and-jill-coupled-llm-decision-model/).
- **Business analytics.** Isotopes AI lets a decision model answer simple follow-up questions on a dashboard. New or unclear questions go to its full team of AI agents. In use with customers, that step now runs two to five times faster, the company says.

### The hard questions

**If the LLM was mostly right, why switch?** Because no one could tell which of its answers were wrong. Its own number didn’t say.

**Isn’t this a lot of engineering?** Kiva moved ten decisions in two days. In my view, the slow part is writing good test cases, not the code.

**What did the decision model do worse?** Picking the single best option from a list of similar ones. Kiva fixed it with better descriptions. Some decisions may still suit an LLM better.

**What if the decision model goes down?** Keep the old LLM setup as the backup, with its own bar. Test that the backup works before you need it.

**Who owns it?** The team that owns the process should own its test cases and rerun them. At Kiva, the chief technology officer ran the switch.

**How do we explain a decision to a customer?** Jev gives no reasons, so Kiva lets the answer serve as the reason. A document marked “tries to take over the AI” says why it was stopped.

### How to make the change

1. **List the hidden decisions** your AI makes today. Start with the ones that run most often.
2. **Write test cases** with known answers for each. Include the ones that went wrong before.
3. **Run your LLM and a decision model on the same cases.** Switch a decision only if the decision model is as good.
4. **Put each bar on the safe answer,** such as “clean” or “succeeded”.
5. **When a decision misses, rewrite the answer descriptions** before you move the bar.
6. **Keep the old LLM setup as a backup,** with its own bar.
7. **Measure again on real cases** once you go live, as Kiva plans to.

## For your developer

Here is the pattern from Kiva’s write-up as code: the bar sits on the safe answer, and the backup keeps its own bar. This is my sketch, not Kiva’s code. I haven’t run it on Kiva’s data, so treat it as expected, not measured.

```python
from dataclasses import dataclass
from typing import Callable

@dataclass
class Decider:
    decide: Callable[[str], dict[str, float]]  # returns a probability per answer
    min_safe: float  # each decider keeps its own bar; an LLM's own scores run high

def task_succeeded(last_message: str, main: Decider, backup: Decider) -> bool:
    for d in (main, backup):
        try:
            probs = d.decide(last_message)  # e.g. {"succeeded": .., "failed": .., "needs_human": ..}
        except Exception:
            continue  # decision model down: try the old LLM prompt
        return probs.get("succeeded", 0.0) >= d.min_safe  # bar on the safe answer, not on the top pick
    raise RuntimeError("no decider available; hold the notice")
```

The worked example for this post asks Jev whether a scheduled task succeeded, keeps the old LLM prompt as the backup, and compares the two on the same test cases before you switch. It comes with offline tests. [Subscribe for access](/subscribe/).

Public code from others, each labelled:

- **Kiva’s write-up** (company report): its request shapes and code fragments, in Japanese, at the link in the sources below.
- **TypeSafe’s docs** (vendor docs): the yes-or-no and choice question types Kiva used.

## The fine print

- **Who published the numbers.** Every figure comes from Kiva’s own post, written by its chief technology officer, who signs as Uchida, on Sept. 21, 2026. I have measured none of them. Quotes are my translations from Japanese.
- **The calls Kiva moved.** Ten in all, between Sept. 18 and 19, 2026. Seven had a before-and-after comparison: the document check, a check of messages against company rules, whether a scheduled task succeeded, whether the AI should reply in a team chat, a weekly check for duplicate suggestions, a shortlist of connected tools, and the choice of skill. Three were new to Jev, with no before-and-after score: whether a step needs the user’s approval, the next move on a computer screen, and the next move in a web browser.
- **The results in detail.** Kiva counts answers, not distinct cases. Document check, 57 of 60 right before and 60 of 60 after. Task succeeded, 51 of 54 before and 54 of 54 after. Team-chat reply, 41 of 45 before and 43 of 45 after. The other four were unchanged. The skill choice scored 165 to 167 of 168 with the LLM and 167 of 168 with Jev after the fix. Before the fix it fell to 158 or 159. Raising its bar to 0.65 still left six wrong matches. The skill whose score fell from 0.84 to 0.21 was in a draft Kiva did not keep.
- **Speed and cost.** Kiva reports the compared calls ran 1.6 to 4.5 times faster and cost one-eighth to one-eleventh as much, on its test cases. That is 87.5% to 91% less; “about 90%” is my rounding. Kiva gave before-and-after costs for five of the calls. The $1 million example is my arithmetic, not Kiva’s.
- **The 95% and 70%.** Kiva measured the old LLM’s own confidence on its screen agent before the switch: 0.95 to 0.97 on right moves, 0.70 on wrong ones. The screen agent itself was new to Jev, so it has no before-and-after score.
- **The 45% and the 50% bar.** Kiva reports that the worst attacks split Jev’s answer across kinds of attack and pushed its confidence down to about 0.45. The 0.5 bar is the example Kiva gives of a bar that would miss them. The chance of “clean” does not split that way.
- **Which models.** The decision model was TypeSafe’s Jev 1.13, through OpenRouter. Kiva doesn’t name the LLM it used before, beyond a fast general model.
- **What the test can show.** Kiva wrote its own test cases, and the sets were small. Kiva says the document and rules checks had 12 cases each, and the team-chat test 15 messages. Its results count more answers than that, 60 and 45, which suggests each case was run several times. Kiva doesn’t say. The bars were set on those same cases. In the document test, the chance of “clean” was always near 0 or near 1, so any bar between 0.3 and 0.8 gave the same result. Uchida wrote that the bars can only really be tested on real data. Kiva says it has not yet measured mistakes on its customers’ real documents and conversations. Treat this as a careful company test, not a rate for your work.
- **What we don’t know.** How many customers Kiva has, how many of these decisions it makes a day, and the old LLM’s name. None is in Kiva’s post.
- **Harness, Jack & Jill and Isotopes AI.** Those figures come from the companies’ own reports. Harness and Jack & Jill are covered in my earlier posts. Isotopes AI published its test on Oct. 15, 2026, and calls its production speed-up an observation, not a measured result.
- **This site** is independent and not affiliated with Kiva, TypeSafe, OpenRouter, Isotopes AI or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
