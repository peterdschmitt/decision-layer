---
title: "The customer is waiting on the next screen: using Jev while someone watches"
dek: "Most posts in this series sort work in the background. This one puts Jev inside an online claim form, where a person is waiting for the answer. Independent tests say Jev is usually fast. The slow calls are the ones to plan for."
kind: Worked example
readMinutes: 8
author: The Decision Layer desk
published: 2026-10-23
lastChecked: 2026-10-23
modelVersion: jev-1.13.0
episode: ep-014-claim-form-speed
summary:
  - "No outlet on our list had a new Jev story we could verify today, so the post starts with its topic. Recent headlines are at the end."
  - "The problem: an online claim form that picks the next screen from what the customer wrote can’t leave them staring at a spinner."
  - "How it works: two independent tests put Jev’s typical answer well under a quarter of a second and its slowest at up to about 1.6 seconds. TypeSafe publishes no latency guarantee and no timeout advice."
  - "The use case: a time budget for each call, a safe screen to show when the answer is late, and a way to measure your own slow calls. The result is expected, not measured."
sources:
  - title: "OpenRouter: Is Jev as Accurate as Frontier Models at Classification? (Sep 22, updated Oct 16, 2026)"
    url: https://openrouter.ai/blog/insights/jev-vs-claude-opus-5-classification/
    grade: Independent reporting
  - title: "LiteLLM: JEV Classifier: 5.43x as Fast as Haiku, 96% Lower Cost (Sep 20, 2026)"
    url: https://docs.litellm.ai/blog/jev-auto-router-benchmark
    grade: Independent reporting
  - title: "TypeSafe docs: Introduction"
    url: https://docs.typesafe.ai/introduction
    grade: Official docs
  - title: "TypeSafe docs: API reference"
    url: https://docs.typesafe.ai/api.md
    grade: Official docs
inTheNews:
  - outlet: TechCrunch
    headline: "Jev is Vercel’s fastest-adopted AI model ever"
    url: https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/
    date: 2026-10-16
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

*Fourteenth in our series. Earlier posts cover [the basics](/blog/what-jev-is-and-isnt/), [training](/blog/claims-intake-labels-not-essays/), [writing a question](/blog/underwriting-submissions-function-call/), [the service inbox](/blog/agency-inbox-jev-and-its-clones/), [planted text](/blog/claims-fast-track-text-written-to-fool-it/), [pictures](/blog/claim-photos-what-jev-can-see/), [bias](/blog/subrogation-referrals-does-the-answer-wobble/), [cost at volume](/blog/storm-surge-cost-and-speed-at-volume/), [many questions at once](/blog/agency-renewals-many-small-questions/), [what goes in the state](/blog/coi-requests-what-to-send-jev/), [long inputs](/blog/subcontract-long-context-or-split/), [new versions](/blog/claims-routing-when-jev-updates/) and [other languages](/blog/agency-inbox-spanish-emails/). This one is about speed when a person is waiting on the answer.*

*A note on today’s news: we didn’t find a new Jev story we could verify from the outlets on our list, so this post starts with its topic. The latest headlines are at the end.*

## The problem: a spinner in the middle of a bad day

Every claims example so far in this series has run in the background. A first notice of loss arrives, Jev sorts it, and a person picks it up later. A second or two makes no difference there, and our [storm post](/blog/storm-surge-cost-and-speed-at-volume/) covered what to do when answers don’t come back at all.

An online claim form is different. A customer types what happened (“backed into a pole in the parking lot, rear bumper cracked, nobody hurt”) and taps Next. A good form shows only the screens that matter: questions about injuries if someone was hurt, about the other driver if there was one, a photo upload if there’s visible damage. Jev could make that choice from the description. But now someone is watching the screen while it decides, often on a phone, often upset.

The question isn’t whether Jev is fast on average. It’s what the customer sees on the slowest call of the day.

## How it works: fast usually, and the tail is what you design for

