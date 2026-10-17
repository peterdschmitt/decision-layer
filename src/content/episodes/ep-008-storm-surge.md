---
number: 8
title: "Twenty thousand claims by Tuesday"
summary: "What Jev costs and how fast it goes when a storm buries a claims desk, and why the plan is about pace and fallback, not price."
status: planned
minutes: 7
hosts: ["The Decision Layer desk"]
post: storm-surge-cost-and-speed-at-volume
sources:
  - title: "TypeSafe docs: Models (pricing, context and rate limits)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
  - title: "TypeSafe docs: API reference"
    url: https://docs.typesafe.ai/api.md
    grade: Official docs
---

## Show notes

- 00:00 No headline today; a storm-week plan instead
- 00:45 The problem: a month of claims in two days
- 01:45 How the bill works: you pay for what you send, and every answer tells you what it cost
- 03:00 The real limit: requests per second, and what to do when you’re told to wait
- 04:30 20,000 made-up claims: measuring cost, finding your pace, a worker that falls back to people
- 06:00 Where it breaks: unchecked limits and a fallback queue nobody staffs

## Script

**Cold open.** A hailstorm on Saturday, 20,000 claims by Tuesday. Sorting them with Jev would cost about as much as a cup of coffee. Whether you can sort them by lunch is a different question.

**The problem.** The week after a storm is when a fast first sort matters most, and when the people who usually do it are busiest.

**How it works.** TypeSafe charges only for the text you send in, and every response reports its token count, so you can measure cost on a sample. The real limit is how many requests per second your account allows. TypeSafe doesn’t publish those numbers; you find them in your console. When you’re told to slow down, you wait and try again, a little longer each time.

**The example.** Measure 200 past claims, do the arithmetic, check your limits, and run a worker that backs off and sends any claim without an answer to the normal human queue.

**Close.** The bill will be small. Plan for pace and for the moment the answers stop coming. People still handle every claim. We haven’t run this at volume yet; when we do, we’ll publish everything.
