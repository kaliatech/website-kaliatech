<template>
  <div class="row">
    <div class="col-12"></div>
    <ul class="toc">
      <li
        v-for="link in computedToc"
        :key="link.id"
        :class="{ toc1: link.depth === 1, toc2: link.depth === 2, toc3: link.depth === 3, toc4: link.depth === 4 }"
      >
        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'BlogPostToc',
  props: {
    toc: { type: Array, default: () => [] },
    startIdx: { type: Number, default: 1 },
  },
  computed: {
    computedToc() {
      return this.toc.slice(this.startIdx)
    },
  },
}
</script>
