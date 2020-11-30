<template>
  <BlogPost date="2020-05-20" title="3D Printer - Functional Prints">
    <div class="row">
      <div class="col">
        <p>
          One of my favorite subreddits is <a href="https://www.reddit.com/r/functionalprint/">/r/functionalprint</a>,
          where users showcase 3D prints that are useful. Here are some of my functional prints:
        </p>
      </div>
    </div>

    <div class="row functionalPrintEntry" :key="photo.srcA" v-for="photo in photos">
      <div class="col-12">
        <h2>{{ photo.title }}</h2>
        <!-- eslint-disable-next-line-->
        <p v-html="photo.descr"></p>
      </div>
      <div class="col-6">
        <figure class="figure">
          <a :href="photo.srcA">
            <video
              :src="photo.srcA"
              autoplay
              class="figure-img img-fluid"
              loop
              muted
              playsinline
              v-if="photo.type === 'video'"
            />
            <img :src="photo.srcA" class="figure-img img-fluid rounded" v-else />
          </a>
          <figcaption v-if="photo.captionA" class="figure-caption text-center">
            <!-- eslint-disable-next-line -->
            <span v-html="photo.captionA" />
          </figcaption>
        </figure>
      </div>
      <div class="col-6">
        <figure class="figure">
          <a :href="photo.srcB">
            <video
              :src="photo.srcB"
              autoplay
              class="figure-img img-fluid"
              loop
              muted
              playsinline
              v-if="photo.type === 'video'"
            />
            <img :src="photo.srcB" class="figure-img img-fluid rounded" v-else />
          </a>
          <figcaption v-if="photo.captionB" class="figure-caption text-center">
            <!-- eslint-disable-next-line -->
            <span v-html="photo.captionB" />
          </figcaption>
        </figure>
      </div>
    </div>
  </BlogPost>
</template>
<script>
export default {
  data() {
    return {
      photos: [
        {
          title: 'Tripod Handle',
          descr: 'Printed in TPU (soft and rubbery). The original had disintegrated.',
          srcA: '/i/blog/2020/0520-3dprint-functional/3dprint-functional-grip-alibre-b.jpg',
          srcB: '/i/blog/2020/0520-3dprint-functional/3dprint-functional-grip.jpg',
        },
        {
          title: 'Coffee Spoon Holder',
          descr: 'Created early on as a simple, and sort-of funny, test. It turned out to be quite useful.',
          srcA: '/i/blog/2020/0520-3dprint-functional/3dprint-functional-spoon-holder-fusion.jpg',
          srcB: '/i/blog/2020/0520-3dprint-functional/3dprint-functional-spoon-holder.jpg',
        },
        {
          title: 'Tripod Shoe with Ball Attachment Point',
          descr:
            'Useful for phone cameras and similar. Required a few iterations to strengthen ball mount post enough to stop breaking every time I dropped it. Switching to PETG helped.',
          srcA: '/i/blog/2020/0520-3dprint-functional/3dprint-functional-tripod-shoe-fusion.jpg',
          srcB: '/i/blog/2020/0520-3dprint-functional/3dprint-functional-tripod-shoe.jpg',
        },
        {
          title: 'Hitec 5055 Servo Mounts',
          descr:
            'Mini servos can be difficult to mount. This one is being used for <a href="https://hitecrcd.com/products/servos/micro-and-mini-servos/digital-micro-and-mini-servos/hs-5055mg-economy-metal-gear-feather-servo/product">Hitec-5055MG</a> servos on <a href="/projects/2019/0301-tankrobot-fpv/">TankRobot-FPV</a>',
          srcA: '/i/blog/2020/0520-3dprint-functional/3dprint-functional-hitec5055-mount-fusion.jpg',
          srcB: '/i/blog/2020/0520-3dprint-functional/3dprint-functional-hitec5055-mount.jpg',
        },
        {
          title: 'Bicycle Post Holders',
          descr: '',
          srcA: '/i/blog/2020/0520-3dprint-functional/3dprint-functional-bikeholder-fusion.jpg',
          srcB: '/i/blog/2020/0520-3dprint-functional/3dprint-functional-bikeholder.jpg',
        },
        {
          title: 'PPE Head Bands',
          descr:
            'Visor headbands for Personal Protective Equipment shields intended for emergency medical staff, first responders, and similar.  <a href="https://3dprint.nih.gov/discover/3dpx-013306">NIH approved model</a> by 3DVerkstan. My impressive neighbor, <a href="https://musings.danlj.org/about/">Michael K. Johnson</a>, was the organizer for our area. He handled assembly and shipping of everything I sent him, in addition to doing a serious amount of his own printing using his customized 3D printer(s).',
          srcA: '/i/blog/2020/0520-3dprint-functional/3dprint-functional-ppeheadband-slicer.jpg',
          srcB: '/i/blog/2020/0520-3dprint-functional/3dprint-functional-ppeheadband.jpg',
        },
      ],
    }
  },
}
</script>
<style>
div.functionalPrintEntry {
  margin-bottom: 2em;
}

div.functionalPrintEntry img {
  border: solid 2px #212529;
}
</style>
