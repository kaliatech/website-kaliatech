<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Blog</h1>
        <p class="lead">
          Required reading, IMO
        </p>
      </div>
    </div>
    <blog-posts />
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
import BlogPosts from '~/components/BlogPosts'

export default {
  components: { BlogPosts },
  data() {
    return {}
  },
  mounted() {},
  head() {
    return {
      title: 'Blog | Kaliatech'
    }
  }
}
</script>
<style lang="scss" scoped="true">
a:link,
.blog-posts a:visited {
  font-weight: bold;
}
</style>
