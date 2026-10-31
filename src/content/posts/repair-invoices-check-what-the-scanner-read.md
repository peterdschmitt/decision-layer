---
title: "The AI read 15 numbers. A decision model flagged the 3 that were wrong."
dek: "Language models can read paperwork at any volume, but they can’t tell you which of their own answers are safe to act on. Pair one with a decision model and you get both: the reading at scale, and a fast, cheap call on every value with a score you can show anyone. Here’s how the pairing works, from a published test on invoice photos, and what it changes for anyone who runs a paperwork-heavy process."
kind: Worked example
readMinutes: 10
author: The Decision Layer desk
audience: For leaders deciding how AI runs their operations
published: 2026-10-31
lastChecked: 2026-10-31
modelVersion: jev-1.14.0
episode: ep-022-check-the-scanner
stats:
  - value: "3 of 3"
    label: "misread values the decision model flagged"
  - value: "12 of 15"
    label: "values cleared to act on with no one touching them"
  - value: "0"
    label: "correct values sent to a person by mistake"
statsNote: "From TypeSafe’s published test: two supplier invoices photographed on a phone, read by OCR and an LLM, checked by Jev 1.14 on October 15, 2026. Not our test."
snapshot:
  - label: "The problem"
    text: "An LLM can read every invoice, form and letter you get. But now and then it’s confidently wrong, and you can’t tell which time, so someone ends up re-checking all of it, and the speed you bought disappears."
  - label: "The pairing"
    text: "The LLM reads and turns each document into named values. A decision model then asks one narrow question of every value: does it match the page? Each answer is a probability, and a rule you wrote decides what moves now and what waits for a person."
  - label: "What the test showed"
    text: "Of 15 values read from two invoice photos, 3 were wrong. The decision model flagged all three and cleared the other twelve. Neither of its two checks would have caught every error alone."
  - label: "What changes for leaders"
    text: "You stop paying people to re-read everything. You design the questions, set the bar for acting automatically, and spend human time only where there’s real doubt."
  - label: "What we haven’t done"
    text: "Run this ourselves. TypeSafe’s test used two invoices, and it says image questions aren’t ready for production yet."
respondingTo:
  lede: "NPR reports that AI writing detectors are flagging people’s own work as machine-written, with no explanation and no clear way to appeal. A magazine editor who uses these tools says a flag should start a human look, not end in a verdict."
  outlet: NPR
  headline: "Your writing was flagged as AI. What does that actually mean?"
  url: https://www.npr.org/2026/10/31/nx-s1-5963520/ai-writing-detectors-pangram
  date: 2026-10-31
  quote: "Submissions should end in rejection, not an accusation."
  quoteBy: "Neil Clarke, publisher and editor of Clarkesworld, quoted by NPR"
  impact: "Detectors are what AI looks like when one tool hands out verdicts on its own: a score, no reason, no rule for doubt. The answer isn’t less AI. It’s a process where each AI output arrives with a measured level of doubt, and a rule you own decides what happens next. That’s what pairing an LLM with a decision model gives you, at a scale no review team could match."
summary:
  - "An LLM reads the paperwork; a decision model scores every value it read, fast and cheaply."
  - "In TypeSafe’s invoice test, that caught all three misreads and cleared the twelve correct values."
  - "Leaders get speed and an audit trail, and people only touch the cases with real doubt."
sources:
  - title: "NPR: Your writing was flagged as AI. What does that actually mean? (Oct 31, 2026)"
    url: https://www.npr.org/2026/10/31/nx-s1-5963520/ai-writing-detectors-pangram
    grade: Independent reporting
  - title: "TypeSafe docs: OCR confidence and bounding boxes (cookbook)"
    url: https://docs.typesafe.ai/cookbooks/ocr_confidence_bounding_boxes.md
    grade: Official docs
  - title: "TypeSafe docs: Noul"
    url: https://docs.typesafe.ai/primitives/noul.md
    grade: Official docs
  - title: "TechCrunch: OpenAI makes its Jev competitor widely available (Oct 22, 2026)"
    url: https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/
    grade: Independent reporting
  - title: "TypeSafe docs: Models"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
inTheNews:
  - outlet: NPR
    headline: "Your writing was flagged as AI. What does that actually mean?"
    url: https://www.npr.org/2026/10/31/nx-s1-5963520/ai-writing-detectors-pangram
    date: 2026-10-31
  - outlet: CBS News
    headline: "AI agents are roaming around consumers' bank accounts, and banks aren't happy about it"
    url: https://www.cbsnews.com/news/ai-agents-customer-bank-accounts-security/
    date: 2026-10-23
  - outlet: CNBC
    headline: "Anthropic IPO filing warns some risks may be uninsurable. AI coverage will be issue for every company"
    url: https://www.cnbc.com/2026/10/28/anthropic-ipo-ai-risks-insurance.html
    date: 2026-10-28
  - outlet: TechCrunch
    headline: "OpenAI makes its Jev competitor widely available as decision model competition heats up"
    url: https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/
    date: 2026-10-22
