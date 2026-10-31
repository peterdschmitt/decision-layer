---
title: "In a published test, an LLM working alone misread 1 in 5 invoice numbers. Working in tandem with a decision model, not one error got through."
dek: "Neither kind of model can run a finance process on its own. An LLM reads any invoice but can’t say how sure it is of each value; a decision model can put a number on anything but can’t read a crumpled photo. Together they do what neither can: move invoices straight through, at volume, with a score behind every one. That is the gap between a $10.18 invoice and a $2.36 one. Here’s what it’s worth in cost, cash and customers, and how to work out your own number."
kind: Explainer
readMinutes: 12
author: The Decision Layer desk
audience: For finance, operations and transformation leaders deciding how AI runs their processes
published: 2026-10-31
lastChecked: 2026-10-31
modelVersion: jev-1.14.0
episode: ep-022-check-the-scanner
stats:
  - value: "20%"
    label: "of invoice values the LLM-based reader got wrong in TypeSafe’s test (3 of 15)"
  - value: "0 of 3"
    label: "of those errors got through once the LLM and a decision model worked together, and no correct values were held back"
  - value: "77%"
    label: "lower cost per invoice at best-in-class AP teams ($2.36 vs $10.18)"
  - value: "96% vs 38%"
    label: "PO invoices processed with no human touch, best-in-class vs average"
statsNote: "The first two are from TypeSafe’s published test on two invoices (Jev 1.14, Oct 15, 2026), too small to predict an error rate. The last two are Ardent Partners benchmarks reported by Medius, an AP software vendor, in September 2026. None are our measurements."
snapshot:
  - label: "Why it matters"
    text: "Invoice processing is a cost line, a cash lever and a supplier relationship at once. The spread between average and best-in-class teams is large, measured, and mostly explained by one thing you can change: how much of the work runs without a person."
  - label: "Where the money is"
    text: "About $782,000 a year for a business processing 100,000 invoices, from cost alone. Paying in days instead of weeks also opens early-payment discounts worth 2% of qualifying spend, an annualized return of roughly 37%."
  - label: "Why one model isn’t enough"
    text: "An LLM can read any invoice but can’t put a number on how sure it is of each value, so people re-read its work. A decision model can put a number on anything but can’t turn a photo into fields. Each has the half the other lacks."
  - label: "What to do"
    text: "Run them in tandem. The LLM reads and structures every invoice; the decision model answers narrow questions about each value in milliseconds for a fraction of a cent; your rules move confident invoices straight through. Together they lift work no team could lift by hand."
  - label: "What we haven’t done"
    text: "Measured this ourselves. The benchmarks are industry figures and the only public test of the pairing used two invoices. Your own baseline is the number that matters."
respondingTo:
  lede: "NPR reports that AI writing detectors are flagging people’s own work as machine-written, with no explanation and no clear way to appeal. A magazine editor who uses these tools says a flag should start a human look, not end in a verdict."
  outlet: NPR
  headline: "Your writing was flagged as AI. What does that actually mean?"
  url: https://www.npr.org/2026/10/31/nx-s1-5963520/ai-writing-detectors-pangram
  date: 2026-10-31
  quote: "Submissions should end in rejection, not an accusation."
  quoteBy: "Neil Clarke, publisher and editor of Clarkesworld, quoted by NPR"
  impact: "Detectors show the two ways AI fails at scale: it decides on its own with no measured doubt, or it flags so much that people end up doing the work anyway. Neither saves money. The operations that win with AI design for measured doubt from the start: every automated decision carries a score, a rule you own decides what moves on its own, and people see only the cases that need them. That design takes two models working together: one that reads and writes, and one that answers, with a number, how sure to be."
summary:
  - "Best-in-class AP teams spend 77% less per invoice than average and finish in days, mostly because almost none of their invoices need a person."
  - "Pairing an LLM with a decision model is the design that can raise that touchless rate: the LLM reads, the decision model scores every value, your rules decide."
  - "The prize is cost, early-payment discounts and faster customer payouts; measure your own baseline before you trust any number."
