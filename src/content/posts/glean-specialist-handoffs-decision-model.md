---
title: "In a test, Glean cut its assistant’s wrong handoffs by about 65% with a decision model"
dek: "Stop using LLMs alone. In Glean’s test on 751 requests, the decision model Jev picked which specialist takes each one. The LLM kept writing the answers."
kind: Explainer
readMinutes: 10
author: Peter Schmitt
audience: For executives whose AI assistants pass work between agents
published: 2026-11-28
lastChecked: 2026-11-28
modelVersion: TypeSafe Jev, version not stated, as reported by Glean in September 2026
stats:
  - value: "About 65%"
    label: "fewer requests sent to the wrong place"
  - value: "49"
    label: "more requests sent to the right place"
  - value: "751"
    label: "test requests with a known right answer"
  - value: "35"
    label: "of those fixes were needless handoffs avoided"
statsNote: "All four come from Glean’s own offline test, published in September. The 65%, 49 and 35 are my arithmetic from Glean’s table. The fine print has the details."
snapshot:
  - label: "Why it matters"
    text: "Every AI assistant that hands work to specialist agents makes this call on every request."
  - label: "Where the money is"
    text: "In Glean’s test, the decision model cut requests sent to the wrong place by about two thirds. Glean put no dollar figure on it."
  - label: "Why AI alone hasn’t delivered it"
    text: "An LLM alone made the handoff call inside its answer. It gave no percentage to act on."
  - label: "What to do"
    text: "Give the handoff call to a decision model. Keep the LLM for the answer."
  - label: "What we haven’t done"
    text: "I haven’t run Glean’s system. Its test was offline, and I could not confirm what is live."
sources:
  - title: "Glean engineering blog, Eddie Zhou, Chau Tran, Aviral Singh, Matt Zhao and Manav Agrawal: Jev and the return of the zero-shot classifier (Sept. 29, 2026)"
    url: https://www.glean.com/blog/jev-zero-shot-classifier
    grade: Company report
  - title: "AI Engineer on YouTube: Stop Paying LLM Prices for Yes-or-No Answers, Chinmay Goyal, Glean (posted Nov. 27, 2026)"
    url: https://www.youtube.com/watch?v=K5_ST-kMrvY
    grade: Company report
  - title: "Google Cloud blog, Omid Ashtari: The Blueprint: How Kult built a gaming companion that actually knows your game (Nov. 20, 2026)"
    url: https://cloud.google.com/blog/products/gaming/kult-built-a-gaming-companion-with-gemini-that-actually-knows-your-game/
    grade: Company report
  - title: "Alibaba Cloud blog: From Generation to Decision: An Empirical Evaluation of Decision Models for AgenticOps (Nov. 26, 2026)"
    url: https://www.alibabacloud.com/blog/from-generation-to-decision-an-empirical-evaluation-of-decision-models-for-agenticops_603817
    grade: Company report
---

Every request to Glean’s AI assistant starts with a decision. Should the general assistant answer it, or should a specialist take it? A specialist is an AI agent built for one kind of job.

Glean sells AI search and an AI assistant to large companies. It let its LLM make the handoff call. Glean tested that call on 751 requests. The LLM sent 75 of them to the wrong place.

The LLM made the call inside its own answer. It gave no percentage. Without one, Glean could not set a bar.

A bar is a minimum certainty. A pick below it is not used on its own. Without a bar, every request carries an unknown risk.

Stop using LLMs alone.

However, when coupled with a decision model, the LLM no longer picks who answers. It writes the answer.

A decision model is an AI that answers one fixed question. It gives each possible answer a percentage.

Glean gave the handoff call to a decision model called Jev. In the same test, Jev sent 26 requests to the wrong place. That is about 65% fewer.

## Who did it

Glean connects to a company’s documents and apps. Its assistant answers employees’ questions from them. Booking.com and Zillow are among the customers on its website.

Five Glean engineers wrote up the test on Glean’s blog in September. Later, a Glean engineer named Chinmay Goyal spoke about the work at a conference. His talk went online this week.

## How it worked before

Glean’s assistant runs on an LLM. On each request, the LLM started on its answer. Along the way, it decided whether to hand the request to a specialist.

That handoff was one small step inside a long, written answer. It came with no percentage.

## What Glean changed, step by step

**1. It pulled the handoff out as one question.** Which specialist should take this request, or none?

**2. It gave that question to Jev.** Jev comes from a company called TypeSafe. It reads the request and gives a percentage to each choice.

**3. It kept the LLM for the work.** The specialist that gets the request still uses an LLM to answer. Jev writes nothing.

**4. It built a test with known answers.** Glean made a simpler copy of its system, with three specialists. For each of the 751 test requests, Glean already knew where it belonged.

**5. It compared the two side by side.** Glean scored the LLM’s picks and Jev’s picks against those known answers.

