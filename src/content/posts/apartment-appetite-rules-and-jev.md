---
title: "The appetite guide is the rulebook. Give Jev only the parts that are written in words"
dek: "A carrier’s appetite guide for small apartment buildings mixes numbers anyone can check with judgments that live in a broker’s description. TypeSafe’s own docs say to keep the numbers in code. Here is a worked plan for splitting the guide, one line at a time, so a person’s rules stay a person’s rules."
kind: Worked example
readMinutes: 8
author: The Decision Layer desk
published: 2026-10-27
lastChecked: 2026-10-27
modelVersion: jev-1.13.0
episode: ep-018-appetite-rules
summary:
  - "No outlet on our list had a new Jev story we could verify today, so the post starts with its topic. Recent headlines are at the end."
  - "The problem: an appetite pre-screen for small apartment buildings has to apply rules an underwriter wrote, some about numbers and dates, some about what the building is actually used for."
  - "How it works: TypeSafe says to keep math and date comparisons in code and to give each action its own confidence threshold based on what a wrong answer costs. It says nothing about combining Jev with a rulebook."
  - "The use case: every line of the guide becomes either a check in code or one yes/no question, each tagged to the line it came from, and a person reviews anything that trips. The result is expected, not measured."
sources:
  - title: "TypeSafe docs: Model jaggedness, jev-1.13"
    url: https://docs.typesafe.ai/model-jaggedness/jev-1.13.md
    grade: Official docs
  - title: "TypeSafe docs: Confidence-gated routing"
    url: https://docs.typesafe.ai/patterns/confidence-routing.md
    grade: Official docs
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

*Eighteenth in our series. Earlier posts cover [the basics](/blog/what-jev-is-and-isnt/), [training](/blog/claims-intake-labels-not-essays/), [writing a question](/blog/underwriting-submissions-function-call/), [the service inbox](/blog/agency-inbox-jev-and-its-clones/), [planted text](/blog/claims-fast-track-text-written-to-fool-it/), [pictures](/blog/claim-photos-what-jev-can-see/), [bias](/blog/subrogation-referrals-does-the-answer-wobble/), [cost at volume](/blog/storm-surge-cost-and-speed-at-volume/), [many questions at once](/blog/agency-renewals-many-small-questions/), [what goes in the state](/blog/coi-requests-what-to-send-jev/), [long inputs](/blog/subcontract-long-context-or-split/), [new versions](/blog/claims-routing-when-jev-updates/), [other languages](/blog/agency-inbox-spanish-emails/), [speed](/blog/online-claim-form-speed-budget/), [data handling](/blog/claim-notes-what-leaves-the-building/), [life after launch](/blog/underwriting-router-after-launch/) and [testing before launch](/blog/water-claims-test-before-you-pick/). This one is about putting Jev next to rules a person wrote.*

*A note on today’s news: we didn’t find a new Jev story we could verify from the outlets on our list, so this post starts with its topic. The latest headlines are at the end.*

## The problem: half the guide is numbers, half is reading

A made-up carrier writes property and liability for small apartment buildings through agencies. Its underwriters keep a one-page appetite guide. A version of it might read:

1. Built 1960 or later, or rewired since 1990.
2. No more than four stories.
3. Between 4 and 24 units.
4. No more than two property losses in the last three years.
5. Not vacant, or more than a quarter empty, for more than 60 days.
6. No student housing.
7. No commercial cooking on the premises, such as a restaurant on the ground floor.
8. Pools only with a locked fence.

The agency gets submissions as an application form plus a few paragraphs from the broker. Lines 1 to 5 can be checked against fields on the form and the loss run. Lines 6 to 8 usually can’t. They’re in sentences like “mostly leased to grad students at the university,” “the corner unit is a taqueria” or “there’s a pool out back for residents.”

Our [underwriting post](/blog/underwriting-submissions-function-call/) built a router that flags hazards from the broker’s description. This one asks a different question: when there’s already a written rulebook, which lines should Jev touch at all?

## How it works: TypeSafe draws the line for you

**Numbers and dates stay in code.** Our [basics post](/blog/what-jev-is-and-isnt/) covered TypeSafe’s warning that Jev isn’t built for arithmetic. Its list of weak spots goes further on exactly the kinds of lines an appetite guide is full of: “We strongly recommend implementing any mathematical logic in code.” And on dates: “Asking which of two dates comes first, how far apart they are, or whether one falls inside a window is unreliable.” Lines 1 to 5 are all comparisons of numbers or dates. ([Model jaggedness](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md))

**Words are read literally.** The same page says: “Scoping words, negations, and implied conditions are read at face value.” An appetite line like “no commercial cooking, except a coffee kiosk without a hood” is a negation with an exception folded in. Split it into plain questions and let code combine them.

