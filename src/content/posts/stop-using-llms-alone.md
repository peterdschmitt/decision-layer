---
title: "Stop using LLMs alone. On its own, an LLM got 1 in 5 of the details it read off invoices wrong; coupled with a decision model, it made every call right. Jack & Jill coupled the two and cut screening costs 88% with no loss in quality. Datadog did it to score the risk of every command its AI agent writes. The method works in every industry."
dek: "Most companies automate with an LLM on its own: one model doing every step, at LLM prices and LLM speed, with every output carrying a risk of hallucination no one can measure. The companies pulling ahead have changed the method. They couple the LLM with a decision model, which scores every case in milliseconds with a probability attached, and they let the LLM do only the work that needs it. Here is what the coupling did to accuracy in a published invoice test, five companies that made the switch, what it was worth, how a decision model works, and how to make the change in your own process."
kind: Explainer
readMinutes: 12
author: The Decision Layer desk
audience: For executives, operations and transformation leaders deciding how AI runs their processes
published: 2026-10-31
lastChecked: 2026-10-31
modelVersion: jev-1.14.0
episode: ep-022-check-the-scanner
stats:
  - value: "88%"
    label: "lower screening cost at Jack & Jill after coupling an LLM with a decision model, with no loss in quality"
  - value: "$500K"
    label: "a year in projected savings at Jack & Jill ($265K at today’s volume), live in production 10 days after the first test"
  - value: "40x"
    label: "faster p95 latency at Datadog scoring the risk of AI-agent commands before they run, with comparable accuracy"
  - value: "1 in 5 → 0"
    label: "invoice details wrong: an LLM alone vs the same LLM coupled with a decision model, in TypeSafe’s published test"
statsNote: "Self-reported results published by the model vendors: Jack & Jill’s in a TypeSafe case study (Oct 7, 2026), Datadog’s in OpenAI’s Decisions API announcement (Oct 22, 2026) as reported by Unite.AI, and the invoice figure from a small TypeSafe test that shows the mechanism, not a rate. None are our measurements."
snapshot:
  - label: "Why it matters"
    text: "The usual method, an LLM on its own doing every step, is slow, expensive at volume, and carries a risk of hallucination no one can measure. So leaders either automate blind or don’t automate at all. Coupling an LLM with a decision model is a different method, and the companies using it report cost cuts of 30% to 90% with no loss in quality."
  - label: "Where the money is"
    text: "Jack & Jill cut screening costs 88% and projects $500,000 a year in savings. Sierra cut cost per call 90%. Ramp made a costing job 30% cheaper and 4x faster. The pattern is the same: the decision model takes the high-volume calls, and the LLM is kept for the work only it can do."
  - label: "Why AI alone hasn’t delivered it"
    text: "An LLM produces text with no measure of how far to trust it. Nobody automates and then reviews every result, so in practice its output runs, and its errors run with it. That is an unknown risk in every case, and paying LLM prices for every step makes it an expensive one."
  - label: "What to do"
    text: "Couple the two. Let the decision model make the narrow, high-volume calls: score, route, approve, flag. Each call comes back in milliseconds with a probability, and a rule you own decides what runs on its own. Keep the LLM for reading, writing and deep review. Then test it on your own past cases before you switch."
  - label: "What we haven’t done"
    text: "Measured any of this ourselves. Every result here is self-reported by the companies, through vendors who sell the models. They are real deployments, but your own shadow test is the number to trust."
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
  - "An LLM on its own is slow and costly at volume, and every output carries a risk no one can measure: in a published invoice test it got 1 in 5 details wrong; coupled with a decision model, every call was right."
  - "Jack & Jill, Datadog, Box, Sierra and Ramp coupled an LLM with a decision model and report cost cuts up to 90% and speed-ups up to 40x, with quality held."
  - "The method carries to any process: decision model for the high-volume calls, LLM for the work that needs it, and a rule you own in between."
