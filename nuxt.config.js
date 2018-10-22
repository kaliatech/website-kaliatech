const pkg = require('./package')

// //const basePhotosUrl = 'http://localhost:8080'
const basePhotosUrl = 'https://photos.kaliatech.com'

// // Works, but not used. See notes in generate config
// const routes = []
// const routePromises = []
// function loadPhotoRoutes (photosUrl) {
//   console.log(photosUrl)
//   let promise = axios.get(photosUrl + "/index.json", {responseType: 'json'})
//     .then(function (resp) {
//       let subalbums = resp.data.subalbums
//       if (subalbums) {
//         let promises = []
//
//         for (let i = 0; i < subalbums.length; i++) {
//           let basePath = photosUrl.replace(basePhotosUrl, '')
//           if (basePath.startsWith("/")) {
//             basePath = '/photos' + basePath
//           }
//           else {
//             basePath = '/photos/' + basePath
//           }
//           basePath += (basePath.endsWith('/') ? '' : '/')
//           routes.push(basePath + subalbums[i].url)
//
//           // console.log('here')
//           // let baseIndexPath = photosUrl.replace('/photos', '')
//           // baseIndexPath += (baseIndexPath.endsWith('/') ? '' : '/')
//           let baseIndexPath = basePhotosUrl + basePath.replace('/photos', '')
//           promises.push(loadPhotoRoutes(baseIndexPath + subalbums[i].url))
//         }
//         return Promise.all(promises)
//       }
//     })
//     .then(() => {
//       return routes
//     })
//   return promise
// }

module.exports = {
  mode: 'universal',
  env: {
    /* This did not work, even when NODE_ENV was set.  AFAICT, there's currently no solution for multiple envs in Nuxt. */
    /* NUXT_ENV_PHOTOSURL: process.env.NODE_ENV !== 'production' ? 'https://localhost:8443' : 'https://photos.kaliatech.com'*/
    /* NUXT_ENV_PHOTOSURL: 'https://localhost:8443'*/
    NUXT_ENV_PHOTOSURL: basePhotosUrl
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#FFFFFF'},

  /*
  ** Global CSS
  */
  css: ['~/assets/scss/main.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: "~/plugins/global.js"}
  ],
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'photos-catch-all',
        path: '/photos/*',
        component: resolve(__dirname, '~/pages/photos/index.vue')
      })
    }
  },

  /*
  ** TODO: Make this dynamic and use the payload
  */
  generate: {
    // routes: [
    //   '/photos/Rides',
    //   '/photos/Random',
    //   '/photos/Projects'
    // ]

    // This could be used to SSR generate all photo album urls. However, by using netlify _redirects there's
    // no real reason to. We don't care about SEO for these photo pages.
    // routes: function () {
    //   return loadPhotoRoutes(basePhotosUrl)
    // }
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    //'bootstrap-vue/nuxt'
    ['bootstrap-vue/nuxt', {css: false}],
    'nuxt-fontawesome'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  fontawesome: {
    component: 'fa',
    imports: [
      //import whole set
      // {
      //   set: '@fortawesome/free-solid-svg-icons',
      //   icons: ['fas']
      // },
      //import 2 icons from set
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faGlobe']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faLinkedin', 'faGithub', 'faStackOverflow', 'faTwitter']
      }
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    extractCSS: {
      allChunks: true
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
