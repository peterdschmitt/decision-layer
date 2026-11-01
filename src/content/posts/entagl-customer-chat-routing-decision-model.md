---
title: "How a customer-messaging company handed 88% of its AI’s decisions to a decision model"
dek: "Stop using LLMs alone. Entagl’s AI answers customers on WhatsApp and web chat, and frontier LLMs made every call about what to do with each message. Then it tested coupling those LLMs with a decision model: each call cost 96% less and came five times faster. When the decision model was at least 85% sure, it handled 88% of the calls at 99.75% accuracy, and the LLM took the rest."
kind: Worked example
readMinutes: 10
author: Peter Schmitt
audience: For executives, customer-experience, operations and transformation leaders deciding how AI runs their processes
published: 2026-11-01
lastChecked: 2026-11-01
modelVersion: jev-1.13.0
stats:
  - value: "88%"
    label: "of decisions handled by the decision model alone in testing, at 99.75% accuracy, with the rest sent to the LLM"
  - value: "96%"
    label: "lower cost per decision than a frontier LLM; about 84% lower once the LLM takes the unsure 12% (my arithmetic)"
  - value: "986 of 986"
    label: "answers right when the decision model said it was at least 97% sure"
  - value: "5x"
    label: "faster: a typical decision in a third of a second, against 1.6 seconds for the LLM"
statsNote: "All figures are Entagl’s own, from a test it published on Sept. 23, 2026: 1,357 hand-labelled decisions plus 402 real routing decisions replayed from two clients. It reports no annual dollar figures or production results. The fine print says what the test can and can’t show."
sources:
  - title: "Entagl: TypeSafe Jev vs Gemini on 1,759 decisions: 5x faster, 25x cheaper, 98.5% accurate (Entagl Research, Sept. 23, 2026)"
    url: https://entagl.com/blog/typesafe-jev-benchmark-ai-decision-models
    grade: Company report
  - title: "Entagl: AI customer service and sales (company facts)"
    url: https://entagl.com/
    grade: Company report
  - title: "TypeSafe docs: Models (how Jev is trained and customized)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
  - title: "TypeSafe docs: Noul (yes-or-no questions answered with a probability)"
    url: https://docs.typesafe.ai/primitives/noul.md
    grade: Official docs
  - title: "Isotopes AI: Decision models in our analytics agents (Oct. 2026)"
    url: https://isotopes.ai/blog/decision-models
    grade: Company report
  - title: "Sanity: How we built our company agent harness (Oct. 22, 2026)"
    url: https://www.sanity.io/engineering/how-we-built-our-company-agent-harness
    grade: Company report
  - title: "EmDash: How EmDash uses Clef to moderate the plugin registry (Oct. 7, 2026)"
    url: https://emdashcms.com/blog/how-emdash-uses-clef-to-moderate-the-plugin-registry
    grade: Company report
---

An LLM is very good at writing the reply a customer reads. It is a costly way to make the many small calls behind that reply, such as who should answer, whether this is a sales lead, or whether the customer just asked you to stop messaging them, and when it gets one wrong, nothing tells you. However, when coupled with a decision model, those calls come back fast and cheap, each with a probability that says when to trust it and when to hand it to the LLM. I’ll show you how Entagl tested exactly that, and how to do the same.

Entagl sells AI employees to businesses: assistants that answer customers on WhatsApp, Instagram, TikTok, email, web chat and the phone, in any language, and take bookings, orders and complaints. Behind every reply sits a string of decisions. Should the AI answer this message, ignore it, hand it to a person or send a standard reply? Which of the client’s specialists owns it? Is it a real lead? Is someone trying to slip instructions to the AI?

Frontier LLMs from Google and OpenAI made those calls. They were good at it. But every call paid for a model built to write, and the answers came with no measure of doubt. So Entagl tested a decision model, TypeSafe’s Jev, on the same decisions: a model that doesn’t write, but answers a narrow question with a probability. Each call cost 96% less and came five times faster. Entagl called the probability the most useful thing Jev offers.

## How the decisions worked before

