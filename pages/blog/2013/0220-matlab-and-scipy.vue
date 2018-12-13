<template>
  <BlogPost title="Matlab Integration and Alternatives, such as SciPy" date="2013-02-20">
    <p>
      This post contains informal notes collected while researching options and techniques for using Matlab to do
      complex numerical programming work while integrating with existing code bases. Also includes notes and links on
      alternatives. I used a trial version of MATLAB R2012B to build a proof-of-concept against an existing Java based
      project.
    </p>
    <h3>Using Java from within Matlab</h3>
    <hr>
    <p>
      The java integration with Matlab is straightforward and works well.&nbsp; (The same seems to be true for .NET
      integration, although I didn’t test it.) &nbsp;&nbsp;No additional toolboxes or addons are required, beyond the
      core Matlab product, in order to call java classes from within Matlab.
    </p>
    <p>
      However, there is one significant caveat; the java classpath of any custom code must share the classpath with
      matlab, and matlab includes a number of well-known libraries. My proof-of-concept project also used a lot of
      libraries and so there were a number of conflicts that made it difficult to reuse my code in Matlab directly. I
      almost got it to work eventually and probably could’ve if I continued, but I ended up taking a different approach
      using a remote network interface rather than direct Java library calls. The network based approach is much more
      flexible and doesn’t suffer from the classpath conflict issues
    </p>
    <ul>
      <li>
        <a href="http://www.mathworks.com/help/matlab/using-java-libraries-in-matlab.html">
          http://www.mathworks.com/help/matlab/using-java-libraries-in-matlab.html
        </a>
      </li>
      <li>
        <a href="http://www.mathworks.com/matlabcentral/answers/5892-use-java-classes-in-matlab">
          http://www.mathworks.com/matlabcentral/answers/5892-use-java-classes-in-matlab
        </a>
      </li>
      <li>
        <a href="http://undocumentedmatlab.com/blog/matlab-and-the-event-dispatch-thread-edt/">
          http://undocumentedmatlab.com/blog/matlab-and-the-event-dispatch-thread-edt/
        </a>
      </li>
    </ul>
    <p>
      In my proof-of-concept I published an RMI service as an interface in to my existing code base (which required
      minimal amount of code &amp; setup since I was already using Spring Framework). I then built a small JAR library
      for use by Matlab that provided an RMI client proxy to the remote services. I used RMI, but could easily have used
      any other remoting protocol as well, such as Spring’s HTTP remoting. This setup worked well, and is flexible
      because it provides a dedicated area where matlab specific conversions and handling can be done with impact on
      existing code. It is also negated issues with classpath conflicts. Yet another benefit was that the Matlab client
      could be running on a different machine than the server code base.
    </p>
    <h3>Using .NET from within Matlab</h3>
    <hr>
    <p>
      Similar to Java integration, no additional toolboxes or addons are required in order to call .NET assemblies from
      within Matlab.
    </p>
    <ul>
      <li>
        <a href="http://www.mathworks.com/help/matlab/using-net-libraries-in-matlab.html">
          http://www.mathworks.com/help/matlab/using-net-libraries-in-matlab.html
        </a>
      </li>
    </ul>
    <h3>Calling Matlab from Java/.NET</h3>
    <hr>
    <p>
      Calling in to matlab from Java/.NET requires addons. The official approach to is to purchase the matlab compiler
      and then a standalone toolbox specific to each platform. This combination lets you compile standalone executables
      (and libraries?).
    </p>
    <h4>Pricing</h4>
    <p>
      I’m not sure what the rules are around publishing pricing information, but suffice to say, the official Matlab
      approach requires a relatively expensive initial investment. &nbsp;Required components include:
    </p>
    <ul>
      <li>Matlab Core</li>
      <li>Matlab Compiler</li>
      <li>Matlab Builder for Deployment &nbsp;(per platform)</li>
    </ul>
    <p>
      The initial pricing I received would’ve required &gt;$10k to get started. There are no runtime distribution costs
      though.</p>
    <h4>Alternative Unofficial Approaches</h4>
    <ul>
      <li>
        <a href="https://code.google.com/p/matlabcontrol/">https://code.google.com/p/matlabcontrol/</a>
      </li>
      <li>
        <a href="http://www.cs.virginia.edu/~whitehouse/matlab/JavaMatlab.html">
          http://www.cs.virginia.edu/~whitehouse/matlab/JavaMatlab.html
        </a>
      </li>
      <li>
        <a href="http://www.cs.utoronto.ca/~bowen/code/code.html#matjav">
          http://www.cs.utoronto.ca/~bowen/code/code.html#matjav
        </a>
      </li>
      <li>
        <a href="http://jamal.khadkevich.org">http://jamal.khadkevich.org</a>&nbsp;/&nbsp;
        <a href="https://github.com/hutm/JAMAL">
          https://github.com/hutm/JAMAL
        </a>
      </li>
    </ul>
    <h3>Additional Research</h3>
    <hr>
    <p>The remaining part of this post is primarily a collection of links and notes I generated while researching.</p>
    <p>
      I don’t have much experience using external math engines in recent projects, however, based on what I’ve
      researched, I would not lean towards using Matlab for my own projects these days. It might be different if I had
      extensive knowledge of Matlab already, or lots of code that depended on it.</p>
    <h4>Matlab Alternatives</h4>
    <ul>
      <li>
        SciPy:&nbsp;
        <a href="http://en.wikipedia.org/wiki/SciPy">http://en.wikipedia.org/wiki/SciPy</a>
      </li>
      <li>
        GNU Octave :
        <a href="http://en.wikipedia.org/wiki/GNU_Octave">http://en.wikipedia.org/wiki/GNU_Octave</a>
      </li>
      <li>
        Scilab:&nbsp;<a href="http://www.scilab.org/">http://www.scilab.org/</a>
      </li>
      <li>
        Sage:&nbsp;<a href="http://www.sagemath.org/">http://www.sagemath.org/</a>&nbsp;(more symbolic math oriented?
        e.g. More like Mathematica vs. Matlab)
      </li>
    </ul>
    <h4>NumPy/SciPy</h4>
    <ul>
      <li>
        <a href="http://www.scipy.org/more_about_SciPy">ttp://www.scipy.org/more_about_SciPy</a>
      </li>
      <li>
        <a href="http://docs.scipy.org/doc/">http://docs.scipy.org/doc/</a>
      </li>
      <li>
        <a href="http://stackoverflow.com/questions/6200910/relationship-between-scipy-and-numpy">
          http://stackoverflow.com/questions/6200910/relationship-between-scipy-and-numpy
        </a>
      </li>
    </ul>
    <h4>Matlab to NumPy</h4>
    <ul>
      <li>
        <a href="http://www.scipy.org/NumPy_for_Matlab_Users">http://www.scipy.org/NumPy_for_Matlab_Users</a>
      </li>
      <li>
        <a href="http://mathesaurus.sourceforge.net/matlab-numpy.html">
          http://mathesaurus.sourceforge.net/matlab-numpy.html
        </a>
      </li>
    </ul>
    <h3>NumPy/SciPy Development</h3>
    <hr>
    <h4>Dedicated SciPy IDEs</h4>
    <ul>
      <li>
        <a href="http://enthought.com/products/epd.php">http://enthought.com/products/epd.php</a>
      </li>
      <li>
        <a href="http://code.google.com/p/spyderlib/">http://code.google.com/p/spyderlib/</a>
      </li>
      <li>
        <a href="http://code.google.com/p/pythonxy/">http://code.google.com/p/pythonxy/</a>
      </li>
    </ul>
    <h4>Generic Python IDEs</h4>
    <ul>
      <li>
        <a href="http://www.jetbrains.com/pycharm/">http://www.jetbrains.com/pycharm/</a>
      </li>
      <li>
        <a href="http://wingware.com/">http://wingware.com/</a>
      </li>
      <li>
        <a href="http://ipython.org/">http://ipython.org/</a>
      </li>
    </ul>
    <h4>Plotting</h4>
    <ul>
      <li>
        <a href="http://matplotlib.org/">http://matplotlib.org/</a>
      </li>
      <li>
        <a href="http://www.packtpub.com/matplotlib-python-development/book?utm_source=matplotlib.sourceforge.net&amp;utm_medium=link&amp;utm_content=pod&amp;utm_campaign=mdb_002124">
          http://www.packtpub.com/matplotlib-python-development/book?utm_source=matplotlib.sourceforge.net&amp;utm_medium=link&amp;utm_content=pod&amp;utm_campaign=mdb_002124
        </a>
      </li>
      <li>
        <a href="http://code.enthought.com/projects/mayavi/">http://code.enthought.com/projects/mayavi/</a>
      </li>
    </ul>
    <h3>Misc Links &amp; Articles</h3>
    <hr>
    <h4>Matlab vs PySci</h4>
    <ul>
      <li>
        <a href="http://stevetjoa.com/305/">http://stevetjoa.com/305/</a>
        , good info including the comments
      </li>
      <li>
        <a href="http://vnoel.wordpress.com/2008/05/03/bye-matlab-hello-python-thanks-sage/">
          http://vnoel.wordpress.com/2008/05/03/bye-matlab-hello-python-thanks-sage/
        </a>
      </li>
    </ul>
    <h4>Antecdotal</h4>
    <ul>
      <li>
        <a href="http://news.ycombinator.com/item?id=363096">http://news.ycombinator.com/item?id=363096</a>
      </li>
      <li>
        <a href="http://stackoverflow.com/a/11144102/123378">http://stackoverflow.com/a/11144102/123378</a>
      </li>
      <li>
        <a href="http://stackoverflow.com/questions/5063037/should-i-switch-to-python">
          http://stackoverflow.com/questions/5063037/should-i-switch-to-python
        </a>
      </li>
      <li>
        <a href="http://www.reddit.com/r/math/comments/tl77g/which_one_of_these_gpl_gnu_general_public_license/">
          http://www.reddit.com/r/math/comments/tl77g/which_one_of_these_gpl_gnu_general_public_license/
        </a>
      </li>
    </ul>
    <h4>Mathematica vs Matlab vs Sage vs Octave</h4>
    <ul>
      <li>
        <a href="http://math.stackexchange.com/questions/153/what-should-i-learn-first-mathematica-or-matlab">
          http://math.stackexchange.com/questions/153/what-should-i-learn-first-mathematica-or-matlab
        </a>
      </li>
      <li>
        <a href="http://sagemath.blogspot.com/2007/12/why-isnt-sage-just-part-of-octave.html">
          http://sagemath.blogspot.com/2007/12/why-isnt-sage-just-part-of-octave.html
        </a>
      </li>
    </ul>
    <h4>Python &amp; Qt, PySide/PyQt</h4>
    <ul>
      <li>
        <a href="http://askubuntu.com/questions/140740/should-i-use-pyqt-or-pyside-for-a-new-qt-project">
          http://askubuntu.com/questions/140740/should-i-use-pyqt-or-pyside-for-a-new-qt-project
        </a>
      </li>
      <li>
        <a href="http://www.pyinstaller.org/">http://www.pyinstaller.org/</a>
      </li>
      <li>
        <a href="http://www.stat.washington.edu/~hoytak/blog/bestlibraries.html">
          http://www.stat.washington.edu/~hoytak/blog/bestlibraries.html
        </a>
      </li>
      <li>
        <a href="http://code.google.com/p/guiqwt/">http://code.google.com/p/guiqwt/</a>
      </li>
      <li>
        <a href="http://www.pyqtgraph.org/">http://www.pyqtgraph.org/</a>
      </li>
      <li>
        <a href="http://pythonhosted.org/PyQt-Fit/">http://pythonhosted.org/PyQt-Fit/</a>
      </li>
    </ul>
    <h4>Matlab &amp; Python</h4>
    <ul>
      <li>
        <a href="http://stackoverflow.com/questions/1707780/call-python-function-from-matlab">
          http://stackoverflow.com/questions/1707780/call-python-function-from-matlab
        </a>
      </li>
      <li>
        <a href="http://www.mathworks.com/matlabcentral/newsreader/view_thread/290116">
          http://www.mathworks.com/matlabcentral/newsreader/view_thread/290116
        </a>
      </li>
    </ul>
    <h3>Matlab, Misc</h3>
    <hr>
    <ul>
      <li>
        <a href="http://stackoverflow.com/questions/2326609/how-to-organize-matlab-code">
          http://stackoverflow.com/questions/2326609/how-to-organize-matlab-code
        </a>
      </li>
      <li>
        <a href="http://www.datatool.com/prod02.htm">http://www.datatool.com/prod02.htm</a>
        <!-- eslint-disable-next-line -->
        <a href="http://stackoverflow.com/questions/2326609/how-to-organize-matlab-code">
          (matlab programmingstyle guidelines)
        </a>
      </li>
    </ul>
    <ul>
      <li>
        Important for Regression
        <ul>
          <li>
            <a href="http://www.mathworks.com/help/matlab/math/interpolating-gridded-data.html">
              http://www.mathworks.com/help/matlab/math/interpolating-gridded-data.html
            </a>
          </li>
          <li>
            <a href="http://www.mathworks.com/support/solutions/en/data/1-15NDN/index.html?product=ML&amp;solution=1-15NDN">
              http://www.mathworks.com/support/solutions/en/data/1-15NDN/index.html?product=ML&amp;solution=1-15NDN
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        Undocumented Matlab
        <ul>
          <li>
            <a href="http://undocumentedmatlab.com/blog/category/java/">
              http://undocumentedmatlab.com/blog/category/java/
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        Especially interesting:
        <ul>
          <li>
            <a href="http://undocumentedmatlab.com/blog/extending-a-java-class-with-udd/">
              http://undocumentedmatlab.com/blog/extending-a-java-class-with-udd/
            </a>
          </li>
          <li>
            <a href="http://undocumentedmatlab.com/blog/using-groovy-in-matlab/">
              http://undocumentedmatlab.com/blog/using-groovy-in-matlab/
            </a>
          </li>
          <li>
            <a href="http://undocumentedmatlab.com/blog/using-java-collections-in-matlab/">
              http://undocumentedmatlab.com/blog/using-java-collections-in-matlab/
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </BlogPost>
</template>
<style scoped="true">
  h3 {
    margin-top: 3rem;
  }
</style>
