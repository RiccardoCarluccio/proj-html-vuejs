<script>
  export default {

  };
</script>

<template>
  <div class="fluid-container">
    <div class="width-container">
      <h4>brand logos</h4>
      <div class="logos-container">
        <img src="../assets/images/b_logotype_1.png" alt="Forest.1864">
        <img src="../assets/images/b_logotype_2.png" alt="Badge Retro & Style">
        <img src="../assets/images/b_logotype_3.png" alt="Beard Fashion">
        <img src="../assets/images/b_logotype_4.png" alt="Est.Hype 2011">
        <img src="../assets/images/b_logotype_5.png" alt="A&Q Brand">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/variables" as *;
  @use "../../scss/partials/mixins" as *;
  .fluid-container {
    background-color: $color-text-light;
    padding: 4rem;

    .width-container {
      @include flex-col-center-center;
      gap: 3rem;

      h4 {
          text-transform: uppercase;
          color: $color-text;
          font-weight: 500;
          letter-spacing: 3px;
        }

        .logos-container {
          @include flex-center-center;
          gap: 4rem;
        }
    }
  }
</style>