Each incoming message went to a frontier LLM, Google’s Gemini or OpenAI’s GPT, along with the client’s written rules. The LLM decided what to do with the message and who should answer, and the AI employee acted on it. Nobody read those decisions one by one; at the volume of a busy inbox, nobody could. That is the trap with an LLM alone: if a call is wrong, you find out from an annoyed customer, or not at all.

## The test

Entagl ran two rounds and published everything, including where the decision model broke.

**Round one: a labelled test.** Entagl wrote 283 realistic cases across 13 decision tasks and set the right answer for each before running anything. The tasks included routing a message to the right specialist, spotting text written to hijack the AI, reading a phone-call transcript for its outcome, and flagging a reply that quotes a price the business never set. The cases came in 13 languages, from English and Turkish to four varieties of Arabic. The hard cases ran three times to check that answers repeat, and each run was scored on several decisions: 1,357 in all. Jev and a frontier Gemini model got identical facts, questions and options.

| | Frontier LLM (Gemini) | Decision model (Jev) |
| --- | --- | --- |
| Accuracy, 1,357 decisions | 99.0% | 98.5% |
| Typical answer | 1.6 s | 0.33 s |
| Cost per decision | baseline | 96% lower |
| A confidence you can act on | no | yes |

On accuracy the two were level; the differences were small and ran both ways. Jev knew that “I’m not interested anymore” is not a request to stop messaging; Gemini flagged it. Gemini judged “a bit expensive, maybe later” not worth a follow-up, “which is exactly the lead you want to nudge,” Entagl wrote.

**The probability.** When Jev said it was at least 97% sure, it was right 986 times out of 986. Entagl then set one rule: use Jev’s answer when it is at least 85% sure, otherwise ask the bigger model. Under that rule, Jev handled 88% of the decisions at 99.75% accuracy, and 17 of its 20 mistakes went to the LLM instead. Its weakest spot, telling Gulf Arabic from Egyptian or Levantine, came with confidence of 36% to 40% every time, so the rule caught all of them.

**Round two: real conversations.** Entagl then took 402 routing decisions its product had already made for two clients over 21 days and replayed them through Jev. One client is a professional-services firm in the Middle East, mostly Arabic on WhatsApp; the other a healthcare support service, mostly English and Portuguese on web chat. Names, numbers, emails and links were masked first. Where Jev and the original decision disagreed, Entagl read the conversation and judged which answer matched the client’s own written rules.

| Decision | Original LLM | Decision model | Coupled: decision model when 90%+ sure, else LLM |
| --- | --- | --- | --- |
| Client A: what to do with the message | 91.2% | 94.0% | 97.2% |
| Client A: which specialist answers | 98.1% | 91.4% | 97.1% |
| Client B: what to do with the message | 87.4% | 93.0% | 86.7% |
| Client B: which specialist answers | 97.8% | 83.7% | 98.9% |

The coupled setup was the best of the three in two of the four decisions and close behind in a third. The decision model on its own was better than the LLM at deciding what to do with a message, and worse at choosing the specialist. The reason: most of those misses were short follow-ups like “India” or “I will discuss tomorrow” in a conversation already running with one specialist. The client’s rules say stay with that specialist. Jev saw the last eight messages but wasn’t told who owned the chat; the LLM setup was. In client B, coupling made the message decision slightly worse than the LLM alone, because on the messages Jev was unsure about, the fallback was the original LLM’s weakest answers.

**What the replay found in the old setup’s work.** Checking the decision model meant checking the old decisions too, and some were wrong in ways no spot-check had caught. A rule sent a standard referral reply whenever a customer wrote “legal” or “lawyer”; in a sample of 20, 15 were ordinary business questions such as what documents they needed. After customers had given their name and number once, a later “thanks” or “obrigada” triggered a fresh handover to staff: 17 of 41 sampled handovers were repeats like that. And two of a client’s rules contradicted each other, so both models were guessing. Entagl flagged all of them to fix at the source.

## What it unlocked

Entagl’s conclusion sums up the method. A decision model belongs “anywhere an LLM is asked to pick from a list and nobody reads the output”: first-pass routing and screening “with a confidence gate and a larger model behind it,” and analysis of every conversation instead of a sample. It is not for writing replies, anything numeric, or “anything where a confidently wrong answer silences a real customer.” And it doesn’t switch everything at once: “Run the new model silently next to the old one and switch per task.” Entagl hasn’t published production results yet.

