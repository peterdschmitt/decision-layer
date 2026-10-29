---
title: "Five dates in one claim email: let code find them and Jev pick the one that matters"
dek: "Jev doesn’t write text, so it can’t copy a date out of an email. TypeSafe’s docs say to find the candidates another way and let Jev choose. Here is a worked plan for pulling the date of loss out of a first notice, with the math left to code."
kind: Worked example
readMinutes: 11
author: The Decision Layer desk
published: 2026-10-28
lastChecked: 2026-10-28
modelVersion: jev-1.13.0
episode: ep-019-which-date
summary:
  - "No outlet on our list had a new Jev story we could verify today, so the post starts with its topic. Recent headlines are at the end."
  - "The problem: a customer’s claim email mentions several dates (when they bought the policy, when the accident happened, when they noticed it). The claims system needs just one, the day the damage happened, to check the policy covered that day."
  - "How it works: Jev can’t copy text out of an email, but it’s good at picking from a list. So a simple program finds every date, and Jev picks which one is the day of the damage. TypeSafe’s own docs recommend exactly this split."
  - "The result: a program checks that date against the policy dates, and anything unclear goes to a person. We haven’t run it yet, so this is what we expect, not what we measured."
sources:
  - title: "TypeSafe docs: Model jaggedness, jev-1.13"
    url: https://docs.typesafe.ai/model-jaggedness/jev-1.13.md
    grade: Official docs
  - title: "TypeSafe docs: Primitives"
    url: https://docs.typesafe.ai/primitives.md
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

*Nineteenth in our series. Earlier posts cover [the basics](/blog/what-jev-is-and-isnt/), [training](/blog/claims-intake-labels-not-essays/), [writing a question](/blog/underwriting-submissions-function-call/), [the service inbox](/blog/agency-inbox-jev-and-its-clones/), [planted text](/blog/claims-fast-track-text-written-to-fool-it/), [pictures](/blog/claim-photos-what-jev-can-see/), [bias](/blog/subrogation-referrals-does-the-answer-wobble/), [cost at volume](/blog/storm-surge-cost-and-speed-at-volume/), [many questions at once](/blog/agency-renewals-many-small-questions/), [what goes in the state](/blog/coi-requests-what-to-send-jev/), [long inputs](/blog/subcontract-long-context-or-split/), [new versions](/blog/claims-routing-when-jev-updates/), [other languages](/blog/agency-inbox-spanish-emails/), [speed](/blog/online-claim-form-speed-budget/), [data handling](/blog/claim-notes-what-leaves-the-building/), [life after launch](/blog/underwriting-router-after-launch/), [testing before launch](/blog/water-claims-test-before-you-pick/) and [written rules](/blog/apartment-appetite-rules-and-jev/). This one is about getting a value out of text when Jev can’t write.*

*A note on today’s news: we didn’t find a new Jev story we could verify from the outlets on our list, so this post starts with its topic. The latest headlines are at the end.*

## The problem: the claims system needs one date, and the email has five

A made-up first notice of loss arrives by email at an auto carrier:

> “Hi, I bought this policy on 9/30 and my renewal is 3/30/27. Someone hit my parked car on Oct 14 at the grocery store, but I didn’t notice the dent until the 16th. Can someone call me before Friday 10/23?”

Before anything else, the claims system needs the date of loss, because coverage depends on it. Was the policy in force that day? Is the claim reported late? Those are questions about one specific date. The email has five dates in it, and only one is the date of loss. It’s Oct 14, the day the car was hit, not Oct 16, the day the customer noticed.

A person reads this in seconds. A pattern that finds dates finds all five and can’t tell which is which. And Jev, on its own, can’t hand you the date at all.

## Why it matters to an agency

If you run an agency, you see this every week. A customer emails or texts about a claim, and the first thing anyone needs is the date it happened. Your service team reads the message, picks the date, and types it into the carrier’s claim form or your management system. Most of the time that takes seconds. The trouble is the other times.

- **The wrong date sends the claim down the wrong path.** If someone types the day the customer noticed the dent instead of the day it happened, the claim can look like it falls outside the policy, or look late, when it isn’t. That means a callback, a delay and an unhappy customer.
- **The policy dates and the loss date have to line up.** In our example the customer bought the policy on Sept 30. A loss on Sept 28 would be a very different conversation from a loss on Oct 14. Getting that one date right is the whole question.
- **Volume makes small misses add up.** After a storm or a busy weekend, one person might read dozens of these in a row. Tired eyes grab the first date they see.

