<script>
  import FeaturedProductPreviews from "./FeaturedProductPreviews.vue";
  import productDatabase from "../productDatabase.json";
  import { store, changeGender } from "../store.js";

  export default {
    data() {
      return {
        productDatabase,
        store,
      }
    },
    components: {
      FeaturedProductPreviews,
    },
    methods: {
      changeGender,
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
      <button @click="changeGender(`Men`)">men</button>
      <button @click="changeGender(`Women`)">women</button>
      <button @click="changeGender(`Accessories`)">accessories</button>
    </div>

    <div class="width-container">
      <div v-for="product in productDatabase">
        <FeaturedProductPreviews :obj="product"/>
      </div>
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
    padding: 0.8rem 3rem;
    font-weight: 600;
    border: 1px solid $color-text-light;
    font-size: 16px;
  }
</style>