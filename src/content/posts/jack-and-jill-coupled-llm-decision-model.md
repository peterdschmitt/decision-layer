---
title: "Stop using LLMs alone. Jack & Jill had an LLM score 6,000 job candidates for every open role, and the bill kept climbing. Then it coupled the LLM with a decision model: screening costs fell 88%, the work ran twice as fast, quality held, and it was fully live in 10 days."
dek: "An LLM is good at reading a candidate closely and poor value when it has to give a first score to thousands of them. However, when coupled with a decision model, the thousands get sorted fast and cheaply, and the LLM is kept for the close read. Here is exactly how Jack & Jill did it, how they tested it, what it is worth, and how to make the same change in your own process."
kind: Worked example
readMinutes: 10
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
  - title: "TypeSafe docs: Score (rating against levels you describe)"
    url: https://docs.typesafe.ai/primitives/score.md
    grade: Official docs
  - title: "TypeSafe docs: Composite scoring (worked example: resume screening)"
    url: https://docs.typesafe.ai/patterns/composite-scoring.md
    grade: Official docs
  - title: "Jack & Jill help center: Hiring brief (evaluation criteria and the overall fit label)"
    url: https://jackandjill.ai/docs/hiring-brief
    grade: Official docs
  - title: "Jack & Jill help center: Search and candidate discovery"
    url: https://jackandjill.ai/docs/search-and-candidate-discovery
    grade: Official docs
  - title: "Alex Molas: Jev can’t be calibrated (Sep 23, 2026)"
    url: https://www.alexmolas.com/2026/09/23/jev-cant-be-calibrated.html
    grade: Independent reporting
  - title: "Unite.AI: OpenAI makes Decisions API generally available with GPT-6 Luna (results for Box, Datadog, Ramp, Sierra and Speak)"
    url: https://www.unite.ai/openai-makes-decisions-api-generally-available-with-gpt-6-luna/
    grade: Vendor claim
---

Jack & Jill is a hiring company built around two AI agents. Jack works for job seekers; Jill works for the companies hiring them. When both agree a candidate fits a role, they introduce the two directly. The company says it has worked with more than 5,000 companies and 400,000 professionals, and has raised $60 million.

The model has a cost problem built in. For every open role, every day, Jack & Jill pulls 6,000 candidates from its database, and each needs a first score before anyone can build a shortlist. Jack & Jill gave that job to an LLM, Google’s Gemini 3.1 Flash Lite, a model sold as the low-cost option. Even so, the company says, costs were “adding up fast”.

So it stopped using an LLM alone for that step and coupled its LLM with a decision model, TypeSafe’s Jev: a model that doesn’t write, but answers a narrow question with a probability. Ten days after the first test, the change was fully live. Screening costs fell 88%, the work ran twice as fast, and the shortlists were just as good.

Here is how they did it, and how you can do the same.

## How screening worked before

1. **The pool.** For each open role, 6,000 candidates come out of the database every day.
2. **The first score.** Gemini 3.1 Flash Lite scored all 6,000 and kept the top 2,000.
3. **The close review.** A more powerful LLM, which the case study doesn’t name, read those 2,000 and cut them to a few hundred for the hiring manager.

The cost sat in step two. The close review is what an LLM is good at: reading a profile carefully against a role. The first score is a sorting job, done 6,000 times per role, every day, at LLM prices.

Step two also carried a risk nobody could see. A strong candidate dropped there never reaches the hiring manager, and an LLM’s score comes with no measure of how far to trust it. No one reviews 6,000 first scores by hand, so the scores simply run, errors included. That is an unknown risk at the top of the funnel.

## The change

Jack & Jill replaced Gemini with Jev for every call in step two. The more powerful LLM still does the close review. TypeSafe’s case study calls Jev a “drop-in” replacement: 10 days from the first test to 100% of the traffic.

## The test

Before switching, Jack & Jill ran both models on 150 live roles, with the same candidates for each. The test set held every past “winner”, a candidate a hiring manager had later asked to meet, plus a sample of the rest weighted to match the original 6,000. It then counted how many winners each model kept on its shortlist of 2,000. That is the business outcome: a winner who gets cut is a hire the client never sees.

| First score by | Gemini 3.1 Flash Lite (LLM) | Jev (decision model) |
| --- | --- | --- |
| Winners kept on the shortlist | 93.9% | 94.6% |
| Median time to screen a role’s candidates | 20.3 seconds | 10.3 seconds |
| Screening cost | baseline | 88% lower |

