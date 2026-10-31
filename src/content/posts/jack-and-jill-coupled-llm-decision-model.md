---
title: "Stop using LLMs alone. Jack & Jill had an LLM score 6,000 job candidates for every open role, and the bill kept climbing. Then it coupled the LLM with a decision model: screening costs fell 88%, the work ran twice as fast, quality held, and it was fully live in 10 days."
dek: "An LLM is good at reading a candidate closely and poor value when it has to give a first score to thousands of them. However, when coupled with a decision model, the decision model sorts the thousands and the LLM is kept for the close read. Here is exactly how Jack & Jill did it, how they tested it, what it is worth, and how to make the same change in your own process."
kind: Worked example
readMinutes: 12
author: Peter Schmitt
audience: For executives, operations and transformation leaders deciding how AI runs their processes
published: 2026-11-01
lastChecked: 2026-10-31
modelVersion: jev-1.14.0
stats:
  - value: "88%"
    label: "lower screening cost after Jack & Jill coupled its LLM with a decision model"
  - value: "$500K"
    label: "a year in projected savings ($265K at today’s volume)"
  - value: "2x"
    label: "faster: median time to screen a role’s candidates fell from 20.3 to 10.3 seconds"
  - value: "10 days"
    label: "from the first test to fully live in production, with quality held in testing"
statsNote: "All figures are self-reported by Jack & Jill in a case study published by TypeSafe, the maker of the decision model, on Oct 7, 2026. The fine print at the end says what the test can and can’t show."
sources:
  - title: "TypeSafe: How Jack & Jill cut candidate screening costs by 88% with Jev (case study, Oct 7, 2026)"
    url: https://typesafe.ai/blog/jack-jill-jev-case-study
    grade: Vendor case study
  - title: "TypeSafe docs: Models (how Jev is trained and customized)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
  - title: "TypeSafe docs: Machine learning primer (RLCD and calibrated decisions)"
    url: https://docs.typesafe.ai/introduction/machine-learning-primer.md
    grade: Official docs
  - title: "TypeSafe docs: Noul (yes-or-no probability) and thresholds"
    url: https://docs.typesafe.ai/primitives/noul.md
    grade: Official docs
  - title: "Alex Molas: Jev can’t be calibrated (Sep 23, 2026)"
    url: https://www.alexmolas.com/2026/09/23/jev-cant-be-calibrated.html
    grade: Independent reporting
  - title: "Unite.AI: OpenAI makes Decisions API generally available with GPT-6 Luna (results for Box, Datadog, Ramp, Sierra and Speak)"
    url: https://www.unite.ai/openai-makes-decisions-api-generally-available-with-gpt-6-luna/
    grade: Vendor claim
---

Jack & Jill is a hiring company built around two AI agents. Jack works for job seekers; Jill works for the companies hiring them. When both agents agree a candidate and a role are a match, they introduce the two directly, and nobody fills in an application. The company says it has worked with more than 5,000 companies and more than 400,000 professionals, and it has raised $60 million.

That design has a cost problem built into it. For every open role, every day, Jack & Jill pulls 6,000 candidates from its database, and each one needs a first score before anyone can say who belongs on the shortlist. Jack & Jill did what most companies do. It gave the job to an LLM.

It worked, and it got expensive. Even with Google’s Gemini 3.1 Flash Lite, a model sold as the low-cost option, the company says costs were “adding up fast”. The obvious fixes were all bad ones: score fewer candidates and miss good ones, or keep paying and watch the bill grow with every new role.

Jack & Jill took a third path. It stopped using an LLM alone for that step and coupled its LLM with a decision model, TypeSafe’s Jev: a model that doesn’t write, but answers a narrow question with a probability. It had the change fully live in 10 days. Screening costs fell 88%, the work ran twice as fast, and the shortlists were just as good.

Below, we show you how, in enough detail to do the same in your own business.

## How the screening worked before

The pipeline had three steps.

1. **The candidate pool.** For each open role, 6,000 candidates come out of the database every day.
2. **The first score.** Gemini 3.1 Flash Lite scored every one of the 6,000 and kept the top 2,000.
3. **The close review.** A more powerful LLM, which the case study doesn’t name, read those 2,000 closely and cut them to a few hundred for the hiring manager.

