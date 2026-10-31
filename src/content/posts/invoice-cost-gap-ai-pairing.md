---
title: "Stop using LLMs alone. On its own, an LLM read invoices and 1 in 5 of the numbers it pulled were actually wrong, with no sign which: an unknown risk in every invoice it touched. However, when coupled with a decision model, it was 100% right, and the process could run on its own with confidence: faster, and at a fraction of the cost."
dek: "Most companies that automate with AI use one method: an LLM on its own, left to run. No one reviews its output, so every result carries a risk of hallucination that no one can measure: no one knows how many answers are wrong, or which. Coupling the LLM with a decision model changes the method and turns that unknown risk into a known one: a probability behind every value, and a bar you set for what runs on its own. In a published two-invoice test, the coupled pair made 15 right calls out of 15. Here’s why the method matters, how a decision model works, and how to make the switch."
kind: Explainer
readMinutes: 12
author: The Decision Layer desk
audience: For finance, operations and transformation leaders deciding how AI runs their processes
published: 2026-10-31
lastChecked: 2026-10-31
modelVersion: jev-1.14.0
episode: ep-022-check-the-scanner
stats:
  - value: "80%"
    label: "of invoice values an LLM-based reader got right on its own in TypeSafe’s published test (12 of 15), with no sign which 3 were wrong"
  - value: "100%"
    label: "right calls once the same LLM was coupled with a decision model (15 of 15): all 3 errors stopped, all 12 correct values let through"
  - value: "96% vs 38%"
    label: "PO invoices processed with no human touch, best-in-class AP teams vs average"
  - value: "77%"
    label: "lower cost per invoice at best-in-class AP teams ($2.36 vs $10.18)"
statsNote: "The first two are from TypeSafe’s published test on two invoices (Jev 1.14, Oct 15, 2026), which proves the mechanism, not a rate. The last two are Ardent Partners benchmarks reported by Medius, an AP software vendor, in September 2026. None are our measurements."
snapshot:
  - label: "Why it matters"
    text: "The usual method, an LLM on its own left to run, automates the work and an unknown risk along with it. Leaders who won’t take that risk don’t automate at all, and pay for people instead. Coupling the LLM with a decision model is a different method: the risk becomes a number you can see and set, so the process can run on its own with confidence. In accounts payable, the benchmarks put full automation at 77% off the cost of every invoice."
  - label: "Where the money is"
    text: "About $782,000 a year for a business processing 100,000 invoices, from processing cost alone. Paying in days instead of weeks also opens early-payment discounts worth 2% of qualifying spend, an annualized return of roughly 37%."
  - label: "Why AI alone hasn’t delivered it"
    text: "An LLM alone produces values with no measure of how far to trust them. Nobody automates and then reviews everything, so in practice its output runs, and if it’s wrong 1 time in 5 you don’t know which 1. That is an unknown risk in every case. Coupled with a decision model, that risk gets a number, and you choose where to set it."
  - label: "What to do"
    text: "Couple the LLM with a decision model. The output changes from a guess you hope is right into a decision with a known level of confidence: a probability behind every value and a rule you own that decides. The process runs on its own by default, and people see only the few cases below your bar."
  - label: "What we haven’t done"
    text: "Measured this ourselves. The benchmarks are industry figures, and the only public test of the coupling used two invoices. Your own baseline and a month of shadow testing are what tell you your number."
respondingTo:
  lede: "NPR reports that AI writing detectors are flagging people’s own work as machine-written, with no explanation and no clear way to appeal. A magazine editor who uses these tools says a flag should start a human look, not end in a verdict."
  outlet: NPR
  headline: "Your writing was flagged as AI. What does that actually mean?"
  url: https://www.npr.org/2026/10/31/nx-s1-5963520/ai-writing-detectors-pangram
  date: 2026-10-31
  quote: "Submissions should end in rejection, not an accusation."
  quoteBy: "Neil Clarke, publisher and editor of Clarkesworld, quoted by NPR"
  impact: "Detectors show the trap every leader faces with AI in a process. Without a measured level of confidence, you have two bad choices: let the AI decide and carry a risk you can’t measure, or don’t automate and keep paying people to do the work. Automation you can trust needs a third option: every output carries a probability, a rule you own decides what runs on its own, and people see only what needs them. That comes from coupling an LLM with a decision model, not from either one alone."