## What happened

**Wrong handoffs fell by about two thirds.** The LLM sent 75 requests to the wrong place. Jev sent 26.

**Jev never did worse.** It tied the LLM on one specialist and beat it on the other two. It also did better on requests that needed no specialist.

**Most of the gain came from cutting needless handoffs.** The LLM sent 44 ordinary requests to a specialist. Jev did that only 9 times.

**Jev also helped the specialist the LLM kept missing.** Glean did not name that specialist. The LLM sent it only 38% of the requests meant for it. Jev sent it 62%.

**The call was faster when work was handed off.** Glean timed 40 requests where the LLM handed work to a specialist. On the median one, Jev made the call about 8 times faster. When no handoff was needed, Jev added a step.

Glean’s engineers called it “one of the strongest internal Jev results so far.”

## What Glean learned from three more tests

Glean tried Jev on three other jobs. The results were mixed, and Glean published them anyway.

**Sorting questions by type: good, but not the best.** Without training, Jev beat Laya, another decision model. After a few hours of training on Glean’s examples, Laya beat Jev. Glean wrote that Jev “likely remains more attractive when a task is new, or its labels are changing.”

**Judging whether answers cite their sources: steadier.** Glean ran each judge three times on the same answer. Jev changed its verdict on 1 of 28 paragraphs. An OpenAI LLM changed its verdict on 7.

**Ranking search results: worse.** Glean’s existing search order beat Jev. Glean’s order also beat two OpenAI LLMs. Glean called Jev a cheap starting point there, “not a replacement.”

Glean’s engineers ended with plain advice. If the answer can be listed in advance, test a decision model. If the step has to write something, keep an LLM in the loop.

## How it works

**What the decision model is.** Jev reads text and scores a fixed set of choices. Here the choices were the three specialists and “none.”

TypeSafe says it trains Jev so its percentages are honest. It has not published its training data.

**Why the percentage matters.** Say a team sets its bar at 60%. Take a made-up benefits specialist. If Jev is 85% sure a request belongs there, the handoff happens.

If Jev is only 40% sure, the LLM decides, as it did before. The 60% bar is my example.

**How Glean set it up.** Glean gave Jev the request and the list of choices. No training was needed.

Glean’s test used no bar. Jev made every pick on its own.

| Job | Before | In Glean’s test |
| --- | --- | --- |
| Who takes the request | The LLM, inside its answer | Jev, as one question |
| Writing the answer | The LLM | Still the LLM |
| A percentage for each pick | None | Yes, for every choice |

## What it means for you

**Money.** A wrong handoff spends an agent’s work on the wrong job. In Glean’s test, the LLM sent about 10% of requests to the wrong place. Jev sent under 4%. Glean did not publish a dollar figure.

**Customers.** The employee asking is the customer here. In the test, Jev sent 49 more requests to the right place.

**Revenue.** Glean has reported no effect on sales. The revenue case is my own view. Better answers keep people using the assistant.

**Risk.** Each pick now comes with a percentage. A team can set a bar, test it on past requests and see how often the decision model is unsure.

### Decision models in other industries

