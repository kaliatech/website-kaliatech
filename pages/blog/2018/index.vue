<template>
  <div>
    <div class="row">
      <div class="col-12">
        2018
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      blogPages: []
    }
  },
  mounted () {
    this.$router.options.routes.forEach((routeOption) => {
      console.log(routeOption.path)
      if (routeOption.path.startsWith('/blog/2018')) {
        this.blogPages.push(routeOption)
      }
    })
  }
}
</script>
<style lang="scss">
</style>
