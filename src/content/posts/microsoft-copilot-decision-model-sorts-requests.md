---
title: "How Microsoft sorts Copilot requests with a decision model, at 77% lower cost than an LLM"
dek: "Microsoft now has a decision model choose where each Copilot request goes. The LLMs still do the work, and Microsoft says the choice is as accurate as an LLM’s."
kind: News
readMinutes: 10
author: Peter Schmitt
audience: For executives deciding which AI decisions still need an LLM
published: 2026-11-18
lastChecked: 2026-11-18
modelVersion: Microsoft-Decision-1.1, generally available Nov. 17, 2026
stats:
  - value: "About 77%"
    label: "lower cost for each sorting decision in Copilot"
  - value: "2.2x"
    label: "faster than an LLM making the same choice"
  - value: "Same"
    label: "accuracy as an LLM, by Microsoft’s measure"
  - value: "4,000+"
    label: "customers have used the same model in their own work"
statsNote: "All four come from Microsoft’s own announcement of Nov. 17, 2026. The 77% is my conversion of its “4.4x lower cost.” The fine print has the details."
sources:
  - title: "Microsoft: Microsoft-Decision-1.1 is now generally available for fast, low-cost decision making (Achint Srivastava, Nov. 17, 2026)"
    url: https://commandline.microsoft.com/microsoft-decision-model-ga/
    grade: Company report
  - title: "Official Microsoft Blog: Ignite 2026 (Satya Nadella, Nov. 17, 2026)"
    url: https://blogs.microsoft.com/blog/2026/11/17/ignite-2026-building-the-frontier-ecosystem/
    grade: Company report
  - title: "Microsoft Learn: Copilot Cowork overview"
    url: https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork
    grade: Official docs
  - title: "TechCrunch: As decision model use skyrockets, is customization the next frontier? (Tim Fernholz, Nov. 17, 2026)"
    url: https://techcrunch.com/2026/11/17/as-decision-model-use-skyrockets-is-customization-is-the-next-frontier/
    grade: Independent reporting
  - title: "Workday: Sana is the new Workday Home (Oct. 13, 2026)"
    url: https://newsroom.workday.com/2026-10-13-Sana-Is-the-New-Workday-Home-A-Dynamic-Agentic-Experience-Built-to-Finish-the-Work,-Not-Just-Answer-Questions
    grade: Company report
  - title: "iTWire: Workday’s Joel Hellermark on Jev (Alex Zaharov-Reutt, Oct. 15, 2026)"
    url: https://itwire.com/business-it-news/data/workdays-joel-hellermark-on-jev-meta-work-and-why-ai-agents-need-deterministic-guardrails
    grade: Independent reporting
  - title: "AWS Korea tech blog: a decision model that screens requests for personal data (Sangbeom Ma, Nov. 16, 2026, in Korean)"
    url: https://aws.amazon.com/ko/blogs/tech/aws-laya/
    grade: Vendor claim
---

Someone types a request into Microsoft’s Copilot. Before any answer appears, one question gets settled. Should Copilot answer it in chat, or should Cowork take it on?

Cowork is the agent inside Copilot that does things for you. It sends emails, books meetings and writes documents.

Microsoft gives that question to a decision model, an AI that picks from fixed answers and says how sure it is. The LLMs, the AIs that read and write, still do the work. On Tuesday, Microsoft said the decision model makes the call as accurately as an LLM, at under a quarter of the cost.

That matters beyond Microsoft. The company that sells some of the biggest LLMs doesn’t leave this choice to an LLM alone inside its own product. An LLM alone makes the call with no number on how sure it is. That is an unknown risk.

However, when coupled with a decision model, each of those choices comes with a percentage. The LLM is saved for the work that needs it.

| | An LLM alone | A decision model coupled with the LLM |
| --- | --- | --- |
| Who picks chat or Cowork | The LLM | The decision model |
| How sure it was | Unknown | A percentage on every choice |
| Who does the work | The LLM | The LLM |

## What Microsoft did

**Who.** Microsoft sells Copilot, its AI assistant for work. Copilot can answer in chat, or hand a task to Cowork.

**The choice.** Every request needs a home. A question about a travel policy belongs in chat. A request to set up a meeting and send the slides belongs with Cowork.

**The change.** Microsoft’s own decision model, Microsoft-Decision-1.1, makes that choice. Microsoft released the model to all customers this week. More than 4,000 had used it in their own work during a preview of about five weeks.

**The result.** Microsoft says the decision model makes the choice as accurately as an LLM. It is 2.2 times as fast. The cost is about 77% lower.

