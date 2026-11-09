---
title: "How an AI company cut the cost of sorting bank messages 70% with a decision model"
dek: "Stop using LLMs alone. OpenRouter sorted bank customer messages with a top LLM, a decision model, and both together. Coupled, the two nearly matched the LLM’s accuracy at about 70% lower cost."
kind: How-to
readMinutes: 9
author: Peter Schmitt
audience: For executives and operations leaders who run customer service at volume
published: 2026-11-09
lastChecked: 2026-11-09
modelVersion: jev-1.13.0
stats:
  - value: "About 70%"
    label: "lower AI cost than the LLM alone"
  - value: "76%"
    label: "of messages the decision model handled without the LLM"
  - value: "0.4"
    label: "percentage points of accuracy lost against the LLM alone"
  - value: "13x"
    label: "faster than the LLM, at the median"
statsNote: "All four figures come from one test by OpenRouter, published on Sept. 22, 2026, on a public set of 3,080 bank customer messages. The bar was chosen on the same messages, so these are best-case figures. The fine print says more."
sources:
  - title: "OpenRouter: Is Jev as accurate as frontier models at classification? (Kenny Rogers, Sept. 22, 2026, updated Oct. 16)"
    url: https://openrouter.ai/blog/insights/jev-vs-claude-opus-5-classification/
    grade: Company report
  - title: "PolyAI: Banking77, a public set of bank customer messages"
    url: https://github.com/PolyAI-LDN/task-specific-datasets
    grade: Official docs
  - title: "TypeSafe docs: Models (how Jev is trained)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
---

A bank customer types a short message into the help chat: “My card still hasn’t arrived.” Another types: “When will my card get here?”

To a person, those look the same. To a bank, they may go to different teams. One is a delivery problem. The other is a question about timing.

Support desks sort messages like these all day. Get the sorting wrong, and the customer waits in the wrong line.

## The trap

Many companies now hand this sorting to an LLM. An LLM is the kind of AI behind ChatGPT. It reads the message and names the right team.

The best LLMs are good at it. But they are slow and costly at volume. And they give no sign of which answers are shaky, so you take an unknown risk on every one.

However, when coupled with a decision model, each answer comes back with a number that says how sure it is. A decision model is an AI that picks from a fixed list of answers and gives a percentage for each. It writes no words, so it is fast and cheap.

You set a bar, a minimum level of sureness. Answers above the bar go straight through. The LLM handles only the rest. That is full automation, and every answer carries a number that says how far to trust it.

## The questions a leader would ask

### What did they test?

OpenRouter runs a marketplace where companies buy access to many AI models. In September, its writer Kenny Rogers tested one decision model against one top LLM.

The decision model was Jev, from a company called TypeSafe. The LLM was Claude Opus 5, the model OpenRouter’s customers spent the most on for sorting jobs like this.

Both sorted the same set of 3,080 bank customer messages. Each message belonged to one of 77 kinds of request. The messages come from a public set that researchers use to test this exact job.

### How did each do alone?

The LLM alone sorted 84% of the messages correctly. The decision model alone got 81%.

So the LLM was better by about three percentage points. But it was also 13 times slower. And it cost about 20 times as much as the decision model.

### What happened when they were coupled?

OpenRouter then let the decision model answer first. When it was at least 90% sure, its answer stood. Everything else went to the LLM.

The decision model handled 76% of the messages on its own. The LLM handled the rest.

Accuracy was 0.4 points lower than with the LLM alone. The cost fell by about 70%.

### Why did that work?

Because the decision model usually knew when it was guessing. It missed some messages the LLM got right. But on most of those, it was unsure. So they went to the LLM anyway.

Look at the messages where the decision model was 99% sure or more. It was right on about 96% of them.

When it was less than half sure, it was right less than a third of the time. That gap is what makes the bar useful.

### Where did the decision model beat the LLM?

On some kinds of request. Messages about stolen card details are one. The LLM often read them as a question about a payment the customer didn’t recognize. The decision model sorted them better.

### Where did both fail?

On one kind of request, both scored zero. The request covered questions about a PIN that arrives separately from the card. The request’s name didn’t mention that. Both models sent most of those messages to “change my PIN.”

A real support team would fix that by writing a clearer description of each request.

## How it works

**What a decision model does.** You send it the message and the list of allowed answers. Each answer has a one-line description. It returns a percentage for each answer, in a single step.

**How OpenRouter set it up.** Both models got the same one-line description of each of the 77 requests. OpenRouter wrote those descriptions from the request names alone, without looking at the test messages.

**How it is trained.** TypeSafe says it trains Jev so that its percentages track how often it is right, but it has not said what data it used. When Jev was only fairly sure, it was right a little less often than it claimed. Still, its surest answers were right most often, and its least sure answers were right least often.

## What it means for you

**Money.** On this test, the coupled setup cost about 70% less than the LLM alone. By my arithmetic, a desk spending a million dollars a year on LLM sorting would save about $700,000.

