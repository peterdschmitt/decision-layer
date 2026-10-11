# Decision Layer: handoff notes

Everything a new Claude session (or person) needs to pick this project up without the original project's chat, shared files or memory. Last updated 2026-10-11.

## What this is
- An independent field guide to **Jev**, TypeSafe AI's non-generative "System One" decision model (launched Sept 15, 2026; https://typesafe.ai/). Use cases, how-tos, tested examples, reality checks.
- Owner and sign-off editor: Peter Schmitt. Publisher: Conversely (Peter's company), which provides performance services to insurance agencies. Contact: info@converselyai.com.
- Separate site and brand from Peter's DPC site ("Straight Talk on Healthcare Options", repo peterdschmitt/blod-podcast). Don't change that repo or site from this work.
- The approved strategy is in [strategy.md](strategy.md) (approved by Peter 2026-10-10). Its section 8 open questions are answered below.

## Decisions Peter made (2026-10-10)
- **Plan approved** (strategy steps 1 to 5).
- **Site name: "Decision Layer".** The site says it is unofficial and not affiliated with TypeSafe AI; no TypeSafe logo; "Jev" is content, not the brand.
- **Headline outlets:** household-name outlets (WSJ, NYT, Washington Post, AP, Reuters, CNBC, CNN, NBC, CBS, ABC, NPR, Bloomberg, USA Today, Forbes, Fox Business) **plus tech outlets** (TechCrunch, The Verge, Wired, Business Insider, Axios and similar). Not trade newsletters or vendor blogs. Use a different outlet on each post and don't repeat one within a week.
- **Jev API key:** Peter has one. It must come in as the environment secret `TYPESAFE_API_KEY` (claude.ai Project settings, cloud environment, or Vercel env vars). Never pasted in chat, never committed, never printed in logs.
- **Repo:** Peter created peterdschmitt/decision-layer. He said it's private, but GitHub showed it public on 2026-10-10; he can change that in the repo's Settings, General, Danger Zone.

## Sign-off rule
New content (pages, posts, tools) goes to Peter as a pull request plus a Vercel preview. It goes live only when Peter says "publish" (or a clear equivalent), or merges it himself. Merging to `main` is publishing. Peter doesn't need to touch GitHub.

## Editorial standards
- Every claim is sourced and every link is checked (it resolves and the source says what we claim). Quotes are verbatim and checked.
- Sources are graded in `src/data/sources.ts`: Regulator, Official docs, Vendor claim, Vendor case study, Independent reporting, Our test.
- TypeSafe's numbers (speed, cost, accuracy, "zero hallucinations") are labeled as TypeSafe's claims unless we've reproduced them.
- Nothing says "tested" until a published test exists with its data, code, model version and date. Synthetic data only.
- Every use case says where Jev does badly and when an LLM or a plain rule is better.
- Insurance recipes are operations tooling only: Jev sorts, a person decides anything affecting a person's coverage or price. No protected traits as inputs.
- Each post has a byline, a "last tested" date where relevant, and an "In the news" section with real, verified, linked headlines.
- Headline style (carried from the DPC site): the title leads conversationally with a named outlet and its news, then a verbatim verified quote, then what it likely means for the reader, with a little honest emotion and no hype. Treat Peter's example wording as style, not a template.
- Daily posts open with at least two real, verified, linked headlines from different major outlets. If two can't be verified, ask Peter rather than post.
- Dense, responsive layouts with site-wide search on every page.

## Still open (placeholders in the site, in [BRACKETS])
1. **Byline.** `src/site.ts` uses "The Decision Layer desk". Reuse Sophia Cranbrook (the DPC site's byline) or a new name?
2. **Conversely and TypeSafe.** Confirm Conversely has no commercial tie to TypeSafe AI or its competitors (`src/site.ts`, `src/pages/for-agencies.astro`, `src/pages/methodology.astro`). If there is one, disclose it on the first screen of related pages.
3. **Agency services line.** One sentence on what Conversely offers agencies (`src/pages/for-agencies.astro`).
4. **Repo public vs private** (see above).
5. **Custom domain**, if any.

## Status (2026-10-11)
- Step 1 strategy: done and approved.
- Step 2 site build: PR #1 (branch `claude/project-thread-c0vn71`), awaiting Peter's "publish". Pages: home, start, use cases (12), how-to (10 planned), tests (none yet, says so), blog (5 planned), glossary, for agencies, methodology, about, search, 404.
- Steps 3 to 5 (cornerstone posts, Q&A and tools, daily post routine): not started. First five posts are listed in strategy.md section 7 and `src/site.ts`.

## Vercel
- Project `decision-layer` (id `prj_1hkg5JgPgdzHkjML9dBXeuLCTbCG`), team `peter-schmitts-projects`, linked to this repo.
- Production branch `main`; production domain decision-layer-indol.vercel.app (live only after the first merge).
- Every branch push builds a preview automatically. Previews need a Vercel login.
- Don't use the Vercel tool's create_deployment for a branch: it targeted production. Rely on branch-push previews.

## Gotchas
- `.astro` and `.svg` files copied through a shared files folder picked up an injected C2PA metadata block that broke the build. Copy source from git, not from shared folders.
- If git complains about "dubious ownership", use `git -c safe.directory=*`.

## How Peter likes to work
- Short, plain answers that lead with the result; details in files or threads.
- When he must tap something, say exactly where.
- Visuals: close-up, clearly labeled shots of the part that changed, not full-page screenshots.
- Hands-off: he doesn't want to approve permission prompts one by one.
- Record his asks so they persist; he's frustrated when a repeated ask is dropped.
