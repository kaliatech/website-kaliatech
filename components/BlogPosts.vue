<template>
  <div class="row">
    <div class="col-12">
      <ul>
        <li v-for="blogPage in blogPages" :key="blogPage.path">
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
  data () {
    return {
      blogPages: []
    }
  },
  created () {
    this.$router.options.routes.forEach((routeOption) => {
      // console.log('routeOption', routeOption)
      let matchPath = '/blog' + (this.year ? '/' : '') + this.year
      if (routeOption.path.startsWith(matchPath)) {
        let title = routeOption.path.replace(matchPath, '')
        let fsCount = (title.match(/\//g) || []).length;
        if (fsCount > 1 && title.trim().length > 0 && !title.endsWith('/')) {
          this.blogPages.push({
            path: routeOption.path,
            title: title
          })
          this.blogPages.sort((a, b) => {
            let A = a.title.toUpperCase()
            let B = b.title.toUpperCase()
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
