---
title: "How a product-catalog company cut its category errors 85% with a decision model"
dek: "Channel3 had an LLM file products into categories, and about a fifth landed in the wrong place. A decision model choosing from a short list got nearly all of them right."
kind: Worked example
readMinutes: 9
author: Peter Schmitt
audience: For executives whose AI sorts, files or labels things at scale
published: 2026-11-19
lastChecked: 2026-11-19
modelVersion: Jev, per Channel3 (version not named)
stats:
  - value: "About 85%"
    label: "fewer products filed in the wrong category"
  - value: "97.2%"
    label: "filed correctly by the decision model, against 81.9% before"
  - value: "Same"
    label: "cost per product as the LLM step it replaced"
  - value: "Tens of millions"
    label: "of products Channel3 processes every day"
statsNote: "All four come from Channel3’s own write-up of Oct. 5, 2026. The 85% is my arithmetic from its two accuracy figures. The fine print has the details."
sources:
  - title: "Channel3: Where Jev fits in a large-scale data pipeline (Evan Fenster, Oct. 5, 2026)"
    url: https://www.trychannel3.com/blog/where-jev-fits
    grade: Company report
  - title: "Dialpad: decision models against LLMs on contact-center tasks (Laskar, Fu and Bhushan, arXiv 2611.22949, Nov. 17, 2026)"
    url: https://arxiv.org/abs/2611.22949
    grade: Company report
  - title: "TypeSafe docs: Models (how Jev is trained)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
---

Take a Nike fleece jacket. Before a shopping site can show it, someone has to file it. Clothing, then outerwear, then coats and jackets.

Channel3 files products like that for a living. It builds a catalog of physical products that AI shopping assistants search, and it processes tens of millions of products a day.

For one step of that filing, Channel3 used an LLM. About a fifth of the products landed in the wrong category. Then it handed the step to a decision model, an AI that picks from fixed answers and says how sure it is. Nearly all of them landed in the right place, at about the same cost.

That matters to anyone whose AI sorts, files or labels things. An LLM alone picks an answer and gives no number on how sure it is. That is an unknown risk, repeated millions of times a day.

However, when coupled with a decision model, each pick comes with a percentage. The sure ones can stand, and the rest can go to the LLM.

## The story

**Who.** Channel3 is a New York company that sells product data to developers and AI shopping assistants. Its system takes raw retailer pages and turns them into clean product records. Evan Fenster of Channel3 described the change in a company blog post on Oct. 5.

**Before.** Channel3’s category list has thousands of entries, arranged like a family tree. First, a cheap search pulled the 30 categories that looked closest to each product. Then an LLM picked the best one from those 30.

The search did its part well. The right category was almost always somewhere in the 30. The LLM’s pick was the weak link. It was right 81.9% of the time.

**The first try.** Channel3 tested TypeSafe’s Jev decision model. It began with a method from TypeSafe’s own guide: walk down the tree one level at a time, keeping the best few paths.

It broke on a youth bicycle. Retail category lists file bicycles under sporting goods, three levels down. Near the top of the tree, “vehicles” looked like the better match.

By the time the decision model reached the bicycle level, the right path was already gone. The bike was filed as a motor vehicle.

**The second try.** Channel3 then asked the decision model about every category, one by one. That worked. It was right 98% of the time.

But there are about 6,000 categories. Asking about each one would have cost about 2,000 times as much as Channel3’s setup.

**The switch.** The answer was to keep the cheap search and its 30 candidates. Only the last step changed. The decision model, not the LLM, picked one category from the 30.

**The result.** The decision model was right 97.2% of the time. The cost per product stayed about the same.

Wrong categories fell from about a fifth of products to fewer than three in a hundred. That is about 85% fewer errors.

## The limit Channel3 was honest about

The saving was in accuracy, not money.

Channel3 runs cheap open models in large batches. Against those, Fenster wrote, the decision model costs about the same. Against big, expensive LLMs, the decision model is far cheaper.

His list of where it worked is short. Picking from a short list. Making a choice with no training examples. Replacing small, cheap decisions.

His list of where it didn’t is shorter. Searching a huge list one step at a time. Cutting costs that were already low.

## How it works

**What a decision model is.** It is an AI that answers a fixed question with a percentage for each allowed answer. It writes no words. At Channel3, the question is “which of these 30 categories fits this product?”

**How it is trained.** TypeSafe says Jev is trained with a method it calls RLCD, so its percentages track how often it is right. TypeSafe also says Jev is not trained on customers’ requests. It hasn’t published its training data.

**How Channel3 set it up.** The cheap search narrows thousands of categories to 30. The decision model picks one. Channel3 used no training examples of its own for this step.

**What Channel3 didn’t say.** It hasn’t said whether the new step is live, how many products it tested, or what happens to the products the decision model is unsure about.

## What it means for you

**Money.** Don’t expect a saving if you already use a cheap model for this kind of choice. Expect fewer mistakes. If you use a big, expensive LLM to pick from a list, the saving can be large.

**Customers.** A jacket filed under vehicles is a jacket no shopper finds by browsing. At Channel3’s volume, fewer wrong categories means fewer lost products.

