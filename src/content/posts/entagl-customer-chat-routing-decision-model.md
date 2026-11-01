---
title: "A chat company coupled its LLM with a decision model. One client’s wrong decisions fell two-thirds"
dek: "Stop letting LLMs, the AI behind ChatGPT, make every decision alone. Entagl coupled its chat LLM with a decision model. That simpler AI picks from a list and says how sure it is."
kind: Worked example
readMinutes: 10
author: Peter Schmitt
audience: For executives, customer-experience, operations and transformation leaders deciding how AI runs their processes
published: 2026-11-01
lastChecked: 2026-11-01
modelVersion: jev-1.13.0
stats:
  - value: "2/3"
    label: "fewer wrong decisions for one client, in real chats"
  - value: "88%"
    label: "of decisions left to the decision model, in a test"
  - value: "84%"
    label: "lower bill overall, by my math, in that test"
  - value: "5x"
    label: "faster on the decisions it makes"
statsNote: "From Entagl’s report of Sept. 23, 2026. The first figure comes from replayed real chats. The other three come from a test on messages Entagl wrote. The 84% is my math on its numbers."
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
A professional-services firm in the Middle East talks to most of its customers on WhatsApp. An AI answers them. Before each reply, the AI decides what to do with the message. It can answer it, hand it to staff, send a standard reply, or ignore it.

LLMs from Google and OpenAI made those decisions. LLMs are the kind of AI behind ChatGPT. In a checked sample from three weeks of chats, about one decision in 11 was wrong. Nobody knew which ones, because an LLM does not say when it is unsure.

Entagl, which makes the firm’s WhatsApp assistant, found the mistakes while testing a change. It coupled the LLM with a decision model. On the same three weeks of chats, wrong decisions fell to about one in 36.

A decision model is a simpler kind of AI. It only picks an answer from a fixed list. It also says how sure it is, as a percentage. When it was unsure, the LLM decided, as before.

## Why couple the two

Every reply depends on quick decisions like what to do with a message. Is this a real sales lead? Which person on the team should take it? Does this customer want us to stop messaging them?

An LLM can make those calls. But it is a costly model built to write paragraphs. And it gives no sign of which calls to doubt.

The decision model Entagl tested is called Jev, made by a company called TypeSafe. Entagl joined it to the LLM with one rule. If the decision model is sure enough, act on its answer. If not, pass the decision to the LLM.

Entagl ran two tests. In the first, on messages it wrote, “sure enough” meant at least 85%. In the second, on real chats, it meant at least 90%.

| | LLM alone | LLM coupled with a decision model |
| --- | --- | --- |
| Who decides | The LLM, every time | The decision model, most of the time |
| Typical time per decision | 1.6 seconds | A third of a second, when the decision model decides |
| Says when it is unsure | No | Yes, on every answer |
| Yearly bill if the LLM alone cost $1 million, my math | $1 million | About $160,000 |

## The first test: messages Entagl wrote

Entagl wrote hundreds of realistic customer messages in 13 languages. It set the right answer for each one first. Then it ran the LLM and the decision model on them.

On its own, the decision model scored about the same as the LLM, half a point lower. Both got nearly every answer right.

The gain from coupling came in speed and cost. The decision model made 88% of the decisions by itself. It got 99.75% of those right. The decisions it was unsure of went to the LLM.

Most of its mistakes came on answers it was unsure of. The rule sent those to the LLM. When it was very sure, it was almost always right.

Each decision it made cost about 96% less than the same decision by the LLM.

The whole bill falls by less, about 84% by my math. The decision model reads every message first. The 12% it is unsure of then go to the LLM too, so those are paid for twice.

Its weak spot was telling kinds of Arabic apart. It mixed up Arabic from the Gulf with Arabic from Egypt or Lebanon. But on those misses it was never more than 40% sure. So each one went to the LLM.

## The second test: real chats

Next, Entagl took about 400 decisions its product had already made for two clients over three weeks. One was the professional-services firm. The other was a healthcare support service.

It ran the decision model on the same chats. Wherever the old decision and the decision model’s answer differed, a person checked the client’s written rules to see which was right.

For each client, Entagl checked two kinds of decision: what to do with a message, and who should answer it. That made four scores.

For the professional-services firm, wrong decisions on what to do fell by about two-thirds. The other three scores barely changed. Each moved by about one point, up or down.

The decision model was weakest at choosing who should answer. A customer would send a short follow-up, like “India” or “I will discuss tomorrow.” A staff member was already handling that chat, and the client’s rule said that person should keep it.

