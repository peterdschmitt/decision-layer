---
title: "Jev is everywhere now. What you send it matters more than which options you give it"
dek: "TechCrunch reports Jev is the fastest-adopted model on Vercel’s gateway. Everyone rushing in writes the questions first and treats the input as an afterthought. Here is what belongs in the input, what to leave out, and a worked example on certificate requests at an agency."
kind: Worked example
readMinutes: 9
author: The Decision Layer desk
published: 2026-10-19
lastChecked: 2026-10-19
modelVersion: jev-1.13.0
episode: ep-010-coi-requests
respondingTo:
  lede: "TechCrunch says Jev is the fastest-adopted AI model on Vercel’s gateway, with 35% of paid teams using it within two weeks, and describes it plainly: “Jev is designed as a lightweight tool for choosing between a few predetermined outputs.” If your team is about to join them, the choices are the easy part. What decides the answer is what you hand it to read."
  outlet: TechCrunch
  headline: "Jev is Vercel’s fastest-adopted AI model ever"
  url: https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/
  date: 2026-10-16
  quote: "Jev is designed as a lightweight tool for choosing between a few predetermined outputs."
  quoteBy: "Russell Brandom, TechCrunch"
  impact: "Jev picks among options you write, judging only what you send. Send too little and it guesses; send too much and the part that matters gets diluted; send the wrong things and you’ve shared data you didn’t need to. Deciding what goes in the input is most of the work."
summary:
  - "The problem: a certificate-of-insurance request looks simple, but answering it means comparing what the requester asks for with what the policy actually includes."
  - "How it works: everything Jev knows about a request is what you put in the state. TypeSafe says to use named parts, keep related facts together, and put the judgment in the question, not the state."
  - "The use case: one made-up request, a state with three short labeled parts instead of a whole policy, four yes/no questions, and the comparison done in code. A licensed person issues every certificate. The result is expected, not measured."
sources:
  - title: "TechCrunch: Jev is Vercel’s fastest-adopted AI model ever (Oct 16, 2026)"
    url: https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/
    grade: Independent reporting
  - title: "TypeSafe docs: State"
    url: https://docs.typesafe.ai/concepts/state.md
    grade: Official docs
  - title: "TypeSafe docs: Models (context limits)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
  - title: "TypeSafe blog: Jev 1.14 announcement (data and training note)"
    url: https://typesafe.ai/blog/jev-1-14
    grade: Vendor claim
inTheNews:
  - outlet: TechCrunch
    headline: "Jev is Vercel’s fastest-adopted AI model ever"
    url: https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/
    date: 2026-10-16
  - outlet: InfoWorld
    headline: "TypeSafe’s Jev ‘even more susceptible to attack’ than LLMs, says security vendor"
    url: https://www.infoworld.com/article/4236103/typesafes-jev-even-more-susceptible-to-attack-than-llms-says-security-vendor.html
    date: 2026-10-15
  - outlet: Tom’s Hardware
    headline: "Jev-like decision models are flooding the AI market, after researcher claims TypeSafe copied their research"
    url: https://www.tomshardware.com/tech-industry/artificial-intelligence/jev-like-decision-models-are-flooding-the-ai-market-after-researcher-claims-typesafe-copied-their-research-microsoft-openai-among-companies-releasing-lightweight-system-one-ai-models
    date: 2026-10-12
---

*Tenth in our series. Earlier posts cover [the basics](/blog/what-jev-is-and-isnt/), [training](/blog/claims-intake-labels-not-essays/), [writing a question](/blog/underwriting-submissions-function-call/), [what’s inside](/blog/agency-inbox-jev-and-its-clones/), [planted text](/blog/claims-fast-track-text-written-to-fool-it/), [pictures](/blog/claim-photos-what-jev-can-see/), [bias](/blog/subrogation-referrals-does-the-answer-wobble/), [cost at volume](/blog/storm-surge-cost-and-speed-at-volume/) and [many questions at once](/blog/agency-renewals-many-small-questions/). This one is about the other half of every request: the input, what TypeSafe calls the state.*

