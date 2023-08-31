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
  <div class="header-container">
    <div class="width-container">
      <HeaderLinks/>
      <HeaderNav/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;
  .header-container {
    width: 100%;
    @include flex-center-center;
    position: relative;
  }

  .header-container::after {
    content: "";
    border: 1px solid $color-text-light;
    width: 100%;
    position: absolute;
    top: 45px;
  }
</style>