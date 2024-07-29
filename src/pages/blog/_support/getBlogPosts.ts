// eslint-disable-next-line import/no-unresolved
import { type CollectionEntry, getCollection } from 'astro:content'

export async function getBlogPostsByYear(
  filterTags?: string[],
  negativeFilterTags?: string[],
): Promise<Map<number, CollectionEntry<'blog'>[]>> {
  const allBlogPosts = await getBlogPosts(filterTags, negativeFilterTags)
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

export async function getBlogPosts(
  filterTags?: string[],
  negativeFilterTags?: string[],
): Promise<CollectionEntry<'blog'>[]> {
  const allBlogPosts = await getCollection('blog')

  // Filter by tag if needed
  let blogPostsFiltered = Array.from(allBlogPosts)
  if (filterTags && filterTags?.length > 0) {
    blogPostsFiltered = allBlogPosts.filter((entry) => {
      const tags = entry.data.category
      return filterTags?.some((t) => tags?.includes(t))
    })
  }
  if (negativeFilterTags && negativeFilterTags?.length > 0) {
    blogPostsFiltered = blogPostsFiltered.filter((entry) => {
      const tags = entry.data.category
      return !negativeFilterTags?.some((t) => tags?.includes(t))
    })
  }

  return blogPostsFiltered.sort((a, b) => {
    return new Date(b.data.createdAt).getTime() - new Date(a.data.createdAt).getTime()
  })
}