sources:
  - title: "TypeSafe: How Jack & Jill cut candidate screening costs by 88% with Jev (case study, Oct 7, 2026)"
    url: https://typesafe.ai/blog/jack-jill-jev-case-study
    grade: Vendor claim
  - title: "Unite.AI: OpenAI makes Decisions API generally available with GPT-6 Luna (customer results for Box, Datadog, Ramp, Sierra and Speak)"
    url: https://www.unite.ai/openai-makes-decisions-api-generally-available-with-gpt-6-luna/
    grade: Vendor claim
  - title: "TypeSafe docs: OCR confidence and bounding boxes (invoice test)"
    url: https://docs.typesafe.ai/cookbooks/ocr_confidence_bounding_boxes.md
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
  - title: "TypeSafe docs: Models (pricing, customization, data handling)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
  - title: "Alex Molas: Jev can't be calibrated (Sept 23, 2026)"
    url: https://www.alexmolas.com/2026/09/23/jev-cant-be-calibrated.html
    grade: Independent reporting
  - title: "NPR: Your writing was flagged as AI. What does that actually mean? (Oct 31, 2026)"
    url: https://www.npr.org/2026/10/31/nx-s1-5963520/ai-writing-detectors-pangram
    grade: Independent reporting
inTheNews:
  - outlet: NPR
    headline: "Your writing was flagged as AI. What does that actually mean?"
    url: https://www.npr.org/2026/10/31/nx-s1-5963520/ai-writing-detectors-pangram
    date: 2026-10-31
  - outlet: TechCrunch
    headline: "OpenAI makes its Jev competitor widely available as decision model competition heats up"
    url: https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/
    date: 2026-10-22
  - outlet: CBS News
    headline: "AI agents are roaming around consumers' bank accounts, and banks aren't happy about it"
    url: https://www.cbsnews.com/news/ai-agents-customer-bank-accounts-security/
    date: 2026-10-23
---

## The method is the problem: LLMs alone

Most companies automating with AI use it the same way: an LLM on its own, doing every step. It reads, sorts, scores, routes and writes, and its output flows straight into the next step.

That method has two costs leaders feel but rarely name.

**An unknown risk.** An LLM’s output carries no measure of how far to trust it. A wrong answer reads exactly like a right one. Nobody automates and then reviews every result, because that would defeat the point. So the output runs, and its mistakes run with it. No one can say how many answers are wrong, or which ones. Leaders who won’t accept that don’t automate at all, and keep paying people to do the work.

**A price and a delay on every step.** An LLM writes its answer one piece at a time, and you pay for every piece. Use it for a high-volume yes-or-no call, such as “is this candidate worth a closer look?” or “is this command safe to run?”, and you pay LLM prices and wait LLM time, thousands of times a day, for a job that needs one word.

## The new method: couple the two

A tractor on its own can cross a field and pull a load. Couple it with hydraulics and the output changes in kind: trenches dug in minutes, loads lifted that no crew could move, with a touch of a lever. It isn’t a better tractor. It’s a machine that does a different job.

An LLM coupled with a decision model is the same kind of change. The decision model makes the narrow, high-volume calls: score this, route that, approve or flag. It answers in milliseconds, with a probability behind every answer, so a rule you own can decide what runs on its own and what goes to a person. The LLM does what only it can do: read messy material, write, and review the cases that deserve it.

| | An LLM alone | An LLM coupled with a decision model |
| --- | --- | --- |
| Who makes the high-volume calls | The LLM, at LLM prices and speed | The decision model, in milliseconds, for a fraction of the cost |
| How sure it is | No measure | A probability behind every call |
| The risk | Unknown: no one knows which outputs are wrong | Known: you see the confidence and set the bar |
| What happens next | It runs, right or wrong | Your rule acts on it at once |
| What the LLM does | Everything | The reading, writing and deep review only it can do |
| What the process becomes | Automated blind, or not automated at all | Fully automated, with confidence |

The companies below didn’t adopt a new tool. They changed the method.

## The accuracy case: 1 in 5 wrong, then every call right

