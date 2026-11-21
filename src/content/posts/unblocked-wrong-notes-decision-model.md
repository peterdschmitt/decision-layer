---
title: "How a decision model cut the share of wrong notes Unblocked’s AI reads by 18%"
dek: "Stop using LLMs alone. Unblocked coupled its agent’s LLM with a decision model that picks which notes the LLM reads. In Unblocked’s own test, the share of wrong notes fell about 18%."
kind: Worked example
readMinutes: 10
author: Peter Schmitt
audience: For executives whose AI agents answer from what they are handed
published: 2026-11-21
lastChecked: 2026-11-21
modelVersion: jev-1.13.0, named in Unblocked’s example request
stats:
  - value: "About 18%"
    label: "drop in the share of notes read that are wrong"
  - value: "About 22%"
    label: "more of the useful notes reach the agent"
  - value: "About 21%"
    label: "fewer questions get a note when no note fits"
statsNote: "All three come from Unblocked’s own test, published Sept. 22, 2026. The percentages are my arithmetic from its figures. The fine print has the details."
sources:
  - title: "Unblocked: We put Jev in production against a cross-encoder. Here are the numbers. (Morteza Milani, Sept. 22, 2026)"
    url: https://getunblocked.com/blog/jev-in-production-vs-cross-encoder/
    grade: Company report
  - title: "pgEdge: AI DBA Workbench now supports Jev and other decision models (Nov. 19, 2026)"
    url: https://www.pgedge.com/press-releases/pgedge-ai-dba-workbench-now-supports-jev-and-other-decision-models
    grade: Company report
  - title: "Alvar Laigna: System One next to the LLM, first week in a procurement assistant (Sept. 29, 2026)"
    url: https://medium.com/@alvarlaigna/system-one-next-to-the-llm-first-week-in-a-procurement-assistant-6689fe112a24
    grade: Company report
  - title: "TypeSafe docs: Models (how Jev is trained)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
---

An engineer asks an AI agent why the nightly sync started failing after a move to a new server region. The agent keeps notes about the engineer’s company. Some bear on the question, and most don’t.

Before it answers, the agent has to choose which notes to read. A useful note makes the answer better. A wrong one, in the words of the company that built the agent, produces “a confident, specific, wrong answer.”

That agent belongs to Unblocked, a software company. By September, Unblocked had handed that choice to a decision model. The decision model now makes it on every question, in production.

A decision model is an AI that answers a fixed question with a percentage. Here the question is “does this note help answer this question?”

The agent runs on an LLM, the kind of AI that writes answers. An LLM reads whatever it is handed. It gives no number on how sure it is that the material fits. How often it reads the wrong thing is an unknown risk.

Stop using LLMs alone.

However, when coupled with a decision model, the LLM sees a note only after the decision model gives it a percentage. The bar is how sure the decision model must be before a note goes in. Notes below the bar stay out, and the LLM answers without them.

| | Before | With a decision model |
| --- | --- | --- |
| How a note gets in | A ranking score clears a cutoff | The note’s percentage clears the bar |
| How sure it was | A score, not a percentage | A percentage on every note |
| When no note fits | A note got in more than half the time | A note got in less often |

## The story

**Who.** Unblocked sells software that connects a company’s code, documents, tickets and chat. Its AI agent answers questions about that company. Webflow and Drata are among its customers. Morteza Milani, an engineer there, wrote up the change on Unblocked’s blog on Sept. 22.

**How the agent works.** The agent writes notes as it goes, such as “a user wants short answers.” When the next question comes in, it must decide which notes help and which hurt.

**Before.** A ranking tool called a cross-encoder made that choice. It scored each note and kept the best ones, up to five. Its scores ranked the notes, but they were not true percentages.

**The worry.** Unblocked wrote that a missed note “costs a slightly worse answer.” A wrong note is worse, because the answer sounds sure of itself.

So the note-picking step had two jobs. Pick the right notes, and add nothing when nothing fits.

**The change.** Unblocked tested a switch to Jev, a decision model from a company called TypeSafe. Jev sees the question and up to 20 notes at once.

It returns a percentage for each note. Notes above the bar go to the agent.

**The test.** Unblocked did not grade the new model on its past logs. The old tool had picked every note in those logs, so they favored it. In Unblocked’s words, the old tool would grade “its own homework.”

Instead, it took 292 real questions from production. For each one, it pulled every note that existed at that moment. An LLM graded each note blind, without knowing which tool had picked it.

**The result.** The decision model did better on all three counts that matter. The share of wrong notes among those that reached the agent fell about 18%, and more of the useful notes got through. When no note fit, it added one about 21% less often.

The step cost about 6% less. It took 0.15 seconds longer. Unblocked says no one notices that behind an answer that takes several seconds.

