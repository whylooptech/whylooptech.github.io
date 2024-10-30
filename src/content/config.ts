import { defineCollection, z } from 'astro:content';

const featureCollection = defineCollection({
  type: 'content',
  schema:
    z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(),
    }),
});

const teamCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
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

const certCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      certimg: z.object({
        src: image(),
        alt: z.string(),
      }),
    }),
});

export const collections = {
  'certlogo': certCollection,
  'feature': featureCollection,
  'team': teamCollection,
};
