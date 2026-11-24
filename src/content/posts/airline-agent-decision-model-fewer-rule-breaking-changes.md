---
title: "In an airline chat test, coupling the LLM with a decision model cut rule-breaking chats 77%"
dek: "Stop using LLMs alone. In an airline test, a decision model answered a short list of set questions while the LLM did the talking. Chats with a forbidden change fell by about three-quarters."
kind: Worked example
readMinutes: 10
author: Peter Schmitt
audience: For executives running customer service with AI agents
published: 2026-11-24
lastChecked: 2026-11-24
modelVersion: Jev under the floating tag jev-latest, Sept. 30 to Oct. 6, 2026
stats:
  - value: "About 77%"
    label: "fewer chats where the agent broke the airline’s rules"
  - value: "About 4 in 5"
    label: "requests to airline systems came from code"
  - value: "Up to 37%"
    label: "fewer LLM calls for each customer message"
statsNote: "All three come from Sai Vamshi Atukuri’s test on a public airline customer-service test, with an AI playing the customer. It is a preprint, not yet reviewed. The first is my arithmetic from his figures. The fine print has the details."
sources:
  - title: "Sai Vamshi Atukuri: System-1 Orchestration for Enterprise Conversational Agents: Typed Decisions Beside the LLM on τ²-Bench Airline (preprint, Nov. 22, 2026)"
    url: https://vamshibobby.github.io/papers/system1-orchestration-tau2-airline/
    grade: Independent reporting
  - title: "Code and logs for the test: jev-tau2-harness (GitHub)"
    url: https://github.com/vamshibobby/jev-tau2-harness
    grade: Independent reporting
  - title: "EarthLink Network: decision models beside the LLM in promptflow (Qiita, in Japanese, Nov. 23, 2026)"
    url: https://qiita.com/chooser/items/fac17f40dac121e38286
    grade: Company report
---

A traveler writes to an airline’s chat agent. They give their user ID but not their booking code. The agent has to find the right trip before it can help.

With an LLM alone, the agent looked things up one at a time. It made seven lookups in a row, then replied. The traveler waited about 19 seconds.

With a decision model beside the LLM, ordinary code, not an AI, took over most lookups. The traveler had named no booking, so the code fetched all of their bookings at once. The LLM then made a few lookups of its own and replied. The wait fell to about 9 seconds.

That was one turn. But it points to a bigger change for any company that lets an AI agent change a customer’s order or booking.

A decision model is an AI that answers a fixed question by giving each possible answer a percentage. It writes no words.

An LLM alone makes every choice in the chat, with no number on how sure it is. That is an unknown risk. Stop using LLMs alone.

However, when coupled with a decision model, the LLM does the talking and the decision model answers the fixed questions. In this test, the agent broke the airline’s rules far less often.

## Who ran the test

Sai Vamshi Atukuri is an independent researcher in the United States. He says he has no tie to TypeSafe, which makes the Jev decision model, or to Google, whose LLMs he tested.

He tested three Google LLMs: Gemini Flash, the cheaper Gemini Flash-Lite and Gemma, the cheapest.

He used a public test for customer-service AI. It puts an agent in an airline’s chat seat. Another AI plays the customer. The test checks whether the agent changed the right bookings and followed the airline’s rules.

He submitted his paper on Nov. 22. His code and the logs of every chat are public.

## How it worked before

In the usual setup, the LLM runs the whole chat. It reads the customer’s message, decides what to look up, and asks the airline’s systems one step at a time. It decides whether to change a booking, and it writes every reply.

The rules are strict. A basic economy flight can’t be changed. Travel insurance pays out on a cancellation only for health or weather.

The LLM has to remember all of that. Sometimes it didn’t. Across the three LLMs, in 43 of 600 chats, the agent made a change when the right outcome was no change at all.

## What changed

Atukuri gave each part one job.

**The decision model answers fixed questions.** On every customer message, it gets one request with a short list of questions.

Does this need a lookup? Which of the customer’s bookings is this about? Did the customer say yes to the change? Each answer comes with a percentage.

**The bar decides when code acts.** The bar is how sure the decision model must be before code acts on its answer. For yes-or-no questions and booking choices it was 50%. Below the bar, the LLM handles that step as it did before.

**Code does the lookups and checks the rules.** When the decision model picks a booking, code fetches it. Before any change runs, code checks it against the airline’s rules. The change also needs a clear yes from the customer, judged by the decision model.

**The LLM does the talking.** It writes every reply. It fills in the details of every change. Anything that needs judgment stays with it.

The decision model and the LLM start at the same moment. When no lookup is needed, the LLM’s reply goes straight out. On the Gemini models, the decision model usually answered before the LLM did. On Gemma, waiting for the decision model could slow a reply.

Here is how one rule works. A customer with travel insurance asks to cancel because their plans changed, and the decision model picks that reason from a short list. If no other rule allows it, code sees that the policy pays only for health or weather. The cancellation doesn’t run.

## What happened

He ran each LLM alone and with the decision model beside it. Each setup handled 200 chats.

