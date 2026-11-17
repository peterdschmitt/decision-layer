---
title: "How a sales-AI company moved about half its tested LLM tasks to a decision model"
dek: "Stop using LLMs alone, but don’t drop them either. SellScale tested a decision model on its own LLM tasks and moved about half, keeping the LLM for the rest."
kind: Reality check
readMinutes: 9
author: Peter Schmitt
audience: For executives deciding how much of their AI spend can move
published: 2026-11-17
lastChecked: 2026-11-17
modelVersion: Jev, per SellScale (version not named)
stats:
  - value: "About half"
    label: "of SellScale’s tested LLM tasks passed its bar"
  - value: "99%"
    label: "the test score needed to take over from an LLM"
  - value: "41%"
    label: "of the LLM’s cost, in a test pairing the two"
  - value: "Over 2x"
    label: "faster per decision than the quickest LLM SellScale tried"
statsNote: "Three come from SellScale’s own write-up of Sept. 22, 2026. The 41% comes from a Carnegie Mellon study. The fine print has the details."
sources:
  - title: "SellScale: How we use decision models in production (Sept. 22, 2026)"
    url: https://www.sellscale.com/blog-posts/how-we-use-decision-models-in-production
    grade: Company report
  - title: "IEEE Spectrum: AI companies develop decision models to avoid hallucinations (Matthew S. Smith, Nov. 16, 2026)"
    url: https://spectrum.ieee.org/typesafe-ai-hallucination-decision-models
    grade: Independent reporting
  - title: "Li, Miao, Krishnan and Padman: JEV-as-a-Judge, accept when confident, escalate when unsure (arXiv 2609.26550, revised Oct. 29, 2026)"
    url: https://arxiv.org/abs/2609.26550
    grade: Independent reporting
  - title: "TypeSafe docs: Models (how Jev is trained)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
---

A sales team is talking in a Slack channel. One person says a prospect booked a demo. Another posts a lunch order.

An AI agent called Selix sits in that channel. It answers the first message without being tagged. It stays out of the lunch order.

That one choice, speak or stay quiet, is made by a decision model, an AI that picks from fixed answers and says how sure it is. SellScale, the company behind Selix, measured how much of its other LLM work a decision model could take. The answer was about half.

## The trap

Cloudflare’s Michelle Chen gave IEEE Spectrum a figure this week. She said a decision model could probably take 80 percent of typical LLM tasks.

That is a guess, not a measurement. If you act on it, you swap out an LLM that works and hope.

An LLM alone has its own problem. It answers in text, with no number on how sure it is. You accept every answer on faith. That is an unknown risk.

However, when coupled with a decision model, each decision first gets a percentage. You keep the confident ones and send the rest to the LLM.

| | An LLM alone | A decision model coupled with the LLM |
| --- | --- | --- |
| Who decides | The LLM, every time | The decision model, when it is sure |
| What happens when it is unsure | Nobody knows it is unsure | The LLM takes the item, or the agent holds back |
| What you can see | An answer | An answer, how sure it was, and who made it |

## The story

**Who.** SellScale sells Selix, an AI agent that finds and contacts sales prospects for its customers. Selix works inside customers’ Slack channels and acts for them around the clock.

**Before.** SellScale used LLMs for many small judgments, such as sorting the records it uses to test its agents. Is this record useful or noise? Is it a duplicate? None of these needs a written answer.

One feature could not ship at all. SellScale wanted Selix to follow group chats and speak up without being tagged. Even the fastest LLMs it tried took long enough that people noticed the pause.

**The test.** When TypeSafe released its Jev decision model in September, SellScale did not switch on faith. It ran Jev through the tests it already used for its LLM steps, on its own data.

It set a high bar. To replace an LLM step that already worked, Jev had to score 99% or better on those tests. For the group-chat feature, which had no working version, 96% was enough. Jev met it exactly.

**The result.** The scores varied widely from task to task. Complex quality questions, the kind with a long scoring guide, scored lowest. Many others fell short of the bar too.

About half of the tasks passed. Most were simple yes-or-no questions, which scored 99% or higher. SellScale switched those and left the rest on the LLM.

**What changed.** The decision model was more than twice as fast as the quickest LLM SellScale tried.

In group chats, the decision model now makes one call per message: stay quiet, reply, or bring in the right teammate. When it isn’t sure, Selix stays quiet. SellScale says it would rather miss a reply than talk over people.

