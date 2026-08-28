import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    readingTime: z.number().optional(),
    listening: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const reading = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reading' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    status: z.enum(['reading', 'finished', 'abandoned', 'want']).default('reading'),
    rating: z.number().min(1).max(5).optional(),
    startedAt: z.coerce.date().optional(),
    finishedAt: z.coerce.date().optional(),
    cover: z.string().optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    startedAt: z.coerce.date(),
    endedAt: z.coerce.date().optional(),
    context: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    publishedAt: z.coerce.date(),
  }),
});

export const collections = { writing, notes, reading, experience, projects };