In TypeSafe’s published invoice test, an LLM-based reader pulled the supplier, invoice number, date, amount and bank details from supplier invoices photographed on a phone. On its own, it got 1 in 5 of those details wrong, and none of the wrong ones looked wrong: an invoice number off by one letter, another off by one digit, a date two years in the future ([TypeSafe](https://docs.typesafe.ai/cookbooks/ocr_confidence_bounding_boxes.md)).

Coupled with a decision model, the same LLM made every call right. Jev answered two narrow questions about each detail (does it match the whole page, and does it match a close-up of where it’s printed?), and with a bar of 0.25 it let every correct detail through and stopped every wrong one before anyone acted on it. The LLM didn’t change. The method did.

## Five companies that changed the method

| Company | What the decision model does | What it was worth |
| --- | --- | --- |
| Jack & Jill | Scores every candidate for every open role, so an LLM reviews only the shortlist | 88% lower cost, twice as fast, no loss in quality, $500K a year projected |
| Datadog | Scores the risk of each command its AI agent writes, before it runs | 40x faster p95 latency than frontier models, comparable accuracy |
| Box | Picks the route for certificates of insurance after Box Extract pulls the data, and sends lower-confidence cases to reviewers | About 5x faster route selection, same accuracy |
| Sierra | Chooses the next action in live customer conversations | About 3x faster, 90% lower cost per call, no drop in customer outcomes |
| Ramp | Attributes AI costs to the work behind them | 4x faster and 30% cheaper, with no loss of accuracy |

**Jack & Jill: the volume case.** Jack & Jill runs a hiring marketplace brokered by AI agents. It has worked with more than 5,000 companies and 400,000 professionals. Every day, for every open role, it pulls 6,000 candidates. An LLM, Gemini 3.1 Flash Lite, scored all of them to make a shortlist of 2,000, and a more powerful model then reviewed the shortlist. Even with a low-cost LLM, that first step was expensive, because it ran 6,000 times per role.

The company moved that first step to TypeSafe’s decision model, Jev, and kept the more powerful model for the close review. Before switching, it tested both on 150 live roles, counting how many candidates hiring managers later asked to meet were kept on the shortlist. The coupled pipeline kept 94.6% of them, against 93.9% before; TypeSafe notes the difference isn’t statistically significant, so call it no loss in quality. Screening cost fell 88%, and the median time to screen a role was cut in half. It went live within 10 days of the first test, and Jack & Jill projects $265,000 a year in savings at today’s volume and $500,000 with expected growth ([TypeSafe](https://typesafe.ai/blog/jack-jill-jev-case-study)).

The money wasn’t the only change. Because each call became so cheap and fast, Jack & Jill added features it couldn’t afford before: every new candidate is checked against every suitable open role straight after signing up, and a profile check candidates wait on now takes about 0.2 seconds instead of 3.6.

**Datadog: the risk case.** AI agents write commands that run on real systems. An LLM alone gives no measure of whether a command is dangerous. Datadog couples its agent with a decision model that scores the risk of each command before it executes, with 40x faster p95 latency than available frontier models and comparable accuracy, according to Datadog staff engineer AJ Stuyvenberg ([Unite.AI](https://www.unite.ai/openai-makes-decisions-api-generally-available-with-gpt-6-luna/)). That is the unknown risk turned into a known one, at a speed that doesn’t slow the agent down.

**Box: the document case.** Box Extract pulls the data from certificates of insurance. A decision model then picks the route for each one, and cases with lower confidence go to reviewers. Box’s Biswaroop Palit reports roughly 5x faster route selection at the same accuracy, measured on 30 certificates. That is a small sample, but it shows the shape: automation by default, people only where confidence is low.

**Sierra and Ramp: the cost case.** Sierra uses a decision model to choose the next action in parts of its live customer conversations: under 280 milliseconds at p95, about 3x faster and 90% cheaper per call than its previous approach, with no drop in customer outcomes. Ramp reports a costing job that became 4x faster and 30% cheaper without losing accuracy. Speak, which builds AI language tutors, cut the time to its next action from 1.4 seconds to 0.13 ([TechCrunch](https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/)).

## Why it matters: money, customers and revenue

**Money.** The savings come from one move: taking the high-volume calls away from the LLM. Jack & Jill’s screening cost fell 88%, worth $265,000 a year at today’s volume and a projected $500,000 with growth. Sierra’s cost per call fell 90%. Ramp’s fell 30%. To size it for your own process, take the number of high-volume calls an LLM makes for you each year and multiply by its cost per call. That’s the pool these companies cut by 30% to 90%.

**Customers.** Speed is what customers feel. Speak cut the pause before its tutor’s next action by more than 90%. Sierra held its customer outcomes while answering faster. Jack & Jill’s new candidates now see matched roles the moment they sign up. When a call takes milliseconds instead of seconds, it can sit inside the moment the customer is waiting.

**Revenue.** This is the least obvious gain, and it may be the largest. When a call costs a tenth of what it did, work that never paid for itself starts to: Jack & Jill’s matched-roles-at-signup feature exists because each check became cheap enough to run on every new candidate. Every company above can now run checks it would have skipped. Those become features, faster service and better matches, which is where revenue grows.

**Risk.** Datadog and Box show the other side of the ledger. A probability on every call means you know where the risk is and can set the bar for what runs on its own. That is what lets leaders automate a process they would otherwise keep manual.

## What a decision model is, how it works and how it’s trained

**What it is.** A decision model is a different type of AI from the LLM it’s coupled with. It writes nothing. You give it some material and a question with the answers you’ll accept (yes or no, one of a list, a score on a scale), and it returns its pick with a probability. TypeSafe calls Jev “a frontier-intelligence function call: unstructured state in, typed probabilistic decisions out” ([TypeSafe](https://typesafe.ai/blog/introducing-system-one-models-and-jev)).

**How it works.** An LLM writes its answer one word at a time. A decision model scores every allowed answer at once. In TypeSafe’s words, “Jev outputs all probabilities in parallel instead of autoregressively generating by token.” That is why it’s fast and cheap enough to ask about every case. Both Jev and OpenAI’s Decisions API charge only for what goes in, not for what comes out, which is a large part of why the companies above cut costs by 30% to 90% ([TypeSafe](https://docs.typesafe.ai/models.md)).

**How it’s trained.** ChatGPT-style models are trained with RLHF, which, in TypeSafe’s words, “teaches a model to say things that people prefer” and “can also reward sycophancy and confident-sounding hallucinations.” Jev is trained with what TypeSafe calls reinforcement learning for calibrated decisions, or RLCD. The model “does not generate text”, “returns decisions and probabilities”, and a “higher probability should correspond to a greater chance that the answer is correct” ([TypeSafe primer](https://docs.typesafe.ai/introduction/machine-learning-primer.md)). That property is called calibration: across many answers, the ones scored 0.2 should come true about 20% of the time. TypeSafe notes this describes “groups of predictions, not a guarantee about any single answer.”

Three things leaders should know about the training. Jev “is not trained on customer requests or responses”. It isn’t fine-tuned on your data: “the same weights serve every account”, and you shape it through the material and the questions you send ([TypeSafe](https://docs.typesafe.ai/models.md)). And TypeSafe hasn’t published where its training data comes from or how big the model is. One independent developer, Alex Molas, adds a useful caution: “calibration is not just a property of the model, but also of your data distribution.” His advice is to treat the outputs as good scores that rank cases well, and to measure calibration on your own data before relying on the exact numbers ([Alex Molas](https://www.alexmolas.com/2026/09/23/jev-cant-be-calibrated.html)). That is exactly what the steps below do.

## We show you how: from an LLM alone to a coupled process, in six steps

Here is the method before and after, for any process where AI makes calls at volume:

| Step | Today: an LLM alone | After: coupled |
| --- | --- | --- |
| A case arrives | The LLM handles it end to end | The decision model scores it in milliseconds |
| The call | Made by the LLM, with no measure of confidence | Made by the decision model, with a probability |
| What runs on its own | Everything, right or wrong; or nothing | Every case above the bar you set |
| Where the LLM works | Every step | Only the steps that need reading, writing or deep review |
| Where people work | Nowhere, or everywhere | Only the cases below the bar |
| The record | The LLM’s text | The question, the score and the rule, logged |

**1. Find the high-volume calls.** List every place AI, or a person, makes the same narrow call over and over: score, route, approve, flag, match. Count them, and price them at what they cost today. That is your pool.

**2. Split the work.** For each process, mark which steps are narrow calls (decision model) and which need reading, writing or judgment on a few cases (LLM). Jack & Jill’s split: the decision model scores 6,000 candidates, the LLM reviews the shortlist.

**3. Write the questions.** For each call, write a narrow question with the answers you’ll accept. Narrow questions are what make the answers reliable, and the decisions easy to audit.

**4. Test on your own history.** Take a few hundred past cases where you know the right answer. Run the coupled pipeline on them and compare it with what you do today, the way Jack & Jill tested on 150 live roles before switching. Measure quality, cost and time.

**5. Set the bar.** Choose the confidence level above which a case runs on its own. Set it stricter where mistakes cost more, as Box does by sending lower-confidence certificates to reviewers. Your test from step 4 tells you what each bar means in errors and in work saved.

**6. Switch, and own it.** Move the calls over, run in shadow mode for a few weeks if the stakes are high, then let it run. Give the cost, the error rate and the bars to one named owner, review a sample every week, and look for the features the new cost makes possible.

## The same method in other processes

The examples above already span hiring, software operations, document handling, customer service, education and finance. The method carries to any industry where AI makes the same call many times: retail returns approved or flagged, bank transactions screened, patient messages triaged in healthcare, shipments routed in logistics, leads scored in sales, support tickets sorted in software, claims fast-tracked in insurance. In each, the decision model makes the calls, the LLM does the work that needs it, and a rule you own decides what runs on its own.

We call this family of patterns **Read and weigh**, **Sort and solve** and **Propose and choose**, with worked examples in our [open examples repository](https://github.com/peterdschmitt/decision-layer-examples).

## Which decision model for this job

There is now a category, not a single product. TypeSafe’s Jev was first. OpenAI made its Decisions API, on GPT-6 Luna, widely available on October 22 ([TechCrunch](https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/)), and Microsoft, Cloudflare, AWS and others now offer similar models.

- **Jev (TypeSafe):** used by Jack & Jill, and in the invoice test. Charges for input only.
- **Decisions API (OpenAI):** used by Datadog, Box, Sierra, Ramp and Speak. Charges for input only.
- **Others:** we haven’t tested them. Run two on the same past cases in step 4 and let your numbers pick.

## Questions leaders will ask

**Is this proven?** These are real production deployments at named companies, with numbers the companies stand behind. They are also self-reported through vendors who sell the models, and none were independently audited. Your step 4 test is the proof that counts.

**Does it replace the LLM?** No. It changes what the LLM does. Jack & Jill still uses a more powerful model for the close review. The LLM moves from doing every step to doing the steps only it can do.

**Does it replace people?** It changes where they work: on the cases below the bar, with the score and the reason in front of them.

**What could go wrong?** A decision model can be wrong too, and confident when it is. That is why you test on your own history, set the bar by the cost of a mistake, log every call and review a sample every week.

**How fast could we see results?** Jack & Jill went from first test to full production in 10 days. A process with money or safety at stake should take longer, with a few weeks in shadow mode.

## The fine print

- **We haven’t measured any of this.** Jack & Jill’s results come from a TypeSafe case study. Datadog’s, Box’s, Sierra’s, Ramp’s and Speak’s come from OpenAI’s announcement, as reported by Unite.AI and TechCrunch. All are the companies’ own figures, published by vendors.
- **Small samples in places.** The invoice test and Box’s 30 certificates are small published tests: they show the mechanism, not a rate you can count on. Jack & Jill’s quality difference isn’t statistically significant, which is why we call it no loss in quality rather than a gain.
- **Projections are projections.** Jack & Jill’s $500,000 assumes growth; its savings at today’s volume are $265,000.

## For your developer

The coupling is a few lines: the decision model makes the call, your rule acts on the probability, and the LLM handles only what falls below the bar or needs writing. Start with TypeSafe’s [quick start](https://docs.typesafe.ai/introduction/quickstart.md) or OpenAI’s Decisions API guide, then pick a worked example from our [examples repository](https://github.com/peterdschmitt/decision-layer-examples) that matches your process. Log every question, score and bar with each case, so any decision can be explained later.