Selix posts a quick emoji while the full reply is being written, so people know it heard them.

In that sorting work, the decision model now labels each record first. Is it a useful example, noise, or a product problem?

Confident answers are accepted. Unsure ones go to the LLM SellScale already used. Every label records which model made it.

## The twist

An independent study found the decision model passed and failed on similar kinds of tasks.

Researchers at Carnegie Mellon, including Ramayya Krishnan, gave Jev and OpenAI’s GPT-6 LLM the same job: grading answers to questions. Jev’s accuracy came within three points of the LLM’s when the answer could be read straight off the text. It fell behind when the judgment needed math, code or logic.

That looks like SellScale’s split. Simple questions moved. Questions that need working out did not.

Then the researchers coupled the two. Jev’s confident verdicts were accepted, and the rest went to the LLM. The pair was slightly more accurate than the LLM alone. It cost 41% of the LLM’s fee.

## My verdict

Cloudflare’s 80% may hold for some teams. SellScale’s figure, about half, is a measurement of its own tasks against a strict bar.

The lesson is not that a decision model replaces an LLM. It replaces the LLM where the answer can be read off the page. For the rest, it hands the item to the LLM and says so.

Stop using LLMs alone. Couple the LLM with a decision model, measure which tasks move, and keep the LLM for what remains.

## How it works

**What a decision model is.** It is an AI that answers a fixed question with a percentage for each allowed answer. It writes no words. SellScale’s advice is to look for LLM calls that already return one choice from a list.

**How it is trained.** TypeSafe says Jev is trained with a method it calls RLCD, so its percentages track how often it is right. TypeSafe also says Jev is not trained on customers’ requests. It hasn’t published its training data.

**How SellScale set it up.** Each task was scored on SellScale’s own past examples, with known right answers, before it moved. Before asking, SellScale removes answers it already knows can’t apply, so the model picks from a shorter list.

**The hand-off.** For each item, a confident answer from the decision model is accepted. An unsure answer goes to the LLM. If the decision model is down, the data work runs as before, slower and at higher cost.

**The record.** Every answer logs its source and how sure the model was. SellScale says that is how it sees how much work the decision model does, and how it tunes the bar later.

## What it means for you

**Money.** Don’t budget on someone else’s estimate, such as Cloudflare’s 80%. Start from your own list of LLM calls that pick one answer, and test each one. In the Carnegie Mellon test, the coupled pair cost 41% of the LLM alone, with no loss in accuracy.

**Revenue.** SellScale’s group-chat feature could not ship on an LLM at all. The decision model made it possible. SellScale has not said what the feature earns.

**Customers.** SellScale chose to have Selix stay quiet when unsure. Your customers feel that choice. Decide which mistake costs more, a missed reply or an unwanted one, and set the bar to match.

**Risk.** An LLM alone is an unknown risk. With the coupled pair, you know which answers were sure and which went to the LLM.

### The same pattern in other industries

