---
title: "How a marketing platform cut the cost of checking customer records 77% with a decision model"
dek: "Stop using LLMs alone. In a test, Hightouch had a decision model check every customer profile and an LLM review only the unsure ones. Accuracy held, and the cost fell about three-quarters."
kind: How-to
readMinutes: 9
author: Peter Schmitt
audience: For executives who run marketing, customer data or analytics teams
published: 2026-11-10
lastChecked: 2026-11-10
modelVersion: jev-1.13.0
stats:
  - value: "77%"
    label: "lower AI cost than the LLM alone, main test"
  - value: "22%"
    label: "of profiles sent on to the LLM, main test"
  - value: "0.2 points"
    label: "lower accuracy than the LLM alone, main test"
  - value: "45%"
    label: "lower cost on a harder test, with no accuracy lost"
statsNote: "All four figures come from one company test by Hightouch, published Nov. 4, 2026, on made-up customer records. The fine print says more."
sources:
  - title: "Hightouch: A Jev that can ask Opus for help gives Opus accuracy at 4x lower cost (Albert Jin, Neil Desai and Delaney Mackenzie, Nov. 4, 2026)"
    url: https://hightouch.com/blog/llm-judges-identity-resolution
    grade: Company report
  - title: "pseudopeople: the tool Hightouch used to make realistic fake records (Institute for Health Metrics and Evaluation, University of Washington)"
    url: https://github.com/ihmeuw/pseudopeople
    grade: Official docs
  - title: "TypeSafe docs: Models (how Jev is trained)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
---

Picture a shopper named Daniel Gardner who buys a coat. Jenna Gardner, who lives across town, buys a lamp. Their records share a last name, so a company’s software decides they are one customer.

Now Daniel gets Jenna’s offers. The company’s estimate of what he is worth is wrong. If he asks for his data, he may get some of hers.

Every company that markets to its customers has this problem. Its systems join scattered records into one profile per person. The most common and costly mistake, Hightouch says, is joining two people into one.

## The trap

Finding those mistakes is slow. A person can check about 50 profiles an hour. So most teams check a small sample and hope.

An LLM can do the checking without a person. An LLM is the kind of AI behind ChatGPT. It reads the records and says whether they describe one person or two.

But the best LLMs are slow and costly at high volume. And they give no sign of which answers are shaky, so you take an unknown risk on every one.

However, when coupled with a decision model, each answer comes back with a number that says how sure it is. That number comes from the decision model. A decision model is an AI that picks from a fixed list of answers and gives a percentage for each. It writes no words, so it is fast and cheap.

The LLM sees only the answers the decision model is unsure of. That is full automation, with a number on every answer.

## The story

**Who.** Hightouch sells software that marketers use to target customers. Joining records into profiles is one of the things it sells. Three people there, Albert Jin, Neil Desai and Delaney Mackenzie, published this test on Nov. 4.

**The question.** Could a decision model check the joined profiles as well as a top LLM? If so, it could check thousands of profiles in minutes. Today, Hightouch says, teams can spend months learning whether their profiles are right.

**The test.** Hightouch built 1,000 profiles from made-up records of a fictional town. Half were one real person with messy records. The other half wrongly joined two people.

**The first result.** The top LLM, Claude Opus, got 99% of the profiles right. The decision model, Jev from a company called TypeSafe, got about 96% right.

But Jev was about 15 times faster, and far cheaper.

**The coupling.** Then Hightouch let Jev check every profile first. Jev gives each profile a percentage: how likely it is that two people were wrongly joined.

When Jev’s percentage was high enough or low enough, its answer stood. When Jev was somewhere in the middle, the profile went to the LLM for a second look. That middle range is the unsure zone.

**The result.** Jev sent about one profile in five to the LLM. The coupled setup gave up just 0.2 percentage points of accuracy against the LLM alone. It cost 77% less.

## The twist

Next, Hightouch made the test harder. It used only tricky profiles: typos in a birth date, twins, a father and son with the same name.

On those, the LLM alone fell to 95.1%. Jev alone fell to 89.1%.

The coupled setup got 95.3%, slightly better than the LLM alone. Its cost rose. Hightouch says that is because Jev was unsure more often, so it sent more profiles to the LLM. It still cost 45% less than the LLM alone.

Nobody changed a setting. The system spent more when the work got harder, on its own.

## What decided the result

**The decision model knew when it was guessing.** Most of Jev’s mistakes came when it was close to 50% sure. Those fell in the unsure zone, so the LLM caught them.

**Not every decision model does.** Hightouch also tried GPT-6 Luna, OpenAI’s decision model. Alone, Luna beat Jev on the first test. But Luna was often very sure when it was wrong.

So coupling helped Luna less. On the harder test, coupled Luna got 91.6%, well short of the LLM alone. Its wrong answers looked sure, so they never reached the LLM.

**The lesson.** Before you couple a decision model with an LLM, check one thing. When it is wrong, does it say it is unsure?

## How it works

**What a decision model does.** You send it the records and a yes-or-no question. Here, the question was whether the records describe more than one person. It returns a percentage, in a single step.

**How Hightouch set it up.** Every model got the same written instructions. They listed the kinds of errors that appear in one person’s records, such as a nickname or a typo. Of everything Hightouch tried, that list raised every model’s accuracy the most.

**How it is trained.** TypeSafe says it trains Jev so that its percentages track how often it is right. It has not said what data it used. Hightouch’s test is one outside check that the percentages were honest enough to use.

## What it means for you

**Money.** On the main test, the coupled setup cost 77% less than the LLM alone. By my arithmetic, a team spending a million dollars a year on LLM checks would save about $770,000.

