---
title: "An LLM writes the code, a decision model answers: Judgment Labs cut costs up to 80%"
dek: "Stop using LLMs alone. Judgment Labs had an AI agent search each whole conversation for answers. Now an LLM writes code to pull out the lines that matter, and a decision model answers."
kind: Comparison
readMinutes: 10
author: Peter Schmitt
audience: For executives running AI agents that talk to customers or staff
published: 2026-11-25
lastChecked: 2026-11-25
modelVersion: Jev 1.13 in Judgment Labs’ public test, as reported Nov. 23, 2026
stats:
  - value: "Up to 80%"
    label: "lower cost on customers’ current setups"
  - value: "About 99.8%"
    label: "lower model cost in a public test, similar agreement"
  - value: "47 times"
    label: "faster answers in that public test"
statsNote: "All three come from Judgment Labs’ own write-up of Nov. 23, 2026. The second is my arithmetic from its figures. The fine print has the details."
sources:
  - title: "Judgment Labs: Long-Horizon Trajectories, Small Questions: Evaluating Agents with System One Models (Nov. 23, 2026)"
    url: https://www.judgmentlabs.ai/blogs/system-one-evals
    grade: Company report
  - title: "Judgment Labs: Eval Optimizer: The Right Judge for Every Eval (Nov. 19, 2026)"
    url: https://www.judgmentlabs.ai/blogs/eval-optimizer
    grade: Company report
  - title: "Rust Foundation: Needles, Haystacks, and Numbers Between 0 and 1 (Nov. 23, 2026)"
    url: https://rustfoundation.org/media/needles-haystacks-and-numbers-between-0-and-1/
    grade: Company report
  - title: "Larridin: The Classifier Hiding in Your LLM Bill (Nov. 13, 2026)"
    url: https://larridin.com/blog/llm-calls-should-be-classifiers
    grade: Company report
---

One of Judgment Labs’ customers runs an AI assistant that answers people’s questions about the company’s own data. It wanted to know the topic of each conversation. Some of the conversations ran very long. The longest would have filled seven or eight novels.

Judgment Labs’ own AI agent studied the conversations first. It found that the topic always sat in the user’s first few messages. So the agent wrote a few lines of code to pull out the opening question. A decision model then picked the topic from that one message.

The decision model got as many answers right as Judgment Labs’ agent searching each whole conversation. Its answers cost about 93% less.

Judgment Labs says lower cost means every conversation can be studied, not just a sample. A frustrated customer in a sample gets seen. One outside it doesn’t.

A decision model is an AI that answers a fixed question by giving each possible answer a percentage. It writes no words.

An LLM answers too, but with no reliable number on how sure it is. That is an unknown risk in every answer. Stop using LLMs alone.

However, when coupled with a decision model, the LLM writes the code and the decision model answers most of the conversations. Each answer comes with a percentage, so the risk is known.

## Three ways to answer the same question

In the customer’s test, both the decision model and the agent got 75 of the 87 answers right. A person had verified the right answers. An LLM handed each whole conversation at once did slightly worse. And 13 of the conversations were too long for it to take in.

Judgment Labs then put three setups side by side on a public set of real conversations. Each answered the same six questions.

| Setup | What the AI reads | How it did |
| --- | --- | --- |
| An LLM reads it all | The whole conversation | About as often in agreement, but by far the slowest and costliest |
| An LLM reads the extract | Only the lines code pulled out | About the same, at under 1% of the full read’s cost |
| A decision model reads the extract | The same lines | About the same, the cheapest and fastest |

The three agreed with the reference answers about equally often. The difference was in time and money.

## Who Judgment Labs is

Judgment Labs sells tools that help companies study and improve their AI agents.

Two of its staff, Sailesh Polavarapu and Andrew Li, wrote up the method on Nov. 23. TypeSafe, which makes the Jev decision model they used, reviewed the post before it ran.

“As agents take on more important work, no one will be able to read everything they do,” they wrote.

## How it worked before

Teams ask many small questions about their AI agents’ conversations. Did the user sound frustrated? What did they ask for? Did they set a rule for how the work must be done?

The usual way to answer is with a large LLM, or a full AI agent that searches the conversation. Judgment Labs calls that slow and expensive for questions that are often simple.

