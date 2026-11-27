---
title: "How pgEdge cut the cost of each database alert call by 98% with a decision model"
dek: "Stop using LLMs alone. In a test, pgEdge had a decision model make the yes-or-no call on database alerts, and kept the LLM for explanations."
kind: How-to
readMinutes: 10
author: Peter Schmitt
audience: For executives whose teams are buried in alerts
published: 2026-11-27
lastChecked: 2026-11-27
modelVersion: TypeSafe jev-latest, as tested by pgEdge in October 2026
stats:
  - value: "About 98%"
    label: "lower cost for each alert call"
  - value: "15x"
    label: "faster answer on each alert"
  - value: "89%"
    label: "match between the decision model and the LLM’s past calls"
  - value: "0"
    label: "alerts the LLM had raised that the decision model hid"
statsNote: "All four come from pgEdge’s own test in October 2026, published Nov. 19. It measured agreement with an LLM’s earlier calls, not right or wrong answers. The fine print has the details."
snapshot:
  - label: "Why it matters"
    text: "Deciding which alerts are real is a daily cost for any team that runs systems."
  - label: "Where the money is"
    text: "In pgEdge’s test, the final call on each alert cost about 2% of what the LLM charged."
  - label: "Why AI alone hasn’t delivered it"
    text: "An LLM writes a paragraph for every reading, slowly. pgEdge’s tool gives no bar to set on its answers."
  - label: "What to do"
    text: "Give the yes-or-no call to a decision model. Ask the LLM to explain only when a person looks."
  - label: "What we haven’t done"
    text: "I haven’t run pgEdge’s tool. Its test had no answer key, and no customer has reported results."
sources:
  - title: "pgEdge press release: pgEdge AI DBA Workbench Now Supports Jev and Other Decision Models (Nov. 19, 2026)"
    url: https://www.pgedge.com/press-releases/pgedge-ai-dba-workbench-now-supports-jev-and-other-decision-models
    grade: Company report
  - title: "pgEdge blog, Sarah Conway: pgEdge AI DBA Workbench 2.0 Beta: Fewer False Alarms for Postgres Monitoring (Nov. 19, 2026)"
    url: https://www.pgedge.com/blog/pgedge-ai-dba-workbench-2-0-beta-fewer-false-alarms-for-postgres-monitoring
    grade: Company report
  - title: "pgEdge developer docs: Anomaly detection (decision model and trade-offs)"
    url: https://docs.pgedge.com/ai-dba-workbench/development/developer-guide/alerter/anomaly-detection/
    grade: Official docs
  - title: "Dialpad: Can Decision Models Replace LLMs in Real-World Contact Center Classification and Judging Tasks? (arXiv, Nov. 17, 2026)"
    url: https://arxiv.org/abs/2611.22949
    grade: Company report
  - title: "Outcasts on Qiita: counting the logs of 2,563 multi-agent turns (Nov. 27, 2026, in Japanese)"
    url: https://qiita.com/outcast_zari/items/c01e882c582a8d6ea100
    grade: Company report
---

A database starts taking far longer than usual to answer one query. Is that a fire a person must put out tonight? Or is it noise that will pass by morning?

That call comes up for every odd reading, on every database, all day. pgEdge, an open-source database company, offers a free tool that makes it automatically.

Get it wrong one way and people miss a real problem. Get it wrong the other way and they stop trusting alerts.

Until this month, pgEdge’s tool could only ask an LLM to make the final call. The LLM wrote a verdict and a paragraph of reasons for each reading. It took seconds and charged for every word.

An LLM is good at explaining. But with an LLM alone, pgEdge’s tool offers no bar, a cutoff that decides which alerts to hide. That leaves an unknown risk on every alert. Stop using LLMs alone.

However, when coupled with a decision model, the LLM stops making the call and does what it does well: explain.

A decision model is an AI that answers one fixed question. It gives each possible answer a percentage.

pgEdge’s new test version lets a decision model make the yes-or-no call. The LLM writes an explanation only when a person opens the alert.

In pgEdge’s test, the decision model agreed with the LLM’s past calls 89% of the time. It cost about 2% as much.

## Who did it

pgEdge makes tools for Postgres, a popular free database. Its AI DBA Workbench watches a company’s databases and raises alerts. A DBA is the database administrator who would otherwise watch them by hand.

Dave Page created the tool. He is pgEdge’s chief technology officer. pgEdge announced decision model support on Nov. 19, in a test version of the tool.

## How it worked before

The tool checks each odd reading in three steps. The first compares it with the database’s normal range. The second compares it with past problems.

Readings that still look like trouble after both reach the third step, the final call. Until now, an LLM made it. In pgEdge’s test, that LLM was Claude Haiku 4.5, from Anthropic.

The LLM read the details and wrote back a verdict with its reasons. pgEdge says this final step is the slow and costly one.

## How pgEdge made the change, step by step

**1. It found the one question at the end.** Every reading that reaches the final call needs a single answer. pgEdge wrote it down: “Is this a real issue that requires attention?”

