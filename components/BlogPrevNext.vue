<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-4">
        <div v-if="prev">
          <NuxtLink :to="{ path: `/blog/${prevYear}/` + abbrSlug(prev.slug) }" class="font-weight-bold">
            &lt;&lt; prev </NuxtLink
          ><br />
          {{ prev.title }}
        </div>
      </div>

      <div class="col-4 text-center">
        <div>
          <nuxt-link to="/blog" class="font-weight-bold">^ up ^</nuxt-link><br />
          Blog Index
        </div>
      </div>

      <div class="col-4 text-right">
        <div v-if="next">
          <NuxtLink :to="{ path: `/blog/${nextYear}/` + abbrSlug(next.slug) }" class="font-weight-bold">
            next &gt;&gt;</NuxtLink
          ><br />
          {{ next.title }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {}
  },
  computed: {
    prevYear() {
      return !this.prev ? null : this.prev.slug.substr(0, 4)
    },
    nextYear() {
      return !this.next ? null : this.next.slug.substr(0, 4)
    },
  },
  methods: {
    abbrSlug(blogSlug) {
      return blogSlug.substr(blogSlug.indexOf('-') + 1)
    },
  },
}
</script>
