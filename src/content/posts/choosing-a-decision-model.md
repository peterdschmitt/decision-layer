---
title: "How to pick a decision model: the price barely matters, the mistakes do"
dek: "Stop using LLMs alone. Pair them with a decision model, but don’t pick one on price. In one independent test, the least accurate paid model made five times the mistakes of the best."
kind: Comparison
readMinutes: 12
author: Peter Schmitt
audience: For executives, operations and transformation leaders choosing which decision model runs their processes
published: 2026-11-01
lastChecked: 2026-10-31
modelVersion: jev-1.14.0
stats:
  - value: "5x"
    label: "the mistakes, worst paid decision model versus the best"
  - value: "$800"
    label: "a year at most, at a million emails a month"
  - value: "8.5 points"
    label: "more accuracy for one model, given its own cut-off"
  - value: "26 points"
    label: "apart on judging tone, for two models about even overall"
statsNote: "From Fabio Akita’s independent test of Oct. 10, 2026, and tests published by Construct and Better Stack. The $800 is for a million short emails a month. All are small tests. The fine print says what they can and can’t show."
sources:
  - title: "AkitaOnRails: Which Jev-like AI decision/classifier model is best? (Fabio Akita, Oct 10, 2026)"
    url: https://www.akitaonrails.com/en/2026/10/10/which-jev-like-ai-decision-classifier-model-is-best/
    grade: Independent reporting
  - title: "Construct: Clef vs Jev benchmark: Cloudflare’s decision model on real agent prompts (Ankush Singh, Oct 5, 2026)"
    url: https://construct.computer/blog/clef-vs-jev-benchmark/
    grade: Company report
  - title: "GlassFlow: Can a decision model replace an LLM? Tune it on your own data first (Ashish Bagri, Oct 12, 2026)"
    url: https://www.glassflow.ai/blog/decision-model-vs-llm
    grade: Company report
  - title: "Better Stack: Jev vs. Clef, a practical comparison of System One decision models (Stanley Ulili, Oct 12, 2026)"
    url: https://betterstack.com/community/guides/ai/jev-vs-clef-decision-model/
    grade: Independent reporting
  - title: "Better Stack (YouTube): Cloudflare just challenged Jev, so I tested their new model (Clef)"
    url: https://www.youtube.com/watch?v=Uihz1NkhFM0
    grade: Independent reporting
  - title: "Artificial Analysis: Introducing the Artificial Analysis Decision Index (Oct 13, 2026)"
    url: https://artificialanalysis.ai/articles/artificial-analysis-decision-index
    grade: Independent reporting
  - title: "InfoWorld: Microsoft separates decision-making from generative AI with a new model (Gyana Swain, Oct 13, 2026)"
    url: https://www.infoworld.com/article/4234290/microsoft-separates-decision-making-from-generative-ai-with-a-new-model.html
    grade: Independent reporting
  - title: "Entagl: TypeSafe Jev vs Gemini on 1,759 decisions (Entagl Research, Sept. 23, 2026)"
    url: https://entagl.com/blog/typesafe-jev-benchmark-ai-decision-models
    grade: Company report
  - title: "TypeSafe docs: Noul (yes-or-no questions answered with a probability)"
    url: https://docs.typesafe.ai/primitives/noul.md
    grade: Official docs
  - title: "TypeSafe docs: Models (how Jev is trained and customized)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
---

Fabio Akita wanted to know which decision model he could trust with a simple job: sorting support emails into the right queue.

A decision model is a new kind of AI. You pair it with an LLM, the kind of AI behind ChatGPT. It answers a fixed question, like which queue an email belongs in. It also says how sure it is.

Mr. Akita, a software developer in Brazil, tested 23 decision models. Some are paid services, run by their makers. He calls these hosted models.

He priced those at 10,000 emails a month. Each cost less than a dollar a month.

