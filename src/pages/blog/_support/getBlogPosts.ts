// eslint-disable-next-line import/no-unresolved
import { type CollectionEntry, getCollection } from 'astro:content'

export async function getBlogPostsByYear(
  filterTags?: string[],
): Promise<Map<number, CollectionEntry<'blog'>[]>> {
  const allBlogPosts = await getBlogPosts(filterTags)
  const blogPostsByYear = new Map<number, CollectionEntry<'blog'>[]>()

  // Build map of blog posts by year
  allBlogPosts.forEach((post) => {
    const year = new Date(post.data.createdAt).getFullYear()
    let blogPosts = blogPostsByYear.get(year)
    if (!blogPosts) {
      blogPosts = []
      blogPostsByYear.set(year, blogPosts)
    }
    blogPosts.push(post)
  })
  return blogPostsByYear
}

export async function getBlogPosts(filterTags?: string[]): Promise<CollectionEntry<'blog'>[]> {
  const allBlogPosts = await getCollection('blog')

  console.log('filterTags', filterTags)

  // Filter by tag if needed
  let blogPostsFiltered = Array.from(allBlogPosts)
  if (filterTags && filterTags?.length > 0) {
    blogPostsFiltered = allBlogPosts.filter((entry) => {
      const tags = entry.data.category
      return filterTags?.some((t) => tags?.includes(t))
    })
  }
  return blogPostsFiltered.sort((a, b) => {
    return new Date(b.data.createdAt).getTime() - new Date(a.data.createdAt).getTime()
  })
}
