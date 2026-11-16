---
title: "How an engineer cut an AI job’s cost 70% with a decision model and cheaper LLM"
dek: "Stop using LLMs alone. An engineer let a decision model choose whose calendar each school event goes on. A cheaper LLM still writes the names. The job costs about 70% less."
kind: Worked example
readMinutes: 10
author: Peter Schmitt
audience: For executives who run AI on a pile of incoming paperwork
published: 2026-11-16
lastChecked: 2026-11-16
modelVersion: Gemini Decision 1 and Gemini Flash Lite, per the author (Nov. 15, 2026)
stats:
  - value: "About 70%"
    label: "lower cost for the job, decision model plus cheaper LLM"
  - value: "Three"
    label: "hidden jobs the old LLM did besides choosing"
  - value: "50%"
    label: "chance of “drop” needed before an event is left out"
statsNote: "All three come from one engineer’s own write-up of one household’s system, published Nov. 15, 2026. The fine print says what it can and can’t show."
sources:
  - title: "Zenn: Hiroyama Yu, Gemini Decision 1 cut our school-calendar judging cost 70% (Nov. 15, 2026, in Japanese)"
    url: https://zenn.dev/hiroyamayu/articles/gemini-decision-calendar
    grade: Company report
  - title: "Hiroyama Yu: home-paper-ai-starter, the older all-LLM version (GitHub, MIT license)"
    url: https://github.com/hiroyamayu/home-paper-ai-starter
    grade: Company report
  - title: "Zenn: Japan Trading Card Center, x-pulse customer-support alerts (Oct. 22, 2026, in Japanese)"
    url: https://zenn.dev/jtcc/articles/x-pulse-jev-cs
    grade: Company report
  - title: "Thorsten Meyer: 24 ways to use Jev, a decision model playbook (Sept. 29, 2026)"
    url: https://thorstenmeyerai.com/reality-check/24-ways-to-use-jev-a-decision-model-playbook/
    grade: Company report
---

A parent in Hokkaido scans a school letter. It lists the pool days, the deadlines and the farewell party for the sixth graders.

The family’s home server reads it. An AI decides which child each event belongs to and puts it on that child’s Google Calendar. The night before, a phone buzzes.

The parent is Hiroyama Yu, an engineer with three children. In a post on Zenn, a Japanese site for engineers, they wrote up how they cut the cost of that AI step by about 70%. The cut came from a turn I see in many companies: they stopped asking one LLM to do everything.

## The trap

An LLM, the kind of AI behind ChatGPT, is good at reading a messy letter and writing a clean note. It is a costly way to make a simple choice, over and over.

It also gives no clear measure of how sure it is. Hiroyama Yu says an LLM asked for a fixed answer often returns no percentage for each option. Without one, you can’t set a rule like “when in doubt, keep it.”

A decision model is an AI that answers a fixed question with a percentage. It writes no words.

However, when coupled with a decision model, the LLM only does the writing. The decision model makes the choice, and every choice comes with a number.

| | An LLM alone | A decision model plus a cheaper LLM |
| --- | --- | --- |
| Who chooses the calendar | The LLM | The decision model, with a percentage |
| Who writes the names | The LLM | The cheaper LLM |
| Cost of the job | Today’s cost | About 70% less |

## The story

**Who.** Hiroyama Yu has been an engineer for more than 15 years and is raising three children in Hokkaido, in northern Japan. They built a home system that files the family’s paperwork. They say the only thing a person does is scan the paper.

**Before.** Letters arrive from the elementary school and the kindergarten. The same event shows up in the yearly schedule, the school newsletter and the grade letter, often under a slightly different name.

An LLM pulls the events out of each letter. That leaves about 200 possible events from today onward. Until now, a second LLM, Gemini 3.6 Flash, judged all of them in one go.

It chose which events mattered and whose calendar each went on. It was the most expensive routine job in the household’s AI bill. Google’s price for that model doubles in January.

**The first try.** Gemini Decision 1, Google’s decision model, came out on Nov. 11. Hiroyama Yu asked it one question per event: which calendar does this go on? The options were seven family calendars, plus “don’t add.”

Alone, the decision model cost about a ninth as much. It kept every event already on the family’s calendars. It also caught one the old LLM had been missing all along: the farewell party for the sixth graders.

**The turn.** Then Hiroyama Yu looked closer at what the old LLM had been doing. It had three other jobs besides choosing, and nobody had written them down.

It merged repeats. Four entries for a recital and one for a nursery recital became one recital.

