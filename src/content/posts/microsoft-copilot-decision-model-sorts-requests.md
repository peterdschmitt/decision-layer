---
title: "How Microsoft cut the cost of sorting Copilot requests 77% with a decision model"
dek: "Microsoft now has a decision model choose where each Copilot request goes. The LLMs still do the work, and Microsoft says the choice is as accurate as an LLM’s."
kind: News
readMinutes: 9
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
    label: "customers used the model in about five weeks"
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

Microsoft now gives that question to a decision model, an AI that picks from fixed answers and says how sure it is. The LLMs still do the work. On Tuesday, Microsoft said the decision model makes the call as accurately as an LLM, at about a quarter of the cost.

That matters beyond Microsoft. The company that sells some of the biggest LLMs has stopped using them alone for the small choices inside its own product.

However, when coupled with a decision model, each of those choices comes with a percentage. The LLM is saved for the work that needs it.

## What Microsoft did

**Who.** Microsoft sells Copilot, its AI assistant for work. Copilot can answer in chat, or hand a task to Cowork. Microsoft calls Copilot “the new OS for work.”

**The choice.** Every request needs a home. A question about a travel policy belongs in chat. A request to set up a meeting and send the slides belongs with Cowork.

**The change.** Microsoft now has its own decision model, Microsoft-Decision-1.1, make that choice. It released the model for wide use on Nov. 17, at its Ignite conference.

**The result.** Microsoft says the decision model makes the choice as accurately as an LLM. It is 2.2 times as fast. The cost is about 77% lower.

**A second job.** Inside Cowork, the same decision model sets how hard the LLM should think about each task. Microsoft calls the feature Auto. A quick job gets a quick pass, and a hard one gets more effort.

**Beyond Copilot.** Satya Nadella, Microsoft’s chief executive, said the company uses the model for hundreds of other jobs. His examples included sorting, personalization and content filtering.

## Four takeaways

### 1. The LLM sellers don’t use LLMs alone for small choices

Microsoft makes and sells LLMs. Yet it took this choice away from them inside its own flagship product.

Microsoft’s announcement says why. It is “reserving larger models for more complex tasks.”

The same shift shows up across the market. TechCrunch reported that in October, more than one in four requests on Vercel’s AI service went to decision models.

### 2. Each model gets one plain job

The split is simple. The decision model picks where a request goes and how much effort it gets. The LLM reads, writes and acts.

Neither does the other’s job. The decision model writes nothing. The LLM no longer spends time deciding where it belongs.

### 3. The choice runs on every request, so speed and cost add up

This choice is made before any work starts. A user waits for it every time.

A choice that is 2.2 times as fast means less waiting before every answer. A cost cut of about 77% applies to every request that passes through.

Microsoft hasn’t said how many requests that is. For a product of Copilot’s size, it is a daily number, not a one-off.

### 4. The decision model says when it isn’t sure

An LLM alone gives an answer with no number on how sure it is. That is an unknown risk.

Microsoft says its decision models give a percentage with each answer. That lets software “defer when uncertainty is high.” In plain words, the program can hold back, or ask the bigger AI, when the decision model is unsure.

That turns an unknown risk into a known one. You choose the percentage at which the decision model acts.

## How it works

**What a decision model is.** It is an AI that answers a fixed question with a percentage for each allowed answer. It writes no words. In Copilot’s case, the question is “chat or Cowork?”

**How Microsoft built it.** Microsoft started from Gemma, an open model from Google. It trained it on hundreds of collections of example decisions, some made up and some licensed. Microsoft says it also trained the model to say how sure it is, and to decline when information is missing.

**How Microsoft set it up in Copilot.** Microsoft has not published the details. It hasn’t said what happens when the decision model is unsure, or which LLM it compared against.

**What it costs.** Microsoft charges only for what the model reads. It charges nothing for the answer, since the answer is a short choice.

## What it means for you

**Money.** Look for the choices your LLMs make on every request: where to send it, which model to use, how much effort to spend. Those small choices add up. Microsoft’s figure suggests they can cost about a quarter as much.

**Customers.** The choice happens before the customer sees anything. A faster choice means a faster first answer.

**Revenue.** Microsoft hasn’t tied this change to sales. The case for it is lower cost and faster answers.

**Risk.** An LLM alone is an unknown risk. With a decision model in front, you know how sure each choice was and can set your own bar.

