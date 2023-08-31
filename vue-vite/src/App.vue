<script>
  import TheHeader from './components/TheHeader.vue';
  import TheJumbo from './components/TheJumbo.vue';
  import FeaturedProducts from './components/FeaturedProducts.vue';
  import Collections from './components/Collections.vue';

  export default {
    components: {
      TheHeader,
      TheJumbo,
      FeaturedProducts,
      Collections,
    }
  }
</script>

<template>
  <TheHeader/>
  <TheJumbo/>
  <FeaturedProducts/>
  <Collections/>
</template>

<style lang="scss">

</style>