The cost sat in step two. The close review handles a third of the candidates and does the work an LLM is genuinely good at: reading a profile carefully against a role. The first score handles all 6,000 and asks a much narrower question, roughly “is this person worth a closer look?” Jack & Jill was paying LLM prices for a sorting job, 6,000 times per role, every day.

There was a second problem, one built into almost every process run on an LLM alone. The first score shapes everything after it, because a strong candidate dropped at step two never reaches the hiring manager. Yet an LLM’s score comes with no measure of how far to trust it. Nobody reviews 6,000 first scores by hand, so the scores simply run, and whatever the LLM got wrong runs with them. That is an unknown risk sitting at the top of the funnel.

## The change

Jack & Jill replaced Gemini with Jev for every call in the first-score step. The more powerful LLM still does the close review, exactly as before. The decision model makes the high-volume call, and the LLM reads closely where reading closely pays.

TypeSafe’s case study calls it a “drop-in” replacement, which matches the timeline: 10 days from the first test to 100% of the traffic.

## The test

Before switching, Jack & Jill ran both models side by side on 150 live roles, with the same candidates for each. For every role, the test set held two groups:

- every past “winner”, meaning a candidate a hiring manager had later asked to meet;
- a sample of the other candidates, weighted to match the original 6,000.

Then it counted how many of the winners each model kept on its shortlist of 2,000. That is the right measure, because it is the business outcome. A winner who gets cut is a hire the client never sees.

The results:

| First score by | Gemini 3.1 Flash Lite (LLM) | Jev (decision model) |
| --- | --- | --- |
| Winners kept on the shortlist | 93.9% | 94.6% |
| Median time to screen a role’s candidates | 20.3 seconds | 10.3 seconds |
| Screening cost | baseline | 88% lower |

Quality held, time halved, and cost fell by close to nine-tenths. The cost gap comes from pricing: per the case study, Jev’s input price is a sixth of Gemini’s and its output is free.

The test also put a number on the risk. Before a single real candidate went through the new setup, Jack & Jill knew how many winners each method would lose: about 5 or 6 in every 100 either way. The risk at the top of the funnel stopped being unknown. It became a number the company measured and chose to accept.

## What it’s worth to Jack & Jill

At today’s volume of roles, Jack & Jill puts the saving at $265,000 a year. With the growth it expects, it projects $500,000 over the next 12 months. Matthew Wilson, the co-founder and chief executive, wrote on LinkedIn, as quoted in the case study, that “our products got much better at the same time.”

That second half is the part I’d underline, because the savings figure leaves out where Jev went next. Jack & Jill now runs it in more than 15 places across its product:

- **Matches at sign-up.** Every new candidate is now checked against every suitable open role right after onboarding, so they see matched jobs immediately. When each check is that cheap, you can afford to run it on everyone, every time.
- **A near-instant profile check.** The check a new candidate waits on after onboarding dropped from about 3.6 seconds to about 0.2 seconds, and the case study says it got more accurate.
- **Checks across the product,** including the CV editor, classifying companies and filtering the marketplace.

The savings from these features are not in the $500,000. The cheaper, faster calls paid for product features the case study describes as newly possible.

## How it works

A decision model doesn’t write. You give it the material, such as a role and a candidate’s profile, and a narrow question with the answers you allow: yes or no, pick one of these options, or score this on a scale. It returns one of those answers together with a probability. For a yes-or-no question, Jev returns a single number between 0 and 1: the probability that the answer is yes. Your code acts on that number. Because it never generates text, it is fast and cheap enough to run on every item, at a volume where an LLM gets slow and expensive.

Think of hydraulics on a tractor. The engine is the same; the hydraulics multiply what it can lift. Jack & Jill’s LLM is still the engine for the close review. Coupled with the decision model, the system now covers all 6,000 candidates for every role at a fraction of the cost, and the LLM’s effort still goes only to the 2,000 who deserve it.