summary:
  - "An LLM left to run on its own carries an unknown risk: if it’s wrong 1 time in 5, no one knows which 1."
  - "Coupling the LLM with a decision model turns that unknown risk into a known one, so the process can run on its own with confidence."
  - "In accounts payable that is the gap between 38% and 96% touchless and $10.18 vs $2.36 an invoice. Here’s how to make the change, step by step."
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
  - title: "TypeSafe docs: Models (pricing, customization, data handling)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
  - title: "TechCrunch: OpenAI makes its Jev competitor widely available (Oct 22, 2026)"
    url: https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/
    grade: Independent reporting
  - title: "TypeSafe: Introducing System One models and Jev (launch post)"
    url: https://typesafe.ai/blog/introducing-system-one-models-and-jev
    grade: Vendor claim
  - title: "TypeSafe docs: Machine learning primer (RLCD and calibration)"
    url: https://docs.typesafe.ai/introduction/machine-learning-primer.md
    grade: Official docs
  - title: "Alex Molas: Jev can't be calibrated (Sept 23, 2026)"
    url: https://www.alexmolas.com/2026/09/23/jev-cant-be-calibrated.html
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

## The method is the problem: LLMs alone

Most companies automating with AI use it the same way: an LLM on its own, left to run. The LLM reads, drafts or sorts, and its output flows straight into the next step. Nobody automates and then reviews every result; that would defeat the point. So every result carries a risk nobody can see.

Picture an LLM that reads your invoices and gets 4 out of 5 values right. That sounds good. It isn’t, because nothing in its output tells you which value is the wrong one. A wrong invoice number reads exactly like a right one. Let that output run, and you are taking a risk of hallucinations you can’t put a number on: no one can say how many wrong invoice numbers, dates or amounts are flowing into your ledger, or which ones.

That leaves leaders two bad options. Automate with the LLM alone and carry an unknown risk. Or decide the risk is too high, don’t automate, and keep paying people to do the work, which is why the average company still touches most of its invoices by hand. Either way, the method is the problem.

The number in the headline isn’t made up. In a published test, an LLM-based reader pulled fifteen values from two supplier invoices photographed on a phone and got three of them wrong: 20%. None of the three looked wrong.

## The new method: couple the two

A tractor on its own can cross a field and pull a load. Couple it with hydraulics and the output changes in kind: trenches dug in minutes, loads lifted that no crew could move, with a touch of a lever. It isn’t a better tractor. It’s a machine that does a different job.

An LLM coupled with a decision model is the same kind of change. The LLM reads each invoice into values. The decision model, such as Jev from TypeSafe or one of its new rivals, answers narrow questions about each value: does this amount match the page, is this the invoice date? Every answer comes with a probability, and a rule you own acts on it. What comes out is no longer something to check. It’s something to act on:

| | An LLM alone | An LLM coupled with a decision model |
| --- | --- | --- |
| What you get | A list of values you hope are right | A decision: proceed, or send this one value to a person |
| How sure it is | No measure | A probability behind every value |
| The risk | Unknown: no one knows which outputs are wrong | Known: a probability on every value, and a bar you set |
| What happens next | It runs, right or wrong | Your rule acts on it at once |
| Why it was done | The model’s word | The questions, the scores and the rule, logged |
| What the process becomes | Automated blind, or not automated at all | Fully automated, with confidence |

