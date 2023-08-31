<script>
  export default {

  }
</script>

<template>
  <div class="fluid-container jumbo-fluid-container">
    <div class="width-column-container jumbo-container">
      <h1>avada classic shop</h1>
      <h2>show your products with style</h2>
      <button>get avada now!</button>
    </div>

    <div class="jumbo-options prebuilts-option">
      <i class="fa-solid fa-dragon"></i>
      <p>prebuilts</p>
    </div>
    <div class="jumbo-options buy-now-option">
      <i class="fa-solid fa-cart-shopping"></i>
      <p>buy now</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/variables" as *;
  @use "../../scss/partials/mixins" as *;
  .jumbo-fluid-container {
    background-image: url("../assets/images/home1_slide_one_bg.jpg");
    height: 650px;
    color: $color-primary;
    background-size: cover;
    position: relative;

    h1 {
      text-transform: capitalize;
      font-size: 84px;
    }

    h2 {
      text-transform: uppercase;
      font-size: 28px;
    }

    .width-column-container {
      gap: 1rem;
    }

    button {
      padding: 1rem 3rem;
      border: 2px solid $color-primary;
      border-radius: 25px;
      background-color: rgba(255, 255, 255, 0.1);
      color: $color-primary;
      text-transform: uppercase;
      font-weight: 800;
      letter-spacing: 1px;
      margin-top: 2rem;
    }

    .jumbo-options {
      height: 66px;
      width: 66px;
      background-color: $color-primary;
      border-radius: 7px;
      color: $color-text;
      @include flex-col-center-center;
      text-transform: capitalize;
      gap: 0.6rem;

      i {
        font-size: 18px;
      }

      p {
        font-size: 12px;
        font-weight: 600;
      }
    }

    .prebuilts-option {
        position: absolute;
        top: 0;
        right: 1rem;
    }

    .buy-now-option {
      position: absolute;
      top: 71px;
      right: 1rem;
    }
  }
</style>