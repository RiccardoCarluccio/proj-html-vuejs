<script>
  import Contacts from './Contacts.vue';
  import TopRatedProducts from './TopRatedProducts.vue';

  export default {
    components: {
      Contacts,
      TopRatedProducts,
    }
  };
</script>

<template>
  <div class="fluid-container">
    <div class="width-container">
      <div class="summary-column">
        <Contacts/>
      </div>
      <div class="summary-column">
        <TopRatedProducts/>
      </div>
      <div class="summary-column">

      </div>
      <div class="summary-column">

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/variables" as *;
  @use "../../scss/partials/mixins" as *;
  .fluid-container {
    background-color: $background-footer;
    padding: 5rem;
    color: $color-primary;
    .width-container {
      align-items: flex-start;
      .summary-column {
        @include flex-col-center-start;
        gap: 3rem;
        width: calc(100% / 4.5);
      }
    }
  }
</style>