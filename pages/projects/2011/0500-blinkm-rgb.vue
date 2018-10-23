<template>
  <ProjectDetail title="BlinkM RGB LED Controller" date="2017-10-00">
    <p>
      The PC reads the joystick position and communicates messages to a
      <a href="https://www.parallax.com/catalog/microcontrollers/propeller">Parallax Propellor microcontroller</a>. The
      microcontroller processes the messages and then controls the <a href="https://www.sparkfun.com/products/8579">BlinkM
      RGB LED</a> using its I2C interface.
    </p>
    <div class="video-responsive">
      <iframe width="640"
              height="360"
              src="https://www.youtube.com/embed/5S2rIXL9E-w?feature=oembed"
              frameborder="0"
              allowfullscreen/>
    </div>
    <p class="small">
      I also created a <a href="https://www.youtube.com/watch?v=bumZ124N_Jc&feature=youtu.be&hd=1">much longer
      explanation video</a>. It even has a background soundtrack. I finished it, watched it, and then realized it was so
      boring and inane that I would feel bad asking anyone to watch it. </p>

    <h2>Photos</h2>
    <div class="row">
      <div class="col-4">
        <a href="/i/projects/2011/blinkm-rgb/P1010303.jpg"> <img src="/i/projects/2011/blinkm-rgb/P1010303.jpg"
                                                                 class="figure-img img-fluid rounded"> </a>
      </div>
      <div class="col-4">
        <a href="/i/projects/2011/blinkm-rgb/P1010308.jpg"> <img src="/i/projects/2011/blinkm-rgb/P1010308.jpg"
                                                                 class="figure-img img-fluid rounded"> </a>
      </div>
      <div class="col-4">
        <a href="/i/projects/2011/blinkm-rgb/P1010304.jpg"> <img src="/i/projects/2011/blinkm-rgb/P1010304.jpg"
                                                                 class="figure-img img-fluid rounded"> </a>
      </div>
      <div class="col-4">
        <a href="/i/projects/2011/blinkm-rgb/P1000367.jpg"> <img src="/i/projects/2011/blinkm-rgb/P1000367.jpg"
                                                                 class="figure-img img-fluid rounded"> </a>
      </div>
      <div class="col-4">
        <a href="/i/projects/2011/blinkm-rgb/P1000927.jpg"> <img src="/i/projects/2011/blinkm-rgb/P1000927.jpg"
                                                                 class="figure-img img-fluid rounded"> </a>
      </div>
      <div class="col-4">
        <a href="/i/projects/2011/blinkm-rgb/P1010324.jpg"> <img src="/i/projects/2011/blinkm-rgb/P1010324.jpg"
                                                                 class="figure-img img-fluid rounded"> </a>
      </div>

    </div>
    <h2>Description</h2>
    <p>
      This is a simple project for controlling a BlinkM RGB LED with joystick. The joystick is attached to a PC, which
      communicates the inputs to a Microcontroller with the BlinkM LED attached. This project is way over engineered for
      simply controlling an RGB LED. I’m using it as an early test for a larger architecture I’ve been working on for
      more advanced robotic control.
    </p>

    <p>
      The joystick is a little different than most because it has two slider controls. I have the controls setup as
      follows:
    </p>
    <ul>
      <li>Left Slider: RED component</li>
      <li>Right Slider: GREEN component</li>
      <li>Stick Y-Axis: BLUE component</li>
      <li>Trigger Button: Decreases BLUE component by one-half</li>
    </ul>
    <p>
      I did the video mainly to experiment shooting video in the dark.</p>


  </ProjectDetail>
</template>
