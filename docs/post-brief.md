# The post brief

The section-by-section outline, the ten-stage writing process and the final checklist are in [post-outline.md](post-outline.md) (Peter, 14:42Z: "We need an outline for what goes into a post. And a process that helps get these written correctly.").

This is everything Peter has asked for, in one place. Every daily post is checked against every line before it goes to him. If a rewrite fixes one point, re-check all the others: a fix must never drop earlier feedback. When Peter gives new direction, add it here the same day, with his words and the date.

## Writing process v2, agreed so far (Peter, 2026-10-31 17:25Z; full process being written with Peter in https://claude.ai/artifact/6ZdPMG7rZvL6UMzcaMQ2J4)

- **Peter's voice.** "My voice." Posts make Peter's point in his own phrasing (e.g. "Stop using LLMs alone", "However, when coupled with a decision model…", "No one automates and then manually reviews. They take an unknown risk."). The byline stays "The Decision Layer desk" until Peter gives the exact name to use.
- **Never a blank page.** Every post starts from Peter's own words plus a real, sourced case from use-case-catalog.md.
- **Writing model.** Peter: "Use articles from Michael Schmitt from the Wall Street Journal", then linked https://www.nytimes.com/by/michael-s-schmidt (Michael S. Schmidt, New York Times). Study how his pieces open, move and prove a point; never copy wording. First read from his headlines and summaries: from-to arc headlines with a named actor ("How a Top Law Firm Went From Standing Up to Trump to Bending the Knee"), "How X happened", one summary sentence of stakes plus what was checked, plain hard verbs, a short takeaways companion. From three full articles Peter sent (Oct 31, PDFs): headline is a verdict with a twist; summary line grants the other side, then turns; open on where things stand plus a fresh fact, then the unanswered question; the middle is the story of a turn in order (before, what went wrong, the switch, the result); a hard specific behind every claim; put the reader in the seat ("If you run accounts payable, would you..."); compare a parallel case; admit what we didn't know; one earned image (the tractor and hydraulics) and plain words elsewhere; Q&A follow-ups that push back; end on what it means and circle back to the opening; ration emphasis. Full table in the writing-process doc, Part 2.
- **No strong idea, no post.** "Yes": on a day the material holds no strong idea, send Peter one specific question instead of a post.

## Guardrails changed (Peter, 2026-10-31 14:46Z, chose "Change all five" after asking "What are the guardrails that are affecting your competency?")

These five changes override anything older in this brief, in post-outline.md, daily-post-process.md and HANDOFF.md:

1. **The use case picks the topic; news is optional.** Use a news hook only when a fresh, relevant story with a verified quote exists, from any credible outlet (household names, tech and business press, trade press, primary sources such as filings and official posts). No approved-outlet list and no 7-day rule as a gate (vary outlets where you can). With no fitting story, leave out "Why this matters today" rather than stretch.
2. **No fixed list of cases.** Jack & Jill, Datadog, Box, Sierra, Ramp and Speak are examples, not the universe. Draw use cases from [use-case-catalog.md](use-case-catalog.md) and add every new one research turns up.
3. **Full research on every post, standing.** Not only when Peter asks: before every post, search all the sources listed under "Research" below in parallel, open every source, and record a fact sheet. Grow the catalog each time.
4. **Label, don't drop.** Thin evidence goes in with its label (vendor claim, self-reported, community demo, unverified, independent result) instead of being cut. Only fabricated or contradicted claims are dropped. A post can lean on community demos if it says so plainly.
5. **Retired rules** (they conflicted with the newer direction): the Oct 29 "Why Jev is better" section (the site covers the whole category); the Oct 28 "busy agency owner" reader and "Why it matters to an agency" section (the reader is a leader in any industry); "favor insurance and agency operations"; "made-up example, synthetic data only" as the main example (real published cases lead; a synthetic walk-through can support); the Oct 12 series note at the top; and "title under about 12 words" (long headlines are wanted, see section 3).