**Fewer broken rules.** With the LLMs alone, 43 chats made a change the rules forbade. With the decision model beside them, 10 did. The drop came on every LLM, and most of it on Gemma.

**More work moved to code.** About four in five requests to the airline’s systems came from code, not the LLM. The LLMs themselves were called a quarter to over a third less often for each customer message.

**More consistent results.** He ran each task four times. The share of tasks the agent got right every time rose on every LLM. For Gemma, the weakest, it nearly doubled.

**Mostly lower cost.** On the Gemini LLMs, cost per chat fell about a fifth on average. On Gemma, the cheapest, it rose slightly.

Not everything improved. With Flash-Lite, the cheaper Gemini model, the agent solved slightly fewer tasks on a single try. With Gemini Flash, the slowest replies got slower.

## How it works

**What the decision model is.** Jev answers each question with a percentage for every allowed answer. Every choice includes “none,” so it can decline.

TypeSafe says Jev is trained so that its percentages match how often it is right. Atukuri notes that its design and training data are not public. He also writes that other decision models could play the same role.

**How he set it up.** All the decision model’s questions go in one request each turn. It sees the agent’s last message, the customer’s latest message and today’s date. It answered in about half a second.

| | LLM alone | LLM with a decision model beside it |
| --- | --- | --- |
| Who looks things up | The LLM, one step at a time | Mostly code, in one batch, often on the decision model’s pick |
| Who decides a change can run | The LLM | Code’s rule check and the customer’s yes |
| Who writes the reply | The LLM | The LLM |

## What it means for you

**Risk.** A chat agent that changes the wrong booking costs money and trust. With the LLMs alone, about 7% of chats made a change the rules forbade, with no sign which ones. Coupled with a decision model, it fell to under 2%, a drop of about 77%.

**Customers.** Lookups that ran one after another now ran at once. On Flash-Lite, the cheaper Gemini model, the typical reply came about 31% faster.

**Money.** The LLM made fewer calls, so the bill fell on two of the three models. On the Gemini models, the decision model’s own cost was small next to the LLM’s.

**Revenue.** The test didn’t measure sales. But an agent that gets more tasks right on every try is one a company can let handle more of its chats.

### The same pattern in other industries

