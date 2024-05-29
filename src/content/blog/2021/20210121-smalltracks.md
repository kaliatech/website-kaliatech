---
title: Small Tracks Website and Tools
createdAt: 2021-01-21
description: Custom design small tank tracks for 3D printing.
category: projects

photos: [
{
src: '/i/blog/2021/smalltracks/tanktreads-2021019-bw.webp',
caption: 'Example trank tracks',
},
{
src: '/i/blog/2021/smalltracks/3dprint2-180-bw.webp',
caption: 'Printed in flexible TPU',
},
{
src: '/i/blog/2021/smalltracks/scrshot-20210119-bw.webp',
caption: 'Interactive 3D Visualization',
},
{
src: '/i/blog/2021/smalltracks/scrshot-20210119-b-bw.webp',
caption: 'Multiple parameters',
},
]
---

## Overview

Small tracks is an experimental website and service for designing custom tank tracks. The results can be 3D printed.

<blog-post-photos-simple :photos=photos></blog-post-photos-simple>

## Background

I was originally doing calculations by hand to make alternative tracks for my small [FPV robot](https://www.kaliatech.com/blog/2020/tankrobot-fpv). I had already determined that printing these types of tracks with [TPU](https://www.3dnatives.com/en/tpu-3d-printing-040620204/) works well. However, calculating the correct size to print these is difficult, especially when there are multiple sprocket-and-cog configurations along the track.

There are not many off-the-shelf options for small tracks, and they are limited in their configuration. Some examples:

- [goBILDA - Tracks](https://www.gobilda.com/tracks/)
- [SuperDroid Robots - Molded Track Set - 2 inch Wide x 25mm pitch x 43 links](https://www.superdroidrobots.com/shop/item.aspx/mlt-molded-track-set-2-inch-wide-x-25mm-pitch-x-43-links/2866/)
- [SuperDroid Robots - DIY Wheels, Tracks and Treads](https://www.superdroidrobots.com/mechanical-parts/Treads-Tracks/DIY-Wheels-Tracks-Treads)
- [Pololu - Miniature Tracks](https://www.pololu.com/category/232/tracks)
- [Amazon - Robot Car Crawler Tank Tracks with Gear](https://www.amazon.com/Robot-Crawler-Tank-Treads-Tracks/dp/B07HBSWR1D)
- [SZDOIT - Metal/Plastic Tank Chassis Tracks Conveyor Belt](https://www.vvdoit.com/szdoit-metalplastic-tank-chassis-tracks-conveyor-belt-for-rc-crawler-robot-vehicle-parts-p2756036.html)

<!---
SuperDroid Robots previously provided custom length rubber tracks in ~3-4” width:

 * [SDRobots - Custom Track Service](https://sdrobots.com/custom-track-service/)

 -->

_(An aside: SDRobots is located ~15 minutes from me!)_

I needed much smaller tracks, and the sprocket-and-cog configuration on my FPV chassis was complex. (Admittedly, most people would probably change their sprockets to match the belt vs designing a belt to match the sprockets. But, what fun is that?)

The Prusa i3 MK3, and seemingly most 3D printing service bureaus, will support printing up to a ~600mm outside circumference track. The track is printed on its edge, in a circle. The track width is limited only by the height of the printer (usually ~200mm), although I expect printing thinner tracks at higher heights gets problematic with TPU.

I believe larger commerical rubber tracks are formed in molds, and then cog holes are cut/punched out. 3D printing in TPU allows for nearly infinite customization without having to build up molds first. TPU is harder than most rubber compounds, but more flexible than hard plastic. The tread pattern can be adapted for smooth or aggressive traction needs as long as some consideration is given to 3D printing overhang limitations and support needs.

I thought an interactive tool might be useful, and I had been wanting to experiment with [Babylon.js](https://www.babylonjs.com/) for 3D visualization in the browser. I believe there are potential business opportunities around incorporating more visual and interactive product configurators. Separately, I believe there are new opportunities forming from 3D printing service bureaus offering APIs with integrated product fulfillment. An example business around these ideas that I think was executed superbly is [Hero Forge](https://www.heroforge.com/).

My intent was to use this project to learn more about the 3D print service bureau integration options, such as the APIs from [Shapeways](https://developers.shapeways.com/) and [i.materialise](https://i.materialise.com/api). Ultimately, the idea is to allow anyone to easily design custom tracks from a few key measurements, and then behind the scenes allow submitting the designs to a 3rd party service for printing and shipping.

While working on this, it also occurred to me that with only a little more work, these tracks can be used as v-belts, timing belts, gear chains, and similar. The only difference between tracks and belts is that tracks have an outside tread pattern, and belts usually do not. A v-belt simply has a v-shaped track profile on the inside surface. I suspect that there are more off-the-shelf options available for small belts than there are for small tracks, but it seems worthwhile to support these options regardless.

  <figure>
    <a href="/i/blog/2021/smalltracks/smalltracks-triangles.webp">
      <img src="/i/blog/2021/smalltracks/smalltracks-triangles.webp" class="figure-img" style="max-height: 35rem"/>
    </a>
    <figcaption class="figure-caption text-center">
      <span>Triangles vs. Paperless</span>
    </figcaption>
  </figure>

## Calculations and Considerations

Calculating track length, features, and a final layout for printing is deceptively complicated. Key measurements and parameters that must be entered:

- **Axles**
  - X/Y Position - A track wraps around sprockets that are located at each axle.
- **Sprockets** (also known as wheels, gears, or pulleys)
  - Z Position - More complex configurations can have multiple sprockets per axle. i.e. An inside and an outside sprocket.
  - Width - Sprockets can have different widths and cog configurations.
- **Cogs** (as known as gear teeth)
  - Pitch - Used for calculating “per tread” lengths and holes
- **Track Width**
- **Outside Tread Profile**
- **Inside Tread Profile**

Given these user parameters, the system must derive certain adjustments for the visual display because wrapping a treaded track around a complex axle/sprocket/cog setup might not be a perfect fit. In the physical world, a track might compress/stretch as it bends around sprockets. Additionally, sometimes small adjustments to the given parameters are required to make sure the generated treads remain compatible with the user entered cog pitch and the implicit total length acccording to the axle and sprocket configurations.

Ultimately, the tool calculates the total track length and generates a model that can be 3D printed.

The tool might eventually support three different track types:

- **Treaded** - Treads are laid out in a circle pattern. The treads themselves are not rounded though. This requires flexibility/compression/stretching between the treads to allow wrapping around the sprockets. This is the most common track type.
- **Continuous** - Printed in a perfect circle, where even the “treads” (if any) are rounded and flexible. This type is best suited to belt like use cases.
- **Chain Links** - Tracks can be made up of connected links, like a bicycle chain. This is the traditional configuration for larger machines (real world construction vehicles, tanks, etc.) I believe it is possible to 3D print moveable chain links without any assembly required, although that puts a number of restrictions on the design. If an insertable/removable pin option can be devised, then one benefit to this track type is is that it can much longer in total length because it wouldn't be limited to a single print plate size.

## Exporting

The tool visually shows the track wrapping around the axles and sprockets. There are two options to export:

- **Export as shown** - Useful for importing into a static CAD model. The track is laid out exactly as shown.
- **Export for 3D printing** - The track layout is changed to a circle, ready for 3D printing.

The exported file is in STL format.

## Ordering(TBD)

Ordering would involve collecting payment and address information. The payment would have to be handled separately from the printing/fulfillment service because the 3D print APIs do not include per-end-user payment handling option. They charge only to a single card on file.

The shapeways API allows for dynamic pricing of a submitted model, but it might be easier to devise rough price brackets instead.

Based on anecdotal forum posts, the shapeways API does not appear to be well supported. However, I think only using it for some period of time would let me know for sure. The i.materialise API also seems sketchy. I don’t know of any other API like options at this time and will have to research. That almost seems like an opportunity in itself. Another option might be to manually upload orders to the service bureaus on behalf of customers. That would probably be doable for low order quantities, though I think unlikely there would ever be enough quantity to justify the necessary upcharge/profit to make it worthwhile.

Another option might be to print in-house. That would probably be doable for _very low_ order quantities. In-house printing would also allow for multiple color options. Taking that even further, it might be possible to use a a multi-color setup (i.e. [Prusa MMU2S](https://shop.prusa3d.com/en/upgrades/183-original-prusa-i3-mk25s-mk3s-multi-material-2s-upgrade-kit-mmu2s.html)) that would allow for multi-color track designs ...which would be unique. However, I suspect combining multi-color and TPU is even more finnicky than usual (and both are already known to be more difficult than standard 3D printing materials), and the upcharge would have to be significant.

# Key Technologies Used

- [Vue.js (v3)](https://vuejs.org/) - Client side framework
- [Bootstrap (v5)](https://getbootstrap.com/) - UI/CSS
- [Vite (v2)](https://vitejs.dev/) - Client side build and packaging
- [Babylon.js](https://www.babylonjs.com/) - 3D/WebGL
- [PixiJS](https://www.pixijs.com/) - 2D/Canvas

- [Lodash](https://lodash.com/) - JS Utilities
- [AWS Amplify](https://aws.amazon.com/amplify/) - CI/CD and hosting

# Status and Remaining Tasks (as of 2021-01)

Only a proof-of-concept and initial copy is complete as of 2021-02-20. Remaining tasks:

- [x] Proof of concept track calculations
- [x] Proof of concept 3D visualization
- [x] Proof of concept 2D visualization
- [x] Website homepage
- [x] Verify STL export works

<br />

- [ ] Rework UI, especially the parameters UI <--- until this is done, I'm almost embarrased to show the site
- [ ] Add parameter validations

<br />

- [ ] Finish track calculations
  - [ ] Add cog calculations and holes
- [ ] Next iteration of 3D visualization
  - [ ] Make interactive, for instance clicking an axle to select, drag-and-drop to adjust, etc
- [ ] Next iteration of 2D visualization (worthwhile?)

<br />

- [ ] Add export functionality
- [ ] Add documentation and diagrams
- [ ] Add account/authentication
- [ ] Add functionality to save/load tracks

<br />

- [ ] Add order support (TBD)
