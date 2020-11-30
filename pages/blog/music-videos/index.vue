<template>
  <div>
    <div class="container music-videos">
      <div class="row">
        <div class="col-12">
          <h1 class="mb-3">Music Videos</h1>
          <p class="lead">An ongoing collection of music videos that I like.</p>
          <p>I like them for many different reasons. A ‘*’ indicates an exceptionally good video.</p>
          <p>These are roughly listed in order as I come across them, with the most recent at the top.</p>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div :key="vid.title" class="mt-2" v-for="vid in videos">
            <a :href="vid.url"><span v-text="vid.title" /></a>
            - <span v-text="vid.artist" />
            <!-- eslint-disable-next-line -->
            <span v-html="vid.comment" v-if="vid.comment" /> <br v-if="vid.break" />
            <br v-if="vid.break" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videos: [
        {
          title: "I Feel Like I'm Drowning",
          artist: 'Two Feet',
          url: 'https://www.youtube.com/watch?v=i_WTHkBuqbg',
        },
        {
          title: 'Ze Huilt Maar Ze Lacht',
          artist: 'Maan',
          url: 'https://www.youtube.com/watch?v=j-HkuKxTYEU',
        },
        {
          title: 'Something About You',
          artist: 'Elderbrook & Rudimental',
          url: 'https://www.youtube.com/watch?v=N1EhXF1lskA',
          comment: '**',
        },
        {
          title: 'Beautiful People (feat. Khalid)',
          artist: 'Ed Sheeran',
          url: 'https://www.youtube.com/watch?v=mj0XInqZMHY',
          comment: '*',
        },
        {
          title: 'This Is America',
          artist: 'Childish Gambino',
          url: 'https://www.youtube.com/watch?v=VYOjWnS4cMY',
        },
        {
          title: 'Circles',
          artist: 'Post Malone',
          url: 'https://www.youtube.com/watch?v=wXhTHyIgQ_U',
          break: true,
        },
        {
          title: 'Wicked Game',
          artist: 'Theory of a Deadman',
          url: 'https://www.youtube.com/watch?v=h3itLccui18',
        },
        {
          title: 'Dear Winter',
          artist: 'AJR',
          url: 'https://www.youtube.com/watch?v=ZUSI4n_74LA',
        },
        {
          title: 'Move On',
          artist: 'Mike Posner',
          url: 'https://www.youtube.com/watch?v=A2CwZ1UTSSA',
          break: true,
        },

        {
          title: 'Someone I Used To Know',
          artist: 'Zac Brown Band',
          url: 'https://www.youtube.com/watch?v=IdqEaU0uSPI',
          comment: '*',
        },
        {
          title: 'Shallow (A Star Is Born)',
          artist: 'Lady Gaga, Bradley Cooper',
          url: 'https://www.youtube.com/watch?v=bo_efYhYU2A',
          comment: '*',
        },
        {
          title: 'Nothing Breaks Like a Heart',
          artist: 'Mark Ronson ft. Miley Cyrus',
          url: 'https://www.youtube.com/watch?v=A9hcJgtnm6Q',
          break: true,
        },

        {
          title: 'Burn Out',
          artist: 'Midland',
          url: 'https://www.youtube.com/watch?v=YBCrkFB8nvc',
        },
        {
          title: 'Irish Way',
          artist: "The O'Reillys and the Paddyhats",
          url: 'https://www.youtube.com/watch?v=c2bEwZR7g1Y',
          break: true,
        },
        {
          title: 'First Time',
          artist: 'KYGO & Ellie Goulding',
          url: 'https://www.youtube.com/watch?v=QgsrAy8oFIo',
        },
        {
          url: 'https://www.youtube.com/watch?v=gsGn1dzITD0',
          title: 'Space For Two',
          artist: 'Mr. Probz',
        },
        {
          title: 'Quien Sabe',
          artist: 'Natti Natasha',
          url: 'https://www.youtube.com/watch?v=mG0b8IAJvts',
          comment:
            '(<a href="https://lyricstranslate.com/en/%C2%BFquien-sabe-who-knows.html">lyrics</a> w/ English translation)',
        },
        {
          url: 'https://www.youtube.com/a?v=QPTnMVvfH-w',
          title: 'Asphyxiation',
          artist: 'AutoErotique',
          break: true,
        },
        {
          url: 'https://www.youtube.com/watch?v=Nhn0hcwGzTE',
          title: "Cold Ain't For Me",
          artist: 'Oceans',
        },
        {
          url: 'https://www.youtube.com/watch?v=d8OI9FllKfg',
          title: '(I Just) Died In Your Arms ',
          artist: 'Komodo Remix',
          break: true,
        },
        {
          url: 'https://www.youtube.com/watch?v=rVZzQGRTT7c',
          title: 'Moonlight Kissed',
          artist: 'Poets of the Fall*',
        },
        {
          url: 'https://www.youtube.com/watch?v=di7NMssrqsE',
          title: 'Daze',
          artist: 'Poets of the Fall',
        },
        {
          url: 'https://www.youtube.com/watch?v=bp0AHQooVSY',
          title: 'Cradled in Love',
          artist: 'Poets of the Fall',
          break: true,
        },
        {
          url: 'https://www.youtube.com/watch?v=k2qgadSvNyU',
          title: 'New Rules',
          artist: 'Dua Lipa',
        },
        {
          url: 'https://www.youtube.com/watch?v=abZ0PXadpB0',
          title: 'Fairy Dust',
          artist: 'Tove Lo',
        },
        {
          url: 'https://www.youtube.com/watch?v=u9Dg-g7t2l4',
          title: 'The Sound Of Silence',
          artist: 'Disturbed',
          break: true,
        },
        {
          url: 'https://www.youtube.com/watch?v=My2FRPA3Gf8',
          title: 'Wrecking Ball',
          artist: 'Miley Cyrus*',
        },
        {
          url: 'https://www.youtube.com/watch?v=foE1mO2yM04',
          title: 'I Took A Pill In Ibiza',
          artist: 'Mike Posner  (Seeb Remix)',
        },
        {
          url: 'https://www.youtube.com/watch?v=1tw06GEwR-I',
          title: 'I Took A Pill In Ibiza',
          artist: 'Mike Posner',
          comment: '(original, performed on Conan)',
        },
        {
          url: 'https://www.youtube.com/watch?v=oyEuk8j8imI',
          title: 'Love Yourself',
          artist: 'Just Bieber*',
        },
        {
          url: 'https://www.youtube.com/watch?v=hi4pzKvuEQM',
          title: 'Gold',
          artist: 'Chet Faker *',
          break: true,
        },
        {
          url: 'https://www.youtube.com/watch?v=Q9WZtxRWieM',
          title: 'In My Mind',
          artist: 'Amanda Palmer',
          break: true,
        },
        {
          url: 'https://www.youtube.com/watch?v=TFXlWfzW9Uo',
          title: 'Sunlight',
          artist: 'The Magician ft. Years & Years',
        },
        {
          url: 'https://www.youtube.com/watch?v=FHCYHldJi_g',
          title: 'I Got U',
          artist: 'Duke Dumont ft. Jax Jones',
        },
        {
          url: 'https://www.youtube.com/watch?v=2vjPBrBU-TM',
          title: 'Chandelier',
          artist: 'Sia',
          break: true,
        },
        {
          url: 'https://www.youtube.com/watch?v=kwxIFk3tZSI',
          title: 'Take Me To Church',
          artist: 'Kiesza  (Hozier Cover) *',
        },
        {
          url: 'https://www.youtube.com/watch?v=pUjE9H8QlA4',
          title: 'Waves',
          artist: 'Mr. Probz (Robin Schulz Remix) *',
        },
        {
          url: 'https://www.youtube.com/watch?v=Vnoz5uBEWOA',
          title: 'Hideaway',
          artist: 'Kiesza',
        },
        {
          url: 'https://www.youtube.com/watch?v=MDUoSpDKwXk',
          title: 'Giant In My Heart',
          artist: 'Kiesza',
        },
        {
          url: 'https://www.youtube.com/watch?v=nS6SzfF6p_g',
          title: 'Peace',
          artist: 'O.A.R.',
        },
        {
          url: 'https://www.youtube.com/watch?v=bpOSxM0rNPM',
          title: 'Do I Wanna Know',
          artist: 'Arctic Monkeys',
        },
        {
          url: 'https://www.youtube.com/watch?v=f7ld-3nZUxA',
          title: 'Pills N Potions',
          artist: 'Nicki Minaj',
          break: true,
        },
        {
          url: 'https://www.youtube.com/watch?v=kwHACITShSI',
          title: 'How Will I Know',
          artist: 'Sam Smith (Whitney Houston Cover)',
          break: true,
        },
        {
          url: 'http://www.youtube.com/watch?v=bg1sT4ILG0w',
          title: 'Am I Wrong',
          artist: 'Nico & Vinz',
        },
        {
          url: 'https://www.youtube.com/watch?v=1UX9Q5ApVqs',
          title: 'In Your Arms',
          artist: 'Nico & Vinz',
        },
        {
          url: 'https://www.youtube.com/watch?v=ppNC0uAaCv0',
          title: 'Night By Night',
          artist: 'Chromeo',
          break: true,
        },
        {
          url: 'http://www.youtube.com/watch?v=Qc9c12q3mrc',
          title: 'Addicted to You',
          artist: 'Avicii',
        },
        {
          url: 'https://www.youtube.com/watch?v=pZ12_E5R3qc',
          title: 'Partition',
          artist: 'Beyoncé',
          break: true,
        },
        {
          url: 'https://www.youtube.com/watch?v=mZ02alEkbLw',
          title: 'Pedals',
          artist: 'Conte',
        },
        {
          url: 'https://www.youtube.com/watch?v=3MteSlpxCpo',
          title: 'Daft Punk Mix',
          artist: 'Pentatonix *',
          break: true,
        },
        {
          url: 'http://www.youtube.com/watch?v=hRVOOwFNp5U',
          title: 'Ill Mind of Hopsin 5',
          artist: 'Hopsin',
        },
        {
          url: 'http://www.youtube.com/watch?v=wTW-Pe4IsKQ',
          title: 'Look for Love',
          artist: 'DJ Sammy (Jose De Mara Remix)',
          break: true,
        },
        {
          url: 'http://www.youtube.com/watch?v=QhFsKCF56xU',
          title: 'The Killing Type',
          artist: 'Amanda Palmer & The Grand Theft Orchestra',
        },
        {
          url: 'http://www.youtube.com/watch?v=Lg31XQR22zg',
          title: 'Better Than I Know Myself',
          artist: 'Adam Lambert',
          break: true,
        },
        {
          url: 'http://www.youtube.com/watch?v=bdRUQWVGENo',
          title: 'Home Again',
          artist: 'Elton John',
        },
        {
          url: 'http://www.youtube.com/watch?v=IcrbM1l_BoI',
          title: 'Wake Me Up',
          artist: 'Avicii *',
        },
        {
          url: 'http://www.youtube.com/watch?v=BR_DFMUzX4E',
          title: 'This Is What It Feels Like',
          artist: 'Armin van Buuren feat. Trevor Guthrie',
        },
        {
          url: 'http://www.youtube.com/watch?v=IxxstCcJlsc',
          title: 'Clarity',
          artist: 'Zed ft. Foxes',
        },
        {
          url: 'http://www.youtube.com/watch?v=0mVck88W01I',
          title: 'Live for the Night',
          artist: 'Krewella',
          break: true,
        },
        {
          url: 'https://www.youtube.com/watch?v=LXO-jKksQkM',
          title: 'Pumped Up Kicks',
          artist: 'Foster The People (unofficial dubstep/dance video)',
        },
        {
          url: 'http://www.youtube.com/watch?v=2zNSgSzhBfM',
          title: "Can't Hold Us",
          artist: 'Macklemore & Ryan Lewis ft. Ray Dalton',
        },
        {
          url: 'http://www.youtube.com/watch?v=8PLifPUIuic',
          title: 'White Walls',
          artist: 'Macklemore & Ryan Lews ft. ScHoolboy Q and Hollis',
          break: true,
        },
        {
          url: 'http://www.youtube.com/watch?v=sxDdEPED0h8',
          title: 'National Anthem',
          artist: 'Lana Del Ray',
        },
        {
          url: 'http://www.youtube.com/watch?v=o_1aF54DO60',
          title: 'Young and Beautiful',
          artist: 'Lana Del Ray',
        },
        {
          url: 'https://soundcloud.com/kaskade/lana-del-rey-young-and',
          title: 'Kaskade Mix',
          artist: 'Lana Del Ray',
          comments: '*awesome',
        },
        {
          url: 'http://www.youtube.com/watch?v=TdrL3QxjyVw',
          title: 'Summertime Sadness',
          artist: 'Lana Del Ray',
        },
        {
          url: 'http://www.youtube.com/watch?v=JRWox-i6aAk',
          title: 'Blue Jeans',
          artist: 'Lana Del Ray',
          break: true,
        },
        {
          url: 'https://vimeo.com/2815687',
          title: 'Death of Me',
          artist: 'Red',
        },
        {
          url: 'http://www.youtube.com/watch?v=LmXaaEvnnOQ',
          title: 'Bruises',
          artist: 'Train ft. Ashley Monroe',
        },
        {
          url: 'https://vimeo.com/58879954',
          title: 'My Recurring Dream',
          artist: 'Cold Mailman',
        },
        {
          url: 'http://www.youtube.com/watch?v=QhxPBrxxaqc',
          title: 'C’mon Let Me Ride',
          artist: 'Skylar Grey ft. Eminem',
        },
        {
          url: 'http://www.youtube.com/watch?v=Im53_2a-VCw',
          title: 'Dancing Shoes',
          artist: 'Dev',
        },
        {
          url: 'http://www.youtube.com/watch?v=IsUsVbTj2AY',
          title: 'Suite & Tie',
          artist: 'Justin Timberlake',
          break: true,
        },
        {
          url: 'http://www.elvisduran.com/player/?mid=23222987',
          title: 'Glow',
          artist: 'Nikki Williams (live on elvis duran show)',
        },
        {
          url: 'http://www.vevo.com/watch/robin-thicke/blurred-lines-unrated-version/USUV71300526',
          title: 'Blurred Lines',
          artist: 'Robin Thicke ft. Pharrell Williams & T.I  (Unrated, NSFW) *',
        },
        {
          url: 'http://www.vevo.com/watch/robin-thicke/blurred-lines/USUV71300454',
          title: 'Blurred Lines',
          artist: 'Robin Thicke ft. Pharrell Williams & T.I  (Slightly less NSFW)',
          break: true,
        },
        {
          url: 'http://www.youtube.com/watch?v=6Lh7Zg8WXwU',
          title: 'I Could Be The One',
          artist: 'Avicii vs Nicky Romero *',
        },
        {
          url: 'http://www.youtube.com/watch?v=uuZE_IRwLNI',
          title: 'Mirrors',
          artist: 'Justin Timberlake *',
        },
        {
          url: 'http://www.youtube.com/watch?v=AQBe_pibFCo',
          title: '505',
          artist: 'Artic Monkeys (no video, but excellent song)',
        },
        {
          url: 'http://www.youtube.com/watch?v=cmSbXsFE3l8',
          title: 'Cups',
          artist: 'Anna Kendrick (Pitch Perfect’s “When I’m Gone”',
          break: true,
        },
        {
          url: 'http://www.youtube.com/watch?v=keBkITSkLlM',
          title: 'Representin',
          artist: 'Ludacris ft. Kelly Rowland',
        },
        {
          url: 'https://vimeo.com/27998081',
          title: 'Sweet Exchange',
          artist: 'Lady Strangelove',
        },
        {
          url: 'https://vimeo.com/64310817',
          title: 'Fade Away',
          artist: 'Vitalic',
        },
        {
          url: 'https://vimeo.com/27779348',
          title: 'Holocene (Unofficial Music Video) ',
          artist: 'Bon Iver',
          break: true,
        },
        {
          url: 'http://www.youtube.com/watch?v=Qsy7kJyizoc',
          title: 'Bom Bom',
          artist: 'Sam and the Womp *',
        },
        {
          url: 'http://www.youtube.com/watch?v=aNzCDt2eidg',
          title: 'Skinny Love ',
          artist: 'Birdy (Official video, the unofficial was better)',
        },
        {
          url: 'https://vimeo.com/50986623',
          title: 'Pretender (Alternate Steve Jobs)',
          artist: 'Miike Snow',
          break: true,
        },
        {
          url: 'http://www.youtube.com/watch?v=0HFYo1lenI0',
          title: 'Turn it Down',
          artist: 'Kaskade with Rebecca & Fiona *',
        },
        {
          url: 'http://www.youtube.com/watch?v=hunha8UtqCk',
          title: 'Push and Shove ',
          artist: '– No Doubt',
        },
        {
          url: 'http://www.youtube.com/watch?v=k0BWlvnBmIE',
          title: 'Wide Awake',
          artist: 'Katy Perry',
        },
        {
          url: 'http://www.youtube.com/watch?v=BN5dQvYGBdE',
          title: 'The Cataracs',
          artist: 'All You ft. Waka Flocka Flame & Kaskade (Explicit …and wot!?)',
        },
        {
          url: 'http://www.youtube.com/watch?v=_OLUSELxFok',
          title: '4 in the morning',
          artist: 'Gwen Stefani',
        },
        {
          url: 'http://www.youtube.com/watch?v=hB4ZrgVKA-M&list=LPFWgtr_MWyAE',
          title: 'Maresias',
          artist: 'Robert Miles (music only)',
          break: true,
        },
        {
          url: 'http://www.youtube.com/watch?v=cZCadqQY-Lw',
          title: 'Want It Back',
          artist: 'Amanda Palmer & The Grand Theft Orchestra  (Uncensored)',
          break: true,
        },
        {
          url: 'http://www.youtube.com/watch?v=K2wt0Cj49EE',
          title: 'Room for Happiness',
          artist: 'Kaskade ft. Skylar Grey,',
        },
        {
          url: 'http://www.youtube.com/watch?v=psh4ArLz4i8',
          title: 'Play for Keeps',
          artist: 'B.o.B *',
        },
        {
          url: 'http://www.youtube.com/watch?v=daS6on_N7LE',
          title: 'Too Close – Alex Clare',
          artist: ' (2nd official video, 1st one is pointless)',
        },
        {
          url: 'http://www.youtube.com/watch?v=CFWX0hWCbng',
          title: 'Blow',
          artist: 'Ke$ha *',
          break: true,
        },
        {
          url: 'http://www.youtube.com/watch?v=jd4b6-1Na38',
          title: 'Criminal (Cover)',
          artist: 'Garret Borns',
        },
        {
          url: 'http://www.youtube.com/watch?v=5XjNlpe7hII',
          title: 'Good Intent',
          artist: 'Kimbra *',
        },
        {
          url: 'http://www.youtube.com/watch?v=rBxmidwDy2Y',
          title: 'Settle Down',
          artist: 'Kimbra',
        },
        {
          url: 'http://www.youtube.com/watch?v=elyk9MBY72U',
          title: 'Cameo Lover',
          artist: 'Kimbra *',
        },
        {
          url: 'http://www.youtube.com/watch?v=6i1mr9amqeg',
          title: 'Plain Gold Ring',
          artist: 'Kimbra – Live at Sing Sing Studios (wow) *',
        },
        {
          url: 'http://www.youtube.com/watch?v=2bF6QipA3iQ',
          title: 'Two Way Street',
          artist: 'Kimbra - Live at Sing Sing Studios',
          break: true,
        },
        {
          url: 'http://www.youtube.com/watch?v=4PkcfQtibmU',
          title: 'Walk',
          artist: 'Foo Fighters *',
        },
        {
          url: 'http://www.youtube.com/watch?v=X9uk9IcoQ0w',
          title: 'Devil Went Down to Georgia',
          artist: 'Primus Version',
        },
        {
          url: 'http://www.youtube.com/watch?v=cDm_ZHyYTrg',
          title: 'Original',
          artist: ' …if not familiar',
        },
        {
          url: 'http://www.youtube.com/watch?v=wagn8Wrmzuc',
          title: 'Judas',
          artist: 'Lady Gaga **',
        },
        {
          url: 'http://www.youtube.com/watch?v=YVw7eJ0vGfM',
          title: 'Turn Me On',
          artist: 'David Guetta ft. Nicki Minaj *',
          break: true,
        },
        {
          url: 'http://www.youtube.com/watch?v=PDboaDrHGbA',
          title: 'Greyhound',
          artist: 'Swedish House Mafia **',
        },
        {
          url: 'http://www.youtube.com/watch?v=1y6smkh6c-0',
          title: "Don't You Worry Child",
          artist: 'Swedish House Mafia ft. John Martin *',
        },
        {
          url: 'http://www.youtube.com/watch?v=LCH1AsUydSc',
          title: 'Miami 2 Ibiza ft. Tinie Tempah',
          artist: 'Swedish House Mafia',
          break: true,
        },
        {
          url: 'http://www.youtube.com/watch?v=8UVNT4wvIGY',
          title: 'Somebody that I Used to Know',
          artist: 'Goyte ft. Kimbra *',
        },
        {
          url: 'https://www.youtube.com/watch?v=4L1SpaGNlwQ',
          title: 'Feel What You Want',
          artist: 'Phonique ft. Rebecca **',
          break: true,
        },
        {
          url: 'http://www.youtube.com/watch?v=Qz8yJogJEEM',
          title: 'Santa and I know It',
          artist: 'Key of Awesome (Parody)',
        },
        {
          url: 'http://www.youtube.com/watch?v=VyD8hkSbCRs',
          title: 'Moves Like Jagger',
          artist: 'Key of Awesome (Parody)',
          break: true,
        },
        {
          url: 'http://www.youtube.com/watch?v=-4Yz_bUTlbo',
          title: 'Fitz and the Tantrums',
          artist: 'Don’t Gotta Work It Out *',
        },
        {
          url: 'http://www.youtube.com/watch?v=Nv644ipg2Ss',
          title: 'Robyn ',
          artist: '– Call  Your Girlfriend *',
        },
        {
          url: 'http://www.youtube.com/watch?v=g4By_cfI_1g',
          title: 'Natalia Kills',
          artist: 'Mirrors *',
        },
        {
          url: 'http://www.youtube.com/watch?v=9ha5ujHnYXg',
          title: 'David Guetta',
          artist: 'Little Bad Girl ft. Taio Cruz, Ludacris *',
        },
        {
          url: 'http://www.youtube.com/watch?v=4UGSPx8nJ-U',
          title: 'The Cab',
          artist: 'Bad *',
        },
        {
          url: 'http://www.youtube.com/watch?v=KQ6zr6kCPj8',
          title: 'Party Rock Anthem',
          artist: 'LMFAO *',
          break: true,
        },
        {
          url: 'http://www.vevo.com/watch/katy-perry/firework/USCA31000112',
          title: 'Firework',
          artist: 'Katy Perry',
        },
        {
          url: 'http://www.vevo.com/watch/rodrigo-y-gabriela/diablo-rojo/USATO0700029',
          title: 'Diablo Rojo',
          artist: 'Rodrigo y Gabriela *',
        },
        {
          url: 'http://www.youtube.com/watch?v=NbiCAia9e_g',
          title: 'The Weary Kind ',
          artist: 'Ryan Bing (Boring video, but good music and a great movie.)',
        },
        {
          url: 'http://www.vevo.com/watch/eminem/love-the-way-you-lie/USUV71001543',
          title: 'Love the Way You Lie',
          artist: 'Eminem/Rihanna *',
        },
        {
          url: 'http://www.youtube.com/watch?v=qrO4YZeyl0I',
          title: 'Bad Romance',
          artist: 'Lady Gaga *',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Music Videos | Kaliatech',
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
