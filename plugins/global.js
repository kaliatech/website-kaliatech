import Vue from 'vue'
import BlogPost from '~/components/BlogPost.vue'
import ProjectDetail from '~/components/ProjectDetail.vue'

Vue.component('BlogPost', BlogPost)
Vue.component('ProjectDetail', ProjectDetail)

// NOTE: [20201130] - This file is no longer required due to nuxt's auto component registation.
