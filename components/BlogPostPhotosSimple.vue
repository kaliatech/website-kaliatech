<template>
  <div class="row">
    <client-only>
      <lazy-kaliatech-photos-lightbox
        v-if="lightbox"
        :light-box-images="lightBoxImages"
        :light-box-image-idx="lightBoxImageIdx"
        @close="lightBoxImageIdx = null"
      />
    </client-only>
    <template v-for="(photo, photoIdx) in photos">
      <div :key="'l' + photo.src" class="col" v-if="center"></div>
      <div :key="photo.src" :class="'col-sm-' + colWidth">
        <figure class="figure">
          <a :href="photo.src" @click="onMediaClick(photoIdx, $event)">
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
      <div :key="'r' + photo.src" class="col" v-if="center"></div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'BlogPostPhotosSimple',
  props: {
    center: { type: Boolean, default: false },
    lightbox: { type: Boolean, default: false },
    colWidth: { type: Number, default: 6 },
    photos: { type: Array, default: () => [] },
  },
  data() {
    return {
      lightBoxImageIdx: null,
    }
  },
  computed: {
    lightBoxImages() {
      return this.photos.map((photo) => {
        return {
          url: photo.src,
          caption: photo.caption,
        }
      })
    },
    leftCols() {
      return 12 - this.colWidth / 2
    },
    rightCols() {
      return 12 - this.colWidth / 2
    },
  },
  methods: {
    onMediaClick(photoIdx, evt) {
      if (this.lightbox) {
        evt.preventDefault()
      }
      this.lightBoxImageIdx = photoIdx
    },
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