The conversations keep growing. In the public test, the typical one ran to about 180 actions by the agent. That is often too much for a smaller, faster model to take in at once.

## What changed

Judgment Labs gave each part one job.

**An LLM agent does the setup.** For each question, Judgment Labs’ own agent studies the customer’s conversations. It checks that the answer always sits where code can find it, such as the user’s first three messages. If it does, the agent writes and tests code to pull out that part.

**Code pulls out the lines that matter.** It runs on every conversation. In the public test, it cut what the typical conversation gave the AI to read by more than 99%.

**The decision model answers.** It reads only those lines and gives each possible answer a percentage.

**The bar decides what happens next.** The bar is how sure the decision model must be before its answer stands. Jev scores that from nothing to certain, and Judgment Labs set the bar at the halfway mark. With two possible answers, the top one needs 75%.

Below the bar, or when the code fails, the LLM agent searches the whole conversation instead.

Before moving a question over, Judgment Labs advises comparing a sample of answers with a reviewer who reads whole conversations, ideally a person. Later, its agent reruns a sample on a schedule. If the answers drift apart, the agent rewrites the code.

## How they tested it

The public test used real conversations between open-source developers and AI coding agents. Judgment Labs took 256 long ones.

It asked six questions of each. Did the user set a rule for the work? How frustrated was the user? Does this message lay out a plan?

Another AI, Claude Opus, set the answers that counted as right in that test.

## What happened

**Similar agreement, at a sliver of the cost.** In the public test, Jev agreed with Claude Opus’s answers 82.5% of the time. The LLM reading everything came in slightly lower. Jev’s model cost was about 99.8% lower.

**Much faster.** Jev answered 47 times faster than the LLM reading everything. Its typical answer took about a seventh of a second.

**Most of the saving came from the code.** When the LLM read only the extract, it was right about as often as when it read everything. That cost under 1% as much. Jev then cut cost and time further, and it puts a percentage on every answer.

**In daily use, the saving is smaller.** Some conversations still go to the LLM agent, and those cost as much as before. Even so, Judgment Labs says cost has fallen by up to 80% on customers’ current setups.

Not everything worked. On frustration, the LLM reading everything did slightly better than Jev. Judgment Labs also wrote other questions and dropped them, mostly because the code missed lines that mattered.

## How it works

**What the decision model is.** Jev returns a percentage for each allowed answer. It also returns one overall score for how sure it is. Code uses that score to decide whether an answer stands.

**How it is trained.** TypeSafe trains Jev to give decisions and percentages, not text. Judgment Labs says the percentages should match how often Jev is right. I have not seen TypeSafe’s training data.

**How Judgment Labs set it up.** The code the agent writes runs in sealed boxes on Cloudflare, with no internet access. Each run can read only the one conversation it is given.

## What it means for you

**Money.** At a million questions a month, the public test’s prices put the LLM reading everything at about $261,000 a year. Jev reading the extract came to under $500. That is model cost only, and it is my arithmetic.

**Customers.** When every conversation gets an answer, you can look for frustrated users in all of them. Frustration was Jev’s weakest question, though. Start with the easy ones.

**Revenue.** The test didn’t measure sales. Judgment Labs says that once every conversation has answers, you can search your whole history. I would use that to find what users keep asking for that the agent can’t yet do.

**Risk.** An LLM’s answer carries no reliable number on how sure it is. Coupled with a decision model, most answers come with a percentage you can act on. Only the unsure ones go back to the LLM agent.

### Decision models in other industries

These two use a decision model on every item, with no LLM writing code.

