---
title: "Sixty storm emails, three people: let Jev rank who gets a call back first"
dek: "Banks are learning the hard way what happens when AI can act on its own. Jev can’t: it only rates. That makes it a good fit for the first hour after a storm, when your team has to decide whose call comes first."
kind: Worked example
readMinutes: 6
author: The Decision Layer desk
published: 2026-10-30
lastChecked: 2026-10-30
modelVersion: jev-1.13.0
episode: ep-021-call-back-first
respondingTo:
  lede: "CBS News reports that banks are finding customers’ AI agents taking actions inside their accounts that nobody approved. The White House AI czar’s answer is to keep those agents read-only. Your agency should hold its AI to the same rule."
  outlet: CBS News
  headline: "AI agents are roaming around consumers' bank accounts, and banks aren't happy about it"
  url: https://www.cbsnews.com/news/ai-agents-customer-bank-accounts-security/
  date: 2026-10-23
  quote: "Full write access (with user credentials) is a different risk category and should be approached carefully."
  quoteBy: "David Sacks, White House AI czar, quoted by CBS News"
  impact: "The safest AI at a service desk reads, rates and hands the decision to a person. Jev is built that way: it can’t send an email or touch a claim, it only returns a rating. After a storm, a good rating of who needs help first is exactly what your team is missing."
summary:
  - "After a storm, the order you return calls in matters more than anything else your team does that morning."
  - "Jev rates each email against urgency levels you write in plain words, and shows when it’s torn between two of them."
  - "Your team works the list from the top. Jev never contacts anyone or decides a claim."
sources:
  - title: "CBS News: AI agents are roaming around consumers' bank accounts (Oct 23, 2026)"
    url: https://www.cbsnews.com/news/ai-agents-customer-bank-accounts-security/
    grade: Independent reporting
  - title: "TypeSafe docs: Score"
    url: https://docs.typesafe.ai/primitives/score.md
    grade: Official docs
  - title: "TypeSafe docs: Introduction"
    url: https://docs.typesafe.ai/introduction.md
    grade: Official docs
  - title: "TypeSafe docs: Parallel questions (cookbook)"
    url: https://docs.typesafe.ai/cookbooks/parallel_questions.md
    grade: Official docs
  - title: "TypeSafe docs: Models (pricing)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
inTheNews:
  - outlet: CBS News
    headline: "AI agents are roaming around consumers' bank accounts, and banks aren't happy about it"
    url: https://www.cbsnews.com/news/ai-agents-customer-bank-accounts-security/
    date: 2026-10-23
  - outlet: CNBC
    headline: "Anthropic IPO filing warns some risks may be uninsurable. AI coverage will be issue for every company"
    url: https://www.cnbc.com/2026/10/28/anthropic-ipo-ai-risks-insurance.html
    date: 2026-10-28
  - outlet: TechCrunch
    headline: "OpenAI makes its Jev competitor widely available as decision model competition heats up"
    url: https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/
    date: 2026-10-22
  - outlet: Bloomberg
    headline: "Andreessen Horowitz Backs Jev Maker at $7.5 Billion Value"
    url: https://www.bloomberg.com/news/articles/2026-10-09/andreessen-horowitz-backs-jev-maker-at-7-5-billion-value
    date: 2026-10-09
---

## Why Jev is better for this job

The morning after a storm, most agencies sort the inbox one of three ways: oldest first, whoever shouts loudest, or a person skimming all sixty emails before calling anyone. Some are now trying chatbots. Jev beats all of them, for five reasons.

