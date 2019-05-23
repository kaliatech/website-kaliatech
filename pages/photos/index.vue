<template>
  <div class="container">
    <h1 v-if="breadcrumbs.length === 0">Photos</h1>
    <p v-if="breadcrumbs.length === 0" class="lead">
      Random photos and videos
    </p>
    <b-breadcrumb v-if="breadcrumbs.length > 0" :items="breadcrumbs" />

    <div v-if="!album">
      loading...
    </div>

    <div v-if="album" id="photos-container">

      <div class="row">
        <div class="col-12">
          <h2 v-if="album.name && album.name !== '.'">{{ album.name }}</h2>
        </div>
      </div>

      <div class="row">
        <div v-for="media in medias"
             :key="media.filename"
             class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3"
             style="cursor:pointer"
             @click="showLightbox(media)">
          <img :alt="media.filename"
               :src="photosUrl + media.thumbnail"
               :title="media.title"
               height="210"
               width="280">
        </div>
      </div>

      <div class="row">
        <h3 v-if="$route.name !== 'photos' && subalbums && subalbums.length > 0 && medias.length > 0">Sub Albums</h3>
      </div>

      <div class="row">
        <div v-for="subalbum in subalbums" :key="subalbum.name" class="col-12 col-md-6 col-lg-4 mb-3">
          <div>
            <nuxt-link :to="subalbum.urlModified">
              <strong>{{ subalbum.name }}</strong>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link :to="subalbum.urlModified">
              <img :alt="subalbum.name"
                   :src="photosUrl + subalbum.thumbnail"
                   :title="subalbum.name"
                   class="album"
                   height="210"
                   width="280">
            </nuxt-link>
          </div>
        </div>
      </div>

      <div v-if="album.descr" class="row mt-3">
        <div class="col-12">
          <h3>Description</h3>
          <!-- eslint-disable-next-line -->
          <p v-if="album.descr"><span v-html="album.descr" /></p>
        </div>
      </div>


    </div>
  </div>
</template>
<script>
//const basePhotosUrl = 'http://localhost:8080'
const basePhotosUrl = process.env.NUXT_ENV_PHOTOSURL

export default {

  // The script defer/body properties are an attempt to make sure scripts always get loaded in correct order. Seemed
  // to be random otherwise.

  head() {
    return {
      title: 'Photos | Kaliatech',
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js', defer: '', body: false },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js',
          defer: '',
          body: true
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css'
        }
      ]
    }
  },
  data() {
    return {
      breadcrumbs: [],
      photosUrl: basePhotosUrl,
      album: null,
      medias: [],
      subalbums: []
    }
  },
  created() {
  },
  mounted() {

    if (this.$route.name === 'photos-catch-all') {
      let tokens = this.$route.path.split('/')

      let path = '/photos'

      tokens.forEach((token, idx) => {
        if (!token) {
          return
        }
        if (idx === 1) {
          this.breadcrumbs.push({
            text: 'Photos',
            to: { name: 'photos' }
          })
          return
        }

        path += '/' + token + '/'
        this.breadcrumbs.push({
          text: token,
          to: path
        })
      })


      let lastToken = tokens[tokens.length - 1]
      this.photosUrl = basePhotosUrl + this.$route.path.replace('/photos', '')
    }
    const opts = {
      //responseType: 'json'
    }

    if (!this.photosUrl.endsWith('/')) {
      this.photosUrl += '/'
    }


    let indexJsonUrl = this.photosUrl.endsWith('index.json') ? '' : this.photosUrl + 'index.json'
    this.$axios.get(indexJsonUrl, opts)
      .then((resp) => {
        //let modifiedHtml = resp.data.replace('../static', 'http://localhost:8080/static')
        //let modifiedHtml = resp.data.replace('href="../static', 'href="http://localhost:8080/static')
        let galleryJson = resp.data
        //console.log(galleryJson)
        //let gallery = JSON.parse(galleryJson)

        // For debugging purposes only:
        // if (typeof galleryJson === 'string' || galleryJson instanceof String) {
        //   try {
        //     JSON.parse(resp.data)
        //   }
        //   catch (err) {
        //     console.log(err)
        //   }
        // }

        this.medias = galleryJson.medias
        this.album = galleryJson.album

        // Filter out hidden subalbums
        const subalbumsJson = galleryJson.subalbums.filter(album => album.title !== 'Temp' && album.title !== 'Personal')

        // Manual sorting of main album. Note sure how else to do this. Should eventually look in to
        // alternative to sigal, or perhaps develop plugin that allows per album sorting config.
        if (this.album && this.album.name === '.') {
          this.subalbums = []
          this.subalbums.push(subalbumsJson.find(el => el.name === 'Random'))
          this.subalbums.push(subalbumsJson.find(el => el.name === 'Rides'))
          this.subalbums.push(subalbumsJson.find(el => el.name === 'Projects'))
        }
        else {
          this.subalbums = subalbumsJson
        }

        this.subalbums.forEach((album, idx) => {
          let basePath = '/photos' + this.$route.path.replace('/photos', '')
          if (!basePath.endsWith('/')) {
            basePath += '/'
          }
          this.subalbums[idx].urlModified = basePath + album.url
        })

        this.mfpItems = this.medias.map((media) => {
          return {
            filename: media.filename,
            src: this.photosUrl + media.filename,
            type: media.type
            // src: $('<img src="' + this.photosUrl + media.filename + '"/><a class="download" href="' + this.photosUrl + media.filename + '">Download me</a>'),
            // type: 'inline'
          }
        })
      })
  },
  methods: {
    showLightbox(media) {
      $.magnificPopup.open({
        items: this.mfpItems,
        image: {
          titleSrc: function (item) {
            return '<div><a href="' + item.src + '"><small>Download</small></a></div>'
          }
        },
        gallery: {
          // options for gallery
          enabled: true,
          preload: [0, 2]
        }
      }, this.mfpItems.findIndex(i => i.filename == media.filename));
    }
  }
}
</script>
<style lang="scss">
@import 'assets/scss/stacked-effect.sass';

html, body {

}

.album {
  box-shadow: sheets-effect();
  @include border-radius (3px);
}

/*#photos-container {*/
/*display: flex;*/
/*border: 1px solid red;*/
/*min-height: 70vh;*/
/*}*/

/*#test2 {*/
/*display: flex;*/
/*border: 1px solid red;*/
/*}*/

/*#galleria {*/
/*flex: 1;*/
/*background: #000;*/
/*}*/

/*#gallery {*/
/*flex: 1;*/
/*background: #000;*/
/*min-height: 70vh;*/
/*}*/

#gallery {
  flex: 1;
  background: #000;
  min-height: 70vh;
}


</style>