**TypeSafe sells speed but publishes no guarantee.** Our [basics post](/blog/what-jev-is-and-isnt/) covered TypeSafe’s own speed claim. Its introduction adds one useful detail: “Adding questions barely changes the response time,” because the questions are answered in parallel, as our [renewals post](/blog/agency-renewals-many-small-questions/) explained. ([TypeSafe docs](https://docs.typesafe.ai/introduction)) But we found no latency guarantee, no advice on timeouts and no list of regions in the API reference. Its response has no timing field either. ([API reference](https://docs.typesafe.ai/api.md))

**Two independent tests give real numbers.** OpenRouter ran 3,080 banking-support messages through Jev 1.13 and Claude Opus 5, eight at a time, and timed the full round trip through its service. “Jev’s median round trip was 175 ms and p95 was 270 ms.” The p95 is the time 95 out of 100 calls beat. Its table puts the p99 at 353 ms. And the slowest calls stretch further: “That means the slowest Jev call (~1.6s) was faster than the fastest Opus call (~1.9s).” OpenRouter notes the times “include network time and any queueing in the provider’s system before the actual inference.” ([OpenRouter](https://openrouter.ai/blog/insights/jev-vs-claude-opus-5-classification/))

LiteLLM, which makes an open-source tool for routing between AI models, ran a smaller test: 240 calls, one at a time, with a median of 126.81 ms and a slowest call of 401.26 ms. It is careful about the limits: “These ratios measure classification time, not end-to-end completion speed or throughput under load.” And: “They do not cover author bias, another region, sustained load, rate limits, cold starts or another account.” ([LiteLLM](https://docs.litellm.ai/blog/jev-auto-router-benchmark))

**What the numbers mean for a form.** A typical answer is quick enough that a customer wouldn’t notice. One call in a hundred takes a third of a second or more, and the worst ones in a large test took over a second and a half. Neither test was run from your servers, in your region, on your account, at your busiest hour, with your text. Those are the numbers you need, and only you can measure them.

**What that means for you.** Give every live call a time budget, decide in advance what the customer sees when the answer is late, and make that fallback safe rather than clever.

## The use case: choosing the next screen in a claim form

Here is a made-up auto claim form. After the description, Jev answers four yes/no questions in one call. The form waits at most 600 milliseconds for them:

```python
import os, time, requests

URL = "https://api.typesafe.ai/v1/systemone"
HEADERS = {"Authorization": f"Bearer {os.environ['TYPESAFE_API_KEY']}"}
BUDGET_SECONDS = 0.6                       # our choice; set it from your own measurements

def noul(instructions, true, false):
    return {"type": "noul", "instructions": instructions, "criteria": {"true": true, "false": false}}

QUESTIONS = {
    "someone_hurt": noul("Does the description say or suggest anyone was hurt, sore or saw a doctor?",
                         "Someone may be hurt", "No one is described as hurt"),
    "other_vehicle": noul("Does the description involve another vehicle or driver?",
                          "Another vehicle or driver is involved", "Only the customer’s vehicle"),
    "visible_damage": noul("Does the description mention visible damage to a vehicle or property?",
                           "Visible damage is described", "No visible damage is described"),
    "drivable": noul("Does the description say the customer’s vehicle can still be driven?",
                     "The vehicle is described as drivable", "Not drivable, or not said"),
}

ALL_SCREENS = ["injuries", "other_driver", "photos", "towing"]

def next_screens(description):
    start = time.monotonic()
    try:
        resp = requests.post(URL, headers=HEADERS, timeout=BUDGET_SECONDS, json={
            "model": "jev-1.13.0", "state": {"loss_description": description}, "questions": QUESTIONS,
        })
        resp.raise_for_status()
        a = {k: v["noul"] for k, v in resp.json()["answers"].items()}
    except requests.RequestException:
        log_latency(time.monotonic() - start, timed_out=True)
        return ALL_SCREENS                  # late or failed: ask everything, the way the form used to
    log_latency(time.monotonic() - start, timed_out=False)

    screens = []
    if a["someone_hurt"] > 0.2:   screens.append("injuries")      # low bar: better to ask
    if a["other_vehicle"] > 0.5:  screens.append("other_driver")
    if a["visible_damage"] > 0.5: screens.append("photos")
    if a["drivable"] < 0.5:       screens.append("towing")
    return screens
```

Four choices in there carry the design:

- **The budget is a number you set.** 600 milliseconds is a placeholder. Set it from your own slow calls and from how long your form can pause before it feels broken.
- **Late means “ask everything.”** The fallback is the long version of the form, the one you had before Jev. A customer who waited too long sees a few extra screens, never a missing one.
- **No retries while someone waits.** Our [storm post](/blog/storm-surge-cost-and-speed-at-volume/) retries with growing pauses, which is right in the background and wrong here. One try, then the fallback.
- **The injury screen has a low bar.** Showing it when it wasn’t needed costs the customer one tap. Hiding it when it was needed costs far more.

**Measure your own tail.** `log_latency` keeps every call’s time. After a week, look at the median, the p95, the p99, the slowest call, and how often the fallback fired. If the fallback fires more than you’re comfortable with, the fix is usually starting the call earlier (when the customer leaves the description box, not when they tap Next), not a longer wait.

## The result

**Expected, not measured:** for the parking-lot example we’d expect `someone_hurt` and `other_vehicle` to come back low, `visible_damage` high and `drivable` high, so the customer sees only the photo screen. On most calls, going by the independent tests, the answer should arrive well inside the budget. On the few that don’t, the customer sees the full form instead, which is no worse than today.

We haven’t run this. When we do, we’ll publish the made-up descriptions, the screens chosen, our own latency numbers (median, p95, p99 and slowest), how often the fallback fired, the region and the model version.

## Where it breaks

- **Numbers from someone else’s setup.** Both tests ran from other people’s machines, at other times, on other accounts. Your region and your busiest hour can look very different. Measure before you set the budget.
- **Rate limits during a storm.** A live form and a background sorter share your organization’s limits. On the day a storm hits, the background work can slow down the live form. Keep the live calls on a separate budget, or pause the background work.
- **A fallback that isn’t safe.** If “late” meant skipping screens instead of showing all of them, every slow call would lose information. Make the late path the conservative one.
- **Watching only the average.** A 150-millisecond median can hide a 1.5-second worst case. Track the tail and the fallback rate, not just the middle.
- **It never decides the claim.** Jev only picks which questions the form asks next. Every claim still goes to a person, and nothing about the customer that a law protects goes in as an input.
