---
title: "Jev 1.14 is about to become the default. Check your claims routing before it does"
dek: "TypeSafe said its stable alias would move to the new version a week after launch. If your code asks for jev-latest, your answers can change overnight with no change on your side. Here is how versions work and a worked plan for upgrading a claims intake router on purpose."
kind: Worked example
readMinutes: 8
author: The Decision Layer desk
published: 2026-10-21
lastChecked: 2026-10-21
modelVersion: jev-1.13.0
episode: ep-012-version-upgrade
summary:
  - "Today none of the outlets on our list had a new Jev story we could verify, so the post starts with its topic: a scheduled change from TypeSafe itself. Recent headlines are at the end."
  - "The problem: a claims router whose thresholds were set on one version of Jev can quietly start sending claims to different queues when the version changes."
  - "How it works: jev-latest and jev-preview are names that move; versioned IDs like jev-1.13.0 don’t. TypeSafe says to pin the version if you tuned thresholds, and every response says which version answered."
  - "The use case: replay 500 past claims through both versions, see which claims change queues, re-check the thresholds, then switch. The result is expected, not measured."
sources:
  - title: "TypeSafe docs: Models (versions and aliases)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
  - title: "TypeSafe blog: Jev 1.14 announcement (Oct 14, 2026)"
    url: https://typesafe.ai/blog/jev-1-14
    grade: Vendor claim
inTheNews:
  - outlet: TechCrunch
    headline: "Jev is Vercel’s fastest-adopted AI model ever"
    url: https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/
    date: 2026-10-16
  - outlet: InfoWorld
    headline: "TypeSafe’s Jev ‘even more susceptible to attack’ than LLMs, says security vendor"
    url: https://www.infoworld.com/article/4236103/typesafes-jev-even-more-susceptible-to-attack-than-llms-says-security-vendor.html
    date: 2026-10-15
  - outlet: Tom’s Hardware
    headline: "Jev-like decision models are flooding the AI market, after researcher claims TypeSafe copied their research"
    url: https://www.tomshardware.com/tech-industry/artificial-intelligence/jev-like-decision-models-are-flooding-the-ai-market-after-researcher-claims-typesafe-copied-their-research-microsoft-openai-among-companies-releasing-lightweight-system-one-ai-models
    date: 2026-10-12
  - outlet: Bloomberg
    headline: "Andreessen Horowitz Backs Jev Maker at $7.5 Billion Value"
    url: https://www.bloomberg.com/news/articles/2026-10-09/andreessen-horowitz-backs-jev-maker-at-7-5-billion-value
    date: 2026-10-09
---

*Twelfth in our series. Earlier posts cover [the basics](/blog/what-jev-is-and-isnt/), [training](/blog/claims-intake-labels-not-essays/), [writing a question](/blog/underwriting-submissions-function-call/), [what’s inside](/blog/agency-inbox-jev-and-its-clones/), [planted text](/blog/claims-fast-track-text-written-to-fool-it/), [pictures](/blog/claim-photos-what-jev-can-see/), [bias](/blog/subrogation-referrals-does-the-answer-wobble/), [cost at volume](/blog/storm-surge-cost-and-speed-at-volume/), [many questions at once](/blog/agency-renewals-many-small-questions/), [what goes in the state](/blog/coi-requests-what-to-send-jev/) and [long inputs](/blog/subcontract-long-context-or-split/). This one is about what happens to all of that when TypeSafe ships a new version.*

*A note on today’s news: we didn’t find a new Jev story we could verify from the outlets on our list. The timely item today comes from TypeSafe itself, and the latest headlines are at the end.*

## The problem: the same claim, a different queue

Our [claims intake post](/blog/claims-intake-labels-not-essays/) built a router for first notices of loss. Jev answers four questions about each report, and plain code sends the claim to a queue: injury review if the injury answer is above 0.2, manual triage if Jev isn’t sure what kind of loss it is, a glass fast track if it’s clearly simple. That post also explained how to set those numbers by checking Jev against past claims where you know the answer.

Those numbers were set against one version of Jev. If the version changes, the probabilities it returns can shift a little. A report that scored 0.24 for injury might score 0.18. Nothing breaks and no error appears. The claim simply goes to a different queue, and nobody notices until someone asks why a sore neck ended up in the glass line.

## How it works: names that move and names that don’t

