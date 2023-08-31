<script>
  import HeaderLinks from './HeaderLinks.vue';
  import HeaderNav from './HeaderNav.vue';

  export default {
    components: {
      HeaderLinks,
      HeaderNav,
    },
  }
</script>

<template>
  <div class="fluid-container">
    <div class="width-column-container">
      <HeaderLinks/>
      <HeaderNav/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;

  .fluid-container::after {
    content: "";
    border: 1px solid $color-text-light;
    width: 100%;
    position: absolute;
    top: 45px;
  }
</style>