We call this pattern **Read and weigh**: the LLM supplies the material and the decision model supplies the call. It’s one of five patterns for coupling an LLM with a decision model, each with a worked example in our [open examples repository](https://github.com/peterdschmitt/decision-layer-examples).

## The test: 20% wrong alone, 100% right coupled

Here is what happened when TypeSafe coupled that same reader with Jev ([TypeSafe](https://docs.typesafe.ai/cookbooks/ocr_confidence_bounding_boxes.md)). The three values the LLM got wrong:

| Invoice | Field | The LLM read | The paper says |
| --- | --- | --- | --- |
| Milkwood | Invoice number | AN400074 | IN400074 |
| Siyakhula | Invoice number | INV03070 | INV03079 |
| Siyakhula | Date | 16/09/2028 | 16/09/2026 |

Jev answered two yes-or-no questions about each of the fifteen values: does it match the whole page, and does it match a close-up of where it’s printed? With a bar of 0.25, the coupled system made fifteen right calls out of fifteen. It let the twelve correct values through and stopped all three wrong ones before anyone acted on them. No correct value was held back, and no wrong one got through. Neither question alone would have stopped all three. Together they stopped every one.

That is the whole idea in miniature. The LLM didn’t get smarter. Coupled with a decision model, its output became something you can automate.

Two invoices prove the mechanism, not a rate. Your rate is something you measure on your own documents, and the steps below show how.

## Why it matters: the gap between manual and automated

Every finance leader knows the cost-per-invoice number. Fewer look at what drives it. Ardent Partners’ benchmarks, as reported by the AP software vendor Medius in September, put the average cost of processing an invoice at $10.18 and the best-in-class cost at $2.36: 77% less ([Medius](https://www.medius.com/blog/how-much-does-cost-process-invoice-where-you-save/)).

The driver is the share of work no person touches. Average teams process 38.3% of purchase-order invoices without a human touch and take 11.6 days per invoice. Best-in-class teams hit 96.3% and take 1.4 days. Medius’s reading of the data: the jump in touchless processing “is where the bulk of AP automation ROI actually comes from.” Treat a vendor’s numbers with care, but the independent benchmarker APQC points the same way. It finds that top performers’ AP costs are “one-fifth of what it is for organizations performing in the bottom quartile”, and that bottom performers need four times as many staff ([APQC](https://www.apqc.org/blog/4-kpis-set-good-accounts-payable-organizations-apart)).

So the question for a leader isn’t “should we use AI on invoices?” It’s “what would it take to move our touchless rate from 38% toward 96%, safely?” An LLM alone can’t answer that, because it raises the touchless rate only by raising a risk you can’t measure. An LLM coupled with a decision model can, because it gives you the confidence to let the work run on its own.

**The math for a 100,000-invoice operation.** These are industry figures multiplied out, not a forecast for your business:

| | Average AP team | Best-in-class AP team |
| --- | --- | --- |
| Cost per invoice | $10.18 | $2.36 |
| Annual cost at 100,000 invoices | $1,018,000 | $236,000 |
| PO invoices with no human touch | 38.3% | 96.3% |
| Days to process a PO invoice | 11.6 | 1.4 |

The gap is about $782,000 a year, plus ten days on every invoice.

**What the decision model costs.** Jev charges $0.042 per million input tokens ([TypeSafe](https://docs.typesafe.ai/models.md)). Even if checking one invoice took 100,000 tokens, far more than a page of text, it would cost less than half a cent, or under $420 a year at 100,000 invoices. TypeSafe doesn’t list a separate price for images yet, so price photo checks with the vendor. The checks are close to free. What isn’t free is building the workflow around them: the integration, the rules and a month of shadow testing. Put that cost next to your own estimate of the gain.

**Money.** The cost gap is the first line. The second is cash. The most common supplier term in business-to-business trade is “2/10 net 30”: take 2% off if you pay within 10 days. The Association for Financial Professionals puts the annualized return of taking that discount at “roughly 37%” ([AFP](https://www.financialprofessionals.org/training-resources/resources/articles/Details/when-does-it-pay-to-take-an-early-payment-discount)). You can only take it if invoices clear in days. If $10 million of your annual spend carries 2/10 terms, paying it on time is worth $200,000 a year.

**Customers.** The same change works on the processes customers feel. In J.D. Power’s 2026 study of homeowners’ insurance claims, faster repair and payment cycles helped lift overall satisfaction 20 points to 702 on a 1,000-point scale, and offset the negative effects of higher prices. The average customer still waited 40.7 days for final payment ([Insurance Journal](https://www.insurancejournal.com/news/national/2026/03/17/862324.htm)). Every case that can run without waiting for a person takes days off that clock.

**Revenue.** This is mostly a cost and speed story, and the revenue case is indirect. J.D. Power’s finding suggests speed protects pricing. Paying suppliers in days gives you something to offer when you negotiate terms. And the people you stop spending on checking can go to work that grows the business.

## What a decision model is, how it works and how it’s trained

**What it is.** A decision model is a different type of AI from the LLM it’s coupled with. It writes nothing. You give it some material and a question with the answers you’ll accept (yes or no, one of a list, a score on a scale), and it returns its pick with a probability. TypeSafe calls Jev “a frontier-intelligence function call: unstructured state in, typed probabilistic decisions out” ([TypeSafe](https://typesafe.ai/blog/introducing-system-one-models-and-jev)).

**How it works.** A chatbot writes its answer one word at a time. A decision model scores every allowed answer at once. In TypeSafe’s words, “Jev outputs all probabilities in parallel instead of autoregressively generating by token.” That is why it’s fast and cheap enough to ask about every value on every case. TypeSafe claims Jev is “two orders of magnitude faster and more efficient” than LLMs on these tasks. That’s the vendor’s claim, and worth testing.

**How it’s trained.** ChatGPT-style models are trained with RLHF, which, in TypeSafe’s words, “teaches a model to say things that people prefer” and “can also reward sycophancy and confident-sounding hallucinations.” Jev is trained with what TypeSafe calls reinforcement learning for calibrated decisions, or RLCD. The model “does not generate text”, “returns decisions and probabilities”, and a “higher probability should correspond to a greater chance that the answer is correct” ([TypeSafe primer](https://docs.typesafe.ai/introduction/machine-learning-primer.md)). That property is called calibration: across many answers, the ones scored 0.2 should come true about 20% of the time. TypeSafe notes this describes “groups of predictions, not a guarantee about any single answer.”

Three things leaders should know about the training. Jev “is not trained on customer requests or responses”. It isn’t fine-tuned on your data: “the same weights serve every account”, and you shape it through the material and the questions you send ([TypeSafe](https://docs.typesafe.ai/models.md)). And TypeSafe hasn’t published where its training data comes from or how big the model is. One independent developer, Alex Molas, adds a useful caution: “calibration is not just a property of the model, but also of your data distribution.” His advice is to treat the outputs as good scores that rank cases well, and to measure calibration on your own data before relying on the exact numbers ([Alex Molas](https://www.alexmolas.com/2026/09/23/jev-cant-be-calibrated.html)). That is exactly what the steps below do.

## We show you how: from an LLM alone to automation with confidence, in six steps

Here is the process before and after:

| Step | Today: an LLM alone, or people | After: coupled, automated with confidence |
| --- | --- | --- |
| Invoice arrives | Queued for a person | Read by the LLM at once |
| Values pulled | The LLM, or a person keying them | The LLM |
| Values checked | No one, so errors flow through; or a person, every value | The decision model, every value, in seconds |
| Decision | Runs blind, or waits for a person | Your rule: clears the bar, it proceeds; doesn’t, one value goes to a person |
| Exceptions | Mixed in with everything else | A short list, each with the doubtful value boxed |
| Record | A name on an approval | The questions, scores and rule, logged with the invoice |

**1. Measure today’s baseline.** Pull three numbers: your touchless rate, your cost per case and your days to complete. Then list the top reasons cases get touched. If you don’t have these, no AI result will mean anything.

**2. Find your X%.** Multiply your annual volume by the cost of a touched case minus the cost of an untouched one. That’s the value of one point of touchless rate. The gap between your rate and the best-in-class rate, times that value, is the size of the prize.

**3. Write the questions.** For each value the LLM reads, write a few narrow yes-or-no questions anyone can audit: does it match the page, does it match the purchase order, is it normal for this supplier? Narrow questions are what make the answers reliable and the decisions defensible.

**4. Set the confidence bar on your own history.** Take a few hundred past cases where you know the right answers. Run the LLM and the decision model on them. Pick the bar where no wrong value gets through, and count how many cases would have run untouched. That count is your first real touchless estimate. Set stricter bars for large amounts and new suppliers, and always phone the supplier about a changed bank account.

**5. Run in shadow mode for a month.** Keep today’s process running while the coupled system makes its calls in the background, and check a sample of its calls by hand. Compare the two every week. Where the system and the people disagree, find out who was right.

**6. Flip the default.** Let cases that clear the bar run on their own, and send only the exceptions to people. Give the touchless rate, the error rate and the bars to one named owner, review a sample every week, and raise the bars you trust step by step.

## The same change in other processes

Accounts payable is the clearest case because its benchmarks are public. The same change applies anywhere an LLM reads and a person acts on what it read: insurance claims that could pay without an adjuster’s touch, customer onboarding that could clear without a manual document check, shipping paperwork that could post without a clerk. In each case, the number to move is the share of cases no person has to touch, at an error rate you can defend.

## Which decision model for this job

Jev isn’t the only decision model anymore. OpenAI made its Jev competitor widely available in October ([TechCrunch](https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/)), and Microsoft, Cloudflare, AWS and others now offer similar models.

- **Jev 1.14 (TypeSafe):** has a published, step-by-step test of this exact coupling on invoices. Its image questions are early release and not yet ready for production.
- **Other decision models:** we haven’t checked which can answer questions about images. If the LLM has already turned the invoice into text, any of them can score the values. Test two on the same past cases and let your numbers pick.

## Questions leaders will ask

**Is it really 100% right?** In the published test, yes: fifteen right calls out of fifteen. That’s two invoices, so it proves the mechanism, not a rate. Your step 4 and step 5 numbers are the ones to trust.

**Does this replace the AP team?** It changes what they do. Best-in-class teams still have people, but they spend their time on exceptions, suppliers and cash, not on keying and checking.

**Why not just buy a better LLM?** A better LLM is wrong less often, but it still can’t tell you which answers are wrong, so the risk is smaller but still unknown. The change comes from coupling it with a decision model, not from a bigger LLM.

**Could a bad invoice get through?** Yes, at some rate. That’s why you set the bar on your own history, keep stricter bars for large amounts and bank details, and log every decision. Compare that rate with today’s manual error rate, which you can measure too.

**How fast could we see results?** The baseline takes days. Shadow mode takes about a month. After that, the pace depends on how fast you raise the bars you trust.

## The fine print

- **We haven’t run this ourselves.** The cost, touchless and cycle-time figures are Ardent Partners benchmarks reported by Medius, an AP software vendor, plus APQC’s research. The 20% and the 100% come from TypeSafe’s two-invoice test. None of these are our measurements, and none predict your result.
- **Image checks aren’t production-ready.** TypeSafe calls image questions “dreamer-ready”, meaning not yet ready for production, and says the format and answers can change between releases.
- **Automation is a choice you own.** Every point of touchless rate you add is a decision you’ve chosen to automate. Set the bar, log every call and review a sample every week.

## For your developer

The decision model’s part is two yes-or-no questions per value the LLM read: does it match the whole page, and does it match a close-up of its box? This is trimmed from [TypeSafe’s cookbook](https://docs.typesafe.ai/cookbooks/ocr_confidence_bounding_boxes.md), which has the full code including the zoom step:

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
