---
number: 11
title: "Sixty pages of contract, three questions"
summary: "When to switch on Jev’s long context and when to split the text, shown on the insurance requirements buried in a construction subcontract."
status: planned
minutes: 7
hosts: ["The Decision Layer desk"]
post: subcontract-long-context-or-split
sources:
  - title: "TypeSafe docs: Models (context length)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
  - title: "TypeSafe blog: Jev 1.14 announcement"
    url: https://typesafe.ai/blog/jev-1-14
    grade: Vendor claim
---

## Show notes

- 00:00 No headline today; a 60-page subcontract instead
- 00:45 The problem: the certificate requirements are in Exhibit C
- 01:45 How it works: 32,000 tokens per question by default, 262,000 with a header
- 03:00 Same price per token, less reliable, and no published numbers
- 04:15 Two plans: split at the headings, or send it whole
- 05:30 Picking between them on contracts you already know
- 06:15 Where it breaks: scans, false alarms, cross-references

## Script

**Cold open.** “Per the subcontract, Exhibit C.” That’s the whole email. The requirements are on page 52.

**The problem.** Before anyone issues a certificate, someone has to find what the contract actually requires. Miss one and the client may be in breach.

**How it works.** By default Jev reads about 32,000 tokens per question. One header raises that to 262,000 at the same price per token. TypeSafe says it held the limit back because long inputs are less reliable, and it still recommends keeping them short.

**The example.** Plan A splits the contract at its headings and asks three questions of each piece, so every answer points to a section. Plan B sends the whole thing and can connect a definition on page 3 to a requirement on page 52. Run both on 20 contracts you’ve already reviewed and keep the one that misses less.

**Close.** Jev points to the clause. A licensed person reads it and issues the certificate. We haven’t run this yet; when we do, we’ll publish everything.
