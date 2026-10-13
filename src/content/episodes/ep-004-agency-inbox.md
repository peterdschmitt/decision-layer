---
number: 4
title: "Jev, its clones and your inbox"
summary: "What’s likely inside Jev, how it compares with a chatbot, a classifier you train yourself and the new look-alikes, shown on a made-up email to an insurance agency."
status: planned
minutes: 7
hosts: ["The Decision Layer desk"]
post: agency-inbox-jev-and-its-clones
sources:
  - title: "Tom’s Hardware: Jev-like decision models are flooding the AI market (Oct 12, 2026)"
    url: https://www.tomshardware.com/tech-industry/artificial-intelligence/jev-like-decision-models-are-flooding-the-ai-market-after-researcher-claims-typesafe-copied-their-research-microsoft-openai-among-companies-releasing-lightweight-system-one-ai-models
    grade: Independent reporting
  - title: "TypeSafe docs: System One"
    url: https://docs.typesafe.ai/concepts/system-one.md
    grade: Official docs
---

## Show notes

- 00:00 Tom’s Hardware on the rush of Jev look-alikes
- 01:00 The problem: one service inbox, many kinds of request
- 02:00 What’s inside Jev, as far as anyone outside TypeSafe can tell
- 03:30 Jev next to a chatbot, a trained classifier and the clones
- 05:00 A made-up email with two requests in it
- 06:00 Where it breaks, and why your test set is the part you keep

## Script

**Cold open.** Tom’s Hardware counted the rivals: Microsoft, OpenAI, Cloudflare, Perplexity, Amazon and more, all within weeks of Jev. If you run an agency, the question isn’t who copied whom. It’s which one you can trust with your inbox.

**The problem.** A service inbox mixes car changes, proof-of-insurance requests, billing questions, cancellations and new claims. The urgent ones wait behind the easy ones, and an email asking for two things often gets one done.

**How it works.** TypeSafe hasn’t published what’s inside Jev. Its primer says it adapts a pretrained language model, and one engineer’s outside probing points the same way, though he calls his own analysis speculative. So it reads like a chatbot but doesn’t write. Unlike a classifier you train yourself, it needs no labeled examples. Adding a request type is one more plain-English question.

**The example.** Dana bought a new car and needs proof of insurance for the lender by Friday. One yes/no question per request type catches both requests, and an urgency question catches the deadline.

**Close.** Models can be swapped. Your questions and a set of past emails with known answers are what you keep, so test every model on them. A licensed person still makes every policy change. We haven’t run this yet; when we do, we’ll publish everything.
