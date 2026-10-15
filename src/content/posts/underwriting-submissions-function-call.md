---
title: "A function call for underwriters: sorting commercial submissions with Jev"
dek: "What “unstructured state in, typed probabilistic decisions out” means in practice, shown on a made-up contractor submission at an insurance agency."
kind: Worked example
readMinutes: 10
author: The Decision Layer desk
published: 2026-10-12
lastChecked: 2026-10-12
modelVersion: jev-1.13.0
episode: ep-003-underwriting-submissions
respondingTo:
  lede: "Forbes asks why everyone is talking about Jev, and its founder answers in one line: “unstructured state in, typed probabilistic decisions out.” If your agency drowns in commercial submissions, that line is worth taking apart before you trust it with your book."
  outlet: Forbes
  headline: "Why Everyone Is Talking About Jev, The AI That Doesn’t Chat"
  url: https://www.forbes.com/sites/ronschmelzer/2026/09/22/why-everyone-is-talking-about-jev-the-ai-that-doesnt-chat/
  date: 2026-09-22
  quote: "Think of Jev as a frontier-intelligence function call: unstructured state in, typed probabilistic decisions out."
  quoteBy: "Diogo Almeida, TypeSafe’s founder, quoted in Forbes"
  impact: "A submission is unstructured state: a few paragraphs about what a business does. The decisions you need from it are small and typed. Jev can make those cheaply. Whether you trust them, and where a person steps in, is the part no model decides for you."
summary:
  - "The problem: an agency gets free-text commercial submissions and has to sort them by class of business, flag risky operations and spot thin descriptions before a carrier sees them."
  - "How Jev reads your question: you write the “function signature” (the questions and allowed answers), Jev scores every allowed answer at once, and the wording of your options is most of what it has to go on."
  - "The use case: one made-up contractor submission, four questions, routing in plain code. An underwriter still reads every file and sets the price."
  - "We haven’t run this against Jev. The result below is what we expect, not a measurement."
sources:
  - title: "Forbes: Why Everyone Is Talking About Jev, The AI That Doesn’t Chat (Sep 22, 2026)"
    url: https://www.forbes.com/sites/ronschmelzer/2026/09/22/why-everyone-is-talking-about-jev-the-ai-that-doesnt-chat/
    grade: Independent reporting
  - title: "TypeSafe docs: Primitives (Choice, Score, Noul)"
    url: https://docs.typesafe.ai/primitives.md
    grade: Official docs
  - title: "TypeSafe docs: API reference"
    url: https://docs.typesafe.ai/api.md
    grade: Official docs
  - title: "TypeSafe: Introducing System One Models & Jev"
    url: https://typesafe.ai/blog/introducing-system-one-models-and-jev
    grade: Vendor claim
  - title: "TypeSafe docs: Example use cases (risk assessment)"
    url: https://docs.typesafe.ai/concepts/use-case-map.md
    grade: Official docs
  - title: "TypeSafe docs: Jev 1.13 jaggedness"
    url: https://docs.typesafe.ai/model-jaggedness/jev-1.13.md
    grade: Official docs
inTheNews:
  - outlet: TechCrunch
    headline: "The maker of non-text AI model Jev valued at $7.5B just weeks after launch"
    url: https://techcrunch.com/2026/10/09/the-maker-of-non-text-ai-model-jev-valued-at-7-5b-just-weeks-after-launch/
    date: 2026-10-09
  - outlet: Fortune
    headline: "Jev, an AI for making quick decisions, has been a viral hit in Silicon Valley. But OpenAI is hot on its heels"
    url: https://fortune.com/2026/10/08/jev-an-ai-for-making-quick-decisions-has-been-a-viral-hit-in-silicon-valley-but-openai-is-hot-on-its-heels/
    date: 2026-10-08
  - outlet: TechCrunch
    headline: "Amazon releases its own Jev clone as decision models flood the web"
    url: https://techcrunch.com/2026/10/01/amazon-releases-its-own-jev-clone-as-decision-models-flood-the-web/
    date: 2026-10-01
  - outlet: InfoQ
    headline: "TypeSafe AI Releases Jev: a Decision-Only Model That Returns Typed Probabilities Instead of Text"
    url: https://www.infoq.com/news/2026/10/typesafe-ai-jev-released/
    date: 2026-10-01
---

