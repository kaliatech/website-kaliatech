<template>
  <div>
    <div class="container music-videos">
      <div class="row">
        <div class="col-12">
          <h1 class="mb-3">Movies</h1>
          <p class="lead">
            Top favorite movies. I might have forgotten a few.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div v-for="vid in videos" :key="vid.title" class="mt-2">
            <a :href="vid.url"><span v-text="vid.title" /></a>
            (<span v-text="vid.artist" />)
            <!-- eslint-disable-next-line -->
            <span v-if="vid.comment" v-html="vid.comment" /> <br v-if="vid.break" /> <br v-if="vid.break" />
          </div>
        </div>
      </div>

      <div class="row pt-3">
        <div class="col-12">
          <p>
            Work-in-progress:
          </p>
          <pre>
          The Fifth Element,

          Song of the Sea,
          Book of Kells,

          Crouching Tiger, Hidden Dragon,
          House of Flying Daggers,

          Fantastic Mr Fox,
          Hero,
          Reality Bites,
          Last of the Mohicans
        </pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Movies | Kaliatech'
    }
  },
  data() {
    return {
      videos: [
        {
          title: 'Lost in Translation',
          artist: '2003',
          url: 'https://www.rottentomatoes.com/m/lost_in_translation/',
        },
        {
          title: 'The Secret Life of Walter Mitty',
          artist: '2015',
          url: 'https://www.rottentomatoes.com/m/the_secret_life_of_walter_mitty_2013/',
        },
        {
          title: 'Casshern',
          artist: '2004',
          url: 'https://www.rottentomatoes.com/m/10004734_casshern/',
        },
        {
          title: 'Gladiator',
          artist: '2000',
          url: 'https://www.rottentomatoes.com/m/gladiator/',
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.music-videos a:link, .music-videos a:visited {
  font-weight: bold;
}
</style>