### The same pattern in other industries

- **HR software.** Workday uses TypeSafe’s Jev decision model in its new home screen. On every keystroke, Jev picks which form, calendar or approval card to show, and Workday’s Sana agents do the work. [Workday’s announcement](https://newsroom.workday.com/2026-10-13-Sana-Is-the-New-Workday-Home-A-Dynamic-Agentic-Experience-Built-to-Finish-the-Work,-Not-Just-Answer-Questions) (company report).
- **Privacy.** An AWS architect in Korea built a gate in front of an LLM. A small decision model checks each request for personal data, and only clean requests reach the LLM. After two rounds of retraining, it got 5 of 398 test sentences wrong. [The AWS write-up, in Korean](https://aws.amazon.com/ko/blogs/tech/aws-laya/) (vendor test).
- **Hiring.** Jack & Jill had a decision model score every candidate. An LLM read only the shortlist. Jack & Jill’s screening costs fell 88%. [How Jack & Jill did it](/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Isn’t this Microsoft grading its own product?** Yes. Every number in the story comes from Microsoft. No one outside has checked the Copilot result.

**As accurate as which LLM?** Microsoft doesn’t say. It also gives no error rate.

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

Here is the pattern as code. The decision model answers two questions before any LLM works: where the request goes, and how much effort it gets. Unsure routes go to the LLM router you already have. This is my sketch, not Microsoft’s code. I haven’t run it on Copilot’s traffic, so treat it as expected, not measured.

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

My worked example adds the step before you switch: compare the decision model with your current router on past requests. It also steps effort up a level when the decision model is unsure, with tests. [Subscribe for access](/subscribe/).

Public material from others:

- **[Microsoft’s announcement](https://commandline.microsoft.com/microsoft-decision-model-ga/)** (company report): how the model was built, its prices and its uses inside Microsoft.
- **[Microsoft’s sample decision tests](https://github.com/microsoftconnect/Decision-Benchmarks)** (company repo, linked from the announcement): public test sets for comparing decision models.

## The fine print

- **Microsoft’s numbers.** The Copilot claims come from Microsoft’s post of Nov. 17, 2026, by Achint Srivastava, a vice president of software engineering. The exact words: “It makes that call as accurately as a large language model, 2.2x faster and at 4.4x lower cost.” I converted 4.4 times lower cost to about 77% lower. Microsoft gives no volumes, no error rate and no name for the LLM it compared against.
- **Customers.** Microsoft says “more than 4,000 customers” used the model in “just over five weeks” since its preview. It names Epic, Equinor, Atos Group and Raiffeisen Bank as early adopters. Epic’s Garrett Adams, a senior vice president, said Epic is “exploring” it for patient questions, help during doctor visits, and back-office work.
- **Cowork.** Microsoft’s documentation says Cowork sends emails, schedules meetings, creates documents and posts in Teams, and that the user approves each action. The examples of a chat request and a Cowork request in the story are mine.
- **Auto.** Microsoft says the model “powers Auto, dynamically adjusting how much reasoning effort Cowork applies to each task.” It gives no numbers for Auto.
- **Nadella.** From the Official Microsoft Blog, Nov. 17, 2026. His full list: “routing, data labeling, personalization, content filtering and hundreds of other use cases.”
- **A figure I didn’t use.** Posts on Nov. 17 said the model was 200 times cheaper than an LLM. That figure is not in Microsoft’s announcement, so I left it out. Microsoft’s own Ignite page compares the model with one named LLM, GPT-Sol 6.1, on a narrower test.
- **Price.** In Microsoft Foundry, $0.042 per million tokens read, with answers free.
- **TechCrunch.** Tim Fernholz, Nov. 17, 2026: “more than one in four requests on Vercel’s AI model router went to decision models” in October.
- **Workday.** Joel Hellermark, Workday’s chief AI officer, told iTWire: “With every keystroke, there’s a decision model that selects the right UI components for that.” He said it takes about 300 milliseconds. Workday gives no accuracy or cost figures for Jev.
- **AWS Korea.** A test by an AWS solutions architect, on 398 sentences not used in training. It is not a customer deployment. The author says that below about 3.3 million checks a month, calling an LLM is cheaper.
- **Jack & Jill.** From my earlier post, which cites its sources.
- **This site** is independent and not affiliated with Microsoft, Workday, TypeSafe, Amazon or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
