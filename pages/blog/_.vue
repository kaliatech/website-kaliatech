<template>
  <div>
    <div class="container blog-post">
      <div class="row">
        <div class="col-12">
          <h1 class="mb-0">{{ blogPost.title }}</h1>
          <small class="dateline">{{ blogPost.createdAt | date }}</small>
          <nuxt-content class="mt-3" :document="blogPost" />
        </div>
      </div>
    </div>

    <blog-prev-next :prev="prevBlogPost" :next="nextBlogPost" :category="blogPost.category"></blog-prev-next>

    <client-only>
      <div class="container mt-5">
        <hr />
        <h2>Comments</h2>
        <div class="row">
          <div class="col-12">
            <fast-comments-vue :config="{ tenantId: '9R8olmXD_' }" />
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/components/prism-sql.js'

import FastCommentsVue from 'fastcomments-vue'

// Make components available to content markdown pages (without making the components global)
import BlogPostToc from '~/components/BlogPostToc'
import BlogPostPhotos from '~/components/BlogPostPhotos'
import BlogPostPhotosSimple from '~/components/BlogPostPhotosSimple'
import KaliatechPhotos from '~/components/KaliatechPhotos'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'blog-post-toc': BlogPostToc,
    // eslint-disable-next-line vue/no-unused-components
    'blog-post-photos': BlogPostPhotos,
    // eslint-disable-next-line vue/no-unused-components
    'blog-post-photos-simple': BlogPostPhotosSimple,
    // eslint-disable-next-line vue/no-unused-components
    'kaliatech-photos': KaliatechPhotos,
    'fast-comments-vue': FastCommentsVue,
  },
  async asyncData(ctx) {
    // const page = await ctx.$content('blog/' + ctx.params.pathMatch).fetch()
    // const page = await ctx.$content('blogposts', { deep: true }).where({ slug: ctx.params.pathMatch }).fetch()
    const page = await ctx
      .$content('blogposts', { deep: true })
      .where({ slug: { $regex: `.*${ctx.params.pathMatch.split('/').pop()}$` } })
      .sortBy('createdAt', 'desc')
      .fetch()

    if (!page.length > 0) {
      // ctx.redirect('/blog', { error: `Blog post not found.` })
      ctx.error({ statusCode: 404, message: 'Blog post not found' })
      return
    }

    const blogPost = page[0]

    const [prevBlogPost, nextBlogPost] = await ctx
      .$content('blogposts', { deep: true })
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(blogPost.slug)
      .fetch()

    return {
      blogPost,
      prevBlogPost,
      nextBlogPost,
    }
  },
  data() {
    return {
      blogPost: {
        title: '',
        description: '',
        createdAt: '',
        category: '',
        slug: '',
      },
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.blogPost.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:description', property: 'og:description', content: this.blogPost.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.blogPost.description },
      ],
    }
  },
  computed: {
    title() {
      return this.blogPost.title + ' | Blog | Kaliatech'
    },
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>
<style lang="scss">
div.functionalPrintEntry {
  margin-bottom: 2em;
}

div.functionalPrintEntry img {
  border: solid 2px #212529;
}

.blog-post a:link,
.blog-post a:visited {
  font-weight: bold;
}

.blog-post .dateline {
}

.nuxt-content > ul > li {
  margin-bottom: 1rem;
}

.nuxt-content > ul li p {
  margin-bottom: 0;
}

div.quote-block {
  p.quote {
    font-style: italic;
  }
}

// --- CSS for prism line numbers
// https://github.com/nuxt/content/issues/28

pre[class*='language-'].line-numbers {
  position: relative;
  padding-left: 3.8em;
  counter-reset: linenumber;
}

pre[class*='language-'].line-numbers > code {
  position: relative;
  white-space: inherit;
}

.line-numbers .line-numbers-rows {
  position: absolute;
  pointer-events: none;
  top: 0;
  font-size: 100%;
  left: -3.8em;
  width: 3em; /* works for line-numbers below 1000 lines */
  letter-spacing: -1px;
  border-right: 1px solid #999;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.line-numbers-rows > span {
  display: block;
  counter-increment: linenumber;
}

.line-numbers-rows > span:before {
  content: counter(linenumber);
  color: #999;
  display: block;
  padding-right: 0.8em;
  text-align: right;
}

// ---
</style>
