<template>
  <div class="container blog-posts">
    <div class="row">
      <div class="col-12">
        <h1>Blog</h1>
        <p class="lead">Required reading, IMO</p>
      </div>
    </div>

    <div class="col-12">
      <div v-for="year in blogPostYears" :key="`blogPosts-${year}`">
        <h4 class="mt-0">{{ year }}</h4>
        <ul v-if="blogPostsByYear[year].length">
          <li v-for="blogPost of blogPostsByYear[year]" :key="blogPost.slug" class="mb-3">
            <nuxt-link :to="{ path: '/blog/' + blogPost.slug }">
              {{ blogPost.title }}
            </nuxt-link>
            <p>
              {{ blogPost.description }}
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div class="col-12 mt-3">
      <h4>Miscellaneous</h4>
      <ul>
        <li>
          <nuxt-link :to="'/blog/books'">Books</nuxt-link>
          - Reading, and recently read
        </li>
        <li>
          <nuxt-link :to="'/blog/music-videos'">Music Videos</nuxt-link>
          - Collected favorites
        </li>
        <li>
          <nuxt-link :to="'/blog/movies'">Movies</nuxt-link>
          - Favorite movies
        </li>

        <!--        <li>-->
        <!--          <nuxt-link :to="'/blog/music/spotify-playlist'">Music</nuxt-link> - Spotify playlist-->
        <!--        </li>-->
        <li>
          <nuxt-link :to="'/projects'">Projects</nuxt-link>
          - Various projects of mine
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import groupBy from 'lodash.groupby'
export default {
  async asyncData({ $content, params }) {
    const blogPosts = await $content({ path: 'blogposts', deep: true })
      .only(['title', 'slug', 'path', 'description', 'createdAt'])
      .sortBy('createdAt', 'desc')
      // .limit(12)
      // .search(query)
      .fetch()

    blogPosts.forEach((el) => {
      el.createdAtYear = new Date(el.createdAt).getFullYear()
    })

    const blogPostsByYear = groupBy(blogPosts, 'createdAtYear')
    const blogPostYears = Object.keys(blogPostsByYear).sort().reverse()

    return { blogPostYears, blogPostsByYear }
  },
  data() {
    return {
      blogPostYears: [],
      blogPostsByYear: {},
    }
  },
  head() {
    return {
      title: 'Blog | Kaliatech',
    }
  },
}
</script>
<style lang="scss" scoped>
a:link,
.blog-posts a:visited {
  font-weight: bold;
}
</style>
