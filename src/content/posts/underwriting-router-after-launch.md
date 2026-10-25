---
title: "Three months after launch: how to tell if your Jev router is still right"
dek: "Testing before launch tells you how Jev did on last year’s files. It says nothing about the broker who changes templates in March. Here is what Jev’s confidence can and can’t tell you, and a worked plan for watching an underwriting submission router once it’s live."
kind: Worked example
readMinutes: 8
author: The Decision Layer desk
published: 2026-10-25
lastChecked: 2026-10-25
modelVersion: jev-1.13.0
episode: ep-016-after-launch
summary:
  - "No outlet on our list had a new Jev story we could verify today, so the post starts with its topic. Recent headlines are at the end."
  - "The problem: a submission router that tested well can drift as brokers, business mix and model versions change, and nothing raises an error when it does."
  - "How it works: an independent test found Jev’s confidence ranks answers well but isn’t a calibrated probability, overstating accuracy in the middle. TypeSafe’s docs say to adjust thresholds as you observe results, and say nothing about monitoring."
  - "The use case: log every answer, check a small sample by hand each week by confidence band, and watch a few numbers that move before accuracy does. The result is expected, not measured."
sources:
  - title: "OpenRouter: Is Jev as Accurate as Frontier Models at Classification? (Sep 22, updated Oct 16, 2026)"
    url: https://openrouter.ai/blog/insights/jev-vs-claude-opus-5-classification/
    grade: Independent reporting
  - title: "TypeSafe docs: Confidence"
    url: https://docs.typesafe.ai/confidence.md
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

*Sixteenth in our series. Earlier posts cover [the basics](/blog/what-jev-is-and-isnt/), [training](/blog/claims-intake-labels-not-essays/), [writing a question](/blog/underwriting-submissions-function-call/), [the service inbox](/blog/agency-inbox-jev-and-its-clones/), [planted text](/blog/claims-fast-track-text-written-to-fool-it/), [pictures](/blog/claim-photos-what-jev-can-see/), [bias](/blog/subrogation-referrals-does-the-answer-wobble/), [cost at volume](/blog/storm-surge-cost-and-speed-at-volume/), [many questions at once](/blog/agency-renewals-many-small-questions/), [what goes in the state](/blog/coi-requests-what-to-send-jev/), [long inputs](/blog/subcontract-long-context-or-split/), [new versions](/blog/claims-routing-when-jev-updates/), [other languages](/blog/agency-inbox-spanish-emails/), [speed](/blog/online-claim-form-speed-budget/) and [data handling](/blog/claim-notes-what-leaves-the-building/). This one is about what happens after launch.*

*A note on today’s news: we didn’t find a new Jev story we could verify from the outlets on our list, so this post starts with its topic. The latest headlines are at the end.*

## The problem: it worked in testing, and then the inputs changed

Our [underwriting post](/blog/underwriting-submissions-function-call/) built a router for an agency’s commercial submissions. Jev picks a business class from the broker’s description, flags hazardous work and prior losses, and sends the file to the right carriers. If the class pick is unclear or its confidence is below 0.6, an account manager reviews it first.

Say the agency tested that on last year’s submissions, set the thresholds, and launched in July. By October, a few things have changed without anyone deciding to change them:

- A large wholesale broker switched to a new intake form, and its descriptions got shorter.
- The agency started writing more food trucks, which don’t fit neatly into “restaurant” or “retail.”
- Someone updated the code to a newer model version.

None of that produces an error. The router keeps sending files to carriers. The only sign is that a few more go to the wrong place, and a carrier’s underwriter is usually the first to notice.

## How it works: confidence ranks well, but it isn’t a promise

