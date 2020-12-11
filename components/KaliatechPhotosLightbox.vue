<template>
  <div>
    <light-gallery :images="lightBoxImages" :index="lightBoxImageIdx" :disable-scroll="false" @close="$emit('close')" />
  </div>
</template>
<script>
export default {
  name: 'KaliatechPhotosLightbox',
  components: {
    // Interesting idea... but ultimately not needed:
    // import { LightGallery } from 'vue-light-gallery'
    // 'light-gallery': () => {
    //   if (!process.client) {
    //     return null
    //   } else {
    //     import('vue-light-gallery').then((mod) => {
    //       return mod.LightGallery
    //     })
    //   }
    // },
    'light-gallery': () =>
      import('vue-light-gallery').then((mod) => {
        return mod.LightGallery
      }),
  },
  props: {
    lightBoxImages: {
      type: Array,
      default: () => [],
    },
    lightBoxImageIdx: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {}
  },
}
</script>
