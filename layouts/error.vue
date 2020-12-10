<template>
  <div class="container notfoundbg">
    <div class="row">
      <div class="col-12">
        <h1 v-if="error.statusCode === 404">Not Found</h1>
        <h1 v-else>An error occurred</h1>

        <div class="mt-1">
          <a href="javascript:history.back()">&lt;&lt; back </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default', // you can set a custom layout for the error page
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped>
@use '~/assets/scss/stacked-effect.sass' as stackedeffect;

div.notfoundbg {
  min-height: 50rem;
  background-image: url('~@/assets/i/404-top-1080.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  @include stackedeffect.border-radius(3px);
}
</style>
