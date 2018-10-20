<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>2011</h2>
      </div>
    </div>
    <blog-posts year="2011"/>
  </div>
</template>
<script>
import BlogPosts from '~/components/BlogPosts'

export default {
  components: {BlogPosts},
  head () {
    return {
      title: 'Blog - 2011 | Kaliatech'
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss">
</style>
