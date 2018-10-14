<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <p class="lead">
          Blog - Required Reading, IMO
        </p>
      </div>
    </div>
    <blog-posts/>
  </div>
</template>
<script>
import BlogPosts from '~/components/BlogPosts'

export default {
  components: {BlogPosts},
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
