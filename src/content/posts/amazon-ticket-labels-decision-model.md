---
title: "How Amazon cut the cost of sorting internal tickets 98% with a decision model"
dek: "Stop using LLMs alone. Two Amazon engineers ran an LLM and a decision model side by side on live tickets, then switched. Their team says the cost fell 98%."
kind: How-to
readMinutes: 8
author: Peter Schmitt
audience: For executives who run operations, IT or support at volume
published: 2026-11-11
lastChecked: 2026-11-11
modelVersion: strands-decider-e4b
stats:
  - value: "98%"
    label: "lower cost per ticket than the LLM"
  - value: "78%"
    label: "less time per model call"
  - value: "20"
    label: "kinds of ticket, picked from a fixed list"
  - value: "45 seconds"
    label: "to switch back to the LLM if needed"
statsNote: "All four figures come from one post by the two Amazon engineers and the Strands Agents team at AWS, published Nov. 9, 2026. Amazon has not published an accuracy figure. The fine print says more."
sources:
  - title: "Strands Agents blog: Amazon saves millions by replacing Sonnet 4.6 with Strands Decider (Carr Onstott, Mehul Jaiswal and the Strands Agents team, Nov. 9, 2026)"
    url: https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/
    grade: Vendor case study
---

Somewhere inside Amazon, an alarm goes off on a server. A ticket opens. Before anyone reads it, software has to decide what kind of ticket it is.

It could be a customer escalation, a request for more computing power, or a security finding. There are 20 kinds in all. Every ticket has to fit one of them.

Many companies hand a job like this to an LLM. It works. But it is a costly way to pick one answer from a fixed list.

## The trap

An LLM is the kind of AI behind ChatGPT. To label a ticket, it reads long instructions, reasons in words, and then writes out its answer. Every one of those words costs money and time.

It also gives no sign of which labels are shaky. So you take an unknown risk on every ticket.

A decision model is a different kind of AI. It picks from a fixed list of answers and gives a percentage for each.

However, when coupled with a decision model, each answer comes back with a number that says how sure it is. A decision model writes no words, so it is fast and cheap.

## The story

**Who.** Carr Onstott and Mehul Jaiswal are engineers on one of the largest internal ticketing systems in the world, at Amazon. On Nov. 9, they described their switch on the blog of Strands Agents, a project of AWS, Amazon’s cloud business. AWS makes the decision model, so it has a stake in the result.

**Before.** For a while, Claude Sonnet 4.6, an LLM from Anthropic, sorted every ticket. It read a long set of instructions each time. Then it wrote out its answer and its reasoning.

**The decision model.** A month before the post, AWS had released Strands Decider, its own decision model. The engineers gave it the same tickets and one question: which of the 20 labels fits? They also added one more answer, “none.”

**Shorter instructions.** The LLM’s label descriptions were too long for the decision model to read. So the team rewrote each label as one or two plain sentences. On long tickets, the decision model drops the oldest comments to fit.

**A bar.** The team then set a bar, a minimum level of sureness. The decision model applies a label only when it is at least that sure. The engineers have not said what happens to a ticket below the bar.

## How they switched

The engineers did not flip a switch and hope. They built a switch with three positions.

**First position: the LLM only.** This was the old way.

**Second position: both, side by side.** Both models sorted every live ticket. The LLM’s label was the one used. The decision model’s label was logged next to it.

Then the team looked at every case where the two disagreed. They wrote that this taught them more than any test in the lab.

**Third position: the decision model only.** Once they trusted it, they turned the LLM off. Going back to the LLM takes a 45-second flip of that switch.

## The result

The decision model sorted tickets just as well, the team says. The team has not published an accuracy figure.

Each call to the model now takes 78% less time.

At list prices, the model cost per ticket fell 98%. The post says the change will save millions of dollars a year in model fees.

## How it works

**What a decision model does.** You send it the ticket and the list of allowed labels. It returns a percentage for each label, in a single step. It writes nothing else.

**How Amazon set it up.** Each new ticket goes into a queue. A small program picks it up, sends it to the decision model and applies the label. The decision model runs on AWS servers, cut off from the internet.

**How it is trained.** AWS built Strands Decider on Gemma 4, an open model from Google. The Amazon post does not say what data AWS used to teach it to label.

**One surprise.** The order of the fields inside a ticket changed the answer. The same ticket, with its fields in a different order, could shift a percentage by almost 20 points. The team now sends every ticket with its fields in the same order.

## What it means for you

**Money.** Take a team that spends a million dollars a year on LLM sorting. By my arithmetic, it would spend about $22,500 at Amazon’s rate. That assumes servers as busy as Amazon’s, and no tickets sent back to the LLM.

**Speed.** A call to the decision model takes under a second. A call to the LLM took about four.

