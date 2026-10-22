---
title: "“Necesito agregar un carro”: what Jev does with emails that aren’t in English"
dek: "TypeSafe says English is where Jev is most accurate and other languages are handled, but not as well. For an agency whose customers write in Spanish, that’s a service question and a fairness question. Here is how to measure it and route around it."
kind: Worked example
readMinutes: 8
author: The Decision Layer desk
published: 2026-10-22
lastChecked: 2026-10-22
modelVersion: jev-1.13.0
episode: ep-013-spanish-inbox
summary:
  - "No outlet on our list had a new Jev story we could verify today, so the post starts with its topic. Recent headlines are at the end."
  - "The problem: an agency’s service inbox gets emails in Spanish and in a mix of Spanish and English, and the sorting that works on English emails may quietly work less well on them."
  - "How it works: TypeSafe says English is Jev’s main training language and where it’s most accurate, and that other languages work but not equally well. It doesn’t publish numbers by language."
  - "The use case: measure misses separately for each language on past emails, then send unclear non-English emails to bilingual staff at the same priority. The result is expected, not measured."
sources:
  - title: "TypeSafe docs: Models (language support)"
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
  - outlet: The New Stack
    headline: "Workday is using TypeSafe’s Jev to build user interfaces on the fly"
    url: https://thenewstack.io/workday-is-using-typesafes-jev-to-build-user-interfaces-on-the-fly/
    date: 2026-10-13
  - outlet: Bloomberg
    headline: "Andreessen Horowitz Backs Jev Maker at $7.5 Billion Value"
    url: https://www.bloomberg.com/news/articles/2026-10-09/andreessen-horowitz-backs-jev-maker-at-7-5-billion-value
    date: 2026-10-09
---

*Thirteenth in our series. Earlier posts cover [the basics](/blog/what-jev-is-and-isnt/), [training](/blog/claims-intake-labels-not-essays/), [writing a question](/blog/underwriting-submissions-function-call/), [the service inbox](/blog/agency-inbox-jev-and-its-clones/), [planted text](/blog/claims-fast-track-text-written-to-fool-it/), [pictures](/blog/claim-photos-what-jev-can-see/), [bias](/blog/subrogation-referrals-does-the-answer-wobble/), [cost at volume](/blog/storm-surge-cost-and-speed-at-volume/), [many questions at once](/blog/agency-renewals-many-small-questions/), [what goes in the state](/blog/coi-requests-what-to-send-jev/), [long inputs](/blog/subcontract-long-context-or-split/) and [new versions](/blog/claims-routing-when-jev-updates/). This one goes back to the service inbox and asks what happens when the email isn’t in English.*

*A note on today’s news: we didn’t find a new Jev story we could verify from the outlets on our list, so this post starts with its topic. The latest headlines are at the end.*

## The problem: the same request, in a different language

Our [inbox post](/blog/agency-inbox-jev-and-its-clones/) sorted an agency’s service email with six questions: is it a new claim, a cancellation, a vehicle or driver change, a request for proof of insurance, a billing question, and how urgent is it. The example was Dana, who traded in a Camry and needed proof of insurance by Friday.

Plenty of agencies, in Texas, Florida, California and well beyond, get the same email in Spanish:

> “Hola, ayer compramos una camioneta nueva y necesito agregarla a la póliza. El dealer me pide comprobante de seguro antes del sábado o no nos la entregan. Gracias, Marisol”

Or in the mix many customers actually write:

> “Hi, quiero cambiar mi policy, ya no tengo el Civic, lo vendí. Can you take it off? Gracias”

Marisol’s email asks for exactly what Dana’s did: a vehicle change and proof of insurance, with a deadline. If the sorter is a little less sure about her email, it might miss the deadline, or drop the email into the queue a person reads when nothing matched. Nothing errors. Her request just takes longer.

That makes this more than an accuracy question. Language can stand in for national origin, which our [bias post](/blog/subrogation-referrals-does-the-answer-wobble/) flagged as the kind of thing to watch. A system that serves Spanish-speaking customers more slowly is a problem even if nobody meant it to be.

## How it works: English first, the rest “handled”

