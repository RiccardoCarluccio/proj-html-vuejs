<script>
  import BrandLogos from './BrandLogos.vue';
  import Newsletter from './Newsletter.vue';
  import SiteSummary from './SiteSummary.vue';
  import PaymentsMethods from './PaymentsMethods.vue';

  export default {
    components: {
      BrandLogos,
      Newsletter,
      SiteSummary,
      PaymentsMethods,
    }
  };
</script>

<template>
  <BrandLogos/>
  <Newsletter/>
  <SiteSummary/>
  <PaymentsMethods/>
</template>

<style scoped lang="scss">

</style>