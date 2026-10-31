---
title: "How Harness cut an AI security check’s cost 99.9% using a decision model"
dek: "Stop using LLMs alone. Harness had an LLM read thousands of API calls for every customer just to answer one question: does this endpoint send data to an AI model? Then it coupled the LLM with a decision model: costs fell 99.9%, answers came 20 times faster than a single LLM call, accuracy held near 99%, and every mistake landed in the 3.4% of cases where the model’s probability showed it was unsure."
kind: Worked example
readMinutes: 10
author: Peter Schmitt
audience: For executives, operations, security and transformation leaders deciding how AI runs their processes
published: 2026-10-31
lastChecked: 2026-10-31
modelVersion: jev-1.14.0
stats:
  - value: "99.9%"
    label: "lower cost than Harness’s original LLM pipeline, by its estimate (about 99.7% once the LLM safety valve is counted, by my arithmetic)"
  - value: "20x"
    label: "faster: a typical answer took 0.8 seconds, against 16 seconds for a single LLM call"
  - value: "98.6%"
    label: "accurate on 500 hand-checked endpoints, against about 99% for the LLM"
  - value: "3.4%"
    label: "of cases held all 7 of the decision model’s mistakes; on the other 96.6% it made none"
statsNote: "All figures are Harness’s own, from an engineering post it published on Oct 5, 2026. The costs are its estimates, not invoices, and the test used 500 endpoints from one customer’s traffic. The fine print at the end says what the test can and can’t show."
sources:
  - title: "Harness: Judgment, not generation: rebuilding our AI API Classifier on Jev (Ritabrata Moitra, Oct 5, 2026)"
    url: https://www.harness.io/blog/judgment-not-generation-rebuilding-our-ai-api-classifier-on-jev
    grade: Company report
  - title: "Harness: When the Model Decides Instead of Writes (Sunil Gattupalle and Shubham Jindal, Sep 21, 2026)"
    url: https://www.harness.io/blog/jev-decision-primitive-agent-governance
    grade: Company report
  - title: "Harness: About us (company facts)"
    url: https://www.harness.io/company/about-us
    grade: Company report
  - title: "TypeSafe docs: Noul (yes-or-no questions answered with a probability)"
    url: https://docs.typesafe.ai/primitives/noul.md
    grade: Official docs
  - title: "TypeSafe docs: Machine learning primer (RLCD and calibrated decisions)"
    url: https://docs.typesafe.ai/introduction/machine-learning-primer.md
    grade: Official docs
  - title: "TypeSafe docs: Models (how Jev is trained and customized)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
  - title: "Brizz: We stopped paying an LLM to answer yes/no questions: 21x cheaper with Jev (Aviv Tabak, Sep 23, 2026)"
    url: https://www.brizz.ai/blog/replacing-llm-classifier-with-jev
    grade: Company report
  - title: "GlassFlow: Can a decision model replace an LLM? Tune it on your own data first (Ashish Bagri, Oct 12, 2026)"
    url: https://www.glassflow.ai/blog/decision-model-vs-llm
    grade: Company report
  - title: "Unite.AI: OpenAI makes Decisions API generally available with GPT-6 Luna (results for Box)"
    url: https://www.unite.ai/openai-makes-decisions-api-generally-available-with-gpt-6-luna/
    grade: Vendor claim
  - title: "Alex Molas: Jev can’t be calibrated (Sep 23, 2026)"
    url: https://www.alexmolas.com/2026/09/23/jev-cant-be-calibrated.html
    grade: Independent reporting
---

An LLM is good at explaining a finding and poor value when it has to answer the same yes-or-no question thousands of times. Worse, when it tells you how sure it is, the answer means little. However, when coupled with a decision model, the yes-or-no answers come fast and cheap, each with a probability that shows you where the mistakes are, and the LLM is kept for the explaining. I’ll show you how Harness did it, and how to do the same.

Harness sells software that helps more than 1,000 large companies build, ship and secure their code, according to its website.