## How it works

**What a decision model does.** You send it the facts, here a message, a short history and a list of options, and a typed question: yes or no (“Does this message ask us to stop contacting them?”), one of a set (“Which of these four teams should answer?”), or a place on a scale (“How frustrated is this customer?”). It returns a probability for each answer in one pass. It can’t write replies, call tools or read images, which is why the LLM stays.

Think of hydraulics on a tractor: the same engine lifts far more. Entagl’s LLM still writes every reply and takes the hard calls; coupled with the decision model, the system makes the routine calls at a fraction of the cost and knows which ones to doubt.

**Why the probability matters.** TypeSafe trains Jev with a method it calls reinforcement learning for calibrated decisions; the goal, in Entagl’s words, is that “90% sure” really means right about nine times in ten, something ordinary LLMs are poor at. On Entagl’s test it held: every answer at 97% or more was right, and only 73% below 60%. That is what lets a rule act on the confident answers and route the rest.

**What TypeSafe publishes, and doesn’t.** Jev bills only for what it reads; it writes nothing, so there is no output cost, which is most of why it is cheaper. TypeSafe says English is its main training language and other languages are handled “but not equally well”; Entagl saw it, at 99.1% in English, 98.4% in Turkish and 96.5% in Arabic. TypeSafe also lists its own weak spots: arithmetic, counting, comparing dates, long inputs full of irrelevant detail, and text written to manipulate it. It hasn’t published what data Jev was trained on.

**What Entagl set up.** The same questions and options the LLM had, the last eight messages of the chat, and one cut-off: 85% in the labelled test, 90% in the replay. The lessons it drew are setup rules: compute the facts the answer depends on, such as who owns the chat or whether contact details were already collected, in ordinary code and hand them over; and strip the template line that click-to-chat ads put at the start of a conversation (“I’d like to know more about your services”), which led Jev to wave job-seekers through as sales leads, one at 92% confidence.

## What it means for you

**Money.** Entagl gives no annual figures. By my arithmetic on its numbers, if the LLM calls behind your customer conversations cost $1 million a year, coupling them the way Entagl tested, the decision model on every call and the LLM on the unsure 12%, would bring that to about $160,000. That is before the cost of making the switch, which Entagl doesn’t give.

**Customers.** On the calls the decision model handles, the decision takes a third of a second instead of 1.6, before the LLM starts writing the reply.

**Revenue.** Both rounds found calls the old setup mishandled: in the test, the LLM dropped a lukewarm “maybe later” as not worth a follow-up; in the replay, a keyword rule sent real business questions a canned legal referral.

**Risk.** With an LLM alone, a wrong routing call is invisible until a customer complains. A decision model puts a number on every call, so you decide where the line sits and what happens below it. Entagl is plain about the limit: one Turkish agency’s “we would like to work with you” was read as a job application at 95% confidence, three runs out of three. “A confidence score is evidence, not permission,” it wrote. Keep checking real outcomes after you switch.

### The same move in other industries

- **Data analytics.** Isotopes AI uses the decision model Jev to interpret follow-up questions in its analytics agents and decide whether the data already loaded can answer them. In production it reports the workflow running roughly two to five times faster. (Company report.)
- **Internal agents.** Sanity, the content platform, routes requests among 66 company-built agents in Slack with the decision model Jev; when the top agent’s probability is below 40%, it shows the user the three most likely ones to pick from. It publishes no performance figures. (Company report.)
- **Marketplace moderation.** EmDash, a content-management system backed by Cloudflare, moderates plugin listings with Cloudflare’s decision model Clef. A score of 45% or higher sends a listing to an operator; it made the right pass-or-review call in all 63 test runs. (Company report, vendor-affiliated.)

### The hard questions

**“The LLM was slightly more accurate. Why switch?”** On raw accuracy, 99.0% against 98.5%, the two were level at this size. Coupled, the decision model took 88% of the calls at 99.75% and passed most of its mistakes to the LLM. You keep the LLM where it’s needed and stop paying it for the calls it doesn’t need to make.

