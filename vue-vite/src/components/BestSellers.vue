<script>
  import BestSellersPreview from "./BestSellersPreview.vue";
  export default {
    components: {
      BestSellersPreview,
    }
  };
</script>

<template>
  <div class="fluid-container section best-seller-padding">
    <div class="width-column-container section-gap">
      <div class="width-container featured-products-section">
        <div class="section-line"></div>
        <div class="featured-title">
          <h2>best seller</h2>
        </div>
        <div class="section-line"></div>
      </div>
      <h4>Must have products from our top sellers</h4>
    </div>

    <div class="width-container">
      <BestSellersPreview/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/variables" as *;
  @use "../../scss/partials/mixins" as *;
  .best-seller-padding {
    padding: 8.5rem 0;
    .section-gap {
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
  }

</style>