<script>
  export default {

  }
</script>

<template>
  <div class="fluid-container section sale-shipping-info">
    <div class="width-container">
      <div class="preview-info sale-info">
        <div class="description">
          <h2>70% off</h2>
          <p>Vivamus tempor leo lacus, feugiat ut magna aliquam erat.</p>
          <button>view more</button>
        </div>
      </div>

      <div class="preview-info shipping-info">
        <div class="description">
          <h2>free shipping</h2>
          <p>Vivamus tempor leo lacus, feugiat ut magna aliquam erat.</p>
          <button>view more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;

  .sale-shipping-info {
    background-image: url("../assets/images/bkgd_confetti-compressor.jpg");
    background-size: 120%;
    background-position: center;

    .width-container {
      gap: 2rem;

      .preview-info {
        width: 550px;
        height: 350px;
        position: relative;
        background-size: contain;
        background-repeat: no-repeat;

        .description {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 0.4rem;
          position: absolute;
          top: 50%;
          left: 15%;
          transform: translate(0, -50%);
          color: $color-primary;

          h2 {
            font-size: 2.3rem;
            text-transform: capitalize;
          }

          p {
            font-size: 0.9rem;
            line-height: 2rem;
          }

          button {
            padding: 0.7rem 1.5rem;
            border: 2px solid $color-primary;
            border-radius: 25px;
            background-color: rgba(255, 255, 255, 0.1);
            color: $color-primary;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 1px;
            margin-top: 0.8rem;
          }
        }
      }

      .sale-info {
        background-image: url("../assets/images/promo_box_1_bg.jpg");
      }

      .shipping-info {
        background-image: url("../assets/images/promo_box_2_bg.jpg");
      }
    }
  }
</style>