**A second job.** Inside Cowork, the same decision model sets how hard the LLM should think about each task. Microsoft calls the feature Auto. A quick job gets a quick pass, and a hard one gets more effort.

**Beyond Copilot.** Satya Nadella, Microsoft’s chief executive, said Microsoft itself uses the model for hundreds of other jobs. His examples included sorting, personalization and content filtering.

## Four takeaways

### 1. Even an LLM seller doesn’t use LLMs alone for small choices

Microsoft sells access to some of the biggest LLMs. Yet inside Copilot, it gives this choice to a decision model.

Microsoft’s announcement says why. It is “reserving larger models for more complex tasks.”

Others are doing the same. Vercel runs a service that passes requests to many AI models. TechCrunch reported that in October, more than one in four of those requests went to decision models.

### 2. Each model gets one plain job

The split is simple. The decision model picks where a request goes and how much effort it gets. The LLM reads, writes and acts.

The decision model writes nothing. The LLM steps in on the choice only when the decision model is unsure.

### 3. The choice runs on every request, so the savings repeat

This choice is made before any work starts. Every request needs one.

The saving of about 77% is on the decision model’s sorting step, not on the LLM’s work that follows. That saving repeats on every request, every day.

### 4. The decision model says when it isn’t sure

Microsoft says its decision models give a percentage with each answer. That lets software “defer when uncertainty is high.” When the decision model is unsure, the software can hold back or hand the choice to the LLM.

That turns an unknown risk into a known one. You pick how sure it must be before it acts on its own.

## How it works

**What a decision model is.** It is an AI that answers a fixed question with a percentage for each allowed answer. It writes no words. In Copilot’s case, the question is “chat or Cowork?”

**How Microsoft built it.** Microsoft started from Gemma, an open model from Google. It trained the model on hundreds of collections of example decisions, some written for training and some licensed. Microsoft says it also trained the model to say how sure it is, and to decline when information is missing.

**How Microsoft set it up in Copilot.** Microsoft has not published the setup. The hard questions below cover what it left out.

**What it costs.** Microsoft charges only for what the model reads. It charges nothing for the answer.

## What it means for you

**Money.** Stop using LLMs alone for the small choices. Look for the choices your LLMs make on every request: where to send it, which model to use, how much effort to spend. Those small choices add up. Microsoft’s figure suggests a decision model can make them for under a quarter of the cost.

**Customers.** The choice happens before the customer sees anything. A wrong choice means someone asks for a meeting and gets advice instead of a booking. Before you switch, test how often the decision model gets this choice wrong.

**Revenue.** Microsoft’s announcement puts it plainly: “cheaper, faster models can be integrated in more places in software.” A decision model that costs under a quarter as much can run on every request. That lets you offer AI features that cost too much to run before.

**Risk.** With a decision model in front, you know how sure each choice was. You set your own bar.

### The same pattern in other industries

