<template>
  <div class="row" :class="center ? 'justify-content-center' : ''">
    <div :class="cols">
      <div
        class="mermaid"
        :style="{
          width: width,
          height: height,
          visibility: ready ? 'visible' : 'hidden',
          margin: center ? 'auto' : '',
        }"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
// Alternatively: https://github.com/dword-design/nuxt-mermaid-string
export default {
  props: {
    height: { type: String, default: '100%' },
    width: { type: String, default: 'auto' },
    cols: { type: String, default: 'col-6 col-sm-5 col-md-3' },
    center: { type: Boolean, default: true },
  },
  data() {
    return {
      ready: false,
    }
  },
  mounted() {
    import('mermaid/dist/mermaid').then((m) => {
      m.initialize({
        security: 'antiscript',
        startOnLoad: false,
        theme: 'default',
        flowchart: {
          useMaxWidth: false,
        },
      })
      m.init()
      this.ready = true
    })
  },
}
</script>
