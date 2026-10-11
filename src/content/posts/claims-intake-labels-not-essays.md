---
title: "Labels, not essays: sorting first notice of loss reports with Jev"
dek: "A worked example for a claims desk. Four narrow questions, a few lines of routing code, and a person on every decision that touches a payout."
kind: Worked example
readMinutes: 9
author: The Decision Layer desk
published: 2026-10-11
lastChecked: 2026-10-11
modelVersion: jev-1.13.0
episode: ep-002-claims-intake
respondingTo:
  lede: "Fortune calls Jev a viral hit in Silicon Valley, and one engineer sums up the appeal in a line: “you pay for a full written answer when all you need is a label.” If you sort claims all day, that should sting a little, and then help."
  outlet: Fortune
  headline: "Jev, an AI for making quick decisions, has been a viral hit in Silicon Valley. But OpenAI is hot on its heels"
  url: https://fortune.com/2026/10/08/jev-an-ai-for-making-quick-decisions-has-been-a-viral-hit-in-silicon-valley-but-openai-is-hot-on-its-heels/
  date: 2026-10-08
  quote: "you pay for a full written answer when all you need is a label."
  quoteBy: "Paolo Rosson, head of applied AI at Dext, to Fortune"
  impact: "Most of claims intake is labeling: what kind of loss, is anyone hurt, is anything missing. Labels are now cheap. Deciding which labels a person must check, and how sure the software has to be before it moves a file, is still your call."
summary:
  - "Fortune reports Jev spread fast among developers, and that OpenAI now has a rival product that also takes images."
  - "Below is a sketch of claims intake with Jev: four narrow questions about a first notice of loss, and routing rules written in plain code."
  - "Jev sorts the queue. It never approves, denies or prices a claim, and we left fraud scoring out on purpose."
  - "We haven’t run this on real or synthetic claims yet. The code shows the shape of the request; results will come in a separate, published test."
sources:
  - title: "Fortune: Jev, an AI for making quick decisions, has been a viral hit in Silicon Valley. But OpenAI is hot on its heels (Oct 8, 2026)"
    url: https://fortune.com/2026/10/08/jev-an-ai-for-making-quick-decisions-has-been-a-viral-hit-in-silicon-valley-but-openai-is-hot-on-its-heels/
    grade: Independent reporting
  - title: "TypeSafe docs: Example use cases (insurance claims, risk assessment)"
    url: https://docs.typesafe.ai/concepts/use-case-map.md
    grade: Official docs
  - title: "TypeSafe docs: API reference"
    url: https://docs.typesafe.ai/api.md
    grade: Official docs
  - title: "TypeSafe docs: Confidence"
    url: https://docs.typesafe.ai/confidence.md
    grade: Official docs
  - title: "TypeSafe docs: Models and pricing"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
  - title: "TypeSafe docs: Jev 1.13 jaggedness"
    url: https://docs.typesafe.ai/model-jaggedness/jev-1.13.md
    grade: Official docs
  - title: "NAIC: Artificial intelligence (insurance topics)"
    url: https://content.naic.org/insurance-topics/artificial-intelligence
    grade: Regulator
  - title: "The New Stack: Decision models are suddenly everywhere. OpenAI’s is now public. (Oct 7, 2026)"
    url: https://thenewstack.io/openai-decision-models-deployment/
    grade: Independent reporting
inTheNews:
  - outlet: SiliconANGLE
    headline: "Jev creator TypeSafe closes $870M round at $7.5B valuation"
    url: https://siliconangle.com/2026/10/09/jev-creator-typesafe-closes-870m-round-at-7-5b-valuation/
    date: 2026-10-09
  - outlet: Fortune
    headline: "Jev, an AI for making quick decisions, has been a viral hit in Silicon Valley. But OpenAI is hot on its heels"
    url: https://fortune.com/2026/10/08/jev-an-ai-for-making-quick-decisions-has-been-a-viral-hit-in-silicon-valley-but-openai-is-hot-on-its-heels/
    date: 2026-10-08
  - outlet: The New Stack
    headline: "Decision models are suddenly everywhere. OpenAI’s is now public."
    url: https://thenewstack.io/openai-decision-models-deployment/
    date: 2026-10-07
  - outlet: TechCrunch
    headline: "OpenAI’s Jev clone could help the frontier lab stop its swarming agents"
    url: https://techcrunch.com/2026/09/30/openais-jev-clone-could-help-the-frontier-lab-stop-its-swarming-agents/
    date: 2026-09-30
