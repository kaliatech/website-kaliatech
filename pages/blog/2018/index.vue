<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>2018</h2>
      </div>
    </div>
    <blog-posts year="2018" />
  </div>
</template>
<script>
import BlogPosts from '~/components/BlogPosts'

export default {
  components: { BlogPosts },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Blog - 2018 | Kaliatech',
    }
  },
}
</script>
<style lang="scss"></style>
