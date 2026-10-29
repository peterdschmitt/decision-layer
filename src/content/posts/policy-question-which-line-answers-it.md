---
title: "“Is my fence covered?” Don’t let AI answer that. Let it show you the line"
dek: "A customer asks a coverage question after a storm. The answer is somewhere in a policy nobody has memorized. Here’s how Jev can point your team to the exact sentences, and tell you when the policy says nothing at all."
kind: Worked example
readMinutes: 6
author: The Decision Layer desk
published: 2026-10-29
lastChecked: 2026-10-29
modelVersion: jev-1.13.0
episode: ep-020-which-line
respondingTo:
  lede: "CNBC says AI coverage is about to be every company’s problem, after Anthropic admitted in its IPO filing that its own models can go off script. If your agency is thinking about letting AI answer customers’ coverage questions, read that line twice."
  outlet: CNBC
  headline: "Anthropic IPO filing warns some risks may be uninsurable. AI coverage will be issue for every company"
  url: https://www.cnbc.com/2026/10/28/anthropic-ipo-ai-risks-insurance.html
  date: 2026-10-28
  quote: "Because our models may behave in ways that no user or developer intended, claims arising from such actions could result in substantial liability."
  quoteBy: "Anthropic, in the S-1 filing CNBC reported on"
  impact: "An AI that tells a customer “yes, you’re covered” and is wrong is your errors and omissions problem, not the vendor’s. The safer job for AI at a service desk is smaller: find the sentences in the policy that answer the question, and say so plainly when there aren’t any. A licensed person still gives the answer."
summary:
  - "Customers ask what their policy says, and finding the right sentence in a 40-page PDF takes your team ten minutes a question. After a storm, that’s the whole morning."
  - "Jev can point to the lines that answer the question, and, in a separate check, say whether the policy answers it at all. That second check is what keeps it from confidently pointing at the wrong thing."
  - "Your service person reads three sentences instead of a whole policy, and still writes the answer."
sources:
  - title: "Anthropic, PBC: Form S-1 registration statement (Oct 26, 2026)"
    url: https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm
    grade: Regulator
  - title: "TypeSafe docs: Line-by-line search (cookbook)"
    url: https://docs.typesafe.ai/cookbooks/semantic_find.md
    grade: Official docs
  - title: "TypeSafe docs: Choice"
    url: https://docs.typesafe.ai/primitives/choice.md
    grade: Official docs
inTheNews:
  - outlet: CNBC
    headline: "Anthropic IPO filing warns some risks may be uninsurable. AI coverage will be issue for every company"
    url: https://www.cnbc.com/2026/10/28/anthropic-ipo-ai-risks-insurance.html
    date: 2026-10-28
  - outlet: TechCrunch
    headline: "OpenAI makes its Jev competitor widely available as decision model competition heats up"
    url: https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/
    date: 2026-10-22
  - outlet: InfoWorld
    headline: "TypeSafe’s Jev ‘even more susceptible to attack’ than LLMs, says security vendor"
    url: https://www.infoworld.com/article/4236103/typesafes-jev-even-more-susceptible-to-attack-than-llms-says-security-vendor.html
    date: 2026-10-15
  - outlet: Bloomberg
    headline: "Andreessen Horowitz Backs Jev Maker at $7.5 Billion Value"
    url: https://www.bloomberg.com/news/articles/2026-10-09/andreessen-horowitz-backs-jev-maker-at-7-5-billion-value
    date: 2026-10-09
---

## The email that’s waiting at 8 a.m.

It stormed last night. This is one of thirty messages in your agency’s inbox:

> “A big branch from my neighbor’s oak came down on our back fence. Half the fence is flat. Is that covered? And who pays to get the branch hauled away?”

Your service person knows homeowners policies. They don’t know this one by heart. The honest answer depends on four things the policy may or may not say: whether a fence counts as covered property, whether wind is a covered cause, how a neighbor’s tree is treated, and whether hauling debris has its own limit.

So they open the PDF and search for “fence.” Maybe it isn’t in there. Then “tree.” Then “debris.” Ten minutes later they have an answer, and twenty-nine emails to go.

The tempting fix is a chatbot that reads the policy and answers the customer. That’s exactly the kind of AI behavior Anthropic warned investors about this week. A wrong “yes, you’re covered” costs you, not the software company.

## A smaller, safer job for AI

Here’s what we’d ask Jev to do instead. Not answer. Point.