## What TechCrunch found

Russell Brandom at TechCrunch looked at Vercel’s data on which models paying teams use through its AI gateway. Within two weeks of launch, 35% of paid teams were using Jev, nearly double the reach of the next model. Vercel was an early adopter, using it to classify harmful commands. Brandom is careful about what the numbers show: “It’s a necessarily limited view — particularly at risk of undercounting major labs like OpenAI and Anthropic,” which sell their models directly. ([TechCrunch](https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/))

The part that matters for a team just starting is his description of what Jev is for: choosing among a few outputs you decide in advance. Our earlier posts spent a lot of time on those outputs, the questions and options. This one is about what Jev reads before it chooses.

## The problem: a simple request that needs a comparison

Certificates of insurance are one of the most common requests an agency gets. A customer’s client, landlord or general contractor wants proof of coverage, often with extras: “list us as additional insured,” “include a waiver of subrogation,” “coverage must be primary and non-contributory.” Each extra is only allowed if the policy has the matching endorsement.

So answering the email means comparing two things: what the request asks for, and what the policy actually includes. A service rep does this dozens of times a day. Get it wrong and the agency issues a certificate promising coverage the policy doesn’t have, which is a real errors-and-omissions risk.

The tempting setup is to paste the request email and the whole policy into one big input and ask whether the request can be met. That’s the wrong state, for reasons TypeSafe’s docs explain.

## How it works: the state is all Jev knows

