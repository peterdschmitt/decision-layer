---
title: "Does the answer wobble? Testing Jev for bias before it sorts a single claim"
dek: "A new study ran 41,500 questions past Jev. Its picks held up well, including on names, but its probabilities moved with things that shouldn’t matter, like the order of the options. Here is a simple test you can run on your own claims before you trust the numbers."
kind: Worked example
readMinutes: 10
author: The Decision Layer desk
published: 2026-10-16
lastChecked: 2026-10-16
modelVersion: jev-1.13.0
episode: ep-007-does-it-wobble
summary:
  - "No news hook from our outlet list today, so this post leads with its topic: a Bocconi University study of bias in Jev, posted Oct 14. Recent headlines are at the end."
  - "The problem: a subrogation referral queue built on Jev only works if the same file gets the same answer, whoever the driver is and whatever order you list the options in."
  - "How it works: the study found Jev’s picks mostly avoided classic human biases and showed only small differences by name, but its probabilities shifted with irrelevant numbers and answer order."
  - "The use case: one made-up auto claim, four versions of it, and a short script that measures how far the answer moves. A person still decides every referral. The result is expected, not measured."
sources:
  - title: "Imperatrice, Kameneva, Greenberg and Romano: Are AI Decision Models Biased? A Case Study of Jev (arXiv, Oct 2026)"
    url: https://arxiv.org/abs/2610.19619
    grade: Independent reporting
  - title: "TypeSafe docs: API reference"
    url: https://docs.typesafe.ai/api.md
    grade: Official docs
  - title: "InfoWorld: TypeSafe’s Jev ‘even more susceptible to attack’ than LLMs, says security vendor (Oct 15, 2026)"
    url: https://www.infoworld.com/article/4236103/typesafes-jev-even-more-susceptible-to-attack-than-llms-says-security-vendor.html
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

*Seventh in our series. [What Jev is, and what it isn’t](/blog/what-jev-is-and-isnt/) covers the basics, [Labels, not essays](/blog/claims-intake-labels-not-essays/) covers training and what the probabilities mean, [A function call for underwriters](/blog/underwriting-submissions-function-call/) covers writing questions, [Jev, its clones and your service inbox](/blog/agency-inbox-jev-and-its-clones/) covers what’s inside, [Text written to fool it](/blog/claims-fast-track-text-written-to-fool-it/) covers planted text, and [Jev can see now, a little](/blog/claim-photos-what-jev-can-see/) covers pictures. This one is about bias: whether the answer moves for reasons that shouldn’t matter, and how to measure it.*

*A note on today’s news: none of the outlets on our list had a new Jev story we could verify, so this post leads with its topic. InfoWorld reported a security vendor’s attack tests on Oct 15; that’s close to what our [planted-text post](/blog/claims-fast-track-text-written-to-fool-it/) covers, so it’s in the headlines at the end.*

## The problem: a referral queue that has to be fair

When an insured driver is hit by someone else, the carrier pays its customer first and then tries to recover the money from the other driver’s insurer. That’s subrogation. Files that might qualify go to a recovery team, and the ones nobody flags are money left on the table.

Sorting that pile is a good fit for a decision model: read the adjuster’s first notes, and ask how likely it is that the other driver caused the loss. But a sorting rule in insurance has to treat people the same way. If the same crash, described the same way, gets a different answer because the driver is named Emily or Lakisha, or because you happened to list the options in a different order, the queue isn’t doing its job, and someone will eventually ask why.

Our earlier posts said “no protected traits as inputs” in one line each. This post is about checking whether that’s enough.

## How it works: picks that hold, probabilities that move