## 0. The underlying tone of every post (Peter, 2026-10-31 14:18Z: "this needs to be the underlying tone for all of them")

Every post argues for a change of method: **stop using LLMs alone; couple an LLM with a decision model.** The headline opens on that shift, the dek and snapshot lead with it, and the body opens with "the method is the problem" before "the new method: couple the two". Numbers, tests and benchmarks are proof of the method, never the lead. Name the trap of LLMs alone (Peter, 14:20Z: "Instead of requiring a person to manually confirm, they are taking an unquantifiable risk for hallucinations."): with an LLM alone you either pay a person to confirm everything or skip the check and take an unquantifiable risk of hallucinations; coupling puts a number on that risk and lets you choose where to set it. Model headline: "Stop using LLMs alone. On its own, an LLM read invoices and 1 in 5 of the numbers it pulled were actually wrong, with no sign which: an unknown risk in every invoice it touched. However, when coupled with a decision model, it was 100% right, and the process could run on its own with confidence: faster, and at a fraction of the cost."

**Second central theme (Peter, 14:24Z: "No one automates and then manually reviews. They take an unknown risk." / "This is another central theme!"):** never write that companies using an LLM alone have a person check its output. They don't: they let it run and carry an unknown risk of hallucination, or they don't automate at all and pay people. Coupling turns the unknown risk into a known one, a probability on every output and a bar you set, so the process runs on its own with confidence. This supersedes the earlier "someone has to check every one" wording.

**Also every post (Peter, 14:26-14:30Z):**
- **Real use cases at real scale.** "There are so many real use cases!!!!!" Lead with published, named deployments from [use-case-catalog.md](use-case-catalog.md) (Jack & Jill, Datadog, Box, Sierra, Ramp and Speak are only the first few), verified at the source and labeled as self-reported. A small test can be supporting evidence, but don't feature its sample size ("Just don't share the detail of only 2 invoices"); say once in the fine print that small tests show the mechanism, not a rate.
- **CFO altitude.** "No one cares about 10 dollars or 2 dollars." Use percentages and annual dollar impact (88% lower cost, $500K a year), never per-unit costs.
- **Every industry.** "Make sure this is for all industries and not just insurance." Spread examples across industries; insurance is at most one of many.
- **Accuracy from hallucinations.** Peter liked "improving accuracy from hallucinations": show how coupling turns hallucination-prone output into right calls (1 in 5 wrong alone, every call right coupled).