The decision model often missed this. The LLMs had been told who owned the chat. The decision model had not.

## What else the test found

To judge the decision model, Entagl had to check the old decisions too. Some of the old mistakes came not from the LLMs but from fixed rules added around them.

One rule sent a standard reply, pointing people to a lawyer, whenever a customer wrote “legal” or “lawyer.” Most of the messages that set it off were ordinary questions, like “What legal documents do I need for this?”

Entagl checked 20 of those standard replies. In three of four, the customer should have gotten a real answer instead. The decision model chose to answer those.

When a customer said “thanks,” the old system sometimes handed the chat to staff again. That happened even when the customer had already left a name and number. Entagl checked 41 hand-offs. Two in five were repeats like that.

## What Entagl concluded

Entagl says a decision model belongs “anywhere an LLM is asked to pick from a list and nobody reads the output.” In other words, wherever the answer goes straight into the process, with no person checking it.

It would not use one to write replies. Nor would it use one for “anything where a confidently wrong answer silences a real customer,” such as blocking a message by mistake.

Its advice on switching: “Run the new model silently next to the old one and switch per task.” The second test reran past chats. Entagl has not yet published results from live use.

## How it works

**What a decision model does.** It answers questions that have a fixed list of answers. For each answer, it gives a percentage.

The questions sound like these. Does this customer want us to stop messaging them? Which of these four teams should answer? How upset is this customer?

It cannot write, use tools or read images. That is why the LLM stays.

Think of a tractor. The LLM is the engine. The decision model is the hydraulic arm that does the heavy lifting, load after load.

**Why the percentage means something.** TypeSafe trains Jev so that when it says 90% sure, it is right about nine times in ten. Entagl’s researchers note that ordinary LLMs are poor at this. In their test, when Jev was at least 97% sure, it was right every time.

TypeSafe has not said what data it trained Jev on.

**Why it costs so little.** LLMs bill for the text they write as well as what they read. Entagl says Jev costs less mainly because it bills only for what it reads. Its answers are also short.

**Where it is weaker.** TypeSafe lists the limits itself. Jev is weak at arithmetic, counting and dates, and at long, noisy messages or text written to trick it. English is its strongest language.

**How Entagl set it up.** It gave the decision model the same questions and answers the LLM had. It also passed in the last eight messages of each chat.

Entagl drew two lessons.

First, don’t make the model guess facts your system already knows, such as who owns the chat. Look them up and pass them in.

Second, some ads open a chat with a line already filled in for the customer: “I’d like to know more about your services.” Remove it before the decision model reads the chat. That line led it to treat several job-seekers as sales leads.

## What it means for you

**Money.** Entagl gives no yearly figures, so here is my math. Say you spend $1 million a year on LLM decisions in your customer chats, not counting the replies. Coupled the way Entagl tested, that bill would fall to about $160,000, using its first test’s numbers. That leaves out the cost of making the switch.

**Customers.** At the professional-services firm, fewer customers got the wrong decision. When the decision model makes the call, that call takes a third of a second instead of 1.6 seconds. The reply itself still comes from the LLM.

**Revenue.** In the test on messages Entagl wrote, a customer wrote, “A bit expensive, maybe later.” Google’s Gemini, one of the LLMs, judged the lead not worth a follow-up. The decision model kept it as a lead worth chasing.

**Risk.** With an LLM alone, you take an unknown risk. Nothing tells you which decisions are wrong. With a decision model, every decision carries a number, and you decide where to draw the line.

That number is not a guarantee. In the first test, a Turkish ad agency wrote, “We would like to work with you.” The decision model read it as a job application, and was 95% sure. Entagl’s lesson: “A confidence score is evidence, not permission.”

### The same move in other industries

- **Data analytics.** Isotopes AI uses the decision model Jev to read follow-up questions in its analytics tools. It says the work now runs two to five times faster. (Company report.)
- **Help desks.** Sanity, a content platform, uses Jev to send staff questions in Slack to the right in-house AI helper. When Jev is unsure, it asks the person to pick. (Company report.)
- **Software marketplaces.** EmDash, a website builder backed by Cloudflare, uses Cloudflare’s decision model Clef to review add-ons before they are listed. Doubtful ones go to a person. (Company report, tied to the vendor.)

### Hard questions

**The LLM alone scored half a point higher in the first test. Why switch?** That gap is too small to matter in a test this size. The gain is speed and cost, plus about two-thirds fewer wrong decisions for one client in real chats.

**What about other languages?** Test every language your customers use. A good average can hide a weak language.

