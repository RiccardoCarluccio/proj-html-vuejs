<script>
  import TheHeader from './components/TheHeader.vue';
  import TheJumbo from './components/TheJumbo.vue';
  import FeaturedProducts from './components/FeaturedProducts.vue';
  import Collections from './components/Collections.vue';
  import BestSellers from './components/BestSellers.vue';
  import SaleShippingInfo from './components/SaleShippingInfo.vue';

  export default {
    components: {
      TheHeader,
      TheJumbo,
      FeaturedProducts,
      Collections,
      BestSellers,
      SaleShippingInfo,
    }
  }
</script>

<template>
  <TheHeader/>
  <TheJumbo/>
  <FeaturedProducts/>
  <Collections/>
  <BestSellers/>
  <SaleShippingInfo/>
</template>

<style lang="scss">

</style>