The mistakes were not cheap. The most accurate paid models were Jev, from the company TypeSafe, and Microsoft’s Decision-1. At that volume, each would get about 240 emails wrong a month.

Cloudflare’s Clef-flash, the least accurate of the paid ones, would get about 1,250 wrong.

Five times the mistakes, for almost the same bill. The cheapest, Decision-1, was tied for the most accurate. “The price difference between the hosted models is irrelevant next to the cost of being wrong,” Mr. Akita wrote.

## Why the choice matters now

An LLM can read anything and write back. But ask it to make the same call a million times, and you pay for every word. You also have no idea which of its answers are wrong.

So stop using LLMs alone. Couple an LLM with a decision model, and each decision comes back with a number: how sure the model is. That number is what makes full automation safe to trust.

You set a cut-off. Above it, the system acts. Below it, the case goes to the LLM or a person.

It pays off. Entagl, which makes AI that answers customer chats, tested this for one client. Coupling the two cut wrong decisions by about two-thirds. Entagl published the result in September.

So which decision model should you pick? TypeSafe released Jev in September. Cloudflare, Microsoft and OpenAI have since released their own. Others are free to download and run yourself.

I went through every head-to-head test I could find.

My verdict: don’t choose on price, and don’t choose on a leaderboard. Choose the model whose confidence holds up on your own work. Set its cut-off from your own data. Then keep checking.

## Fabio Akita: the mistake that costs the most

A good average can hide the one mistake that costs the most.

Mr. Akita’s test asked how serious each problem was. One email described a customer whose data was permanently lost. His written policy calls that critical. Jev, Decision-1 and Clef-flash called it critical.

Two others called it “degraded,” a lower level. One was Clef, the larger version of Clef-flash. The other was OpenAI’s Decisions, a different model from Microsoft’s Decision-1.

He also checked whether each model’s confidence was earned. On his test cases, which were short, none of the paid models made a mistake when it said it was more than 90% sure. One small free model, Decision 3.0 Edge, was not so careful. When it claimed that much confidence, it was wrong about one time in five.

His closing advice: “none of these models replaces the rule that’s already in code.” Fixed limits and policies stay in ordinary code. The decision model reads what people wrote. “And the test that matters is yours.”

## Construct: the same model, scored two ways

Construct, a start-up, builds an AI assistant. Its product asks Jev about 40 small questions. Should this action wait for the user’s go-ahead? Is this newly mentioned person someone the assistant already knows?

When Cloudflare released Clef, it said Clef could be swapped in for Jev with no changes. So Construct sent the same questions to Clef and Clef-flash, without changing a line. Then it scored all three on 117 test cases with known answers.

Using Jev’s cut-offs, Clef-flash got 82.1% right. With cut-offs set for Clef-flash itself, it got 90.6%, level with Jev. Nothing else changed.

“It was being read with another model’s ruler,” wrote Ankush Singh of Construct. His rule: a cut-off belongs to one model asking one question.

## Construct: a cut-off that went stale

Construct also found that a cut-off can stop working.

In September, Construct asked Jev whether two records described the same person. If Jev was at least 70% sure, the records were merged. Jev’s confidence on real matches had been above that.

Two weeks later, it asked Jev the same test questions again, over and over. Not one answer reached the cut-off. None of those records would have been merged.

TypeSafe had not changed Jev’s version number. Construct does not claim Jev got worse in general. Its conclusion: the same version name does not guarantee the same behavior.

Construct is now moving that decision to Clef, carefully. Jev keeps deciding while Clef’s answers are recorded beside it. Construct will set Clef’s cut-off from that record.

## GlassFlow: six days on its own data

GlassFlow, a data company, had an LLM watching its own systems. Every 10 minutes, the LLM read the latest system logs. Those logs record what its software was doing. The LLM decided whether anything needed a closer look.

GlassFlow ran Clef-flash beside it for six days, on the same logs. When the LLM flagged a log, Clef-flash was usually more sure something was wrong. When the LLM did not, Clef-flash was usually less sure.