**Live.** Unblocked wrote that Jev is now making the choice “on every question, in production.” It said its other choices still run on LLMs, and it is moving them off LLMs too.

## The twist

Asking about one note at a time didn’t work. That version of the decision model did worse than the old tool.

Unblocked’s explanation is simple. Shown one note alone, the model has nothing to compare it with, so it is too generous. Shown 20 notes, it can see which few really bear on the question.

The second lesson was about tuning. Unblocked spent a day trying nine rewordings of its instructions to the model. None of them helped.

What mattered was where Unblocked set the bar. In Unblocked’s words: “Tune the threshold, not the prompt.” In plain terms, adjust the bar, not the instructions.

## How it works

**What a decision model is.** It writes no words, only a percentage. At Unblocked, the question is whether a note helps answer the question in front of the agent.

**How it is trained.** TypeSafe says Jev is trained so that its percentages match how often it is right. Unblocked’s view is that this is what made the bar useful: “the number means what it says.” TypeSafe’s docs don’t describe the training data.

**How Unblocked set it up.** Each request holds the question and up to 20 notes, and Jev returns a percentage per note. A bar decides which notes reach the agent, up to five. The LLM then writes the answer.

## What it means for you

**Money.** The saving here is small, about 6% on one step. The real gain is better material for the LLM. Don’t expect a large cut where the step was already cheap.

**Customers.** A wrong answer that sounds sure is the one customers act on. Find the step where your LLM reads something chosen for it. Then measure what a wrong input costs you.

**Revenue.** Unblocked sells answers engineers act on. It wrote that a wrong note is “much more expensive to Unblocked's credibility.”

**Risk.** The bar is how sure the decision model must be before a note reaches the LLM. Below the bar, nothing is added. Set it on your own past examples, then leave the instructions alone.

### The same pattern in other industries

