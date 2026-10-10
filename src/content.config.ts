import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts. Same editorial rules as the DPC site: a news-led header from a well-known outlet,
// verbatim quotes, every source checked, and nothing published until Peter says "publish".
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    kind: z.enum(['Explainer', 'Comparison', 'How-to', 'Worked example', 'Reality check', 'News']),
    readMinutes: z.number(),
    author: z.string(),
    published: z.coerce.date(),
    lastChecked: z.coerce.date(),
    modelVersion: z.string().optional(), // the Jev version any code or results in the post were checked against
    draft: z.boolean().default(false),
    respondingTo: z.object({
      lede: z.string(),
      outlet: z.string(),
      headline: z.string(),
      url: z.string().url(),
      date: z.coerce.date(),
      quote: z.string(),
      quoteBy: z.string().optional(),
      impact: z.string(),
    }).optional(),
    summary: z.array(z.string()).default([]),
    sources: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      grade: z.enum(['Regulator', 'Official docs', 'Vendor claim', 'Vendor case study', 'Independent reporting', 'Our test']),
    })),
  }),
});

export const collections = { posts };
