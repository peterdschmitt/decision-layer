---
number: 3
title: "A function call for underwriters"
summary: "What Jev’s founder means by “unstructured state in, typed probabilistic decisions out,” shown on a made-up contractor submission at an insurance agency."
status: planned
minutes: 7
hosts: ["The Decision Layer desk"]
post: underwriting-submissions-function-call
sources:
  - title: "Forbes: Why Everyone Is Talking About Jev, The AI That Doesn’t Chat (Sep 22, 2026)"
    url: https://www.forbes.com/sites/ronschmelzer/2026/09/22/why-everyone-is-talking-about-jev-the-ai-that-doesnt-chat/
    grade: Independent reporting
  - title: "TypeSafe docs: Primitives (Choice, Score, Noul)"
    url: https://docs.typesafe.ai/primitives.md
    grade: Official docs
  - title: "TypeSafe docs: AI primer (how TypeSafe trains decision models)"
    url: https://docs.typesafe.ai/introduction/machine-learning-primer.md
    grade: Official docs
---

## Show notes

- 00:00 The founder’s one-line pitch, from Forbes
- 01:00 The problem: commercial submissions in every shape
- 02:00 How Jev works: you write the signature, it scores every answer at once
- 03:30 How it was trained, and what TypeSafe hasn’t said
- 04:30 A made-up remodeler who “occasionally” fixes roofs
- 06:00 Where it breaks, and who still makes the call

## Script

**Cold open.** Jev’s founder told Forbes to think of it as “a frontier-intelligence function call: unstructured state in, typed probabilistic decisions out.” Today we take that apart on an insurance agency’s desk.

**The problem.** Small commercial submissions arrive in every shape. Somebody has to read each one and work out the class of business, anything risky, and whether there’s enough detail to quote.

**How it works.** You write the questions and the answers you’ll accept. Jev scores every answer at once and hands back probabilities. It can’t invent an answer you didn’t list. TypeSafe says it trained Jev for honest odds, but it hasn’t said what data it trained on, so you check it on your own files.

**The example.** A remodeler mentions, almost in passing, that they occasionally do roof repairs. That one word, occasionally, is why we ask the hazard question the way we do.

**Close.** Jev describes the business. A person reads the file, prices it and makes the call. We haven’t run this yet; when we do, we’ll publish everything.
