---
number: 22
title: "The scanner read 2028"
summary: "AI detectors should flag for a person, not accuse. Same for software reading invoice photos: Jev checks each value twice and sends the doubtful ones to your team, boxed on the photo."
status: planned
minutes: 6
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

- 00:00 NPR on AI detectors that flag people’s own writing, and why a flag should go to a person
- 00:50 Five reasons Jev is the right checker for values read off invoice photos
- 03:00 The proof: a burst pipe, three invoices, two wrong values caught
- 04:30 The messy one: a total printed on a fold
- 05:20 The fine print: not production-ready yet, and set your own cut-off

## Script

**Cold open.** The scanner read 2028. The invoice said 2026. Nobody would spot that in a list.

**Why Jev.** It checks instead of reading again. It looks at the whole page and at a close-up, because neither catches everything alone. It leaves the right values alone. It shows where to look. And it works with the scanner you already have.

**The proof.** Three misreads on two invoices in TypeSafe’s test, all three caught, nothing correct flagged.

**Close.** Jev flags. Your person fixes. The carrier pays. We haven’t run this yet; when we do, we’ll publish everything.
