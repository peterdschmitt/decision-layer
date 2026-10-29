---
title: "“Is my fence covered?” Five reasons Jev beats a chatbot and a PDF search for this question"
dek: "A chatbot can make up a coverage answer. A PDF search misses the sentence that uses different words. Jev does neither: it points your team to the exact lines, shows how sure it is, and says when the policy is silent."
kind: Worked example
readMinutes: 5
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
  impact: "An AI that tells a customer “yes, you’re covered” and is wrong is your errors and omissions problem, not the vendor’s. That’s exactly why Jev fits a service desk better than a chatbot: it can’t write an answer at all. It can only point to the lines in the policy, show how sure it is, and say when the policy is silent. A licensed person still gives the answer."
summary:
  - "Jev can’t invent a coverage answer. It only points to lines in the policy, so your person checks real wording in seconds."
  - "It finds the right sentence even when the words don’t match the customer’s, shows a score for every line, and says plainly when the policy doesn’t answer."
  - "It costs a fraction of a cent per question, so it can run on every email after a storm."
sources:
  - title: "Anthropic, PBC: Form S-1 registration statement (Oct 26, 2026)"
    url: https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm
    grade: Regulator
  - title: "TypeSafe docs: Line-by-line search (cookbook)"
    url: https://docs.typesafe.ai/cookbooks/semantic_find.md
    grade: Official docs
  - title: "TypeSafe docs: Introduction"
    url: https://docs.typesafe.ai/introduction.md
    grade: Official docs
  - title: "TypeSafe docs: Models (pricing)"
    url: https://docs.typesafe.ai/models.md
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

## Why Jev is better for this job

A customer asks whether something is covered. Today your team has two options: search the policy PDF, or try one of the AI chatbots everyone is talking about. Jev beats both, for five reasons.

**1. It can’t make up an answer.** A chatbot writes sentences, and a sentence can be wrong in a way that sounds right. Jev doesn’t write anything. TypeSafe describes it as “No text generation, no parsing”: you give it a fixed set of options and it picks among them ([TypeSafe](https://docs.typesafe.ai/introduction.md)). Here, the options are the numbered lines of the customer’s policy. The worst it can do is point at the wrong line, and your person sees that in seconds because the real wording is right there.

**2. It reads for meaning, not matching words.** Search the PDF for “fence” and you may get nothing, because the policy calls fences “other structures.” Jev compares the question with every line. In TypeSafe’s published example, the question “who owns the code I upload?” went straight to the line that reads “You own Your Content,” with a score of 0.95, even though the words barely overlap ([TypeSafe](https://docs.typesafe.ai/cookbooks/semantic_find.md)).

**3. It shows how sure it is, line by line.** Jev returns a score for every line, not just one answer. Your person reads the top three, and a close race between two lines is a signal to read more carefully.

**4. It can say “the policy doesn’t answer this.”** This is the one that protects you. A pick-the-line question always picks something; TypeSafe warns that “some line ranks first even when the document doesn’t answer the question.” So you ask a second, separate yes-or-no question in the same request: does any line answer this? In TypeSafe’s example, a question the document didn’t answer still got a top line scored 0.86, but the yes-or-no check came back at 0.14, meaning not in this document. Here, “not in the policy” is a built-in answer, not something you hope the AI volunteers.

**5. It’s cheap enough to run on every email.** Jev costs $0.042 per million tokens, the small chunks of text it reads ([TypeSafe pricing](https://docs.typesafe.ai/models.md)). A policy section of a few thousand words costs a small fraction of a cent per question. After a storm, you can run it on all thirty emails in the inbox without thinking about the bill.

## The proof: one storm email, start to finish

It stormed last night. This is one of thirty messages in your agency’s inbox:

> “A big branch from my neighbor’s oak came down on our back fence. Half the fence is flat. Is that covered? And who pays to get the branch hauled away?”

The customer’s policy is made up for this example, but it reads like a real one:

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
| 2 | Jev | Should point to L103, L041 and L088 for the fence, and L104 for the branch. |
| 3 | Jev | Should say yes, the policy addresses both. |
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
