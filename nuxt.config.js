const PHOTOS_URL_DEV = 'http://localhost:8080'
//const PHOTOS_URL_DEV = 'http://photos:8080'
//const PHOTOS_URL_DEV = 'http://3.239.46.94:8080'
//const PHOTOS_URL_DEV = 'http://3.239.46.94:8080'
const PHOTOS_URL_PROD = 'https://photos.kaliatech.com'
export default {
  target: 'static',
  generate: {
    fallback: '404.html',
  },
  // Headers of the page
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/global.js' }, { src: '~/plugins/filters.js' }, { src: '~/plugins/vue-script2.js' }],

  publicRuntimeConfig: {
    // baseURL: process.env.BASE_URL || 'https://nuxtjs.org',
    basePhotosUrl: process.env.NODE_ENV !== 'production' ? PHOTOS_URL_DEV : PHOTOS_URL_PROD,
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',

    // https://github.com/nuxt-community/style-resources-module/
    '@nuxtjs/style-resources',

    // https://google-analytics.nuxtjs.org/
    '@nuxtjs/google-analytics',
  ],

  googleAnalytics: {
    id: 'UA-8344371-5',
    dev: process.env.NODE_ENV !== 'production',
  },

  styleResources: {
    // your settings here
    sass: [],
    scss: [
      // './assets/scss/_uses.scss',
      // 'bootstrap/scss/_functions.scss',
      // 'bootstrap/scss/_variables.scss',
      // 'bootstrap/scss/_mixins.scss',
      // 'bootstrap-vue/src/_variables.scss',
      // './assets/scss/_variables.scss',
    ],
    less: [],
    stylus: [],
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'photos-catch-all',
        path: '/photos/*',
        component: resolve(__dirname, '~/pages/photos/index.vue'),
      })
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://content.nuxtjs.org/
    '@nuxt/content',

    // https://go.nuxtjs.dev/bootstrap
    ['bootstrap-vue/nuxt'],

    'nuxt-fontawesome',
  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
  fontawesome: {
    component: 'fa',
    imports: [
      // import whole set
      // {
      //   set: '@fortawesome/free-solid-svg-icons',
      //   icons: ['fas']
      // },
      // import 2 icons from set
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faGlobe'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faLinkedin', 'faGithub', 'faStackOverflow', 'faTwitter'],
      },
    ],
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },
  // https://content.nuxtjs.org/configuration
  content: {
    liveEdit: false, // bug as of 2020-12 with nuxt/content prevents component registration with liveEdit
    markdown: {
      // Unable to get this to work. Possible conflict with prism? Decided to use custom component instead.
      // remarkPlugins: ['remark-mermaid'],
      // mermaid: {
      //   simple: true,
      // },
      prism: {
        theme: 'node_modules/prismjs/themes/prism-tomorrow.css',
      },
    },
  },
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-watchers
  // Needed to prevent strange problems in AmazonLinux2/Cloud9/Docker environment.
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  /*
   ** Build configuration
   */
  build: {
    babel: {
      compact: true,
    },
    //   parallel: true,
    //   hardSource: true,
    //    cache: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
