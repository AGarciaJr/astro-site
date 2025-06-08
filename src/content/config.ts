import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    date: z.date(),
  }),
});

export const collections = {
  blog,
  projects,
};