**2. It gave that question to a decision model.** The decision model reads the same details the LLM read. It answers with a percentage for “yes.” pgEdge tested two, Jev from a company called TypeSafe and one from OpenAI.

**3. It set a bar.** The bar decides which readings are hidden. The tool hides a reading only when the decision model is at least 50% sure it is a false alarm. Every other reading becomes an alert.

**4. It kept the LLM for words.** Each alert has a “Why was this flagged?” button. The first time a person presses it, the LLM writes the explanation. Alerts nobody opens never cost an LLM call.

**5. It kept the safety rule.** If the decision model fails, the LLM makes the call. If both fail, the alert goes out anyway, as it always had.

**6. It left one job with the LLM.** Once a person has marked an alert as seen, the tool later decides whether to close it. The LLM still makes that call, because pgEdge had no real examples to test the decision model on it.

## What happened

pgEdge tested the change in October on a sample of real readings from the previous month. Half had become alerts and half had been hidden. pgEdge measured how often each decision model agreed with the LLM’s earlier calls.

**Jev agreed 89% of the time.** That is close to the LLM’s own consistency. Run again, the LLM matched its own earlier calls 91% of the time.

**Jev never hid an alert the LLM had raised.** Every disagreement went the same way. Jev raised an alert where the LLM had hidden the reading. pgEdge calls that the safer way to be wrong.

**Jev was 15 times faster.** It took about a fifth of a second on each reading.

**Jev cost far less.** Each call cost nearly 50 times less than the LLM’s.

**Not every decision model did as well.** OpenAI’s decision model agreed less often. It also hid some alerts the LLM had raised. pgEdge recommends Jev on this evidence.

Mr. Page said the pairing “applies the right model to the right task.”

## How it works

**What the decision model is.** Jev reads text and scores a fixed set of answers. Here the answers are “yes, this is real” and “no.” TypeSafe says it trains Jev so that its percentages match how often it is right, but it has not published the training data.

**What it reads.** It sees the odd reading and how far it is from normal. It also sees similar past problems, notes people left on past alerts and alerts on related databases.

**What a verdict looks like.** One example in pgEdge’s documents reads “alert,” with Jev 87% sure the issue is real.

| Job | Before | Now |
| --- | --- | --- |
| The yes-or-no call | The LLM, in seconds | Jev, in a fifth of a second |
| The explanation | Written for every reading | Written only when a person asks |
| Closing alerts a person has seen | The LLM | Still the LLM |

## What it means for you

**Money.** pgEdge says some companies held back from AI monitoring because of the bills. The yes-or-no call now costs about 2% of the LLM’s price. Explanations cost extra, but only for alerts people open.

**Customers.** A missed alert can mean a database outage that customers feel. In the test, every disagreement Jev had was an extra alert, never a hidden one. The first press of “Why was this flagged?” now waits while the LLM writes.

**Revenue.** pgEdge reports no sales or usage figures for this feature. The case for revenue rests on cost. The test cannot show whether fewer problems were missed.

**Risk.** Each call comes with a percentage, so a team can set a bar and see how sure Jev is. The test also showed that decision models differ, so each needs its own test.

### Decision models in other industries

