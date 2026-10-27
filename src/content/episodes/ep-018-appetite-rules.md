---
number: 18
title: "The appetite guide is the rulebook"
summary: "Splitting a small apartment building appetite guide into checks in code and plain yes/no questions for Jev, with a threshold per rule and the guide line behind every flag."
status: planned
minutes: 6
hosts: ["The Decision Layer desk"]
post: apartment-appetite-rules-and-jev
sources:
  - title: "TypeSafe docs: Model jaggedness, jev-1.13"
    url: https://docs.typesafe.ai/model-jaggedness/jev-1.13.md
    grade: Official docs
  - title: "TypeSafe docs: Confidence-gated routing"
    url: https://docs.typesafe.ai/patterns/confidence-routing.md
    grade: Official docs
---

## Show notes

- 00:00 No headline today; an appetite guide for small apartment buildings
- 00:40 The problem: half the guide is numbers, half is reading
- 01:40 How it works: math and dates in code, literal reading, a bar for each rule
- 03:00 The example: tag every line, code checks, one question per line, route with reasons
- 04:45 Where it breaks: blank fields, what the broker didn’t say, rules that drift

## Script

**Cold open.** “Mostly leased to grad students, with a taqueria on the ground floor.” Two lines of the appetite guide, in one sentence.

**The problem.** Year built, stories, units, losses and vacancy are on the form. Students, cooking and pools are in the broker’s words.

**How it works.** TypeSafe says to do math and date comparisons in code, and its routing pattern gives each action its own confidence bar based on what a mistake costs.

**The example.** Every line of the guide gets an ID. Five become code, three become yes/no questions. Any hit goes to an underwriter with the guide line named.

**Close.** The system never declines. An underwriter decides. We haven’t run this yet; when we do, we’ll publish everything.
