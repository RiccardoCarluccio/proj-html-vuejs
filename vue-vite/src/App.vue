<script>
  import TheHeader from './components/TheHeader.vue';
  import TheJumbo from './components/TheJumbo.vue';
  import FeaturedProducts from './components/FeaturedProducts.vue';
  import Collections from './components/Collections.vue';
  import BestSellers from './components/BestSellers.vue';
  import SaleShippingInfo from './components/SaleShippingInfo.vue';
  import NewArrivals from './components/NewArrivals.vue';
  import Testimonials from './components/Testimonials.vue';
  import FromOurBlog from './components/FromOurBlog.vue';
  import Reviews from './components/Reviews.vue';
  import TheFooter from './components/TheFooter.vue';

  export default {
    components: {
      TheHeader,
      TheJumbo,
      FeaturedProducts,
      Collections,
      BestSellers,
      SaleShippingInfo,
      NewArrivals,
      Testimonials,
      FromOurBlog,
      Reviews,
      TheFooter,
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
  <NewArrivals/>
  <Testimonials/>
  <FromOurBlog/>
  <Reviews/>

  <TheFooter/>
</template>

<style lang="scss">
  
</style>
