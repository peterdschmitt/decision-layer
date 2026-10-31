---
title: "The scanner said 2028. The invoice said 2026. Jev caught it."
dek: "Software that reads invoice photos saves your team hours, but a few numbers come out wrong, and they look just like the right ones. In TypeSafe’s test, Jev flagged every misread and nothing else. Here’s why it works, what it would look like on a claim, and what we still don’t know."
kind: Worked example
readMinutes: 9
author: The Decision Layer desk
audience: For agency owners and service teams who handle claim paperwork
published: 2026-10-31
lastChecked: 2026-10-31
modelVersion: jev-1.14.0
episode: ep-022-check-the-scanner
stats:
  - value: "3 of 3"
    label: "misread values Jev flagged"
  - value: "0 of 12"
    label: "correct values it flagged by mistake"
  - value: "3 of 15"
    label: "values a person had to look at"
statsNote: "TypeSafe’s test: two supplier invoices photographed on a phone, Jev 1.14, October 15, 2026. Not our test, and not claim paperwork."
snapshot:
  - label: "The problem"
    text: "Software that reads invoice photos is fast and mostly right. The few values it gets wrong look exactly like the right ones, so nobody spots them."
  - label: "What Jev does"
    text: "It asks one yes-or-no question about each value, twice: does it match the whole page, and does it match a close-up? Anything doubtful goes to a person, with a box drawn on the photo."
  - label: "What the test showed"
    text: "Neither check caught every mistake on its own. Together they caught all three, and flagged nothing that was right."
  - label: "What it means for you"
    text: "Your team checks three values instead of fifteen, and a wrong date or invoice number doesn’t reach the carrier."
  - label: "What we haven’t done"
    text: "Run it on real claim invoices. And TypeSafe says image questions aren’t ready for production yet."
respondingTo:
  lede: "NPR reports that AI writing detectors are flagging people’s own work as machine-written, and leaving them no way to see why. A magazine editor who uses these tools says a flag should send work to a person, never decide on its own. Any AI that reads your claim paperwork needs the same rule."
  outlet: NPR
  headline: "Your writing was flagged as AI. What does that actually mean?"
  url: https://www.npr.org/2026/10/31/nx-s1-5963520/ai-writing-detectors-pangram
  date: 2026-10-31
  quote: "Submissions should end in rejection, not an accusation."
  quoteBy: "Neil Clarke, publisher and editor of Clarkesworld, quoted by NPR"
  impact: "The editors in NPR’s story use detectors to sort a flood of submissions, provided a person checks what gets flagged. That’s the right shape for AI at an agency too. When software reads a contractor’s invoice off a phone photo, it will sometimes get a number wrong. You want a checker that says “look at this one” and shows you where, not one that quietly passes a wrong amount to the carrier."
summary:
  - "Software that reads invoice photos gets most values right and a few wrong, and you can’t tell which by looking at its output."
  - "Jev checks each value twice, against the whole page and against a close-up, and sends anything doubtful to a person with a box drawn around it."
  - "In TypeSafe’s test, that caught all three misreads on two invoices and flagged nothing that was correct."
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

## Why Jev is better for this job

After a loss, customers send your agency photos of invoices: the water mitigation crew, the tree service, the hotel. More agencies now let software read those photos and fill in the invoice number, date, amount and bank details. It’s fast, and it’s mostly right. The trouble is the few values it gets wrong, because they look exactly like the right ones. Today you have three ways to catch them: a person re-types everything, a person spot-checks a few, or you ask a second AI chatbot to read the photo again. Jev beats all three, for five reasons.

