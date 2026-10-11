---
number: 2
title: "Labels, not essays: Jev on the claims desk"
summary: "Fortune’s look at why developers took to Jev, and what that means for sorting first notice of loss reports: four small questions, plain routing rules, and a person on every payout."
status: planned
minutes: 7
hosts: ["The Decision Layer desk"]
post: claims-intake-labels-not-essays
sources:
  - title: "Fortune: Jev, an AI for making quick decisions, has been a viral hit in Silicon Valley. But OpenAI is hot on its heels (Oct 8, 2026)"
    url: https://fortune.com/2026/10/08/jev-an-ai-for-making-quick-decisions-has-been-a-viral-hit-in-silicon-valley-but-openai-is-hot-on-its-heels/
    grade: Independent reporting
  - title: "TypeSafe docs: Example use cases (insurance claims, risk assessment)"
    url: https://docs.typesafe.ai/concepts/use-case-map.md
    grade: Official docs
  - title: "TypeSafe docs: Confidence"
    url: https://docs.typesafe.ai/confidence.md
    grade: Official docs
  - title: "TypeSafe docs: Jev 1.13 jaggedness"
    url: https://docs.typesafe.ai/model-jaggedness/jev-1.13.md
    grade: Official docs
---

## Show notes

- 00:00 Fortune’s line of the week: paying for an essay when you need a label
- 01:15 Why most of claims intake is labeling
- 02:30 A made-up first notice of loss, and the four questions we ask about it
- 04:00 Routing in plain code, and why the thresholds are yours to set
- 05:30 What Jev should never do on a claims desk
- 06:30 What we haven’t tested yet

## Script

**Cold open.** A developer told Fortune this week that with a big language model, “you pay for a full written answer when all you need is a label.” If you work a claims desk, you know how much of the day is exactly that: labeling.

**The news.** Fortune reports Jev, from TypeSafe AI, caught on fast with developers, and that OpenAI now has a rival that also reads images. Jev reads text only, so everything today is about the words in a report, not the photos.

**The example.** A customer writes in late at night: rear-ended on Route 9, bumper cracked, trunk won’t close, neck a bit sore. We ask Jev four narrow questions. What kind of loss is it? Is anyone hurt, even slightly? Does it say where it happened? How complicated does it look? Each answer comes back with a probability.

**The routing.** Plain code decides the queue. Any hint of injury goes to a person. If Jev isn’t sure what kind of loss it is, a person triages it. Only a simple glass claim that Jev is very sure about goes to a fast track, and a person still approves the payment.

**The line we won’t cross.** Jev doesn’t approve, deny or price anything. We left fraud scoring out on purpose, because a fraud flag follows a real person around.

**Close.** We haven’t run this yet. Our next step is a published test on made-up claims, with the data and code shown. The labels are cheap. Knowing when to trust them is the work.
