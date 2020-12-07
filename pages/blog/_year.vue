<template>
  <div class="container blog-posts">
    <div class="row">
      <div class="col-12">
        <h1>Blog - {{ year }}</h1>
        <p class="lead">Required reading, IMO</p>
      </div>
    </div>

    <div class="col-12">
      <div v-for="blogYear in blogPostYears" :key="`blogPosts-${blogYear}`">
        <h4 class="mt-0">{{ blogYear }}</h4>
        <ul v-if="blogPostsByYear[blogYear].length">
          <li v-for="blogPost of blogPostsByYear[blogYear]" :key="blogPost.slug" class="mb-3">
            <nuxt-link :to="{ path: `/blog/${blogYear}/` + abbrSlug(blogPost.slug) }">
              {{ blogPost.title }}
            </nuxt-link>
            <p>
              {{ blogPost.description }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import groupBy from 'lodash.groupby'
export default {
  async asyncData({ $content, params, redirect }) {
    const blogPosts = await $content({ path: 'blogposts', deep: true })
      .only(['title', 'slug', 'path', 'description', 'createdAt'])
      .where({ slug: { $regex: `${params.year}.*` } })
      .sortBy('createdAt', 'desc')
      .fetch()

    if (!blogPosts || blogPosts.length === 0) {
      redirect('/blog')
      return
    }

    blogPosts.forEach((el) => {
      el.createdAtYear = new Date(el.createdAt).getFullYear()
    })

    const blogPostsByYear = groupBy(blogPosts, 'createdAtYear')
    const blogPostYears = Object.keys(blogPostsByYear).sort().reverse()

    return { blogPostYears, blogPostsByYear }
  },
  data() {
    return {
      year: this.$route.params.year,
      blogPostYears: [],
      blogPostsByYear: {},
    }
  },
  head() {
    return {
      title: 'Blog | Kaliatech',
    }
  },
  methods: {
    abbrSlug(blogSlug) {
      return blogSlug.substr(blogSlug.indexOf('-') + 1)
    },
  },
}
</script>
<style lang="scss" scoped>
a:link,
.blog-posts a:visited {
  font-weight: bold;
}
</style>
