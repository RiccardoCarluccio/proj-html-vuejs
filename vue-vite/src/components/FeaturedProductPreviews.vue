<script>
  import { store } from "../store.js";

  export default {
    data() {
      return {
        store,
      }
    },
    props: {
      obj: {
        productName: {type: String,
                    required: true},
        path: String,
        gender: {type: String,
                required: true},
        upper: String,
        lower: String,
      }
    },
    methods: {
      getImage(obj) {
          return new URL(`../assets/images/${obj.path}`, import.meta.url).href;
      },
    },
  };
</script>

<template>
  <div class="featured-preview-container" v-if="obj.gender === store.selectedGender">
    <div class="featured-image-container">
      <img :src="getImage(obj)" :alt="obj.productName">
    </div>
    <div class="featured-product-description">
      <h4> {{ obj.productName }} </h4>
      <h6>
        <span>{{ obj.gender }}, </span>
        <span v-if="obj.upper">{{ obj.upper }}<span v-if="obj.lower">, </span></span>
        <span v-if="obj.lower">{{ obj.lower }}</span>
      </h6>
      <p class="featured-price">
        <span v-if="obj.fullPrice">$</span>
        <span class="barred-text">{{ obj.fullPrice }}</span>
        ${{obj.discountPrice}}</p>
    </div>
  </div>

  <!-- <div class="featured-preview-container">
    <div class="featured-image-container">
      <img src="../assets/images/black_leather_suit.jpg" alt="Black Leather Suit">
    </div>
    <div class="featured-product-description">
      <h4>black leather suit</h4>
      <h6>men, jackets</h6>
      <p class="featured-price">$176</p>
    </div>
  </div>

  <div class="featured-preview-container">
    <div class="featured-image-container">
      <img src="../assets/images/blue_jacket_and_white_stripe_tee.jpg" alt="Black Jacket & Stripe Tee">
    </div>
    <div class="featured-product-description">
      <h4>black jacket & stripe tee</h4>
      <h6>men, jackets, suits</h6>
      <p class="featured-price">$580</p>
    </div>
  </div>

  <div class="featured-preview-container">
    <div class="featured-image-container">
      <img src="../assets/images/modern_black_leather_suit.jpg" alt="Modern Black Leather Suit">
    </div>
    <div class="featured-product-description">
      <h4>modern black leather suit</h4>
      <h6>men, jackets</h6>
      <p class="featured-price">$96</p>
    </div>
  </div> -->
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