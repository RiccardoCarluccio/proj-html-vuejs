<script>
  export default {

  }
</script>

<template>
  <div class="fluid-container collection-section">
    <div class="collection-preview">
      <img src="../assets/images/winter_collection_bg.jpg" alt="Winter Collection">
      <div class="collection-caption">
        <h2>winter collection</h2>
        <h4>stilish and warm</h4>
        <button>view more</button>
      </div>
    </div>

    <div class="collection-preview">
      <img src="../assets/images/spring_collection_bg.jpg" alt="Spring Collection">
      <div class="collection-caption">
        <h2>spring collection</h2>
        <h4>bright and colorful</h4>
        <button>view more</button>
      </div>
    </div>

    <div class="collection-preview">
      <img src="../assets/images/autumn_collection_bg.jpg" alt="Autumn Collection">
      <div class="collection-caption">
        <h2>autumn collection</h2>
        <h4>rich and comfortable</h4>
        <button>view more</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/variables" as *;
  @use "../../scss/partials/mixins" as *;
  .collection-section {
    @include flex-center-center;
    margin-top: 7rem;
    .collection-preview {
      width: calc(100% / 3);
      height: 610px;
      position: relative;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top;
      }

      .collection-caption {
        width: 365px;
        position: absolute;
        bottom: 3rem;
        left: 50%;
        transform: translate(-50%, 0);
        @include flex-col-center-center;
        gap: 0.8rem;

        h2,
        h4 {
          color: $color-primary;
        }

        h2 {
          text-transform: capitalize;
          font-size: 38px;
        }

        h4 {
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.2rem;
          text-transform: uppercase;
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
  }
</style>