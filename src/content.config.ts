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
    // Closes every post: real, verified, linked headlines.
    inTheNews: z.array(z.object({
      outlet: z.string(),
      headline: z.string(),
      url: z.string().url(),
      date: z.coerce.date(),
    })).default([]),
    episode: z.string().optional(), // slug of the matching podcast episode
  }),
});

// Podcast episodes. `planned` shows show notes and the script but no player; an episode only
// enters the podcast feed once it is `published` with an audio file.
const episodes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/episodes' }),
  schema: z.object({
    number: z.number(),
    title: z.string(),
    summary: z.string(),
    status: z.enum(['planned', 'published']).default('planned'),
    date: z.coerce.date().optional(),
    minutes: z.number().optional(),
    audioUrl: z.string().url().optional(),
    audioBytes: z.number().optional(),
    hosts: z.array(z.string()).default([]),
    guests: z.array(z.string()).default([]),
    post: z.string().optional(), // slug of the matching blog post
    sources: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      grade: z.enum(['Regulator', 'Official docs', 'Vendor claim', 'Vendor case study', 'Independent reporting', 'Our test']),
    })).default([]),
  }),
});

export const collections = { posts, episodes };
