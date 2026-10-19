---
number: 10
title: "Jev is everywhere now. What you send it matters"
summary: "TechCrunch says Jev is the fastest-adopted model on Vercel’s gateway. What belongs in the input, what to leave out, shown on a certificate-of-insurance request at an agency."
status: planned
minutes: 7
hosts: ["The Decision Layer desk"]
post: coi-requests-what-to-send-jev
sources:
  - title: "TechCrunch: Jev is Vercel’s fastest-adopted AI model ever (Oct 16, 2026)"
    url: https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/
    grade: Independent reporting
  - title: "TypeSafe docs: State"
    url: https://docs.typesafe.ai/concepts/state.md
    grade: Official docs
---

## Show notes

- 00:00 TechCrunch: 35% of Vercel’s paid teams picked up Jev within two weeks
- 01:00 The problem: a certificate request means comparing the ask with the policy
- 02:00 How it works: the state is all Jev knows
- 03:30 Facts in the state, judgments in the questions, and nothing extra
- 04:45 One made-up request, a three-part state, four questions, a gap found in code
- 06:00 Where it breaks: wrong endorsement lists, PDFs nobody read, crowded states

## Script

**Cold open.** TechCrunch calls Jev “a lightweight tool for choosing between a few predetermined outputs.” Everyone joining now writes the choices first. The input decides the answer.

**The problem.** A general contractor wants additional insured status, a waiver of subrogation and primary and non-contributory wording. Each one is only allowed if the policy has the matching endorsement.

**How it works.** Jev judges only what’s in the state. TypeSafe says to put the content and supporting facts there, keep related parts together, and leave the judgment to the question. We add one rule of our own: send only what the decision needs.

**The example.** The request email, a two-line endorsement list instead of the policy, and one fact from the agency system. Four yes/no questions, and code that finds the missing endorsement before the certificate goes out.

**Close.** A licensed person issues every certificate. We haven’t run this yet; when we do, we’ll publish everything.
