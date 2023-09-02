<script>
  export default {

  };
</script>

<template>
  <img src="../assets/images/classic_shop_logo_footer.png" alt="Avada Logo">
  <ul>
    <li>12345 North Main Street</li>
    <li>New York, NY 555555</li>
    <li>Phone: 1.800.555.6789</li>
    <li>Email: info@company.com</li>
    <li>Web: Theme-fusion.com</li>
  </ul>
  <div class="socials-container">
    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
    <a href="#"><i class="fa-brands fa-twitter"></i></a>
    <a href="#"><i class="fa-brands fa-instagram"></i></a>
    <a href="#"><i class="fa-brands fa-youtube"></i></a>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/variables" as *;
  @use "../../scss/partials/mixins" as *;  

  img {
    width: 180px;
  }

  ul {
    list-style-type: none;

    li {
      line-height: 1.5rem;
      font-size: 14px;
    }
  }

  .socials-container {
    @include flex-center-center;
    gap: 1.6rem;

    a {

      i {
        color: $color-primary;
        font-size: 20px;
      }
    }
  }
</style>