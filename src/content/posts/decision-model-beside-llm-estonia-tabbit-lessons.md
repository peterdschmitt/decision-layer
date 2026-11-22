---
title: "On fixed questions, a decision model cut waits 89%. On changing pages, it barely got used"
dek: "Stop using LLMs alone. Two teams put the same decision model next to their LLM, in two different places. Here are four lessons from what happened."
kind: Comparison
readMinutes: 10
author: Peter Schmitt
audience: For executives deciding which AI choices still need an LLM
published: 2026-11-22
lastChecked: 2026-11-22
modelVersion: jev-1.13.0 at RTK, per its builder; Tabbit names no version
stats:
  - value: "About 89%"
    label: "less wait on sorting, when the decision model is sure"
  - value: "About a tenth"
    label: "of the LLM’s time on single steps at Tabbit"
  - value: "About 2%"
    label: "of steps in Tabbit’s tests where Jev was sure enough"
statsNote: "The first comes from Alvar Laigna’s post of Sept. 29, 2026, about Estonia’s procurement tool. The other two come from Tabbit’s own tests, reposted Nov. 21, 2026. All three are my arithmetic from their figures. The fine print has the details."
sources:
  - title: "Alvar Laigna: System One next to the LLM, first week in a procurement assistant (Sept. 29, 2026)"
    url: https://alvarlaigna.com/posts/system-one-next-to-llm
    grade: Company report
  - title: "Eesti.ai: Estonia’s government AI projects, including AI-assisted below-threshold procurement (Hankearu)"
    url: https://eesti.ai/en/projects
    grade: Official docs
  - title: "Tabbit retrospective on 18 months of browser agents, reposted by BAAI Hub (Nov. 21, 2026, in Chinese)"
    url: https://hub.baai.ac.cn/view/59891
    grade: Company report
  - title: "KrASIA: Meituan’s GN06 unit builds Tabbit, an AI browser (Cheng Zi, Apr. 17, 2026)"
    url: https://kr-asia.com/meituans-gn06-unit-builds-tabbit-an-ai-browser-aimed-at-saving-users-time
    grade: Independent reporting
---

A public buyer in Estonia types a request into a drafting tool. They want to buy a small batch of office chairs. The tool has to work out what kind of request this is before it can help.

That first step used to take an LLM about 7.5 seconds. Now, when a decision model is sure of the answer, it takes under a second.

A decision model is an AI that answers a fixed question by giving each possible answer a percentage. It writes no words. Here the question is “what kind of message is this?”

An LLM alone gives an answer with no number on how sure it is. That is an unknown risk. Stop using LLMs alone.

However, when coupled with a decision model, the LLM handles the open work and the decision model takes the fixed choices.

The question is where that split pays off. Two teams tried it, with opposite results.

| | Estonia’s procurement tool | Tabbit’s browser agent |
| --- | --- | --- |
| The decision model’s job | Fixed choices in a chat tool | Steps on changing web pages |
| How it ran | Both models started together | Jev went first, and the LLM took unsure steps |
| What happened | Much faster sorting | Rarely used |

## The two teams

**Estonia.** RTK is the Estonian government’s shared service center. Alvar Laigna, an AI architect there, builds Procurement Mind. It helps public buyers draft documents for small purchases.

**How it worked before.** Every chat message went to an LLM that planned the next step. Laigna wrote that the LLM took “roughly 7.5 seconds” on questions with only a few possible answers.

**What changed.** By late September, his team had added Jev, a decision model from a company called TypeSafe. Jev makes three fixed choices.

It sorts each message. It ranks which passages of text the tool reads first. It picks likely codes for the purchase from an official list.

The LLM still writes the drafts and handles anything open. In Laigna’s words, the LLM is for “language and deliberation,” and the decision model is for “structured micro-decisions.”

**The result.** Jev’s answer to the sorting question took about 0.8 seconds. To compare, the team sometimes let the LLM finish in the background. Jev was sure 11 times, and each time its answer matched the LLM’s.

**China.** Tabbit makes an AI browser that does tasks on websites for its users. It says it has more than 100,000 users.

**What Tabbit tried.** In its test, Tabbit’s agent ran on Kimi K3, an LLM. Tabbit tested whether Jev could take some steps off the LLM.