**Isn’t it enough that it agrees with our current system?** No. Your current system is often the one that is wrong. Check each disagreement against your own written rules.

**What if the vendor changes the model?** Stay on the version you tested. Keep the LLM as the backup, and test again before you upgrade.

### How to make the change

1. **List the quick decisions behind each reply.** Who answers? Is it a lead? Does the customer want you to stop messaging?
2. **Write each one as a question** with the answers your rules allow.
3. **Work out in code what the model can’t see,** such as who owns the chat.
4. **Build a test set** with known answers in every language you serve.
5. **Run the decision model quietly next to your LLM** on real chats. Check each disagreement against your rules.
6. **Set a cut-off for each decision.** Pick the confidence level above which its answers are almost never wrong. Send everything below it to the LLM.
7. **Switch one decision at a time,** and keep tracking results.

## For your developer

The decision model decides what to do with each message. A rule acts on its percentage. The LLM takes the unsure cases and writes every reply. This is my sketch of the design Entagl describes, not its code. I haven’t run it on Entagl’s data, so treat it as expected, not measured.

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
    if (answer.confidence or 0) >= 0.85:           # 0.85 in the written test, 0.90 in real chats
        return answer.choice, "decision_model"
    return llm_route(state), "llm"                 # unsure: the LLM decides, as today
```

The worked example for this post runs this routing offline with tests, including a check by language. [Subscribe for access](/subscribe/).

## The fine print

- **Who published the numbers.** Every Entagl figure comes from its own report of Sept. 23, 2026. I have not measured any of them. Isotopes, Sanity and EmDash report on their own systems, and Sanity publishes no results.
- **The first test in detail.** Entagl wrote 283 cases across 13 decision tasks and 13 languages, including four kinds of Arabic. Each case asked several questions, and the 94 harder cases ran three times: 471 runs and 1,357 scored decisions in all. The “maybe later” message was one of these written cases. Entagl lists it among the small differences between the two models, as a Gemini miss. The decision model scored 98.5% and Google’s Gemini 99.0%, a tie at this size. Under the 85% rule, 17 of the decision model’s 20 mistakes went to the LLM, and three stayed above the line. At 97% sure or higher it was right 986 times out of 986. Below 60% sure it was right 73% of the time. On the Arabic misses it was 36% to 40% sure. By language it scored 99.1% in English, 98.4% in Turkish and 96.5% in Arabic.
- **The second test in detail.** 402 decisions from two clients over 21 days, with names, numbers, emails and links removed. The rule there used 90%, not 85%. Accuracy, old system against coupled: 91.2% and 97.2% on what to do with a message for the first client, which is where the one-in-11 and one-in-36 figures come from, 98.1% and 97.1% on who answers. For the healthcare client, 87.4% and 86.7% on what to do, 97.8% and 98.9% on who answers. The decision model alone scored 94.0%, 91.4%, 93.0% and 83.7%. On the healthcare client’s messages, the cases the decision model passed on were the ones the old system handled worst. The two systems agreed on 74% to 84% of decisions before anyone checked who was right. One person reviewed the disagreements. Rare cases were over-represented and unclear ones left out, so the results are not an everyday average. Two of one client’s rules contradicted each other, so neither model could get those cases right.
- **Speed and cost.** A typical decision took 0.33 seconds against 1.6 seconds for the LLM. Decisions passed on to the LLM take longer, since both models run. Cost compares the bills for identical calls at each vendor’s list price in September 2026. It is not an invoice. The $160,000 is my math: every call goes to the decision model first, and the 12% it is unsure of also go to the LLM.
- **Models.** Jev version 1.13.0 against a Google Gemini model in the first test. In the second, the old decisions came from Gemini and OpenAI GPT models Entagl does not name. TypeSafe now offers Jev 1.14.0, which neither test covered.
- **Other details.** The Turkish agency message was misread in all three runs. No harm came of it, because a second question flagged the message as a sales pitch, and that answer won. One of the job-seekers that the ad opening line let through was treated as a lead at 92% confidence. Sanity shows the user three choices when no helper scores above 40%. EmDash sends a listing to a person at a score of 45% or more, and made the right call in all 63 test runs.
- **What we don’t know.** How the coupled setup scored overall in the first test, the exact wording of Entagl’s questions, its message volumes, and how the setup does over months of live use.
- **This site** is independent and not affiliated with TypeSafe, Entagl, Google, OpenAI, Cloudflare or any company named here.

We show you how in the full worked example, with tests. It comes with a subscription below.