sources:
  - title: "Medius: How much does it cost to process an invoice? (Sept 17, 2026; cites Ardent Partners)"
    url: https://www.medius.com/blog/how-much-does-cost-process-invoice-where-you-save/
    grade: Vendor claim
  - title: "APQC: 4 KPIs that set good accounts payable organizations apart"
    url: https://www.apqc.org/blog/4-kpis-set-good-accounts-payable-organizations-apart
    grade: Independent reporting
  - title: "AFP: When does it pay to take an early payment discount?"
    url: https://www.financialprofessionals.org/training-resources/resources/articles/Details/when-does-it-pay-to-take-an-early-payment-discount
    grade: Independent reporting
  - title: "Insurance Journal: JD Power: Homeowners claims satisfaction rises as repair times improve (Mar 18, 2026)"
    url: https://www.insurancejournal.com/news/national/2026/03/17/862324.htm
    grade: Independent reporting
  - title: "NPR: Your writing was flagged as AI. What does that actually mean? (Oct 31, 2026)"
    url: https://www.npr.org/2026/10/31/nx-s1-5963520/ai-writing-detectors-pangram
    grade: Independent reporting
  - title: "TypeSafe docs: OCR confidence and bounding boxes (cookbook)"
    url: https://docs.typesafe.ai/cookbooks/ocr_confidence_bounding_boxes.md
    grade: Official docs
  - title: "TypeSafe docs: Models (pricing)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
  - title: "TechCrunch: OpenAI makes its Jev competitor widely available (Oct 22, 2026)"
    url: https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/
    grade: Independent reporting
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

## The gap is the share of work nobody touches

