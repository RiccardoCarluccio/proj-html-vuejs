<script>
  export default {

  }
</script>

<template>
  <div class="header-nav-container">
    <div class="logo-container">
      <img src="../assets/images/classic_shop_logo1x.png" alt="Avada Logo">
    </div>

    <div class="nav-container">
      <div class="nav-links">
        <ul>
          <li><a href="">
            home
            <i class="fa-solid fa-angle-down"></i>
          </a></li>
          <li><a href="">
            shop
            <i class="fa-solid fa-angle-down"></i>
          </a></li>
          <li><a href="">
            products
            <i class="fa-solid fa-angle-down"></i>
          </a></li>
          <li><a href="">
            categories
            <i class="fa-solid fa-angle-down"></i>
          </a></li>
          <li><a href="">
            news
            <i class="fa-solid fa-angle-down"></i>
          </a></li>
          <li><a href="">
            elements
            <i class="fa-solid fa-angle-down"></i>
          </a></li>
        </ul>
      </div>
      <button>shop now!</button>
    </div>

    <div class="user-cart-container">
      <a href="#">
        <i class="fa-regular fa-user my-fa-nav"></i>
      </a>
      <a href="#">
        <i class="fa-solid fa-bag-shopping my-fa-nav"></i>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;
  .header-nav-container {
    width: 100%;
    height: 105px;
    @include flex-between-center;

    .nav-container {
      @include flex-center-center;
      gap: 2rem;

      ul {
        @include flex-center-center;
        gap: 2rem;
        list-style-type: none;
        
        a {
          text-decoration: none;
          text-transform: capitalize;
        }
      }
    }

    button {
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 25px;
      background-color: $color-interactive;
      color: $color-primary;
      font-weight: 600;
      text-transform: uppercase;
    }

    .user-cart-container {
      @include flex-center-center;
      gap: 1rem;

      .my-fa-nav {
        font-size: 20px;
      }
    }
  }
</style>