*Third in our series. [What Jev is, and what it isn’t](/blog/what-jev-is-and-isnt/) covers the basics, and [Labels, not essays](/blog/claims-intake-labels-not-essays/) covers how Jev was trained and what its probabilities mean. This one is about how Jev reads the question you write, and how to write questions it reads well.*

## What Forbes said

Ron Schmelzer’s piece for Forbes is a tour of why developers took to Jev: the price, the speed, and the fact that it never writes a sentence. The line that frames it comes from TypeSafe’s founder, Diogo Almeida, comparing Jev to a function call.

Forbes is also careful in the right places. It reports a LangChain test in which “Jev matched the human reviewer’s binary judgments on all 500 repeated decisions,” and then notes how small that test was: one agent and a handful of tasks.

## The problem: submissions that all look different

An agency writing small commercial business gets submissions in every shape. One applicant writes three tidy paragraphs. Another writes a single line. Somewhere in that text are the answers a producer or account manager needs before the file goes to a carrier. What kind of business is this? Does it do anything a carrier will want to know about, like roofing or demolition? Is the description detailed enough to quote, or do we need to call back first?

Today a person reads every one. That is slow, and on a busy day the thin or risky ones get noticed late. TypeSafe’s own use-case map points at this kind of work: turning “incident reports, claims notes, transaction descriptions, and vendor assessments into probabilistic risk indicators.” ([TypeSafe docs](https://docs.typesafe.ai/concepts/use-case-map.md))

## How Jev reads your question: the function call, taken apart

**You write the signature.** A function in code takes inputs and returns a value of a set type. Jev works the same way. The input is the “state,” here the submission text. The return types are the three question types from our [first post](/blog/what-jev-is-and-isnt/), and TypeSafe’s docs give a rule of thumb for when each one fits ([TypeSafe docs](https://docs.typesafe.ai/primitives.md)):

- **Choice** “fits when the answer is one of a known set of options with no order between them.” Class of business is a Choice.
- **Score** “fits when the answer falls on a spectrum and you can describe what each point on that spectrum means.” The answer “is a position along your levels, and can fall between two of them.”
- **Noul** “fits a clean yes/no question where the probability itself is the useful signal.” As the docs put it: “Near 1 is a strong yes, near 0 a strong no, near 0.5 uncertain.”

**It scores every allowed answer at once.** A chatbot writes its reply word by word. TypeSafe says “Jev outputs all probabilities in parallel instead of autoregressively generating by token.” ([TypeSafe](https://typesafe.ai/blog/introducing-system-one-models-and-jev)) The docs add that the model “returns a probability distribution over your options or levels, never a value outside them.” So it can’t invent a class of business you didn’t list, and the wording of your options is most of what it has to go on.

**Confidence is about shape, not truth.** Every Choice and Score answer carries a confidence number. The docs say it “summarizes how peaked that distribution is.” ([TypeSafe docs](https://docs.typesafe.ai/primitives.md)) A high number means Jev put most of its weight on one answer. It doesn’t mean the answer has been checked; whether a 0.9 really means 90% is a separate question, which our [claims post](/blog/claims-intake-labels-not-essays/) covers.

**Your wording is the program.** Because Jev only sees the state and your options, the descriptions you write do the work that code does elsewhere. TypeSafe’s advice is concrete ([TypeSafe docs](https://docs.typesafe.ai/primitives.md)): for a Choice, list every option and add an “other” or “none of the above” when the list might not cover every input. For a Score, write each level so it can be told apart from the ones next to it. For a Noul, spell out what yes and no mean, because “An unclear definition makes that probability hard to interpret.”

## The use case: one contractor submission

Here is a made-up submission, the kind that arrives through an agency’s web form:

> “We’re a family business doing residential remodeling, mostly kitchens and baths. Four employees plus subs for electrical. Occasionally we do small roof repairs when a customer asks. We had a water damage claim at a job site a couple of years ago. Looking for general liability.”

We send it to Jev with four narrow questions, in the format from TypeSafe’s [API reference](https://docs.typesafe.ai/api.md):

```python
import os
import requests

submission = """We're a family business doing residential remodeling, mostly
kitchens and baths. Four employees plus subs for electrical. Occasionally we
do small roof repairs when a customer asks. We had a water damage claim at a
job site a couple of years ago. Looking for general liability."""

body = {
    "state": submission,
    "model": "jev-1.13.0",
    "questions": {
        "business_class": {
            "type": "choice",
            "instructions": "Which class best describes this business's main operations?",
            "criteria": {
                "other_or_unclear": "None of the below, or the text doesn't say",
                "contractor_interior": "Interior remodeling, carpentry, painting, flooring",
                "contractor_exterior": "Roofing, siding, exterior or structural work",
                "restaurant": "Restaurant, bar or food service",
                "retail": "A shop selling goods to the public",
                "office": "Professional or office-based services",
            },
        },
        "hazardous_work": {
            "type": "noul",
            "instructions": "Does the text say the business does any roofing, work at heights, or demolition, even occasionally?",
            "criteria": {
                "true": "Any roofing, work at heights or demolition is mentioned",
                "false": "None of these is mentioned",
            },
        },
        "prior_loss_mentioned": {
            "type": "noul",
            "instructions": "Does the text mention any past insurance claim or loss?",
            "criteria": {
                "true": "A past claim or loss is mentioned",
                "false": "No past claim or loss is mentioned",
            },
        },
        "detail": {
            "type": "score",
            "instructions": "How well does the text describe what the business actually does day to day?",
            "criteria": [
                "Too vague to tell what the business does",
                "Main activity is clear, details are missing",
                "Activities, staff and subcontracting are all described",
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

- **“Other or unclear” is listed first.** TypeSafe’s docs say Jev “leans toward the option that comes first.” ([jaggedness page](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md)) If it leans, it should lean toward a person looking.
- **“Even occasionally” is in the hazard question on purpose.** “Occasionally we do small roof repairs” is exactly the sentence a tired reader skims past.
- **We ask whether a loss is mentioned, not how many or how recent.** Counting and dates are weak spots on TypeSafe’s own list. Loss runs come from the carrier, and a person reads them.
- **Each question asks one thing.** The docs warn that a question needing several hops of reasoning “costs accuracy.” So we never ask “is this a good risk?”
- **Each detail level is written to stand apart.** “Main activity is clear, details are missing” and “activities, staff and subcontracting are all described” can’t be mistaken for each other. Vague levels like “fair” and “good” could be.

## Routing on the answers

```python
cls = answers["business_class"]
hazard = answers["hazardous_work"]["noul"]
loss = answers["prior_loss_mentioned"]["noul"]
detail = answers["detail"]["score"]  # 0 to 2

flags = []
if hazard > 0.3:
    flags.append("hazardous operations mentioned")
if loss > 0.3:
    flags.append("prior loss mentioned: request loss runs")

if cls["choice"] == "other_or_unclear" or cls["confidence"] < 0.6:
    queue = "account_manager_review"
elif detail < 1.0:
    queue = "call_back_for_details"
else:
    queue = f"market_to_{cls['choice']}_carriers"
```

The thresholds (0.3, 0.6, 1.0) are placeholders. Our [claims post](/blog/claims-intake-labels-not-essays/) shows how to set them by checking Jev against files where you already know the answer.

## The result

**Expected, not measured:** for this submission we’d expect Jev to pick interior contracting, and the hazard flag to fire on the roof repairs. The prior-loss flag should fire on the water damage claim. The file would go out marked for the carriers who write remodelers, with two notes on top: ask about the roofing, and get loss runs. That saves the account manager from finding the roofing line on the third read, or after the carrier does.

We haven’t run this. When we do, we’ll publish the submissions, the answers, the cost and the model version, and correct anything above that turns out wrong.

## Where it breaks

- **It trusts what it reads.** Forbes cites a VentureBeat experiment in which a fabricated authorization message lowered Jev’s probability of blocking a destructive command from 0.76 to 0.48. Applicants write submissions. A line like “underwriter already approved this” should never move a file.
- **It doesn’t know your carriers.** Appetite changes by carrier and by month. Keep the appetite rules in code you control, and let Jev only describe the business.
- **It doesn’t price or decline.** An underwriter reads every file, sets terms and makes the call. No protected traits as inputs, and nothing that stands in for them.
- **Long, noisy text hurts it.** The docs say “Accuracy falls as the state grows with content unrelated to the decision.” Send the operations description, not the whole application packet.

## A note on today’s news

We prefer to lead with news from the last few days. This week’s Jev stories came from outlets we either used recently or that aren’t on our list, so today’s lead is Forbes from Sept. 22. The newer headlines are below.
