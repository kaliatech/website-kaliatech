<template>
  <div class="row">
    <div :key="photo.src" class="col-sm-6" v-for="photo in photos">
      <figure class="figure">
        <a :href="photo.src">
          <video
            :src="photo.src"
            autoplay
            class="figure-img img-fluid"
            loop
            muted
            playsinline
            v-if="photo.type === 'video'"
          />
          <img :src="photo.src" class="figure-img img-fluid rounded" v-else />
        </a>
        <figcaption class="figure-caption text-center">
          <!-- eslint-disable-next-line -->
          <span v-html="photo.caption" />
        </figcaption>
      </figure>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlogPostPhotosSimple',
  props: {
    photos: { type: Array, default: () => [] },
  },
}
</script>
<style>
div.functionalPrintEntry {
  margin-bottom: 2em;
}

div.functionalPrintEntry img {
  border: solid 2px #212529;
}
</style>