- **Contact centers.** Researchers at Dialpad, which sells business phone software, tested decision models on what callers want. On the answers Jev was very sure of, it was right 97% of the time, [their study reports](https://arxiv.org/abs/2611.22949). They suggest sending the unsure rest to a stronger model but did not test that.
- **Software that reads the web.** One developer’s app, Fuseforks, has Jev cut paragraphs that don’t matter before its LLMs read a web page. Where Jev cut, the text shrank by about 60%, [the developer’s logs show](https://qiita.com/outcast_zari/items/c01e882c582a8d6ea100). The developer can’t yet tell whether Jev ever cut a paragraph that mattered.
- **Hiring.** The recruiting company Jack & Jill had a decision model score every candidate. An LLM read only the shortlist, and screening costs fell 88%. [How Jack & Jill did it](https://decision-layer-indol.vercel.app/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Is 89% agreement good enough?** It is close to how often the LLM agreed with itself. Nobody knows how many of the LLM’s own calls were right. That is the unknown risk of an LLM alone.

**Won’t extra alerts annoy my team?** Some will. In the test, about one in five readings the LLM had hidden came back as alerts.

**Who should own this?** I would give the bar and the test against past calls to whoever runs the on-call rota. They live with the extra alerts and the missed ones.

**Is this live?** It is in a test version of an open-source tool. pgEdge names no customers using the decision model yet.

**Does my data leave the building?** With Jev, yes. pgEdge notes that Jev is a hosted service, so alert details go to TypeSafe.

### How to make the change in your own alerts

1. **Find the final yes-or-no call** in your alert process, and write it as one plain question.
2. **Pull a few hundred past calls,** with as many alerts as hidden ones.
3. **Run two or three decision models** on them, and compare each with your past calls.
4. **Check which way each one is wrong.** Prefer the one whose mistakes are extra alerts.
5. **Set the bar** by testing it on your past calls. pgEdge found that raising its bar lowered agreement.
6. **Keep the LLM for explanations,** written only when a person opens an alert.
7. **Go live on a few systems first,** and make every failure raise the alert.

## For your developer

Here is the pattern as code. The decision model makes the call. The LLM explains only on request, and every failure raises the alert. This is my sketch, not pgEdge’s code. I haven’t run it against pgEdge’s tool, so treat it as expected, not measured.

```python
QUESTION = "Is this a real issue that requires attention?"

def final_call(context, decide, llm_judge, hide_bar=0.5):
    try:
        p_real = decide(QUESTION, context)           # a percentage for "yes"
        return {"alert": (1 - p_real) < hide_bar, "by": "decision model", "p_real": p_real}
    except Exception:
        try:
            return {"alert": llm_judge(context), "by": "LLM"}   # backup only
        except Exception:
            return {"alert": True, "by": "fail-safe"}           # never hide on failure

def why(alert_id, details, llm_explain, store):
    if alert_id not in store:                        # pay for words once, when a person asks
        store[alert_id] = llm_explain(details)
    return store[alert_id]
```

pgEdge’s tool is open source, so your developer can read the real version. My worked example adds the test against your past calls, which tells you which way each decision model is wrong. [Subscribe for access](https://decision-layer-indol.vercel.app/subscribe/).

## The fine print

- **The sources.** pgEdge’s press release and a blog post by Sarah Conway of pgEdge, both Nov. 19, 2026, and pgEdge’s developer docs on anomaly detection. The docs describe the test as a “spike in October 2026.” The full data is in GitHub issue #626 of pgEdge’s repository, which I could not open.
- **What was measured.** This is pgEdge’s own test of its own tool, so treat it as an early sign. The sample was 150 readings. “No user-labelled ground truth existed, so every figure measures agreement with the reasoning model that made the stored decisions, not accuracy.” The 150 readings came from “the previous 30 days, sampled evenly between candidates stored as alerts and candidates stored as suppressed.”
- **The numbers.** Agreement with stored decisions: Jev 89%, OpenAI gpt-6-luna decisions 79%, Claude Haiku 4.5 run again 91%. Jev agreed with a fresh Haiku run on 88%. The press release and blog describe the 89% as agreement with Haiku, which blurs the two. Median time: about 200 ms for Jev, about 250 ms for OpenAI, about 3 s for Haiku.
- **The cost.** About $0.04 per 1,000 decisions for Jev against about $1.93 for Haiku, at October 2026 prices. That is about 48 times less, a cut of about 98%. pgEdge could not confirm OpenAI’s price. The LLM explanations come on top, for opened alerts only.
- **The bar.** The tool hides an alert when one minus the chance of a real issue is at least 0.5. pgEdge found that “raising the threshold above 0.5 reduced agreement.”
- **Other claims, from the docs.** “Any decision model failure sends the candidate to the reasoning model.” “The OpenAI decision model suppressed some candidates that were stored as alerts.” “On this evidence typesafe is the recommended decision provider.” The press release says organizations were “reluctant to adopt agentic Postgres database monitoring because of token costs.” TypeSafe calls its training method Reinforcement Learning for Calibrated Decisions.
- **The safe direction.** “The Jev model never suppressed a candidate stored as an alert; every disagreement was an alert where the stored decision was to suppress.” At 89% of 150, that is roughly 16 extra alerts. pgEdge’s LLM also returns a confidence with its verdict, but the tool’s bar applies only to a decision model.
- **Upgrading.** The docs say the collector must be upgraded before or with the alerter, or no anomaly alerts are raised. The beta needs Postgres 15 or later, and its database changes can’t be undone.
- **Changing models.** “jev-latest” changes over time. pgEdge warns that a bar tuned for one decision model does not carry over to another.
- **Extra alerts.** About 16 disagreements among roughly 75 readings the LLM had hidden is about one in five.
- **Which LLM.** The test used Claude Haiku 4.5, an older and smaller model. A newer LLM might agree more, cost more or answer faster.
- **The quote.** Dave Page’s full line in the press release: “Adding the ability to fall back to a full LLM for reasoning about specific alerts is a very powerful combination and applies the right model to the right task.”
- **Status.** Decision model support is in version 2.0 beta 1. The blog credits Dave Page as the tool’s creator. When an LLM call fails, the tool raises the alert, as before. pgEdge lists Bertelsmann, Thales and U.S. government agencies as customers of the company, not of this feature.
- **Dialpad.** An offline study by Dialpad researchers, not peer reviewed. Jev was right on 97.1% of intents at 0.9 or higher, against 78.7% overall. The intent examples were synthetic.
- **Fuseforks.** One developer’s own app logs from Aug. 9 to Nov. 27, 2026, posted by Outcasts on Qiita. A community demo, not a controlled test. In the 202 results Jev cut, text fell 61.4%. Jev cost about $0.42 across all 1,031 requests.
- **Jack & Jill** is from my earlier post, which cites its sources.
- **This site** is independent and not affiliated with pgEdge, TypeSafe, OpenAI, Anthropic, Dialpad, Outcasts, Fuseforks or any company named here.

We show you how in the full worked example, with tests, for subscribers.
