---
title: "OpenAI now sells a Jev rival. Before you pick either one, run this test on your own claims"
dek: "TechCrunch reports that OpenAI’s Decisions API is open to all customers, and that nobody agrees yet on what makes a good decision model. That’s an invitation to test for yourself. Here is a pre-launch test, start to finish, for a home claims question where a wrong yes and a wrong no both cost money."
kind: Worked example
readMinutes: 9
author: The Decision Layer desk
published: 2026-10-26
lastChecked: 2026-10-26
modelVersion: jev-1.13.0
episode: ep-017-test-before-you-pick
summary:
  - "In the news: TechCrunch reports OpenAI made its Decisions API, a Jev competitor, available to all customers on Oct 22, and that what makes a good decision model “seems to differ by workload.”"
  - "The problem: a carrier choosing a model for a same-day water mitigation call can’t tell from public rankings which one will be right on its own claims."
  - "How it works: an independent evaluation found Jev tied for top accuracy on one benchmark and last on another, and that half the models it tested, Jev included, missed the error budget their thresholds were tuned for once tested on cases they hadn’t seen."
  - "The use case: a few hundred audited past claims, a written error budget, a threshold set on one part and checked on the rest, and the same test run on every candidate. The result is expected, not measured."
sources:
  - title: "TechCrunch: OpenAI makes its Jev competitor widely available as decision model competition heats up (Oct 22, 2026)"
    url: https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/
    grade: Independent reporting
  - title: "Vals AI: An Independent Evaluation of TypeSafe’s Jev (Oct 6, 2026)"
    url: https://vals.ai/blogs/independent-evaluation-of-jev
    grade: Independent reporting
inTheNews:
  - outlet: TechCrunch
    headline: "OpenAI makes its Jev competitor widely available as decision model competition heats up"
    url: https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/
    date: 2026-10-22
  - outlet: InfoWorld
    headline: "TypeSafe’s Jev ‘even more susceptible to attack’ than LLMs, says security vendor"
    url: https://www.infoworld.com/article/4236103/typesafes-jev-even-more-susceptible-to-attack-than-llms-says-security-vendor.html
    date: 2026-10-15
  - outlet: The New Stack
    headline: "Workday is using TypeSafe’s Jev to build user interfaces on the fly"
    url: https://thenewstack.io/workday-is-using-typesafes-jev-to-build-user-interfaces-on-the-fly/
    date: 2026-10-13
  - outlet: Bloomberg
    headline: "Andreessen Horowitz Backs Jev Maker at $7.5 Billion Value"
    url: https://www.bloomberg.com/news/articles/2026-10-09/andreessen-horowitz-backs-jev-maker-at-7-5-billion-value
    date: 2026-10-09
---

*Seventeenth in our series. Earlier posts cover [the basics](/blog/what-jev-is-and-isnt/), [training](/blog/claims-intake-labels-not-essays/), [writing a question](/blog/underwriting-submissions-function-call/), [the service inbox](/blog/agency-inbox-jev-and-its-clones/), [planted text](/blog/claims-fast-track-text-written-to-fool-it/), [pictures](/blog/claim-photos-what-jev-can-see/), [bias](/blog/subrogation-referrals-does-the-answer-wobble/), [cost at volume](/blog/storm-surge-cost-and-speed-at-volume/), [many questions at once](/blog/agency-renewals-many-small-questions/), [what goes in the state](/blog/coi-requests-what-to-send-jev/), [long inputs](/blog/subcontract-long-context-or-split/), [new versions](/blog/claims-routing-when-jev-updates/), [other languages](/blog/agency-inbox-spanish-emails/), [speed](/blog/online-claim-form-speed-budget/), [data handling](/blog/claim-notes-what-leaves-the-building/) and [life after launch](/blog/underwriting-router-after-launch/). This one is the test you run before launch, start to finish.*

## In the news: OpenAI’s decision model is open to everyone

TechCrunch reported on Oct 22 that “OpenAI made its Decisions API model widely available to users for the first time.” OpenAI’s API product lead, Nikunj Handa, told the paper the team didn’t build a new model from scratch; it took one of its existing chat models and made it faster and cheaper to run. Early testers named in the story include Box, Datadog, Ramp and Speak. ([TechCrunch](https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/))

