<template>
  <div class="container project-detail">
    <div class="row">
      <div class="col-xl-10">
        <h1>{{ title }}</h1>
        <slot />
      </div>
    </div>
    <div class="mt-3">
      <nuxt-link to="/projects">&lt;&lt; back to project list</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Project',
    },
    date: {
      type: String,
      default: '',
    },
  },
  head() {
    return {
      title: this.title + ' | Kaliatech',
    }
  },
}
</script>
<style lang="scss">
.project-detail a:link,
.blog-post a:visited {
  font-weight: bold;
}
</style>
