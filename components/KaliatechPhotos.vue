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
      <lazy-kaliatech-photos-lightbox
        :light-box-images="lightBoxImages"
        :light-box-image-idx="lightBoxImageIdx"
        @close="lightBoxImageIdx = null"
      />
    </client-only>

    <div v-if="galleryObj" class="row">
      <div
        class="col-12 col-sm-6 col-lg-4 mb-3"
        v-for="(lightBoxImg, thumbIndex) in lightBoxImages"
        :key="thumbIndex"
        @click="lightBoxImageIdx = thumbIndex"
        style="cursor: pointer"
      >
        <div>
          <img class="img-fluid rounded" :src="lightBoxImg.thumbnailUrl" style="width: 100%" />
        </div>
        <div class="text-center media-caption">
          <!-- eslint-disable vue/no-v-html -->
          <span v-html="lightBoxImg.caption" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KaliatechPhotos',
  props: {
    photosPath: { type: String, default: '' },
    photoMetas: { type: Array, default: () => [] },
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
      // The noCache is not needed as long as S3/Cloudfront cache headers are setup correctly
      //   `${this.basePhotosUrl}${this.photosPath}/index.json?noCache=` +
      //     Math.floor(new Date().getTime() / 1000 / 3600).toString()
      // )
      this.galleryObj = await fetch(`${this.basePhotosUrl}${this.photosPath}/index.json`).then((res) => res.json())
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Error loading photos.', err)
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
          caption: this.getCaption(media.filename),
          url: `${this.basePhotosUrl}${this.photosPath}/${media.filename}`,
          thumbnailUrl: `${this.basePhotosUrl}${this.photosPath}/${media.thumbnail}`,
        }
      })
    },
  },
  methods: {
    getCaption(filename) {
      if (!this.photoMetas) {
        return ''
      }
      const photoMeta = this.photoMetas.find((photoMeta) => photoMeta.filename === filename)
      if (photoMeta && photoMeta.caption) {
        return photoMeta.caption
      } else {
        return ''
      }
    },
  },
}
</script>
