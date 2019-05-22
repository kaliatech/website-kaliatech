<template>
  <div>
    <div class="container blog-post">
      <div class="row">
        <div class="col-xl-10">
          <small class="dateline">{{ date }}</small>
          <h1 class="mb-3">{{ title }}</h1>
          <slot/>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <nuxt-link to="/blog">&lt;&lt; back to blog index</nuxt-link>
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

  .blog-post .dateline {
  }

</style>