**Customers.** The decision model sorted three in four messages, 13 times faster than the LLM. For a customer in a chat window, that is the difference between an instant handoff and a pause of about two seconds.

**Risk.** With the LLM alone, you don’t know which answers are shaky. Coupled, most shaky answers are flagged. Those go to the LLM.

**Revenue.** OpenRouter didn’t measure revenue. Any gain is indirect: faster help, and the right team on the first try.

### The same pattern in other industries

- **Security software.** Harness tested a decision model on real customer traffic. Every mistake fell among the few cases where it said it was unsure. [How Harness did it](/blog/harness-ai-api-inventory-decision-model/).
- **Recruiting.** Jack & Jill had a decision model score candidates one criterion at a time. Its screening costs fell 88%. [How Jack & Jill did it](/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Is a three-point gap acceptable?** For the decision model alone, maybe not. Coupled, the gap shrank to less than half a point.

**Is this a real bank?** No. It is a public test set of bank messages, and OpenRouter is not a bank. Treat it as a guide, then test on your own messages.

**Where should the bar go?** OpenRouter chose its bar on the same messages it scored. So the result is a best case. Set your bar on one set of messages and check it on another.

**Who owns it?** The team that owns the support queue should own the request list, the descriptions and the bar.

### How to make the change

1. **List the kinds of request** your desk sorts today.
2. **Write one plain line for each,** and test it on real past messages.
3. **Run your LLM and a decision model on the same messages.**
4. **Set a bar** on one batch of messages, and check it on a second batch.
5. **Send everything below the bar to the LLM,** as you do today.
6. **Watch the share that clears the bar.** The bigger that share, the bigger your saving.

## For your developer

Here is the pattern as code. The decision model answers first. Its answer stands only above the bar. Everything else goes to the LLM. This is my sketch, not OpenRouter’s code. I haven’t run it on OpenRouter’s data, so treat it as expected, not measured.

```python
def sort_message(text, decide, llm_sort, bar=0.90):
    try:
        probs = decide(text)  # decision model: {"card_arrival": p, "compromised_card": p, ...}
    except Exception:
        return llm_sort(text), "llm"  # decision model down: the LLM sorts, as before

    top = max(probs, key=probs.get)
    if probs[top] >= bar:
        return top, "decision_model"  # sure: act now, no LLM call
    return llm_sort(text), "llm"  # unsure: the LLM decides, as before
```

We show you how in the worked example that matches this post. It routes customer chats with a decision model and a bar, and sends the rest to an LLM. It comes with offline tests. [Subscribe for access](/subscribe/).

Public material from others:

- **[OpenRouter’s write-up](https://openrouter.ai/blog/insights/jev-vs-claude-opus-5-classification/)** (independent test): the full results table at every bar, from 70% to 99%.
- **[Banking77](https://github.com/PolyAI-LDN/task-specific-datasets)** (public data): the 3,080 test messages, free to use.

## The fine print

- **Who published the numbers.** Every figure comes from OpenRouter’s post by Kenny Rogers, dated Sept. 22, 2026 and updated Oct. 16. I have measured none of them. OpenRouter sells access to both models. If anything, it earns more when customers pick the costlier LLM.
- **The test.** 3,080 messages from the public Banking77 set, published by PolyAI, 40 for each of 77 kinds of request. OpenRouter says Claude Opus 5 was the model its users spent the most on for sorting jobs, as of Sept. 22. It was one test, on one afternoon, with one way of describing the requests.
- **The scores.** LLM alone 84.4%. Decision model alone 81.0%. Coupled at a 90% bar 84.0%, with 75.9% of messages handled by the decision model. The two models agreed on 89.3% of messages. On stolen-card messages, the decision model scored 95.0% and the LLM 70.0%. On the 58% of messages where the decision model was at least 99% sure, it was right 96.3% of the time. On the 3.5% where it was below 50% sure, it was right 29.6% of the time.
- **Cost and speed.** The decision model alone cost $0.11 per 1,000 messages. At the 90% bar, the coupled cost was $0.69 per 1,000 messages, against $2.42 for the LLM alone. That is 71.5% less, which I round to about 70%, or about $700,000 on a $1 million bill. The LLM’s cost already includes a saving from reusing the same long instructions. Without it, OpenRouter estimates the LLM would cost about $19 per 1,000. Median reply time was 175 milliseconds for the decision model and 2,266 for the LLM.
- **The best-case caveat.** OpenRouter picked the bar using the same 3,080 messages it scored, and calls the coupled result “an upper bound.” The LLM ran without its extended thinking mode. Banking77 was published in 2020, so the LLM may have seen it in training.
- **Which models.** Jev 1.13 from TypeSafe, and Claude Opus 5 from Anthropic.
- **What we don’t know.** How this holds on a real bank’s messages, in other languages, or with the LLM’s thinking mode on.
- **Harness and Jack & Jill.** Those figures come from each company’s own report.
- **This site** is independent and not affiliated with OpenRouter, TypeSafe, Anthropic, PolyAI or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
