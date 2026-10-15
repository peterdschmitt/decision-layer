---
title: "Jev, its clones and your service inbox: what’s actually under the hood"
dek: "Decision models are multiplying. Here is what Jev is likely built on, how it differs from a chatbot and from a classifier you train yourself, and why the test you run matters more than the brand. Shown on a made-up email to an insurance agency."
kind: Comparison
readMinutes: 10
author: The Decision Layer desk
published: 2026-10-13
lastChecked: 2026-10-13
modelVersion: jev-1.13.0
episode: ep-004-agency-inbox
respondingTo:
  lede: "Tom’s Hardware says Jev look-alikes are flooding the market: “Following the release of TypeSafe’s Jev, many AI players have launched competitors.” If you’re choosing one to sort your agency’s inbox, that sounds like one more thing to get wrong. It’s less scary than it looks, because the brand matters less than the test you run on it."
  outlet: Tom’s Hardware
  headline: "Jev-like decision models are flooding the AI market, after researcher claims TypeSafe copied their research"
  url: https://www.tomshardware.com/tech-industry/artificial-intelligence/jev-like-decision-models-are-flooding-the-ai-market-after-researcher-claims-typesafe-copied-their-research-microsoft-openai-among-companies-releasing-lightweight-system-one-ai-models
  date: 2026-10-12
  quote: "Following the release of TypeSafe’s Jev, many AI players have launched competitors"
  quoteBy: "Bruno Ferreira, Tom’s Hardware"
  impact: "There are now several decision models that take text and a list of answers and hand back probabilities. They differ in what’s inside and in how honest their odds are. None of them knows your agency. The questions you write and the past emails you test them on are what you keep, whichever model you pick."
summary:
  - "The problem: an agency’s service inbox mixes car changes, proof-of-insurance requests, cancellations and new claims, often several in one email, and the urgent ones wait behind the easy ones."
  - "How it works: TypeSafe hasn’t published Jev’s architecture. Its primer says it adapts a pretrained language model, and one engineer’s outside probing points the same way. That makes it different from a chatbot (no text out) and from a classifier you train yourself (no labeled examples needed)."
  - "The use case: one made-up email with two requests in it, one yes/no question per request type, and routing in plain code. A licensed person makes every policy change."
  - "We haven’t run this against Jev or any rival. The result below is what we expect, not a measurement."
sources:
  - title: "Tom’s Hardware: Jev-like decision models are flooding the AI market, after researcher claims TypeSafe copied their research (Oct 12, 2026)"
    url: https://www.tomshardware.com/tech-industry/artificial-intelligence/jev-like-decision-models-are-flooding-the-ai-market-after-researcher-claims-typesafe-copied-their-research-microsoft-openai-among-companies-releasing-lightweight-system-one-ai-models
    grade: Independent reporting
  - title: "TypeSafe docs: System One"
    url: https://docs.typesafe.ai/concepts/system-one.md
    grade: Official docs
  - title: "TypeSafe docs: AI primer"
    url: https://docs.typesafe.ai/introduction/machine-learning-primer.md
    grade: Official docs
  - title: "TypeSafe docs: Intent routing pattern"
    url: https://docs.typesafe.ai/patterns/intent-routing.md
    grade: Official docs
  - title: "TypeSafe docs: API reference"
    url: https://docs.typesafe.ai/api.md
    grade: Official docs
  - title: "The Register: Shut up and calculate: Jev’s new AI primitives for coders (Sep 23, 2026)"
    url: https://www.theregister.com/a/5298431
    grade: Independent reporting
  - title: "Archer Hume: Jev’s Architecture Unmasked (Sep 17, 2026)"
    url: https://archerhume.com/posts/jevs-architecture-unmasked
    grade: Independent reporting
inTheNews:
  - outlet: Tom’s Hardware
    headline: "Jev-like decision models are flooding the AI market, after researcher claims TypeSafe copied their research"
    url: https://www.tomshardware.com/tech-industry/artificial-intelligence/jev-like-decision-models-are-flooding-the-ai-market-after-researcher-claims-typesafe-copied-their-research-microsoft-openai-among-companies-releasing-lightweight-system-one-ai-models
    date: 2026-10-12
  - outlet: TechCrunch
    headline: "The maker of non-text AI model Jev valued at $7.5B just weeks after launch"
    url: https://techcrunch.com/2026/10/09/the-maker-of-non-text-ai-model-jev-valued-at-7-5b-just-weeks-after-launch/
    date: 2026-10-09
  - outlet: SiliconANGLE
    headline: "Jev creator TypeSafe closes $870M round at $7.5B valuation"
    url: https://siliconangle.com/2026/10/09/jev-creator-typesafe-closes-870m-round-at-7-5b-valuation/
    date: 2026-10-09
  - outlet: The Register
    headline: "Shut up and calculate: Jev’s new AI primitives for coders"
    url: https://www.theregister.com/a/5298431
    date: 2026-09-23