**Customers.** A wrongly joined profile means the wrong offers, the wrong service history and a privacy risk. Coupled, checking every profile costs little, so you need not settle for a sample.

**Risk.** With an LLM alone, you don’t know which answers are shaky. Coupled, the unsure answers go to the LLM. And when the work gets harder, more of them go.

**Speed.** On the main test, the coupled setup took under a third of the LLM’s time per profile. Either way, it checks a profile in seconds, not minutes.

### The same pattern in other industries

- **Recruiting software.** Before Recruitly’s software overwrites a company record, a decision model checks that the new details belong to the same business. When the decision model is unsure, the LLM decides as before. That is from Recruitly’s own blog.
- **Security software.** Harness tested a decision model on real customer traffic. Every mistake fell among the few cases where it said it was unsure. [How Harness did it](/blog/harness-ai-api-inventory-decision-model/).
- **Hiring.** Jack & Jill had a decision model score candidates one criterion at a time. Its screening costs fell 88%. [How Jack & Jill did it](/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Is this real customer data?** No. Hightouch made the records with a public tool that simulates a town. Real records are messier, so test on your own.

**Was the unsure zone picked fairly?** Hightouch picked it on the same 1,000 profiles it scored. So the main result is a best case. Pick your zone on one batch and check it on another.

**Why not use the cheapest setup?** Coupled Luna cost less on the main test. But it failed on the harder one. Hightouch prefers coupled Jev, it says, because you never know in advance how hard your records will be.

**Who should own this work?** The team that owns customer data should own the question, the unsure zone and the checks.

### How to make the change

1. **Pick one check** your team runs by hand or with an LLM today.
2. **Build a test set** with known answers, including the hard cases.
3. **Run your LLM and a decision model on the same set.**
4. **Look at the decision model’s mistakes.** If most came when it was unsure, it is a good partner. If not, try another.
5. **Set an unsure zone** on one batch, and check it on a second batch.
6. **Send the unsure zone to the LLM,** as you do today.

## For your developer

Here is the pattern as code. The decision model checks every case. Cases in the unsure zone go to the LLM. This is my sketch, not Hightouch’s code. I haven’t run it on Hightouch’s data, so treat it as expected, not measured.

```python
def check_profile(records, decide, llm_check, low=0.30, high=0.90):
    try:
        p = decide(records)  # decision model: chance the records are two or more people
    except Exception:
        return llm_check(records), "llm"  # decision model down: the LLM checks, as before

    if p >= high:
        return "wrongly_joined", "decision_model"  # sure it is two people
    if p < low:
        return "one_person", "decision_model"  # sure it is one person
    return llm_check(records), "llm"  # unsure zone: the LLM takes a second look
```

We show you how in a worked example. It sends a decision model’s unsure zone to an LLM. It measures the share sent, the accuracy and the cost on a test set. It comes with offline tests. [Subscribe for access](/subscribe/).

Public material from others:

- **[Hightouch’s write-up](https://hightouch.com/blog/llm-judges-identity-resolution)** (company report): every table, including each unsure zone it tried.
- **[pseudopeople](https://github.com/ihmeuw/pseudopeople)** (public tool): makes realistic fake records like the ones Hightouch used.

## The fine print

- **Who published the numbers.** Every figure comes from Hightouch’s post by Albert Jin, Neil Desai and Delaney Mackenzie, dated Nov. 4, 2026. I have measured none of them. Hightouch sells profile building, not AI models, so it has no clear stake in which model wins.
- **The test.** 1,000 profiles built from made-up records, half one person and half two people wrongly joined. A second, harder set held only tricky profiles. Hightouch did not say how many. No real people appear in either.
- **The unsure zone.** Hightouch sent a profile to the LLM when Jev was between 30% and 90% sure that two people had been wrongly joined. Above 90%, Jev’s answer of “wrongly joined” stood. Below 30%, its answer of “one person” stood.
- **Main test scores.** LLM alone (Claude Opus 5.5) 99.0%. Jev alone 95.7%. Coupled, with 30% to 90% sent to the LLM, 98.8%, with 22% of profiles sent. GPT-6 Luna alone 97.3%. Coupled Luna 98.5%, at $0.33 per 1,000 profiles.
- **Harder test scores.** LLM alone 95.1%. Jev alone 89.1%. Coupled Jev 95.3%. Luna alone 88.8%. Coupled Luna 91.6%, at $1.15 per 1,000. Hightouch did not say what share was sent to the LLM.
- **Cost and speed.** Main test, per 1,000 profiles: LLM alone $3.86, coupled $0.88 (77% less, or about $770,000 on a $1 million bill), Jev alone $0.05. Harder test: LLM alone $5.39, coupled $2.94 (45% less). Time per profile on the main test: 2.2 seconds for the LLM alone, 0.63 for the coupled setup, 0.15 for Jev alone. Hightouch says costs and times are what it saw in its own setup.
- **Speed of human checks.** About 50 profiles an hour, per Hightouch. It says more than 1,000 checks are needed to measure the rate of wrong joins within one percentage point.
- **The written instructions.** Hightouch says every model gained the most from the list of common errors.
- **The opening example.** The names Daniel and Jenna Gardner come from one of Hightouch’s made-up profiles. The coat and the lamp are mine.
- **What was checked.** These models graded profiles that were already built. They did not build them. Hightouch has not said whether it runs this in production.
- **What we don’t know.** How this holds on real customer records, the share sent to the LLM on the harder test, and the opposite mistake: one person split into two profiles. Hightouch says a later post will cover that.
- **Recruitly, Harness and Jack & Jill.** Those details come from each company’s own report.
- **This site** is independent and not affiliated with Hightouch, TypeSafe, Anthropic, OpenAI or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