**Risk.** With an LLM alone, you don’t know which labels are shaky. With a decision model, each label comes with a number, and a bar decides which ones go through. My advice: send every ticket below the bar to the LLM, as before.

**The switch.** The three-position switch is the part I would copy first. You see every disagreement before you trust the decision model, and you can go back in seconds.

### The same pattern in other industries

- **Security software.** Harness tested a decision model on real customer traffic. Every mistake fell among the few cases where it said it was unsure. [How Harness did it](/blog/harness-ai-api-inventory-decision-model/).
- **Hiring.** Jack & Jill had a decision model score candidates one criterion at a time, with an LLM reading the shortlist. Its screening costs fell 88%. [How Jack & Jill did it](/blog/jack-and-jill-coupled-llm-decision-model/).
- **Fraud.** Sardine, a fraud-prevention company, tested a decision model on one real fraud ring. It caught 27 of 29 fraudulent transactions.

### The hard questions

**How accurate is it?** Amazon has not published a number. The team says the decision model beat the LLM on a separate set of its own tickets. Ask for your own numbers before you switch.

**Did they drop the LLM entirely?** For this one job, yes. The LLM is still one flip of the switch away. Amazon went further than I would: I would keep the LLM for every ticket below the bar.

**When won’t this work?** The engineers name three cases where you should not switch. Keep the LLM if a label needs a written explanation. Keep it if the list of labels changes every week, or if the decision model can’t see enough of the ticket.

**Who should own it?** The team that owns the ticket queue should own the label list, the bar and the switch.

### How to make the change

1. **Pick one high-volume job** where an LLM picks from a fixed list today.
2. **Write each answer as one or two plain sentences.**
3. **Build the switch:** LLM only, both side by side, decision model only.
4. **Run both side by side** on live work, and read every disagreement.
5. **Set a bar.** My choice: send everything below it to the LLM.
6. **Switch to the decision model** only when the disagreements stop surprising you.

## For your developer

Here is the pattern as code. A switch picks one of three modes. In the side-by-side mode, the LLM’s label is used and the decision model’s is logged. This is my sketch, not Amazon’s code. Amazon has not said what happens below the bar, so my sketch sends those tickets to the LLM. Treat it as expected, not measured.

```python
def label_ticket(ticket, mode, decide, llm_label, log, bar=0.80):
    if mode == "llm":
        return llm_label(ticket)
    probs = decide(ticket)  # decision model: {"capacity_request": p, ..., "none": p}
    top = max(probs, key=probs.get)
    if mode == "both":
        label = llm_label(ticket)
        log(ticket, llm=label, decision_model=top, sure=probs[top])  # read every disagreement
        return label
    if probs[top] >= bar and top != "none":
        return top  # decision model mode: sure, so act now
    return llm_label(ticket)  # below the bar: the LLM labels it, as before
```

I show you how in a worked example. It has the three-way switch, a log of every disagreement, and a report that tells you when the decision model is ready. It comes with tests. [Subscribe for access](/subscribe/).

Public material from others:

- **[The Amazon post](https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/)** is a vendor case study. It has the full tables, and links to the Strands Decider code and serving notes.

## The fine print

- **Who published the numbers.** Every Amazon figure comes from the post by Carr Onstott and Mehul Jaiswal with the Strands Agents team, dated Nov. 9, 2026. Strands Agents is an AWS project, and Strands Decider is AWS’s own model. So AWS has a stake in the result. I have measured none of it.
- **Accuracy.** No figure, no sample size and no count of disagreements is published. The post says the decision model “performed just as well” and beat the LLM on a separate set of tickets.
- **Time.** The LLM averaged 4,215 milliseconds per call. The decision model averaged 897. The ticket-handling software ran 74% faster on the day the LLM was turned off.
- **Cost.** At list prices, the LLM cost about $0.0222 per ticket. The decision model cost about $0.0005, about 98% less. Lambda costs are left out. On a $1 million yearly bill, that is about $22,500. The decision model’s cost depends on how busy its servers are. The “millions of dollars a year” is the team’s own estimate. The post does not give ticket volume.
- **Words read and written.** The LLM read about 6,550 tokens, or word pieces, per ticket and wrote about 170. The decision model read about 2,000 and wrote one.
- **Models.** Claude Sonnet 4.6 from Anthropic, through Amazon Bedrock. Strands Decider, the “E4B” size built on Google’s Gemma 4, which beat the smaller first version on Amazon’s test set.
- **The field-order surprise.** Changing the order of fields moved percentages “by up to 0.19,” the post says.
- **Sardine, Harness and Jack & Jill.** Those details come from each company’s own report. Sardine’s figure covers 29 transactions from one fraud ring.
- **What we don’t know.** The accuracy, the ticket volume, the bar, what happens below it, and what changed for the people who handle tickets.
- **This site** is independent and not affiliated with Amazon, AWS, Anthropic, Google or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