Every finance leader knows the cost-per-invoice number. Fewer look at what drives it. Ardent Partners’ benchmarks, as reported by the AP software vendor Medius in September, put the average cost of processing an invoice at $10.18 and the best-in-class cost at $2.36 ([Medius](https://www.medius.com/blog/how-much-does-cost-process-invoice-where-you-save/)). That is 77% less.

The same research shows where the gap comes from. The average company processes 38.3% of its purchase-order invoices without a person touching them, and takes 11.6 days per invoice. Best-in-class teams hit 96.3% touchless and finish in 1.4 days. Medius’s own reading of that data: the jump in touchless processing “is where the bulk of AP automation ROI actually comes from.” Treat a vendor’s numbers with care, but an independent benchmarker points the same way. APQC finds that top performers’ AP costs are “one-fifth of what it is for organizations performing in the bottom quartile,” that top performers take half as many days from receipt to payment, and that bottom performers need four times as many staff ([APQC](https://www.apqc.org/blog/4-kpis-set-good-accounts-payable-organizations-apart)).

So the question for a leader isn’t “should we use AI on invoices?” It’s “what would it take to move our touchless rate from 38% toward 96%?”

## Why one model on its own hasn’t closed it

LLMs changed the reading part of the job. They can pull a supplier, an amount and a due date out of almost any invoice, in any layout, from a scan or a phone photo. That should have sent touchless rates soaring, yet the benchmarks still show the average company at 38%. The reason is that an LLM on its own gives you a reading but no measure of how much to trust it. It is fluent and confident either way, so people re-read its work, the invoice still counts as touched, and the cost and the days barely move.

Decision models have the opposite shape. Jev from TypeSafe, and now rival models from OpenAI and others, write nothing at all. They answer a narrow question you define, with a probability, in milliseconds, for a fraction of a cent. But hand one a crumpled phone photo and ask it to fill in an invoice record, and it has nothing to work with. It needs something to judge.

Each model has exactly the half the other lacks. That is the whole idea behind this site.

## The tractor and the hydraulics

A tractor on its own can cross a field and pull a load. Hydraulics on their own are a pump and some hoses. Put them together and you get a different machine: it digs a trench in minutes and lifts loads no crew could move, with a touch of a lever. Neither part got bigger. Working together, they multiplied what each could do.

An LLM is the tractor: general, powerful, able to read and draft almost anything. A decision model is the hydraulics: it puts force behind that work by answering, at full volume, the questions that decide what happens next. Does this amount match the page? Is this the invoice date? Is this supplier’s bank account the one on file? Each answer is a probability, so a rule you own can act on it.

In tandem, they move the number that matters. The LLM reads every invoice into structured values. The decision model answers a few narrow questions about each value. Invoices where every answer clears your bar go straight through. The few with real doubt go to a person, with the doubtful values marked. Touchless becomes the default and human time goes where it counts, which is exactly what best-in-class teams look like. Neither model gets you there alone.

We call this pattern **Read and weigh**: the LLM supplies the material, the decision model supplies fast direction. It is one of five ways to run the two in tandem, each with a worked example in our [open examples repository](https://github.com/peterdschmitt/decision-layer-examples).

## The math for a 100,000-invoice operation

Here is what the benchmark gap is worth at one realistic volume. These are industry figures multiplied out, not a forecast for your business:

| | Average AP team | Best-in-class AP team |
| --- | --- | --- |
| Cost per invoice | $10.18 | $2.36 |
| Annual cost at 100,000 invoices | $1,018,000 | $236,000 |
| PO invoices with no human touch | 38.3% | 96.3% |
| Days to process a PO invoice | 11.6 | 1.4 |

The gap is about $782,000 a year, plus ten days of cycle time on every invoice, which matters for early-payment discounts and supplier relationships.

What would the decision model cost? Jev charges $0.042 per million input tokens ([TypeSafe](https://docs.typesafe.ai/models.md)). Even if checking one invoice took 100,000 tokens, far more than a page of text, it would cost less than half a cent. At 100,000 invoices, that is under $420 a year. (TypeSafe doesn’t list a separate price for images yet, so price photo checks with the vendor.) The checks are close to free. What isn’t free is building the workflow around them: the integration, the rules and the month of shadow testing. That cost isn’t in these numbers, and it’s the one to put next to your own estimate of the gain.

## What it’s worth: money, customers and revenue

**Money.** The cost gap above is only the first line. The second is cash. The most common supplier term in business-to-business trade is “2/10 net 30”: take 2% off if you pay within 10 days, otherwise pay in 30. The Association for Financial Professionals puts the annualized return of taking that discount at “roughly 37%” ([AFP](https://www.financialprofessionals.org/training-resources/resources/articles/Details/when-does-it-pay-to-take-an-early-payment-discount)). You can only take it if invoices clear in days. At the average 11.6 days, the typical invoice misses that window. To size it for yourself: if $10 million of your annual spend carries 2/10 terms, paying it on time is worth $200,000 a year.

**Customers.** The same design works on the processes your customers feel. In J.D. Power’s 2026 study of homeowners’ insurance claims, faster repair and payment cycles helped lift overall satisfaction 20 points to 702 on a 1,000-point scale, and offset the negative effects of higher prices. The average customer still waited 40.7 days for final payment, and “time it took to settle the claim” is one of the eight things the study measures ([Insurance Journal](https://www.insurancejournal.com/news/national/2026/03/17/862324.htm)). Every claim that can be paid without waiting for a person is days off that clock.

**Revenue.** This is mostly a cost and speed story, and it’s worth being honest about that. The revenue case is indirect but real. J.D. Power’s finding suggests speed protects pricing: faster cycles offset the hit to satisfaction from higher prices. Paying suppliers in days, not weeks, gives you something to offer when you negotiate terms. And the people you stop spending on review can go to the work that grows the business. APQC finds that bottom-performing AP functions need four times as many staff as top performers.

## The evidence: what the pair did on two invoices

The math only holds if the two models together sort good readings from bad ones. The best public evidence so far is small but clear. In a published TypeSafe test, OCR and an LLM read fifteen values from two supplier invoices photographed on a phone. Working alone, they got three wrong, and nothing in their output said which. With Jev answering two questions about each of those fifteen readings (does it match the whole page, and does it match a close-up of where it’s printed?), the three wrong values scored low and the twelve right ones cleared. Neither question would have sorted all three on its own ([TypeSafe](https://docs.typesafe.ai/cookbooks/ocr_confidence_bounding_boxes.md)).

Two invoices prove the mechanism, not the rate. The rate is what you measure on your own documents, and it decides how far your touchless number can move.

## Six levers leaders control

1. **Measure the baseline first.** Your touchless rate, cost per invoice and days to pay, and the top reasons invoices get touched today. Without those numbers, no AI result means anything.
2. **Design the questions, not the prompts.** For each field: does it match the page, does it match the purchase order, is it in a normal range for this supplier? Small questions anyone can read and audit.
3. **Set the dial by risk.** The bar for letting an invoice through on its own is a business decision. Set it higher for large amounts and new suppliers, lower for routine ones, and set it by testing on past invoices where you know the right answers.
4. **Run in shadow mode.** For a month, people still review everything while the pairing makes its calls in the background. Compare them. Then let the clean invoices go.
5. **Give it an owner.** The touchless rate, the error rate and the bars belong to one named leader, reviewed monthly like any other operating metric.
6. **Keep the paper trail.** Every invoice that goes through untouched carries its scores and the rule that passed it. That’s what makes the outcome defensible to an auditor, a supplier or your board, and what keeps a bank-detail change from ever paying without a phone call.

## The same math in other processes

Accounts payable is the clearest case because the benchmarks are public. The shape repeats anywhere an LLM reads and someone acts on what it read: claims that could be paid without an adjuster’s touch, customer onboarding that could clear without a manual document check, shipping documents that could post without a clerk. In each, the metric to move is the same: the share of cases no person has to touch, at an error rate you can defend.

## How to find your X%

You can estimate your own number before you buy anything:

1. **Annual volume** times **the cost of a touched case minus the cost of an untouched one** gives you the value of one percentage point of touchless rate.
2. **Run the pairing on a few hundred past cases** where you know the right answers. The share that clears your bar with no errors is a first estimate of where your touchless rate could go.
3. **Multiply the points you could gain by the value of a point**, then divide by what the process costs today. That’s your X%, measured on your own work instead of borrowed from a benchmark.

## Which decision model for this job

Jev isn’t the only decision model anymore. OpenAI made its Jev competitor widely available in October ([TechCrunch](https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/)), and Microsoft, Cloudflare, AWS and others now offer similar models.

- **Jev 1.14 (TypeSafe):** has a published, step-by-step test of this exact pairing on invoices. Its image questions are early release, not yet ready for production.
- **Other decision models:** we haven’t checked which can answer questions about images. If your invoices arrive as text or the LLM has already transcribed them, any of them can score the values. Test two on the same past invoices and let your numbers pick.

## Questions leaders will ask

**Does this replace the AP team?** It changes what they spend time on. Best-in-class teams still have people; they spend them on exceptions, suppliers and cash, not on re-keying.

**Why not just buy a better LLM?** A better LLM reads more accurately, but on its own it still can’t say how sure it is of each reading, so every invoice still gets reviewed. The gain comes from the pair, not from either model getting bigger.

**Could it let a bad invoice through?** Yes, at some rate. That’s why you set the bar on your own past invoices, keep higher bars for large amounts, and always call on bank-detail changes. The question is whether that rate beats today’s manual error rate, and you can measure both.

**How fast could we see results?** The baseline takes days. A shadow-mode test takes about a month. After that, the pace depends on how fast you raise the bars you trust.

## The fine print

- **We haven’t run this yet.** The cost, touchless and cycle-time figures are Ardent Partners benchmarks reported by Medius, an AP software vendor, and APQC’s research. The field-level evidence is TypeSafe’s two-invoice test. None of it is our measurement, and none of it predicts your result.
- **Image checks aren’t production-ready.** TypeSafe calls image questions “dreamer-ready,” meaning not yet ready for production, and says the format and answers can change between releases.
- **Touchless isn’t free of risk.** Every point of touchless rate you add is a decision you’ve chosen to automate. Set the bar, log every decision and review a sample every week.

## For your developer

The decision model’s half of the pair is two yes-or-no questions per value the LLM read: does it match the whole page, and does it match a close-up of its box? This is trimmed from [TypeSafe’s cookbook](https://docs.typesafe.ai/cookbooks/ocr_confidence_bounding_boxes.md), which has the full code including the zoom step:

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

def touchless(scores, bar=BAR):
    # an invoice goes straight through only if every value clears the bar on both checks
    return all(page >= bar and crop >= bar for page, crop in scores.values())
```

Log every value’s two scores and the bar in force with each invoice, so any decision can be explained later.
