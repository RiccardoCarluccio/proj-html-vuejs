<script>
  import NewArrivalsPreview from './NewArrivalsPreview.vue';
  import productDatabase from "../productDatabase.json";
  import { store } from "../store.js";

  export default {
    data() {
      return {
        productDatabase,
        store,
      }
    },
    components: {
      NewArrivalsPreview,
    }
  };
</script>

<template>
  <div class="fluid-container section section-padding">
    <div class="width-column-container section-gap">
      <div class="width-container featured-products-section">
        <div class="section-line"></div>
        <div class="featured-title">
          <h2>new arrivals</h2>
        </div>
        <div class="section-line"></div>
      </div>
      <h4>Brand new products from top designers</h4>
    </div>

    <div class="fluid-container carousel-container">
      <div class="arrow left-arrow">
        <i class="fa-solid fa-angle-left"></i>
      </div>
      <div class="arrow right-arrow">
        <i class="fa-solid fa-angle-right"></i>
      </div>
        <NewArrivalsPreview v-for="product in productDatabase" :obj="product"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/variables" as *;
  @use "../../scss/partials/mixins" as *;
  .section-padding {
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