<script>
  export default {

  };
</script>

<template>
  <div class="featured-preview-container">
    <div class="featured-image-container">
      <img src="../assets/images/black_elegant_leather_jacket.jpg" alt="Black Leather Jacket">
    </div>
  </div>

  <div class="featured-preview-container">
    <div class="featured-image-container">
      <img src="../assets/images/black_leather_suit.jpg" alt="Black Leather Suit">
    </div>
  </div>

  <div class="featured-preview-container">
    <div class="featured-image-container">
      <img src="../assets/images/blue_jacket_and_white_stripe_tee.jpg" alt="Black Jacket & Stripe Tee">
    </div>
  </div>

  <div class="featured-preview-container">
    <div class="featured-image-container">
      <img src="../assets/images/modern_black_leather_suit.jpg" alt="Modern Black Leather Suit">
    </div>
  </div>

  <div class="featured-preview-container">
    <div class="featured-image-container">
      <img src="../assets/images/hipster_black_top.jpg" alt="Modern Black Leather Suit">
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/variables" as *;
  @use "../../scss/partials/mixins" as *;
  //featured products
  .featured-preview-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .featured-image-container {
      height: 304px;
      width: 234px;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .featured-product-description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.3rem;
    }

    h4,
    h6 {
      text-transform: capitalize;
    }

    h4 {
      font-weight: 600;
      color: black;
    }

    h6 {
      color: $color-text;
      font-weight: 500;
      font-size: 12px;
    }

    .featured-price {
      color: $color-interactive;
      font-size: 12px;
      padding-top: 0.3rem;
    }
  }
</style>

<!--234x304-->