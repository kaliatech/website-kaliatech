<template>
  <BlogPost title="SQL to select filename component of path" date="2010-12-06">
    <p>
      The following works on MySQL to extract base filename component of a complete file path.
    </p>

    <pre class="line-numbers">
        <code class="language-sql">
          SELECT REVERSE(
            SUBSTRING(
              REVERSE(filepath),1,
                LOCATE(&quot;/&quot;,REVERSE(filepath)
              ) - 1
           )
          ) as basename
          FROM Table
        </code>
    </pre>
  </BlogPost>
</template>
<script>
import Prism from 'prismjs'
import '~/node_modules/prismjs/plugins/line-numbers/prism-line-numbers'
import '~/node_modules/prismjs/components/prism-sql'

export default {
  head () {
    return {
      // script: [
      //   {src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/prism.min.js'},
      //   {src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/plugins/line-numbers/prism-line-numbers.min.js'}
      //
      // ],
      // link: [
      //   {
      //     rel: 'stylesheet',
      //     href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism-tomorrow.min.css'
      //   },
      //   {
      //     rel: 'stylesheet',
      //     href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/plugins/line-numbers/prism-line-numbers.css'
      //   }
      // ]
    }
  },
  mounted () {
    // setTimeout(() => {
    //   Prism.highlightAll();
    // });
    this.$nextTick(() => {
      Prism.highlightAll();
    })
  }
}
</script>
<style>
  @import '../../../node_modules/prismjs/themes/prism-tomorrow.css';
  @import '../../../node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css';
</style>