- **Database monitoring.** pgEdge’s monitoring tool now lets Jev, the same decision model, decide whether a database alert is real. An LLM writes an explanation only when someone asks why. By my arithmetic from pgEdge’s figures, this is about 98% cheaper than having the LLM decide. [pgEdge’s announcement](https://www.pgedge.com/press-releases/pgedge-ai-dba-workbench-now-supports-jev-and-other-decision-models).
- **Public sector.** A proof of concept for Estonian public buyers runs Jev and an LLM at the same moment on each chat message. When Jev is sure where a message should go, the LLM’s call is cancelled, and at best that sorting step ends about 89% sooner. [The builder’s write-up](https://medium.com/@alvarlaigna/system-one-next-to-the-llm-first-week-in-a-procurement-assistant-6689fe112a24).
- **Hiring.** Jack & Jill had a decision model score every candidate. An LLM read only the shortlist. Jack & Jill’s screening costs fell 88%. [How Jack & Jill did it](/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**The old tool wasn’t an LLM, so why does this matter?** The LLM writes every answer from the notes it is handed. A wrong note in can mean a confident, specific, wrong answer out. Unblocked also says its other choices still run on LLMs, and it is moving them.

**Who graded the test?** Another LLM, not people. Unblocked graded a sample twice to check it was consistent.

**Did answers get better?** Unblocked doesn’t report on the final answers. It measured what reached the agent.

**What if the decision model is down?** Unblocked doesn’t say. pgEdge’s design is one answer: if the decision model fails, the LLM makes the call.

### How to make the change

1. **Find the step that chooses what your LLM reads.** Notes, documents, past tickets, search results.
2. **Don’t grade the new model on your old logs.** Build a fresh test set from real questions.
3. **Have each item graded blind,** without knowing which tool picked it.
4. **Ask the decision model about a batch of items at once,** not one at a time.
5. **Set the bar on past examples,** and let nothing through when nothing clears it.
6. **Record which items reached the LLM,** and how sure the decision model was.

## For your developer

Here is the pattern as code. The decision model scores a batch of notes against the question. Notes above the bar reach the LLM, up to five. If none clear the bar, the LLM answers without notes. This is my sketch, not Unblocked’s code. I haven’t run it on their data, so treat it as expected, not measured.

```python
def pick_notes(question, notes, decide, bar=0.5, batch=20, cap=5):
    scored = []
    for i in range(0, len(notes), batch):  # ask about 20 notes at once, not one by one
        chunk = notes[i:i + batch]
        probs = decide(question, chunk)  # decision model: chance each note helps
        scored += [(p, n) for p, n in zip(probs, chunk) if p >= bar]
    scored.sort(key=lambda pn: pn[0], reverse=True)
    return [n for _, n in scored[:cap]]  # may be empty: say nothing rather than mislead

def answer(question, notes, decide, llm):
    chosen = pick_notes(question, notes, decide)
    return llm(question, chosen), chosen  # the LLM writes; record what it read
```

My worked example adds the test Unblocked ran. It builds a fresh graded set, compares the old picker with the new one, and sets the bar. [Subscribe for access](/subscribe/).

Public material from others:

- **[Unblocked’s write-up](https://getunblocked.com/blog/jev-in-production-vs-cross-encoder/)** (company report): the test design, the three setups it compared and the full results table.
- **[pgEdge’s documentation](https://docs.pgedge.com/ai-dba-workbench/development/developer-guide/alerter/anomaly-detection/)** (company docs): how its monitoring tool hands decisions to Jev and explanations to an LLM.

## The fine print

- **Unblocked’s numbers.** All come from its post of Sept. 22, 2026, by Morteza Milani. I read it in full. Its example request names jev-1.13.0. It doesn’t say which customers’ data was used, beyond tuning on some organizations and reporting on others.
- **The table.** Share of chosen notes that were useful, 34.8% before and 46.4% after. Share of useful notes that reached the agent, 63.8% and 77.6%. Share of questions with no useful note where nothing was added, 48.4% and 59.4%. Cost per 1,000 questions, $1.87 and $1.76. Median time, 0.20 and 0.35 seconds.
- **My arithmetic.** Wrong notes among those chosen fell from 65.2% to 53.6%, about 18% fewer. Useful notes reaching the agent rose about 22%. Questions that got a note when none applied fell from 51.6% to 40.6%, about 21% fewer. Cost fell about 6%. Time rose 75%.
- **The worry.** In Unblocked’s words: “A missed note costs a slightly worse answer. A wrong note injected into the prompt costs a confident, specific, wrong answer.”
- **The old tool.** A cross-encoder, a ranking model, kept notes scoring 0.38 or more, up to five. Unblocked doesn’t name it. In the test, on questions where nothing fit, it added a note 51.6% of the time. That is at the matched setting, which may differ from its live cutoff.
- **The test.** 292 production questions and 12,927 question-and-note pairs. Only 1.8% of the pairs were relevant. The grader was GPT-5.6 Terra. On a 10% sample graded twice, it agreed with itself exactly 93.0% of the time. No person checked the grades.
- **One note at a time.** “Per-pair came back below the incumbent.” Unblocked did not ship that version.
- **The time.** “150 milliseconds on a path that sits behind an LLM answer taking several seconds is not something a user can perceive.” The cost counts only the call that picks notes.
- **Live.** “Jev is now making one of the decisions we care most about, on every question, in production. We are steadily moving the rest of them off text models too.” I found no later Unblocked post reporting that move. Unblocked doesn’t say what happens if the decision model fails.
- **The bar.** Unblocked doesn’t give the value it chose. For the comparison, it set each bar so both tools let through the same share of question-and-note pairs. Its results table also applies a cap of five notes per question.
- **pgEdge.** From its press release of Nov. 19, 2026, and its documentation. The feature is in a test release. The 98% is my arithmetic from about $0.04 against $1.93 per 1,000 decisions, against Claude Haiku 4.5. The documentation says its figures measure agreement with earlier LLM decisions, “not accuracy.” Jev agreed with Claude Haiku on 88% of 150 cases. pgEdge names no customer using it.
- **Estonia.** From Alvar Laigna’s post of Sept. 29, 2026. Jev routing took about 0.8 seconds, against about 7.5 for the LLM planner alone, about 89% less. It is a proof of concept at RTK for small public purchases. “Routing was about an order of magnitude faster and hundreds of times cheaper than the planner call it races.” His caveat: “The sample is small and partly our own test traffic.” It covered 60 decisions across three uses over four to five days. Only 11 were confident sorting calls, and all 11 agreed with the LLM planner. The 89% is the best case, when Jev wins the race.
- **Training.** From TypeSafe’s docs page on its models: Jev “is trained with RLCD to return calibrated decisions,” and “is not trained on customer requests or responses.”
- **Jack & Jill.** From my earlier post, which cites its sources.
- **Sales and cost of the test.** Unblocked hasn’t tied the change to sales. It says the test method cost “about twelve dollars and a couple of days.”
- **The tuning.** One of the nine rewordings moved the result the wrong way, costing 20 points of recall.
- **Unblocked’s caveat.** “This is one workload. Our numbers are not a benchmark and we would not hand them to you as one.”
- **Customers.** Webflow and Drata appear as customer stories on Unblocked’s site.
- **The headline.** The 18% is the drop in the share of chosen notes that were wrong. It is not a count of notes. “Wrong” means the grader judged the note not useful for the question, not that the note was false. All results come from Unblocked’s offline test, not from live traffic.
- **This site** is independent and not affiliated with Unblocked, TypeSafe, pgEdge, RTK, OpenAI, Anthropic or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
