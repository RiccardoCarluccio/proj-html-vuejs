<script>
  import FromOurBlogPreview from "./FromOurBlogPreview.vue";
  export default {
    components: {
      FromOurBlogPreview,
    }
  }
</script>

<template>
  <div class="fluid-container section section-padding">
    <div class="width-column-container section-gap">
      <div class="width-container featured-products-section">
        <div class="section-line"></div>
        <div class="featured-title">
          <h2>from our blog</h2>
        </div>
        <div class="section-line"></div>
      </div>
      <h4>The latest Classic Shop news</h4>
    </div>

    <div class="width-container">
      <FromOurBlogPreview/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/variables" as *;
  @use "../../scss/partials/mixins" as *;
  .section-padding {
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