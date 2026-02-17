import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    h1: z.string(),
    description: z.string(),
    keywords: z.string(),
    canonical: z.string(),
    heroImage: z.string(),
    heroSubtitle: z.string(),
    breadcrumbLabel: z.string(),
    schema: z.record(z.unknown()),
    publishDate: z.string().optional(),
  }),
});

export const collections = { articles };
