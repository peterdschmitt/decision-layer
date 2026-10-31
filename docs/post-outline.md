# Writing process v2 (agreed with Peter, 2026-10-31)

This merges Peter's founder-writing prompt with our process. Working copy, written with Peter part by part: https://claude.ai/artifact/6ZdPMG7rZvL6UMzcaMQ2J4. The rules behind it are in [post-brief.md](post-brief.md); where an older doc conflicts, this file and the brief win. **The post's sections are being agreed with Peter now (Oct 31 evening); until that's done, use the required elements in Part 5.**

## 1. Start from real material

- Every post is in Peter's voice, written in the first person ("I"), with the byline Peter Schmitt.
- Every post starts from two things. One is Peter's own words: his messages, corrections and the voice file. The other is a real, sourced case from [use-case-catalog.md](use-case-catalog.md).
- The writing model is Michael S. Schmidt (NYT): copy how his pieces are built, never his wording. The patterns are in the doc, Part 2.
- If the material holds no strong idea, there's no post. Peter gets one specific question instead.

## 2. Peter's voice and context file

This is the doc, Part 2: Peter's beliefs, how he builds an argument, the phrases to keep, what he has called strong and weak, and the 12 Schmidt patterns. Read it before every post.

## 3. Mine and pick one idea

1. Write three idea cards, using fields a to f.
   a. The point, in Peter's terms.
   b. The evidence, with a label on each number.
   c. Why a leader cares.
   d. Which of Peter's beliefs it proves.
   e. The format.
   f. What's missing.
2. Score each card 1 to 5 on nine tests.
   a. Authentic.
   b. Specific.
   c. Backed by evidence.
   d. Matters to the reader.
   e. New.
   f. Matters to the business.
   g. Fits the format.
   h. Shows the coupling.
   i. Moves a business number by a percentage.
3. Write the winner only if both of these hold.
   a. Evidence and coupling each score 4 or more.
   b. The total is 32 or more out of 45.
4. If no card clears the bar, ask Peter instead.
5. The strongest card wins. [post-queue.md](post-queue.md) is the starting list, not a fixed order.
6. No two posts in a row use the same format. The formats are:
   a. Story of a turn.
   b. Verdict essay.
   c. Interview with Peter.
   d. Takeaways.

## 4. Research and fact sheet

1. Research every source type before drafting, on every post.
   a. Vendor and rival docs.
   b. News, including trade press.
   c. GitHub.
   d. Community catalogs.
   e. n8n and Make.
   f. X, LinkedIn and YouTube.
2. Open every source.
3. Build a fact sheet. Each entry has the number, the link, the exact wording and a label.
4. Keep thin evidence in, with its label.
5. Add every new use case to the catalog.
6. Gate: every number the post uses is on the fact sheet.

## 5. Draft

1. Write from the winning card and the fact sheet only.
2. Run 10 to 12 minutes.
3. Fit the order to the format.
4. Include these required elements, until the section grill replaces them:
   a. Headline: a verdict with a twist, method first, decision model named.
   b. The line under the headline: grant the other side, then turn ("However, when coupled with a decision model…").
   c. Byline.
   d. Three to four big numbers, as percentages and annual dollars.
   e. Five-line snapshot.
   f. The trap: an LLM alone is an unknown risk.
   g. The coupling: the tractor and hydraulics once, plus a side-by-side table.
   h. The case as a story of a turn.
   i. Money, customers, revenue and risk.
   j. What a decision model is and how it is trained.
   k. We show you how.
   l. Four or more industries.
   m. Which model.
   n. Hard questions leaders will ask.
   o. Fine print.
   p. For your developer.
5. Hooks:
   a. At least 10 headline candidates, scored.
   b. The top three go to Peter.
   c. Two alternative opening paragraphs.
6. Never write any of these (full list in the brief):
   a. Generic AI advice or invented stories.
   b. Buzzwords.
   c. Filler.
   d. "It's not X, it's Y" as a habit. Allowed once, only for Peter's own core contrast.
   e. Metaphors other than the tractor and hydraulics.
   f. Repetitive three-item lists.
   g. Formulaic Q&A transitions.
   h. Empty endings.
   i. Hiding the decision model.
   j. "People check the LLM's output".
   k. Per-unit costs.
   l. Small samples as the story.

## 6. Review

1. Run seven lenses, one separate pass each, and log one line per lens.
   a. Skeptical CFO.
   b. Head of revenue.
   c. COO.
   d. Head of customer experience.
   e. Skeptic.
   f. Line editor.
   g. Publisher.
2. Get a cold read from a separate reviewer (a subagent). It sees only the draft and Peter's voice file, never the research or the brief.
3. The reviewer answers Peter's ten questions, plus two more:
   a. Does it lead with the method change?
   b. Is the decision model named everywhere?
4. The reviewer returns:
   a. A score from 1 to 10.
   b. The likely reader reaction.
   c. Weak passages.
   d. Evidence concerns.
   e. Exact edits.
   f. A recommendation.
5. Gate on the score:
   a. 8 to 10: fact check and send.
   b. 6 or 7: apply the edits, then get a new cold read. At most two rounds.
   c. Under 6: no post. Ask Peter one specific question.
6. Fact check every number and quote against the fact sheet.

## 7. Revise, learn, deliver

1. Treat each of Peter's edits on its merits (Peter: "edits becoming rules depends on the edit").
   a. Record the edit in his words, with the date.
   b. Decide whether it's a rule for all posts or a one-off.
   c. Tell Peter which edits became rules, so he can overrule.
   d. If unsure, ask him once.
   e. Update the voice file and brief the same day. Never drop earlier feedback.
2. Lay out each draft's Claude Doc in this order:
   a. Idea cards and the reason for the pick.
   b. Source evidence.
   c. Open questions and approvals.
   d. Hooks.
   e. Cold read and lens log.
   f. The post, with the preview link.
3. Email the whole post by Resend. Put one line at the top with the cold-read score and the doc link.
4. Build and push a preview branch, then check the page and the email at phone width.
5. Nothing goes live until Peter says "publish".
