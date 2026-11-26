---
title: "Tencent’s QQ Music decision model found errors in its own answer key, then doubled its score"
dek: "Stop using LLMs alone. QQ Music’s decision model makes the first call on each request. With an LLM helping clean its examples, it got that call right twice as often as before training."
kind: Worked example
readMinutes: 10
author: Peter Schmitt
audience: For executives putting AI assistants in front of customers
published: 2026-11-26
lastChecked: 2026-11-26
modelVersion: Tencent’s own 9B decision model, as reported Nov. 26, 2026
stats:
  - value: "From 38% to 78%"
    label: "of test requests with both calls right, after training"
  - value: "35–40%"
    label: "of dozens of old examples the model doubted were wrong"
  - value: "1 graphics chip"
    label: "holds a full copy of the live decision model"
statsNote: "All three come from Tencent’s own write-up, which I read in a Chinese repost and a Chinese news report of Nov. 26, 2026. The test set was a few hundred real requests. Tencent gives no cost or traffic figures. The fine print has the details."
sources:
  - title: "Tencent Cloud Developer, repost on 53AI: JEV决策模型落地QQ音乐实践：把决策延迟打到25ms [Putting a JEV decision model into production at QQ Music] (Nov. 26, 2026)"
    url: https://www.53ai.com/news/LargeLanguageModel/2026112624517.html
    grade: Company report
  - title: "Zhidx: QQ音乐，用上决策模型了 [QQ Music now uses decision models] (Nov. 26, 2026)"
    url: https://m.zhidx.com/p/614738.html
    grade: Independent reporting
  - title: "Rust Foundation: Needles, Haystacks, and Numbers Between 0 and 1 (Nov. 23, 2026)"
    url: https://rustfoundation.org/media/needles-haystacks-and-numbers-between-0-and-1/
    grade: Company report
  - title: "Charlie Krueger, MediaCivic: jev-case-study (GitHub, Nov. 25, 2026)"
    url: https://github.com/milo-M4/jev-case-study
    grade: Company report
---

Tell a car’s music assistant to “play road rock,” and it may hunt for a song called “Road Rock” instead of a rock playlist. The search worked. The call about what the user wanted was wrong.

That first call is where Tencent’s QQ Music started. Before its AI assistant does anything with a request, it must make two calls. Where should the request go? And what does the user want?

Get those calls wrong, and even the best AI after them may not help. Make them slowly, and the user feels the lag. Every company with an AI assistant makes the same two calls.

A decision model is an AI that answers a fixed question by giving each possible answer a percentage. It writes no words.

One common way to make these first calls is to ask an LLM. Tencent calls that the heavy approach: slow, costly, and prone to answers in the wrong format.

An LLM alone also gives no reliable number on how sure it is. That is an unknown risk on every request. Stop using LLMs alone.

However, when coupled with a decision model, the LLM gets a new job. The decision model makes the first call, with a percentage. The LLM helps clean the examples the decision model learns from.

Tencent trained its own decision model for QQ Music this way. On a test of real requests, it got both calls right twice as often as before training.

## Who did it

QQ Music is Tencent’s music streaming app. Its business team worked with Venus, an AI research team at Tencent.

The business team supplied real conversations from the app, wrote the rules for each call and settled disputes. The Venus team built and trained the model. Tencent Cloud Developer, the company’s developer channel, published the write-up. Reposts appeared on Nov. 26.

## How it worked before

Tencent describes two old ways to make the first call. One is to ask an LLM, the kind of AI that writes text. The other is a set of hand-written rules or a simpler, older kind of model.

The rules and small models struggle with casual, everyday speech.

## What went wrong first

The team first tried decision models off the shelf. None was good enough.

Even a large ready-made decision model got both calls right on fewer than half the test requests. Jev, a ready-made decision model sold by a company called TypeSafe, also fell short of what the team needed to go live.

“Post-training is not a nice-to-have. It is a must,” the team wrote. Post-training means teaching a ready-made model your own rules with your own examples.

## The turn

The team first trained a large decision model on QQ Music’s rules. It got much better at both calls. Then the team noticed something odd in its mistakes.

On dozens of examples, the model was very sure the answer on file was wrong. When the team checked those examples against the written rules, the model sometimes looked right. The QQ Music team reviewed that batch by hand. More than a third of those answers on file were wrong.

The model had become good enough to find errors in the examples it learned from. So the team built a three-step cleanup before training again.

**The decision model goes first.** The large trained model relabels every example. It marks two kinds for review: examples where it strongly disagrees with the old answer, and examples where it can’t decide.

**An LLM gives a second opinion.** Another AI, the LLM GPT-6-Astra, relabels the same examples on its own. Where the two models agree, their shared answer is kept.