- **Web automation.** Lightpanda, which makes a browser for AI agents, has Jev decide what kind of page it is on and which button to click. The LLM keeps the writing, and in Lightpanda’s own test, signing in took about 93% less time. [Lightpanda’s write-up](https://lightpanda.io/blog/posts/lightpanda-and-jev).
- **Editing tools.** A developer’s Japanese proofreading tool has Jev answer each question about context first. Confident answers are kept and the LLM reads the rest, which the developer says cut the LLM’s share of the work by 60%. [The write-up, in Japanese](https://zenn.dev/bamboo_nova/articles/c6176164dcffd0).
- **Hiring.** Jack & Jill had a decision model score every candidate. An LLM read only the shortlist. Jack & Jill’s screening costs fell 88%. [How Jack & Jill did it](/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Why did only about half pass?** SellScale’s bar was strict, and many of its tasks need judgment that has to be worked out.

**Did SellScale save money?** It hasn’t said. It gave no volumes or costs, only speed and pass rates.

**Is 99% the right bar for me?** It depends on what a wrong answer costs you. SellScale used a lower bar where no working version existed.

**What if the decision model goes down?** In SellScale’s data work, the LLM picks up the work, as before. SellScale doesn’t say what happens in group chats.

**What would I want to see next?** SellScale’s share of answers made by each model, and its cost before and after.

### How to make the change

1. **List every LLM call that returns one choice from a list.** These are the candidates.
2. **Give each one an owner and a set of past examples with the right answers.**
3. **Set a bar per task.** Make it high where a working LLM step already exists.
4. **Test the decision model on each task,** and move only the ones that pass.
5. **Keep the LLM behind it.** Accept confident answers and send the rest to the LLM.
6. **Log which model made every answer,** and how sure it was.
7. **Retest when the decision model’s version changes.**

## For your developer

Here is the pattern as code. The decision model answers first. A rule acts on its percentage. Unsure items go to the LLM, and a fixed rule catches the case where both fail. This is my sketch, not SellScale’s code. I haven’t run it on their data, so treat it as expected, not measured.

```python
def cascade(item, decide, llm, rule, threshold=0.9):
    try:
        probs = decide(item)  # decision model: chance for each allowed answer
        label = max(probs, key=probs.get)
        if probs[label] >= threshold:  # sure enough: accept it
            return label, "decision_model", probs[label]
    except Exception:
        pass  # decision model down: fall through to the LLM
    try:
        return llm(item), "llm", None  # unsure or down: the LLM you already use
    except Exception:
        return rule(item), "rule", None  # both failed: a fixed rule
```

My worked example adds the first step: score each task on your own examples and move only the ones that clear the bar. It also covers the speak-or-stay-quiet shape, with tests. [Subscribe for access](/subscribe/).

Public material from others:

- **[SellScale’s write-up](https://www.sellscale.com/blog-posts/how-we-use-decision-models-in-production)** (company report): its bars, scores, timings and advice list.
- **[The Carnegie Mellon preprint](https://arxiv.org/abs/2609.26550)** (independent research): the accept-or-escalate test, with a recipe for checking thresholds on your own data.

## The fine print

- **SellScale’s numbers.** All come from its own post of Sept. 22, 2026, signed “kevin.” I read it in full. It names Jev but not the version, and gives no volumes, costs or business results. “About half of the workflows we tested were acceptable, mostly simple yes/no questions.” Complex rubric questions scored 60 to 70%, many others 70 to 90%, and some 99% or higher.
- **The opening scene.** It follows a screenshot of a Slack channel in SellScale’s post.
- **The speed.** SellScale says Jev decides in 100 to 120 milliseconds. Of the LLM times, it says: “In real channels that pause was noticeable.” GPT-OSS on Cerebras took 280 to 390 milliseconds, and GPT Luna on its fast setting took 400 to 600.
- **The group chat.** The 96% bar applied there because no working LLM version existed. SellScale’s scorecard shows the decision model scored 96% on it, exactly the bar.
- **Cloudflare’s 80%.** Michelle Chen, a group product manager at Cloudflare, told IEEE Spectrum: “You can probably offload 80 percent of your typical LLM tasks to a System One model.” Cloudflare makes its own decision models. The article gives no measurement behind the figure. It says Cloudflare uses decision models in place of custom-built sorting models, for spam, phishing and prompt attacks, and does not describe an LLM working alongside them.
- **The Carnegie Mellon study.** Yubo Li, Yidi Miao, Ramayya Krishnan and Rema Padman, arXiv 2609.26550, first posted Sept. 22, 2026, revised Oct. 29. It is a preprint, not yet peer reviewed. Jev alone came within three points of GPT-6 where the verdict can be read off the text, at 0.36% of its fee. The coupled pair was 0.9 points more accurate than GPT-6 on 1,610 test pairs, at 41% of its fee. In a live test on two new workloads, it matched GPT-6’s accuracy exactly. The authors say the method weakens on answers written to fool it by style, and on prose with no reference answer.
- **The proofreading tool.** A community project by the Zenn author bamboo_nova, Oct. 12, 2026. Jev settled 12 of 20 hand-built questions, and 36 accepted answers over three runs had no errors. The developer calls the drop in the LLM’s load 60%.
- **Lightpanda.** Its own test on one sign-in page, over five runs: 0.34 seconds with Jev against 5.0 seconds with Claude Haiku 5.5, published Nov. 10, 2026, in its release 1.0.3.
- **Training.** From TypeSafe’s docs page on its models.
- **Jack & Jill.** From my earlier post, which cites its sources.
- **This site** is independent and not affiliated with SellScale, TypeSafe, Cloudflare, Lightpanda or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
