<template>
  <div>
    <div class="row functionalPrintEntry" :key="photo.srcA" v-for="photo in photos">
      <div class="col-12">
        <h2>{{ photo.title }}</h2>
        <!-- eslint-disable-next-line-->
        <p v-html="photo.descr"></p>
      </div>
      <div class="col-6">
        <figure class="figure">
          <a :href="photo.srcA">
            <video
              :src="photo.srcA"
              autoplay
              class="figure-img img-fluid"
              loop
              muted
              playsinline
              v-if="photo.type === 'video'"
            />
            <img :src="photo.srcA" class="figure-img img-fluid rounded" v-else />
          </a>
          <figcaption v-if="photo.captionA" class="figure-caption text-center">
            <!-- eslint-disable-next-line -->
            <span v-html="photo.captionA" />
          </figcaption>
        </figure>
      </div>
      <div class="col-6">
        <figure class="figure">
          <a :href="photo.srcB">
            <video
              :src="photo.srcB"
              autoplay
              class="figure-img img-fluid"
              loop
              muted
              playsinline
              v-if="photo.type === 'video'"
            />
            <img :src="photo.srcB" class="figure-img img-fluid rounded" v-else />
          </a>
          <figcaption v-if="photo.captionB" class="figure-caption text-center">
            <!-- eslint-disable-next-line -->
            <span v-html="photo.captionB" />
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlogPostPhotos',
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