**How Jev is trained, from what TypeSafe publishes.** TypeSafe trains Jev with a method it calls reinforcement learning for calibrated decisions, or RLCD. The aim is a probability you can take literally: of all the answers given a probability of 0.8, about 80% should turn out right. Three facts matter to a buyer. Jev “is not trained on customer requests or responses”. It isn’t fine-tuned on any one customer’s data, because “the same weights serve every account”. And you tailor it to your business through the request itself: the material you send, and the instructions and criteria in each question. TypeSafe hasn’t published what data Jev was trained on or how big the model is.

**What Jack & Jill had to decide.** The case study is thin here, and you should know exactly where. It doesn’t say what question the company asks Jev about each candidate, or exactly how it turns Jev’s answers into the ranking that picks the top 2,000. And it doesn’t say whether the company tuned anything beyond the request. A 10-day rollout described as “drop-in” suggests it used Jev as it comes, but that is my inference, not something the company has said. What the case study does show is the part most teams skip: Jack & Jill tested on its own history of real hiring decisions before switching.

## What it means for you

**Money.** Look for the step in your process where an LLM makes the same narrow call thousands of times: sorting tickets, routing documents, scoring leads, checking claims, triaging alerts. That is where the bill concentrates, as it did at Jack & Jill’s step two. If that step costs you $1 million a year in LLM calls and a decision model cuts it by the 88% Jack & Jill reports, that is $880,000 a year. That is my arithmetic on their percentage, not a promise; your price difference and volume decide the real number. Set it against the cost of the switch, which the case study doesn’t give; a 10-day rollout suggests it was small.

**Customers.** A check that falls from 3.6 seconds to 0.2 is the difference between a pause and no pause, and a cheap check is one you can afford to run the moment a customer arrives rather than in an overnight batch.

**Revenue.** The link is indirect, and I’d rather say so than overclaim. Jack & Jill’s case study reports no revenue figure. The route to revenue runs through the features the savings paid for: matches shown at sign-up and faster introductions mean more matches made, and matches are what the marketplace exists to make.

**Risk.** An LLM alone gives you outputs with no measure of how far to trust each one, so you automate blind or not at all. A test on your own past decisions tells you the overall miss rate of either method; a decision model adds a probability on every single call, so you can set where the line falls. The risk becomes a cut-off you choose and own, and that is what makes full automation with confidence possible.

### The same move in other industries

When OpenAI made its own decision model, the Decisions API, generally available in October, customers reported the same pattern in their own evaluations:

- **Datadog (software operations).** Its AI agents write shell commands; the decision model scores the risk of each command before it runs. Datadog reported responses 40 times faster than available frontier models, even on its slowest calls, with comparable accuracy.
- **Sierra (customer service).** The agent holds the conversation; the decision model chooses the next action in parts of live customer conversations. Sierra reported decisions in under 280 milliseconds, about three times faster, with 90% lower cost per call than its previous approach and no drop in customer outcomes.
- **Ramp (finance).** The decision model attributes AI costs to the work behind them, which Ramp reported as four times faster and 30% cheaper than using OpenAI’s GPT-6 Luna model, without losing accuracy.
- **Box (documents and insurance).** Box Extract pulls the data from certificates of insurance; the decision model picks the route, about five times faster at the same accuracy, and sends the lower-confidence ones to people.
- **Speak (language learning).** Its chief technology officer said the decision model cut the time to choose the next action by more than 90% in the company’s testing, from 1.4 seconds to 0.13.

Each of these is self-reported, through the vendor’s announcement. Each shows the same move: the LLM keeps the work only it can do, and the decision model takes the high-volume calls.

### The hard questions

**“Isn’t this just a cheaper model?”** No. A cheaper LLM still writes its answer and gives you no probability on each call to set a cut-off against. Jack & Jill was already on the low-cost LLM. The saving came from changing what kind of model makes the high-volume call.

**“Can I trust the probabilities?”** Trust them as rankings first. Alex Molas, an independent developer, makes a fair point: “calibration is not just a property of the model, but also of your data distribution.” His advice is to treat the scores as good rankings and to check calibration on your own data before you rely on the exact numbers. Jack & Jill’s test did the equivalent: it measured winners kept, on its own history.

**“What if the vendor changes the model?”** Pin the model version you tested and re-run your test before moving to a new one.