The goal here isn’t to take the person out of it. It’s to have the date filled in, with the sentence it came from shown next to it, so your team checks it instead of hunting for it, and anything unclear gets flagged before it goes out.

## How it works: Jev picks, something else finds

**Jev doesn’t write.** Our [basics post](/blog/what-jev-is-and-isnt/) covered the three question types: yes/no, choice and score. None of them returns a string. TypeSafe’s list of weak spots is direct about trying anyway: “While you can force it to by chaining choices, this will not work well and will be very slow.” ([Model jaggedness](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md))

**So split the job.** The same page gives the recipe: “For data extraction, it is better to extract possible options using regex or a generative model and let `jev-1.13` pick the correct extraction.” A regex is a text pattern, the kind of thing that finds “10/14” or “Oct 14” anywhere in an email. It can find every date. It can’t tell you which date is the loss. That part, the page says in its section on dates, is Jev’s: “Extraction is a judgment, so give it to the model. Arithmetic is not, so keep it in code.” Our [rules post](/blog/apartment-appetite-rules-and-jev/) covered why the date math stays out of Jev.

**The options can change with every email.** A choice question takes a map of named options, each with a description, and returns the chosen one plus a probability for every option. ([Primitives](https://docs.typesafe.ai/primitives.md)) Nothing says the options have to be fixed in advance, so the dates found in this email can become this email’s options.

**What TypeSafe has and hasn’t published.** A choice question accepts up to 255 options ([Choice](https://docs.typesafe.ai/primitives/choice.md)), far more than one email has dates. TypeSafe also has two step-by-step recipes close to this one: [Pre-parsed value extraction](https://docs.typesafe.ai/cookbooks/pre_parsed_value_extraction_cookbook.md), which finds candidates with patterns and lets Jev pick, and [Date extraction](https://docs.typesafe.ai/cookbooks/date_extraction_cookbook.md), which asks Jev for the parts of a date and works out the real date in code. We didn’t find accuracy numbers for either on claim emails, or advice on how to describe a candidate so Jev can tell it apart from its neighbors. That last part is up to you, and it matters: two options that both say “a date” give Jev nothing to choose between.

*Correction, Oct 29: the first version of this post said TypeSafe publishes no limit on how many options a choice can hold, and missed the two recipes above. Both are now fixed.*

**What that means for you.** Use something exact to find the candidates, use Jev to pick between them, and use code for anything you do with the result.

## The use case: date of loss from a first notice

**Step 1: find every date.** A small pattern catches the common formats. Keep a few words around each match, because that’s what Jev will choose between:

```python
import re

DATE = re.compile(
    r"\b(\d{1,2}/\d{1,2}(?:/\d{2,4})?|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.? \d{1,2}(?:st|nd|rd|th)?)\b"
    r"|\bthe (\d{1,2})(?:st|nd|rd|th)\b"
)

def candidates(text, width=40):
    found = []
    for m in DATE.finditer(text):
        start, end = max(0, m.start() - width), min(len(text), m.end() + width)
        found.append({"raw": m.group(0), "context": text[start:end].replace("\n", " ")})
    return found
```

For the email above, that finds “9/30,” “3/30/27,” “Oct 14,” “the 16th” and “10/23,” each with the words around it.

**Step 2: turn the candidates into options and let Jev choose.** Each option is labeled with the date and the words around it, so Jev is choosing between “Oct 14 … hit my parked car” and “the 16th … didn’t notice the dent,” not between two bare dates:

```python
def loss_date_question(found):
    options = {"none_or_unclear": "None of these is the date the loss happened, or the email doesn’t say"}
    for i, c in enumerate(found):
        options[f"d{i}"] = f"{c['raw']}, as in: “…{c['context']}…”"
    return {
        "type": "choice",
        "instructions": "Which of these is the date the damage or accident happened, "
                        "not the date it was noticed, reported or anything else?",
        "criteria": options,
    }
```

“None or unclear” goes first on purpose. Jev leans toward the first option, which our [underwriting post](/blog/underwriting-submissions-function-call/) covered, and if it leans, it should lean toward a person looking. To check that the order isn’t deciding the answer, ask a second time with the dates reversed and compare.

**Step 3: do the date math in code.** Once Jev has picked, turn the raw text into a real date and check it against the policy, which comes from your own system, not the email:

```python
from datetime import date

def check(pick, found, policy, received):
    if pick["choice"] == "none_or_unclear" or pick["confidence"] < 0.7:
        return "adjuster_confirms_date"
    loss = parse_date(found[int(pick["choice"][1:])]["raw"], received)   # "Oct 14" → 2026-10-14
    if loss is None or loss > received:
        return "adjuster_confirms_date"
    if not policy.start <= loss <= policy.end:
        return "adjuster_coverage_review"            # a person decides, never the system
    return "standard_intake"
```

`parse_date` fills in a missing year from the date the email arrived and leaves anything it can’t read as `None`. The 0.7 bar is a placeholder; set it with a test on past claims, as in our [testing post](/blog/water-claims-test-before-you-pick/).

## The result

**Expected, not measured:** for this email we’d expect the pattern to find five dates and Jev to pick Oct 14, with Oct 16 as the runner-up. The noticing date is the one most likely to pull it off course, which is why the question names it. The code turns “Oct 14” into Oct 14, 2026, finds it inside a policy that started Sept 30, and sends the claim to standard intake with the date filled in. If Jev had split its answer between the 14th and the 16th, the claim would go to an adjuster to confirm, which is what happens today for every claim.

### The example, start to finish

Here is what we expect each step to do with the email above, in order:

| Step | Who does it | What happens with this email |
| --- | --- | --- |
| 1. Email arrives | The claims inbox | The message comes in on Oct 21 from a customer whose policy runs Sept 30, 2026 to March 30, 2027. |
| 2. Find the dates | A simple pattern in code | It finds five: “9/30,” “3/30/27,” “Oct 14,” “the 16th” and “10/23,” each with the words around it. |
| 3. Build the question | Code | The five dates become five options, plus a sixth: “none of these, or the email doesn’t say.” |
| 4. Pick the date of loss | Jev | We expect it to choose “Oct 14 … hit my parked car,” with “the 16th … didn’t notice the dent” a distant second. |
| 5. Ask again, reversed | Jev | Same question with the options in the opposite order. If the pick changes, the claim goes to a person. |
| 6. Check confidence | Code | If Jev’s confidence is below the bar (0.7 here, a placeholder), a person confirms the date. |
| 7. Turn text into a date | Code | “Oct 14” becomes Oct 14, 2026, using the year the email arrived. |
| 8. Check the policy | Code | Oct 14 is after Sept 30 and before March 30, so the policy was in force. |
| 9. Route it | Code | Standard intake, with the date filled in and the sentence it came from shown beside it. |
| 10. Confirm | An adjuster or your service team | A person glances at the date and the sentence, and confirms or fixes it. Anything about coverage is their call. |

**What happens on a messier email.** Say the customer wrote “my car got hit sometime last week, I noticed it on the 16th.” The pattern finds only “the 16th,” and that’s the noticing date. The right answer isn’t among the options, so we’d expect Jev to pick “none or unclear,” and the claim goes to a person to ask the customer. That’s the system working: it says “I don’t know” instead of guessing.

**What happens near the edge of the policy.** If the email said the car was hit on Sept 28, two days before the policy started, step 8 would fail. The claim wouldn’t be denied by the system. It would go to an adjuster marked “coverage review,” with the date and the sentence on top, so a person makes that call with the facts in front of them.

We haven’t run this. When we do, we’ll publish the made-up emails, the candidates found, Jev’s picks, how often the order swap changed the answer, and the model version.

## Where it breaks

- **The pattern misses the date.** “Last Tuesday,” “the night of the storm” or “Halloween” won’t match. Then the right answer isn’t among the options, and the best Jev can do is “none or unclear.” Log those and widen the pattern, or use a generative model to propose candidates instead, as TypeSafe suggests.
- **Options that look alike.** If two candidates have nearly the same surrounding words, Jev has little to go on. Widen the context or let the adjuster decide.
- **Trusting the customer’s dates.** The date of loss in the email is what the customer says. A person still confirms it when coverage turns on it, and the policy dates always come from your own system.
- **Free text in the options.** The words around each date come from the email, so a planted sentence could ride along. Our [planted text post](/blog/claims-fast-track-text-written-to-fool-it/) covers why that matters.
- **It never decides coverage.** Jev only points at a date. Code compares it with the policy, and a person decides any question of coverage. Nothing about a customer that a law protects goes in as an input.