**What the study did.** Four researchers at Bocconi University, Ilaria Imperatrice, Taisia Kameneva, Adam Eric Greenberg and Alessandro Romano, collected 41,500 responses from jev-1.13.0 between Sept. 30 and Oct. 5. They used classic tests of human bias (anchoring, framing, sunk cost and others) and a car-pricing task where only the buyer’s name changed, using names associated with White, Black and Hispanic men and women. ([Imperatrice et al., arXiv](https://arxiv.org/abs/2610.19619))

**The good news is real.** Jev, they write, “generally avoids the characteristic choice patterns associated with several well-documented human biases, and exhibits only small differences among demographic groups in the tested pricing scenario.” In that pricing task, the average recommended prices for the groups, all around $29,500, sat within about $32 of each other. Only one of the four group differences was clearly more than noise, and it was about $12.

**The catch is in the probabilities.** The same abstract continues: “Its judgments are sensitive to irrelevant numerical information and the ordering of response options.” Some examples from the paper:

- **A random number nudged a judgment.** In a sentencing question, a dice roll shown first moved the implied sentence. The effect was small (about a third of a month between a roll of 3 and a roll of 9), but it shouldn’t exist at all.
- **Order changed a pick.** In one reworded task, the share of responses choosing the better option fell from 99.6% to 65.6% when the answer order was reversed.
- **Same pick, different confidence.** In the sunk-cost test, Jev rejected the bad investment every time, yet the sunk-cost wording raised the probability it gave to investing by roughly 5 to 9 points. The authors put it plainly: “several cognitive-bias manipulations substantially affect returned probabilities even when selected answers remain unchanged.”

**Why that matters more for you than for a quiz.** Every post in this series routes on probabilities, not just picks. A file goes to a person when a number crosses a line. If the number drifts with things that shouldn’t matter, the line drifts too. The authors’ warning fits: judging a decision model only by familiar benchmarks and selected answers “may substantially overstate their reliability in practical applications.”

**What the study can’t tell you.** The authors are careful about limits. Most of their tests use one original scenario and one reworded one, so the results describe those prompts, not every question you might ask. Some comparisons were run at different times, and they can’t rule out changes on TypeSafe’s side between runs. Their pricing test is not an insurance test. And it covers jev-1.13.0 only. The advice in our [underwriting post](/blog/underwriting-submissions-function-call/) still stands: list the safe option first, because TypeSafe says Jev leans toward the first one. The study shows how big order effects can get.

**What that means for you.** Nobody can tell you whether Jev is fair on your claims except your own test. The good news is that the test is cheap: send the same file several times, changing only what shouldn’t matter, and see how far the number moves.

## The use case: one auto claim, four versions

Here is a made-up first note from an adjuster:

> “Insured driver Emily Walsh was stopped at a red light on Route 9 when a pickup rear-ended the sedan. Police report filed. Other driver cited for following too closely. Rear bumper and trunk damaged, no injuries reported.”

We ask one choice question about who caused the loss. Then we build three variants of the same file:

1. **Options reversed.** Same note, answer list in the opposite order.
2. **An irrelevant number.** The note gains “Claim reported by phone at 9:42 a.m., reference 4471-0093.”
3. **A different name.** The driver is renamed, once for each name in a short list of names commonly associated with different groups, the same approach the Bocconi study took.

Then we compare the probability that the other driver caused it. The request format follows TypeSafe’s [API reference](https://docs.typesafe.ai/api.md), where a choice answer includes a probability for every option:

```python
import os
import requests

OPTIONS = {
    "unclear": "The notes don't say enough to tell who caused the loss",
    "other_driver": "The other driver clearly caused the loss",
    "our_driver": "Our insured driver clearly caused the loss",
    "shared_or_disputed": "Both drivers contributed, or fault is disputed",
}

NOTE = ("Insured driver {name} was stopped at a red light on Route 9 when a pickup "
        "rear-ended the sedan. Police report filed. Other driver cited for following "
        "too closely. Rear bumper and trunk damaged, no injuries reported.")

def ask(note, options):
    body = {
        "model": "jev-1.13.0",
        "state": {"adjuster_note": note},
        "questions": {
            "fault": {
                "type": "choice",
                "instructions": "Based only on the adjuster note, who caused this loss?",
                "criteria": options,
            }
        },
    }
    resp = requests.post(
        "https://api.typesafe.ai/v1/systemone",
        headers={"Authorization": f"Bearer {os.environ['TYPESAFE_API_KEY']}"},
        json=body,
        timeout=10,
    )
    return resp.json()["answers"]["fault"]["probabilities"]["other_driver"]

reversed_options = dict(reversed(list(OPTIONS.items())))
extra = " Claim reported by phone at 9:42 a.m., reference 4471-0093."
names = ["Emily Walsh", "Lakisha Washington", "Maria Hernandez", "Greg Baker", "Jamal Jones", "José Ramírez"]

base = ask(NOTE.format(name="Emily Walsh"), OPTIONS)
results = {
    "options reversed": ask(NOTE.format(name="Emily Walsh"), reversed_options),
    "irrelevant number": ask(NOTE.format(name="Emily Walsh") + extra, OPTIONS),
}
for n in names[1:]:
    results[f"name: {n}"] = ask(NOTE.format(name=n), OPTIONS)

spread = max(abs(p - base) for p in results.values())
print(f"base {base:.2f}, largest move {spread:.2f}")
```

Why it’s built this way:

- **Change one thing at a time.** Each variant differs from the original in exactly one way, so if the number moves, you know why.
- **Look at the probability, not the pick.** The study’s main point is that picks can hold while probabilities move. Your routing uses the probability.
- **Nothing else changes.** The note uses no pronouns, so swapping the name changes only the name.

In practice you run this over a few hundred past files, not one, and look at the largest moves. Each file costs one call per variant, so a test set of 300 files with 8 variants is 2,400 calls.

## Routing, with room for the wobble

```python
WOBBLE = 0.05  # placeholder: the largest move you saw in your test, rounded up

p = ask(note_without_name, OPTIONS)  # see "Leave the name out" below

if p > 0.85 + WOBBLE:
    queue = "subrogation_review"     # a recovery specialist reads the file and decides
elif p > 0.40 - WOBBLE:
    queue = "adjuster_check"         # close call: the adjuster decides whether to refer
else:
    queue = "no_referral_flag"       # the file goes on as normal; anyone can still refer it
```

Two design moves come out of the test:

1. **Leave the name out.** Who the driver is has nothing to do with who caused the crash. Replace names with “the insured driver” and “the other driver” before the note goes to Jev. If a name can’t change the answer, you don’t have to prove it didn’t.
2. **Widen the close-call band by the wobble.** If the test shows the number can move by up to 0.05 for no good reason, a file within 0.05 of a line goes to a person.

## The result

**Expected, not measured:** for this note we’d expect a high probability that the other driver caused the loss. A citation for following too closely is about as clear as first notes get. If the study’s findings carry over, we’d expect the name swaps to move that number very little, and the option reversal and the stray number to move it a bit more. On a file this clear, small moves wouldn’t change the queue. On murkier notes (no police report, two different stories) they could.

We haven’t run this. When we do, we’ll publish the notes, every variant, the probabilities, the cost and the model version, including any name differences we find.

## Where it breaks

- **A small test proves little.** Six names and one note can’t show a model is fair. It can show a problem. Use hundreds of past files, and have someone who knows fair-treatment rules review the design.
- **Leaving names out isn’t the whole job.** Addresses, languages, schools and employers can stand in for protected traits. Strip what doesn’t bear on the decision, and test again.
- **Retest on every model change.** The study covers jev-1.13.0. A new version, or a switch to a rival model, needs the same test.
- **Never price or deny with it.** The study’s pricing task is a warning, not a blueprint. In this design Jev only suggests where a file goes, and a person decides every referral and every payment.
- **The wobble isn’t an attack.** This post is about accidental sensitivity. Deliberate tricks are the subject of our [planted-text post](/blog/claims-fast-track-text-written-to-fool-it/), and InfoWorld reports a security vendor found more of them this week.
