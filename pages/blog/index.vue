<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>
          Blog
          <span v-show="currCategory.code !== 'all'"> - {{ currCategory.name }}</span>
        </h1>
        <p class="lead">Required reading, IMO</p>
      </div>
    </div>

    <div v-if="error" class="alert alert-danger" role="alert">{{ error }}</div>
    <div class="row">
      <div class="col-sm-9 blog-posts">
        <div v-for="year in blogPostYears" :key="`blogPosts-${year}`">
          <h2 class="mt-0">{{ year }}</h2>
          <ul v-if="blogPostsByYear[year].length">
            <li v-for="blogPost of blogPostsByYear[year]" :key="blogPost.slug" class="mb-3">
              <nuxt-link :to="{ path: `/blog/${year}/` + abbrSlug(blogPost.slug) }">
                {{ blogPost.title }}
              </nuxt-link>
              <!-- <small v-show="blogPost.category === 'projects'">(project)</small> -->
              <p>
                {{ blogPost.description }}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-sm-3 d-none d-sm-block">
        <div class="blog-categories">
          <h6 class="mt-0">Categories</h6>
          <ul>
            <li v-for="category in categories" :key="category.code">
              <nuxt-link
                :to="{ path: '/blog/', query: { category: category.code } }"
                class="text-nowrap"
                :class="category.code === queryCategoryCode ? 'disabled' : ''"
              >
                {{ category.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row">
      <div v-if="currCategory.code === 'all'" class="col-12 mt-3 blog-posts">
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
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import groupBy from 'lodash.groupby'

import categoriesData from '@/data/categories.json'

export default {
  async asyncData({ $content, params, route }) {
    const blogPosts = await $content({ path: 'blogposts', deep: true })
      .only(['title', 'slug', 'path', 'description', 'createdAt', 'category'])
      .sortBy('createdAt', 'desc')
      .fetch()

    blogPosts.forEach((el) => {
      el.createdAtYear = new Date(el.createdAt).getFullYear()
    })

    return { blogPosts }
  },
  data() {
    return {
      blogPosts: [],
      categories: categoriesData,
      queryCategoryCode: this.$route.query.category || 'all',
      error: this.$route.query.error,
    }
  },
  head() {
    return {
      title: 'Blog | Kaliatech',
    }
  },
  computed: {
    currCategory() {
      const catCode = this.queryCategoryCode || 'all'
      return this.categories.find((el) => el.code === catCode)
    },
    blogPostsFiltered() {
      const filtered = []
      this.blogPosts.forEach((bp) => {
        if (this.currCategory.code === 'all' || bp.category === this.currCategory.code) {
          filtered.push(bp)
        }
      })
      return filtered
    },
    blogPostsByYear() {
      return groupBy(this.blogPostsFiltered, 'createdAtYear')
    },
    blogPostYears() {
      return Object.keys(this.blogPostsByYear).sort().reverse()
    },
  },
  watch: {
    $route(to, from) {
      this.queryCategoryCode = to.query.category || 'all'
    },
  },
  methods: {
    abbrSlug(blogSlug) {
      return blogSlug.substr(blogSlug.indexOf('-') + 1)
    },
  },
}
</script>
<style lang="scss" scoped>
.blog-posts a:link,
.blog-posts a:visited {
  font-weight: bold;
}

.blog-categories a:link,
.blog-categories a:visited {
  font-weight: bold;
}

.blog-categories .disabled {
  font-weight: normal !important;
  color: #212529;
  pointer-events: none;
}
</style>