**Number every line of the policy, and ask Jev which line answers the question.** Jev doesn’t write sentences. It picks from options you give it and tells you how sure it is about each. Here the options are just the line numbers. It comes back with a score for every line, and your person reads the top three.

**Then ask a second question: does the policy answer this at all?** This is the part people skip, and it’s the part that matters. When you ask Jev to pick, it always picks something. TypeSafe, the company behind Jev, says so in its own recipe for this exact technique: “Choice probabilities always add up to 1, so some line ranks first even when the document doesn’t answer the question.” ([TypeSafe](https://docs.typesafe.ai/cookbooks/semantic_find.md))

TypeSafe’s worked example shows why that’s dangerous. Asked whether GitHub’s terms of service require arbitration, which they don’t, Jev still ranked one line at 0.86. That looks like a confident answer. The separate yes-or-no check came back at 0.14: not in this document. Without the second check, a busy person reads 0.86 and quotes the wrong line.

## What it looks like at your desk

Take a made-up policy with these lines in it:

> **L041** Coverage B, Other Structures. We cover structures set apart from the dwelling, such as fences, sheds and detached garages.
>
> **L088** We insure Coverages A and B for direct physical loss caused by windstorm or hail.
>
> **L103** Trees. We pay for damage to covered property caused by a tree, including one from a neighboring property, that falls because of a peril we insure.
>
> **L104** We pay up to $1,000 per loss to remove fallen trees, but only if the tree damaged a covered structure.

Here’s how the morning goes:

| | Who | What happens |
| --- | --- | --- |
| 1 | Your service person | Types the customer’s two questions: is the fence covered, and is hauling the branch covered. |
| 2 | Jev | Points to L103, L041 and L088 for the fence, and L104 for the branch. |
| 3 | Jev | Says yes, the policy addresses both. |
| 4 | Your service person | Reads four sentences, not forty pages. Replies in their own words: the fence falls under other structures, a neighbor’s tree is covered if wind brought it down, hauling is covered up to $1,000 because it hit the fence, and the deductible applies. |
| 5 | The carrier | Decides the claim, as always. |

Then the customer writes back: “Will it also pay for my neighbor’s side of the fence?” The policy doesn’t say. Jev will still point at L041, because it mentions fences. But the second check comes back low, and the screen says so: *this policy doesn’t seem to address it, check with the carrier.* That one line is the difference between a careful answer and an E&O claim.

## The fine print

- **We haven’t run this on real policies yet.** TypeSafe’s own test used a terms-of-service page and an older model. When we test it on insurance policies, we’ll publish the policies, the questions and every result.
- **Long policies take two steps.** One question can cover up to 255 lines. A full policy with endorsements is longer, so first ask which section, then which line in it. Search endorsements separately, because they often change the wording you just found.
- **Show the lines around each hit.** “The limit is 10%” means nothing without the line before it.
- **The cut-offs need tuning.** TypeSafe starts at 0.7 for “answered” and 0.35 for “not in the policy,” and says: “Tune these thresholds on your own documents before using them in production.” Try them on twenty questions your team has already answered.
- **A person always answers.** Jev points. Your licensed person explains. The carrier decides.

## For your developer

The whole thing is one request per question, with two questions inside it. This follows [TypeSafe’s recipe](https://docs.typesafe.ai/cookbooks/semantic_find.md), with wording adapted for a policy:

```python
import os, requests

def find_lines(numbered_policy, line_ids, question):
    resp = requests.post(
        "https://api.typesafe.ai/v1/systemone",
        headers={"Authorization": f"Bearer {os.environ['TYPESAFE_API_KEY']}"},
        timeout=30,
        json={
            "model": "jev-1.13.0",
            "state": {"policy": numbered_policy},          # each line starts with its ID, e.g. "L103| Trees. ..."
            "questions": {
                "where": {"type": "choice",
                          "instructions": f'Which line of the policy answers: "{question}"?',
                          "criteria": {i: None for i in line_ids}},
                "exists": {"type": "noul",
                           "instructions": f'Does any line of the policy address or answer: "{question}"?',
                           "criteria": {"true": "At least one line states or directly implies the answer",
                                        "false": "No line of the policy addresses this"}},
            },
        },
    )
    a = resp.json()["answers"]
    return a["where"]["probabilities"], a["exists"]["noul"]
```

Show the top three lines word for word. If `exists` is under your “not in the policy” cut-off, say so above them in plain words.