**Research before saying "none found" (Peter, 14:37Z: "A simple search found that Jev has an ad function already built... Why did you not discover it or any of the other ways of using Jev for this."):** for every use case, search at least: vendor case studies and blogs (TypeSafe, OpenAI and rivals), news coverage, GitHub (search "jev" plus the use case), the community catalogs [awesome-jev-use-cases](https://github.com/walidboulanouar/awesome-jev-use-cases) (74 demos, 150+ repos) and [jev-usecases](https://github.com/vamsikrishna2421/jev-usecases), n8n and Make templates, and X or LinkedIn demos. Never tell Peter something doesn't exist after one search. Run full research on every post and every time Peter asks (Peter, 14:38Z: "When I specifically ask you for research, you must deploy full research."; standing for every post since 14:46Z), not a quick search: parallel searches across all of these, plus YouTube, madewithjev.com, jev-lab.com and rival vendors' docs. Label community demos as demos, not results, and keep them in rather than drop them.

## 1. Why the site exists

The site shows one idea: **an LLM coupled with a decision model produces a dramatically different output.** An LLM alone gives you a reading or a draft that someone still has to check. Coupled with a decision model, it gives you a decision you can act on, such as cleared, routed, approved or sent, with a probability behind it and a logged reason.

- Peter: "It's the entire philosophy!", "It's why we're building this site. To show this concept", "It's not two llms working together. It's that an llm coupled with a decision model creates a dramatically different output."
- Never write "two models working together", because it reads as two LLMs.
- Never call the decision model "a different kind of AI", and never say it fixes, checks or catches the LLM.
- The payoff, in Peter's words: higher quality and more robust actionable outcomes, less slop, more legitimate outcomes, faster accurate action, "for fractions of the cost and dramatic improvements in speed".
- **Analogy:** the tractor is the LLM and the hydraulics are the decision model. Together they give immense power: digging fast and precisely, and lifting enormous loads with little effort. Never use brakes, a checker, an editor or precision as the analogy.

### The point every post makes (Peter confirmed, 2026-10-31 14:07Z: "Yes. You understand the point.")

Most companies bolt an LLM onto a process and get output someone still has to check, so AI never moves the numbers that matter. Couple that same LLM with a decision model and the output changes from "something to check" into "something to act on". That one change is what makes AI pay at scale: decisions that are faster, cheaper and defensible, instead of more slop for people to clean up.

- **Apply it through use cases, and say why it matters.** Peter: "Now you just need to apply it through use cases. Make sure to understand why it's important."
- **The use case is a process redesign, not a task.** Peter, on the invoice post: "it's not about clearing invoices, it's about changing a process for full automation with confidence." Each post shows a process moving from AI-assisted (a person checks everything) to fully automated with confidence (automation by default, people only where there is real doubt), and what that is worth.

- **Then "we show you how."** Peter: "Then. The 'we show you how'". After the point and why it matters, the post walks the reader through how to make the change in their own process, step by step: the process before, the process after, what to build, how to set the confidence bar, and how to prove it on their own work before trusting it.

- **Explain the decision model itself.** Peter (14:09Z): "We also need an explanation of what it is, how it works, how the data is trained, and how to implement." Every post has a short section covering what a decision model is, how it works (scores the answers you allow, all at once, with a probability), how it's trained (only what vendors publish, e.g. TypeSafe's RLCD and calibration, and what they haven't disclosed), and how to implement it. Reuse and re-verify /mnt/project-files/videos/jev-training-explainer/script.md and videos/jev-explainer-v3/script.md.

## 2. Who reads it

- The reader is executives and leaders deciding how AI runs their processes. It is not insurance staff and not junior employees. Insurance is one example among many.
- Write for "an executive that demands detail". Every post answers these questions, with sourced numbers:
  - Why does this matter?
  - Why should it make a difference?
  - Why spend time understanding it?
  - How will it make me money?
  - How will it improve my customer relationships?
  - How will it generate more revenue?

## 3. Altitude

- Macro, not micro. Peter: "It's not about did it catch a simple line in an email. It's about how to improve x percent."
- Each post moves a business number by a percentage, backed by a sourced benchmark gap.
- A single caught error is evidence for the mechanism. It gets one short section, never the whole story.

## 4. The headline (the most important line)

Peter: "There is nothing interesting about this headline! Nothing!" and "where did my 20 percent go?!?"

A headline must:

- **Lead with the most surprising sourced number.** For the Oct 31 post, that is Peter's hook: the LLM alone was wrong about 20%, or 1 in 5, of the time.
- **Show the change in output** that coupling makes, or the money it moves.
- **Make an executive stop scrolling.** Use a tension, a cost or a reversal. It must not read as a description.
- **Stay true.** Scope the number to its source in the headline or the first line of the dek. Never mix a test's result with an industry benchmark as if one caused the other.
- **Keep Peter's words.** Never drop a number or phrase Peter suggested without asking him first.

The process:

1. Write at least 10 candidates.
2. Score each one 1 to 5 on four tests: stops an executive, true and scoped, shows the coupling, and has a number.
3. Run the top five through the publisher lens: would it earn a business front page?
4. Put the top three or four in the thread and the email with one line on each.
5. Use Peter's pick, or the recommended one if he hasn't answered by the time of sending.

Peter gives the point, Claude crafts the headline (Peter, 14:11Z: "That's the point I'm making. You need to craft the headline"). A good example, from Peter's point "one LLM is wrong 20 percent of the time; coupled with a decision model it is 100 percent right": "The LLM went from 80% right to 100% right. It didn't get smarter. It got a decision model." Number, turn, and the coupling as the reveal. Peter (14:12Z): "Much better. I don't want shorter, I want more intrigue and interest building headlines." Build a curiosity gap: hold back the reveal for the dek. Peter rejected "It got a partner that never writes a word" ("No!!!!!", 14:14Z): intrigue must never hide or rename the decision model; the coupling is the reveal and must be named. A bad example is a description with no number or tension, like "An LLM alone reads the invoice. Coupled with a decision model, it clears it for payment."

Peter (14:15Z): "Write a much longer headline." Headlines are long and carry the full arc: the problem with a number, the suspense, the decision model named as the reveal, and the payoff (full automation, speed, cost). Long is not wordy (Peter, 14:16Z: "you are being wordy for no reason. Who cares about bigger, smarter etc."): every phrase must carry the problem, the decision model or the payoff, nothing else. Example: "An LLM got 1 in 5 invoice values wrong, with no sign which: an unknown risk in every invoice it touched. However, when coupled with a decision model, it was 100% right, and the process could run on its own with confidence: faster, and at a fraction of the cost."

Lead with the method change (Peter, 14:17Z: "It's about changing the method of only using llms. It's about coupling the two!!!!"). The headline's first words name the shift from LLMs alone to coupling an LLM with a decision model; the numbers are the proof, not the lead. Example: "Stop using LLMs alone. On its own, an LLM read invoices and 1 in 5 of the numbers it pulled were actually wrong, with no sign which: an unknown risk in every invoice it touched. However, when coupled with a decision model, it was 100% right, and the process could run on its own with confidence: faster, and at a fraction of the cost."

## 5. The lens passes

Do real, separate passes, one lens at a time, and fix what each finds. Then tell Peter in one line per lens what it changed. Don't claim a pass you didn't do.

| Lens | What it asks |
| --- | --- |
| Skeptical CFO | Is every number sourced? What is the payback? What is left out? |
| CRO or head of revenue | Where is the revenue? |
| COO | How would we run it, and who owns it? |
| Head of customer experience | What do customers feel? |
| Skeptic | Is there any claim we can't back? |
| Line and copy editor | Is it clear? Does it have rhythm? Cut the fluff. |
| Publisher or editor-in-chief | Would the headline, angle and lede earn a top business publication's front page? |

## 6. Format

- **Look:** the paper look, with orange as the accent. The design thread owns the page template.
- **Top of the page, in this order:**
  1. Title
  2. Dek, which scopes the hook number
  3. Byline with the audience line
  4. Stat strip, with the hook number first
  5. Snapshot: Why it matters, Where the money is, Why AI alone hasn't delivered it, What to do, What we haven't done
  6. Why this matters today, the news hook with a verified quote (optional: only when a fitting story exists)
- **Length:** 10 to 12 minutes. The body order is in [daily-post-process.md](daily-post-process.md), step 3.
- **Side-by-side table:** every post has a table comparing an LLM alone with an LLM coupled with a decision model.
- **Category, not only Jev:** name rivals where they fit, sourced. Use the examples repo's pattern names (Draft and decide, Read and weigh, Propose and choose, Sort and solve, Plan and pace).

## 7. Standing rules

- Email the whole post through Resend, never Gmail.
- Nothing goes live until Peter says "publish".
- Verify every quote and citation.
- Never claim tests or reviews that didn't happen.
- The site is unofficial and not affiliated with any vendor.
- Peter never touches GitHub.

## 8. Final check before sending

Go through every line of sections 1 to 7 and confirm each one holds. If any line fails, fix it before sending.
