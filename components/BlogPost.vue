<template>
  <div class="container blog-post">
    <nuxt-link to="/blog">&lt;&lt; back to blog index</nuxt-link>
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <h1>{{ title }}</h1>
        <slot/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'blog'
    },
    date: {
      type: String,
      default: ''
    }
  },
  head () {
    return {
      title: this.title + ' | Kaliatech'
    }
  }
}
</script>
<style lang="scss">
  .blog-post a:link, .blog-post a:visited {
    font-weight: bold;
  }
</style>