**There are two kinds of model names.** TypeSafe’s model page lists versioned IDs, `jev-1.13.0` and `jev-1.14.0`, which always mean the same model. It also lists two aliases. `jev-latest` is “The most recent stable, official release,” and it’s the default in TypeSafe’s client libraries. `jev-preview` is “The most recent release, official or not.” ([Models](https://docs.typesafe.ai/models.md))

**Aliases move on their own.** The page is plain about what that means: “An alias moves when a new release ships, so its answers can change without any change to your code.” When we checked on Oct 21, `jev-latest` still pointed to 1.13.0 and `jev-preview` to 1.14.0.

**The move is scheduled.** TypeSafe’s 1.14 announcement, dated Oct 14, says: “jev-latest will be updated to jev-1.14.0 in a week.” ([TypeSafe blog](https://typesafe.ai/blog/jev-1-14)) That puts the switch around now. If your code sends `jev-latest`, or uses a client library without setting a model, you will get 1.14 when it happens.

**TypeSafe says to pin if you’ve tuned anything.** “If you have tuned confidence thresholds against one version, send that version’s ID instead of the alias, and switch to the new version when you are ready.” Every code sample in this series sends `jev-1.13.0` for that reason.

**Every response says who answered.** “Each response’s `model` field gives the versioned ID that answered, so you can log which model produced each result.” Store it next to every decision. When someone asks in six months why a claim went where it did, the version is part of the answer.

**What TypeSafe says changed, and what it hasn’t published.** The announcement calls 1.14 “Not meant to be flashy but instead be small, subtle improvements to everything,” and adds: “Most things should be a tiny bit better, but we expect the largest gain in multi-lingual support.” Its charts come with a fair warning: “This measurement is our best guess and will continue to evolve.” We found no list of which kinds of questions got better or worse, no 1.14 version of the [jaggedness page](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md) that lists 1.13’s weak spots, and no published retirement policy saying how long 1.13 will stay available. So “a tiny bit better” on average can still mean different on your claims.

**What that means for you.** Pin the version, log the version, and treat an upgrade like any other change to a claims process: test it on known cases before it touches live claims.

## The use case: an upgrade you choose, not one that happens to you

Here is a made-up carrier running the router from our claims post on `jev-1.13.0`. It has 500 past first notices of loss with a known right queue for each, the same set it used to set its thresholds. Before switching, it replays all 500 through both versions:

```python
import os, requests
from collections import Counter

URL = "https://api.typesafe.ai/v1/systemone"
HEADERS = {"Authorization": f"Bearer {os.environ['TYPESAFE_API_KEY']}"}

def ask(model, report):
    resp = requests.post(URL, headers=HEADERS, timeout=10, json={
        "model": model, "state": {"fnol": report}, "questions": QUESTIONS,
    })
    resp.raise_for_status()
    body = resp.json()
    return body["model"], body["answers"]         # log which version really answered

changes, misses = [], Counter()
for case in past_claims:                           # 500 claims with a known right queue
    _, old = ask("jev-1.13.0", case.text)
    served, new = ask("jev-1.14.0", case.text)
    q_old, q_new = route(old), route(new)          # the routing code from the claims post
    if q_old != q_new:
        changes.append((case.id, q_old, q_new, served))
    misses["1.13"] += q_old != case.right_queue
    misses["1.14"] += q_new != case.right_queue

print(len(changes), "claims change queues;", dict(misses))
```

Three things to look at in what comes back:

- **Which way the changes go.** A claim moving from standard handling into injury review costs an adjuster a few minutes. A claim moving out of injury review is the dangerous direction. Read every one of those by hand.
- **Whether the thresholds still sit in the right place.** Repeat the count from the claims post on the new version: of the reports Jev scores between 0.2 and 0.3 for injury, how many really mention one? If the answers shifted, move the number before you switch, not after.
- **The total misses for each version.** If 1.14 misses fewer claims on your own cases, that’s your reason to upgrade. If it misses more, stay on 1.13 and tell TypeSafe what you found.

Then switch with a one-line change from `jev-1.13.0` to `jev-1.14.0`, on a day you choose, with the new thresholds alongside it.

## The result

**Expected, not measured:** given TypeSafe’s description of small, general improvements, we’d expect most of the 500 claims to land in the same queue on both versions, with a handful moving near the thresholds. The point of the replay isn’t the average. It’s finding those few claims, reading them, and deciding before they’re live claims. The cost is small: 1,000 short requests, a fraction of a dollar at TypeSafe’s listed price (our [cost post](/blog/storm-surge-cost-and-speed-at-volume/) shows the arithmetic).

We haven’t run this comparison. When we do, we’ll publish the made-up claims, both versions’ answers, the queue changes and the date.

## Where it breaks

- **Code that never names a model.** If you use a client library and never set the model, you’re on `jev-latest` whether you meant to be or not. Search your code for it.
- **A test set nobody kept.** The replay only works if you saved the past claims and their right answers when you set the thresholds. Our [inbox post](/blog/agency-inbox-jev-and-its-clones/) made the same point about switching to a clone: the test set is the thing you keep.
- **Pinning forever.** A pinned version won’t pick up fixes, and TypeSafe hasn’t said how long old versions stay available. Put a review on the calendar for each new release.
- **Logging the alias instead of the answer.** Log the `model` field from the response, not the name you sent. They differ whenever you send an alias.
- **It never decides a claim.** On any version, Jev only suggests a queue. People handle every claim, and nothing about a customer that a law protects goes in as an input.
