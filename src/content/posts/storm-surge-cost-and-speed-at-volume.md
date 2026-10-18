---
title: "Twenty thousand claims by Tuesday: what Jev costs and how fast it goes when a storm hits"
dek: "The price per decision is tiny. The harder questions at volume are how many requests you can send at once, what happens when you’re told to slow down, and where the files go if the model is unavailable. A worked plan for a storm surge."
kind: Worked example
readMinutes: 9
author: The Decision Layer desk
published: 2026-10-17
lastChecked: 2026-10-17
modelVersion: jev-1.13.0
episode: ep-008-storm-surge
summary:
  - "No news hook from our outlet list today, so this post leads with its topic. Recent headlines are at the end."
  - "The problem: after a big storm, a carrier can get a month’s worth of first notices in two days, exactly when sorting them fast matters most."
  - "How it works: you pay only for what you send in, limits are per organization in tokens and requests per second, and a refused request should be retried slowly. TypeSafe doesn’t publish the limit numbers."
  - "The use case: 20,000 made-up storm claims, a way to measure the real cost on a sample, and a worker that slows down when told to and hands files to people when it can’t get an answer. The figures are worked examples, not measurements."
sources:
  - title: "TypeSafe docs: Models (pricing, context and rate limits)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
  - title: "TypeSafe docs: API reference (usage field and rate-limit handling)"
    url: https://docs.typesafe.ai/api.md
    grade: Official docs
  - title: "TypeSafe docs: Questions (asking several at once)"
    url: https://docs.typesafe.ai/primitives
    grade: Official docs
  - title: "Vercel Community: Jev requests shed with 429 (thread started Sep 26, 2026)"
    url: https://community.vercel.com/t/typesafe-ai-jev-requests-shed-with-429-and-providerattemptcount-0-per-team-throttling/49779
    grade: Independent reporting
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

*Eighth in our series. [What Jev is, and what it isn’t](/blog/what-jev-is-and-isnt/) covers the basics, including the headline price and TypeSafe’s speed claims; later posts cover [training](/blog/claims-intake-labels-not-essays/), [writing questions](/blog/underwriting-submissions-function-call/), [what’s inside](/blog/agency-inbox-jev-and-its-clones/), [planted text](/blog/claims-fast-track-text-written-to-fool-it/), [pictures](/blog/claim-photos-what-jev-can-see/) and [bias](/blog/subrogation-referrals-does-the-answer-wobble/). This one is about running it at real volume: what it costs, how fast you can go, and what to do when you can’t.*

*A note on today’s news: none of the outlets on our list had a new Jev story we could verify, so this post leads with its topic. The latest headlines are at the end.*

## The problem: the busiest week is the worst week to slow down

A hailstorm or a hurricane can bury a claims department. A regional carrier that normally sees a few hundred new claims a day can get tens of thousands in the days after a storm. Every one needs the same first sort our [claims intake post](/blog/claims-intake-labels-not-essays/) described: what kind of loss, anyone hurt, simple or messy. And the people who usually do that sorting are the same people now on the phone with customers.

That’s the week a decision model should earn its keep. It’s also the week you find out things a pilot never tests: what it costs when the volume is fifty times normal, how fast you’re allowed to send requests, and what happens to the claims when the answer doesn’t come back.

## How it works: cheap per call, limited per second

