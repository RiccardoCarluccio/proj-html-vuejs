<script>
  export default {

  };
</script>

<template>
  <div class="fluid-container">
    <div class="mini-container">
      <p>@Copyright 2012 - 2023 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</p>
      <img src="../assets/images/payment_cards_footer.png" alt="Payments Methods">
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/variables" as *;
  @use "../../scss/partials/mixins" as *;

  .fluid-container {
    background-color: $background-dark;
    color: $color-primary;
    @include flex-center-center;
    padding: 2.5rem;

    .mini-container {
      width: 60%;
      @include flex-col-center-center;
      gap: 1rem;
    }
  }
</style>