**TypeSafe says where Jev is strongest.** Its model page has a short section on language support: “English is the primary training language and where accuracy is currently best.” And: “Other languages, including CJK scripts, are handled but not equally well.” (CJK means Chinese, Japanese and Korean.) The page advises testing on your own content before relying on Jev for work that isn’t in English, and watching confidence closely when you route. ([Models](https://docs.typesafe.ai/models.md))

**The newest version is meant to help.** TypeSafe’s 1.14 announcement names multilingual support as the area where it expects the biggest improvement. ([TypeSafe blog](https://typesafe.ai/blog/jev-1-14)) Our [versions post](/blog/claims-routing-when-jev-updates/) covers how to test a new version before switching; a mixed-language inbox is a good reason to run that comparison early.

**What TypeSafe hasn’t published.** We found no list of supported languages, no accuracy figures by language, nothing on emails that mix two languages, and no advice on whether to write your questions in the customer’s language or in English. The training material TypeSafe has published, which our [training post](/blog/claims-intake-labels-not-essays/) covers, doesn’t say how much of the training data wasn’t in English. So “not equally well” has no number attached. You have to find yours.

**Two choices only your tests can settle.**

- **Questions in English, or in Spanish?** The simplest setup keeps your questions in English and sends the email as it is. You could also write a Spanish version of each question. Try both on the same emails.
- **Translate first, or not?** Some teams run every email through a translation tool and send the English. That adds a step that can get things wrong on its own (“comprobante de seguro” has to come out as proof of insurance, not just “a receipt”), and it sends the email to one more vendor. Test it against the original before you add it.

**What that means for you.** Treat each language your customers write in as its own test. A sorter that’s right 95% of the time overall can be right far less often on the emails that aren’t in English, and the average will hide it.

## The use case: measure by language, then route the unclear ones

**Step 1: split your test set by language.** Take past service emails with the right answer already known, as in the inbox post. Tag each one English, Spanish or mixed (any language-detection library does this; a person can check the mixed ones). Make sure each group is big enough to count: a hundred or more if you have them.

**Step 2: count misses for each group.** Run the same six questions from the inbox post on every email and compare:

```python
from collections import defaultdict

totals, misses = defaultdict(int), defaultdict(int)
for case in past_emails:                      # each has .text, .language, .right_tasks
    answers = ask_inbox_questions(case.text)  # the request from the inbox post, jev-1.13.0
    yes = {k: v["noul"] for k, v in answers.items() if k != "urgency"}
    tasks = {k for k, p in yes.items() if p > 0.5}
    totals[case.language] += 1
    misses[case.language] += tasks != case.right_tasks

for lang in totals:
    print(lang, f"{misses[lang] / totals[lang]:.0%} missed of {totals[lang]}")
```

If Spanish and mixed emails miss noticeably more often than English ones, you’ve learned something the overall number would never show.

**Step 3: route the unclear ones to someone who reads the language.** Keep the routing rules from the inbox post, and add one: when an email isn’t in English and any answer lands in the unsure middle, it goes to bilingual staff, at the same priority it would have had.

```python
UNSURE = (0.2, 0.8)                           # placeholder band; set it from step 2

def unsure(p):
    return UNSURE[0] < p < UNSURE[1]

if language != "en" and any(unsure(p) for p in yes.values()):
    queue = "bilingual_service"               # a person who reads Spanish looks first
# priority is set the same way for every language, from the urgency question
```

The band is ours, not TypeSafe’s, and the numbers are placeholders. Yes/no answers come back as a single probability, so we treat answers near the middle as unsure. Set the band from step 2: widen it if Spanish emails miss more, narrow it if they don’t.

## The result

**Expected, not measured:** we’d expect Marisol’s email to come back yes on the vehicle change and proof of insurance, though perhaps less clearly than Dana’s, and the mixed-language email to be the least clear of the three. With the extra rule, any of them that land in the middle go to a bilingual service rep the same day, flagged for the Saturday deadline. The goal isn’t that Jev reads Spanish perfectly. It’s that a Spanish-speaking customer doesn’t wait longer because of it.

We haven’t run this. When we do, we’ll publish the made-up emails in each language, the misses by group, the model version and the date.

## Where it breaks

- **Too few examples to count.** If you only have 20 Spanish emails, a miss rate means little. Collect more before you trust any number, and keep routing unclear ones to people meanwhile.
- **A bilingual queue nobody staffs.** The rule only helps if someone reads that queue as fast as the main one. Check the wait times by language, not just the miss rates.
- **Mixed-language emails.** These are likely the hardest for any model and the easiest to mislabel in your own test set. Have a bilingual person label them.
- **Languages you didn’t test.** Vietnamese, Haitian Creole or Tagalog emails may arrive rarely. If a language isn’t in your test set, send it to a person.
- **Language is not a routing signal for anything else.** Use it only to get the email read by someone who can read it. It must never change priority, pricing, coverage or anything about how the customer is treated.
- **It never answers the customer.** Jev sorts the email. A person replies, in the customer’s language, and nothing about the customer that a law protects goes in as an input.
