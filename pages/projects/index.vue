<template>
  <div class="container projects">
    <div class="row">
      <div class="col-12">
        <h1>Projects</h1>
        <p class="lead">Miscellaneous projects, experiments, etc.</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
            <tr>
              <th />
              <th>Last Updated</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr :key="project.title" v-for="project in projects">
              <td>
                <strong>
                  <a :href="project.link" class="text-primary"> {{ project.title }}</a>
                </strong>
              </td>
              <td>{{ project.updated }}</td>
              <td>{{ project.descr }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      projects: [
        {
          title: 'Tank Robot - FPV Edition (WIP)',
          link: '/projects/2019/0301-tankrobot-fpv',
          updated: '2019-03',
          descr: 'Small robot with FPV setup',
        },
        {
          title: 'AR Experiments on Android',
          link: '/projects/2018/1031-android-ar',
          updated: '2018-10',
          descr: 'Experiments with ARCore on Android.',
        },
        {
          title: 'AR Based Positioning & Navigation',
          link: '/projects/2018/0830-ar-nav',
          updated: '2018-08',
          descr: 'Using augmented images & AR for positioning.',
        },
        {
          title: 'Web Audio Recording',
          link: 'https://kaliatech.github.io/web-audio-recording-tests/dist/',
          updated: '2018-03',
          descr: 'Web audio recording tests for all web browsers.',
        },
        {
          title: 'Marker AR with Browser',
          link: '/projects/2017/1000-marker-ar',
          updated: '2017-10',
          descr: 'Marker based augmented reality with web browsers.',
        },
        {
          title: 'Particle.io Photon',
          link: '/projects/2017/0700-experimenting-with-a-particle-photon',
          updated: '2017-07',
          descr: 'Demo of the particle.io photon MCU and platform.',
        },
        {
          title: 'Pan/Tilt with OpenCV',
          link: '/projects/2016/0400-pantilt-with-opencv',
          updated: '2016-04',
          descr: 'Using face detection to drive pan/tilt camera.',
        },
        {
          title: 'Pan/Tilt Device (v4)',
          link: '/projects/2013/1113-pantilt-v4',
          updated: '2013-11',
          descr: 'Remote servo controlled pan/tilt and video.',
        },
        {
          title: 'Dynamic Loading w/ Dygraphs',
          link: 'http://kaliatech.github.io/dygraphs-dynamiczooming-example/',
          updated: '2013-09',
          descr: 'Example code and demos showing how to use Dygraphs for loading downsampled datasets while zooming.',
        },
        {
          title: 'Flight Viz w/ Google Earth',
          link: 'http://archive.kaliatech.com/2018/websites/www.flightregression.com/index.html',
          updated: '2011-12',
          descr: 'Flight accident visualization with Google Earth.',
        },
        {
          title: 'Software Framework for Robotics',
          link: '/projects/2011/0805-software-framework-for-robotics',
          updated: '2011-08',
          descr:
            'Basis for experimentation with concepts that come in to play when interfacing a computer to the physical world.',
        },
        {
          title: 'RGB LED w/ Joystick',
          link: '/projects/2011/0500-blinkm-rgb',
          updated: '2011-05',
          descr: 'Joystick control of a BlinkM RGB LED.',
        },
        {
          title: 'Stance Robot v2',
          link: 'https://www.kaliatech.com/photos/Projects/RobotWalker2/',
          updated: '2010-11',
          descr: 'Experiments around microcontroller communication and smooth servo movements.',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Projects | Kaliatech',
    }
  },
  mounted() {
    //
    // Web Audio Recording 2018-03 Audio recording on mobile web browsers.
    // AR with Browser 2017-10 Marked based augmented reality with web browsers.
    // tParicle.io Photon 2017-07 Demo of the particle.io photon MCU and platform.
    // OpenCV and Pan/Tilt 2016-04 Using face detection to drive pan/tilt camera.
    // Pan/Tilt Device (v4) 2013-11 Remote servo controlled pan/tilt and video.
    // Dynamic Loading w/ Dygraphs 2013-09 Example code and demos showing how to use Dygraphs for loading downsampled
    // datasets while zooming.
    // Flight Viz w/ Google Earth 2011-12 Flight accident visualization with Google Earth.
    // Software Framework for Robotics
    // 2011-08 Basis for experimentation with concepts that come in to play when interfacing a computer to the physical
    // world.
    // RGB LED w/ Joystick
    // 2011-05 Simple project showing control of an RGB LED with a joystick.
    // Stance Robot v2 2010-11 Experiments around microcontroller communication and smooth servo movements.
    // Projects - Archived
    // Last Updated
    // Stance Robot v1 2008-05 Initial experiments with Lynxmotion BRAT robot chassis.
    // Rocking Horse 2007-12 A wooden rocking horse that I built.
    // Flash Curves 2006-08 Experiment with Bezier curves in Flash.
    // Pan/Tilt Device (v2) 2006-07 Remote pan/tilt web camera. Version 2.
    // Flash Colorization 2004-10 Dynamic photo colorization with Flash.
    // Pan/Tilt Device (v1) 2003-11 Remote pan/tilt web camera. Version 1.
  },
}
</script>
<style>
.projects a {
  text-decoration: underline;
}
</style>
