---
number: 14
title: "The customer is waiting on the next screen"
summary: "Using Jev inside an online claim form while a customer waits: what independent tests say about its speed, and how to plan for the slow calls."
status: planned
minutes: 6
hosts: ["The Decision Layer desk"]
post: online-claim-form-speed-budget
sources:
  - title: "OpenRouter: Is Jev as Accurate as Frontier Models at Classification?"
    url: https://openrouter.ai/blog/insights/jev-vs-claude-opus-5-classification/
    grade: Independent reporting
  - title: "LiteLLM: JEV Classifier: 5.43x as Fast as Haiku, 96% Lower Cost"
    url: https://docs.litellm.ai/blog/jev-auto-router-benchmark
    grade: Independent reporting
---

## Show notes

- 00:00 No headline today; a claim form and a spinner instead
- 00:40 The problem: background sorting versus a customer watching the screen
- 01:30 How it works: what two independent tests measured, middle and tail
- 03:00 What TypeSafe doesn’t publish: no guarantee, no timeout advice
- 03:45 A 600-millisecond budget, one try, and a safe fallback
- 05:00 Where it breaks: someone else’s numbers, shared rate limits, averages

## Script

**Cold open.** A customer types “backed into a pole, bumper cracked, nobody hurt” and taps Next. How long can the form think before it feels broken?

**The problem.** Earlier posts sorted claims in the background, where a second doesn’t matter. A live form is different: a person is waiting.

**How it works.** OpenRouter measured a median of 175 milliseconds and a p95 of 270, with the slowest calls near 1.6 seconds. LiteLLM saw a median near 127 milliseconds on a smaller test. TypeSafe publishes no latency guarantee.

**The example.** Four yes/no questions choose the next screens. The form waits at most 600 milliseconds, tries once, and shows the full form if the answer is late. Log every call and watch the tail.

**Close.** Jev only picks which questions the form asks. A person handles every claim. We haven’t run this yet; when we do, we’ll publish everything.