**Each rule can have its own bar.** TypeSafe’s confidence-gated routing pattern starts from one idea: “Use confidence as a second axis. The answer tells you what; confidence tells you whether to act.” Its example, a banking assistant, uses a low floor for checking a balance and a high one for approving a transfer, because “each action type has its own threshold based on the consequences of acting on a wrong classification.” ([Confidence-gated routing](https://docs.typesafe.ai/patterns/confidence-routing.md)) The same thinking fits an appetite guide. Missing a restaurant under three floors of apartments is far worse than double-checking a pool fence.

**What TypeSafe hasn’t published.** We found nothing in the docs on combining Jev with a rulebook, on keeping a record of which rule a decision came from, or on insurance appetite at all. The banking thresholds on the pattern page are an example, not advice for underwriting. The design below is ours.

**What that means for you.** Before writing a single question, go through the guide line by line and sort each one: can it be checked from a field, or does someone have to read a sentence to know?

## The use case: one guide, two kinds of check

**Step 1: tag every line.** Give each line of the guide a short ID and decide where it lives. Lines 1 to 5 become code. Lines 6 to 8 become yes/no questions for Jev. If a line can be checked either way, use the field and keep the question as a backup for when the field is blank.

**Step 2: write the code checks from the form and the loss run.**

```python
from datetime import date

def rule_checks(app, loss_run, today=None):
    today = today or date.today()
    hits = []
    if app.year_built < 1960 and not (app.rewired_year and app.rewired_year >= 1990):
        hits.append("R1 built before 1960, no rewire since 1990")
    if app.stories > 4:
        hits.append("R2 more than four stories")
    if not 4 <= app.units <= 24:
        hits.append("R3 unit count outside 4 to 24")
    recent = [l for l in loss_run.property_losses if (today - l.date).days <= 3 * 365]
    if len(recent) > 2:
        hits.append("R4 more than two property losses in three years")
    if app.vacancy_started and (today - app.vacancy_started).days > 60:
        hits.append("R5 vacancy longer than 60 days")
    return hits
```

The counting and the date math happen here, where they’re exact. The loss count comes from the carrier’s loss run, not from what the broker wrote.

**Step 3: ask Jev only about what’s in the words.** One question per line, each asking one thing, sent with the broker’s description as the state:

```python
QUESTIONS = {
    "R6_student": noul(
        "Does the text say or suggest that most tenants are students?",
        "Most tenants are described as students", "Students are not described as most tenants"),
    "R7_cooking": noul(
        "Does the text mention a restaurant, takeout, food truck or other commercial kitchen in the building?",
        "Commercial cooking in the building is mentioned", "No commercial cooking is mentioned"),
    "R8_pool": noul(
        "Does the text mention a swimming pool on the property?",
        "A pool is mentioned", "No pool is mentioned"),
    "R8_fence": noul(
        "Does the text say the pool has a locked fence or gate?",
        "A locked fence or gate is described", "No locked fence or gate is described"),
}

BARS = {"R6_student": 0.4, "R7_cooking": 0.2, "R8_pool": 0.5}   # lower bar = cheaper to look

def word_checks(answers):
    p = {k: v["noul"] for k, v in answers.items()}
    hits = [f"{k} flagged ({p[k]:.2f})" for k, bar in BARS.items() if p[k] > bar]
    if p["R8_pool"] > BARS["R8_pool"] and p["R8_fence"] < 0.8:
        hits.append("R8 pool without a clearly described locked fence")
    return hits
```

`noul` builds a yes/no question as in our [speed post](/blog/online-claim-form-speed-budget/), and the request is the one from our earlier posts, pinned to `jev-1.13.0`. The fence question doesn’t try to say “no pool unless fenced” in one breath; code joins the two answers. The bars are placeholders. Set them with a test on past submissions, as in our [testing post](/blog/water-claims-test-before-you-pick/).

**Step 4: route, and keep the reason.**

```python
hits = rule_checks(app, loss_run) + word_checks(answers)
if hits:
    queue = "underwriter_review"            # with every hit listed, by guide line
else:
    queue = "ready_to_quote"                # an underwriter still prices and binds
log(submission_id, queue, hits, model=served_model)   # the response's model field
```

Nothing is declined by the system. A hit sends the file to an underwriter with the reasons on top, each tied to a line of the guide. A clean file goes to the quote queue, where a person still prices it.

## The result

**Expected, not measured:** take a made-up 16-unit, three-story building from 1972 with one loss, described as “mostly leased to grad students, with a laundromat and a taqueria on the ground floor.” We’d expect the code checks to pass, and Jev to flag both the student housing and the commercial cooking, the second one well above its low bar. The file goes to an underwriter with two lines of the guide named. The underwriter reads the sentence, and decides.

When the guide changes, say the carrier allows six stories next year, it’s a one-number change in code with a date on it, not a new question.

We haven’t run this. When we do, we’ll publish the made-up submissions, the guide, which checks fired and why, and the model version.

## Where it breaks

- **A blank field.** If the form leaves year built empty, the code check can’t run. Treat a missing field as a hit, not a pass.
- **A broker who doesn’t mention it.** Jev can only flag what the description says. A restaurant nobody wrote down won’t show up. The rules in code and the inspection report still matter.
- **Guide lines that are judgments in disguise.** “Well maintained” or “good management” can’t be checked from a field and are too vague for one yes/no question. Leave them to the underwriter.
- **Rules that drift apart.** If the guide is updated and the code isn’t, the system applies last year’s appetite. Keep the guide’s line IDs in the code and review both together.
- **Treating student housing as a stand-in for anything else.** Use it only for the line it serves. Nothing about a tenant or applicant that a law protects goes in as an input.
- **It never decides the risk.** Jev and the code only sort files. An underwriter decides what to quote, and every decline is a person’s call.
