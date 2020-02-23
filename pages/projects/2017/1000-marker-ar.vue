<template>
  <ProjectDetail date="2017-10-00" title="Marker Based AR in Browser">
    <p>
      Video showing a quick experiment with marker image based augmented reality in standard web browers. (Not
      <a href="https://www.w3.org/TR/webxr/">WebXR</a>
      ).
    </p>
    <div class="video-responsive">
      <iframe
        allowfullscreen
        frameborder="0"
        height="360"
        src="https://www.youtube.com/embed/8XcD83H0agE?feature=oembed"
        width="640"
      />
    </div>
    <p>
      In the video, I am using a webcam located on top of the main screen. Anytime the webcam sees the marker, a 3d cube
      is drawn in the camera space and rendered in the camera video feed on the main screen.
    </p>
    <p>
      Everything in this demo is being done in browser using the
      <a href="https://github.com/jeromeetienne/AR.js">AR.js library</a>
      and newer HTML5 camera APIs. I am using an iPad at the beginning of the video to show the marker image, but then
      towards the end I switched to a print out of the marker to make clear there is no technology component from the
      ipad. The demo would be more compelling if shown using a phone/mobile device (which would use the camera as a
      pass-through to the display containing the 3D image), but my android device camera is dying.
    </p>
    <p>
      <del>The demo does not work with current iOS browsers, but it might be able to work in iOS 11.</del>
      <strong> UPDATE:[2017-10-21] Confirmed this does now work with iOS 11 Safari browser. </strong>
    </p>
    <p>
      This video was done as a live youtube stream from a foscam pan/tilt webcam, streamed using VLC.
    </p>
  </ProjectDetail>
</template>
