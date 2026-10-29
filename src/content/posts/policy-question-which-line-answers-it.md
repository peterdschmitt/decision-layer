---
title: "“Is my fence covered?” Let Jev point to the line in the policy, and say when there isn’t one"
dek: "A customer asks a coverage question, and the answer is somewhere in a policy nobody has memorized. TypeSafe publishes a recipe for pointing to the exact line that answers a question, plus a second check for when nothing does. Here is how it works, why the second check matters, and a worked plan for an agency service desk."
kind: Worked example
readMinutes: 12
author: The Decision Layer desk
published: 2026-10-29
lastChecked: 2026-10-29
modelVersion: jev-1.13.0
episode: ep-020-which-line
summary:
  - "No outlet on our list had a new Jev story we could verify today, so the post starts with its topic. Recent headlines are at the end."
  - "The problem: customers ask your team what their policy says, and finding the right sentence in a long policy takes time. Guessing from memory is how mistakes happen."
  - "How it works: every line of the policy gets a number, Jev points to the lines that answer the question, and a second, separate question asks whether the policy answers it at all. Without that second question, Jev always points somewhere, even when the answer isn’t there."
  - "The result: your service person gets the two or three lines to read, or a clear “this policy doesn’t say,” and still gives the answer themselves. We haven’t run it yet, so this is what we expect, not what we measured."
sources:
  - title: "TypeSafe docs: Line-by-line search (cookbook)"
    url: https://docs.typesafe.ai/cookbooks/semantic_find.md
    grade: Official docs
  - title: "TypeSafe docs: Choice"
    url: https://docs.typesafe.ai/primitives/choice.md
    grade: Official docs
  - title: "TypeSafe docs: Noul"
    url: https://docs.typesafe.ai/primitives/noul.md
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

*Twentieth in our series. Earlier posts cover [the basics](/blog/what-jev-is-and-isnt/), [training](/blog/claims-intake-labels-not-essays/), [writing a question](/blog/underwriting-submissions-function-call/), [the service inbox](/blog/agency-inbox-jev-and-its-clones/), [planted text](/blog/claims-fast-track-text-written-to-fool-it/), [pictures](/blog/claim-photos-what-jev-can-see/), [bias](/blog/subrogation-referrals-does-the-answer-wobble/), [cost at volume](/blog/storm-surge-cost-and-speed-at-volume/), [many questions at once](/blog/agency-renewals-many-small-questions/), [what goes in the state](/blog/coi-requests-what-to-send-jev/), [long inputs](/blog/subcontract-long-context-or-split/), [new versions](/blog/claims-routing-when-jev-updates/), [other languages](/blog/agency-inbox-spanish-emails/), [speed](/blog/online-claim-form-speed-budget/), [data handling](/blog/claim-notes-what-leaves-the-building/), [life after launch](/blog/underwriting-router-after-launch/), [testing before launch](/blog/water-claims-test-before-you-pick/), [written rules](/blog/apartment-appetite-rules-and-jev/) and [picking one value out of an email](/blog/claim-email-which-date-is-the-loss/). This one is about finding the sentence in a document that answers a question, and knowing when there isn’t one.*

*A note on today’s news: we didn’t find a new Jev story we could verify from the outlets on our list, so this post starts with its topic. The latest headlines are at the end.*

## The problem: the answer is in the policy, but where?

A made-up customer emails her agency the morning after a storm:

> “A big branch from my neighbor’s oak came down on our back fence last night. Half the fence is flat. Is that covered? And who pays to get the branch hauled away?”

The person who picks this up at the agency knows homeowners policies in general. They don’t know this customer’s policy by heart, and the honest answer depends on what it says: whether a fence counts as covered property, whether wind damage is covered, whether a falling tree is treated differently, and whether there’s a separate limit for hauling away debris.

Today that means opening a PDF, scrolling, searching for “fence” (which may not appear anywhere), then “tree,” then “debris,” and reading around each hit. On a busy morning after a storm, there are thirty of these emails waiting.

There’s a second, quieter problem. Sometimes the policy simply doesn’t address the question. A customer asks about something the policy is silent on, or that lives in an endorsement that isn’t in the file. A person who searches and finds a sentence that sounds close can end up quoting the wrong one.

## Why it matters to an agency

- **Coverage answers carry risk.** Telling a customer “yes, that’s covered” and being wrong is the kind of mistake that turns into a complaint, or an errors and omissions claim against the agency. The safe habit is to answer from the policy wording, not from memory.
- **Time after a storm is the bottleneck.** The same few questions arrive dozens of times. If each one takes ten minutes of hunting through a PDF, the queue backs up exactly when customers are most anxious.
- **“The policy doesn’t say” is a real answer.** It tells your team to check the endorsements, ask the carrier or hand it to the claims adjuster, instead of improvising. A tool that always finds *something* hides that answer.

The goal here isn’t a robot that answers coverage questions. It’s a tool that puts the right two or three sentences in front of your service person, with their location in the policy, so they read and answer in a minute instead of ten. And it says plainly when the policy is silent.