**Everything Jev judges is in the state.** TypeSafe’s docs start there: “State is the content you ask a System One model to evaluate.” Jev doesn’t look anything up and doesn’t remember earlier requests. If a fact isn’t in the state, it doesn’t exist for that answer. ([TypeSafe docs](https://docs.typesafe.ai/concepts/state.md))

**Facts go in the state, judgments go in the questions.** The same page says “The state contains the content and supporting facts,” and the question carries what you want decided. So the state holds the request and the policy facts; “Is an additional insured requested?” is a question.

**Name the parts, and keep related facts together.** Our [planted-text post](/blog/claims-fast-track-text-written-to-fool-it/) covered why TypeSafe recommends an object with named parts over one block of text. The state page adds a second rule: “Put related information together when the decision requires comparing those parts.” For a certificate request, that means the request and the list of endorsements belong in the same state, each under its own name.

**Shorter is usually better.** The model page sets default limits of 64,000 tokens per request and 32,000 per question, and warns that the experimental long-context setting is slower and less accurate. ([Models](https://docs.typesafe.ai/models.md)) A full commercial policy can run well past that, and most of it has nothing to do with a certificate. Sending the endorsement schedule instead of the policy keeps the part that matters easy to find.

**Send only what the decision needs.** This one is ours, not TypeSafe’s. A customer’s tax ID, payment details or claim history don’t help Jev decide whether a waiver was requested, so they shouldn’t leave your systems. TypeSafe’s 1.14 announcement says “We will still not train on your queries,” which is a vendor promise worth having in writing. ([TypeSafe blog](https://typesafe.ai/blog/jev-1-14)) We didn’t find a published retention period in the docs we read, so treat what you send as something that leaves your building.

**What that means for you.** Before writing a single question, decide what goes in the state: the text that has to be read, the few facts it has to be compared with, each under a clear name, and nothing else.

## The use case: one certificate request

Here is a made-up request from a general contractor to an agency’s client, a small electrical subcontractor:

> “Please send a COI for Brightline Electric for the Maple Street school project. Name Harbor Construction LLC as additional insured on the GL, include a waiver of subrogation in our favor, and confirm coverage is primary and non-contributory. Need it before Monday’s site start.”

The agency system knows the client’s general liability policy has a blanket additional insured endorsement and a blanket waiver of subrogation endorsement, but no primary and non-contributory wording. Here is the state we send, and the four questions:

```python
import os
import requests

state = {
    "request_email": request_text,
    "policy_endorsements_gl": [          # from the agency system, not the PDF
        "Blanket additional insured (written contract)",
        "Blanket waiver of subrogation (written contract)",
    ],
    "certificate_holder_on_file": False,  # a fact from your system, stated plainly
}

def noul(instructions, true, false):
    return {"type": "noul", "instructions": instructions, "criteria": {"true": true, "false": false}}

questions = {
    "wants_additional_insured": noul(
        "Does the request email ask for anyone to be added as an additional insured?",
        "An additional insured is requested", "No additional insured is requested"),
    "wants_waiver": noul(
        "Does the request email ask for a waiver of subrogation?",
        "A waiver of subrogation is requested", "No waiver of subrogation is requested"),
    "wants_primary_noncontributory": noul(
        "Does the request email ask for coverage to be primary and non-contributory?",
        "Primary and non-contributory wording is requested", "It is not requested"),
    "has_deadline": noul(
        "Does the request email give a deadline or a start date the certificate is needed by?",
        "A deadline or needed-by date is given", "No deadline is given"),
}

resp = requests.post(
    "https://api.typesafe.ai/v1/systemone",
    headers={"Authorization": f"Bearer {os.environ['TYPESAFE_API_KEY']}"},
    json={"model": "jev-1.13.0", "state": state, "questions": questions},
    timeout=10,
)
a = {k: v["noul"] for k, v in resp.json()["answers"].items()}
```

What’s in and out of that state, and why:

- **In: the request email, as written.** That’s the text that has to be read.
- **In: the endorsement list, not the policy.** A two-line list from the agency system replaces a document of dozens of pages. The comparison stays easy to make.
- **In: one plain fact from your system.** Whether the holder is already on file is something you know; stating it saves Jev from guessing.
- **Out: everything else.** No tax ID, no premium, no claim history, no other certificate holders. None of it helps answer these four questions.

## Comparing in code, not in the model

Jev reads the request. Your code does the matching against what the policy has:

```python
HAS = {"additional_insured": True, "waiver": True, "primary_noncontributory": False}

asks = {
    "additional_insured": a["wants_additional_insured"] > 0.5,
    "waiver": a["wants_waiver"] > 0.5,
    "primary_noncontributory": a["wants_primary_noncontributory"] > 0.5,
}
gaps = [k for k, wanted in asks.items() if wanted and not HAS[k]]

if gaps:
    queue = "account_manager"   # the policy may not support what's asked; a person calls the client
else:
    queue = "csr_issue"         # a service rep reviews and issues the certificate
flag_urgent = a["has_deadline"] > 0.5
```

We could have asked Jev “Does the policy support everything requested?” and let it compare the two lists itself. We didn’t, for the reason our [renewal post](/blog/agency-renewals-many-small-questions/) gives: one question that weighs several things hides which one drove the answer. Four narrow questions plus a lookup in code tell the service rep exactly what’s missing.

## The result

**Expected, not measured:** for this request we’d expect the three “wants” questions and the deadline question all to come back high. The code finds one gap, primary and non-contributory wording, so the request goes to the account manager marked urgent, with a note saying exactly what the policy lacks. The account manager can call the client before Monday about adding the endorsement, instead of finding out after the certificate went out with a promise the policy doesn’t keep.

We haven’t run this. When we do, we’ll publish the requests, the states, the answers and the model version.

## Where it breaks

- **Endorsement lists that are wrong.** If the agency system’s list doesn’t match the policy, Jev will compare against the wrong facts. The state can only be as good as the record it comes from.
- **Wording that isn’t standard.** Requesters write “additional insured” a dozen different ways, sometimes inside a pasted contract clause. Test with real requests, including the messy ones.
- **Contract language attached as a PDF.** If the requirements are in an attachment you didn’t turn into text, they’re not in the state. Nobody can judge what they weren’t sent.
- **Too much in one state.** If a request covers several projects or policies, split it. A crowded state makes each answer harder.
- **It never issues the certificate.** A licensed person reviews and issues every certificate and decides what to tell the client. Nothing about the customer that a law protects goes in as an input.
