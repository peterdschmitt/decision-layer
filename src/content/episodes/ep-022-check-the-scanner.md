---
number: 22
title: "The AI read 15 numbers"
summary: "An LLM reads the paperwork; a decision model scores every value it read. The tractor and the hydraulics, shown on a published invoice test, and what it changes for leaders running paperwork-heavy processes."
status: planned
minutes: 10
hosts: ["The Decision Layer desk"]
post: repair-invoices-check-what-the-scanner-read
sources:
  - title: "NPR: Your writing was flagged as AI. What does that actually mean? (Oct 31, 2026)"
    url: https://www.npr.org/2026/10/31/nx-s1-5963520/ai-writing-detectors-pangram
    grade: Independent reporting
  - title: "TypeSafe docs: OCR confidence and bounding boxes (cookbook)"
    url: https://docs.typesafe.ai/cookbooks/ocr_confidence_bounding_boxes.md
    grade: Official docs
---

## Show notes

- 00:00 NPR on AI detectors that hand out verdicts, and what that teaches about AI in any process
- 01:00 The tractor and the hydraulics: why an LLM and a decision model work in tandem
- 02:30 Five reasons the pairing beats either tool alone
- 04:30 The worked example: two invoices, fifteen numbers, three errors caught
- 06:30 The same pattern in claims, payables, onboarding, logistics and billing
- 07:30 What changes for leaders, and a two-week test on your own documents
- 09:00 Which decision model for this job, and the fine print

## Script

**Cold open.** The AI read fifteen numbers off two invoices. Three were wrong, and none of them looked wrong.

**The idea.** The LLM is the tractor: it reads anything. The decision model is the hydraulics: it scores every value the LLM produced, fast and cheaply enough to do it at full volume.

**The proof.** In TypeSafe’s test, the decision model flagged all three errors and cleared the other twelve. A person looked at three values, not fifteen.

**Close.** You design the questions, you set the dial, and people only touch real doubt. We haven’t run this yet; when we do, we’ll publish everything.