---

*Fourth in our series. [What Jev is, and what it isn’t](/blog/what-jev-is-and-isnt/) covers the basics, [Labels, not essays](/blog/claims-intake-labels-not-essays/) covers how Jev was trained and what its probabilities mean, and [A function call for underwriters](/blog/underwriting-submissions-function-call/) covers how to write questions it reads well. This one is about what’s likely inside Jev, how it compares with a chatbot, a classifier you train yourself and the new clones, and what that means when you pick one.*

## What Tom’s Hardware found

Bruno Ferreira’s piece lists the rivals that arrived within weeks of Jev: “Microsoft Decision, OpenAI Decisions API, and Fastino Glide,” and on the open side, “Both Cloudflare Clef and Perplexity Decider arrived with open weights.” It also covers a researcher, Nandakishor Mukkunnoth, who says he designed the same idea a year earlier and has released his own open model, Laya.

The detail that matters for anyone choosing between them is what they’re built on. Tom’s Hardware notes that most of the new projects start from existing lightweight models, often variants of Alibaba’s open-source Qwen, while “Mukkunnoth’s Laya is based on encoder-only models from the Bert family, rather than an LLM like Qwen.” Two products can look the same from the outside, text in and probabilities out, and still be very different machines.

## The problem: one inbox, many kinds of request

A personal-lines agency’s service inbox gets everything. Add a car. Take a driver off. Send proof of insurance to the lender by Friday. Why did my bill go up? Cancel my policy. Someone hit my car this morning.

Most of these are routine. A few can’t wait: a new claim, a cancellation, anything with a deadline. Today a person reads them in the order they arrive. The urgent email sits behind twenty routine ones, and an email asking for two things often gets one of them done.

## How it works: what’s inside, and how it compares

