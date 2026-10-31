---
title: "How to pick a decision model: the price barely matters, the mistakes do"
dek: "Stop using LLMs alone, and don’t pick the decision model you couple them with on price. In one independent test, every hosted decision model would cost under $800 a year at a million decisions a month, yet the least accurate of them made five times as many mistakes as the most accurate. The number a decision model returns is what lets you act without checking, so the test that matters is whether that number holds on your own work, at your own cut-off."
kind: Comparison
readMinutes: 10
author: Peter Schmitt
audience: For executives, operations and transformation leaders choosing which decision model runs their processes
published: 2026-11-01
lastChecked: 2026-10-31
modelVersion: jev-1.14.0
stats:
  - value: "1.2 million"
    label: "more mistakes a year from Cloudflare’s Clef-flash than from Jev or Microsoft’s Decision-1, at a million decisions a month, and it wasn’t the cheapest (my arithmetic on one independent test)"
  - value: "26 points"
    label: "between Jev and Cloudflare’s Clef on one question, a comment’s tone, when their overall scores were 3 points apart"
  - value: "8.5 points"
    label: "higher accuracy for Clef-flash once its cut-offs were set for it, not copied from Jev"
  - value: "80%"
    label: "fewer LLM calls GlassFlow would have made with Clef-flash in front of its LLM, at a cut-off set from six days of its own data; it would have missed 6 of 18 escalations"
statsNote: "The first figure is my arithmetic on Fabio Akita’s published benchmark of Oct 10, 2026. The others come from Better Stack, Construct and GlassFlow, each reporting its own test. All are small tests; the fine print says what they can and can’t show."
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
  - title: "TypeSafe docs: Noul (yes-or-no questions answered with a probability)"
    url: https://docs.typesafe.ai/primitives/noul.md
    grade: Official docs
  - title: "TypeSafe docs: Models (how Jev is trained and customized)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
---

An LLM can read anything and write back. Ask it to make the same call a million times, though, and you pay for every word, and you still don’t know which of its answers are wrong: an unknown risk. However, when coupled with a decision model, each call comes back with a probability, and that number is what lets a process run on its own. Which raises the next question: which decision model?

Since TypeSafe released Jev on Sept. 15, Cloudflare, Microsoft and OpenAI have followed with their own, and open ones have come from Perplexity and others. On Oct. 13, Artificial Analysis, which benchmarks AI models, launched an index to rank them. I went through every head-to-head test I could find. My verdict: don’t choose on price, and don’t choose on a leaderboard. Choose the decision model whose number holds up on your own work, at a cut-off you set from your own data, and keep checking that it still does. In one independent test, the least accurate hosted decision model would make about 1.2 million more mistakes a year than the best, to save about $100.

Four tests and one index show why.

## Construct: the same model, scored two ways

Construct, a start-up that builds an AI employee with its own computer, had about 40 small decisions inside its product, all written for Jev: the questions, the wording and the cut-offs where a probability turns into an action. Is this newly mentioned person someone the agent already knows? Should this tool call wait for the user’s go-ahead? When Cloudflare released its decision model, Clef, and said it was “fully Jev-API compatible,” Construct pointed the same requests at Clef and its smaller sibling, Clef-flash, without changing a line, and scored all three on 117 labelled cases.

On the cut-offs written for Jev, Clef-flash got 82.1% right. With cut-offs set for Clef-flash on cases held back for the purpose, it got 90.6%, level with Jev’s 90.9%, and Clef led at 93.2%. Same model, 8.5 points better, from its cut-offs alone. Construct’s line for it: the smaller model “was being read with another model’s ruler.” Its rule: “A threshold is a property of a model and a prompt together.”

Construct also found that a cut-off can go stale. In September it had set Jev’s cut-off for merging two records of the same person at 0.70, because real matches scored 0.71 to 0.82. Two weeks later it asked the same three test questions again, 20 times each. None of the 60 answers reached 0.70; the highest was 0.66. The version name hadn’t changed, and the drop showed up even with the version pinned on TypeSafe’s own service. On its 30-pair benchmark at that cut-off, Jev never merged two different people, the expensive mistake, but made only 44% of the merges it should have. Construct’s conclusion: “a version string is not a guarantee.” It doesn’t claim Jev got worse in general. It notes that Jev’s answers to identical questions varied slightly from call to call; Clef’s never did.

Construct is now moving that decision to Clef, but in shadow first: Jev keeps deciding while Clef’s answers are recorded beside it, and the cut-off it ships will come from that data.

## Fabio Akita: 23 models, and why price doesn’t decide it

Fabio Akita, a Brazilian software developer who publishes long, data-heavy tests on his blog, built his own benchmark and ran 23 decision models on it, half the cases in Portuguese. He priced the hosted ones on an example most companies will recognize: classifying 10,000 support emails a month into three or four queues.

