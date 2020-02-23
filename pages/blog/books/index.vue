<template>
  <div>
    <div class="container books">
      <div class="row">
        <div class="col-12">
          <h1 class="mb-3">Books</h1>
          <p class="lead">
            Books I'm reading or have recently read according to
            <a href="https://www.goodreads.com/user/show/41777790-josh-sanderson">GoodReads</a>
            .
          </p>
          <p>
            These are primarily for enjoyment so that I don't have to think too much. I probably more read more
            technical documentation than fiction, but that reading tends to be scattered across the Internet and on
            services like
            <a href="http://www.safaribooksonline.com">SafariBooksOnline</a>
            .
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <h3>Currently Reading</h3>

          <div id="gr_grid_widget_1548192416">
            <div class="gr_grid_container" />
          </div>
          <script
            charset="utf-8"
            src="https://www.goodreads.com/review/grid_widget/41777790.Josh's%20currently-reading%20book%20montage?cover_size=medium&hide_link=true&hide_title=true&num_books=200&order=d&shelf=currently-reading&sort=date_read&widget_id=1548192416"
            type="text/javascript"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <h3>Recently Read</h3>

          <div id="gr_grid_widget_1548192044">
            <div class="gr_grid_container" />
          </div>
          <script
            charset="utf-8"
            src="https://www.goodreads.com/review/grid_widget/41777790.Recently%20Read?cover_size=medium&hide_link=&hide_title=true&num_books=200&order=d&shelf=read&sort=date_read&widget_id=1548192044"
            type="text/javascript"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  head() {
    return {
      title: 'Books | Kaliatech'
    }
  }
}
</script>
<style lang="scss">
.books a:link,
.books a:visited {
  font-weight: bold;
}

.gr_grid_container {
  /* customize grid container div here. eg: width: 500px; */
}

.gr_grid_book_container {
  /* customize book cover container div here */
  float: left;
  width: 102px;
  height: 160px;
  margin: 2px 2px;
  overflow: hidden;
}
</style>
