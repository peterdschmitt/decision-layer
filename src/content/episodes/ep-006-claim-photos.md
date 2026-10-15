---
number: 6
title: "Jev can see now, a little"
summary: "Jev 1.14 reads pictures and can point to things in them, behind a switch TypeSafe calls the danger zone. A careful first use: catching unusable claim photos while the customer is still holding the phone."
status: planned
minutes: 7
hosts: ["The Decision Layer desk"]
post: claim-photos-what-jev-can-see
sources:
  - title: "TypeSafe blog: Jev 1.14 announcement (Oct 14, 2026)"
    url: https://typesafe.ai/blog/jev-1-14
    grade: Vendor claim
  - title: "TypeSafe docs: Images in System One requests"
    url: https://docs.typesafe.ai/images.md
    grade: Official docs
  - title: "TypeSafe docs: Box questions"
    url: https://docs.typesafe.ai/primitives/box.md
    grade: Official docs
---

## Show notes

- 00:00 Jev 1.14 is out, and why we’re leading with TypeSafe’s own post today
- 00:45 The problem: claim photos nobody can use, found days too late
- 01:45 How images work: off by default, where pictures go, the Box question
- 03:30 TypeSafe’s own warning, and the sideways-photo trap
- 04:30 A made-up hail claim with three photos
- 06:00 Where it breaks, and who still decides the claim

## Script

**Cold open.** Until this week, Jev only read words. Version 1.14 reads pictures too, but TypeSafe put it behind a switch it calls the danger zone, and says it can’t vouch for it in production yet. So what is it good for?

**The problem.** After a hailstorm, customers send roof photos from the driveway. Many are too far away or blurry, and nobody notices until an adjuster opens the file days later.

**How it works.** You turn images on with a header. A picture in the state is seen by every question. A new Box question returns where something is, as four edges, and always returns a box, even when the thing isn’t there. Jev ignores the note phones save about which way is up, so you rotate photos yourself. TypeSafe says all models do worse on pictures than on words.

**The example.** Three photos: one from the street, one blurry, one clear. Two yes/no questions ask whether a person could inspect the roof in the picture. The first two photos get a friendly retake prompt on the spot. The third gets a suggested crop for the adjuster.

**Close.** The questions are about the photo, not the claim. A person still decides the damage, the coverage and the payment. We haven’t run this yet; when we do, we’ll publish everything.