**“What about languages?”** Test every language your customers use. An average of 98% can hide 96% in the language half your customers write in. Entagl’s Arabic misses came with low confidence, so the gate caught them, but that is something to confirm on your own traffic, not assume.

**“Isn’t ‘agrees with our current model’ good enough?”** No. Raw agreement in Entagl’s replay was only 74% to 84%, and much of the gap was the old setup being wrong. Judge disagreements against your written rules.

**“What if the vendor changes the model?”** Pin the version you tested, keep the LLM as the fallback, and re-run your test set before moving. Jev is new and TypeSafe says its rate limits may change.

### How to make the change

1. **List the decisions behind each reply:** what to do with the message, who answers, is it a lead, does it ask you to stop.
2. **Write each as a typed question** with the options your rules allow.
3. **Compute in code what the model can’t see:** who owns the chat, what the customer already gave you, any dates or numbers.
4. **Build a labelled test** in every language you serve, hard cases included.
5. **Run the decision model silently next to your LLM** on real traffic, and judge disagreements against your rules.
6. **Set the cut-off per task** where the decision model’s confident answers stop making mistakes; send the rest to the LLM.
7. **Switch one task at a time,** and keep tracking outcomes.

## For your developer

The decision model makes the routing call; a rule acts on its probability; the LLM takes the unsure ones and writes every reply. This is my sketch of the design Entagl describes, not its code, and I haven’t run it on its data, so treat it as expected, not measured.

```python
from typesafe_sdk import Choice, TypeSafeClient

Q = {"action": Choice(instructions="What should we do with the customer's latest message?", criteria={
    "answer": "We can answer it from the client's information",
    "hand_over": "A person on the client's team needs to take it",
    "canned_reply": "One of the client's standard replies fits",
    "ignore": "Nothing to do: thanks, emojis, spam"})}

def route(client, last_messages, chat_owner, contact_collected):
    state = {"messages": last_messages[-8:], "chat_owner": chat_owner,      # facts computed in code,
             "contact_already_collected": contact_collected}               # not left to guess
    answer = client.system_one(model="jev-1.13.0",  # the version Entagl tested
                               state=state, questions=Q).answers["action"]
    if (answer.confidence or 0) >= 0.85:           # confident: act, no LLM call
        return answer.choice, "decision_model"
    return llm_route(state), "llm"                 # unsure: the LLM decides, as today
```

The worked example for this post (chat-routing-confidence-gate) runs this routing offline, with tests, including the per-language check. [Subscribe for access](/subscribe/).

## The fine print

- **Who published the numbers.** Every Entagl figure comes from its own post of Sept. 23, 2026. Cost compares billed tokens for identical calls at each vendor’s list price in September 2026; it is not an invoice. The 84% and the $160,000 are my arithmetic, assuming every call goes through the decision model first and 12% also go to the LLM. Isotopes, Sanity and EmDash report on their own systems. I have measured none of them.
- **Models.** Jev version 1.13.0 against a frontier Google Gemini model at low reasoning effort in the labelled test; the original decisions in the replay came from Gemini and OpenAI GPT models Entagl doesn’t name further. TypeSafe now serves Jev 1.14.0, which the test didn’t cover.
- **What the test can show.** Entagl wrote and labelled the test cases itself, and one person reviewed the replay. In the replay, rare outcomes were over-sampled and unclear cases left out, so the percentages are not a production average. Accuracy of 98.5% against 99.0% is a tie at this size, which is why I say the decision model held accuracy, not that it lost it.
- **What isn’t live yet.** Entagl recommends the coupled design and says where it would and wouldn’t use it, but hasn’t published production results, volumes or savings.
- **What we don’t know.** The coupled setup’s overall accuracy in the labelled test (Entagl gives the 88% the decision model kept, not how the LLM did on the rest), the exact wording of Entagl’s questions, its message volumes, and how the coupled setup does over months of real traffic.
- **This site** is independent and not affiliated with TypeSafe, Entagl, Google, OpenAI, Cloudflare or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
