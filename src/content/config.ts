// 1. Import utilities from `astro:content`
// eslint-disable-next-line
import { z, defineCollection } from 'astro:content'

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
    createdAt: z.date(),
    tags: z.array(z.string()).optional(),
    category: z.string() || z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
}
