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
    <blog-posts/>
    <div class="col-12 mt-3">
      <h4>Miscellaneous</h4>
      <ul>
        <li>
          <nuxt-link :to="'/music-videos'">Music Videos</nuxt-link>
        </li>
      </ul>

    </div>
  </div>
</template>
<script>
import BlogPosts from '~/components/BlogPosts'

export default {
  components: { BlogPosts },
  head () {
    return {
      title: 'Blog | Kaliatech'
    }
  },
  data () {
    return {}
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped="true">
  a:link, .blog-posts a:visited {
    font-weight: bold;
  }
</style>