## How it works: point to a line, then ask if the answer is there at all

TypeSafe publishes a step-by-step recipe for exactly this, built on GitHub’s Terms of Service instead of an insurance policy ([Line-by-line search](https://docs.typesafe.ai/cookbooks/semantic_find.md)). It has two parts, and the second part is the one people skip.

**Part 1: number every line, and let Jev point.** Each line of the document gets a short label, like L052. The question to Jev is a choice question, which our [basics post](/blog/what-jev-is-and-isnt/) introduced: here are the options, pick one. The options are simply the line labels. Jev reads the whole numbered document and gives back a probability for every line, meaning how likely that line is to be the one that answers the question. You show your person the top few.

**Part 2: ask, separately, whether the answer exists.** A choice question has a catch. Its probabilities always total 100%, spread across the options you gave it. TypeSafe’s recipe says it plainly: “Choice probabilities always add up to 1, so some line ranks first even when the document doesn’t answer the question.” So the recipe adds a yes/no question in the same request: does any line answer this? That answer is measured on its own scale. In TypeSafe’s words, “the Noul probability doesn’t depend on the other options, so it can fall near zero when the document has no answer.” (A “noul” is TypeSafe’s name for a yes/no question.)

**What TypeSafe’s own run shows.** In the published example, someone asked GitHub’s terms whether they have to take disputes to arbitration. The terms don’t say. Jev still ranked one line first with a score of 0.86, a number that looks confident. The yes/no question came back at 0.14, which the recipe reads as “not in this document.” For a question about age limits and parental permission, the yes/no answer landed in the middle, at 0.46, which the recipe treats as “partially addressed”: the age rule is there, but the permission part isn’t. The recipe sums it up: “The ranking tells you where to look; the `exists` score tells you whether the result answers the question.” That run used an earlier model, `jev-1.12`, and saved responses; it isn’t an insurance test, and we haven’t repeated it.

**How big a document fits.** A choice can hold up to 255 options, so one request covers a document of up to 255 lines. For anything longer, the recipe says to “search in two passes”: first pick the right part of the document, then the right line inside it. ([Choice](https://docs.typesafe.ai/primitives/choice.md), [Line-by-line search](https://docs.typesafe.ai/cookbooks/semantic_find.md))

**What TypeSafe hasn’t published.** We found no test of this recipe on insurance policies, no guidance on policies with endorsements that change earlier wording, and no accuracy numbers beyond the four example questions. The cut-offs in the recipe (0.7 for “answered,” 0.35 for “not in this document”) come with a warning: “Tune these thresholds on your own documents before using them in production.”

**What that means for you.** Jev’s job here is narrow and checkable: point to sentences, and say whether the answer seems to be there. A person reads those sentences and answers the customer.

## The use case: a homeowners policy and a fence

Here is a short excerpt of a made-up homeowners policy, already split into numbered lines. A real policy runs to hundreds of lines; we come back to that below.

> L041| COVERAGE B – OTHER STRUCTURES. We cover other structures on the residence premises set apart from the dwelling by clear space, such as fences, sheds and detached garages.
> L042| The limit for Coverage B is 10% of the Coverage A limit.
> …
> L088| We insure for direct physical loss to property described in Coverages A and B caused by windstorm or hail.
> …
> L103| Trees. We pay for damage to covered property caused by a tree, including one from a neighboring property, that falls because of a peril we insure.
> L104| We also pay up to $1,000 per loss to remove fallen trees from the premises, but only if the tree damaged a covered structure.
> …
> L131| Deductible. We pay only the part of the loss above the deductible shown on the Declarations.

**Step 1: number the lines.** Split the policy text into lines (by sentence or by clause) and put a label in front of each. Keep the original text untouched, so whatever Jev points to can be quoted word for word.

```python
def number_lines(policy_text):
    lines = [l.strip() for l in policy_text.splitlines() if l.strip()]
    ids = [f"L{i:03d}" for i in range(len(lines))]
    numbered = "\n".join(f"{i}| {l}" for i, l in zip(ids, lines))
    return ids, lines, numbered
```

**Step 2: break the customer’s message into plain questions.** The email holds two questions: is the fence damage covered, and is hauling the branch away covered. Ask each one separately. Your service person can type them, or pick them from a short list of common questions.

**Step 3: ask Jev both parts at once.** One request per question, with the numbered policy as the state (the material Jev reads) and two questions about it:

```python
import os, requests

URL = "https://api.typesafe.ai/v1/systemone"
HEADERS = {"Authorization": f"Bearer {os.environ['TYPESAFE_API_KEY']}"}

def find_lines(numbered_policy, ids, question):
    resp = requests.post(URL, headers=HEADERS, timeout=30, json={
        "model": "jev-1.13.0",
        "state": {"policy": numbered_policy},
        "questions": {
            "where": {
                "type": "choice",
                "instructions": f'Which line of the policy answers: "{question}"?',
                "criteria": {i: None for i in ids},          # the line text is already in the state
            },
            "exists": {
                "type": "noul",
                "instructions": f'Does any line of the policy address or answer: "{question}"?',
                "criteria": {
                    "true": "At least one line states or directly implies the answer",
                    "false": "No line of the policy addresses this",
                },
            },
        },
    })
    answers = resp.json()["answers"]
    return answers["where"]["probabilities"], answers["exists"]["noul"]
```

The question shapes follow TypeSafe’s recipe; the wording is ours, adapted to a policy.

**Step 4: turn the numbers into something a person can use.** Code, not Jev, decides what to show:

```python
FOUND, ABSENT = 0.7, 0.35     # TypeSafe's starting points; tune on your own policies

def for_the_service_desk(probabilities, exists, ids, lines, top=3):
    ranked = sorted(ids, key=lambda i: probabilities.get(i, 0), reverse=True)[:top]
    quotes = [(i, lines[ids.index(i)]) for i in ranked if probabilities.get(i, 0) >= 0.05]
    if exists >= FOUND:
        status = "The policy seems to address this. Read these lines."
    elif exists < ABSENT:
        status = "The policy doesn’t seem to address this. Check endorsements or ask the carrier."
    else:
        status = "Partly addressed. Read these lines, then check what they leave out."
    return status, quotes
```

What appears on screen is a status line and two or three quoted sentences with their line numbers. Nothing is sent to the customer automatically.

## The result

**Expected, not measured.** For “Is damage to my fence from a neighbor’s falling tree covered?” we’d expect the yes/no question to come back high, and the top lines to be L103 (trees, including a neighbor’s), L041 (fences are other structures) and L088 (windstorm). For “Does the policy pay to haul away the fallen branch?” we’d expect L104 on top, which also carries the important condition: only if the tree damaged a covered structure, up to $1,000.

### The example, start to finish

| Step | Who does it | What happens with this email |
| --- | --- | --- |
| 1. Email arrives | The agency inbox | The customer asks about a fence flattened by a neighbor’s oak branch, and about hauling it away. |
| 2. Find her policy | Your agency system | The service person opens her homeowners policy. Code numbers its lines once and keeps the numbered copy. |
| 3. Write the questions | The service person | Two plain questions: is the fence damage covered, and is debris removal covered. |
| 4. Point to lines | Jev | For each question, a probability for every line. We expect L103, L041 and L088 on top for the fence, and L104 for the branch. |
| 5. Check the answer exists | Jev | A separate yes/no per question. We expect both to come back high, because this policy does address them. |
| 6. Decide what to show | Code | Both are above 0.7, so each shows “Read these lines” with the top lines quoted word for word. |
| 7. Read and answer | The service person | They read four sentences instead of a 40-page policy, then reply in their own words, quoting the policy and noting the deductible (L131) and the $1,000 limit. |
| 8. Hand off the claim | The service person | Whether this loss is actually paid is the carrier’s decision, so the claim goes to the carrier, with the lines attached. |

### A messier case: the answer isn’t there

Now the same customer writes back: “Will the policy also pay to repair my neighbor’s side of the fence?” Our excerpt doesn’t address who owns a shared fence or whether a neighbor’s property is covered. We’d expect Jev’s ranking to still put something first, probably L041 because it mentions fences, perhaps with a high-looking score. We’d expect the yes/no question to come back low. The screen says “The policy doesn’t seem to address this,” and the service person knows to check with the carrier instead of reading L041 as a yes.

This is the whole point of Part 2. Without it, the screen would show L041 with a strong score, and a rushed person could take that as the answer.

### A longer policy

A real homeowners policy, with declarations and endorsements, runs well past 255 lines. Follow TypeSafe’s two-pass advice: first ask which section answers the question (the section headings become the options), then search the lines inside that section. Endorsements matter here. If an endorsement changes the tree wording, the search might point to the original line and miss the change. Search the endorsements as their own pass, and show both.

We haven’t run any of this. When we do, we’ll publish the made-up policy, the questions, every line Jev pointed to, the yes/no answers, and the model version.

## Where it breaks

- **Lines that only make sense together.** “The limit for Coverage B is 10%” means nothing without line L041 above it. Show a line or two around each hit, not the line alone.
- **The wrong policy or an old version.** The tool can only point inside the document it was given. Make sure it’s the current policy, with its endorsements.
- **A high ranking read as a yes.** The top line is where to look, not an answer. TypeSafe’s own example ranked a line at 0.86 for a question the document didn’t answer. Always show the yes/no result next to the lines.
- **Cut-offs you didn’t test.** The 0.7 and 0.35 starting points come from a recipe built on a terms-of-service page. Check them on twenty or so policy questions your team has already answered, as in our [testing post](/blog/water-claims-test-before-you-pick/).
- **Planted text.** If the document came from outside, a sentence could be written to pull the ranking. Our [planted text post](/blog/claims-fast-track-text-written-to-fool-it/) covers why. For policies from your carriers this is a small risk; for documents customers upload, less so.
- **It never decides coverage.** Jev points to sentences. Your licensed person explains what the policy says, and the carrier decides whether a claim is paid. Nothing about a customer that a law protects goes in as an input.
