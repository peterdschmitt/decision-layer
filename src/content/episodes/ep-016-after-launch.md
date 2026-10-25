---
number: 16
title: "Three months after launch"
summary: "How to tell whether a Jev router is still right once it’s live: what confidence can and can’t tell you, and a weekly check for an underwriting submission router."
status: planned
minutes: 6
hosts: ["The Decision Layer desk"]
post: underwriting-router-after-launch
sources:
  - title: "OpenRouter: Is Jev as Accurate as Frontier Models at Classification?"
    url: https://openrouter.ai/blog/insights/jev-vs-claude-opus-5-classification/
    grade: Independent reporting
  - title: "TypeSafe docs: Confidence"
    url: https://docs.typesafe.ai/confidence.md
    grade: Official docs
---

## Show notes

- 00:00 No headline today; a router three months after launch
- 00:40 The problem: new broker forms, new kinds of business, a version change
- 01:40 How it works: confidence ranks well but isn’t a calibrated probability
- 02:45 What TypeSafe doesn’t publish about monitoring
- 03:30 Logging, a weekly sample by confidence band, and numbers that move first
- 05:00 Where it breaks: sampling only the confident, small samples, no owner

## Script

**Cold open.** The router passed every test in June. In October a carrier’s underwriter asks why they keep getting food trucks.

**The problem.** Inputs change after launch. Nothing errors. A few more files go to the wrong place.

**How it works.** OpenRouter found Jev right 96.3% of the time when its confidence was 0.99 or higher, and 29.6% when it was below 0.5, but it overstated its accuracy in the middle. TypeSafe says to adjust thresholds as you observe results, and publishes nothing on monitoring.

**The example.** Log every answer. Each week, an account manager checks ten files from each confidence band. Watch the review share, the class mix and the model field, by broker.

**Close.** A licensed person decides what to quote. We haven’t run this yet; when we do, we’ll publish everything.
