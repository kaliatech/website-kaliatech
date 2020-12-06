import Vue from 'vue'

import BlogPostPhotos from '~/components/BlogPostPhotos.vue'
import BlogPostPhotosSimple from '~/components/BlogPostPhotosSimple'
import ProjectDetail from '~/components/ProjectDetail.vue'

Vue.component('BlogPostPhotos', BlogPostPhotos)
Vue.component('BlogPostPhotosSimple', BlogPostPhotosSimple)
Vue.component('ProjectDetail', ProjectDetail)

// NOTE: [20201130] - This file is no longer required due to nuxt's auto components registration?
// https://github.com/nuxt/components