**People settle the rest.** Where the two models disagree, or the decision model can’t decide, QQ Music staff rule using the written rules. Each ruling also sharpens the wording of the rules.

The team ended up with about ten thousand clean examples. New mistakes found in daily use go back through the same three steps.

## What happened

**Twice as often right.** The team then trained a mid-sized model on the cleaned examples. After training, it got both calls right on 78% of the test requests. The same model before training managed 38%.

**Steadier answers.** The team shuffled the order of the possible answers to see if the model would change its mind. Before training, it did so about one time in 15. After training, about one time in 100.

**Live.** Tencent says the mid-sized decision model now runs in QQ Music. Each copy fits on a single graphics chip.

**Smaller worked too.** In a later test, two smaller decision models scored almost the same. The smallest typically answered in 25 milliseconds, a fortieth of a second. Tencent has not given the speed of the model it runs.

**Ahead of Jev.** On the same test, Tencent’s model got both calls right far more often than Jev. Tencent says that gap is about knowing the business, not about which model is better. Jev had never seen QQ Music’s rules.

## How it works

**What it reads.** The user’s preference tags, the song now playing, the conversation so far and the new request. Each possible answer comes with a rule the business team wrote. It answers both calls in one step.

**How it was trained.** The team taught ready-made decision models QQ Music’s rules with the cleaned examples. The large one was from Alibaba’s Qwen series. A round of training took a few hours, and Tencent says new mistakes feed a new model each week.

**How the percentages are used.** Tencent says the team can set a bar based on the percentages. The bar is how sure the decision model must be before its answer is used. Tencent has not published its bar.

| | An LLM makes the first call | Coupled with a decision model |
| --- | --- | --- |
| Speed of the first call | Seconds, Tencent says | A fortieth of a second, for the smallest model tested |
| Answer | Words, sometimes in the wrong form | A percentage for each allowed answer |
| The LLM’s job | Everything, first call included | A second opinion on the training examples. Tencent doesn’t say what writes the replies |

## What it means for you

**Money.** Tencent gives no cost figures. It says running its own model means no fee per request and data that stays in house.

**Customers.** A wrong first call plays the wrong song or starts the wrong task. A slow one makes the app feel stuck.

**Revenue.** Tencent didn’t report usage or sales, so the effect on revenue is unknown.

**Risk.** Each answer comes with a percentage, so the team can see how sure the model is. With an LLM alone, there is no such number. Tencent also found risk in its own examples.

### Decision models in other industries