**The result.** On single questions, Jev did well. It judged the state of a web page as accurately as the LLM. It took about a tenth of the time.

But in real tasks, Jev barely got used. Tabbit let Jev go first and passed unsure steps to the LLM. Jev was sure enough on only about 2% of the steps. The LLM’s workload did not drop.

## Four lessons

### 1. Give the decision model the fixed questions

Tabbit’s rule has two parts. The question must have a short list of answers. And the answer must be in the message or page the model sees.

Sorting a chat message fits that rule. So does picking a code from a short list.

Deciding the next click on a page that keeps changing does not. Tabbit wrote that on those tasks, each step still needs the LLM.

### 2. Where speed matters, run it beside the LLM, not in front of it

In Estonia, both models start on the sorting question at the same moment. If Jev is sure, its answer is used and the LLM is stopped. If not, the LLM’s answer arrives when it always did.

Laigna’s point: the worst case is the old wait. Jev can only make people wait less.

Tabbit let Jev go first on each step. When Jev was unsure, which was nearly always, the step went to the LLM anyway. Its tasks were also harder, on pages that kept changing.

### 3. Count how often the decision model answers, not just how often it is right

In Tabbit’s tests, Jev was right on single steps. It also took about a tenth of the LLM’s time.

None of that mattered in the tasks. The LLM did nearly every step, so nothing was saved. Tabbit wrote that being right on one step does not mean a long task works.

Measure how often the decision model is sure enough to act. That share is what saves time and money.

### 4. Ask about what is visible, and turn on one choice at a time

Laigna’s team found that Jev did poorly on abstract questions. It did well on questions about the words a message actually used.

Each of Jev’s choices has three settings. Live means its answer is used. Background means its answer is only compared with the LLM’s. Off means it does not run.

A choice goes live once its answers hold up in the background.

## How it works

**What a decision model is.** It answers one fixed question with a percentage for each allowed answer. It writes no words.

**How it is trained.** TypeSafe says Jev is trained so that its percentages match how often it is right. TypeSafe’s docs say Jev is not trained on customer requests or responses.

**How Estonia set it up.** Each choice has a bar. The bar is how sure Jev must be before its answer is used. Laigna sets each bar by what a wrong answer would cost.

Only the sorting question runs at the same time as the LLM. For ranking passages and picking codes, the tool waits for Jev’s answer before it goes on.

## What it means for you

**Money.** Laigna wrote that sorting with Jev was “hundreds of times cheaper” than the LLM call it replaced.

**Customers.** A buyer waits for every answer. In Estonia, the best case saves about six or seven seconds on a message.

**Revenue.** Neither team has tied the change to sales. Laigna wrote that the real test is whether buyers draft better documents in less time.

**Risk.** On sorting, running both models together means a slow or unsure decision model adds no wait. The LLM covers every message the decision model does not answer.

### The same pattern in other industries

