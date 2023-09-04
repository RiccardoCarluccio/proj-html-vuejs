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

      <div class="hover-details">

        <div class="cart-details">
          <div class="center-details">
            <div>{{ obj.productName }}</div>
            <div>{{ obj.for }}</div>
            <div>${{ obj.currentPrice }}</div>
          </div>

          <div class="bottom-details">
            <div class="bottom-details-gap">
              <i class="fa-solid fa-cart-shopping"></i>Add to cart
            </div>
            <div class="bottom-details-gap">
              <i class="fa-solid fa-bars"></i>Details
            </div>
          </div>

        </div>
      </div>
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


  .hover-details {
    padding: 2rem;
  }
  .cart-details {
    position: relative;
    width: 100%;
    .center-details {
      width: 100%;
      @include flex-col-center-center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      gap: 5px;
    }

    .bottom-details {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;

      .bottom-details-gap {
        display: flex;
        gap: 3px;
      }
    }
  }

  .center-details div:nth-child(1) {
    font-size: 14px;
    font-weight: 600;
  }

  .center-details div:nth-child(3) {
    margin-top: 1rem;
    font-size: 16px;
    font-weight: 600;
  }
  
</style>

<!--234x304-->