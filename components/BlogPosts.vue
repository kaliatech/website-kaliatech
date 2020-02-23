<template>
  <div class="row blog-posts">
    <div class="col-12">
      <ul>
        <li :key="blogPage.path" class="mt-2" v-for="blogPage in blogPages">
          <nuxt-link :to="blogPage.path">{{ blogPage.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    year: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      blogPages: []
    }
  },
  created() {
    this.$router.options.routes.forEach((routeOption) => {
      const matchPath = '/blog' + (this.year ? '/' : '') + this.year
      // console.log(matchPath)
      // console.log(routeOption.path)

      if (routeOption.path.startsWith(matchPath)) {
        const title = routeOption.path.replace(matchPath, '')

        const fsCount = (title.match(/\//g) || []).length
        if (fsCount > (this.year ? '0' : 1) && title.trim().length > 0 && !title.endsWith('/')) {
          this.blogPages.push({
            path: routeOption.path,
            title
          })
          this.blogPages.sort((a, b) => {
            const A = a.title.toUpperCase()
            const B = b.title.toUpperCase()
            if (A > B) {
              return -1
            }
            if (A < B) {
              return 1
            }
            return 0
          })
        }
      }
    })
  }
}
</script>
<style lang="scss">
.blog-posts a:link,
.blog-posts a:visited {
  font-weight: bold;
}
</style>