- **Open-source software.** The Rust Foundation is trying out a decision model that scores every new Rust software package for signs of malware. People look only at the packages it scores highest. At the setting the foundation prefers, 4 of the 15 packages it flagged were malicious, [the foundation reports](https://rustfoundation.org/media/needles-haystacks-and-numbers-between-0-and-1/).
- **Workplace AI.** Larridin scores how well staff use AI tools, and today runs that through LLMs. Its chief technology officer, Ameya Kanitkar, tested Jev and reported close to 99% accuracy on an early test set. He put the cost at about a hundredth of his LLM approach, [in Larridin’s post](https://larridin.com/blog/llm-calls-should-be-classifiers).

And one that couples the two:

- **Hiring.** Jack & Jill had a decision model score every candidate. An LLM read only the shortlist, and screening costs fell 88%. [How Jack & Jill did it](https://decision-layer-indol.vercel.app/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Is this a sales pitch?** Partly. Judgment Labs sells this service, and TypeSafe reviewed the post. The public test uses open data.

**Aren’t the unsure ones back on an LLM alone?** Yes. They carry the old unknown risk. Judgment Labs doesn’t say how many conversations go back to the agent.

**What can go wrong?** The decision model sees only the lines the code pulled out. If the answer sits somewhere else, it can be sure and wrong. That is why the setup is tested on a sample first and rechecked later.

### How to make the change

1. **List the small questions you ask about your AI conversations.** What did the user want? Were they frustrated?
2. **Give each question an owner.** That person decides the bar and when the question changes.
3. **Find where each answer lives.** Keep only the questions whose answer sits in a predictable place.
4. **Have an LLM write the code that pulls out those lines,** and test it on real conversations.
5. **Ask a decision model each question,** with only those lines.
6. **Set a bar.** Below it, or when the code fails, send the conversation to an LLM agent that searches it all.
7. **Compare with answers a person set on a sample** before you switch over. Then have the LLM agent rerun a sample on a schedule.
8. **Track cost, speed and how often answers are right,** before and after.

## For your developer

Here is the hand-off for one question as code. Code the LLM wrote pulls out the lines. The decision model answers, and anything unsure goes to an LLM agent. This is my sketch, not Judgment Labs’ code. I haven’t run it, so treat it as expected, not measured.

```python
def answer(convo, question, extract, decide, agent, bar=0.5):
    try:
        text = extract(convo)                   # code the LLM wrote and tested
    except Exception:
        return agent(convo, question), "agent"  # code failed: the agent searches it all
    if len(text) > question.max_chars:
        return agent(convo, question), "agent"  # too much to read: same hand-off
    probs = decide(question, text)              # one call: a percentage per allowed answer
    best, p = max(probs.items(), key=lambda kv: kv[1])
    n = len(probs)
    sure = (p - 1 / n) / (1 - 1 / n)            # 0 = spread evenly, 1 = all on one answer
    if sure < bar:
        return agent(convo, question), "agent"  # below the bar: the agent searches it all
    return best, "decision model"
```

Judgment Labs has not published its code. My worked example adds the sample test that decides whether a question can move over. It also has the scheduled recheck and a cost scorecard. [Subscribe for access](https://decision-layer-indol.vercel.app/subscribe/).

## The fine print

- **The write-up.** Sailesh Polavarapu and Andrew Li, “Long-Horizon Trajectories, Small Questions: Evaluating Agents with System One Models,” Judgment Labs blog, Nov. 23, 2026. It ends: “Thanks to the TypeSafe team for reviewing this post.” TypeSafe and Judgment Labs promoted it on X on Nov. 24. A companion post of Nov. 19 describes Judgment Labs’ “Eval Optimizer,” which picks code, a decision model, an LLM or an agent for each question.
- **Judgment Labs.** Its careers page lists on-site jobs in San Francisco. It does not name the customers in either post.
- **The customer test.** A topic question on 87 conversations from “a customer’s analytics agent.” The longest was “about 900,000 tokens.” At about three-quarters of a word per token and 90,000 words per novel, that is about seven and a half novels. That arithmetic is mine. Agreement with “human-verified labels”: 75 of 87 for the agent searching the full conversation, 62 of 74 for the LLM given the full conversation, 73 of 87 for the LLM reading the opening question, and 75 of 87 for Jev reading the opening question. Cost per 1,000 answers: $0.74, $33.70, $0.19 and $0.05. Mean time: 15.0 s, 5.7 s, 1.85 s and 123 ms. The LLM given the full conversation could take in only 74 of the 87. Judgment Labs: “This example had no fallbacks, so it shows the best case.” The 93% saving against the agent is my arithmetic. The post does not say why the agent cost less than the LLM given every word.
- **The public test.** SWE-chat, a public set of real coding-agent sessions from open-source developers. Judgment Labs sampled 256 sessions with at least 100 tool calls and three user messages, no more than three per repository. The median session had about 180 tool calls and 117,000 tokens. The code cut the median input to under 500 tokens. Six questions, 1,536 answers per setup, one question per call. Claude Opus 5.5 set the right answers. Before keeping each question, Judgment Labs’ agent checked a sample to confirm the extract held what the question needed.
- **Public test results.** Agreement: GPT-6 Luna reading the full session at high reasoning effort 79.8%, GPT-6 Luna reading the extract 81.4%, Jev 1.13 reading the extract 82.5%. Cost per 1,000 answers: $21.76, $0.11 and $0.04, model use only. Median time: 6.9 s, 1.7 s and 0.15 s. “About 600x lower model cost and 47x lower latency” are Judgment Labs’ words. At the prices shown, the cost ratio is about 544 times. At the median times shown, the speed ratio is about 46 times. The 99.8% is my arithmetic from $0.04 and $21.76.
- **By question.** Jev scored highest on explicit rules, hedging and plans. GPT-6 Luna on the extract scored highest on what a command was for, 93% to Jev’s 90%. GPT-6 Luna on the full session scored highest on frustration, 75% to Jev’s 73%.
- **Daily use.** “Those fallbacks cost as much as a normal agent judge run, but even so, preprocessing has cut eval cost by up to 80% for our customers’ current setups.” The post gives no base for the 80%, and no share of conversations that fall back. On the public test it adds: “most of the savings come from preprocessing itself, and Jev cuts cost and latency further still.”
- **The Nov. 19 customer.** One customer’s conversations average about 1 MB. An LLM reading each in full would cost an estimated $0.045 to $0.075 per answer. With a decision model and extraction code, it pays about $0.0016, “roughly 30–50× cheaper.” Judgment Labs’ figures.
- **The bar.** In the diagram, an answer stands at “Confidence ≥ 0.5.” Judgment Labs defines confidence as how concentrated the percentages are: 1 when all sit on one answer, 0 when they are spread evenly. With two possible answers, 0.5 means the top answer needs 75%. The formula in my snippet is the one TypeSafe publishes, as quoted by another tester. I assume Judgment Labs uses the same score.
- **The annual figures.** A million questions a month is my assumption. At $21.76 and $0.04 per 1,000 answers, 12 million answers cost about $261,000 and $480 a year. Model cost only, with no fallbacks.
- **Training.** Judgment Labs: “TypeSafe trains Jev with Reinforcement Learning for Calibrated Decisions (RLCD).” And: “Across many predictions, answers Jev assigns an 80% probability should be correct about 80% of the time.” Jev reads up to 64,000 tokens per request by default, or 262,000 in a slower long-context mode.
- **The sandboxes.** Cloudflare Isolates, one per question and reused across runs, with no network access. Each run reads only the conversation named in the request.
- **The limits, in Judgment Labs’ words.** “It only sees what it’s given, so it can return a confident answer from an incomplete picture.” And: “We only recommend using this optimization if you’re confident that everything the rubric needs lives within your addressable evidence window.”
- **Claims I did not check.** The post says Jev “is now used by 30% of the Fortune 500.” I have not verified that.
- **The Rust Foundation.** From a post by Adam Harvey of its security initiative, Nov. 23, 2026, describing “exploratory work.” It had scanned 135,548 package files. The score is how likely a package is to be malicious. At a score of 0.7 or more, the setting it prefers, 15 were flagged and 4 were malicious. At 0.9 or more, 4 were flagged and all 4 were malicious. It does not name the decision model. It does not yet know how many malicious packages it missed.
- **Larridin.** From its blog, Nov. 13, 2026: “On one of our early eval sets, it reached close to 99% accuracy at roughly 1/100th the cost of our current LLM-based approach.” He tested for 24 hours and gave no set size. Larridin has not said it switched.
- **Jack & Jill** is from my earlier post, which cites its sources.
- **How solid this is.** These are a vendor’s own tests, reviewed by the maker of the decision model, with one unnamed customer. No one else has repeated them. Treat them as an early sign.
- **This site** is independent and not affiliated with Judgment Labs, TypeSafe, OpenAI, Anthropic, Cloudflare, the Rust Foundation, Larridin or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