At that volume, every hosted model cost less than a dollar a month. The mistakes did not shrink with the bill. Among the hosted models, Jev and Microsoft’s Decision-1 were the most accurate, at 97.6%, which his figures put at about 240 wrong answers per 10,000 emails. Clef-flash, at 87.5%, came to about 1,250. Scale that to a million emails a month and, by my arithmetic, the least accurate hosted model makes about 1.2 million more mistakes a year than the best, to save about $100 a year against Jev. Against Microsoft’s, it saved nothing: Decision-1, tied for the most accurate, cost the least. Mr. Akita’s verdict: “the price difference between the hosted models is irrelevant next to the cost of being wrong.”

Mr. Akita also found that the average hides the error that costs most. One of his cases described confirmed, permanent data loss for a single customer, which his written policy calls critical. Jev, Microsoft’s model and Clef-flash called it critical. The full Clef and OpenAI’s Decisions model called it “degraded.” And confidence is only useful if it is earned. On his main set, the best models made no mistakes at all when they claimed more than 90% certainty, and Jev claimed it on almost 90% of cases, Clef-flash on about 40%. One small open model, Decision 3.0 Edge, was wrong on 14 of the 68 answers it gave with that much confidence, about one in five.

His closing advice: “none of these models replaces the rule that’s already in code.” Fixed numeric limits and severity policy stay in ordinary code; the decision model turns free text into facts. “And the test that matters is yours.”

## GlassFlow: six days on its own data

GlassFlow, a data infrastructure company, had an LLM, Claude Haiku 4.5, watching its own production systems: every 10 minutes it read the latest window of logs and decided whether something needed a closer look. GlassFlow ran Cloudflare’s Clef-flash beside it for six days, 833 windows, on the same data.

The decision model’s probabilities tracked the LLM’s calls: about 0.5, on average, on the windows the LLM escalated, against about 0.2 on the rest. But the default cut-off of 0.5 flagged six times as many windows as the LLM and still missed a third of what it caught. No cut-off made it a straight replacement. As a filter in front of the LLM, it looked promising: at 0.4, it would have passed only 17% of windows on to the LLM, about 80% fewer LLM calls, and kept 12 of the 18 cases the LLM had escalated. The other 6 are the open question, and GlassFlow plans more days of data before it switches. GlassFlow’s summary: “The default line is not a setting to trust.” Where the line belongs “came from our data, not from the model card.”

## What the leaderboards can and can’t tell you

Better Stack, which sells monitoring software, ran Jev and Clef on 200 comments from its YouTube channel, with Anthropic’s Claude Opus 5.5 as the referee. Overall, Jev matched the referee 86% of the time and Clef 83%, close enough to call even. But on one question, the comment’s tone, Jev scored 75% and Clef 49%: Clef kept calling clear criticism “neutral.” On toxicity, Clef won, 88% to 81%. Two models three points apart overall were 26 points apart on one job.

Artificial Analysis found the same pattern across the category. Jev 1.13 leads its index, at 58, ahead of Fastino’s GLiDE and Microsoft’s Decision-1, both at 54. Yet on its tool-calling test, Jev placed fourth. It also found that across almost all probability levels, every decision model it tested was right less often than its probability claimed. The gap came mainly from knowledge and reasoning questions. On classification and on deciding which tool to use, the work these models are sold for, most were relatively well calibrated, which fits Mr. Akita’s clean results on routing work.

So a leaderboard tells you which models are worth testing. It can’t tell you which one is right for your question, at your cut-off, this month.

## How it works

**What a decision model does.** You send it material, such as an email, a log window or an agent’s proposed action, and a question with the answers you allow: yes or no, one of a set of options, or a place on a scale. It returns a probability for each answer in one pass, without writing any text, which is why it is fast and cheap.

**Why the number is the whole point.** Your code acts on the decision model’s probability: above your cut-off, the process goes ahead on its own; below it, the case goes to the LLM or a person. Think of hydraulics on a tractor: the LLM is still the engine, but the coupling lets it lift far more. That only works if the number means what it says. If a model says 0.9, it should be right about nine times in ten on your kind of question. That is what calibrated means, and it is what every test above was really checking.

**How they’re made.** TypeSafe hasn’t disclosed Jev’s size, its base model or its training data; it says Jev isn’t trained on customer requests and that the same weights serve every account. Cloudflare built Clef by further training Alibaba’s open Qwen3.8-27B model and published the weights under an open license; Clef-flash is built on the smaller Qwen3.5-9B. Microsoft built Decision-1 on Qwen3.5-9B as well. Several are open, so you can host and pin them yourself. Hosted names can change underneath you: Mr. Akita notes that OpenAI can swap the model behind its name, as Cloudflare does with Clef-flash.

**Why the cut-off belongs to you.** Each model attaches its own numbers to the same judgment. Construct found all three models ranked its cases well; what differed was the probability each gave. So a cut-off copied from a vendor’s example, or from the model you used before, is a guess.

## What it means for you

**Money.** The decision model’s bill is the smallest number in this decision. In Mr. Akita’s test, every hosted model would cost under $800 a year at a million decisions a month, and under about $4,000 even if your texts run five times longer than his. The money is in the mistakes: a misrouted ticket, a missed merge, a critical incident filed as routine. Price each kind of mistake before you compare models. Testing is cheap too: Construct’s whole benchmark cost about five cents in model fees, and GlassFlow’s six days about $8, nearly all of it for the LLM.