One of its security products answers a question most companies can’t: which of our systems send data to an AI model? An endpoint that passes customer text to an LLM can be tricked by instructions hidden in that text, can leak sensitive data, and may send it to an AI vendor the security team has never reviewed. So for every customer, Harness reads the traffic flowing through every endpoint and labels each one: is this an AI API, and does it return AI-written content?

Harness gave that job to an LLM. It worked, and Harness trusted the results. But the bill grew with every endpoint and every scan, and the LLM’s measure of its own certainty told Harness almost nothing. So it stopped using an LLM alone for that call and coupled its LLM with a decision model, TypeSafe’s Jev: a model that doesn’t write, but answers a narrow question with a probability. By Harness’s estimate, costs fell 99.9%; on its test, answers came 20 times faster and accuracy held near 99%. And every one of the decision model’s mistakes sat in a small, flagged group of cases.

## How the check worked before

1. **Collect.** For each candidate endpoint, take a small sample of the traffic: requests, responses, headers.
2. **Summarize, twice.** An LLM summarized every sampled request, then a second pass rolled those summaries into one description of the endpoint. That came to about 7,000 LLM calls for every 1,000 endpoints.
3. **Decide.** A final LLM call read the description and filled in four fields: is it an AI API, does it return AI-written content, how confident is the model (high, medium or low), and why.
4. **Enrich.** For the endpoints that are AI APIs, a later step records which models and vendors they use.

The two summary passes made up about 89% of the cost, and they ran before a single decision was made, on every endpoint, including the many that were obviously not AI. Harness’s own verdict: the design was not “cost-scalable” across large customers, where endpoints run far past a thousand and scans repeat on a schedule.

The confidence field was the quieter problem. It was the LLM grading itself: high, medium or low. Harness found those labels bunch together and say little about which answers are actually wrong. For a security product, that is an unknown risk built into every result. A missed AI endpoint is a blind spot the customer believes is covered, and nothing told Harness which answers to doubt.

## The change

Harness weighed the obvious fix: drop the summaries and make one LLM call per endpoint, letting it think through hard cases. By its estimate, that alone cuts the cost by about 88%, and it kept accuracy near 99%. But each answer still took about 16 seconds, and the confidence was still the model grading itself.

So Harness coupled its LLM with Jev, the decision model. Jev now makes the call on every endpoint: two yes-or-no questions, each answered with a probability, which Harness turns into a decision in its own code. The LLM keeps the work it is good at: it writes the explanation for the endpoints that are AI APIs, about 4.5% of them, inside a call that already runs later. The rest get a short standard reason built from Jev’s answers. Harness’s engineering manager for machine learning, Ritabrata Moitra, put the principle this way: reassign the LLM “from making every decision to explaining the decisions that merit explanation.”

The four fields the rest of the product reads didn’t change, so no dashboard or downstream system had to. That also makes the switch reversible.

## The test

Harness took 500 endpoints from one enterprise customer’s production traffic (Harness names it as Zendesk’s), 43 of them AI APIs. The team labelled each by hand, starting from the LLM’s answers and paying particular attention to 20 ambiguous ones. Then it ran all three approaches on the same inputs.

| | Original LLM pipeline | One LLM call | Decision model + LLM |
| --- | --- | --- | --- |
| Cost | baseline | about 88% lower | 99.9% lower |
| Typical answer (slowest 5%) | not comparable | 16 s (28 s) | 0.8 s (1.1 s) |
| Accuracy: is it an AI API? | the benchmark | about 99% | 98.6% |
| A confidence you can act on | no | no | yes |

On the raw score, the single LLM call was slightly more accurate. Jev made 7 mistakes in 500: four endpoints flagged that weren’t AI APIs, and three AI APIs missed.

But every one of those 7 mistakes came from 17 endpoints, 3.4% of the total, where Jev’s probability sat in the middle, between 0.3 and 0.8: the model was telling Harness it wasn’t sure. Everywhere else it made no mistakes at all. All 448 endpoints it scored below 0.3 were correctly cleared, all 25 it scored above 0.9 were correctly flagged, and the 10 in between were right too.