---

## What Fortune found

Fortune’s Wen Shao spoke with TypeSafe’s CEO, Diogo Almeida, and with developers who have been building on Jev since it launched in September. Two things stood out to us.

The first is Paolo Rosson’s line about paying for an essay when you need a label. Fortune says he uses Jev in a personal project to screen proposed software changes, so fewer of them go to a bigger, pricier model. The part we keep coming back to is what he spent his time on: choosing which probabilities send a change to a person, depending on “how much risk you’re ok with.” That is the whole job in claims too.

The second is honesty from the founder. Almeida told Fortune, “Making the models reliable was so much harder than expected.” We believe him, and it is a good reason not to assume reliability you haven’t measured yourself.

Fortune also reports that OpenAI now has a competing Decisions API, priced higher than Jev per input token, and that it accepts images. Jev doesn’t. TypeSafe’s model page is plain about it: “Text only.” ([TypeSafe docs](https://docs.typesafe.ai/models.md)) For a claims desk that runs on photos, that matters. Everything below works on the words in a report, not the pictures attached to it.

## Why claims intake is a labeling problem

TypeSafe lists insurance claims among its own example uses. The list includes “Classify first-notice-of-loss reports, adjuster notes, and supporting documents” and “Escalate uncertain or high-risk cases to a human adjuster.” ([TypeSafe docs](https://docs.typesafe.ai/concepts/use-case-map.md))

Think about what a person does with a fresh first notice of loss. They read it and answer a handful of small questions. What kind of loss is this? Is anyone hurt? Do we know when and where it happened? Is it simple or messy? Then they drop it in a queue. None of that needs a written answer. It needs a label and a sense of how sure you are.

## The worked example

Here is a made-up report, the kind that comes in through a web form at 11 p.m.:

> “Hi, I was rear-ended at the light on Route 9 near the mall tonight around 9. My bumper is cracked and the trunk won’t close. The other driver gave me his info. My neck is a bit sore but I didn’t go to the ER. Policy ending 4471.”

We ask Jev four narrow questions about it in one request. Narrow matters. TypeSafe’s docs warn that a question needing several hops of reasoning “costs accuracy,” so we don’t ask “how should we handle this claim?” ([jaggedness page](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md))

The request follows the format in TypeSafe’s [API reference](https://docs.typesafe.ai/api.md). We call the HTTP endpoint directly so nothing depends on SDK details:

```python
import os
import requests

report = """Hi, I was rear-ended at the light on Route 9 near the mall tonight
around 9. My bumper is cracked and the trunk won't close. The other driver
gave me his info. My neck is a bit sore but I didn't go to the ER.
Policy ending 4471."""

body = {
    "state": report,
    "model": "jev-1.13.0",
    "questions": {
        "loss_type": {
            "type": "choice",
            "instructions": "What kind of loss does this report describe?",
            "criteria": {
                "other_or_unclear": "None of the below, or the report doesn't say",
                "auto_collision": "A vehicle hit another vehicle or an object",
                "auto_glass": "Only windshield or window glass is damaged",
                "property_water": "Water damage to a home or building",
                "theft": "Something was stolen",
            },
        },
        "injury_mentioned": {
            "type": "noul",
            "instructions": "Does the reporter say anyone was hurt, sore, or in pain, even slightly?",
            "criteria": {
                "true": "Any injury, pain or soreness is mentioned",
                "false": "No one is described as hurt",
            },
        },
        "location_given": {
            "type": "noul",
            "instructions": "Does the report say where the loss happened?",
            "criteria": {
                "true": "A place, road or address is named",
                "false": "No location is given",
            },
        },
        "complexity": {
            "type": "score",
            "instructions": "How complicated does this claim look to handle?",
            "criteria": [
                "One item, one party, facts are clear",
                "A few items or a second party involved",
                "Injuries, several parties, or disputed facts",
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

A few choices in there are deliberate, and each one comes from TypeSafe’s own list of weak spots:

- **“Other or unclear” goes first.** The docs say Jev “leans toward the option that comes first.” If it is going to lean, we want it to lean toward the safe bucket, not toward “auto collision.”
- **We don’t ask about the date.** Jev “reads dates as text, not as ordered quantities.” Your form already captures a date of loss. Check it, and whether it falls inside the policy period, in code.
- **The injury question is worded broadly on purpose.** “A bit sore” is the kind of phrase that turns a bumper claim into a bodily injury claim weeks later. We would rather a person see it today.
- **The report is treated as untrusted.** Customers write this text. The docs say Jev “does not treat it as hostile by default,” so nothing in the report should be able to move a file past a person.

## Routing on the answers, in plain code

The answers come back as numbers, so routing is ordinary code. You can read every rule, and a compliance reviewer can too:

```python
loss = answers["loss_type"]
injury = answers["injury_mentioned"]["noul"]   # 0 = no, 1 = yes
located = answers["location_given"]["noul"]
complexity = answers["complexity"]["score"]    # 0 to 2

if injury > 0.2:
    queue = "injury_review"          # low bar on purpose: a person looks
elif loss["confidence"] < 0.6 or loss["choice"] == "other_or_unclear":
    queue = "manual_triage"          # Jev isn't sure what this is
elif located < 0.5:
    queue = "needs_info"             # ask the customer before assigning
elif loss["choice"] == "auto_glass" and complexity < 0.5 and loss["confidence"] > 0.85:
    queue = "fast_track_glass"       # still a person approves payment
else:
    queue = f"standard_{loss['choice']}"
```

For our sample report, we’d expect the injury rule to fire on “my neck is a bit sore.” That’s the point of the example. We haven’t run it, so treat that as what we expect, not a result.

The numbers in that code (0.2, 0.6, 0.85) are placeholders, not advice. TypeSafe says so too: “The correct threshold values depend on your domain and the performance of the model for your use case.” ([confidence docs](https://docs.typesafe.ai/confidence.md)) Their confidence page also doesn’t claim that a 0.9 means right nine times in ten. You find that out by running your own past claims through it and counting.

## What Jev should never do here

This is the part we feel strongly about.

- **No approvals, denials or payment amounts.** Jev picks a queue. A licensed person makes every call that changes what someone is paid or whether they are covered.
- **No fraud score in this example.** TypeSafe’s list does include “potential fraud indicators.” A fraud flag follows a person around, though, and a cheap, fast flag is easy to over-trust. If you build one, send every flag to a trained investigator, log why it fired, and test it for uneven error rates before it touches a real file.
- **No protected traits as inputs,** and nothing that stands in for them.
- **Know your state’s rules.** The NAIC, the body of state insurance regulators, adopted a model bulletin on insurers’ use of AI in December 2023, and states decide whether and how to apply it. ([NAIC](https://content.naic.org/insurance-topics/artificial-intelligence)) Check where yours stands with your compliance team before anything here goes near production.

## The same pattern for underwriting

TypeSafe’s use-case map also lists risk assessment: turning “incident reports, claims notes, transaction descriptions, and vendor assessments into probabilistic risk indicators.” For an agency, the honest version is small. Use Jev to tag a commercial submission’s free-text notes (“mentions prior water losses,” “describes a business use that isn’t on the application”) so an underwriter knows where to look first. The underwriter still reads the file and sets the price.

## What it costs

TypeSafe charges $0.042 per million input tokens, and “Output tokens are free.” ([TypeSafe docs](https://docs.typesafe.ai/models.md)) Suppose a report plus four questions comes to roughly 600 tokens. That is our estimate, not a measurement. Ten thousand claims a month would then be about 6 million tokens, or about 25 cents. The model bill won’t be what decides this. The time you spend checking whether the labels are right will be.

## What we haven’t done yet

We haven’t run this code against Jev. The request format comes from TypeSafe’s API reference, and we’ll correct this post if a real call shows we got something wrong. Our next step is a published test on synthetic claims: a few hundred made-up reports with known answers, scored against Jev, a plain keyword rule and an LLM, with the data, code, cost and model version shown. Until then, the honest summary is the one Fortune’s reporting points to. The labels are cheap. Knowing when to trust them takes work, and it’s work worth doing before anyone’s claim depends on it.
