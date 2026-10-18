---
title: "Six small questions instead of one big one: sorting an agency’s renewal list"
dek: "TypeSafe’s advice is to break a judgment into narrow questions and do the weighing yourself, in code. Here is what that looks like on the question every agency asks each month: which renewals need shopping first?"
kind: Worked example
readMinutes: 9
author: The Decision Layer desk
published: 2026-10-18
lastChecked: 2026-10-18
modelVersion: jev-1.13.0
episode: ep-009-renewal-list
summary:
  - "No news hook from our outlet list today, so this post leads with its topic. Recent headlines are at the end."
  - "The problem: an agency has hundreds of renewals coming up and time to remarket only some of them. The ones that need it most are buried in notices and notes."
  - "How it works: Jev answers every question in a request separately and at the same time, so extra questions cost little and don’t muddy each other. TypeSafe says to split a big judgment into factors and combine them yourself."
  - "The use case: one made-up renewal, six narrow questions in one call, numbers from the agency system, and a priority score in plain code. A person decides every remarket. The result is expected, not measured."
sources:
  - title: "TypeSafe docs: Introduction (Atomic questions, composed in code)"
    url: https://docs.typesafe.ai/introduction
    grade: Official docs
  - title: "TypeSafe docs: Questions (asking several at once)"
    url: https://docs.typesafe.ai/primitives
    grade: Official docs
  - title: "TypeSafe docs: Patterns"
    url: https://docs.typesafe.ai/patterns
    grade: Official docs
inTheNews:
  - outlet: InfoWorld
    headline: "TypeSafe’s Jev ‘even more susceptible to attack’ than LLMs, says security vendor"
    url: https://www.infoworld.com/article/4236103/typesafes-jev-even-more-susceptible-to-attack-than-llms-says-security-vendor.html
    date: 2026-10-15
  - outlet: Tom’s Hardware
    headline: "Jev-like decision models are flooding the AI market, after researcher claims TypeSafe copied their research"
    url: https://www.tomshardware.com/tech-industry/artificial-intelligence/jev-like-decision-models-are-flooding-the-ai-market-after-researcher-claims-typesafe-copied-their-research-microsoft-openai-among-companies-releasing-lightweight-system-one-ai-models
    date: 2026-10-12
  - outlet: TechCrunch
    headline: "The maker of non-text AI model Jev valued at $7.5B just weeks after launch"
    url: https://techcrunch.com/2026/10/09/the-maker-of-non-text-ai-model-jev-valued-at-7-5b-just-weeks-after-launch/
    date: 2026-10-09
---

*Ninth in our series. Earlier posts cover [the basics](/blog/what-jev-is-and-isnt/), [training](/blog/claims-intake-labels-not-essays/), [writing a single question](/blog/underwriting-submissions-function-call/), [what’s inside](/blog/agency-inbox-jev-and-its-clones/), [planted text](/blog/claims-fast-track-text-written-to-fool-it/), [pictures](/blog/claim-photos-what-jev-can-see/), [bias](/blog/subrogation-referrals-does-the-answer-wobble/) and [cost at volume](/blog/storm-surge-cost-and-speed-at-volume/). This one is about asking many questions at once and combining the answers in your own code.*

*A note on today’s news: none of the outlets on our list had a new Jev story we could verify, so this post leads with its topic. The latest headlines are at the end.*

## The problem: too many renewals, not enough time to shop them

Every month, an independent agency has a stack of commercial policies coming up for renewal. Some will renew quietly at a fair price. Others need an account manager to go back to market: the carrier raised the rate sharply, cut a coverage, or sent a non-renewal. There is time to shop maybe a third of them properly.

The information that sorts them is scattered. Some of it is in the agency management system: last year’s premium, this year’s quote, the renewal date. The rest is in words: the carrier’s renewal letter, an underwriter’s email, the account manager’s notes from the last call with the customer. Reading all of it for 400 accounts is the job nobody gets to.

The tempting shortcut is one big question: “How urgently does this account need remarketing?” This post is about why TypeSafe says not to ask that, and what to ask instead.