So Harness is now deploying the coupling with a safety valve: any endpoint Jev scores between 0.2 and 0.8 goes to one LLM call for a second look. Harness puts that at under 2% of endpoints in the customer’s normal traffic. (Its test set held more AI APIs and hard cases than normal traffic, 8.6% AI APIs against about 4.5% overall, so the unsure band was bigger there.)

## What it’s worth

There are no annual dollar figures. Harness’s math is in multiples: the coupled design costs about 1,200 times less than the original pipeline and about 150 times less than the single LLM call. Those figures leave out the safety valve. By my arithmetic on Harness’s own numbers, adding an LLM call for the unsure 2% still leaves the cost about 99.7% below the original pipeline and roughly 40 times below the single LLM call. Jev bills only for what it reads; it writes nothing, so there are no output or “thinking” costs, and one decision-model call per endpoint replaces about seven LLM calls.

A check that costs 99.9% less can run on every endpoint, for every customer, on every scan, instead of being rationed.

## How it works

**What a decision model does.** You give it the material, here a sample of an endpoint’s traffic, and a question with the answers you allow: yes or no, one of a set of options, or a place on a scale you describe. Harness asks yes-or-no questions; TypeSafe calls them Noul questions. The model returns a probability, such as 0.04 for “almost certainly not an AI API” or 0.96 for “almost certainly is”. Because it generates no text, it answers in about a second and costs a fraction of an LLM call.

Think of hydraulics on a tractor: the same engine lifts far more. Harness’s LLM is still the engine for explaining findings and for the hard cases; coupled with the decision model, the system labels every endpoint at a sliver of the cost.

**Why the probability matters more than the price.** An LLM saying it is “highly confident” is the model describing its own text. A decision model is trained so its probability can be taken literally: of all the answers it scores 0.8, about 80% should be right. At Harness, the model’s doubt tracked its errors. That turns an unknown hallucination risk into a known number.

**How Jev is trained, from what TypeSafe publishes.** TypeSafe trains Jev specifically so that its probabilities mean what they say; it calls the method RLCD. Jev “is not trained on customer requests or responses”, and “the same weights serve every account”, so you tailor it through the request: the material you send and how you word each question. TypeSafe hasn’t published what data Jev was trained on.

**What Harness set up.** Two yes-or-no questions per endpoint, sent with a trimmed sample of its traffic: the top three requests, with long fields cut short. Harness’s code applies the thresholds. The middle band goes to an LLM; positives get an LLM-written reason; negatives get a standard one. Harness hasn’t published the exact wording of its questions or which LLM it uses.

## What it means for you

**Money.** Look for the step where an LLM answers the same narrow question thousands of times: is this invoice a duplicate, does this claim need an adjuster, is this ticket urgent, does this contract clause need legal. If such a step costs you $1 million a year, Harness’s estimates point to a saving of about $880,000 from trimming the LLM alone, and about $999,000 from coupling it with a decision model. That is my arithmetic on Harness’s percentages, not a promise, and it is before the cost of the switch, which Harness doesn’t give.

**Customers.** An answer in about a second instead of 16 means checks can run while the customer waits, not in an overnight batch.

**Revenue.** Harness reports no revenue figure. The plausible link is coverage: a check that is cheap enough runs for every customer, not only the biggest.

**Risk.** Automate with an LLM alone and you have two choices: pay people to recheck the output, or let it run and accept a risk you can’t size. A decision model puts a number on every answer, so you choose where the line sits and who owns what falls inside it. That is what lets a process run on its own with confidence.

### The same move in other industries

- **Brizz (AI agent analytics).** It moved its session labels from an LLM to Jev, TypeSafe’s decision model: 21 times cheaper and 16 times faster on a run of 17,840 requests, with the LLM kept as the fallback. It is now testing Jev as a screen in front of an LLM that describes problems; for one large customer, it expects LLM spending on that step to fall 76%.
- **GlassFlow (data infrastructure).** In a six-day shadow test, Cloudflare’s decision model Clef-flash, used as a gate in front of an LLM watching system logs, would have cut LLM calls by about 80%, but it kept only 12 of the 18 cases the LLM had escalated. GlassFlow’s conclusion: as a replacement for the LLM, no threshold worked; as a gate it is promising, if tuned on your own data.
- **Box (documents: insurance certificates).** The decision model in OpenAI’s Decisions API routes certificates about five times faster at the same accuracy and sends the lower-confidence ones to people.