It wrote names that told the family what to do. A graduation ceremony, with a note that younger grades get the day off, became “Day off: graduation.” Code alone would have written “Graduation,” which looks like an event the daughter should attend.

It wrote notes. A year-end cleaning day with a short schedule became “4 periods: year-end cleaning.” Without that, nobody would know the children come home early.

**The choice.** Hiroyama Yu weighed three designs. The decision model could watch the old LLM, which saved nothing. It could replace the LLM, which was cheapest, but the names and notes got worse.

Or the decision model could choose and a cheaper LLM, Gemini Flash Lite, could write. They picked that one. In their words: “the AI that chooses and the AI that writes,” kept apart.

**The result.** Each run now costs about 70% less than the old LLM alone. In the dry run before going live, the new setup differed from the existing calendar in only five places. The farewell party was one of them.

## The twist

The decision model was not always right when it was sure. In the first test, it put a substitute holiday on the daughter’s calendar. It was 97% sure.

Hiroyama Yu traced the cause. The decision model doesn’t reason, so it doesn’t know which Monday is a public holiday. Google’s own guide says to do dates in code.

So the calendar math moved to code. The holiday was dropped on the next run.

## My verdict

This is the clearest case I have seen of a team learning what its LLM was really doing before replacing it. The obvious move, swapping the LLM out, was the cheapest. It would have made the calendar worse.

Hiroyama Yu split the work instead. The decision model chooses, with a number. The cheaper LLM writes. Code handles dates.

Stop using LLMs alone. Couple the LLM with a decision model, and give each one the job it does best.

The proof is thin: one household, by its builder’s own account, in its first days. But the method is the one I would use in any inbox.

## How it works

**The question.** Each event becomes one question with eight answers: one of seven calendars, or “don’t add.” Code adds the weekday and whether the day is a holiday.

**One request.** All the questions go to the decision model at once. The family’s rules go in once and are shared by every question. Hiroyama Yu says Google bills that shared part once, however many questions there are.

**The rule that acts on the number.** An event is left out only when the decision model gives “don’t add” a 50% chance or more. Hiroyama Yu explains why: missing one pool day is worse than one extra event.

**The writing.** The cheaper LLM gets only the events the decision model kept. It merges repeats and writes names and notes. It also sees last run’s names, so the same event keeps the same name.

**The safety nets.** If the cheaper LLM drops an event the decision model kept, code puts it back. It dropped the farewell party in both trials. If either model fails, the old LLM runs the whole job, as before.

**Where a person decides.** In the dry run, three events split close to even. Hiroyama Yu decided each one and wrote the answer into the rules. They concluded that where the percentages split is where a person should decide.

**How it is trained.** Google hasn’t published how Gemini Decision 1 was trained. Hiroyama Yu relies on Google’s description: it answers fixed questions with a percentage and writes nothing. There is no “can’t decide” answer, so every answer lands on one of the choices.

## What it means for you

**Money.** This saving is small in yen, but the shape is not. The job that piles up is choosing, item by item. Moving choosing to a decision model cut this job by about 70%. To size it for you, take your yearly bill for the LLM step that sorts or routes.

**Revenue.** There is no revenue here. In a business, the same split frees an LLM budget for the writing customers actually see.

**Customers.** The family now gets one clear entry per event, with a name that says what to do. Your customers feel the same thing when one request isn’t logged three times under three names.

**Risk.** With an LLM alone, nobody knows how sure it was. The decision model puts a number on every choice, so you can set the risk yourself. Hiroyama Yu set it to keep events when in doubt.

### The same pattern in other industries

