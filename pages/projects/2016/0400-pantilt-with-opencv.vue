<template>
  <ProjectDetail date="2016-04" title="Pan/Tilt with OpenCV">
    <p class="lead">Face Tracking to a Drive Pan/Tilt</p>
    <p>
      This was an ad hoc project using OpenCV to detect faces in real-time and drive a simple pan/tilt platform with a
      camera attached.
    </p>

    <p>
      A built-in laptop webcam ran the face detection and controlled the pan/tilt servos. A separate webcam attached to
      the pan/tilt platform did the actual recording.
    </p>

    <p>
      Adobe Media Encoder and YouTube Live (in beta at the time) were used to stream the webcam while simultaneously
      recording it. The delay between live and streaming was 20+ seconds, but a benefit was that it was watchable on all
      devices, including iOS.
    </p>

    <h2>Behind the Scenes</h2>

    <div class="video-responsive">
      <iframe
        allowfullscreen
        frameborder="0"
        height="360"
        src="https://www.youtube.com/embed/An6dyd8HZPk?feature=oembed"
        width="640"
      />
    </div>

    <p>
      <strong
        >Resulting video from webcam:
        <a href="https://youtu.be/3FT468u_prM">https://youtu.be/3FT468u_prM</a>
      </strong>
    </p>

    <p>
      To improve on this, servo movements could be smoothed and averaging applied to the face detection results. Also,
      these particular servos were really noisy, especially when working to hold a position. In a real world scenario, a
      <a href="https://www.trossenrobotics.com/p/WidowX-robot-turret.aspx">Dynamixel based pan/tilt platform</a>
      might be quieter.
    </p>

    <h4>Additional Face Tracking Tests</h4>
    <p>
      These videos show experiments using OpenCV to track a face in a typical single performer stage performance. The
      green circles are from using a haar frontal classifier and the blue circles are from using a haar profile
      classifier.
    </p>
    <p>
      A near best case scenario:<br />
      <a href="https://www.youtube.com/watch?v=Cki-OF_ozCQ&hd=1">opencv-test-008-good</a>
    </p>
    <p>
      A near worst case scenario due to over exposed lighting, glasses, mic in front face, and frequent 3/4 face profile
      presentation:<br />
      <a href="https://www.youtube.com/watch?v=KgAG0cWsWDw">opencv-test-011-bad</a>
    </p>
  </ProjectDetail>
</template>
