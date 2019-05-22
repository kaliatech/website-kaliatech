<template>
  <BlogPost title="3D Printer - Update" date="2019-05-21">
    <div class="row">
      <div class="col">
        <p>
          Having had the 3D printer for a few months now, I can say it's easily one of my favorite purchases ever.
        </p>
      </div>
    </div>

    <h2>Recent Prints, Etc</h2>
    <div class="row">
      <div v-for="photo in photos" :key="photo.src" class="col-sm-6">
        <figure class="figure">
          <a :href="photo.src">
            <video
              v-if="photo.type === 'video'"
              :src="photo.src"
              autoplay
              loop
              muted
              playsinline
              class="figure-img img-fluid"
            />
            <img v-else :src="photo.src" class="figure-img img-fluid rounded">
          </a>
          <figcaption class="figure-caption text-center">
            <!-- eslint-disable-next-line -->
            <span v-html="photo.caption" />
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
          caption: "3D printer setup. WiFi webcam for monitoring prints remotely.",
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-010.jpg"
        },
        {
          caption: "All PLA except for black one in front which is PETG.",
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-020.jpg"
        },
        {
          caption: "Box of discards.",
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-030.jpg"
        },
        {
          caption: "Growing filament collection.",
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-040.jpg"
        },
        {
          caption:
            'Chess set <br/> (Printed by Quinn, model from <a href="https://www.thingiverse.com/">Thingiverse</a>)',
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-050.jpg"
        },
        {
          caption:
            'Chess set <br/> (Printed by Quinn, model from <a href="https://www.thingiverse.com/">Thingiverse</a>)',
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-060.jpg"
        },
        {
          caption:
            'Puzzle box <br/> (Printed by Kergan, model from <a href="https://www.thingiverse.com/">Thingiverse</a>)',
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-070.jpg"
        },
        {
          caption:
            'Puzzle box key <br/> (Printed by Kergan, model from <a href="https://www.thingiverse.com/">Thingiverse</a>)',
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-080.jpg"
        },
        {
          caption:
            'Custom Box for school project. <br/> Designed by Kergan. Decals cut out on a <a href="https://www.silhouetteamerica.com/shop/machines/cameo">Silhouette Cameo</a>, which <i>was</i> the cool machine before we got the Prusa.',
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-090.jpg"
        },
        {
          caption:
            "Quinn's Belt</br> One of the larger items he's printed. He wore it for a few weeks until it broke. Need to try it again with PETG.",
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-100.jpg"
        },
        {
          caption: "Custom iPhone Stand<br/>Designed by Kergan",
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-110.jpg"
        },
        {
          caption:
            'All in one printer test, <a href="https://www.thingiverse.com/thing:2656594">available on Thingiverse</a>.',
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-120.jpg"
        },
        {
          caption: "Spinner. Free model from Prusa.",
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-130.jpg"
        },
        {
          caption: "Spinner. Comes off the printer like this.",
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-140.mp4",
          type: "video"
        },
        {
          caption: "Custom Coffee Spoon Holder<br/>Printer is going to pay for itself in no time...",
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-150.jpg"
        },
        {
          caption:
            "Connector for 1\" PVC Pipe. Support material still in place. Quinn really wished we had the printer when he built his <a href='https://photos.kaliatech.com/Random/2019/IMG_20190202_062814.jpg'>SciOly Coaster.</a>",
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-160.jpg"
        },
        {
          caption:
            "3D printed legos with custom servo mount. <br/> My Fusion360 model for this is fully parameteric, so can print base at whatever size needed by simply modifying variables.",
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-170.jpg"
        },
        {
          caption: "First Test of TPU (flexible) Filament",
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-180.jpg"
        },
        {
          caption: "TPU (flexible) Filament. Shore hardness ~90A.",
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-190.mp4",
          type: "video"
        },
        {
          caption:
            'Filament switch mid print. This is one way to do multi-color. Another way would be to add the <a href="https://shop.prusa3d.com/en/upgrades/183-original-prusa-i3-mk25smk3s-multi-material-2s-upgrade-kit-mmu2s.html">multi material upgrade</a>.',
          src: "/i/blog/2019/0521-3dprinter-update/3dprint2-200.jpg"
        },
        {
          caption:
            "<a href='https://www.autodesk.com/products/fusion-360'>Fusion360</a> screenshot of <a href='/projects/2019/0301-tankrobot-fpv'>TankRobot</a> model. I'm not an Autodesk fan and I would've liked to continue using <a href='https://www.alibre.com/'>Alibre</a>, but I can't justify continually paying ~$500 year when Fusion360 is currently free for my purposes. I expect this could come back to bite me some day.",
          src: "/i/blog/2019/0521-3dprinter-update/fusion-tank-assembly.png"
        },
        {
          caption:
            "Screenshot of <a href='/projects/2019/0301-tankrobot-fpv'>TankRobot</a> base sliced in <a href='https://www.prusa3d.com/slic3r-prusa-edition/'>Slicr PE</a>.",
          src: "/i/blog/2019/0521-3dprinter-update/slicr-screenshot.png"
        }
      ]
    };
  }
};
</script>
