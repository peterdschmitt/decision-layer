---
number: 1
title: "What Jev is, and what it isn’t"
summary: "The new AI model that never writes a word: what it hands back, why developers are excited, and the five things TypeSafe itself says it is bad at."
status: planned
minutes: 8
hosts: ["The Decision Layer desk"]
post: what-jev-is-and-isnt
sources:
  - title: "TechCrunch: A new kind of AI model from a ChatGPT inventor is thrilling developers (Sep 18, 2026)"
    url: https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/
    grade: Independent reporting
  - title: "The Register: TypeSafe AI debuts model for machines that plays Doom (Sep 16, 2026)"
    url: https://www.theregister.com/a/5296711
    grade: Independent reporting
  - title: "TypeSafe: Introducing System One Models & Jev"
    url: https://typesafe.ai/blog/introducing-system-one-models-and-jev
    grade: Vendor claim
  - title: "TypeSafe docs: Jev 1.13 jaggedness"
    url: https://docs.typesafe.ai/model-jaggedness/jev-1.13.md
    grade: Official docs
---

## Show notes

- 00:00 Why an AI that won’t write anything has developers this excited
- 01:30 What you give Jev, and what it hands back: Choice, Score and Noul
- 03:00 The cost and speed story, and whose numbers those are
- 04:15 What “can’t hallucinate” really means
- 05:15 The five weak spots TypeSafe lists itself
- 07:00 Where it fits for a support team or an insurance agency, and where a person must decide

## Script

**Cold open.** Most AI news is about models that write: emails, essays, code. This one won’t write a single sentence, and developers love it. I’m going to explain why, and where it falls down.

**What it is.** Jev comes from a company called TypeSafe AI. You give it some text, say a support ticket, and a few questions with the answers you’ll accept. Which team gets this: billing, technical or sales? How upset is the customer? Is this a refund request, yes or no? Jev picks an answer for each and tells you how sure it is.

**Why people care.** It’s cheap. The Register reports input costs four point two cents per million tokens, and output is free. It’s fast: TypeSafe says 70 to 500 milliseconds, and that’s their number, not ours. And TechCrunch reports Vercel swapped it in for an OpenAI model and got results five to eighteen times faster.

**The catch.** TypeSafe says Jev “can’t hallucinate.” What that means is it can’t make up an answer that isn’t on your list. It can still pick the wrong one. Armin Ronacher told TechCrunch it “delegates the hallucination problem a little bit to the user.” I think that’s fair, and honestly, it’s the right trade for a lot of work.

**The weak spots.** TypeSafe publishes them, which I respect. It’s literal. It isn’t a calculator. It treats dates as text. It trusts whatever it reads. And it doesn’t write.

**So what.** If you run a support team or an agency, think of Jev as a very fast sorter. Let it route the easy ones. Send the unsure ones to a person. And anything that touches someone’s coverage, price or claim, a person decides.

**Close.** The full write-up, with every source linked, is on the blog at Decision Layer. We’re independent and not affiliated with TypeSafe.