- **Gaming.** Kult, a London start-up, built an AI companion for video games. Jev decides which game a question is about. Unsure cases go to a larger Gemini model, [Kult’s founder wrote](https://cloud.google.com/blog/products/gaming/kult-built-a-gaming-companion-with-gemini-that-actually-knows-your-game/).
- **Cloud operations.** Alibaba Cloud tested decision models inside its AI agent that hunts for the causes of system failures. Some placements raised the agent’s score. Others made it worse, [its engineers reported](https://www.alibabacloud.com/blog/from-generation-to-decision-an-empirical-evaluation-of-decision-models-for-agenticops_603817).
- **Hiring.** The recruiting company Jack & Jill had a decision model score every candidate. An LLM read only the shortlist, and screening costs fell 88%. [How Jack & Jill did it](https://decision-layer-indol.vercel.app/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Isn’t this one more step?** Yes. When no specialist is needed, Jev adds a call the old way did not make. Glean wrote that the better picks may be worth it. It did not put a price on the extra step.

**Is this live?** In September, Glean wrote that it planned to ship Jev into some of these jobs. A summary of Goyal’s talk calls them production uses. I could not watch the talk to confirm.

**Was the test fair?** It ran offline, on a simpler copy of the system. Glean did not name the LLM. One specialist had only 6 test requests.

**Who should own this?** I would give the bar to whoever owns the assistant’s answer quality. They hear about wrong handoffs first.

**Does my data leave the building?** With Jev, yes. TypeSafe runs it as a hosted service. Glean named data storage as work still to do.

### How to make the change in your own assistant

1. **List every place your assistant passes work** to another agent.
2. **Write each handoff as one question** with a fixed list of choices, including “none.”
3. **Collect past requests** and mark where each should have gone. Aim for a few dozen per specialist.
4. **Run a decision model and your LLM** on them, and score both against the right answers.
5. **Look for needless handoffs first.** They were most of the LLM’s mistakes in Glean’s test.
6. **Set the bar** on those past requests. Below it, let the LLM decide as before.
7. **Go live on one team first,** and time the extra step.

## For your developer

Here is the pattern as code. Jev, or any decision model, picks who takes the request. When it is unsure or fails, the LLM picks the old way. The LLM always writes the answer. This is my sketch, not Glean’s code. I haven’t run it on Glean’s system, so the results are expected, not measured.

```python
QUESTION = "Which specialist should handle this request?"
CHOICES = ["benefits", "it_access", "expenses", "none"]

def pick(request, decide, llm_pick, bar=0.6):
    try:
        scores = decide(QUESTION, CHOICES, request)     # a percentage per choice
        best = max(scores, key=scores.get)
        if best in CHOICES and 0 <= scores[best] <= 1 and scores[best] >= bar:
            return best, "decision model"
    except Exception:
        pass
    try:
        return llm_pick(request), "LLM"                 # unsure or failed: the old way
    except Exception:
        return "none", "fail-safe"                      # the general assistant still answers

def handle(request, decide, llm_pick, answer):
    who, by = pick(request, decide, llm_pick)
    return answer(who, request), by                     # the LLM always writes the answer
```

My worked example adds the test on past requests. It scores each choice against known answers, the way Glean did. It also shows how many picks each bar leaves to the LLM. [Subscribe for access](https://decision-layer-indol.vercel.app/subscribe/).

## The fine print

- **The sources.** Glean’s engineering blog post “Jev and the return of the zero-shot classifier,” dated Sept. 29, 2026. Its authors are Eddie Zhou, Chau Tran, Aviral Singh, Matt Zhao and Manav Agrawal. Chinmay Goyal’s talk at AI Engineer was posted on YouTube on Nov. 27, 2026. I could not watch it, so the story does not rely on it.
- **The handoff test.** Glean ran 751 test requests with known answers through a simplified copy of its system with three specialists. Its comparison was the existing prompt-based method, which an LLM runs. Glean does not name that LLM.
- **Glean’s table.** Right answers per choice, LLM then Jev: Specialist 1, 34 requests, 97.1% and 97.1%. Specialist 2, 42 requests, 38.1% and 61.9%. Specialist 3, 6 requests, 33.3% and 100%. No specialist, 669 requests, 93.4% and 98.7%.
- **Precision.** Jev’s precision was higher for every choice. For Specialist 2, it was 86.7% against 47.1% for the LLM.
- **My arithmetic.** From those rates, the LLM got about 676 requests right and Jev about 725. That is 75 wrong against 26, about 65% fewer. Of the 49 fixed errors, 35 were requests that needed no specialist.
- **The speed.** Glean timed 40 requests where the old method made an actual handoff. “The median per-entry speedup was 8.1×.” When no handoff is needed, Jev adds a call, which Glean calls a “blocking” tax.
- **Sorting by type.** This measured agreement with Glean’s current LLM-based labels, not right answers. Jev agreed 66.8% of the time. Laya scored 35.9% out of the box and 74.5% after training.
- **Citation judging.** One 1,448-word answer, three runs per judge. Glean used different OpenAI models in the citation and ranking tests. Jev changed 1 of 28 verdicts. GPT-5.6 Luna changed 7 with no reasoning and 5 with extra-high reasoning.
- **Citation cost.** Per answer judged, Jev cost $0.014. Luna cost $0.030 to $0.047 with no reasoning and $0.047 to $0.060 with extra-high reasoning. Glean had no human labels and does not claim Jev was more accurate.
- **Ranking.** On 4,855 searches, Glean’s order found the best result first 35.7% of the time. Jev did so 24.4% of the time. GPT-6 Luna and GPT-6 Sol both scored below Glean’s order.
- **Status.** In September, Glean wrote that it planned to ship Jev into some of these uses after more work on data residency. An AI-written summary of Goyal’s talk, from BigGo Finance, describes five production uses with better results. I could not check those numbers, so I left them out.
- **Training.** TypeSafe calls its method Reinforcement Learning for Calibrated Decisions.
- **Other examples.** Kult’s post gives no rates or costs, and Kult is “in alpha with our first players.” Alibaba Cloud’s full-agent reruns covered only 10 faults.
- **Customers and Laya.** Glean’s website lists Booking.com and Zillow among its featured customer stories. Glean describes Laya as an open-weight decision model, which anyone can download.
- **Independence.** Decision Layer is not affiliated with Glean, TypeSafe, Kult, Alibaba Cloud or Google.

## One next step

My worked example runs the same test on your own past requests. Subscribe below for access to the private examples.