**“What does this do to the people who did this work?”** At Jack & Jill, no people were doing it; one model replaced another. In your business, the first-score step may be a person today. Then the honest answer is that the same test applies. Measure how many good cases the new method keeps against your people’s past decisions before you change anyone’s job.

### How to make the change in your own process

1. **Find the high-volume call.** List each step where AI or people make the same narrow judgment hundreds or thousands of times a day. Pick the one with the biggest bill or the longest wait.
2. **Write it as a narrow question** with the answers you allow, such as “Would a hiring manager ask to meet this candidate?”, yes or no.
3. **Build a test set from your own history:** every case that turned out well, plus a fair sample of the rest, as Jack & Jill did with its winners.
4. **Run your current method and the decision model side by side** on that set. Measure what your business cares about, such as good cases kept, along with time and cost.
5. **Set the cut-off** from the test, not from a guess, name who owns it, and decide what happens below it: the LLM’s close review, a person, or a no.
6. **Switch the traffic in stages,** and keep logging every question, answer and cut-off.
7. **Spend the saving.** Look for the check you couldn’t afford to run on every customer before, and run it.

## For your developer

The coupling is a few lines. The decision model gives every candidate a first score, the cut-off is a rule you own, and the LLM reads only the shortlist. This is our sketch of Jack & Jill’s pattern using TypeSafe’s Python SDK. Their actual question and cut-off aren’t published, and we haven’t run this against their data, so treat the behaviour as expected, not measured.

```python
from typesafe_sdk import Noul, TypeSafeClient

QUESTION = Noul(instructions="A hiring manager for this role would ask to meet this candidate")

def first_score(client, role, candidates):
    scored = []
    for c in candidates:                      # about 6,000 per role
        r = client.system_one(state=f"ROLE:\n{role}\n\nCANDIDATE:\n{c['profile']}",
                              questions={"meet": QUESTION})
        scored.append((r.nouls["meet"].noul, c))   # probability of "yes", 0 to 1
    scored.sort(key=lambda s: s[0], reverse=True)
    return [c for _, c in scored[:2000]]     # your cut-off, set from your own test

with TypeSafeClient(model="jev-1.14.0") as client:   # pin the version you tested
    shortlist = first_score(client, role, candidates)
close_review_with_llm(shortlist)              # your LLM reads the 2,000 closely
```

Start with TypeSafe’s [quick start](https://docs.typesafe.ai/introduction/quickstart.md), then its guide to [packing many questions into one request](https://docs.typesafe.ai/patterns/fan-out.md). Subscribers get our worked examples, with tests, in a private repository, and this post’s example joins them when it goes live ([subscribe for access](/subscribe/)). For more public builds of the same pattern, the community catalog [awesome-jev-use-cases](https://github.com/walidboulanouar/awesome-jev-use-cases) collects demos; they are community demos, not audited results.

## The fine print

- **Who published the numbers.** Every Jack & Jill figure comes from the company’s case study, published by TypeSafe, which sells Jev, on Oct 7, 2026. The Datadog, Sierra, Ramp, Box and Speak figures come from OpenAI’s Decisions API announcement as reported by Unite.AI, and are self-reported by each company. I have not measured any of them.
- **Models.** Before: Google’s Gemini 3.1 Flash Lite for the first score, and an unnamed, more powerful LLM for the close review. After: TypeSafe’s Jev for the first score; the close review is unchanged.
- **What the test can show.** It was an offline test on 150 live roles, not a live trial. Jev kept 94.6% of winners against Gemini’s 93.9%, but that gap is within the test’s margin of error, so I claim equal quality, not better. The case study also reports a second, technical measure of ranking quality (0.933 against 0.924), with the same conclusion.
- **The savings.** $265,000 a year is at today’s volume; $500,000 is a projection that assumes growth. Both use Gemini’s published list prices at the time; savings from the newer features are excluded.
- **What we still don’t know.** The exact question Jack & Jill asks, how it ranks candidates from Jev’s answers, whether it tuned anything beyond the request, what Jev was trained on, and how big it is.
- **This site** is independent and not affiliated with TypeSafe, OpenAI or any vendor named here.

If you want the worked example and every new one as it’s published, subscribe below.
