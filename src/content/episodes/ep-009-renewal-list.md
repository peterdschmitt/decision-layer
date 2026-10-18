---
number: 9
title: "Six small questions instead of one big one"
summary: "Why TypeSafe says to break a judgment into narrow questions and do the weighing in code, shown on an agency’s monthly renewal list."
status: planned
minutes: 7
hosts: ["The Decision Layer desk"]
post: agency-renewals-many-small-questions
sources:
  - title: "TypeSafe docs: Introduction (Atomic questions, composed in code)"
    url: https://docs.typesafe.ai/introduction
    grade: Official docs
  - title: "TypeSafe docs: Questions"
    url: https://docs.typesafe.ai/primitives
    grade: Official docs
---

## Show notes

- 00:00 No headline today; the renewal pile instead
- 00:45 The problem: hundreds of renewals, time to shop a third of them
- 01:45 How it works: every question answered on its own, at the same time
- 03:00 Why “how urgent is this?” is the wrong question
- 04:30 One made-up renewal, six questions, a score in code
- 06:00 Where it breaks: buried changes, stale weights, double counting

## Script

**Cold open.** “How urgently does this account need remarketing?” It sounds like the right question to ask an AI. TypeSafe says don’t.

**The problem.** An agency has a stack of commercial renewals each month. The ones that need shopping are buried in carrier letters and call notes.

**How it works.** Jev answers each question in a request separately and in parallel, so one answer can’t sway another, and extra questions cost little. TypeSafe’s advice is to split a judgment into its factors and combine them in your own code.

**The example.** A renewal with a 30% rate increase, a new water sublimit, a higher deductible and an unhappy owner. Six yes/no questions, numbers from the agency system, and a score with weights anyone can read and change. Non-renewals jump the queue.

**Close.** The score decides what an account manager reads first. A licensed person decides what to do. We haven’t run this yet; when we do, we’ll publish everything.