The more useful line for anyone choosing between them is the reporter’s own: it isn’t clear what makes a good decision model, because “optimization across intelligence, cost, calibration, and speed seems to differ by workload.” On the two public rankings TechCrunch cites, the latest Jev places seventh and third and OpenAI’s model eighth and fourteenth. The story also says TypeSafe’s CEO, Diogo Almeida, distrusts benchmarks and urges people to try the models on their own work.

**What it means for you.** There are now at least two serious options from well-funded companies, and the rankings don’t agree with each other. That’s not a reason to wait. It’s a reason to have a test you can run on any of them, with your own claims, before one goes live. Honestly, it’s a relief: the answer to “which one?” is something you can measure.

## The problem: a call that costs money either way

Say a home carrier wants Jev, or something like it, to answer one question on every first notice of loss: **does this water claim need a mitigation crew sent today?** Standing water, an active leak, water near wiring, a finished basement: send the crew now, before mold and ceiling damage add thousands to the claim. A dripping faucet stain from last month: no rush.

A wrong “no” means a wet house sits for days. A wrong “yes” means a crew rolls out for nothing and the carrier pays the trip. So this isn’t a question where “usually right” is good enough. Someone has to decide how often the system may be wrong, and then check that it actually stays there.

Public rankings can’t tell you that. They’re built on other people’s text, and as the next section shows, the same model can look very different from one test to the next.

## How it works: what one careful outside test found