- **HR software.** Workday’s new home screen uses a decision model called Jev, made by TypeSafe. With every keystroke, Jev picks which form, calendar or approval card to show, and Workday’s AI agents do the work. [Workday’s announcement](https://newsroom.workday.com/2026-10-13-Sana-Is-the-New-Workday-Home-A-Dynamic-Agentic-Experience-Built-to-Finish-the-Work,-Not-Just-Answer-Questions).
- **Privacy.** An AWS architect in Korea put a small decision model ahead of an LLM. It screens each request for personal data, and only clean requests reach the LLM. In AWS’s own test, it made few mistakes and answered far faster than an LLM. [The write-up, in Korean](https://aws.amazon.com/ko/blogs/tech/aws-laya/).
- **Hiring.** Jack & Jill had a decision model score every candidate. An LLM read only the shortlist. Jack & Jill’s screening costs fell 88%. [How Jack & Jill did it](/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Isn’t this Microsoft grading its own product?** Yes. Every number in the story comes from Microsoft. No one outside has checked the Copilot result.

**As accurate as which LLM?** The announcement doesn’t say. It also gives no error rate.

**How much does Microsoft save in total?** It hasn’t said. It gave no request volumes.

**Who else uses the model?** Microsoft named four early users: Epic, Equinor, Atos Group and Raiffeisen Bank. Only Epic described its plans, and it says it is “exploring” the model.

**Should I build my own?** Start smaller. Test one choice your LLM already makes, on your own past requests, before you switch.

### How to make the change

1. **List the choices your LLMs make before they do the work.** Where a request goes, which model handles it, how much effort it gets.
2. **Write each as a fixed question with a short list of answers.** For example: “chat or agent?”
3. **Run a decision model on past requests** your LLM already handled. Measure how often they agree.
4. **Set a bar.** When the decision model is sure, it decides. When it isn’t, the LLM you already use decides.
5. **Record who made each choice,** and how sure it was.
6. **Watch the share the decision model handles,** and adjust the bar from there.

## For your developer

Here is the pattern as code. The decision model answers two questions before any LLM works: where the request goes, and how much effort it gets. When it is unsure where a request goes, the LLM you already use decides. This is my sketch, not Microsoft’s code. I haven’t run it on Copilot’s traffic, so treat it as expected, not measured.

```python
def handle(request, decide, llm_route, workers, bar=0.8):
    try:
        probs = decide(request, ["chat", "agent"])  # decision model: where should it go?
        route = max(probs, key=probs.get)
        if probs[route] < bar:
            route = llm_route(request)  # unsure: ask the LLM router you already have
        effort = decide(request, ["low", "medium", "high"])  # how hard should the LLM work?
        level = max(effort, key=effort.get)
    except Exception:
        route, level = "chat", "medium"  # decision model down: safe defaults
    return workers[route](request, level)  # the LLM does the work
```

My worked example adds two steps, with tests. It compares the decision model with your current LLM on past requests. It raises effort a level when the decision model is unsure. [Subscribe for access](/subscribe/).

Public material from others:

- **[Microsoft’s announcement](https://commandline.microsoft.com/microsoft-decision-model-ga/)** (company report): how the model was built, its prices and its uses inside Microsoft.
- **[Microsoft’s sample decision tests](https://github.com/microsoftconnect/Decision-Benchmarks)** (company repo, linked from the announcement): public test sets for comparing decision models.

## The fine print

- **Microsoft’s numbers.** The Copilot claims come from Microsoft’s post of Nov. 17, 2026, by Achint Srivastava, a vice president of software engineering. The exact words: “It makes that call as accurately as a large language model, 2.2x faster and at 4.4x lower cost.” I converted 4.4 times lower cost to about 77% lower. Microsoft gives no volumes, no error rate and no name for the LLM it compared against.
- **Customers.** Microsoft says “more than 4,000 customers” used the model in “just over five weeks” since its preview. It names Epic, Equinor, Atos Group and Raiffeisen Bank as early adopters. Epic’s Garrett Adams, a senior vice president, said Epic is “exploring” it for patient questions, help during doctor visits, and back-office work.
- **Cowork.** Microsoft’s documentation says Cowork sends emails, schedules meetings, creates documents and posts in Teams. The examples of a chat request and a Cowork request in the story are mine.
- **How it was built.** Microsoft says Microsoft-Decision-1.1 is built on Gemma 4, an open model from Google. It was trained on “hundreds of synthetic and licensed datasets.”
- **Auto.** Microsoft says the model “powers Auto, dynamically adjusting how much reasoning effort Cowork applies to each task.” It gives no numbers for Auto.
- **Nadella.** From the Official Microsoft Blog, Nov. 17, 2026. His full list: “routing, data labeling, personalization, content filtering and hundreds of other use cases.”
- **A figure I didn’t use.** Posts on Nov. 17 said the model was 200 times cheaper than an LLM. That figure is not in Microsoft’s announcement, so I left it out. Microsoft’s own Ignite page says the model is “50x faster and 79x cheaper than GPT-Sol 6.1,” without naming the test. I used the announcement’s Copilot figure instead.
- **Price.** In Microsoft Foundry, $0.042 per million tokens read, with answers free. Microsoft gives no reason for the free answers.
- **TechCrunch.** Tim Fernholz, Nov. 17, 2026: “more than one in four requests on Vercel’s AI model router went to decision models” in October.
- **Workday.** Its Oct. 13 release says the new home screen is “Powered by Jev,” from TypeSafe AI, and can show “forms, calendars, approval cards, visualizations.” Sana is the AI company Workday bought, and its agents carry out the requests. Joel Hellermark, Workday’s chief AI officer, told iTWire: “With every keystroke, there’s a decision model that selects the right UI components for that.” He said it takes about 300 milliseconds. Workday gives no accuracy or cost figures for Jev.
- **AWS Korea.** A test by an AWS solutions architect, Sangbeom Ma, on 398 sentences not used in training. After its criteria and training data were improved twice, the decision model got 5 wrong. It answered in 35 to 39 milliseconds, against about 1,250 for Claude Haiku 5.5. It is not a customer deployment. The author says that below about 3.3 million checks a month, calling an LLM is cheaper.
- **Jack & Jill.** From my earlier post, which cites its sources.
- **This site** is independent and not affiliated with Microsoft, Workday, TypeSafe, Amazon or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
