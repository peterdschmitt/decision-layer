# Daily post process

Peter's ask (2026-10-11): a blog post every day, emailed to him, with a way for him and Claude to edit it together. Posts are built around use cases that show the problem and the result, and the most important part is explaining how Jev works, including how it was trained. This file is the routine's checklist. The editorial rules in [HANDOFF.md](HANDOFF.md) still apply.

## Each day

1. **Pick the news.** One fresh story from an approved outlet (HANDOFF.md, "Headline outlets"), not one used as a lead in the last 7 days (see the daily post log in project memory). Verify the quote word for word at the source. If no approved outlet has a fresh story you can verify, ask Peter instead of stretching the list.
2. **Pick the use case.** Favor insurance claims, underwriting and agency operations. One concrete, made-up example (synthetic data only).
3. **Write the post in this shape:**
   - **Headline (the `respondingTo` lede):** the outlet and its news, the verified quote, what it means for "you". Honest feeling, no hype.
   - **The problem:** what a person on that desk does today, and what goes wrong or costs time.
   - **How Jev works:** the mechanism behind this use case, in plain words. Every claim about how Jev works or how it was trained must come from a source we can link (TypeSafe's docs, launch post or primer, or independent reporting), labeled as TypeSafe's claim where it is one. Say plainly what TypeSafe hasn't published (as of 2026-10-11: where the training data comes from, model size, the reward details).
   - **The use case:** the example input, the questions asked, and the code.
   - **The result:** what happens to the example, labeled "expected" until we have run it, and "tested" only with published data, code, model version and date.
   - **Where it breaks / what Jev should never do here,** and **In the news** (real, checked, linked headlines).
4. **Edit for a human voice** (several passes: cut filler, no em-dashes, no hype words, short sentences).
5. **Create the shared draft** as a Claude Doc titled "Decision Layer draft, <date>: <title>", with the full post text, the preview link and a short "what to check" list. Peter edits there or comments; Claude folds his edits back into the post on the next pass.
6. **Push** the post to a branch `claude/post-<date>` cut from `main`. Vercel builds a preview.
7. **Email Peter** at peter@converselyai.com with the subject "Decision Layer draft for <date>: <title>", the headline, a three-line summary, the shared-doc link and the preview link.
8. **Reply in the project thread** with the same two links.
9. **Publish only when Peter says "publish"** (merge to `main`).

## How Peter's edits come back

- Edits or comments in the Claude Doc: on the next run (or when Peter says "pick up my edits"), Claude reads the doc, applies the changes to the post file, rebuilds the preview and says what changed.
- Replies to the email or messages in the thread work the same way.