- **Software.** Unblocked lets Jev pick which saved notes its AI agent reads. It says Jev now makes that choice on every question. [Unblocked’s write-up](https://getunblocked.com/blog/jev-in-production-vs-cross-encoder/).
- **Database monitoring.** pgEdge lets Jev decide whether a database alert is real. If Jev fails to answer, an LLM makes the call. [pgEdge’s announcement](https://www.pgedge.com/press-releases/pgedge-ai-dba-workbench-now-supports-jev-and-other-decision-models).
- **Hiring.** Jack & Jill had a decision model score every candidate. An LLM read only the shortlist, and screening costs fell 88%. [How Jack & Jill did it](/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Doesn’t the LLM still cost money if it starts every time?** When Jev is sure, the LLM call is stopped early. Laigna doesn’t say how much that saves on the LLM’s bill.

**How often was Jev sure in Estonia?** Laigna doesn’t say. That share decides how much time and money the design saves.

**Is Estonia’s tool still in use?** Laigna’s site still says he builds it. He hasn’t published new numbers since September.

**Why did Tabbit’s design fail?** Tabbit doesn’t say how sure Jev had to be. A high bar on hard pages would send almost everything to the LLM.

### How to make the change

1. **List the choices your LLM makes** that have a short list of possible answers.
2. **Keep the ones where the answer is visible** in the message or page itself.
3. **Start the decision model and the LLM together.** Use the decision model’s answer only when it clears the bar.
4. **Set each bar by the cost of a wrong answer.**
5. **Run new choices in the background first,** and compare them with the LLM’s.
6. **Track two numbers:** how often the decision model answers, and how many LLM calls that saves.

## For your developer

Here is the pattern as code. Both models start together. If the decision model is sure, the LLM is stopped. If it is unsure, slow or down, the LLM’s answer is used as before. This is my sketch, not RTK’s code. I haven’t run it on their data, so treat it as expected, not measured.

```python
import asyncio

async def route(message, decide, llm_plan, bar=0.9, live=True):
    plan = asyncio.create_task(llm_plan(message))  # the LLM starts at once, as before
    try:
        label, prob = await asyncio.wait_for(decide(message), timeout=2)
    except Exception:
        return await plan, "llm"  # decision model slow or down: the usual path
    if live and prob >= bar:
        plan.cancel()  # sure enough: use the fast answer and stop the LLM
        return label, "decision model"
    return await plan, "llm"  # unsure, or running in the background only
```

My worked example adds the scorecard: how often the decision model answers, how often it agrees with the LLM, and how many LLM calls it saves. [Subscribe for access](/subscribe/).

## The fine print

- **The opening.** The chairs are my illustration. The 7.5 seconds and the step come from Laigna’s post.
- **Cost.** Before Jev, the LLM cost “about two US cents” per question, per Laigna. Jev made 60 decisions across the three choices for less than one US cent in all. “Hundreds of times” is his phrase. His totals show at least 120 times cheaper, by my arithmetic. One figure is per question. The other is per decision.
- **Estonia’s numbers.** From Alvar Laigna’s post of Sept. 29, 2026, on his site and on Medium. He wrote that the views are his own. The model is jev-1.13.0. The LLM is not named.
- **The time.** About 0.8 seconds for Jev, against about 7.5 for the LLM alone. That is about 89% less, by my arithmetic. He puts the best-case saving at about six to seven seconds.
- **The sample.** “Across about four to five days of early live use and 60 decisions so far … the whole period cost less than one US cent.”
- **Agreement.** Jev was sure on 11 sorting answers, and all 11 matched the LLM. Agreement with the LLM is not proof that either answer was right.
- **The name.** Laigna calls the project Procurement Mind. Estonia’s government lists a project called Hankearu, for AI-assisted below-threshold procurement, led by the Ministry of Finance and RTK. Hankearu means “procurement mind.” No official page I found links the two names.
- **Language.** Laigna notes that TypeSafe names English as Jev’s strongest language. He wants stronger Estonian support and an EU region.
- **Tabbit’s numbers.** From Tabbit’s retrospective, reposted by BAAI Hub on Nov. 21, 2026. The original appeared on WeChat around Nov. 10 to 12, and I could not open it. The author is a Tabbit team member who isn’t named.
- **Tabbit’s single-step tests.** On 165 screenshots, Jev judged page state 95.2% correctly, level with Kimi K3. Its median time was 0.76 seconds, against 8.54 for K3, about 91% less by my arithmetic. On 36 questions about where to click, Jev got 35 right and K3 got 36.
- **Tabbit’s task test.** Ten tasks from a browser test set called BU Bench, 118 steps in all. Jev decided 2. Tabbit wrote that K3 calls did not fall. A second design, where K3 planned and Jev clicked, produced 0 clicks by Jev.
- **Tabbit’s caveat.** Tabbit wrote that local speed gains cannot be read as whole-task gains. Tabbit says it now uses Jev in “specific, verified steps,” my translation. It doesn’t say which.
- **Tabbit itself.** Its site claims “107,763 users across 20+ countries.” KrASIA reports that it is built by Meituan’s GN06 team.
- **Training.** From TypeSafe’s docs page on its models.
- **How solid this is.** Estonia’s tool was a proof of concept. Both accounts come from the builders, on small tests, with no outside check. Laigna calls his sample “small and partly our own test traffic.” Tabbit says its sample is small and does not prove Jev useless. Treat them as early signs.
- **Unblocked and pgEdge.** From their own posts of Sept. 22 and Nov. 19, 2026. Jack & Jill is from my earlier post, which cites its sources.
- **This site** is independent and not affiliated with RTK, the Estonian government, Tabbit, Meituan, TypeSafe, Unblocked, pgEdge or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
