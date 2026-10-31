# Post outline and writing process

Approved working copy: https://claude.ai/artifact/8sQF4UgHgRPaT5ZA7cLeek (Peter edits there; fold his edits back here). Every daily post is built to this outline and written through this process. The rules behind it are in [post-brief.md](post-brief.md).

## Part 1: the outline (17 sections, in order; one real use case per post)

| # | Section | Job | Must contain | Fails if |
| --- | --- | --- | --- | --- |
| 1 | Headline | Stop an executive | Method change first ("Stop using LLMs alone"), proof with a number, decision model named, payoff (automation with confidence, faster, lower cost); long is fine, filler is not | Describes instead of provokes; hides or renames the decision model; per-unit cost |
| 2 | Line under the headline | The whole argument in a paragraph | The trap (LLM alone = unknown risk, or no automation), the coupling, this case's result, what the reader gets | Repeats the headline; says people check LLM output |
| 3 | Byline | Who it's for | "For executives, operations and transformation leaders deciding how AI runs their processes" | Narrows to one industry or level |
| 4 | Big numbers | Proof at a glance | 3 to 4: percentages and annual dollars, with a source note | Per-unit costs; numbers not sourced in the body |
| 5 | Snapshot | A busy reader can stop here | Why it matters / Where the money is / Why AI alone hasn't delivered it / What to do / What we haven't done | Vague lines; repeats the line under the headline |
| 6 | Why this matters today (optional) | News hook, only when one fits | Fresh story from any credible outlet, verified quote, what it teaches leaders | Unverified quote; a stretched story that doesn't fit the use case (leave the box out instead) |
| 7 | The method is the problem | Name the trap | What an LLM alone costs in this use case: unknown risk, cost per step, speed | Reads as "AI is bad" not "the method is wrong" |
| 8 | The new method: couple the two | Show the change | Tractor and hydraulics; side-by-side table for this use case with a risk row | Generic table; decision model framed as checking or fixing the LLM |
| 9 | The case, in full | Prove it | Who and scale; process before; what the LLM does vs the decision model; how they tested; results; time to production; what it unlocked | No named company; unsourced numbers; sample size as the story |
| 10 | Why it matters | CFO, CRO, customers | Money (%, annual $, cost to switch), customers (speed, fairness, explainability), revenue (what the new cost makes possible), risk | Unsourced; revenue overstated |
| 11 | What a decision model is | Teach once | What it is, how it works, how it's trained (vendor sources only), what isn't disclosed | Goes past the sources |
| 12 | We show you how | Let the reader act | Before/after process table for this use case + six steps (find the calls, split the work, write the questions, test on your own history, set the bar, switch and own it) | Generic steps that fit any post unchanged |
| 13 | Other industries | Widen the lens | 4 to 6 other industries, real builds linked where they exist | All insurance; invented examples |
| 14 | Which decision model | Cover the category | Who used which model; what we haven't tested | Reads as an ad for one vendor |
| 15 | Questions leaders will ask | Handle objections | Proven? Replaces the LLM? Replaces people? What could go wrong? How fast? | Dodges |
| 16 | The fine print | Uncertainty, once | Who published each number; self-reported; small samples in one line; projections | Caveats sprinkled through the post |
| 17 | For your developer | A start for builders | Where to begin; link to a matching worked example | Long; invented code |

## Part 2: the process (ten stages, each with a gate and a written record)

1. **Pick the topic** from [post-queue.md](post-queue.md). Gate: a named, real deployment with numbers exists.
2. **Full research**: vendor blogs and case studies, news, GitHub, community catalogs, n8n/Make templates, X/LinkedIn/YouTube demos; open every source. Record: a fact sheet (number, link, exact wording, label: vendor claim / self-reported / community demo / independent). Gate: every number the post will use is on it; never "nothing exists" after one search. Runs on every post, not only when Peter asks. Add every new use case found to use-case-catalog.md, labelled; keep thin items in with their label rather than drop them.
3. **Write the point** in one sentence: LLM alone does X with an unknown risk; coupled with a decision model it does Y, worth Z. Gate: method change first, decision model named, money number.
4. **Headline**: 10+ candidates scored 1 to 5 on stops an executive / true and scoped / shows the coupling / has a number; publisher pass on the top five. Record: top three. Gate: method-first, decision model named, no filler, no per-unit cost.
5. **Draft to the outline** from the fact sheet only. Gate: every section passes its "Fails if".
6. **Seven lenses**, one separate pass each (skeptical CFO, head of revenue, COO, head of customer experience, skeptic, line editor, publisher). Record: one line per lens. Gate: all seven ran; never claim one that didn't.
7. **Fact check** every number and quote against the fact sheet. Gate: nothing unsourced.
8. **Build and check** page and email at phone and desktop width. Gate: no sideways scroll; tables, numbers and snapshot read on a phone.
9. **Deliver**: preview branch, share link for that exact build, Claude Doc, whole post by Resend, thread reply with headline, two runners-up, links and the lens log. Gate: the preview opens the current build.
10. **Fold in feedback**: every note from Peter into post-brief.md the same day. Gate: the next draft is checked against the updated brief.

## Final checklist (all ticked before sending)

- [ ] Headline opens on the method change, names the decision model, states the payoff
- [ ] Never says people check LLM output; LLM alone = unknown risk or no automation
- [ ] Decision model never framed as checking, fixing or catching the LLM
- [ ] Real, named deployment carries the post; every number sourced and labeled
- [ ] Percentages and annual dollars only
- [ ] Small samples appear once, in the fine print
- [ ] Money, customers, revenue and risk each answered with sources
- [ ] What a decision model is, how it works, how it's trained
- [ ] "We show you how" written for this use case
- [ ] At least four industries
- [ ] Full research done and recorded
- [ ] All seven lenses ran, logged
- [ ] News quote verified, or no news box because no story fits
- [ ] Page and email checked at phone width; preview opens the current build
- [ ] Every note from Peter is in the brief and this draft passes it
- [ ] Nothing goes live until Peter says "publish"