- **Customer support.** Japan Trading Card Center has a decision model judge every post about it on X. Negative ones go to the support team, which the company says costs about $5 a month. [The company’s write-up, in Japanese](https://zenn.dev/jtcc/articles/x-pulse-jev-cs).
- **Publishing.** Thorsten Meyer runs a fleet of news sites. An LLM sorts stories by topic, and a decision model takes over when the LLM fails. He says one night’s check of every article cost about $2. [His write-up](https://thorstenmeyerai.com/reality-check/24-ways-to-use-jev-a-decision-model-playbook/).
- **Hiring.** Jack & Jill had a decision model score every candidate. An LLM read only the shortlist. Jack & Jill’s screening costs fell 88%. [How Jack & Jill did it](/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Is one household proof?** No. It shows the method, not the size of the gain at your scale.

**Is it live?** The whole system has run for about two months. The decision-model version had run for a few days at most when it was written up.

**Was it more accurate?** Unknown. The test compared it with the old LLM’s calendar, not with a list checked by a person.

**Why not drop the LLM entirely?** That was the cheapest option. The names and notes got worse, so the family would have read a worse calendar.

**What would I want to see next?** A month of live runs, with every miss and every extra event counted.

### How to make the change

1. **Pick one step where an LLM sorts or routes,** such as an inbox or an intake queue. Give it one owner.
2. **Write down every job that step does today.** Look for merging, naming and notes, not only the choice.
3. **Turn the choice into one question,** with one answer per owner plus “drop.”
4. **Set the rule from the cost of each mistake.** Decide which costs more: a missed item or an extra one.
5. **Move dates, numbers and holidays into code.**
6. **Keep a cheaper LLM for the writing,** and put back anything it drops.
7. **Run it side by side with today’s output,** read every difference, and keep the old path ready in case the new one fails.

## For your developer

Here is the pattern as code. The decision model gives each item a chance for every owner and for “drop.” A rule acts on that number. The cheaper LLM writes the result. This is my sketch, not Hiroyama Yu’s code. I haven’t run it on their data, so treat it as expected, not measured.

```python
def route(items, decide, write, fallback, drop_bar=0.5):
    try:
        scores = decide(items)  # decision model: chance per owner, plus "drop"
        kept = []
        for item in items:
            probs = scores[item["id"]]
            if probs["drop"] >= drop_bar:  # leave out only when fairly sure
                continue
            owner = max((o for o in probs if o != "drop"), key=probs.get)
            kept.append({**item, "owner": owner})
        merged = write(kept)  # cheaper LLM: merge repeats, write names
    except Exception:
        return fallback(items), "old_llm"  # either step fails: the old path
    covered = {i for m in merged for i in m["ids"]}
    lost = [{"ids": [k["id"]], "owner": k["owner"], "name": k["title"]} for k in kept if k["id"] not in covered]
    return merged + lost, "decision_model"  # nothing the LLM drops is lost
```

My worked example adds the calendar math in code, the newest-letter rule and a dry-run diff against today’s output. It comes with tests. [Subscribe for access](/subscribe/).

Public material from others:

- **[Hiroyama Yu’s starter repo](https://github.com/hiroyamayu/home-paper-ai-starter)** (community demo): the older version, where one LLM does all the judging. The decision-model version is not published.

## The fine print

- **Who published the numbers.** Every number about this system comes from Hiroyama Yu’s own article on Zenn, published Nov. 15, 2026, in Japanese. It covers one household. I read it in full. I have measured none of it. The translations are mine.
- **The cost.** The old LLM cost about ¥10 a run, or about ¥110 over 30 days. The new setup costs about ¥3 a run, or about ¥40 a month. That is the “70%” in the article’s title. The decision model alone cost about ¥1.1 a run, about a ninth of the old cost. Hiroyama Yu converts at ¥152 to the dollar.
- **The test.** One set of 203 possible events, compared with the 34 events the old LLM had already put on the calendars. The decision model alone put all 34 on a calendar, and 31 on the same one. It also added 13 awareness days, such as traffic-safety days, that don’t change what a child does. One rule line fixed that. In the second trial, the decision model kept 77 and the cheaper LLM merged them into 36.
- **The dry run.** About 35 events, five differences from the current calendar. Two were added, one was removed and one moved calendars. The article lists four of the five.
- **The three split cases.** All scored 0.5 to 0.6. Hiroyama Yu decided them once and wrote rules. In a reply to a reader, they say uncertain items go to the side a person looks at. The article describes no standing review step.
- **Other rules.** When the newest letter’s copy of an event is dropped at 0.8 or more, older copies are dropped too.
- **What wasn’t disclosed.** The production code, the full rules, the cheaper LLM’s prompt, speed, how many letters fed the 203 events, and any results after go-live.
- **The models.** Gemini Decision 1 chooses. Gemini Flash Lite merges and names. Gemini 3.6 Flash is the old path and the fallback. Hiroyama Yu says they picked Google over Microsoft-Decision-1 and OpenAI’s Decisions API to keep school data with a vendor they already pay.
- **Who the author is.** Hiroyama Yu writes on Zenn, a Japanese site for engineers. The article ends with a link to their own paid book. Their starter repo shows only the older design.
- **The other industries.** Japan Trading Card Center and Thorsten Meyer report their own numbers. Meyer’s $2 figure is his own measurement from September. Jack & Jill is from my earlier post, which cites its sources.
- **This site** is independent and not affiliated with Google, Hiroyama Yu or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