**A high confidence usually means a right answer.** OpenRouter tested Jev 1.13 on 3,080 banking-support messages and looked at how its confidence lined up with accuracy. For the 58% of messages Jev scored at 0.99 or above, it was right 96.3% of the time. For the 3.5% it scored below 0.5, it was right 29.6% of the time. “So Jev usually knows when it’s just guessing.” ([OpenRouter](https://openrouter.ai/blog/insights/jev-vs-claude-opus-5-classification/))

**But the number in the middle isn’t a percentage.** The same test is blunt: “Jev gives you a confidence score, but it’s not a calibrated probability.” And: “Here, it overestimated its own accuracy mid-range.” In plain terms, an answer at 0.7 is less likely to be right than 70%. Our [training post](/blog/claims-intake-labels-not-essays/) covered what TypeSafe says about calibration; this is one outside test on one kind of text, but it’s a reason to check rather than trust.

**TypeSafe says to keep adjusting.** Its confidence docs advise: “Start with conservative thresholds, test with your own data, and adjust as you observe results.” And when confidence is low: “Route to a human, request clarification, or fall back to a different system.” ([TypeSafe docs](https://docs.typesafe.ai/confidence.md))

**What TypeSafe hasn’t published.** We found nothing in the docs about monitoring answers once a system is live: no guidance on drift, on how often to re-check thresholds, or on what to watch. “Adjust as you observe results” assumes you’re observing. That part is up to you.

**What that means for you.** Confidence is a good signal for which answers to look at, not a measure of how many are right. To know how many are right, someone has to check.

## The use case: a weekly check that takes an hour

**Step 1: log every answer.** For each submission, keep the class Jev picked, its confidence, the flags, the queue, the `model` field from the response (our [versions post](/blog/claims-routing-when-jev-updates/) explains why), the broker and the date. Most agencies can put this in a table next to the submission record.

**Step 2: check a small sample by hand, by confidence band.** Each week, pull a few submissions from each band and have an account manager mark whether the class was right:

```python
import random
from collections import defaultdict

BANDS = [(0.99, 1.01), (0.9, 0.99), (0.6, 0.9), (0.0, 0.6)]   # the last band already goes to review

def weekly_sample(log, per_band=10):
    picked = []
    for low, high in BANDS:
        in_band = [r for r in log if low <= r.confidence < high]
        picked += random.sample(in_band, min(per_band, len(in_band)))
    return picked                            # an account manager marks each one right or wrong

def accuracy_by_band(checked):
    right, total = defaultdict(int), defaultdict(int)
    for r in checked:
        band = next(b for b in BANDS if b[0] <= r.confidence < b[1])
        total[band] += 1
        right[band] += r.marked_right
    return {band: right[band] / total[band] for band in total}
```

Forty files a week is about an hour of an account manager’s time. Over a month, that’s enough to see whether the 0.6 to 0.9 band is still mostly right, which is the band where an outside test says confidence overstates accuracy.

**Step 3: watch the numbers that move first.** Accuracy needs a person to check. These need only the log, and they tend to move before accuracy does:

- **The share of submissions going to review.** If it jumps from 12% to 25%, something changed in the inputs.
- **The mix of classes Jev picks.** A sudden rise in “other or unclear” or a class you rarely write is worth a look.
- **Each of those by broker.** A change at one broker shows up as one line moving while the rest stay flat.
- **The `model` field.** If it changed and nobody planned it, start there.

**Step 4: decide what a change means.** When a number moves, read ten of the affected submissions. Usually the cause is obvious: a new template, a new kind of business, a version change. Sometimes the fix is a new class option, sometimes a threshold, sometimes a word to the broker. Write down what you changed and when, so next quarter’s numbers make sense.

## The result

**Expected, not measured:** in this made-up agency, we’d expect the weekly check to show the review share rising for the wholesale broker within a couple of weeks of its form change, and food trucks showing up as a cluster of mid-confidence “restaurant” picks that account managers mark wrong. Both are caught by the agency’s own staff in a scheduled hour, rather than by a carrier’s underwriter months later. The fix for food trucks is probably a new class option, and the next week’s sample shows whether it worked.

We haven’t run this. When we do, we’ll publish the made-up submissions, the weekly numbers, what changed and the model version.

## Where it breaks

- **Checking only the confident answers.** If the sample only comes from the top band, it will look great. Sample every band, including the ones that already go to review.
- **A sample too small to mean anything.** Ten files in a band is a smoke detector, not a measurement. Look at a month together before moving a threshold.
- **Nobody owns the check.** A weekly task with no owner stops by the third week. Put a name on it.
- **Treating outside numbers as yours.** The OpenRouter figures come from banking-support messages, not insurance submissions. Your bands may behave differently, which is the reason to check them.
- **Changing two things at once.** If you add a class and move a threshold in the same week, you won’t know which one helped.
- **It never binds coverage.** Jev suggests where a submission goes. A licensed person decides what to quote and with whom, and nothing about a customer that a law protects goes in as an input.