Vals AI, a company that evaluates AI models, published an independent test of Jev 1.13 on Oct 6 against eleven other models from Anthropic, OpenAI, Google and DeepSeek. Two results matter for anyone planning their own test. ([Vals AI](https://vals.ai/blogs/independent-evaluation-of-jev))

**The same model can top one test and trail another.** On 400 items checking claims against company annual reports, every system scored between 0.953 and 0.995, and Jev’s 0.975 tied three of OpenAI’s models at a small fraction of the cost. On a slice of LegalBench, a public set of legal-reasoning tasks, Jev ranked last of the twelve on the main accuracy measure. Its confidence scores were among the best calibrated on the first test and the worst on the second. As Vals puts it: “Calibration varied across the two benchmarks.” Neither test looks like a claim report. Yours won’t either, which is the point.

**A threshold that worked on one set can miss on the next.** Vals ran the test the way a careful buyer would. It collected cases with known answers and had a person audit them. It split them, used about 30% to pick a confidence threshold that kept errors under a 1% budget, then froze the threshold and measured on the other 70%. Jev handled 95% of those held-out cases on its own, but at 1.6% error, over the budget. It wasn’t alone: “Step 4 is easy to skip, and it showed six of our twelve systems exceeding the budget they were tuned for.”

**What TypeSafe hasn’t published.** We found no TypeSafe guide to running a head-to-head test, no advice on how many cases is enough, and no published results on insurance text. TypeSafe has published its own rankings for the newest version, which our [versions post](/blog/claims-routing-when-jev-updates/) covered. We also haven’t read OpenAI’s Decisions API documentation for this post, and TechCrunch doesn’t give its price, so we won’t compare the two on anything but what was reported.

**What that means for you.** Pick the threshold on some of your cases and judge it on others. A number measured on the same cases you tuned on will look better than it is.

## The use case: a pre-launch test for the water mitigation question

Our [training post](/blog/claims-intake-labels-not-essays/) showed how to check Jev’s probabilities against past claims, and our [inbox post](/blog/agency-inbox-jev-and-its-clones/) said the test set is the thing you keep when you switch. This puts those together into one test with a pass or fail at the end.

**Step 1: write down the budget before you look at any results.** For example: among the claims the system answers on its own, no more than 2% may be wrong, and no more than 1 in 200 may be a wet house it said could wait. Anything it isn’t sure about goes to an adjuster, as it does today. Write it down first so nobody moves the line to fit the result.

**Step 2: build the case set.** Pull 300 to 400 past water claims (made up here, like every example in this series) where you know what happened: whether a crew was needed, judged from the mitigation invoice and the adjuster’s notes, not from the first report. Have a claims person check every answer. Include the hard ones: the tenant who “thinks it stopped,” the claim reported by text at 2 a.m., the one in Spanish.

**Step 3: run every candidate the same way.** Send each model the same text and ask the same yes/no question. Keep the answer, the confidence, the cost and the time. Each vendor’s request looks different, so wrap each one in a small function that returns the same thing:

```python
import random

BUDGET = 0.02            # most wrong answers allowed among automated claims (step 1)
MISS_BUDGET = 0.005      # most "can wait" answers allowed on claims that needed a crew

def split(cases, seed=26):
    shuffled = cases[:]
    random.Random(seed).shuffle(shuffled)     # fixed seed: same split for every model
    cut = int(len(shuffled) * 0.3)
    return shuffled[:cut], shuffled[cut:]     # tune on 30%, judge on 70%

def automated(results, threshold):
    return [r for r in results if max(r.p_yes, 1 - r.p_yes) >= threshold]

def error_rates(results, threshold):
    auto = automated(results, threshold)
    wrong = [r for r in auto if (r.p_yes >= 0.5) != r.truth]
    missed = [r for r in auto if r.p_yes < 0.5 and r.truth]       # said "can wait", needed a crew
    n = max(len(auto), 1)
    return len(auto) / len(results), len(wrong) / n, len(missed) / n

def pick_threshold(tune):
    for t in [0.5 + i / 100 for i in range(50)]:                    # lowest bar that fits the budget
        _, err, miss = error_rates(tune, t)
        if err <= BUDGET and miss <= MISS_BUDGET:
            return t
    return None                                                     # nothing fits: this model fails

def run(candidate, cases):
    results = [candidate.ask(c) for c in cases]    # each returns .p_yes, .truth, .cost, .seconds
    tune, judge = split(results)
    t = pick_threshold(tune)
    if t is None:
        return {"model": candidate.name, "passed": False}
    coverage, err, miss = error_rates(judge, t)    # frozen threshold, unseen cases
    return {"model": candidate.name, "threshold": t, "coverage": coverage,
            "error": err, "missed_crews": miss,
            "passed": err <= BUDGET and miss <= MISS_BUDGET,
            "cost": sum(r.cost for r in results), "slowest": max(r.seconds for r in results)}
```

`candidate.ask` is the only part that changes between vendors. For Jev, it’s the request from our earlier posts, pinned to `jev-1.13.0`. The split uses a fixed seed so every model is judged on the same claims.

**Step 4: read the result in this order.** First, did it pass on the held-out claims? If not, nothing else matters. Second, of the ones that passed, which one handles the most claims on its own? Third, cost and speed, which for a question asked once per claim are likely to be small for any of them. Then read every held-out claim each passing model got wrong, by hand.

## The result

**Expected, not measured:** going by the Vals results, we’d expect more than one model to look fine on the tuning claims and at least one to miss the budget on the held-out ones. We’d expect the hard cases, the 2 a.m. texts and the “I think it stopped” reports, to be where they fail, which is why they belong in the set. Whichever model passes and automates the most claims is the one to start with, with the same frozen threshold and the weekly check from our [after-launch post](/blog/underwriting-router-after-launch/).

We haven’t run this. When we do, we’ll publish the made-up claims, the budget we wrote down, every model’s numbers on both parts of the split, and the model versions.

## Where it breaks

- **Too few claims in the held-out part.** At a 2% budget, a few hundred automated claims can only tell you so much; one or two errors either way changes the verdict. If it’s close, collect more cases rather than declaring a winner.
- **Answers taken from the first report.** If “needed a crew” is judged by what the customer said rather than what happened, you’re testing whether the model agrees with the customer. Use the invoice and the adjuster’s notes.
- **Tuning on everything.** Picking the threshold on all 400 claims and reporting the result on the same 400 is the mistake Vals’s step 4 is there to catch.
- **Moving the budget after the fact.** If a favorite model misses by a little, the temptation is to loosen the budget. That’s why it’s written down in step 1.
- **Testing one version and launching another.** Pin the version you tested. Our [versions post](/blog/claims-routing-when-jev-updates/) covers why.
- **It never denies the claim.** Jev only suggests whether to dispatch a crew today. An adjuster handles every claim, and nothing about a customer that a law protects goes in as an input.