But the cut-off Clef-flash came with did not work. It raised six times as many alarms as the LLM. It still missed a third of what the LLM caught. At the cut-offs GlassFlow tried, Clef-flash could not replace the LLM.

GlassFlow also tried using Clef-flash as a filter, to pick which logs the LLM should read. With a lower cut-off, the LLM would have read about 80% fewer logs. But again, a third of the problems the LLM had flagged would never have reached it. GlassFlow wants more data before it switches.

“The default line is not a setting to trust,” wrote Ashish Bagri of GlassFlow. The right cut-off, he wrote, “came from our data.”

## What the leaderboards can’t tell you

Better Stack, a software company, ran Jev and Clef on 200 comments from its YouTube channel. Overall, the two came out about even.

On one question, the two were far apart.

Better Stack used another AI model as referee. Asked about a comment’s tone, Jev agreed with that referee 75% of the time. Clef agreed 49% of the time. It kept calling clear criticism “neutral.”

Artificial Analysis, which ranks AI models, launched a leaderboard for decision models in October. Jev leads it. Yet on one of the leaderboard’s own tests, Jev came fourth.

So a leaderboard tells you which models are worth testing. It cannot tell you which one is right for your question, at your cut-off, this month.

## How it works

**What a decision model does.** You send it something to judge, like an email or a log. You also send a question with the answers you allow. It might be yes or no, one choice from a list, or a point on a scale.

It returns a percentage for each answer in one step. It writes no text, which is why it is fast and cheap.

**Why the number is the whole point.** Your system acts on that percentage.

That only works if the number is honest. If a model says 90% sure, it should be right about nine times in ten on your kind of question. Mr. Akita checked exactly that.

**How these models are made.** TypeSafe has not said how big Jev is or what data trained it. It says only that customer requests are not used.

Cloudflare built Clef on an open model from Alibaba. It sells Clef as a service, and anyone can also download it free.

Microsoft built its model on a smaller Alibaba model, the same one behind Clef-flash.

One warning covers every paid model. Any model its maker runs for you can change behind the same name. Construct saw Jev’s scores fall with no new version number.

**Why the cut-off belongs to you.** Two models can give the same case very different percentages. So a cut-off copied from a vendor’s example, or from the model you used before, is a guess.

## What it means for you

**Money.** The decision model’s bill is the smallest number in this choice.

Scale Mr. Akita’s prices up to a million short emails a month. By my arithmetic, no paid model would cost more than about $800 a year.

The real cost is the mistakes. At that volume, by my arithmetic, Clef-flash would make about 1.2 million more mistakes a year than the best models. Think of each as a misrouted ticket or a missed match. Put a price on each kind of mistake before you compare models.

Testing is cheap too. Construct’s whole test cost about five cents in fees, it reported.

**Customers and revenue.** The mistake a customer feels is rarely the average one. It is the urgent ticket sent to the slow queue, or the sales email filed as routine. Test those cases on purpose.

**Risk.** With an LLM alone, you take an unknown risk. Nothing tells you which answers are wrong. A decision model puts a number on that risk, but only if the number holds on your work.

Amit Kumar Jena, who manages AI development at the consulting firm Kanerika, put the danger plainly to InfoWorld. “A precise-looking probability,” he said, “can give an uncertain decision more authority than it deserves.”

### The same choice in other industries

