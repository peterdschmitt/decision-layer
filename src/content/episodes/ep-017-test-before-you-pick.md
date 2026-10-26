---
number: 17
title: "Test before you pick"
summary: "OpenAI opened its Decisions API to everyone, and the rankings disagree. A pre-launch test, start to finish, for a same-day water mitigation question."
status: planned
minutes: 7
hosts: ["The Decision Layer desk"]
post: water-claims-test-before-you-pick
sources:
  - title: "TechCrunch: OpenAI makes its Jev competitor widely available as decision model competition heats up"
    url: https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/
    grade: Independent reporting
  - title: "Vals AI: An Independent Evaluation of TypeSafe’s Jev"
    url: https://vals.ai/blogs/independent-evaluation-of-jev
    grade: Independent reporting
---

## Show notes

- 00:00 In the news: OpenAI’s Decisions API opens to all customers
- 01:00 Why the rankings don’t settle it
- 01:45 The problem: send a water mitigation crew today, or not
- 02:45 How it works: what the Vals AI evaluation found, and the threshold that didn’t hold
- 04:00 The test: a written budget, audited claims, tune on 30%, judge on 70%
- 05:45 Where it breaks: small samples, the wrong answer key, moving the budget

## Script

**Cold open.** There are two decision models from big companies now, and the rankings don’t agree on which is better. Good. You can find out.

**In the news.** TechCrunch reports OpenAI opened its Decisions API to everyone on Oct 22. The reporter says what makes a good decision model seems to differ by workload.

**The problem.** A wrong “wait” leaves a wet house for days. A wrong “send” pays for a wasted trip.

**How it works.** Vals AI found Jev tied for the top on one test and last on another. When it set thresholds on part of its cases and checked them on the rest, half the models, Jev included, went over budget.

**The example.** Write the budget first. Audit a few hundred past water claims. Run every model the same way, tune on 30%, judge on 70%, and read every miss.

**Close.** An adjuster handles every claim. We haven’t run this yet; when we do, we’ll publish everything.
