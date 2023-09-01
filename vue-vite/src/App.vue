<script>
  import TheHeader from './components/TheHeader.vue';
  import TheJumbo from './components/TheJumbo.vue';
  import FeaturedProducts from './components/FeaturedProducts.vue';
  import Collections from './components/Collections.vue';
  import BestSellers from './components/BestSellers.vue';

  export default {
    components: {
      TheHeader,
      TheJumbo,
      FeaturedProducts,
      Collections,
      BestSellers,
    }
  }
</script>

<template>
  <TheHeader/>
  <TheJumbo/>
  <FeaturedProducts/>
  <Collections/>
  <BestSellers/>
</template>

<style lang="scss">

</style>
