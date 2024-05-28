---
title: WebXR Tests & Notes
createdAt: 2022-03-11T00:00:00Z
description: Browser based VR tests using Babylon.js and a Meta Quest 2.
category: projects
---

## Contents
<blog-post-toc :toc=toc></blog-post-toc>

## Overview

[WebXR](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Fundamentals) is an emerging standard for
building AR/VR/MR experiences in a web browser context. Figuring out what is possible and practical as of early 2022 has
been difficult due to the newness, so I decided to spend time learning and developing my own tests. There are a few
frameworks for creating WebXR experiences, and my favorite of those is [Babylon.js](https://www.babylonjs.com/).

Test site:

- https://webxr-tests-3.kaliatech.com/

Source:

- https://github.com/kaliatech/webxr-tests-3

Most of the functionality will seem to work across all browsers and devices, including Safari/iOS. However, these tests
are meant to be viewed within a VR headset. I did not optimize for mobile or desktop interactions. Testing was done with
a Meta Quest 2.

<div class="row">
  <div class="col col-md-2"></div>
  <div class="col-12 col-md-8 align-self-center">
    <figure class="figure">
      <a href="https://webxr-tests-3.kaliatech.com/test4">
        <img src="/i/blog/2022/webxr-tests/webxr-test-4-falls.jpg" class="figure-img"/>
      </a>
      <figcaption class="figure-caption text-center">
        <!-- eslint-disable-next-line -->
        <span>360° photo from <a href="https://webxr-tests-3.kaliatech.com/test4">Test 4</a></span>
      </figcaption>
    </figure>
  </div>
  <div class="col col-md-2"></div>  
</div>

## Why WebXR

Most VR experiences are being developed using [Unity](https://unity.com/)
or [Unreal](https://www.unrealengine.com/). Both are powerful development platforms that existed before modern XR, and
with capabilities that extend well beyond XR development. ([Aside: Unity vs Unreal](#aside-unity-and-unreal)). However,
WebXR has some major benefits over these more established platforms:

### WebXR Pros

- No app installation is needed. A WebXR experience is delivered like any other website.
- No 3rd party store or side loading tools needed.
- Uses existing web development technologies and skills. i.e. JavaScript/TypeScript, Webpack/Vite/Rollup, Etc
- Fast iteration while developing and deployment updates can be immediate.
- Cross-platform. Does not require device and platform specific builds.
- Can be easier to reuse assets and UX between XR and non-XR experiences.

### WebXR Cons

- Does not have the same level of industry and 3rd party asset support. The more advanced VR components aren't available
  to WebXR developers, or at least, not to the same level of refinement. They might never be.
- Will often not be able to reach same levels of performance as with Unity/Unreal. This will matter for VR experiences
  of any substantial complexity, such as seen in most commercial games. Building a large world style environment in
  WebXR would be difficult.
- Not requiring 3rd party stores can be considered a pro, but it also has the downside of not be promoted/sold in the
  stores. That is important for anyone hoping to launch a profitable VR app. That also means not being able to use
  built-in store payments and subscriptions functionality. A possible exception is Meta's announcement that they will
  support [PWAs in the Oculus store](https://web.dev/pwas-on-oculus-2/#pwas-in-oculus-browser-and-the-oculus-store).
- A WebXR app will often not be able to take advantage of native device & platform functionalities. For example, see the
  Additional SDKs Oculus provides for Unity, such as
  the [Platform Solutions SDK](https://developer.oculus.com/documentation/unity/ps-platform-intro/).

## Progressive Web Apps (PWAs)

Meta announced support for PWAs on Oculus in October 2021. The initial example PWA apps are primarily 2D apps, but WebXR
is fully supported.

- [Get started developing Progressive Web Apps](https://developer.oculus.com/pwa/) - Oculus
    - Video: [Bringing 2D Apps to VR's Infinite Screen](https://www.facebook.com/watch/?v=4637130066326723)
- [PWAs on Oculus Quest 2](https://web.dev/pwas-on-oculus-2/) - Thomas Steiner

A key point is that Meta is making these PWAs discoverable on the Oculus store alongside native apps.

## Immersive Video

Anecdotally, I believe that consumer interest in 360° and 180° video peaked sometime in 2018-2019. Google then dropped
their support for VR180 and various manufacturers quickly followed. ...or vice-a-versa depending on whom you ask. Some
believe interest in immersive video is returning with the increasing of headset sales. Oculus TV usage might show
that to some extent.

Like most things in VR/XR/MR, it's hard to understand the power of well done immersive video experiences without
actually experiencing it for yourself.

It is my belief that 180° stereo/3D video will be often preferable over 360° video. A FoV slightly less than 180 might
be even better. There are two reasons:

1. Current VR display hardware can support higher resolutions when there is less FoV. i.e. A Quest 2 can show a 180°
   stereo video in much higher resolution than it can a 360° video.

2. Very few video experiences are well suited to a 360° view. Most video, even when immersive, will have an intended
   direction of focus for the watcher's attention. 180° works better for this because the watcher doesn't have to be
   concerned about what might be happening behind them.

For a truly immersive video experience, at least where the subject is not far away, it is important that the video is
shot and played back in stereo. i.e. Two cameras/lens, one for each eye. Monoscopic videos do not have the same
immersive quality. Almost all current consumer level 360° cameras are monoscopic.

Canon recently released a lens for doing 8k 180° captures with a Canon EOS R5 body which lends some credibility to the
idea that VR180 might make resurgence. The total cost for a complete setup is ~$7k USD, which is significantly less than
comparable existing options. See also:

- [RF5.2mm F2.8 L Dual Fisheye Lens](https://www.usa.canon.com/internet/portal/us/home/products/details/lenses/ef/vr/rf5-2mm-f2-8-l-dual-fisheye-lens/)
- [Canon RF 5.2mm sample video](https://360rumors.com/canon-vr180-sample/)
- [Canon EOS VR System In-Depth Review - Hugh Hou](https://hugh-hou.medium.com/canon-eos-vr-system-in-depth-review-for-3d-vr180-creators-filmmakers-feea97e99585)
- [Canon DUAL FISHEYE Real World Test - Hough Hou](https://www.youtube.com/watch?v=Q9vVYJd4bOE)
- [RED V-RAPTOR w/ Canon Dual Fisheye vs EOS R5 - Hugh Hou](https://www.youtube.com/watch?v=L7iP4zRD3cY)

However, while I feel 180° stereo is the best option generally, that is the one option I have not yet been able to get
working in my WebXR tests. I think there is a bug with Babylon.js and 180 side-by-side format handling. The lack of
standardization and documentation around VR180 format handling is surprising. The reason I would like to get it working
is that there are so few examples of 3D 180° video, especially at higher resolutions.

The best examples of higher quality 180° video, within WebXR, are currently seen only in the adult industry, afaik. (
If anyone knows of good public examples elsewhere, please let me know! It would be great to link to them.)  A leader in
that space _seems_ to be a company called [Dreamcam](https://dreamcamtrue.com/). They sell their live VR video
streaming/chat services to adult sites as a white label provider. The UIs being used once you enter the XR space are
some of the best I've seen in real world WebXR applications to-date. I'm not sure what the apps are being developed
with, but I would like to know. I've seen two different versions, both very well done.

Regarding the video, I noticed they usually do not seem to provide a full 180° field of view. The FoV seems to extend
only slightly beyond the FoV available within a Quest 2 device, which has a ~90° FoV horizontally and vertically. I
assume this allows them to conserve bandwidth and increase resolution. The immersive feeling is strong and not specific
to the subject matter. I wish there were other examples of it to make it easier to show people. That's the reason I want
my own demos to work. One difficultly in building custom demos though is finding high quality 180 stereo video samples.
If anyone wants to send me a Canon camera and VR lens, please do.

See also:
- [How to - VR 180 Video Files by John Daro](https://www.johndaro.com/blog/2021/9/11/vr-180-video-files)
- [Hugh Hou's YouTube Video Channel](https://www.youtube.com/c/HughHouFilm/videos)
    - The best source for experiencing high quality immersive video and seeing latest camera options. He also releases
      to Oculus TV.
- [Encoding High-Resolution 360 and 180 Video for Oculus Quest](https://creator.oculus.com/blog/encoding-high-resolution-360-and-180-video-for-oculus-go/)
    - Somewhat outdated and not 100% applicable to video in WebXR.

## Live Video Streaming

It is possible to do live video streaming to WebXR. As mentioned in previous section, this is the primary service
provided by Dreamcam for adult sites. Many consumer 360° cameras, like the Insta360, make it easy to do live streaming
via services like YouTube. However, when livestreaming through YouTube (and similar), there will be a significant delay. I
believe it's 20-30 seconds at a minimum. That kind-of takes the "live" out of live, IMO.

I believe YouTube livestreaming uses HLS, and most implementations of HLS will have a significant delay inherently. By
default, HLS prioritizes reliability and scaling over latency. There is emerging standardization work to support lower
latencies with HLS. i.e.

- [Enabling Low-Latency HTTP Live Streaming (HLS) - Apple](https://developer.apple.com/documentation/http_live_streaming/enabling_low-latency_http_live_streaming_hls)

Another other common live streaming protocol is DASH, which I believe supports fMP4 with lower latencies. There are also
newer formats like CMAF that are designed for lower-latency. More info:

- [What is CMAF - Wowza](https://www.wowza.com/blog/what-is-cmaf)

Doing minimal research on Dreamcam's implementation, by watching the network console, I saw they are using some form of
fMP4. I didn't research enough to know what sort-of latency their streams have, but I suspect it's significant.

There is also WebRTC which is usually used for low-latency peer-to-peer. I have seen some experiments around using
WebRTC for livestreaming immersive video, but I believe has inherent limitations in most browsers that would make it not
usable for higher quality streams.

Livestreaming has two components: upload and download. Most discussion around HLS/DASH/CMAF is about the download. The
upload is important for getting video from the camera though, and there the most common option on the consumer level
cameras is still RTSP. With that in mind, doing live immersive video streaming using a custom setup is more difficult. I
was [able to make it work in my local environment](https://www.reddit.com/r/Insta360/comments/sgoiwc/comment/hvqn50h/?utm_source=share&utm_medium=web2x&context=3)
using an Insta360 ONE X2, resulting in ~2-3 second latency. However, it was not easy, and I do not recommend an Insta360
ONE X2 to anyone with security concerns. (See [aside](#aside-insta360-one-x2-vulnerabilities) below.)

It's peculiar to be watching yourself live while in a VR headset.

## Composition Layers

An emerging technique and standard referred to as WebXR Layers API allows for improved 2D surface quality and
performance. This is especially important for text and video display within VR.

To get a sense for how much use of layers can improve quality, check out this non-WebXR app on Oculus App Lab:

- [2D Panels Demo](https://www.oculus.com/experiences/quest/4581055775312676/) - Oculus App Lab

Babylon.js 5 has support for enabling WebXR Layers, but I don't think anything in Babylon.js uses it out-of-the-box yet.
I intend to write a test showing use of WebXR layers in Babylon.js for simple 2D UI panels and for 360/180° videos.

For more info:

- https://immersive-web.github.io/webxr-samples/layers-samples/
- https://developer.oculus.com/documentation/web/webxr-layers/
- https://developer.oculus.com/blog/achieve-better-rendering-and-performance-with-webxr-layers-in-oculus-browser/
- https://developer.mozilla.org/en-US/docs/Web/API/XRCompositionLayer

## Multiview

One of the ways XR handling in 3D engines differs from normal 3D handling is that the engine must render two camera
views on every frame. Left and right eye. Minimally, these views have slightly different view projections. An emerging
optimization is referred to as Multiview. For more info:

- https://blog.mozvr.com/multiview-on-webxr/
- https://developer.mozilla.org/en-US/docs/Web/API/OVR_multiview2
- https://immersive-web.github.io/webxr-samples/layers-samples/proj-multiview.html

Babylon.js 5 has support for enabling the multiview extension, but as of 5.0.0-rc.2, enabling it causes problems with
anti-aliasing. A lot of this is still emerging and is not specific to Babylon.js. Relevant discussion: [WebGL Issue #2912 - Multisampled multiview support](https://github.com/KhronosGroup/WebGL/issues/2912). 

Once it's fully supported, it should improve performance. I don't know if there will be other ramifications though. For
example, I believe shaders must be written carefully to work with multiview.

## DOM Overlays vs Layers

Note that DOM Layers are different than [DOM Overlays](https://www.w3.org/TR/webxr-dom-overlays-1/), and that has
sometimes been confused in discussions on the Internet.

DOM Overlay

- Put 2D HTML content over top a 3D scene.
- Primarily intended for mobile AR experiences.
- [Immersive-Web Explainer for DOM Overlays](https://github.com/immersive-web/dom-overlays/blob/master/explainer.md)

DOM Layer

- Would allow using HTML as a surface/texture within a WebXR space. An embedded webview.
- I don't think this exists, even as a proposal. There would probably need to be some security considerations.
- https://github.com/immersive-web/layers/issues/21

A DOM layer would be very useful for creating 2D panels, and interactive 2D GUIs, within a WebXR scene. Even though
2D UIs are not always the best fit for VR, where physical control interactions are generally preferred, they are still
sometimes needed and often more convenient to develop.

I have seen some impressive experiments around bringing a browser view in to a WebXR scene, but they are still hacky at
best.

- [CSS3DRenderer](https://threejs.org/docs/#examples/en/renderers/CSS3DRenderer) (has been [sort-of ported to Babylon.js](https://forum.babylonjs.com/t/html-in-3d-space-part-2-bjs-way-to-matrix-transform/3214))
- [Potential ways to get HTML in a Babyon.js Texture](https://forum.babylonjs.com/t/how-write-html-in-babylon-gui-rectangle/28415/3) - @carolhmj
- [Explorer and Inspector in realtime in 3D with two way event binding](https://forum.babylonjs.com/t/the-babylonjs-scene-explorer-and-inspector-in-realtime-in-3d-with-two-way-event-binding/23857/17) - @roland
    - Uses WebRTC to bring in to 3D. 
    - Has some level of input interaction support.
    - I don't think could be used for DOM layer in a generic sense, but still, very impressive.

The Unity ecosystem has components to bring in full webviews to the XR space. This can be seen in various
meeting and social apps that allow placing and interacting with a web browser. Example:

- https://developer.vuplex.com/webview/overview

I don't know of any way to do that with WebXR beyond the CSS3DRenderer approach shown above, which has a number of
limitations. It is possible to use the HTML Canvas API to draw to a texture, but rendering HTML into a canvas is not
intuitive, has limitations, and generally does not allow for interactivity.

## Download Size

For reference, the total package size of the entire webxr-tests-3 site is <3MB (700k gzipped), not including the 3D
models (glTF) and textures. As would be expected, the majority of that package size (~2.5MB) comes from a tree shaken
babylon.js bundle which is shared across all pages. This is substantially less than the minimal size of a Unity app.

The compact size was achieved by using
the [ES6 module variant](https://doc.babylonjs.com/divingDeeper/developWithBjs/treeShaking) of Babylon, explicit
imports, and Vite's tree shaking.

A simpler WebXR experience can be even smaller, especially if not needing Babylon's GUI modules. I believe <1MB if not
needing to support loading the higher fidelity WebXR device controller models which are glTF models and textures that
get loaded over the Internet from
the [WebXR Input Profiles Registry](https://immersive-web.github.io/webxr-input-profiles/) whenever WebXR is
initialized.

## Aside: Unity vs Unreal

Personal thoughts:

- Unity

    - Currently is the most feature complete VR development environment.
    - Supports doing almost anything that can be imagined in VR, up to device hardware limitations.
    - Asset store has some useful components. For
      example, [Auto Hand](https://assetstore.unity.com/packages/tools/physics/auto-hand-vr-physics-interaction-165323)
      is amazing.
    - Performance and graphics fidelity can be very good, but requires knowledge and experience. Not always easy yet.
      i.e Compositor Layers, aka WebXR Layers
    - Some frustrations:
        - Ongoing changes and attempts to move to industry standardizations are making things confusing. A lot of
          documentation is out-of-date and versions are mismatched. (i.e XR plugin vs Oculus plugin)
        - There is ongoing work regarding how best to support VR development in Unity, and it has been changing from
          2021.x to 2022.x. For example, hot reloading changes on android/oculus.
        - The multiple rendering pipeline options of Unity can be confusing and problematic, especially when targeting
          devices like Meta Quest 2. The newer pipeline has impressive quality and generally seems to work on Quest, but
          afaik, there still aren't best practices or recommendations. At least, none that aren't out-of-date.

- Unreal Engine 4/5

    - I prefer the Unreal IDE and architecture over Unity for a few reasons, but its VR support still seems well behind
      Unity's. I'm hopeful that will change with the impending release of UE5 and there are some signs that it will.
    - The achievable performance and graphics fidelity when using Unreal _should_ be better than with unity. That has
      yet to be shown, _in a Quest app_ though, afaik. And even though Unreal can be better, I suspect it will often
      come with a development/complexity cost.
    - It's unclear to me if/how UE will handle faster developer iterations for VR development.

## Aside: Insta360 ONE X2 Vulnerabilities

I purchased an Insta360 ONE X2 to have a cheap camera to
experiment with. While researching ways to do extra low latency live-streaming, I applied for and received access to the
available SDK. I then started noticing some apparent vulnerabilities, and about that same time, someone on reddit
confirmed those vulnerabilities and more:

* [Egregious vulnerabilities of Insta360 ONE X2](https://www.reddit.com/r/Insta360/comments/scsue6/really_cool_insta360_one_x2_hidden_feature/)

Summarized, anyone in wifi range can access a turned on Insta360 ONE 2 to view captured videos, start recordings, etc.
No hacking is needed if you know the _globally hardcoded password_. It's hard to believe until you see it.
