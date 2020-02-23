// const basePhotosUrl = 'https://localhost:8443'
const basePhotosUrl = 'https://photos.kaliatech.com'
export default {
  mode: 'universal',
  env: {
    /* This did not work, even when NODE_ENV was set.  AFAICT, there's currently no solution for multiple envs in Nuxt. */
    /* NUXT_ENV_PHOTOSURL: process.env.NODE_ENV !== 'production' ? 'https://localhost:8443' : 'https://photos.kaliatech.com' */
    NUXT_ENV_PHOTOSURL: basePhotosUrl
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/global.js" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-analytics', {
      id: 'UA-8344371-5',
      dev: false
    }]
  ],
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'photos-catch-all',
        path: '/photos/*',
        component: resolve(__dirname, '~/pages/photos/index.vue')
      })
    }
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    //'bootstrap-vue/nuxt'
    ['bootstrap-vue/nuxt', { css: false }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-fontawesome'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
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
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
    }
  }
}
