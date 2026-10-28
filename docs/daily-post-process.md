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
4. **Check for overlap with earlier posts.** Read every earlier post and draft (published and unpublished). Each post owns one "how Jev works" topic; see the series map below, pick a topic not yet covered, and add it to the map. Don't re-explain what an earlier post covers: link to it in one line instead. Run the quote check (no verbatim quote, longer than a few words, should appear in two posts) and fix any repeats. Open the new post with a one-line note saying where it sits in the series.
5. **Edit for a human voice** (several passes: cut filler, no em-dashes, no hype words, short sentences).
6. **Create the shared draft** as a Claude Doc titled "Decision Layer draft, <date>: <title>", with the full post text, the preview link and a short "what to check" list. Peter edits there or comments; Claude folds his edits back into the post on the next pass.
7. **Push** the post to a branch `claude/post-<date>` cut from the newest unpublished draft branch (so every draft and its cross-links show in one preview), or from `main` once the drafts are merged. Vercel builds a preview.
8. **Email Peter the whole post** at peter@converselyai.com, subject "Decision Layer draft for <date>: <title>". The email IS the blog post, formatted like the site (navy and orange header, headline, byline, "In short" box, every section, tables, code, In the news, sources), not a summary (Peter, 2026-10-28: "this current version is so cryptic its useless", "i need way more detail"). Render it with `node scripts/post-email.mjs <post.md> <preview share URL of the post> <doc URL> > email.html`, write a short plain-text fallback (headline, the three "In short" lines, both links), then send with `node scripts/send-draft-email.mjs "<subject>" body.txt email.html` (prefix `NODE_USE_ENV_PROXY=1 NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt` in cloud sessions). Needs `RESEND_API_KEY` and `RESEND_FROM` in the cloud environment, with network access set to Full. Get the share URL from the Vercel tool `get_access_to_vercel_url`. Screenshot the HTML at phone width before sending.
   - **Plain language and real detail.** The "In short" lines and the post must make sense to a busy agency owner on first read: no tech jargon like "regex", "extraction", "generative model", "threshold" or "API" without a plain explanation. Every post includes a "Why it matters to an agency" section and a step-by-step walk-through of the example (a table: step, who does it, what happens), plus what happens on a messier case.
9. **Reply in the project thread** with the same two links.
10. **Publish only when Peter says "publish"** (merge to `main`).

## Series map (one "how Jev works" topic per post)

| Post | Use case | How-it-works topic |
| --- | --- | --- |
| What Jev is, and what it isn't (Oct 11, live) | General | The basics: what you send, the three question types, cost, the weak spots |
| Labels, not essays (Oct 11, live) | Claims intake | How Jev was trained (RLCD), what a calibrated probability means, checking it on your own past claims |
| A function call for underwriters (Oct 12, live) | Underwriting submissions | How Jev reads your question: scoring every option at once, confidence, writing options it reads well |
| Jev, its clones and your service inbox (Oct 13, live) | Agency service inbox | What’s likely inside Jev, and how it compares with a chatbot, a classifier you train yourself and the clones; your test set is what you keep |
| Text written to fool it (Oct 14, live) | Claims glass fast track | Why words in the state can move the answer (no instruction channel), what the Decision Hijacking study found, and designing so a sentence is never enough |
| Jev can see now, a little (Oct 15 draft) | Home claim photo intake | Image input in Jev 1.14 (experimental, behind a header): where pictures go in a request, the Box question, EXIF and cost; a low-stakes first use |
| Does the answer wobble? (Oct 16 draft) | Auto claim subrogation referrals | Bias and sensitivity: what the Bocconi study found (picks hold, probabilities move with order and irrelevant numbers, small name gaps), and a variant test to measure the wobble on your own files |
| Twenty thousand claims by Tuesday (Oct 17 draft) | Storm-surge claims intake | Cost and speed at volume: pay per input token, measure with the usage field, per-org rate limits and 429 backoff, falling back to people when there's no answer |
| Six small questions instead of one big one (Oct 18 draft) | Agency commercial renewal list | Many questions in one call: answered in parallel and in isolation, cheap to add, decomposing a judgment, and a composite score in code |
| Jev is everywhere now (Oct 19 draft) | Agency certificate-of-insurance requests | What goes in the state: facts vs. judgments, named parts kept together, short inputs, sending only what the decision needs |
| Sixty pages of contract, three questions (Oct 20 draft) | Agency review of subcontract insurance requirements | Long context: default 32k/64k limits, the long-context header (262k), same price but less reliable, splitting vs. sending whole, and measuring both on known contracts |
| Jev 1.14 is about to become the default (Oct 21 draft) | Claims intake router upgrade | Versions and updates: versioned IDs vs. moving aliases, the scheduled jev-latest switch, pinning, logging the model field, replaying past claims before upgrading |
| “Necesito agregar un carro” (Oct 22 draft) | Agency service inbox, Spanish and mixed-language email | Language support: English strongest, other languages “handled but not equally well,” no published per-language numbers, measuring misses by language, routing unclear non-English email to bilingual staff at the same priority |
| The customer is waiting on the next screen (Oct 23 draft) | Online auto claim form, live next-screen choice | Speed when a person waits: independent latency tests (median, p95, p99, slowest), no published guarantee, a time budget, one try and a safe fallback, measuring your own tail |
| Before claim reports leave the building (Oct 24 draft) | Claims intake, personal and health details | Data handling: no training on inputs, open-ended standard retention, zero retention for enterprise, U.S. hosting, SOC 2 on request, unanswered questions; stripping identifiers before sending |
| Three months after launch (Oct 25 draft) | Agency commercial submission router, live | Monitoring after launch: confidence ranks well but isn’t calibrated mid-range (OpenRouter), TypeSafe’s “adjust as you observe,” no monitoring guidance; weekly sample by confidence band and leading indicators |
| OpenAI now sells a Jev rival (Oct 26 draft) | Home water claims, same-day mitigation dispatch | Testing before launch, start to finish: a written error budget, audited past claims, tuning the threshold on 30% and judging on the held-out 70% (Vals AI found half its models, Jev included, missed the budget there), the same harness for every vendor |
| The appetite guide is the rulebook (Oct 27 draft) | Small apartment building appetite pre-screen | Jev next to rules a person wrote: numbers and dates in code (jaggedness page), literal reading, one question per guide line, a threshold per rule from confidence-gated routing, every flag tied to its guide line, no automatic declines |
| Five dates in one claim email (Oct 28 draft) | Auto first notice of loss, date of loss | Extraction when Jev can’t write: find candidates with regex (or a generative model), build choice options per email with surrounding words, Jev picks, date math in code, order-swap check |

Topics not yet covered (candidates, proposed by Claude while waiting on Peter): choosing between Jev and a competitor on more than accuracy (contracts, support, lock-in); score questions and what the levels mean; Jev in a phone or chat flow with a person on the other end.

## How Peter's edits come back

- Edits or comments in the Claude Doc: on the next run (or when Peter says "pick up my edits"), Claude reads the doc, applies the changes to the post file, rebuilds the preview and says what changed.
- Replies to the email or messages in the thread work the same way.