The cost gap comes from pricing: per the case study, Jev’s input price is a sixth of Gemini’s and its output is free. And the test put a number on the risk. Before switching, Jack & Jill knew each method would lose about 5 or 6 winners in every 100. The risk stopped being unknown.

## What it’s worth to Jack & Jill

At today’s volume, Jack & Jill puts the saving at $265,000 a year, and projects $500,000 over the next 12 months with growth. Matthew Wilson, the co-founder and chief executive, wrote on LinkedIn, as quoted in the case study, that “our products got much better at the same time.”

That second half matters most. Jack & Jill now runs Jev in more than 15 places in its product. Every new candidate is checked against every suitable open role right after sign-up, so they see matched jobs at once. The profile check a new candidate waits on fell from about 3.6 seconds to about 0.2, and the case study says it got more accurate. Those savings aren’t in the $500,000.

## How it works

**What a decision model does.** It doesn’t write. You give it the material, here a role and a candidate’s profile, and a question with the answers you allow: yes or no, one of a set of options, or a place on a scale whose levels you describe. It returns the answer with a probability for each option. Because it generates no text, it is fast and cheap enough to run on every item.

Think of hydraulics on a tractor. The engine is the same; the hydraulics multiply what it can lift. Jack & Jill’s LLM is still the engine for the close review. Coupled with the decision model, the system covers all 6,000 candidates per role at a fraction of the cost, and the LLM’s effort still goes only to the 2,000 who deserve it.

**What Jack & Jill asks, as far as the record shows.** The case study doesn’t publish the question. Jack & Jill’s own help pages show how its product judges candidates: for each role, Jill and the hiring team agree evaluation criteria, such as “has scaled a B2B sales team”. Jill scores every candidate on each criterion and gives an overall fit label, such as Excellent or Good, which the company says “isn’t a percentage match or an average” of the criterion scores. So the judgment is a grading across several levels and criteria, not a yes or no. Which of those grades Jev now produces, the company hasn’t said.

TypeSafe’s own documentation uses resume screening as its worked example of this kind of judgment. Each criterion gets its own question, scored against levels you describe in words. The scores are weighted in code and ranked, and the top candidates go on for closer review. That is the pattern in the developer section below. It is my reading of the public record, not Jack & Jill’s published method.

**How Jev is trained, from what TypeSafe publishes.** TypeSafe trains Jev with a method it calls reinforcement learning for calibrated decisions, or RLCD. The aim is a probability you can take literally: of all answers given 0.8, about 80% should be right. Jev “is not trained on customer requests or responses”, and “the same weights serve every account”, so you tailor it through the request: the material you send and the criteria in each question. TypeSafe hasn’t published what data Jev was trained on or how big it is.

## What it means for you

**Money.** Find the step where an LLM makes the same narrow call thousands of times: sorting tickets, routing documents, scoring leads, checking claims. That is where the bill concentrates. If that step costs you $1 million a year and a decision model cuts it by the 88% Jack & Jill reports, that is $880,000 a year. That is my arithmetic on their percentage, not a promise, and it is before the cost of the switch, which the case study doesn’t give.

**Customers.** A check that falls from 3.6 seconds to 0.2 removes a pause, and a cheap check can run the moment a customer arrives instead of in an overnight batch.

**Revenue.** The link is indirect. The case study reports no revenue figure; the route runs through matches shown at sign-up and faster introductions, and matches are what the marketplace exists to make.

**Risk.** A test on your own past decisions gives you either method’s overall miss rate. A decision model adds a probability on every single call, so you set where the line falls. The risk becomes a cut-off you choose and own, and that is what makes full automation with confidence possible.

### The same move in other industries

When OpenAI made its own decision model, the Decisions API, generally available in October, customers reported the same pattern:

- **Datadog (software operations).** The decision model scores the risk of each shell command its AI agents write, before it runs: responses 40 times faster than available frontier models, even on the slowest calls, with comparable accuracy.
- **Sierra (customer service).** It chooses the next action in parts of live customer conversations: under 280 milliseconds, about three times faster, 90% lower cost per call, with no drop in customer outcomes.
- **Ramp (finance).** It attributes AI costs to the work behind them, four times faster and 30% cheaper than using OpenAI’s GPT-6 Luna model, without losing accuracy.
- **Box (insurance documents).** Box Extract pulls the data from certificates of insurance; the decision model routes them about five times faster at the same accuracy and sends the lower-confidence ones to people.
- **Speak (language learning).** It cut the time to choose the next action by more than 90% in the company’s testing, from 1.4 seconds to 0.13.

