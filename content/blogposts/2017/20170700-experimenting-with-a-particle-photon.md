---
title: Particle.io Photon Experiments
createdAt: 2017-07-01
description: Demo of the particle.io photon MCU and platform.
category: projects
---


The
<a href="https://www.particle.io/products/hardware/photon-wifi-dev-kit">Photon</a>
, made by
<a href="https://www.particle.io">Particle.io</a>
, is a small microcontroller with built-in wifi. What makes the Photon unique as compared to many other MCUs is
its integration with the Particle ecosystem. That ecosystem makes it exceptionally easy to develop, deploy, and
communicate with any particle device that has an Internet connection. Particle provides for Internet and browser
based management of its devices, supporting things like a cloud based IDE/compiler, over-the-air firmware updates,
and simple HTTP api communication layers to and from devices.

In this experiment, an
<a href="https://www.sparkfun.com/products/10167">RHT03 humidity and temperature sensor</a>
is connected to the Photon. There&#8217;s also a
<a href="https://www.adafruit.com/product/1426">NeoPixel 8xRGB LED stick</a>
connected:

<div class="text-center">
  <a href="/static/i/projects/2017/photon/P1080779-1920.jpg">
    <figure class="figure">
      <img class="figure-img img-fluid rounded" src="/i/projects/2017/photon/P1080779-1920.jpg" />
      <figcaption class="figure-caption text-center">Photon breadboarded with RHT03 and RGB LED Stick</figcaption>
    </figure>
  </a>
</div>

All programming, compiling, and updates were done using the browser based IDE:
<div class="text-center">
  <a href="/static/i/projects/2017/photon/particle-build-001.png">
    <figure class="figure">
      <img class="figure-img img-fluid rounded" src="/i/projects/2017/photon/particle-build-001.png" />
      <figcaption class="figure-caption text-center">Particle Build IDE</figcaption>
    </figure>
  </a>
</div>
    
The particle SDK supports declaring certain variables and functions to be accessible from the particle web
console. Particle provides a generic browser based UI to view these variables and functions, and the same
functions are also accessible via a simple HTTP API for integration with other software.

<div class="text-center">
  <a href="/static/i/projects/2017/photon/particle-console-001.png">
    <figure class="figure">
      <img class="figure-img img-fluid rounded" src="/i/projects/2017/photon/particle-console-001.png" />
      <figcaption class="figure-caption text-center">Particle Console WebUI</figcaption>
    </figure>
  </a>
</div>

In this case, the neopixel was connected for visual effect only. It is simply cycling through colors. The neopixel
products are interesting because each LED can be individually addressed to display any RGB color and brightness.

<div class="video-responsive mb-5">
  <iframe
    allowfullscreen
    style="border:none"
    height="360"
    src="https://www.youtube.com/embed/RCFIziTKojM?feature=oembed"
    width="640"
  ></iframe>
</div>

## Where&#8217;s my Internet connected toaster?

I started following Particle when it was
<a href="https://techcrunch.com/2015/05/14/spark-io-is-now-particle-io-because-there-were-too-many-sparks/">
still named &#8220;spark.io&#8221;</a>, and I was fortunate enough to have a beer with their lead developer in San
Francisco during their early days. I bought a photon soon after their first kick starter where they garnered ~$500k from
backers. Since then they have released a similar cellular enabled device called
<a href="https://www.particle.io/products/hardware/electron-cellular-dev-kit">Electron</a>, making the platform
accessible anywhere there&#8217;s cellular coverage. Very cool.

The Photon and Electron are great matches for Internet-of-Things (IoT) type ideas. IoT might be a buzzword, but even so,
the related platforms and devices coming about to support IoT are opening up a whole new level of possibilities.