**1. It checks the value instead of reading it again.** A second chatbot gives you a second guess, and when the two disagree you still don’t know which is right. Jev answers a yes-or-no question about each value: is “16/09/2028” really the invoice date on this page? It returns “the probability that the answer is yes where 0 means no and 1 means yes” ([TypeSafe](https://docs.typesafe.ai/primitives/noul.md)). A number per value is something your system can sort and route by. A second reading isn’t.

**2. It looks twice: at the whole page and at a close-up.** TypeSafe’s test found that neither look is enough alone. On two phone photos of supplier invoices, the reading software got three values wrong. The whole-page check caught a wrong date (0.17) but passed a wrong invoice number at 0.88. The close-up check caught that invoice number (0.18) but passed the date at 0.66. Together they caught all three ([TypeSafe](https://docs.typesafe.ai/cookbooks/ocr_confidence_bounding_boxes.md)). A person spot-checking a few values would likely have missed at least one.

**3. It leaves the right values alone.** A checker that flags everything is just re-typing with extra steps. In the same test, all twelve correct values passed both checks. The lowest scores among them were 0.35 and 0.31, still above the 0.25 cut-off. So the person reviewed three values out of fifteen, and all three were real mistakes.

**4. It shows where to look.** Jev draws a box around each value on the photo. TypeSafe’s example colors the doubtful ones orange and the rest blue, so a reviewer checks each flagged value right where it’s printed instead of hunting through a creased carbon copy. Like the editors in the NPR story, your person gets a reason to look, not a verdict.

**5. It works with the reader you already have.** You don’t replace your scanning tool. TypeSafe says: “Any extractor works here, because the check only needs the photo and the values.” Jev sits after whatever reads the photo, and before anything goes to the carrier.

## The proof: a burst pipe, three invoices

A customer’s pipe burst. Over two days they text your agency photos of three invoices: the plumber, the water mitigation company and a hotel for two nights. Your system reads each photo and fills in the fields. On the mitigation invoice, it reads the date as 16/09/2028 when the paper says 16/09/2026, and the invoice number as INV03070 when it says INV03079. Those are the kinds of misreads TypeSafe’s test turned up. Nobody would spot them in a list of extracted values.

Here’s how it goes:

| | Who | What happens |
| --- | --- | --- |
| 1 | Your system | Reads each photo and fills in the invoice number, date, amount and bank details. |
| 2 | Jev | Checks every value against the whole photo and against a close-up of its box. |
| 3 | Your system | Anything under the cut-off on either check goes to a short review list, with the box drawn on the photo. Everything else moves on. |
| 4 | Your service person | Looks at two orange boxes, fixes the date and the invoice number in under a minute, and sends the claim packet. |
| 5 | The carrier | Reviews and pays the claim, as always. Jev never approves a payment or contacts anyone. |

Without the check, a 2028 date could get the invoice bounced as a future date, and the wrong invoice number makes duplicates hard to catch later.

Now a messier one: the hotel receipt is crumpled, and the total sits right on a fold. The close-up is a blur. Is the value right? Jev can’t tell, and it doesn’t pretend to. TypeSafe’s close-up question tells Jev to “Answer no if it is cut off, unreadable or different,” so a blurry crop scores low and lands on the review list instead of slipping through. That’s the point: “I can’t read this, please look” is an answer your person can act on.

## What your team would see

This is how we’d set up the screen. It isn’t a TypeSafe product; it’s what your developer would build on top of Jev’s answers.

- **A short list, not a long one.** Only the flagged values show up. On a typical packet, that might be two or three lines instead of every field on every invoice.
- **The photo, with a box.** Each flagged value opens the invoice photo with an orange box around the spot where it’s printed, so your person reads the real number in two seconds.
- **Both scores, in plain words.** “Doesn’t match the page” or “close-up doesn’t match,” instead of 0.17 and 0.66.
- **One click to fix.** The value is right there to correct. The fix is saved before anything goes to the carrier.

## How to try it in two weeks

You don’t need to trust any of this. You can test it on work your team has already done.

1. **Pull fifty old invoices** from claims your team keyed in by hand. Those hand-keyed values are your answer key.
2. **Run your scanner on the photos** and compare its values with the answer key. Now you know how many it gets wrong.
3. **Run Jev’s two checks** on the scanner’s values.
4. **Count two things:** how many wrong values Jev flagged, and how many right ones it flagged by mistake.
5. **Move the cut-off and count again.** Raise it and you’ll catch more mistakes but look at more right values. Pick the trade your team can live with.
6. **Then go live slowly.** For the first month, a person still glances at every invoice, and you compare what they catch with what Jev flagged.

## Questions your team will ask

**Does this replace the person who checks invoices?** No. It points that person at the few values worth checking. They still fix them, and the carrier still decides the claim.

**What does it cost?** TypeSafe lists Jev at $0.042 per million tokens for text ([TypeSafe](https://docs.typesafe.ai/models.md)). Its models page doesn’t list a separate price for images, which are still in early release, so ask TypeSafe before you budget for photos.

**What if our scanner is already very accurate?** Then Jev will flag very little, and you’ll have a number that shows it, instead of a feeling.

**Could Jev miss a mistake?** Yes. In TypeSafe’s test, each check alone missed one of the three. That’s why it checks twice, why you test on your own invoices first, and why bank details always get a phone call.

## The fine print

- **We haven’t run this yet.** TypeSafe’s test used two restaurant supplier invoices, not claim paperwork. When we test it on real repair invoices, we’ll publish the photos, every score and the model version.
- **This isn’t ready for production.** TypeSafe calls image questions “dreamer-ready,” meaning not yet ready for production, and says the request format and answers can change between releases. They need Jev 1.14 and a special header on every request. Try it on old claims, not live ones.
- **The cut-off is yours to set.** The 0.25 bar worked on two invoices. Try it on fifty invoices your team has already checked by hand, and see what gets flagged and what slips by. A higher bar means more looks and fewer misses.
- **A person approves every payment.** Jev flags. Your person fixes and sends. The carrier decides and pays. And a changed bank account on an invoice should always get a phone call, no matter what any score says.

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
