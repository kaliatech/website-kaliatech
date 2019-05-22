<template>
  <BlogPost title="3D Printer" date="2019-01-04">
    <div class="row">
      <div class="col">
        <p>
          I purchased a 3D printer &quot;for the kids&quot; over the holiday. It's a
          <a href="https://www.prusa3d.com/original-prusa-i3-mk3/">Prusa i3 MK3</a>
          . Purchased as a kit and had to be assembled. Hard to justify practically, but it's <i>really</i> interesting.
        </p>
        <p>
          For more photos, see update: <nuxt-link to="/blog/2019/0521-3dprinter-update">2019/0521-3dprinter-update</nuxt-link>
        </p>
      </div>
    </div>

    <h2>Photos</h2>
    <div class="row">
      <div v-for="n in 10" :key="n" class="col-sm-4">
        <a :href="'/i/blog/2019/0104-3dprinter/3dprinter_' + n + '.jpg'">
          <figure class="figure">
            <img :src="'/i/blog/2019/0104-3dprinter/3dprinter_' + n + '.jpg'" class="figure-img img-fluid rounded">
          </figure>
        </a>
      </div>
    </div>
  </BlogPost>
</template>
