<script>
  export default {

  };
</script>

<template>
  <div class="featured-preview-container">
    <div class="featured-image-container">
      <img src="../assets/images/black_elegant_leather_jacket.jpg" alt="Black Leather Jacket">
    </div>
    <div class="featured-product-description">
      <h4>black leather jacket</h4>
      <h6>men, jackets, jeans</h6>
      <p class="featured-price"><span class="barred-text">$235</span> $200</p>
    </div>
  </div>

  <div class="featured-preview-container">
    <div class="featured-image-container">
      <img src="../assets/images/black_leather_suit.jpg" alt="Black Leather Jacket">
    </div>
    <div class="featured-product-description">
      <h4>black leather suit</h4>
      <h6>men, jackets</h6>
      <p class="featured-price">$176</p>
    </div>
  </div>

  <div class="featured-preview-container">
    <div class="featured-image-container">
      <img src="../assets/images/blue_jacket_and_white_stripe_tee.jpg" alt="Black Leather Jacket">
    </div>
    <div class="featured-product-description">
      <h4>black jacket & stripe tee</h4>
      <h6>men, jackets, suits</h6>
      <p class="featured-price">$580</p>
    </div>
  </div>

  <div class="featured-preview-container">
    <div class="featured-image-container">
      <img src="../assets/images/modern_black_leather_suit.jpg" alt="Black Leather Jacket">
    </div>
    <div class="featured-product-description">
      <h4>modern black leather suit</h4>
      <h6>men, jackets</h6>
      <p class="featured-price">$96</p>
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
      height: 370px;
      width: 285px;

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