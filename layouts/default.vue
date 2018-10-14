<template>
  <div>
    <main-navbar/>
    <main>
      <nuxt/>
    </main>
    <main-footer/>
  </div>
</template>
<script>
import MainNavbar from '~/components/MainNavbar'
import MainFooter from '~/components/MainFooter'

export default {
  components: {MainNavbar, MainFooter}
}
</script>
<style lang="scss">
  @import '~/assets/scss/main.scss';
</style>