All are self-reported, through the vendor’s announcement.

### The hard questions

**“Isn’t this just a cheaper model?”** Jack & Jill was already on the low-cost LLM. A cheaper LLM still writes its answer and gives no probability to set a cut-off against. The saving came from changing what kind of model makes the high-volume call.

**“Can I trust the probabilities?”** Trust them as rankings first. Alex Molas, an independent developer, notes that “calibration is not just a property of the model, but also of your data distribution”, so check it on your own data before relying on the exact numbers. Jack & Jill’s test did the equivalent.

**“What if the vendor changes the model?”** Pin the version you tested and re-run your test before moving.

### How to make the change

1. **Find the high-volume call** with the biggest bill or the longest wait.
2. **Turn the judgment into criteria,** each with levels you can describe in words, as Jack & Jill’s hiring brief does.
3. **Build a test set from your own history:** every case that turned out well, plus a fair sample of the rest.
4. **Run your current method and the decision model side by side,** measuring good cases kept, time and cost.
5. **Set the cut-off from the test,** name who owns it, and decide what happens below it.
6. **Switch in stages,** logging every question, answer and cut-off.
7. **Spend the saving** on the check you couldn’t afford to run on every customer before.

## For your developer

One Score question per criterion in the role’s brief, packed into a single request, weighted in code, ranked; the LLM reads only the top 2,000. This is our sketch of the pattern in TypeSafe’s resume-screening example. Jack & Jill’s actual questions and weights aren’t published, and we haven’t run it on their data, so treat it as expected, not measured.

```python
from typesafe_sdk import Score, TypeSafeClient

# From the role's hiring brief, e.g.:
# {"name": "Has scaled a B2B sales team", "weight": 0.4,
#  "levels": ["Never managed sellers", "Ran a small team", "Grew a team past 20 sellers"]}

def first_score(client, brief, candidate):
    crits = brief["criteria"]
    r = client.system_one(
        state=f"ROLE:\n{brief['role']}\n\nCANDIDATE:\n{candidate}",
        questions={f"c{i}": Score(instructions=c["name"], criteria=c["levels"])
                   for i, c in enumerate(crits)})
    return sum(c["weight"] * r.answers[f"c{i}"].score / (len(c["levels"]) - 1)
               for i, c in enumerate(crits))

with TypeSafeClient(model="jev-1.14.0") as client:   # pin the version you tested
    ranked = sorted(candidates, key=lambda c: first_score(client, brief, c), reverse=True)
close_review_with_llm(ranked[:2000])                  # the LLM reads only the shortlist
```

Start with TypeSafe’s [composite scoring guide](https://docs.typesafe.ai/patterns/composite-scoring.md) and [Score reference](https://docs.typesafe.ai/primitives/score.md). Subscribers get our worked examples, with tests, in a private repository, and this post’s example joins them when it goes live ([subscribe for access](/subscribe/)).

## The fine print

- **Who published the numbers.** Every Jack & Jill figure comes from its case study, published by TypeSafe, which sells Jev, on Oct 7, 2026. The Datadog, Sierra, Ramp, Box and Speak figures come from OpenAI’s announcement as reported by Unite.AI. I have measured none of them.
- **Models.** Before: Gemini 3.1 Flash Lite for the first score and an unnamed, more powerful LLM for the close review. After: Jev for the first score; the close review is unchanged.
- **What the test can show.** An offline test on 150 live roles, not a live trial. Jev kept 94.6% of winners against Gemini’s 93.9%, a gap within the test’s margin of error, so I claim equal quality, not better.
- **The savings.** $265,000 a year is at today’s volume; $500,000 is a projection that assumes growth. Savings from the newer features are excluded.
- **What we don’t know.** The exact questions Jack & Jill asks Jev, how it combines the answers into a ranking, whether it tuned anything beyond the request, and what Jev was trained on. The criteria-and-levels description comes from Jack & Jill’s help pages about its product, not from the case study.
- **This site** is independent and not affiliated with TypeSafe, OpenAI or any vendor named here.

If you want the worked example and every new one as it’s published, subscribe below.
