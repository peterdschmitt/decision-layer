---
title: "What Jev is, and what it isn’t"
dek: "A plain-English guide to TypeSafe AI’s decision model: what it hands back, why developers like it, and the five things it is bad at."
kind: Explainer
readMinutes: 7
author: The Decision Layer desk
published: 2026-10-11
lastChecked: 2026-10-11
modelVersion: jev-1.13.0
episode: ep-001-what-jev-is
respondingTo:
  lede: "TechCrunch says developers are thrilled by an AI that never writes a word. One well-known developer adds a catch: “it delegates the hallucination problem a little bit to the user.” Here’s what that means for you."
  outlet: TechCrunch
  headline: "A new kind of AI model from a ChatGPT inventor is thrilling developers"
  url: https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/
  date: 2026-09-18
  quote: "At the end of the day, it delegates the hallucination problem a little bit to the user."
  quoteBy: "Armin Ronacher, CTO of Earendil, to TechCrunch"
  impact: "If you want software to make routine calls for your team, Jev is cheap and fast, but it hands you a probability, not a promise. Deciding what happens when it isn’t sure is still your job."
summary:
  - "Jev reads a piece of text and answers questions you define in advance. It does not chat or write."
  - "Every answer comes with a probability, so your code can act when Jev is sure and pass the rest to a person."
  - "TypeSafe’s own docs say it is weak at math, counting, dates and reading between the lines."
  - "We haven’t run our own tests yet. The numbers below are TypeSafe’s or the press’s, and labeled that way."
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
  - title: "TypeSafe docs: Primitives (questions)"
    url: https://docs.typesafe.ai/primitives.md
    grade: Official docs
  - title: "TypeSafe docs: Jev 1.13 jaggedness"
    url: https://docs.typesafe.ai/model-jaggedness/jev-1.13.md
    grade: Official docs
inTheNews:
  - outlet: SiliconANGLE
    headline: "Jev creator TypeSafe closes $870M round at $7.5B valuation"
    url: https://siliconangle.com/2026/10/09/jev-creator-typesafe-closes-870m-round-at-7-5b-valuation/
    date: 2026-10-09
  - outlet: TechCrunch
    headline: "OpenAI’s Jev clone could help the frontier lab stop its swarming agents"
    url: https://techcrunch.com/2026/09/30/openais-jev-clone-could-help-the-frontier-lab-stop-its-swarming-agents/
    date: 2026-09-30
  - outlet: TechCrunch
    headline: "A new kind of AI model from a ChatGPT inventor is thrilling developers"
    url: https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/
    date: 2026-09-18
  - outlet: The Register
    headline: "TypeSafe AI debuts model for machines that plays Doom"
    url: https://www.theregister.com/a/5296711
    date: 2026-09-16
---

## The short version

Jev is a model from TypeSafe AI that went into early access in mid-September. It doesn’t chat, and it doesn’t write. You hand it some text, like a support ticket or a call transcript, plus a few questions with the answers you’ll accept. It hands back one of those answers, with a probability attached.

TypeSafe’s own one-liner is a good one: “unstructured state in, typed probabilistic decisions out.” ([TypeSafe](https://typesafe.ai/blog/introducing-system-one-models-and-jev))

## What you actually get back

There are three kinds of question ([docs](https://docs.typesafe.ai/primitives.md)):

- **Choice**: pick one from a list. Which team should get this ticket: billing, technical or sales?
- **Score**: place it on a scale you describe in words. How upset does this customer sound, from calm to very angry?
- **Noul**: yes or no, as a probability. Did the rep read the required disclosure?

You can ask many of these about the same piece of text in one request. The answers come back as data your software can act on, not as a paragraph someone has to read.

## Why developers are excited

Mostly cost and speed. The Register reports that “Jev charges $0.042 / MTok for input and $0 for output.” ([The Register](https://www.theregister.com/a/5296711)) That is a fraction of a cent for most business decisions.

TypeSafe says a full answer takes 70 to 500 milliseconds. That’s their number, not ours. TechCrunch reports that “When Vercel replaced OpenAI’s Luna with Jev, it got results five to 18 times more quickly and with greater accuracy.” ([TechCrunch](https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/))

There is one more reason, and it’s the one that gets quoted the most. TypeSafe says Jev “can’t hallucinate.” Read the fine print first. The launch post explains that every answer is guaranteed to fit the format you asked for, and admits: “Our number is not empirical.” ([TypeSafe](https://typesafe.ai/blog/introducing-system-one-models-and-jev)) So Jev won’t invent a fourth team when you gave it three. It can still pick the wrong one of the three.

## What it isn’t

This is the part we find most useful, and TypeSafe deserves credit for publishing it. Their own [jaggedness page](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md) lists where the current version is weak:

1. **It is literal.** “jev-1.13 answers the question you wrote, not the one you meant.” Vague questions get confident answers to the wrong thing.
2. **It isn’t a calculator.** “Jev is not a calculator,” and it “does not count reliably.” Do the arithmetic in code and give Jev words, not raw numbers.
3. **Dates are just text to it.** It “reads dates as text, not as ordered quantities.” Work out “renewal is in 12 days” before you ask.
4. **It trusts what it reads.** “State is data, and jev-1.13 does not treat it as hostile by default.” If customers write the text, ask about manipulation directly.
5. **It doesn’t write.** “jev-1.13 is not trained to generate text.” If you need a reply drafted, that is still an LLM’s job.

## So what is it good for?

Short text, a fixed list of answers, and a mistake that is cheap to catch. Routing tickets and emails. Checking a call transcript against a QA checklist. Giving an inbound lead a first score so a person knows who to call back first.

That last example is where Ronacher’s point lands. A probability is honest, but it is not a decision. You still choose the line: above it, the software acts; below it, a person looks. For anything that changes someone’s coverage, price or claim, a person makes the call. Jev sorts the pile.

## What we’ll do next

We haven’t tested Jev ourselves yet, and we won’t pretend otherwise. Our first tests will run it on made-up insurance leads and support tickets, compare it with a plain rule and with an LLM, and publish the data, code, cost and model version. When that is done, this post gets a “last tested” date and real numbers of our own.
