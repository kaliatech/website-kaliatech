<template>
  <div>
    <client-only>
      <div v-if="errorMsg" class="alert alert-danger" role="alert">
        {{ errorMsg }}
      </div>
    </client-only>
    <div v-if="galleryObj && galleryObj.album" class="row">
      <div class="col">
        <h3 v-if="showAlbumName">{{ galleryObj.album.name }}</h3>
      </div>
    </div>
    <client-only>
      <light-gallery
        :images="lightBoxImages"
        :index="lightBoxImageIdx"
        :disable-scroll="false"
        @close="lightBoxImageIdx = null"
      />
    </client-only>

    <div v-if="galleryObj" class="row no-gutters">
      <div
        class="col-12 col-sm-6 col-lg-3 pr-2"
        v-for="(lightBoxImg, thumbIndex) in lightBoxImages"
        :key="thumbIndex"
        @click="lightBoxImageIdx = thumbIndex"
      >
        <img class="img-fluid" :src="lightBoxImg.thumbnailUrl" style="width: 100%" />
        <div class="text-center mb-4">
          <!-- eslint-disable vue/no-v-html -->
          <span v-html="lightBoxImg.caption" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KaliatechGallery',
  components: {
    // import { LightGallery } from 'vue-light-gallery'
    'light-gallery': () =>
      import(/* webpackPrefetch: true */ 'vue-light-gallery').then((mod) => {
        return mod.LightGallery
      }),
  },
  props: {
    photosPath: { type: String, default: '' },
    showAlbumName: { type: Boolean, default: false },
  },
  data() {
    return {
      errorMsg: null,
      basePhotosUrl: this.$config.basePhotosUrl,
      galleryObj: {},
      lightBoxImageIdx: null,
    }
  },
  async fetch() {
    try {
      this.galleryObj = await fetch(
        // TODO: Temporary. Need to setup correct cache headers with AWS
        `${this.basePhotosUrl}${this.photosPath}/index.json?noCache=` +
          Math.floor(new Date().getTime() / 1000 / 3600).toString()
      ).then((res) => res.json())
    } catch (err) {
      this.errorMsg = 'Error loading photos: ' + this.photosPath
    }
  },
  computed: {
    lightBoxImages() {
      if (!this.galleryObj.medias) {
        return []
      }

      return this.galleryObj.medias.map((media) => {
        // photos.kaliatech.com/thumbnails/IMG_2040.JPG
        // photos.kaliatech.com/Projects/RockingHorse/thumbnails/IMG_2040.JPG
        // photos.kaliatech.com/Projects/RockingHorse/PreStaining/thumbnails/IMG_2134.JPG
        // photos.kaliatech.com/Projects/RockingHorse/PreStaining/thumbnails/IMG_1517.JPG
        return {
          ...media,
          // caption: '<strong>Test</strong> here.',
          url: `${this.basePhotosUrl}${this.photosPath}/${media.filename}`,
          thumbnailUrl: `${this.basePhotosUrl}${this.photosPath}/${media.thumbnail}`,
        }
      })
    },
  },
}
</script>
