<script>
  import FeaturedProductPreviews from "./FeaturedProductPreviews.vue";
  export default {
    components: {
      FeaturedProductPreviews,
    }
  };
</script>

<template>
  <div class="fluid-container section">
    <div class="width-column-container featured-gap">
      <div class="width-container featured-products-section">
        <div class="section-line"></div>
        <div class="featured-title">
          <h2>featured products</h2>
        </div>
        <div class="section-line"></div>
      </div>
      <h4>Must have products from our top sellers</h4>
    </div>

    <div class="width-container">
      <button>men</button>
      <button>women</button>
      <button>accessories</button>
    </div>

    <div class="width-container">
      <FeaturedProductPreviews/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/variables" as *;
  @use "../../scss/partials/mixins" as *;
  //featured products
  .featured-gap {
    gap: 1rem;
  
    .featured-products-section {
      @include flex-center-center;
      gap: 0.8rem;

      .section-line {
        flex-grow: 1;
        border: 1px solid $color-text-light;
      }

      h2 {
        text-transform: capitalize;
        font-size: 36px;
      }
    }
    h4 {
      color: $color-text;
      font-weight: 400;
    }
  }  

  //buttons
  button {
    background-color: $color-light-background;
    text-transform: capitalize;
    padding: 1rem 3rem;
    font-weight: 600;
    border: 1px solid $color-text-light;
    font-size: 16px;
  }
</style>