**Customers.** The mistake a customer feels is rarely the average one. It is the critical ticket sent to the routine queue. Test the expensive cases on purpose, on every decision model you consider.

**Revenue.** No test here reports revenue. The link is coverage. The larger the share of cases a decision model answers with earned confidence, the more of the process runs on its own, and the fewer LLM calls and people you pay for.

**Risk.** With an LLM alone, the risk is unknown: nothing tells you which answers are wrong. A decision model puts a number on that risk, but only if the number is right on your work. Amit Kumar Jena, development manager for AI at Kanerika, told InfoWorld: “a precise-looking probability can give an uncertain decision more authority than it deserves.”

### The same choice in other industries

- **Security software.** Harness tested Jev on 500 endpoints of real customer traffic and found every one of its mistakes in the 3.4% of cases where its probability showed it was unsure. [How Harness did it](/blog/harness-ai-api-inventory-decision-model/).
- **Recruiting.** Jack & Jill scored candidates criterion by criterion with a decision model and cut screening costs 88%. [How Jack & Jill did it](/blog/jack-and-jill-coupled-llm-decision-model/).
- **AI agents.** Construct’s decisions include whether an agent’s tool call should wait for the user’s go-ahead, the kind of call where a wrong “yes” can’t be undone.

### The hard questions

**“Can’t we just buy the leaderboard leader?”** Use the leaderboard to choose two or three to test. Artificial Analysis’s leader placed fourth on its tool-calling test, and Better Stack’s 26-point gap on a single question is the kind of thing an overall score hides.

**“The models are API-compatible. Can’t we switch later?”** You can switch the code in an afternoon. You can’t carry the cut-offs across. Construct’s Clef-flash lost 8.5 points until its cut-offs were reset. Re-measure every one.

**“What if the vendor changes the model under us?”** Construct saw scores fall under an unchanged version name. Re-run a small fixed set of your own cases on a schedule, and alert when the probabilities move. If you need certainty, an open model you host yourself can’t change under you.

**“Hosted or open?”** Hosted is simplest to run. Open lets you pin the model and keep sensitive text on systems you control; Construct counts keeping its users’ text on the platform it already runs on as a real benefit. Mr. Akita adds the cost: the best open models need serious hardware and take over a second per decision on his machine.

**“A probability with no reason attached: how do we defend it?”** Log the question, the answer, the probability and the cut-off on every decision. Forrester’s Charlie Dai recommends calibration testing, control over question wording and cut-offs, and audit logs, with people reviewing high-impact decisions.

### How to choose

1. **Pick one repeated decision** an LLM makes today, and write down what a mistake in each direction costs.
2. **Gather a few hundred past cases with known answers,** including the hard and the expensive ones.
3. **Shortlist two or three decision models** from the leaderboards, including at least one you could host yourself.
4. **Run them in shadow** next to your current LLM, logging every probability. GlassFlow and Construct both did this before switching anything.
5. **Score the job, not the average:** accuracy on each question, and how often each model is wrong when it is confident.
6. **Set the cut-off from your data,** for each model separately, and decide what goes to the LLM below it.
7. **Keep fixed rules in ordinary code,** and re-test on a schedule after you switch.

## For your developer

The shadow test as code: run each candidate on your own labelled cases, act only where it is confident, and measure how much it would handle without the LLM and how often it is wrong when it acts. This is my sketch, not code any of these companies published, and I haven’t run it on their data, so treat it as expected, not measured.

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

- **Who published the numbers.** Fabio Akita ran his own benchmark and published the cases and results. Construct, GlassFlow and Better Stack each report their own tests on their own posts. Artificial Analysis publishes its index. Microsoft’s price and the analysts’ comments come through InfoWorld. I have measured none of them.
- **My arithmetic.** The 1.2 million and the annual costs take Mr. Akita’s accuracy and his price per 10,000 short emails and scale them to 12 million decisions a year; the dearest, Clef, comes to about $760. His texts were short; longer ones cost proportionally more.
- **What the tests can show.** All are small. Mr. Akita’s cases were written with AI help and checked against his policies, without independent human labels, with 12 scenarios per task in each language. Construct’s 117 cases were synthetic and labelled with an AI assistant, and Clef’s lead over Jev there is not statistically significant. GlassFlow’s reference was the LLM’s own decisions, not confirmed incidents. Better Stack’s referee was another model. Treat each as one careful test, not a ranking for your work.
- **Versions.** Mr. Akita and Construct tested Jev 1.13.0; Artificial Analysis tested Jev 1.13. TypeSafe now serves 1.14.0, which none of these tests covers. Construct’s September-to-October drop rests on three test questions.
- **What we don’t know.** Why Jev’s scores moved for Construct; how OpenAI’s Decisions model is trained; and how any of these models does on your data, which is the point of this post.
- **This site** is independent and not affiliated with TypeSafe, Cloudflare, Microsoft, OpenAI, Construct, GlassFlow, Better Stack or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