All are self-reported by the companies; Box’s comes through OpenAI’s announcement.

### The hard questions

**“The LLM was more accurate. Why switch?”** On raw accuracy, about 99% against 98.6%, the single LLM call won narrowly. But the decision model told Harness where its errors were, and the LLM didn’t. With the uncertain 3.4% sent to the LLM for a second look, you keep the decision model’s speed and cost on the other 96.6%. Harness hasn’t yet published results for that combined setup.

**“Can I trust the probabilities?”** Test them on your own data. Alex Molas, an independent developer, notes that calibration depends on “your data distribution”, not only the model. Harness tested on real customer traffic, but drew the unsure band on the same 500 endpoints, so check it on fresh data.

**“What if the vendor changes the model?”** Pin the version you tested and re-test before moving. Harness’s four fixed fields mean you can swap what sits behind them and roll back.

### How to make the change

1. **Find the repeated call:** the narrow question an LLM answers thousands of times.
2. **Fix the output first.** Write down the fields the rest of your systems read, and keep them stable.
3. **Build a test set from your own data,** labelled by people, with the hard cases included.
4. **Run your current method and the decision model side by side,** measuring accuracy, time and cost.
5. **Find the uncertain band** where the errors sit, and decide who or what handles it.
6. **Keep the LLM for explaining and for the uncertain band.**
7. **Switch in stages,** logging every question, answer and threshold.

## For your developer

Two yes-or-no questions per endpoint; confident answers are final, the uncertain band goes to one LLM call, and the LLM writes reasons only for positives. This is my sketch of the design Harness describes. Its exact questions and models aren’t published, and I haven’t run this on its data, so treat it as expected, not measured.

```python
from typesafe_sdk import Noul, TypeSafeClient

QUESTIONS = {
    "is_ai_api": Noul(instructions="Does this endpoint send request content to an AI model?"),
    "returns_ai": Noul(instructions="Does this endpoint return AI-generated content?"),
}

def classify(client, trimmed_spans):
    a = client.system_one(model="jev-1.14.0", state=trimmed_spans, questions=QUESTIONS).answers
    p = a["is_ai_api"].noul
    if 0.2 < p < 0.8:                        # the unsure band: under 2% of Harness's traffic
        return llm_classify(trimmed_spans)   # one LLM call, only here
    return {"is_ai_api": p >= 0.8, "returns_ai_generated_content": a["returns_ai"].noul >= 0.5,
            "probability": p,
            "reason": None if p >= 0.8 else "No prompt-like fields or AI vendor host"}  # LLM writes positives' reasons later
```

Start with TypeSafe’s [Noul reference](https://docs.typesafe.ai/primitives/noul.md).

## The fine print

- **Who published the numbers.** Every Harness figure comes from its own engineering post of Oct 5, 2026, updated Oct 15. The costs are labelled estimates, not invoices. Brizz and GlassFlow figures come from their own posts; Box from OpenAI’s announcement as reported by Unite.AI. I have measured none of them.
- **Models.** Before: an LLM Harness doesn’t name, in a pipeline of summaries and a final decision. After: Jev for the two yes-or-no calls, and an LLM for explanations and, once deployed, the uncertain band.
- **What the test can show.** 500 endpoints from one customer’s traffic, 43 of them AI APIs. The labels started from the LLM’s answers and were checked by hand, which in my view, if anything, favours the LLM. Seven errors in 500 is a small number, and the uncertain band was drawn after the results were in, on the same 500 endpoints. Treat the clean result outside the band as strong evidence from one test, and check the band on fresh data before relying on it.
- **What isn’t live yet.** Harness says it is “deploying” the design with the LLM handling the uncertain band. It hasn’t published production results, annual volumes or dollar savings.
- **What we don’t know.** The exact question wording, the LLM used, the combined accuracy once the LLM handles the uncertain band, and what Jev was trained on.
- **This site** is independent and not affiliated with TypeSafe, Harness, OpenAI, Cloudflare or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