- **Software security.** The Rust Foundation is trying a decision model that scores every new Rust package for signs of malware, with no LLM involved. People look only at those above its bar. At the bar it reports, 4 of the 15 flagged packages were malicious, [the foundation reports](https://rustfoundation.org/media/needles-haystacks-and-numbers-between-0-and-1/).
- **Small business.** Charlie Krueger runs AI agents for a household and a small business. A decision model picks which AI should answer each request before any LLM runs. Over six weeks it judged about 18,000 requests, [his case study says](https://github.com/milo-M4/jev-case-study).
- **Hiring.** The recruiting company Jack & Jill had a decision model score every candidate. An LLM read only the shortlist, and screening costs fell 88%. [How Jack & Jill did it](https://decision-layer-indol.vercel.app/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Is 78% good enough?** It is the share with both calls right on a cleaned test of real requests. About one request in five still had a wrong call. Tencent doesn’t say what happens to the rest, or how users fared.

**Should I build my own?** Tencent did, because no ready-made model knew its rules. Most companies can start by writing their rules into the questions and testing a ready-made model on their own requests.

**Why let an LLM near the training data?** It gives a second opinion from a different kind of model. People decide only where the two disagree or the decision model is unsure.

### How to make the change

1. **Write down the first calls your assistant makes,** and the rule behind each answer.
2. **Collect real requests** with the answers you believe are right.
3. **Test ready-made decision models** on them before building anything.
4. **Look hard at the confident misses.** Some will be wrong answers in your own data.
5. **Clean your examples in three steps:** the decision model relabels, an LLM relabels separately, people settle the disagreements.
6. **Train, then test again** on a set cleaned the same way.
7. **Set a bar for each answer,** roll out gradually and watch the misses.

## For your developer

Here is the cleanup step as code. The decision model and an LLM each relabel every example. Where they agree, their answer stands. Only disagreements and unsure cases go to people. This is my sketch, not Tencent’s code. I haven’t run it, so treat it as expected, not measured.

```python
def triage(examples, decide, llm_label, unsure=0.4):
    keep, to_people = [], []
    for ex in examples:
        probs = decide(ex["state"], ex["question"])          # a percentage per allowed answer
        top, p = max(probs.items(), key=lambda kv: kv[1])
        second = llm_label(ex["state"], ex["question"])      # an LLM labels it on its own
        if p < unsure:
            to_people.append((ex, "decision model unsure"))
        elif top != second:
            to_people.append((ex, "the two models disagree"))
        elif top != ex["label"]:
            keep.append({**ex, "label": top, "relabelled": True})  # both say the old answer was wrong
        else:
            keep.append(ex)
    return keep, to_people
```

Tencent has not published its code. My worked example adds the people’s queue with a log of each ruling, the test for answers that change when the options are shuffled, and the both-calls-right score. [Subscribe for access](https://decision-layer-indol.vercel.app/subscribe/).

## The fine print

- **The source.** Tencent Cloud Developer, “JEV决策模型落地QQ音乐实践：把决策延迟打到25ms” [Putting a JEV decision model into production at QQ Music: decision latency down to 25 ms]. I could not find the original post. I read a repost on 53AI, dated Nov. 26, 2026, and a news report by Zhidx the same day. The 53AI page hides its last part behind a login, but the text runs through the conclusion. Translations are mine.
- **JEV, not Jev.** The deployed model is Tencent’s own, not TypeSafe’s Jev. The team uses “JEV” as a name for this kind of model. The large teacher model is from the Qwen3.5 series. Tencent does not name the base of the deployed 9B model.
- **The two calls.** “路由+意图” [routing + intent], answered in one pass. The “play road rock” example is from Zhidx, as an illustration. It is not a reported QQ Music result.
- **Before.** Tencent describes the old ways in general terms: generative LLMs, rules or small classic models. It calls its model a replacement for “替代生成式大模型做判别的重方案” [the heavy approach of using a generative LLM to judge]. It does not say what QQ Music ran before, or give its accuracy.
- **Off the shelf.** On the raw test set, before cleaning: “即便是27B的JEV模型，joint_acc也只有0.43” [even the 27B JEV model had joint accuracy of only 0.43]. “Typesafe-Jev官方API的效果也不足以支持直接上线” [TypeSafe’s official Jev API was also not good enough to go live]. The team also names Gemini Decisions as falling short.
- **The large model.** After training, routing accuracy was 86.5% and intent accuracy 76.3%.
- **The doubtful examples.** “数十条” [dozens] of high-confidence disagreements, so the share rests on a small batch. QQ Music staff confirmed “约 35%~40% 确实是脏数据” [about 35–40% really were mislabelled]. The final set was “近万条” [nearly ten thousand] examples.
- **The results.** On “数百条真实业务样本” [a few hundred real business samples], with test answers cleaned the same way as the training examples: question-level accuracy up 24.9 percentage points against the 9B model’s own base, joint accuracy “从 0.38 翻倍至 0.78” [doubled from 0.38 to 0.78], and the shuffle flip rate from 6.5% to 1.0%. The 38% is the 9B base on the cleaned test, so it differs from the 43% above. Against jev-1.14.0, the best public service tested: 18.4 points higher by question and 32.2 points higher on joint accuracy. Tencent: “这个对比的意义不在于分出高下” [the point of this comparison is not to rank them].
- **Deployment.** The 9B model was quantized to FP8 with identical accuracy, 0.926 on a dedicated test, and 98.8% agreement on the top answer. Peak memory in BF16 was about 29 GiB, on one L20 chip. Training froze the backbone and trained low-rank adapters and the decision read-out on two H20 chips for a few hours. Tencent describes the loop as “周级迭代” [weekly iteration].
- **Smaller versions.** 9B, 4B and 2B models were within 0.5 points of each other. The 2B model’s median time was 25 ms. These are exploratory. The 9B model is the one deployed.
- **What isn’t reported.** Request volume, cost, user outcomes, an A/B test, the bar, what happens to unsure answers, the deployed model’s speed, and any accuracy figure for an LLM making the first call.
- **Rust Foundation.** From a post by Adam Harvey, Nov. 23, 2026, describing exploratory work. At a score of 0.7 or more, 15 packages were flagged and 4 were malicious. It does not name the model.
- **Charlie Krueger.** His MediaCivic case study, posted Nov. 25, 2026, reports “18,416” requests judged by Jev over six weeks for about $2.79 in total. Jev answers before any LLM runs on a request. The study also documents a looping agent that sent 400 requests. It claims no savings figure.
- **Jack & Jill** is from my earlier post, which cites its sources.
- **How solid this is.** This is Tencent’s own account, through reposts, with a small test set and no business figures. Treat it as an early sign.
- **This site** is independent and not affiliated with Tencent, TypeSafe, the makers of GPT-6-Astra, Alibaba’s Qwen team, the Rust Foundation, MediaCivic or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
