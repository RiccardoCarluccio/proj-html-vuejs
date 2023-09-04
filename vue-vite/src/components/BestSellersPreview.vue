<script>
  import { store, getImage } from "../store";

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
  <div class="featured-preview-container" v-if="obj.for !== 'Accessories'">
    <div class="featured-image-container">
      <img :src="getImage(obj)" :alt="obj.productName">
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