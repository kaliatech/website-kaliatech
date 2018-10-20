const pkg = require('./package')

module.exports = {
  mode: 'universal',
  env: {
    /* This did not work, even when NODE_ENV was set.  AFAICT, there's currently no solution for multiple envs in Nuxt. */
    /* NUXT_ENV_PHOTOSURL: process.env.NODE_ENV !== 'production' ? 'https://localhost:8443' : 'https://photos.kaliatech.com'*/
    /* NUXT_ENV_PHOTOSURL: 'https://localhost:8443'*/
    NUXT_ENV_PHOTOSURL: 'https://photos.kaliatech.com'
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
    routes: [
      '/photos/Rides',
      '/photos/Random',
      '/photos/Projects'
    ]
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
