---
number: 22
title: "Stop using LLMs alone"
summary: "Why the usual method, an LLM on its own doing every step, carries an unknown risk and a high cost, and what Jack & Jill, Datadog, Box, Sierra and Ramp gained by coupling an LLM with a decision model: up to 88% lower cost, up to 40x faster, with quality held."
status: planned
minutes: 12
hosts: ["The Decision Layer desk"]
post: stop-using-llms-alone
sources:
  - title: "TypeSafe: How Jack & Jill cut candidate screening costs by 88% with Jev (Oct 7, 2026)"
    url: https://typesafe.ai/blog/jack-jill-jev-case-study
    grade: Vendor claim
  - title: "Unite.AI: OpenAI makes Decisions API generally available with GPT-6 Luna"
    url: https://www.unite.ai/openai-makes-decisions-api-generally-available-with-gpt-6-luna/
    grade: Vendor claim
  - title: "TechCrunch: OpenAI makes its Jev competitor widely available (Oct 22, 2026)"
    url: https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/
    grade: Independent reporting
---

## Show notes

- 00:00 Stop using LLMs alone: the unknown risk and the cost of one model doing every step
- 01:30 The new method: couple an LLM with a decision model (the tractor and the hydraulics)
- 03:00 The accuracy case: 1 in 5 invoice details wrong, then every call right
- 04:30 Jack & Jill: 88% lower screening cost, twice as fast, live in 10 days
- 06:30 Datadog, Box, Sierra and Ramp: risk scored before it runs, faster routing, cheaper calls
- 08:00 What a decision model is, how it works and how it’s trained
- 09:30 Six steps to make the switch in your own process

## Script

**Cold open.** Most companies automate with an LLM on its own. Every answer it gives carries a risk no one can measure, and every step costs LLM prices.

**The idea.** Couple the LLM with a decision model. The decision model makes the high-volume calls in milliseconds, each with a probability, and a rule you own decides what runs on its own. The LLM does only what needs it.

**The proof.** In a published invoice test, an LLM alone got 1 in 5 details wrong; coupled, every call was right. Jack & Jill cut screening costs 88% with no loss in quality. Datadog scores every agent command’s risk before it runs.

**Close.** Find your high-volume calls, split the work, test on your own history, set the bar, and switch. These are the companies’ own numbers; your test is the one that counts.
