<template>
  <div class="container">
    <h1>Contact</h1>

    <p class="lead">Social Links</p>

    <div class="row">
      <div class="col-12">
        <div class="social-btns-cont">
          <a class="btn btn-primary" href="https://www.linkedin.com/in/jgsanderson/">
            <span class="icon">
              <fa :icon="['fab', 'linkedin']" />
            </span>
            LinkedIn
          </a>
          <a class="btn btn-primary" href="https://stackoverflow.com/users/123378/kaliatech">
            <span class="icon">
              <fa :icon="['fab', 'stack-overflow']" />
            </span>
            StackOverflow
          </a>
          <a class="btn btn-primary" href="https://github.com/kaliatech">
            <span class="icon">
              <fa :icon="['fab', 'github']" />
            </span>
            GitHub
          </a>
          <a class="btn btn-primary" href="https://twitter.com/jgstech">
            <span class="icon">
              <fa :icon="['fab', 'twitter']" />
            </span>
            Twitter
          </a>
          <a class="btn btn-primary" href="https://www.jgstechnical.com">
            <span class="icon">
              <fa :icon="['fas', 'globe']" />
            </span>
            JGS Technical
          </a>
        </div>
      </div>
    </div>

    <p class="lead mt-3">Details</p>

    <div class="row">
      <div class="col-12">
        email
        <a href="mailto:info@jgstechnical.com" title="Email Josh">info@jgstechnical.com</a>
        <br />
        phone +1 814.359.9317 USA <br />
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="map-responsive">
          <iframe
            allowfullscreen
            frameborder="0"
            height="480"
            src="https://www.google.com/maps/d/u/0/embed?mid=1TEsi5IaoFPmjnznqwtNBm1w95vwimlqv"
            width="640"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Contact | Kaliatech',
    }
  },
}
</script>
