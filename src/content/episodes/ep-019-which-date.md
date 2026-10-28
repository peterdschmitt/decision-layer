---
number: 19
title: "Five dates in one claim email"
summary: "Jev can’t write, so it can’t copy a date out of an email. A pattern finds every date, Jev picks the date of loss, and code checks it against the policy."
status: planned
minutes: 6
hosts: ["The Decision Layer desk"]
post: claim-email-which-date-is-the-loss
sources:
  - title: "TypeSafe docs: Model jaggedness, jev-1.13"
    url: https://docs.typesafe.ai/model-jaggedness/jev-1.13.md
    grade: Official docs
  - title: "TypeSafe docs: Primitives"
    url: https://docs.typesafe.ai/primitives.md
    grade: Official docs
---

## Show notes

- 00:00 No headline today; a claim email with five dates in it
- 00:40 The problem: the system needs exactly one, the date of loss
- 01:30 How it works: Jev doesn’t write; find candidates another way, let Jev pick
- 02:45 The example: a date pattern, options built from the email, the date math in code
- 04:30 Where it breaks: dates the pattern misses, look-alike options, planted text

## Script

**Cold open.** “Someone hit my parked car on Oct 14, but I didn’t notice the dent until the 16th.” Which date goes in the claim?

**The problem.** Coverage depends on the date of loss. The email also mentions when the policy started, when it renews and when the customer wants a call.

**How it works.** TypeSafe says Jev isn’t trained to generate text. For extraction, find the possible values with a pattern or another model and let Jev choose.

**The example.** Find every date with a few words around it, ask Jev which one is when the damage happened, then check it against the policy in code.

**Close.** A person still decides any coverage question. We haven’t run this yet; when we do, we’ll publish everything.
