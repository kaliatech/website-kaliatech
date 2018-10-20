<template>
  <div class="container page-archive">
    <div class="row">
      <div class="col-12">
        <h1>Archive</h1>
        <p class="lead">
          Old Websites & Projects
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3>~2010-2018
          <small>(these are snapshots, so not all links and functionality will work)</small>
        </h3>
        <ul>
          <li>
            <a href="https://archive.kaliatech.com/2018/websites/www.jgstechnical.com/index.html">jgstechnical.com</a>
            - Previous business website
          </li>
          <li>
            <a href="https://archive.kaliatech.com/2018/websites/www.kaliatech.com/index.html">kaliatech.com</a> -
            Previous personal website. Wordpress with custom themes and plugins.
            <ul>
              <li>
                <a href="https://archive.kaliatech.com/2018/websites/blog.kaliatech.com/index.html">blog</a> - I
                stored links I found particular interesting here for years.
              </li>
              <li>
                <!--@formatter:off-->
                <a href="https://archive.kaliatech.com/2018/websites/blog.kaliatech.com/music-videos/index.html">music
                videos</a> - Favorite music videos
                <!--@formatter:on-->
              </li>
            </ul>
          </li>
          <li>
            <a href="http://archive.kaliatech.com/2018/websites/www.flightregression.com/index.html">flightregression.com</a>
            - Old project website. Became defunct once google decided to discontinue their Google Earth Plugin.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  head () {
    return {
      title: 'Archive | Kaliatech'
    }
  },
  data () {
    return {}
  },
  mounted () {
  }
}
</script>
<style lang="scss">
  .page-archive a:link, .page-archive a:visited {
    font-weight: bold;
  }
</style>