**Revenue.** Channel3’s customers are AI shopping assistants that choose what to show. Their answers are only as good as the categories underneath. Channel3 hasn’t tied the change to sales.

**Risk.** Stop using LLMs alone to pick from a list. With a decision model, each pick has a percentage. You set a bar, the level of sureness at which the pick stands. Picks below the bar go to the LLM.

### The same pattern in other industries

- **Call centers.** In a Dialpad test on its own call-center tasks, when Jev was very sure of what a caller wanted, it was right 97.1% of the time. Across all calls, it was right 78.7% of the time. Its researchers recommend keeping the sure answers and sending the rest to a stronger LLM, in [Dialpad’s study](https://arxiv.org/abs/2611.22949).
- **Hiring.** Jack & Jill had a decision model score every candidate. An LLM read only the shortlist. Jack & Jill’s screening costs fell 88%. [How Jack & Jill did it](/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Is the new step live?** Channel3 doesn’t say. It calls its existing setup “our current production setup,” and describes the decision model as a test result.

**How big was the test?** Channel3 doesn’t say.

**Why not let the decision model search the whole list?** Channel3 tried both ways. Walking the tree lost the right answer early. Asking about every category was too costly.

**What happens to the few it gets wrong?** Channel3 doesn’t say. My suggestion is to send the unsure picks to the LLM.

**Would my results match?** Only a test on your own items will tell you. Start with the step where your AI picks from a list.

### How to make the change

1. **Find the step where your AI picks one answer from a list.** Filing, coding, tagging, sending a ticket to the right team.
2. **Narrow the list first.** Use a cheap search to get a short list, and check that the right answer is almost always on it.
3. **Let a decision model pick from the short list,** with “none of these” allowed.
4. **Set a bar.** Picks above it stand. Picks below it go to the LLM you already use.
5. **Compare against your current setup** on items where you know the right answer.
6. **Record who made each pick,** and how sure it was.

## For your developer

Here is the pattern as code. A cheap search makes a short list. The decision model picks from it. Unsure picks go to the LLM. This is my sketch, not Channel3’s code. I haven’t run it on their data, so treat it as expected, not measured.

```python
NONE = "none of these"

def file_item(item, shortlist, decide, llm_pick, bar=0.8):
    options = shortlist(item, k=30)  # cheap search: 30 likely categories
    try:
        probs = decide(item, options + [NONE])  # decision model: one pick, with a percentage
        best = max(probs, key=probs.get)
        if best != NONE and probs[best] >= bar:
            return best, "decision_model", probs[best]
    except Exception:
        pass  # decision model down: the LLM picks, as before
    return llm_pick(item, options), "llm", None  # unsure: the LLM you already use
```

My worked example adds the checks around it, with tests. It measures how often the right answer makes the short list. It also compares accuracy before and after. [Subscribe for access](/subscribe/).

Public material from others:

- **[Channel3’s write-up](https://www.trychannel3.com/blog/where-jev-fits)** (company report): the three approaches it tried, with accuracy and cost for each.
- **[Dialpad’s study](https://arxiv.org/abs/2611.22949)** (company research): nine decision models against thirteen LLMs on contact-center tasks.

## The fine print

- **Channel3’s numbers.** All come from its post of Oct. 5, 2026, by Evan Fenster. The exact words: “Jev improved our product categorization accuracy from 81.9% to 97.2% at roughly the same cost when we used it to choose from 30 prefiltered categories.” It names Jev but not the version. It gives no test size.
- **The 85%.** My arithmetic. At 81.9% right, 18.1% were wrong. At 97.2% right, 2.8% were wrong. That is about 85% fewer errors.
- **The LLM before.** Channel3 names it as Gemma 4 31B, an open model from Google.
- **The search step.** Channel3 says the closest single category was right less than 40% of the time. The right one was in the top 30 more than 99% of the time.
- **The cost.** Channel3 gives $0.0005 a product for the decision-model step. Asking about all 6,000 categories reached 98.0% accuracy at $1.08 a product, which Channel3 says “would have increased our costs ~2,000×.”
- **The limit.** Fenster: “For those benchmarking Jev against cheaper open source models, it’s closer to a 50% discount than many multiples of savings. At Channel3, we use batched inference that makes the costs nearly identical to Jev.”
- **The bicycle.** Channel3 says the bicycle category scored 0.94 on its own, but the path to it scored 0.091, so the tree walk chose motor vehicles.
- **The opening jacket.** Channel3’s post uses the Nike Sportswear Club Fleece as its example. The path given is Clothing & Accessories, Clothing, Outerwear, then Coats & Jackets.
- **Dialpad.** Md Tahmid Rahman Laskar, Xue-Yong Fu and Shashi Bhushan TN of Dialpad, arXiv 2611.22949, submitted Nov. 17, 2026. “Very sure” means 90% or more. It is an offline study, and the intent examples are synthetic. The authors write that their results “support accepting confident predictions and routing the remainder to a stronger model.” On another task, call outcome, Jev and three other decision models were that sure on only 14 to 28% of calls.
- **Training.** From TypeSafe’s docs page on its models.
- **Jack & Jill.** From my earlier post, which cites its sources.
- **This site** is independent and not affiliated with Channel3, TypeSafe, Dialpad, Google or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