**You pay for what you send, not what you get back.** TypeSafe’s model page puts it in two short sentences: “You pay per input token. Output tokens are free.” ([Models](https://docs.typesafe.ai/models.md)) The price is the same for jev-1.13.0 and jev-1.14.0. So the cost of a decision depends almost entirely on how much text you send with it.

**Every response tells you what it cost.** Each answer comes back with a `usage` object holding `input_tokens` and `output_tokens`. ([API reference](https://docs.typesafe.ai/api.md)) You don’t have to estimate. Send a sample, add up the `input_tokens`, and you know.

**Several questions, one bill.** TypeSafe’s [questions page](https://docs.typesafe.ai/primitives) says an extra question adds only the cost of its own text, so asking all your questions about a claim in one request is cheaper than one request per question. The API reference’s example responses still show slightly different token counts for similar requests, with no explanation. That’s another reason to measure on your own files rather than guess.

**The limit is speed, not money.** “Limits are measured in tokens per second and requests per second,” the model page says. They are set per organization, and going over returns an error, `429 Too Many Requests`. The page doesn’t list the numbers; it points you to TypeSafe’s developer console, where each organization sees its own. So nobody outside your account can tell you how fast you can go.

**When you’re told to slow down, slow down.** The API reference’s advice for a 429 is to “retry the request with exponential backoff instead of retrying immediately.” In plain terms: wait a moment, try again, and wait longer each time it fails. Hammering the API harder makes it worse.

**Limits can surprise you.** In late September, several developers reported on Vercel’s community forum that most of their Jev requests through Vercel’s AI gateway were being refused, some getting about one answer every five minutes. They were mostly on small or free plans. Vercel staff said access “may be temporarily limited for some accounts as part of safeguards that protect service reliability.” ([Vercel Community](https://community.vercel.com/t/typesafe-ai-jev-requests-shed-with-429-and-providerattemptcount-0-per-team-throttling/49779)) That was a launch-month crunch on one route to the model, not a rule. But it shows why a surge plan can’t assume the answers will always come back.

**Long notes cost more and help less.** Jev 1.14 can take much longer inputs behind an experimental switch, but the model page says long context “is slower and less accurate than staying within the default limits.” For first notices of loss, short is better anyway.

**What that means for you.** The bill for a storm will be small. The plan has to be about pace and fallback: how many requests per second your account allows, how your system behaves when it’s told to wait, and where a claim goes when there’s no answer.

## The use case: 20,000 storm claims

Here is a made-up scenario. A hailstorm crosses three counties on a Saturday. By Tuesday morning the carrier has 20,000 new first notices of loss, most of them a few sentences from a web form or a call-center note, like this one:

> “Hail broke two skylights and dented the gutters. Water came into the kitchen overnight. Nobody hurt. Insured is staying at home.”

The sort is the same four questions from our [claims intake post](/blog/claims-intake-labels-not-essays/), asked in one request per claim. We won’t repeat them here.

**Step 1: measure the cost on a sample.** Send 200 past claims and add up `input_tokens`:

```python
import os, statistics, requests

def sort_claim(text):
    resp = requests.post(
        "https://api.typesafe.ai/v1/systemone",
        headers={"Authorization": f"Bearer {os.environ['TYPESAFE_API_KEY']}"},
        json={"model": "jev-1.13.0", "state": {"fnol": text}, "questions": QUESTIONS},
        timeout=10,
    )
    resp.raise_for_status()
    body = resp.json()
    return body["answers"], body["usage"]["input_tokens"]

tokens = [sort_claim(t)[1] for t in sample_claims]   # 200 past claims
per_claim = statistics.mean(tokens)
price_per_token = 0.042 / 1_000_000                  # from TypeSafe's model page
print(f"{per_claim:.0f} tokens per claim, ${per_claim * price_per_token * 20_000:.2f} for 20,000")
```

To show the arithmetic with a made-up number: if the sample averaged 1,500 input tokens per claim, 20,000 claims would be 30 million tokens, which at TypeSafe’s listed price is about $1.26. Even if the real count is ten times that, the model is the cheapest part of the week.

**Step 2: find your pace.** Look up your organization’s limits in TypeSafe’s console. If you’re allowed, say, 20 requests per second, 20,000 claims take about 17 minutes. If you’re allowed 2, they take nearly three hours. That number, not the price, decides whether this works on Tuesday morning.

**Step 3: run it with a worker that waits and falls back.**

```python
import random, time

def sort_with_backoff(text, tries=5):
    delay = 1.0
    for _ in range(tries):
        try:
            return sort_claim(text)[0]
        except requests.HTTPError as e:
            if e.response.status_code != 429:
                break                                  # a different error: don't keep retrying
        except requests.RequestException:
            pass                                       # timeout or network trouble
        time.sleep(delay + random.random())            # wait, then wait longer next time
        delay *= 2
    return None

for claim in new_claims:
    answers = sort_with_backoff(claim.text)
    if answers is None:
        route(claim, "standard_intake")   # no answer: the normal human queue, same as before Jev
    else:
        route(claim, pick_queue(answers)) # the routing rules from the claims intake post
```

Two things matter in this worker. It never retries instantly, and the random extra wait keeps many workers from all retrying at the same moment. And a claim that can’t get an answer isn’t stuck: it goes where it would have gone before you had Jev.

## The result

**Expected, not measured:** the model bill for the surge should be a few dollars, not thousands. The time to sort all 20,000 depends on your account’s limits, from minutes to a few hours. Claims that hit errors land in the normal intake queue, so the worst case is the week you would have had anyway, not a pile of claims stuck in a retry loop.

The figures above are arithmetic on made-up inputs. We haven’t run 20,000 claims. When we run a volume test, we’ll publish the token counts, the timing, the errors we hit, the cost and the model version.

## Where it breaks

- **Rate limits you haven’t checked.** The price is public; your limits aren’t. Check them in the console before storm season, and ask TypeSafe about raising them in advance rather than during the storm.
- **A fallback nobody staffs.** Sending unanswered claims to the normal queue only works if that queue still has people. The model speeds up the sort; it doesn’t replace the team.
- **Counting cost by guesswork.** Use the `usage` field on a real sample. Long notes, attachments turned into text, and pictures (in [1.14](/blog/claim-photos-what-jev-can-see/)) all change the count.
- **Retrying the wrong errors.** Retry on 429 and timeouts. A malformed request will fail the same way every time, so log it and send the claim to a person.
- **Pausing for an outage, not just a limit.** If the model is down for hours, the worker should stop asking and route everything to standard intake until it’s back. A circuit breaker (stop after many failures in a row, try again later) is a few lines of code.
- **It never pays or denies.** At any volume, Jev only suggests a queue. People handle every claim, and nothing about a customer that a law protects goes in as an input.
