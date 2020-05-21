<template>
  <div class="container mt-0">
    <div class="jumbotron">
      <img alt="spaceman" src="~/assets/i/spaceman.gif" style="float: left; margin-left: 0rem;" width="117" />

      <div style="margin-left: 150px;">
        <h1 class="display-4">Kaliatech</h1>
        <p class="lead">Online space for Josh's random interests.</p>

        <hr class="my-4" />

        <div class="row">
          <div class="col">
            <div class="home-btns">
              <b-btn class="home-btns" to="/blog/" variant="primary">Blog </b-btn>
            </div>
            <div class="home-btns">
              <b-btn class="home-btns" to="/projects/" variant="primary">Projects </b-btn>
            </div>
            <div class="home-btns">
              <b-btn class="home-btns" to="/photos/" variant="primary">Photos </b-btn>
            </div>
            <div class="home-btns">
              <b-btn class="home-btns" to="/bookmarks/" variant="primary">Bookmarks </b-btn>
            </div>
            <div class="home-btns">
              <b-btn class="home-btns" to="/archive/" variant="primary">Archive </b-btn>
            </div>
            <div class="home-btns">
              <b-btn class="home-btns" to="/contact/" variant="primary">Contact </b-btn>
            </div>
          </div>
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
  mounted() {},
  head() {
    return {
      title: 'Kaliatech',
      meta: [{ hid: 'description', name: 'description', content: 'Online space.' }]
    }
  }
}
</script>
<style lang="scss">
@import '~/assets/scss/main.scss';

.bg {
  background-color: rgb(90, 90, 100);
}

div.card-body {
  color: #2c4256;
  padding: 0.25em;
  background-color: transparent;
}

div.card {
  background-color: #e1ebff;
}

div.experience-card {
  margin-bottom: 2.5rem;
}

.card-title {
  background-color: #2c4256;
  color: #eceeef;
  padding: 0.5rem;
  text-align: left;
}

.jumbotron {
  margin-bottom: 1em;
}

a.home-btns {
  width: 7rem;
  padding-right: 1rem;
}

div.home-btns {
  display: inline;
}

a.home-btns {
  margin-bottom: 0.5rem;
}

/*  @include media-breakpoint-down(xs) {
    .jumbotron h1 {
      font-size: $font-size-base * 2;
    }
  }*/
</style>
