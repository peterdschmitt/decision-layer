---
number: 12
title: "Jev 1.14 is about to become the default"
summary: "How Jev’s versions and aliases work, and how to upgrade a claims intake router on purpose instead of overnight."
status: planned
minutes: 6
hosts: ["The Decision Layer desk"]
post: claims-routing-when-jev-updates
sources:
  - title: "TypeSafe docs: Models (versions and aliases)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
  - title: "TypeSafe blog: Jev 1.14 announcement"
    url: https://typesafe.ai/blog/jev-1-14
    grade: Vendor claim
---

## Show notes

- 00:00 No headline today; a scheduled change from TypeSafe instead
- 00:40 The problem: the same claim, a different queue
- 01:30 Names that move (jev-latest, jev-preview) and names that don’t
- 02:45 Pin the version, log the version
- 03:45 Replaying 500 past claims through both versions
- 05:00 Where it breaks: unnamed models, lost test sets, pinning forever

## Script

**Cold open.** Nothing in your code changed. Your claims are going to different queues anyway.

**The problem.** A claims router sends reports to queues using thresholds set on one version of Jev. When the version changes, the probabilities shift a little, and a few claims land somewhere else.

**How it works.** jev-latest and jev-preview are aliases that move when TypeSafe ships. Versioned IDs like jev-1.13.0 stay put. TypeSafe said jev-latest would move to 1.14 a week after its Oct 14 launch, and says to pin the version if you’ve tuned thresholds. Every response names the version that answered.

**The example.** Replay 500 past claims through both versions, list every claim that changes queues, read the ones that leave injury review by hand, re-check the thresholds, then switch on a day you choose.

**Close.** On any version, people handle every claim. We haven’t run this yet; when we do, we’ll publish everything.