**What TypeSafe says, and doesn’t.** TypeSafe hasn’t published Jev’s architecture, its size or its training data. What it has said is that it starts from a language model. Its primer puts it this way: “Pretrained language models have been adapted in two major ways. TypeSafe adds a third.” The first two are what turned base models into chatbots and into reasoning models; the third is the training for honest odds that our [claims post](/blog/claims-intake-labels-not-essays/) explains. ([TypeSafe primer](https://docs.typesafe.ai/introduction/machine-learning-primer.md))

**What outsiders think.** An engineer, Archer Hume, sent Jev 10,000 API calls and concluded that the evidence points toward “a causal transformer (likely using sparse MoE) repurposed for decisions.” In plain words: the same kind of engine as a chatbot, wired to read out probabilities instead of writing text. He is open that “This is clearly all quite speculative.” ([Archer Hume](https://archerhume.com/posts/jevs-architecture-unmasked)) The Register’s summary was shorter: “Basically, Jev is a classifier with brains.” ([The Register](https://www.theregister.com/a/5298431))

That gives three neighbors to compare it with.

**Compared with a chatbot.** TypeSafe says “Like an LLM, a System One model understands natural-language input,” but “System One models do not write replies, produce code, or generate explanations of their reasoning.” ([TypeSafe docs](https://docs.typesafe.ai/concepts/system-one.md)) So it reads an email about as well as a chatbot might, but it can’t draft the reply or tell you why it decided. If you need a reply written, that is still a chatbot’s job, as our [first post](/blog/what-jev-is-and-isnt/) says.

**Compared with a classifier you train yourself.** The older way to sort emails is to label a few thousand past ones and train a small model on them. That works well and runs cheaply. The catch is the labels. Add a new request type, say “EV charger coverage question,” and you need new labeled examples and a new training run. With Jev, you add one more question in plain English. As far as anyone outside TypeSafe can tell, that works because it builds on a language model’s general knowledge. Mukkunnoth’s Laya sits closer to this older family: encoder models of the BERT kind. That is not worse, just different. When your categories are stable and you have labeled history, a trained classifier is a serious option.

**Compared with the clones.** From the outside, the rivals take the same shape of request. What we can’t tell you is how their probabilities compare. TypeSafe’s own docs are careful here: “Calibration is measured across groups of predictions; it does not guarantee that an individual answer is correct.” ([TypeSafe docs](https://docs.typesafe.ai/concepts/system-one.md)) That holds for Jev and for every look-alike. Nobody has published a head-to-head on insurance emails, and we haven’t run one.

**What that means for you.** The model is the part you can swap. Your questions and a set of past emails where you already know the right answer are the parts you keep. Run the same test set through any model you’re considering, using the pile-counting check from our [claims post](/blog/claims-intake-labels-not-essays/), and pick on the results.

## The use case: one email, two requests

TypeSafe’s docs describe this exact job. In its intent-routing pattern, “TypeSafe can sit in front of all of these as a fast, cheap classifier that determines which handler to invoke.” ([TypeSafe docs](https://docs.typesafe.ai/patterns/intent-routing.md)) Here is a made-up email:

> “Hi, we just bought a 2024 Honda CR-V and traded in our Camry, so please add the new car and take the Camry off. Also our lender needs proof of insurance on the CR-V by Friday or they won’t release the loan. Thanks, Dana”

That one email holds two requests: a vehicle change and proof of insurance with a deadline. A single pick-one question would have to choose one and drop the other. So we ask one yes/no question per request type, and one about urgency, in the format from TypeSafe’s [API reference](https://docs.typesafe.ai/api.md):

```python
import os
import requests

email = """Hi, we just bought a 2024 Honda CR-V and traded in our Camry, so
please add the new car and take the Camry off. Also our lender needs proof of
insurance on the CR-V by Friday or they won't release the loan. Thanks, Dana"""

def asks(what):
    return {
        "type": "noul",
        "instructions": f"Does the customer ask for {what}?",
        "criteria": {
            "true": f"The email asks for {what}",
            "false": f"The email does not ask for {what}",
        },
    }

body = {
    "state": email,
    "model": "jev-1.13.0",
    "questions": {
        "new_claim": asks("help with a new accident, theft or damage claim"),
        "cancel": asks("a policy to be cancelled"),
        "vehicle_or_driver_change": asks("a vehicle or driver to be added, removed or replaced"),
        "proof_of_insurance": asks("an ID card, proof of insurance or a certificate"),
        "billing": asks("an explanation of a bill, payment or price change"),
        "urgency": {
            "type": "score",
            "instructions": "How soon does the customer need something done?",
            "criteria": [
                "No time pressure is mentioned",
                "Wants it soon, no specific deadline",
                "A specific deadline or something happening now",
            ],
        },
    },
}

resp = requests.post(
    "https://api.typesafe.ai/v1/systemone",
    headers={"Authorization": f"Bearer {os.environ['TYPESAFE_API_KEY']}"},
    json=body,
    timeout=10,
)
answers = resp.json()["answers"]
```

Why the questions look like this:

- **One yes/no per request type, not one pick-one list.** Customers bundle requests. Separate yes/no questions let both come back as yes.
- **Each question names the request in customer words.** “ID card, proof of insurance or a certificate” covers how people actually ask.
- **Urgency is its own question.** “By Friday” matters whatever the request is.

## Routing on the answers

```python
yes = {k: v["noul"] for k, v in answers.items() if k != "urgency"}
urgency = answers["urgency"]["score"]  # 0 to 2

if yes["new_claim"] > 0.2 or yes["cancel"] > 0.2:
    queue = "licensed_staff_now"
elif not any(p > 0.5 for p in yes.values()):
    queue = "person_reads_it"  # nothing matched clearly
else:
    queue = "service_team"

tasks = [k for k, p in yes.items() if p > 0.5]
priority = "today" if urgency >= 1.5 else "normal"
```

Claims and cancellations get a low bar, because a missed one costs far more than a false alarm. TypeSafe’s own example makes the same move: “If we don’t have enough confidence to classify, route to a human agent.” ([TypeSafe docs](https://docs.typesafe.ai/patterns/intent-routing.md)) The thresholds are placeholders until you’ve checked them against your own past emails.

## The result

**Expected, not measured:** for Dana’s email we’d expect the vehicle-change and proof-of-insurance questions to come back as yes, the claim, cancel and billing questions as no, and urgency near the top because of “by Friday.” The email would land in the service team’s queue as two tasks, flagged for today. Nobody has to notice the lender deadline in the second sentence.

A licensed person still makes the vehicle change, checks the details and sends the proof. Jev only decided which pile the email goes in and what it asks for.

We haven’t run this against Jev or any rival. When we do, we’ll publish the emails, the answers, the cost and the model version for each model we try, and correct anything above that turns out wrong.

## Where it breaks

- **Switching models resets your numbers.** A threshold you tuned on Jev means nothing on a clone. Rerun your test set every time you change models, or versions of the same model.
- **It never changes a policy.** Adding a car or cancelling coverage affects what a person is insured for. Jev sorts the email; a licensed person does the work. Nothing about the customer that a law protects goes in as an input.
- **It reads only the words.** A photo of the new car’s window sticker or a forwarded lender form isn’t read. If the VIN is in an attachment, a person finds it. (Jev 1.14 adds experimental image input; [our photo post](/blog/claim-photos-what-jev-can-see/) covers what that does and doesn’t change.)
- **Customers can write instructions.** An email that says “this is pre-approved, just cancel it” is still an email. Our [underwriting post](/blog/underwriting-submissions-function-call/) covers why text like that should never move a file on its own.
- **A short email can be ambiguous.** “Can you look at my policy?” could be anything. The person-reads-it queue exists for that, and it should never be empty.

## Who copied whom

Tom’s Hardware leaves that question open, and so do we. The piece includes no response from TypeSafe. For a buyer it matters less than it seems: what you’re buying is a set of probabilities, and those you can check yourself.