**1. It rates, it doesn’t act.** An AI agent that can send messages or change records can do the wrong thing on its own; that’s the bank story above. Jev can’t. TypeSafe describes its output as “typed values and probability distributions that your code can branch on, sort by, and route with” ([TypeSafe](https://docs.typesafe.ai/introduction.md)). Here that means one number per email. Your system sorts the list, and your people make the calls.

**2. It rates against situations you describe, not a vague 1 to 10.** Ask a chatbot to “rate urgency from 1 to 10” and you get a number with nothing behind it. With Jev you write each level as a situation: “water is coming in and it will get worse today.” TypeSafe’s advice is blunt: “Describe situations, not degrees.” It shows why. Asked to rate a minor issue with levels that were just the numbers 0, 1 and 2, Jev split its answer and landed at 0.55 with low confidence. With the levels written out as situations, the same report scored a clean 0 with full confidence ([TypeSafe](https://docs.typesafe.ai/primitives/score.md)).

**3. It tells you when it’s torn.** Jev returns a probability for every level, not just a number. If an email could be “can wait a few days” or “will get worse today,” you see both, plus a confidence figure that drops when the answer is split. In TypeSafe’s own example, a report that sat between two levels came back at 1.43 with confidence 0.35. That’s your cue to have a person read it first, instead of trusting a single number.

**4. The scary cases get their own level.** A smell of gas or someone hurt isn’t just “very urgent.” It’s a different kind of call. TypeSafe says: “If the top of your scale has a rare extreme case you need to act on differently, give it its own level.” So the top level is reserved for danger, and your code treats it differently from everything else.

**5. It’s cheap and fast enough for the whole inbox.** Jev costs $0.042 per million tokens, the small chunks of text it reads ([TypeSafe pricing](https://docs.typesafe.ai/models.md)), so sixty emails cost well under a cent. And if you ask several questions about each email in one request, TypeSafe measured that as 12.2 times cheaper and 10 times faster than asking them one at a time ([TypeSafe](https://docs.typesafe.ai/cookbooks/parallel_questions.md)).

## The proof: 7 a.m. after the storm

Three people are on the desk. Sixty emails came in overnight. Here are four of them, made up but typical:

- **A.** “Wind took some shingles off. No leaks that we can see. Can someone come look this week?”
- **B.** “Water is coming through the kitchen ceiling. We have pots out but it’s getting worse.”
- **C.** “Big tree on the house. We smell gas and we’re standing in the driveway.”
- **D.** “Quick question about my renewal date. Hope you all came through okay.”

Oldest first, these get called in whatever order they arrived. The gas leak might be fortieth.

You give Jev one question, “How urgently does this customer need a call back?”, with five levels written as situations:

| Level | What it means |
| --- | --- |
| 0 | A question or paperwork. Nothing is damaged, or the damage is already handled. |
| 1 | Damage that can wait a few days. The home is safe and protected from more damage. |
| 2 | Damage that will get worse today without action, such as water coming in or an open roof. |
| 3 | The family can’t safely stay in the home tonight. |
| 4 | Someone may be in danger right now: a gas smell, live wires, an injury. |

Here’s how the morning goes:

| | Who | What happens |
| --- | --- | --- |
| 1 | Jev | Rates every email. We’d expect C near 4, B near 2, A near 1 and D near 0. |
| 2 | Your system | Puts any email with real weight on level 4 at the very top, then sorts the rest by score. |
| 3 | Your service person | Calls C first and tells them to get clear and call the gas company and 911. Then B, to get a water mitigation crew moving. |
| 4 | Your service person | Works down the list. A gets a call today; D gets a reply this afternoon. |
| 5 | The carrier | Handles the claims, as always. Jev never contacts a customer or opens a claim. |

Now a messier one: “Roof’s leaking a bit in the spare room, we put a bucket under it. Everyone’s fine. Also, when does my policy renew?” Is that a 1 or a 2? Honestly, either. We’d expect Jev to split between them, with low confidence. Your system puts it in a short “read me” pile near the top instead of guessing, and someone reads it in ten seconds. That’s the point: an honest “I’m not sure” beats a confident wrong rank.

## The fine print

- **We haven’t run this yet.** TypeSafe’s examples are bug reports, not storm claims. When we test it, we’ll publish the emails, the levels, every rating and the model version.
- **Your levels are the whole game.** Write them from your own past storms. Test them on fifty emails your team already sorted, and adjust any level that keeps catching the wrong ones.
- **One thing per question.** Urgency is one question. If you also want to know which line of business or whether a claim is already filed, ask those separately; TypeSafe warns that a level describing several things at once lowers confidence and muddies the score.
- **Danger always goes to a person, fast.** Level 4 means a human calls right now. No email, no bot, no waiting for the list.

## For your developer

One request per email. More questions about the same email (line of business, claim already filed) can ride in the same request.

```python
import os, requests

LEVELS = [
    "A question or paperwork. Nothing is damaged, or the damage is already handled.",
    "Damage that can wait a few days. The home is safe and protected from more damage.",
    "Damage that will get worse today without action, such as water coming in or an open roof.",
    "The family can't safely stay in the home tonight.",
    "Someone may be in danger right now: a gas smell, live wires, an injury.",
]

def urgency(email_text):
    resp = requests.post(
        "https://api.typesafe.ai/v1/systemone",
        headers={"Authorization": f"Bearer {os.environ['TYPESAFE_API_KEY']}"},
        timeout=30,
        json={"model": "jev-1.13.0",
              "state": {"customer_email": email_text},
              "questions": {"urgency": {"type": "score",
                                        "instructions": "How urgently does this customer need a call back?",
                                        "criteria": LEVELS}}},
    )
    a = resp.json()["answers"]["urgency"]
    return a["score"], a["confidence"], a["probabilities"]

def sort_key(score, confidence, probabilities):
    danger = probabilities.get("4", 0) > 0.1      # placeholder bar: tune on past storms
    unsure = confidence < 0.5                     # placeholder: these go to the "read me" pile
    return (not danger, not unsure, -score)
```

Sort the inbox with `sort_key` and show the score, the top two levels and the confidence next to each email, so the person working the list can see why it’s where it is.
