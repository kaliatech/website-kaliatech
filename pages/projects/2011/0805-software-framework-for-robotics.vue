<template>
  <ProjectDetail date="2018-08-05" title="Software Framework for Robotics">
    <p class="lead">Basis for experimentation around interfacing a computer to the physical world.</p>

    <p>
      This post describes the current state a software framework I have been working on randomly over the past year. It
      was designed to allow for advanced experimentation around concepts that come in to play when interfacing a
      computer to the physical world.
    </p>

    <p>
      The implementation is far enough along that I’ve tested end-to-end functionality through all the layers described
      below. The joystick controlled RGB LED project I wrote about previously is using this framework with all of the
      specific technologies and tools that I have baselined here.
    </p>

    <h3>Layers</h3>

    <div class="text-center">
      <figure class="figure">
        <a href="/i/projects/2011/robotics-framework/RoboticControlLayers-20110802.png">
          <img
            class="figure-img img-fluid rounded"
            src="/i/projects/2011/robotics-framework/RoboticControlLayers-20110802.png"
        /></a>

        <figcaption class="figure-caption text-center">
          Graphic created on the iPad using
          <a href="https://www.omnigroup.com/omnigraffle/ios/">Omnigraffle</a>
          .)
        </figcaption>
      </figure>
    </div>

    <h3>Purpose</h3>

    <p>
      At first glance this framework might seem over engineered. However, I have thought a lot about the layers along
      with some of things I hope to accomplish eventually. My constant goal has been to keep things as simple as
      possible, but no simpler. Some of my ideas involve doing things that aren’t easily possible when using
      off-the-shelf components. For example, I want to have enough control that I can custom program ease-in/out
      movements of servos (both
      <a href="https://www.servocity.com/servos">RC Servos</a>
      and
      <a href="http://www.robotis.us/dynamixel/">Dynamixel Servos</a>
      ). Most of the servo controllers on the market do not have that capability. In earlier experiments I tried
      programming these custom movements in the PC layer using an SSC-32 for actual servo control, but the
      communications latency (RS232, buffers, microcontroller, etc) made the end result unreliable and not as smooth as
      I had hoped for.
    </p>

    <h2>Controller/Keyboard</h2>

    <div class="row">
      <div class="col-9">
        <p>
          A controller could be a joystick, a mouse, a
          <a href="https://www.google.com/search?q=belkin+n52te&source=lnms&tbm=isch">Belkin Nostroma n52te</a>
          , a test computer keyboard, or any combination. The controller layer could also eventually include a head
          tracking device like the
          <a href="http://www.naturalpoint.com/trackir/">Natural Point TrackIR</a>
          .
        </p>
      </div>
      <div class="col-3">
        <img class="figure-img img-fluid rounded" src="/i/projects/2011/robotics-framework/Belkin-n52te.png" />
      </div>
    </div>

    <h2>User Interface</h2>
    <p>
      The computer provides the GUI and all visuals. In all the other layers of this framework I have decided on
      specific technology and product choices for a baseline. However, I am still undecided as to which GUI
      framework/platform I want to use as a baseline. Options for the GUI layer include:
    </p>
    <ul>
      <li>
        <a href="https://www.oracle.com/technetwork/java/javafx/overview/index.html">JavaFX 2.0</a>
        (very different from JavaFX 1.0)
      </li>
      <li>
        <a href="http://netbeans.org/features/platform/">Netbeans Platform</a>
        (Swing. Not same thing as the Netbeans IDE.)
      </li>
      <li>
        <a href="https://nwjs.io/">HTML/JavaScript with NodeWebkit.js</a>
        (or possibly wrapped in
        <a href="https://wiki.qt.io/QtWebEngine">QtWebEngine Window</a>
        )
      </li>
      <li>
        <a href="https://www.qt.io/">Qt Framework</a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/Apache_Flex">
          <del>Flash/Flex/AIR</del>
        </a>
      </li>
      <li>
        <a href="https://wiki.eclipse.org/Rich_Client_Platform">Eclipse RCP</a>
      </li>
    </ul>
    <p>
      I keep holding off because I only have so much time to learn new things. The state of GUI development for business
      is a bit up-in-the-air presently.
    </p>
    <p>
      Keeping the GUI as its own self-contained layer means it’s possible to make use of the remaining parts of this
      framework without any GUI at all. That’s what I’ve been doing mostly to-date because GUI’s take so much time to
      develop and generally require a clear goal.
    </p>
    <p>
      Most recently I’ve been experimenting by creating a Java wrapper with an embedded
      <a href="http://groovy-lang.org/">Groovy</a>
      engine. This lets me prototype console applications quickly using a dynamic language, but with all the power of
      the JDK and many available Java libraries.
    </p>

    <h2>High Level Logic on PC</h2>
    <p>
      Hobbyists, and even many professionals, seem to want to do as much as possible on the on-board computers or
      microcontrollers. I am guessing many of them come from an EE background. I am of the opposite mind though. I want
      to do as much as possible on the PC. My reasons for preferring to develop on PC vs. microcontroller:
    </p>
    <ul>
      <li>More advanced development tools available</li>
      <li>Often using same tools I already use for business app development</li>
      <li>More resources available (CPU and Memory)</li>
      <li>More language/platform options &amp;</li>
      <li>Easier to test and debug.</li>
    </ul>
    <p>
      The only reason not to do something on the PC is that it would be too slow. As it turns out in robotics, that is
      often the case, and so highly optimized routines and lower-level microcontroller programming is required. Still,
      being able to do as much of the high-level, non real-time, logic on the PC as possible opens up a lot of
      possibilities.
    </p>

    <h2>TCP/IP Server and Serial Port Proxy</h2>
    <p>
      The TCP/IP server is a custom C++ server that listens on a generic network socket for clients. Its primary purpose
      is to convert network messages to serial messages that get sent to the microcontroller and vice-a-versa.
    </p>
    <p>
      The C++ server was written in cross-platform C++, making significant use of
      <a href="http://www.boost.org/">Boost</a>
      . Boost provides the cross-platform threading, network socket abstraction, and serial port abstraction. (The
      network and serial port programming share the same paradigm in the
      <a href="http://think-async.com/">Boost::ASIO library</a>
      ). Everything in Boost is impressive, but the ASIO library especially strikes me as being written by the elite of
      C++ craftsmen.) If you want to get a feel for the type of programming involved, you can see snippets of my code in
      a question I posted to StackOverflow while working on this a while ago: &ldquo;<a
        href="http://stackoverflow.com/questions/4466573/how-should-i-delete-a-child-object-from-within-a-parents-slot-possibly-boosta"
      >
        How should I delete a child from parent’s slot? </a
      >&rdquo;.
    </p>
    <p>
      The C++ server is very generic in its base from. As part of the initial setup protocol when a client connects (all
      of which is custom), the client instructs the server which serial port to open and provides port configuration
      parameters. The server is meant to be an executable piece of code requiring little to no configuration that can be
      run almost anywhere to provide network to serial conversion. The ability to run it almost anywhere is important
      because it means that the server can be run on the PC workstation, or it can be run on an on-board computer
      (perhaps even one as small as a
      <a href="http://www.gumstix.com/">Linux Gumstix</a>
      .) C/C++ is not the easiest of languages, but it can be one of the most cross-platform in source code form. After
      developing the C++ server, I came across a few open source projects that are essentially doing the same thing.
      (i.e. TCP/IP to Serial proxying). However, I didn’t see anything open source that could be easily made
      cross-platform or that looked as robust and as flexible as the server I developed myself using ASIO.
    </p>
    <p>
      Instead of C++, I could have used Java. I have used
      <a href="http://rxtx.qbang.org">RXTX</a>
      for serial port access and
      <a href="http://bluecove.org/">Bluecove</a>
      for Bluetooth access in Java successfully. However, there were minor issues with both. (RXTX wasn’t super
      reliable. Bluecove experienced random delays when connecting.) More importantly though, using Java would have
      severely limited options for running the serial port proxy on embedded devices.
    </p>
    <h3>Native Capabilities</h3>
    <p>
      Another benefit to using a custom C++ server is that it provides the option to write very low-level routines if
      needed. Most of the better GUI frameworks and platforms I’m familiar with (Java, Flex/Flash/AIR, Java) have
      limited capabilities for interacting with low-level OS functions and hardware directly. (Java provides
      <a href="http://blog.frankel.ch/jna-meets-jni">JNI/JNA</a>
      , but that would mean yet another conversion layer.) There are ways of integrating native C/C++ code with these
      platforms, but the techniques and/or libraries are specific to each platform. By providing a smartly designed
      network interface, the native interfacing layer is common and sharable with all the front-end platforms.
    </p>
    <p>
      If needed, I can implement C/C++ routines when and where needed, which can then be easily called by any client via
      the uniform network interface. The network latency might be a problem for certain types of problems, but this is
      still a great addition to the framework’s capabilities.
    </p>

    <h1>Microcontroller</h1>
    <p>
      The microcontroller is where the programming hits the metal. This type of programming is often referred to as
      embedded programming or realtime programming.
    </p>
    <p>
      There are significant differences in the various types of microcontrollers and related programming distinctions,
      but these differences would seem arcane to anyone outside of the embedded space. Keep in mind that a company might
      be producing hundreds of thousands of devices with an embedded microcontroller and being able to select a
      microcontroller that costs even a few cents less at bulk quantities can be a significant cost difference. For this
      reason many microcontrollers are highly specialized and limited in their capabilities. Luckily, hobbyists don’t
      have to make the same trade-offs and the sorts-of microcontrollers I’m interested in tend to be more powerful and
      feature rich.
    </p>
    <p>
      One of the more popular microcontroller platforms for hobbyists currently is the
      <a href="http://www.arduino.cc/">Aurdino</a>
      . However, I wanted something more powerful, so my baseline is a
      <a href="http://en.wikipedia.org/wiki/Parallax_Propeller">Parallax Propeller</a>
      microcontroller. (
      <a href="http://www.parallax.com/">Parallax</a>
      is probably best known for creating the BasicStamp line of microcontrollers.) The propellor is available in
      various forms. I started with the
      <a href="https://www.parallax.com/product/32210">education kit (breadboard and 40-pin DIP)</a>
      so I could learn the Propellor’s Spin language. I then purchased a PropStick USB:
    </p>

    <div class="row">
      <div class="col-6 offset-3">
        <figure class="figure">
          <a href="/i/projects/2011/robotics-framework/PropStickUSB-32210-L.jpg">
            <img
              class="figure-img img-fluid rounded img-thumbnail"
              src="/i/projects/2011/robotics-framework/PropStickUSB-32210-L.jpg"
          /></a>

          <figcaption class="figure-caption text-center">PropStickUSB</figcaption>
        </figure>
      </div>
    </div>
    <p>
      This is a smaller version of the chip with supporting voltage regulators and USB interface already soldered on. I
      put this onto a custom board where I soldered headers for connecting servos. The end result is quite powerful (for
      a microcontroller), easy to program (via USB), and yet is smaller than most dedicated servo controllers.
    </p>

    <a href="/i/projects/2011/robotics-framework/CustomPropBoard.jpg">
      <figure class="figure">
        <img
          class="figure-img img-fluid rounded img-thumbnail"
          src="/i/projects/2011/robotics-framework/CustomPropBoard.jpg"
        />
        <figcaption class="figure-caption text-center">My custom board compared to SSC-32</figcaption>
      </figure>
    </a>

    <p>
      The only technical difficulty I’ve run in to so far with the propellor that I probably wouldn’t have with the
      Arduino, is that the Propellor is 3.3v, whereas the Arduino is 5.0v. Because of that I had to be careful with the
      power rails to the servos. (I think I need to redo my current power connection setup regardless. I didn’t count on
      how just how much amperage could be needed if all servos are active at the same time.)
    </p>
    <p>
      A key feature of the Propellor design is the notion of &quot;Cogs&quot; …a paradigm for multithreaded like
      programming:
    </p>

    <a href="/i/projects/2011/robotics-framework/PropellerBlock-L.jpg">
      <figure class="figure">
        <img
          class="figure-img img-fluid rounded img-thumbnail"
          src="/i/projects/2011/robotics-framework/PropellerBlock-L.jpg"
        />
        <figcaption class="figure-caption text-center">
          Propeller Block Diagram courtesy of Parallax (click to enlarge)
        </figcaption>
      </figure>
    </a>

    <p style="text-align: left">
      The Propellor design does not use interrupts which is a big difference as compared to many other microcontrollers.
      The cog design is similar to having 8 CPUs each being given a slice of (real)time to operate with relatively safe
      access to shared resources. I have used this capability to simplify the programming such that one cog handles
      communications to/from the serial connection, two more cogs are used to track and drive PWM signals to the
      connected servos.
    </p>
    <p>
      On the device there could be other components and addons, such as a dedicated servo controller like the
      <a href="http://www.lynxmotion.com/p-1032-ssc-32u-usb-servo-controller.aspx"> Lynxmotion SSC-32</a>
      , sensors, motor drivers, and other hardware interfacing components. The expectation as that my custom
      microcontroller brokers all of these devices to the higher level layers of the framework. Common protocols and
      related terms at this level include PWM, I2C, RS232, RS485, TTL, SPI, 2-wire, Relays, H-Bridges, MOSFET, ESCs,
      BECs, etc.
    </p>

    <h2>Next</h2>
    <p>
      <em>
        UPDATE [2018] - This was written up a long time ago. Things have evolved. Myself included. I often wondered why
        I didn't mention why I chose not to use
        <a href="http://www.ros.org/">ROS</a>
        when I wrote this.
      </em>
    </p>

    <p>
      <em>
        My latest evolution of this idea was started in 2017 and is named
        <a href="https://github.com/kaliatech/r7">R7</a>
        .
      </em>
    </p>
  </ProjectDetail>
</template>
