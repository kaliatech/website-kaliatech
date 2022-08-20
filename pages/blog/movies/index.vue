<template>
  <div>
    <div class="container music-videos">
      <div class="row">
        <div class="col-12">
          <h1 class="mb-3">Movies</h1>
          <p class="lead">Favorite movies. I might have forgotten a few.</p>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div :key="vid.title" class="mt-2" v-for="vid in videos">
            <a :href="vid.url"><span v-text="vid.title" /></a>
            (<span v-text="vid.artist" />)
            <!-- eslint-disable-next-line -->
            <span v-html="vid.comment" v-if="vid.comment" /> <br v-if="vid.break" />
            <br v-if="vid.break" />
          </div>
        </div>
      </div>

      <!--      <div class="row pt-3">-->
      <!--        <div class="col-12">-->
      <!--          <p>-->
      <!--            Work-in-progress:-->
      <!--          </p>-->
      <!--          <pre>-->
      <!--          Hero,-->
      <!--          </pre>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>
<script>
export default {
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
          title: 'Casablanca',
          artist: '1942',
          url: 'https://www.rottentomatoes.com/m/1003707_casablanca',
        },
        {
          title: 'Song of the Sea',
          artist: '2014',
          url: 'https://www.rottentomatoes.com/m/song_of_the_sea_2014',
        },
        {
          title: 'The Secret of Kells',
          artist: '2010',
          url: 'https://www.rottentomatoes.com/m/the_secret_of_kells',
        },
        {
          title: 'RRR',
          artist: '2022',
          url: 'https://www.rottentomatoes.com/m/rrr',
        },        
        {
          title: 'Interstellar',
          artist: '2014',
          url: 'https://www.rottentomatoes.com/m/interstellar_2014',
        },
        {
          title: 'The Fifth Element',
          artist: '1997',
          url: 'https://www.rottentomatoes.com/m/fifth_element',
        },
        {
          title: 'Crouching Tiger, Hidden Dragon',
          artist: '2001',
          url: 'https://www.rottentomatoes.com/m/crouching_tiger_hidden_dragon',
        },
        {
          title: 'House of Flying Daggers',
          artist: '2004',
          url: 'https://www.rottentomatoes.com/m/house_of_flying_daggers',
        },
        {
          title: 'Casshern',
          artist: '2004',
          url: 'https://www.rottentomatoes.com/m/10004734_casshern/',
        },
        {
          title: 'Reality Bites',
          artist: '1993',
          url: 'https://www.rottentomatoes.com/m/reality_bites',
        },
        {
          title: 'White Christmas',
          artist: '1954',
          url: 'https://www.rottentomatoes.com/m/1023543_white_christmas',
        },
        {
          title: 'Gladiator',
          artist: '2000',
          url: 'https://www.rottentomatoes.com/m/gladiator/',
        },
        {
          title: 'Starship Troopers',
          artist: '1997',
          url: 'https://www.rottentomatoes.com/m/starship_troopers',
        },
        {
          title: 'Up in the Air',
          artist: '2009',
          url: 'https://www.rottentomatoes.com/m/up_in_the_air_2009',
        },
        {
          title: 'Fantastic Mr. Fox',
          artist: '2000',
          url: 'https://www.rottentomatoes.com/m/1197696_fantastic_mr_fox',
        },
        {
          title: 'The Last of the Mohicans',
          artist: '1992',
          url: 'https://www.rottentomatoes.com/m/1040678_last_of_the_mohicans',
        },
        {
          title: 'American Beauty',
          artist: '2002',
          url: 'https://www.rottentomatoes.com/m/american_beauty',
        },
        {
          title: 'The Book of Life',
          artist: '2014',
          url: 'https://www.rottentomatoes.com/m/the_book_of_life_2014',
        },
        {
          title: 'Wallace and Gromit - A Grand Day Out',
          artist: '1989',
          url: 'https://www.rottentomatoes.com/m/a_grand_day_out_with_wallace_and_gromit',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Movies | Kaliatech',
    }
  },
}
</script>
<style lang="scss">
.music-videos a:link,
.music-videos a:visited {
  font-weight: bold;
}
</style>
