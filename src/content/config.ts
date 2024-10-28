import { defineCollection, z } from 'astro:content';

const featureCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
  }),
});

const teamCollection = defineCollection({
  schema: ({ image }) => z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: image(),
      alt: z.string(),
    }),
    summary: z.string(),
    linkedin: z.string(),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

export const collections = {
  'feature': featureCollection,
  'team': teamCollection,
};
