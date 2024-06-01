// eslint-disable-next-line import/no-unresolved
import { getCollection } from 'astro:content'

export async function getUniqueTags() {
  const blogEntries = await getCollection('blog')
  const uniqueTags = new Set()
  blogEntries.forEach((entry) => {
    const tags = entry.data.category
    tags?.forEach((tag) => uniqueTags.add(tag))
  })
  return Array.from(uniqueTags)
}