## How it works: separate questions, combined by you

**Each question is answered on its own.** TypeSafe’s introduction puts it in one sentence: “Every question is evaluated in parallel and in isolation against the same state in one go.” ([TypeSafe docs](https://docs.typesafe.ai/introduction)) The questions page adds: “Every answer is independent. One question’s answer is not hidden context for another.” ([Questions](https://docs.typesafe.ai/primitives)) So asking about a coverage cut can’t change the answer about a non-renewal, and adding a question doesn’t disturb the others.

**Big judgments should be split up.** The same introduction says: “If the question you want to ask would require extended reasoning or weighs multiple independent factors, decompose it.” Then: “Ask each factor as a separate question, then combine the results with logic in your code.” “How urgent is this renewal?” weighs at least five things. Asked as one question, you can’t see which of them drove the answer, and you can’t change how much each one counts. Asked as five, you can.

**Extra questions are cheap.** “There is no limit on the number of questions in a request,” the questions page says; the limit is how much text fits. It also says “Asking a question you might not need is close to free,” because you pay only for the extra question text, and the answers come back in about the same time. TypeSafe’s own cookbook reports that putting 13 questions in one call was “11.5x cheaper and 9.6x faster than 13 separate calls, with no change in the answers.” That’s TypeSafe’s measurement, not ours. (That also helps with a question our [cost post](/blog/storm-surge-cost-and-speed-at-volume/) left open: by TypeSafe’s account, an extra question adds only its own text to the bill.)

**TypeSafe names this pattern.** Its patterns page lists “Composite Scoring”: “Combine several dimensions of analysis into a single score.” ([Patterns](https://docs.typesafe.ai/patterns)) The weights are yours. Change what matters this quarter by editing a number in code, not by rewording a prompt and hoping.

**What TypeSafe doesn’t give you.** The docs don’t suggest weights or tell you how to combine probabilities from different questions. That part is ordinary business logic, and it should be, because only you know what matters to your agency.

**What that means for you.** Ask Jev about the things only a reader can judge: what a letter says, what a customer sounded like. Take numbers from your systems. Then add it up in code someone on your team can read.

## The use case: one renewal, six questions

Here is a made-up account. The agency system says the policy renews in 52 days, last year’s premium was $18,400 and the carrier’s renewal quote is $23,900. The text side looks like this:

> **Carrier renewal letter:** “We are pleased to offer renewal terms. Please note the following changes: a water damage sublimit of $25,000 now applies, and the wind/hail deductible increases to 2% of building value.”
>
> **Account manager’s note (Sept 30):** “Owner frustrated about last year’s claim handling. Mentioned a broker friend has been ‘asking to quote.’ Adding a second location in spring.”

We send both texts as labeled parts of the state and ask six narrow questions in one call. The format follows TypeSafe’s [docs](https://docs.typesafe.ai/primitives):

```python
import os
import requests

state = {
    "carrier_renewal_letter": letter_text,
    "account_manager_notes": notes_text,
}

def noul(instructions, true, false):
    return {"type": "noul", "instructions": instructions, "criteria": {"true": true, "false": false}}

questions = {
    "nonrenewal": noul(
        "Does the carrier renewal letter say the carrier will not renew the policy?",
        "The carrier is declining to renew", "The carrier is offering to renew"),
    "coverage_reduced": noul(
        "Does the carrier renewal letter add an exclusion or sublimit, or remove or reduce a coverage?",
        "Coverage is narrowed in any way", "No coverage is narrowed"),
    "deductible_raised": noul(
        "Does the carrier renewal letter raise any deductible or retention?",
        "A deductible or retention goes up", "No deductible or retention goes up"),
    "customer_unhappy": noul(
        "Do the account manager notes describe the customer as unhappy with the carrier or the agency?",
        "The customer is described as unhappy, frustrated or complaining", "No unhappiness is described"),
    "competitor_contact": noul(
        "Do the account manager notes say another agent or broker has approached the customer?",
        "Another agent or broker has approached or offered to quote", "No other agent or broker is mentioned"),
    "exposure_change": noul(
        "Do the account manager notes mention a change in the business, such as new locations, staff or operations?",
        "A change in the business is mentioned", "No change in the business is mentioned"),
}

resp = requests.post(
    "https://api.typesafe.ai/v1/systemone",
    headers={"Authorization": f"Bearer {os.environ['TYPESAFE_API_KEY']}"},
    json={"model": "jev-1.13.0", "state": state, "questions": questions},
    timeout=10,
)
a = {k: v["noul"] for k, v in resp.json()["answers"].items()}
```

Why the questions look like this:

- **Each question points at one text.** The letter questions read the letter; the customer questions read the notes. Labeling the parts of the state, as our [planted-text post](/blog/claims-fast-track-text-written-to-fool-it/) explained, is what makes that possible.
- **No numbers in the questions.** The premium change comes from the agency system, not from Jev. Counting and dates are on TypeSafe’s own list of weak spots, as our [underwriting post](/blog/underwriting-submissions-function-call/) noted, and the system already knows the answer.
- **Speculative questions are fine.** `exposure_change` won’t matter for most accounts. TypeSafe’s patterns page calls this “Speculative Fan-Out”; at close to no cost, it catches the account that’s about to add a location.

## Combining the answers in code

```python
increase = (quote - expiring) / expiring          # from the agency system: 0.30 here
days_left = (renewal_date - today).days           # 52 here

if a["nonrenewal"] > 0.5:
    priority, reason = 100, "carrier non-renewal"  # always first; a person confirms today
else:
    WEIGHTS = {"coverage_reduced": 20, "deductible_raised": 10, "customer_unhappy": 15,
               "competitor_contact": 15, "exposure_change": 5}
    priority = sum(w * a[k] for k, w in WEIGHTS.items())
    priority += min(increase, 0.5) * 60           # up to 30 points for a big rate increase
    priority += 10 if days_left < 60 else 0       # less time, more urgency
    reason = ", ".join(k for k in WEIGHTS if a[k] > 0.5) or "rate only"

worklist.append((priority, account_id, reason))
```

Three things to notice. The non-renewal check comes first and isn’t weighed against anything; some facts end the discussion. The weights are numbers you can argue about in a meeting and change in a minute. And `reason` lists which questions fired, so the account manager sees *why* an account is near the top, not just that it is.

The weights here are placeholders. To set them, take last year’s renewals, mark the ones your team actually remarketed (or wishes it had), and adjust until the score puts those near the top. Our [claims post](/blog/claims-intake-labels-not-essays/) covers checking Jev’s answers against cases where you already know the outcome; the same approach works for the weights.

## The result

**Expected, not measured:** for this account we’d expect `coverage_reduced`, `deductible_raised`, `customer_unhappy`, `competitor_contact` and `exposure_change` all to come back high, and `nonrenewal` low. With a 30% rate increase and 52 days left, the account scores near the top of the list, with a reason line that reads like a call prep note: coverage cut, deductible up, unhappy customer, broker circling, new location coming. That’s the account to shop this week.

We haven’t run this. When we do, we’ll publish the letters and notes, the answers, the weights, the cost and the model version.

## Where it breaks

- **A letter that buries the change.** Renewal terms sometimes arrive as a full policy form, not a summary letter. A long document with a changed endorsement on page 40 is harder for any reader, Jev included. Split long documents, and keep the summary letter as its own part of the state.
- **Weights that nobody revisits.** A score tuned on last year’s market can rank this year’s renewals badly. Recheck the weights against what your team actually did each quarter.
- **Adding up probabilities isn’t adding up evidence.** Two questions that ask nearly the same thing will double-count it. Keep questions about different things, or give overlapping ones smaller weights.
- **The score is a worklist, not a decision.** It decides what an account manager looks at first. Whether to remarket, what to tell the customer and which carriers to approach stay with a licensed person, and nothing about the customer that a law protects goes in as an input.
- **Notes are only as good as the note-taker.** If the account manager didn’t write down that the owner was unhappy, no question will find it.