---

## The tractor and the hydraulics

A tractor on its own can cross a field and pull a load. Add hydraulics and it becomes a different machine: it digs a trench in minutes and lifts loads no crew could move, with a touch of a lever. The engine didn’t get bigger. The hydraulics multiplied what it could do.

An LLM is the tractor. It can read a crumpled invoice photo, a forty-page contract or a rambling customer email and turn it into something structured. A decision model is the hydraulics. Jev from TypeSafe, and now rival models from OpenAI and others, write nothing at all. They answer a narrow question you define, with a probability, fast enough and cheaply enough to ask it of every single value the LLM produced. That is the heavy lifting an LLM can’t do on its own: judging, at full volume, which of its outputs you can act on right now.

Put them together and paperwork stops being a queue. The LLM reads everything. The decision model scores everything. Your rules move the clean work at once and hand the doubtful few to a person, with the reason attached.

## Why the pairing beats either tool alone

Most teams using AI on paperwork today do one of four things: let the LLM’s output through and hope, have people re-check everything it read, ask a second LLM to check the first, or skip the LLM and key it all by hand. The pairing beats all four, for five reasons.

**1. The LLM does the reading a decision model can’t.** A decision model needs something to judge. It doesn’t turn a photo into an invoice number, a date and an amount. In TypeSafe’s test, that job went to OCR and an LLM, which read the photos and returned named values ([TypeSafe](https://docs.typesafe.ai/cookbooks/ocr_confidence_bounding_boxes.md)). That’s the tractor doing what tractors do.

**2. The decision model turns every reading into odds you can act on.** For each value it answers one yes-or-no question: is “16/09/2028” really the invoice date on this page? It returns “the probability that the answer is yes where 0 means no and 1 means yes” ([TypeSafe](https://docs.typesafe.ai/primitives/noul.md)). A second LLM would hand you a second opinion in prose. A probability is something a rule can act on, every time, the same way.

**3. Less slop, because two looks catch what one misses.** TypeSafe asked its question twice per value: once against the whole page, once against a close-up of where the value is printed. The whole-page look caught a wrong date (0.17) but passed a wrong invoice number at 0.88. The close-up caught that invoice number (0.18) but passed the date at 0.66. Together they caught all three errors, and every correct value passed both.

**4. More legitimate outcomes, because every action has a paper trail.** Each value that moves on carries two scores, a box drawn on the photo where it’s printed, and the rule that let it through. When an auditor, a customer or your board asks why a payment went out, the answer is a sentence, not a shrug.

**5. Faster and cheaper, because people only touch real doubt.** In the test, a person needed to look at 3 values out of 15. The other twelve could move at once. Decision models charge per input token: Jev’s text price is $0.042 per million tokens ([TypeSafe](https://docs.typesafe.ai/models.md)). TypeSafe doesn’t list a separate price for images yet, but the economics are the point: the checks are cheap enough to run on everything, so the expensive part of the process, people, goes only where it earns its keep.

## The worked example: two invoices, fifteen numbers

TypeSafe’s test used two real supplier invoices a restaurant received, photographed on a phone. One was a creased carbon copy. The other had a shadow down the middle. OCR and an LLM read the supplier, invoice number, date, amount due and bank details from each: fifteen values in all. Three were wrong, and none of them looked wrong:

| Invoice | Field | The AI read | The paper says |
| --- | --- | --- | --- |
| Milkwood | Invoice number | AN400074 | IN400074 |
| Siyakhula | Invoice number | INV03070 | INV03079 |
| Siyakhula | Date | 16/09/2028 | 16/09/2026 |

Here’s how the work would flow in a finance or claims operation built on the pairing:

| | Who | What happens |
| --- | --- | --- |
| 1 | The LLM | Reads each photo and returns named values: supplier, invoice number, date, amount, bank details. |
| 2 | The decision model | Scores every value twice: against the whole page and against a close-up of where it’s printed. |
| 3 | Your rule | Anything under the bar on either look goes to a short review list, boxed on the photo. Everything else moves on. |
| 4 | A person | Looks at three orange boxes, fixes three values in a minute, and approves. |
| 5 | Your systems | Pay, file or forward the invoice, with both scores and the rule logged next to it. |

Without the pairing, you choose between trusting the LLM, and paying an invoice dated two years in the future, or paying someone to re-read all fifteen values on every invoice.

Now the messy case: a receipt so crumpled that the total sits on a fold, and the close-up is a blur. A lone LLM might return its best guess with full confidence. The decision model’s close-up question tells it to “Answer no if it is cut off, unreadable or different,” so the blur scores low and lands on the review list. An honest “I can’t tell” is worth more than a confident guess, because your process knows what to do with it.

## The same pattern, everywhere paperwork drives action

The invoice is just the clearest example. The shape is the same wherever an LLM reads and someone acts on what it read:

- **Insurance claims:** contractor invoices, repair estimates and receipts behind a claim payment.
- **Accounts payable:** supplier invoices before payment runs, where a changed bank account is the costliest misread.
- **Onboarding and compliance:** names, dates and ID numbers read from documents customers upload.
- **Logistics:** bills of lading and delivery notes, where one wrong digit sends goods to the wrong place.
- **Healthcare billing:** codes and amounts read from claim forms before they’re submitted.

In each, the LLM gives you reach and the decision model gives you something you can act on at that reach. Neither does that alone.

## What changes for leaders

- **You design questions, not prompts.** The real work is choosing what to ask of each value: does it match the page, is it in a valid range, does it agree with the purchase order? Small questions anyone can read and audit.
- **You own the dial.** The bar for acting automatically is a business decision, not a technical one. TypeSafe used 0.25 on two invoices. A process that pays money might set it higher; one that only files documents might set it lower. Set it by testing on past work where you know the right answers.
- **You measure before you trust.** Nobody should take a vendor’s test, or ours, on faith. Two weeks on your own documents tells you how many errors the pairing catches and how much human time it saves.
- **People keep the calls that move money.** The pairing doesn’t remove people. It sends them the right three cases instead of all fifteen, with the evidence attached. And a changed bank account always gets a phone call, whatever the score.

## How to try it in two weeks

1. **Pick one document type** where errors cost you money: supplier invoices, claim receipts, onboarding forms.
2. **Pull fifty you’ve already processed by hand.** Those hand-checked values are your answer key.
3. **Run your LLM on the originals** and compare its values with the answer key. Now you know its real error rate.
4. **Add the decision model’s two checks** on every value it read.
5. **Count two things:** how many errors were flagged, and how many correct values were flagged by mistake. Move the bar and count again.
6. **Go live in shadow mode.** For a month, people still check everything, and you compare what they catch with what the pairing flagged. Then let the clean work move on its own.

## Which decision model for this job

Jev isn’t the only decision model anymore. OpenAI made its Jev competitor widely available in October ([TechCrunch](https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/)), and Microsoft, Cloudflare, AWS and others now offer similar models. For this job, the question to ask each vendor is simple: can it answer a yes-or-no question about an image, and is that ready for production?

- **Jev 1.14 (TypeSafe):** has a published, step-by-step test of this exact job, the one used here. Images are early release.
- **Other decision models:** we haven’t checked which accept images yet. If one does, run the same two-week test on it. The pattern doesn’t depend on the vendor, and your answer key lets you compare them on your own documents.

## Questions leaders will ask

**Does this replace the people who check documents?** No. It changes what they check: the few values with real doubt, instead of everything.

**Why not just use a better LLM?** A better LLM makes fewer mistakes, but it still can’t tell you which of its answers are the mistakes. That’s the job the decision model does, and it does it for every value.

**Could it miss an error?** Yes. In the test, each check alone missed one of the three. That’s why it looks twice, why you set the bar on your own documents, and why the costliest values always get a person.

**Is it ready?** The pattern is. The image feature isn’t yet: TypeSafe says it isn’t ready for production. Start with a test on past documents, not live payments.

## The fine print

- **We haven’t run this yet.** Every number here is from TypeSafe’s published test on two restaurant supplier invoices, not from our own work or from claim paperwork. When we test it, we’ll publish the documents, every score and the model version.
- **This isn’t ready for production.** TypeSafe calls image questions “dreamer-ready,” meaning not yet ready for production, and says the request format and answers can change between releases. They need Jev 1.14 and a special header on every request.
- **Two invoices is a small test.** It shows the pattern works, not how often it works. Your fifty documents will tell you far more.

## For your developer

Three requests per invoice: find each value on the photo, box it again on a zoomed-in region, then check a crop of that box. This is the first and last check, trimmed from [TypeSafe’s cookbook](https://docs.typesafe.ai/cookbooks/ocr_confidence_bounding_boxes.md), which has the full code including the zoom step:

```python
import os
from typesafe_sdk import Box, Noul, TypeSafeClient

BAR = 0.25  # TypeSafe's cut-off on two invoices: tune it on your own
SAME = "Ignore differences in spacing, punctuation, currency symbols and letter case."

client = TypeSafeClient(
    api_key=os.environ["TYPESAFE_API_KEY"],
    headers={"TypeSafe-Danger-Zone-Images": "true"},  # images are not production-ready yet
)

def page_check(page_image, values, fields):
    questions = {}
    for f, v in values.items():
        questions[f"box_{f}"] = Box(instructions=f"{fields[f]}, printed as “{v}” in `page`")
        questions[f"fits_{f}"] = Noul(instructions=f"Is “{v}” {fields[f]} on `page`? {SAME}")
    r = client.system_one(state={"page": page_image}, questions=questions, model="jev-1.14.0")
    return {f: (r.boxes[f"box_{f}"].box, r.nouls[f"fits_{f}"].noul) for f in values}

def needs_review(page_score, crop_score):
    return page_score < BAR or crop_score < BAR
```

The crop check is one Noul per value with the cropped image inside its instructions: does this crop clearly show the value? Answer no if it’s cut off, unreadable or different. Show every flagged value with its box on the photo and both scores.
