---
number: 7
title: "Does the answer wobble?"
summary: "A new study found Jev’s picks hold up well, including on names, but its probabilities move with things that shouldn’t matter. How to test that on your own claims before you trust the numbers."
status: planned
minutes: 7
hosts: ["The Decision Layer desk"]
post: subrogation-referrals-does-the-answer-wobble
sources:
  - title: "Imperatrice, Kameneva, Greenberg and Romano: Are AI Decision Models Biased? A Case Study of Jev (arXiv, Oct 2026)"
    url: https://arxiv.org/abs/2610.19619
    grade: Independent reporting
  - title: "TypeSafe docs: API reference"
    url: https://docs.typesafe.ai/api.md
    grade: Official docs
---

## Show notes

- 00:00 No headline today, and the study we’re covering instead
- 00:45 The problem: a subrogation queue has to treat people the same way
- 01:45 What 41,500 responses showed: picks that hold, probabilities that move
- 03:30 The limits the authors name themselves
- 04:30 One made-up auto claim, four versions of it
- 06:00 Leave the name out, widen the close-call band, and who still decides

## Script

**Cold open.** Same crash, same notes, different driver’s name. Does the answer change? A study out this week says Jev mostly passes that test, and then shows where its numbers still move.

**The problem.** Files that might let a carrier recover money from the other driver’s insurer go to a recovery team. A model can help sort them, but only if the same file gets the same answer whoever the driver is.

**How it works.** Researchers at Bocconi University ran classic bias tests and a pricing task where only the name changed. Name differences were small. But a random number, or the order of the options, could move Jev’s probabilities, sometimes a lot, even when its pick stayed the same.

**The example.** We send one adjuster note four ways: as written, with the options reversed, with a stray number added, and with the driver’s name swapped. Then we measure how far the number moves. The fix is simple: take names out, and send anything near a threshold to a person.

**Close.** Only your own test can tell you whether it’s fair on your files. A person still decides every referral. We haven’t run this yet; when we do, we’ll publish everything.
