# Decision Layer

The independent field guide to Jev (TypeSafe AI's decision model): use cases, how-tos, tests and reality checks. Published by Conversely. Not affiliated with TypeSafe AI.

Astro static site, same stack as Straight Talk on Healthcare Options.

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

## Where things live
- `src/site.ts`: site name, nav, disclosure lines, planned posts. Placeholders in `[BRACKETS]` need Peter's input.
- `src/data/sources.ts`: every cited source, with its grade (Regulator, Official docs, Vendor claim, Vendor case study, Independent reporting, Our test).
- `src/data/usecases.ts`, `howtos.ts`, `glossary.ts`: use cases, how-to list and glossary. Status stays "Guide in progress" / "In the works" until written; "Tested" only after a published test.
- `src/content/posts/*.md`: blog posts (schema in `src/content.config.ts`).
- `src/pages/search.json.ts`: the site-wide search index; add new content types there.

## Rules
- Every claim is sourced; vendor numbers are labeled as vendor claims; quotes are verbatim.
- Nothing goes live until Peter says "publish".
- The Jev API key is read from the `TYPESAFE_API_KEY` environment variable. Never commit it.

## Project notes
- `docs/HANDOFF.md`: Peter's decisions, editorial rules, open items and Vercel details. Start here.
- `docs/strategy.md`: the approved landscape and content strategy.
