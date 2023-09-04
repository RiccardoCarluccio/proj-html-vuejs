<script>
  export default {

  }
</script>

<template>
  <div class="header-links-container">
    <div class="socials-container">
      <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
      <a href="#"><i class="fa-brands fa-twitter"></i></a>
      <a href="#"><i class="fa-brands fa-instagram"></i></a>
      <a href="#"><i class="fa-brands fa-youtube"></i></a>
      <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
    </div>

    <div class="promo-container">
      15% off your first order
    </div>

    <div class="search-bar-container">
      <button>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      <input placeholder="search for products...">
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;

  .fluid-container {
    width: 100%;
  }

  .header-links-container {
    width: 100%;
    height: 45px;
    @include flex-between-center;

    .socials-container {
      @include flex-center-center;
      gap: 1rem
    }

    .promo-container {
      text-transform: uppercase;
      color: $color-interactive;
      font-weight: 600;
    }

    .search-bar-container {
      @include flex-center-center;
      gap: 1rem;

      button {
        background-color: transparent;
        outline: none;
        border: none;
      }

      input {
        border: none;
        text-transform: capitalize;
        color: $color-text-light;
        font-weight: 600;
        outline: none;
      }
    }
  }

  .socials-container a:hover {
    color: $color-interactive;
  }
</style>