- **Software.** EarthLink Network, a small Tokyo software firm, put a decision model beside the LLMs in its AI chat tool for businesses. It picks which LLM should answer each request. For now it only records its pick next to the simple rule it uses today. [EarthLink’s write-up, in Japanese](https://qiita.com/chooser/items/fac17f40dac121e38286).
- **Database monitoring.** pgEdge lets Jev decide whether a database alert is real. An LLM explains the decision only when someone asks. [pgEdge’s announcement](https://www.pgedge.com/press-releases/pgedge-ai-dba-workbench-now-supports-jev-and-other-decision-models).
- **Hiring.** Jack & Jill had a decision model score every candidate. An LLM read only the shortlist, and screening costs fell 88%. [How Jack & Jill did it](https://decision-layer-indol.vercel.app/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Is this a real airline?** No. It is a public test, with an AI playing the customer.

**Was it the decision model, or the rule check in code?** Atukuri didn’t test the parts one at a time. So he can’t say how much of the drop came from each.

**Did anything get worse?** Yes. On Flash-Lite, the agent got fewer tasks right on a single try. It also picked the right kind of change less often.

### How to make the change

1. **List the small questions your agent answers in every chat.** Which order? Did the customer say yes? Does this need a lookup?
2. **Ask them in one request to a decision model,** at the same moment the LLM starts.
3. **Set a bar for each question.** Below it, let the LLM handle the step as before.
4. **Let code do the lookups** the decision model points to.
5. **Write your policy as rules in code.** Run a change only when it passes the rules and the customer clearly said yes.
6. **Leave the talking to the LLM.**
7. **Track rule-breaking chats, LLM calls per message and cost per chat,** before and after.

## For your developer

Here is one customer turn as code. The decision model and the LLM start together. Code acts only on answers above the bar, and a change runs only if it passes the rules and the customer said yes. This is my sketch, not Atukuri’s code. I haven’t run it, so treat it as expected, not measured.

```python
import asyncio

async def turn(state, decide, llm, fetch, allowed, bar=0.5):
    draft = asyncio.create_task(llm(state))         # the LLM starts at once, as before
    d = await decide(state)                         # one request: lookup needed? which booking? said yes?
    if d["lookup_needed"] < bar:
        reply = await draft                         # nothing to look up: the LLM's reply stands
    else:
        booking, p = d["booking"]                   # the first draft is left to finish unused
        if p >= bar and booking != "none":
            state["bookings"] = await fetch(booking)  # code does the lookup the decision model picked
        reply = await llm(state)                    # the LLM writes the reply and fills in any change
    reply.changes = [c for c in reply.changes
                     if d["customer_said_yes"] >= bar and allowed(c, state)]  # rules plus a clear yes
    return reply
```

Atukuri’s own code is public: [jev-tau2-harness on GitHub](https://github.com/vamshibobby/jev-tau2-harness). My worked example adds the airline’s rules as code, the insurance reason check and a scorecard for rule-breaking chats. [Subscribe for access](https://decision-layer-indol.vercel.app/subscribe/).

## The fine print

- **The paper.** Sai Vamshi Atukuri, “System-1 Orchestration for Enterprise Conversational Agents: Typed Decisions Beside the LLM on τ²-Bench Airline.” Submitted to Preprints.org on Nov. 22, 2026, and under screening, with no DOI yet. Not peer reviewed. I read the full paper on his site and the README in his public repository.
- **His independence.** “The author declares no conflicts of interest and has no affiliation with TypeSafe, OpenRouter or Google.” He also writes that AI coding assistants helped write the code and edit the paper.
- **The test.** τ²-Bench v1.0.1, airline domain, all 50 tasks, four tries each, with Gemini 2.5 Flash playing the customer. That is 200 chats per setup and 1,200 in the main table. Runs were made between Oct. 1 and Oct. 6, 2026.
- **The LLMs.** Gemini 3.8 Flash, Gemini 3.5 Flash-Lite and Gemma 4 26B A4B, all on Google’s Vertex AI. In the body I call them Gemini Flash, Flash-Lite and Gemma.
- **The decision model.** Jev, through OpenRouter’s decisions API, under the floating tag ~typesafe/jev-latest. Its version wasn’t pinned, so its answers today may differ. It answered in a median 0.53 to 0.56 seconds and cost $0.0006 to $0.0009 per chat.
- **Training.** TypeSafe’s line is from its docs page on its models. Atukuri: “Its architecture and training data are not public; we treat it as a black box.”
- **The bars.** 0.5 for yes-or-no answers and booking choices, 0.4 for flight search details, and 0.8 to 0.9 for checks on abuse and attempts to trick the agent. Those checks never fired, because the simulated customers were polite.
- **Rule-breaking chats.** The paper counts chats that made any change on a task whose right outcome has no change. By model: 5 to 0, 9 to 3 and 29 to 7. In total, 43 to 10 of 600 chats, or 7.2% to 1.7%. The 77% drop is my arithmetic. Most of the drop came from Gemma.
- **The rule check.** A blocked change never runs. The LLM is told why and asked again, up to three times. Replaying every task’s correct actions, the check blocked none of the 31 correct changes it has rules for. It blocked 2 changes on Gemini 3.8 Flash, 49 on Flash-Lite and 73 on Gemma.
- **Work moved to code.** Code issued 76.6% to 84.4% of tool calls. LLM calls per customer message fell 24% to 37%.
- **Consistency.** pass^4, the share of tasks solved on all four tries, rose from 0.740 to 0.800, 0.540 to 0.600 and 0.220 to 0.420. The paper’s average gain is 10.7 points, driven by Gemma.
- **Single tries.** pass^1 rose from 0.810 to 0.860 on Gemini 3.8 Flash and from 0.465 to 0.560 on Gemma. It fell from 0.760 to 0.735 on Flash-Lite. Flash-Lite’s choice of the right kind of change fell from 86.2% to 69.9%.
- **Cost.** Per chat, including the decision model: $0.0388 to $0.0323 on Gemini 3.8 Flash, $0.0151 to $0.0113 on Flash-Lite, and $0.0062 to $0.0065 on Gemma. That is 17% and 25% lower, and 5% higher. The README’s run totals put the decision-model runs 1.5% to 13% higher than these figures, a gap the paper doesn’t explain.
- **Speed.** On Flash-Lite, the median reply came 31% faster and the slowest tenth 44% faster. On Gemini 3.8 Flash, replies that needed a lookup were 43% faster at the median, but the slowest 15% of replies were slower. The opening example is task 17 on Gemini 3.8 Flash: 18.8 seconds alone, 8.6 seconds with the decision model. Code fetched the bookings under its own rule, because the traveler named none and had four or fewer. Before replying, the LLM alone made seven lookups: the user, three bookings, a flight status, a search and a calculation. In the same chat, the first and third turns were slower with the decision model.
- **The simulated customer.** In 7 to 12 failed chats per setup, the simulated customer said yes and ended the chat in one message, leaving the agent no turn to act. These were more common with the decision model on two models.
- **What Atukuri can’t rule out.** “We study one benchmark domain (airline), three agent models and one cloud provider, with 50 tasks.” “We did not ablate the harness’s components, so we cannot attribute the accuracy, write and latency changes to any one of them.” The setup also removed the agent’s calculator tool.
- **EarthLink Network.** From a post by its chief executive, Masayoshi Uehara, on Qiita, Nov. 23, 2026. Its test used 120 made-up requests, with the right answers set by two AI reviewers. It also tested OpenAI’s Decisions API. In production, the decision model only records which LLM tier it would pick. The company plans to review after 14 days and 5,000 decisions.
- **pgEdge and Jack & Jill.** pgEdge is from its announcement of Nov. 19, 2026. Jack & Jill is from my earlier post, which cites its sources.
- **How solid this is.** This is one independent test, on one public task, with an AI as the customer. It is not a live airline. Treat it as an early sign.
- **This site** is independent and not affiliated with TypeSafe, Google, OpenRouter, EarthLink Network, pgEdge or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
