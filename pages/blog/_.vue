<template>
  <div>
    <div class="container blog-post">
      <div class="row">
        <div class="col-xl-10">
          <small class="dateline">{{ blogPost.createdAt | date }}</small>
          <h1 class="mb-3">{{ blogPost.title }}</h1>
          <nuxt-content :document="blogPost" />
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <nuxt-link to="/blog">&lt;&lt; back to index</nuxt-link>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/components/prism-sql.js'

import BlogPostPhotos from '~/components/BlogPostPhotos'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'blog-post-photos': BlogPostPhotos,
  },
  async asyncData(ctx) {
    // const page = await ctx.$content('blog/' + ctx.params.pathMatch).fetch()
    const page = await ctx.$content('blogposts', { deep: true }).where({ slug: ctx.params.pathMatch }).fetch()

    if (!page.length > 0) {
      throw ctx.error({ statusCode: 404, message: 'Blog post not found' })
    }

    return {
      blogPost: page[0],
    }
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
