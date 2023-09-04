<script>
  import { store, getImage } from "../store.js";

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
      getImage,
    },
  };
</script>

<template>
  <div class="featured-preview-container" v-if="obj.for === store.selectedGender">
    <div class="featured-image-container">
      <img :src="getImage(obj)" :alt="obj.productName">
    </div>
    <div class="featured-product-description">
      <h4> {{ obj.productName }} </h4>
      <h6>
        <span>{{ obj.for }}, </span>
        <span v-if="obj.gender">{{ obj.gender }}<span v-if="obj.type">, </span></span>
        <span v-if="obj.type">{{ obj.type }}</span>
        <span v-if="obj.upper">{{ obj.upper }}<span v-if="obj.lower">, </span></span>
        <span v-if="obj.lower">{{ obj.lower }}</span>
      </h6>
      <p class="featured-price">
        <span v-if="obj.fullPrice">$</span>
        <span v-if="obj.fullPrice" class="barred-text">{{ obj.fullPrice }}</span>
        ${{obj.currentPrice}}</p>
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