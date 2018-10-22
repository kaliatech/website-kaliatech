<template>
  <div class="container">
    <h1 v-if="breadcrumbs.length === 0">Photos</h1>
    <p v-if="breadcrumbs.length === 0" class="lead">
      Random photos and videos
    </p>
    <b-breadcrumb v-if="breadcrumbs.length > 0" :items="breadcrumbs"/>

    <div v-if="!album">
      loading...
    </div>

    <div v-if="album" id="photos-container">

      <div class="row">
        <div class="col-12">
          <h2 v-if="album.name && album.name !== '.'">{{ album.name }}</h2>
          <p v-if="album.descr"> <span v-html="album.descr"/></p>
        </div>
      </div>

      <div class="row">
        <div v-for="media in medias" :key="media.filename" class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
          <a :href="photosUrl + media.filename">
            <img :src="photosUrl + media.thumbnail"
                 :alt="media.filename"
                 :title="media.title"
                 width="280"
                 height="210">
          </a>
        </div>
      </div>

      <div class="row">
        <h3 v-if="$route.name !== 'photos' && subalbums && subalbums.length > 0 && medias.length > 0">Sub Albums</h3>
      </div>

      <div class="row">
        <div v-for="album in subalbums" :key="album.name" class="col-12 col-md-6 col-lg-4 mb-3">
          <div>
            <nuxt-link :to="album.urlModified">
              <strong>{{ album.name }}</strong>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link :to="album.urlModified">
              <img :src="photosUrl + album.thumbnail"
                   :alt="album.name"
                   :title="album.name"
                   class="album"
                   width="280"
                   height="210">
            </nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
//const basePhotosUrl = 'http://localhost:8080'
const basePhotosUrl = process.env.NUXT_ENV_PHOTOSURL

export default {
  head () {
    return {
      title: 'Photos | Kaliatech',
      script: [
        {src: 'https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js'},
        {src: 'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js'}
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css'
        }
      ]
    }
  },
  data () {
    return {
      breadcrumbs: [],
      photosUrl: basePhotosUrl,
      album: null,
      medias: [],
      subalbums: []
    }
  },
  created () {
  },
  mounted () {

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
            to: {name: 'photos'}
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
        this.subalbums = galleryJson.subalbums.filter((album) => album.title !== 'Temp' && album.title !== 'Personal')

        this.subalbums.forEach((album, idx) => {
          let basePath = '/photos' + this.$route.path.replace('/photos', '')
          if (!basePath.endsWith('/')) {
            basePath += '/'
          }
          this.subalbums[idx].urlModified = basePath + album.url
        })

        let items = galleryJson.medias.map((media) => {
          return {
            src: this.photosUrl + '/' + media.filename,
            type: media.type
          }
        })

        // $.magnificPopup.open({
        //   // delegate: 'a', // child items selector, by clicking on it popup will open
        //   type: 'image',
        //   items: items,
        //   gallery: {
        //     // options for gallery
        //     enabled: true
        //   }
        // });
      })
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