- **Security software.** Harness tested Jev on real customer traffic. Every mistake fell among the few cases where Jev said it was unsure. [How Harness did it](/blog/harness-ai-api-inventory-decision-model/).
- **Recruiting.** Jack & Jill scored job candidates one criterion at a time with a decision model. Its screening costs fell 88%. [How Jack & Jill did it](/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Can’t we just buy the leaderboard leader?** Use the leaderboard to pick two or three to test. No leaderboard asks your question.

**The models take questions in the same format. Can’t we switch later?** You can switch the code in an afternoon. But you can’t carry the cut-offs across, so set every one again.

**What if the vendor changes the model under us?** Construct saw scores fall under the same version name. Rerun a small set of your own cases on a schedule, and get an alert when the numbers move.

**Run it ourselves, or let the vendor run it?** Running it yourself means it can’t change, and sensitive text stays on your own systems. But on Mr. Akita’s machine, the best free models took over a second per decision.

**How do we defend a decision that comes with only a percentage?** Record the question, the answer, the percentage and the cut-off for every decision. Charlie Dai, an analyst at Forrester, also recommends having people review the decisions with the biggest impact.

### How to choose

1. **Pick one repeated decision** an LLM makes today. Write down what a mistake costs, in each direction.
2. **Gather a few hundred past cases** with known answers. Include the hard and the expensive ones.
3. **Pick two or three decision models** to test, including one you could run yourself.
4. **Run them quietly beside your current LLM,** and record every percentage. Construct and GlassFlow both did this before switching.
5. **Score each question separately,** and count how often each model is wrong when it is sure.
6. **Set the cut-off from your own data,** for each model. Decide what goes to the LLM below it.
7. **Keep fixed rules in ordinary code,** and test again on a schedule.

## For your developer

Here is the side-by-side test as code. It runs each candidate on your own past cases and acts only where the model is confident. It measures how much work it takes off the LLM, and how often it is wrong when it acts. This is my sketch, not code any of these companies published. I haven’t run it on their data, so treat it as expected, not measured.

```python
from typesafe_sdk import Noul, TypeSafeClient

Q = {"urgent": Noul(instructions="Does this ticket need a person within the hour?")}

def jev(text):  # write one function like this per candidate decision model
    return TypeSafeClient().system_one(model="jev-1.14.0", state=text, questions=Q).answers["urgent"].noul

def shadow_test(decide, cases, bar):
    """cases: past (text, right_answer) pairs from your own process."""
    acted = wrong = 0
    for text, right in cases:
        p = decide(text)
        if p >= bar or p <= 1 - bar:          # confident: the process acts, no LLM
            acted += 1
            wrong += (p >= 0.5) != right
        # otherwise the case goes to the LLM, as today
    return {"runs_without_llm": acted / len(cases), "wrong_when_acting": wrong / max(acted, 1)}

cases = load_past_cases()  # your own labelled history
for bar in (0.8, 0.9, 0.95):
    print(bar, shadow_test(jev, cases, bar))
```

The worked example for this post (decision-model-shadow-test) runs this offline against sample cases, with tests, and compares two candidates side by side. [Subscribe for access](/subscribe/).

Public code from others, each labelled:

- **Fabio Akita’s benchmark** (independent test): cases, raw answers and scoring scripts for all 23 models, at github.com/akitaonrails/jev-docs-benchmarks.
- **Construct’s cases** (company data): its 117 labelled cases and a paper on the method, linked from its post.
- **GlassFlow’s Tares** (company tool, open source): runs a decision model in shadow next to an LLM agent, as described in its post.

## The fine print

- **Who published the numbers.** Fabio Akita ran his own test, published Oct. 10, 2026, with its cases and results. Construct, GlassFlow and Better Stack each report their own tests. Artificial Analysis publishes its leaderboard. Microsoft’s model details and the analysts’ comments come through InfoWorld. I have measured none of them.
- **Mr. Akita’s numbers in detail.** Jev and Microsoft’s Decision-1 were the most accurate paid models, at 97.6%. Clef-flash scored 87.5%. Scaled to a million emails a month, by my arithmetic, Clef-flash would make about 1.2 million more mistakes a year than the best, to save about $100 a year against Jev. Against Microsoft’s model it saved nothing: Decision-1 cost the least. The dearest, Clef, comes to about $760 a year at that volume, and about $4,000 if your texts run five times longer than his. Jev claimed more than 90% confidence on almost 90% of cases, Clef-flash on about 40%. On his short cases, Jev, Clef, Clef-flash, Microsoft’s and OpenAI’s models made no mistakes when more than 90% sure. The small free model, Decision 3.0 Edge, was wrong on 14 of the 68 answers it gave with that much confidence.
- **Construct’s numbers in detail.** With Jev’s cut-offs, Clef-flash scored 82.1%. With its own, 90.6%, against Jev’s 90.9% and Clef’s 93.2%, each with cut-offs chosen on cases held back for the purpose. Real matches had scored 0.71 to 0.82 in September. Two weeks later, three test questions asked 20 times each never reached 0.70; the highest was 0.66. The drop showed up even with the version pinned on TypeSafe’s own service. On a separate test of 30 pairs at that cut-off in October, Jev never merged two different people but made only 44% of the merges it should have. Jev’s answers to identical questions varied slightly from call to call; Clef’s never did.
- **GlassFlow’s numbers in detail.** The LLM was Anthropic’s Claude Haiku 4.5, and the test covered 833 ten-minute windows. Average confidence was about 0.5 on windows the LLM escalated and about 0.2 on the rest. The cut-off Clef-flash came with was 0.5. At that setting it flagged six times as many windows as the LLM and still missed a third of what the LLM caught. At a cut-off of 0.4, the filter would have passed 17% of windows to the LLM and kept 12 of its 18 escalations. GlassFlow’s six days cost about $8, nearly all of it for the LLM.
- **Better Stack and Artificial Analysis in detail.** Better Stack used Anthropic’s Claude Opus 5.5 as the referee. Overall, Jev matched it 86% of the time and Clef 83%. On toxicity, Clef won, 88% to 81%. On the Artificial Analysis index, Jev 1.13 scored 58, ahead of Fastino’s GLiDE and Microsoft’s Decision-1 at 54. Across almost all confidence levels, every model it tested was right less often than it claimed, mostly on knowledge and reasoning questions. On classification and tool choice, most were fairly well matched to their confidence. On the index’s test of when to call a software tool, Jev scored 81 and placed fourth.
- **How the models are made.** Clef is further training of Alibaba’s open Qwen3.8-27B model, and Clef-flash of the smaller Qwen3.5-9B. Microsoft’s Decision-1 is also built on Qwen3.5-9B. TypeSafe says Jev isn’t trained on customer requests and that the same model serves every account. Mr. Akita notes that OpenAI can swap the model behind its name, as Cloudflare does with Clef-flash.
- **What the tests can show.** All are small. Mr. Akita’s cases were written with AI help and checked against his policies, without independent human labels. Half of his cases were in Portuguese. Construct’s 117 cases were synthetic and labelled with an AI assistant, and Clef’s lead over Jev there is not statistically significant. GlassFlow’s reference was the LLM’s own decisions, not confirmed incidents. Better Stack’s referee was another model. Treat each as one careful test, not a ranking for your work.
- **Harness and Jack & Jill.** Those figures come from the companies’ own reports, covered in my earlier posts.
- **Entagl.** The two-thirds figure is for one client’s decision on what to do with a message: 91.2% right with LLMs alone, 97.2% coupled with Jev. Entagl checked about 400 real decisions by hand and over-sampled hard cases. On three other measures, the change was about a point either way.
- **Versions.** Mr. Akita and Construct tested Jev 1.13.0, and Artificial Analysis tested Jev 1.13. TypeSafe now serves 1.14.0, which none of these tests covers.
- **What we don’t know.** Why Jev’s scores moved for Construct, how OpenAI’s Decisions model is trained, and how any of these models does on your data, which is the point of this post.
- **This site** is independent and not affiliated with TypeSafe, Cloudflare, Microsoft, OpenAI, Construct, GlassFlow, Better Stack or Entagl, or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
