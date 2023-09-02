<script>
  export default {

  };
</script>

<template>
  <div class="fluid-container">
    <div class="width-container">
      <div class="subscription-info">
        <div class="icon-container">
          <i class="fa-solid fa-envelope"></i>
        </div>
        <h2>Subscribe now and get special offers</h2>
      </div>

      <div class="subscription-info">
        <input type="text" placeholder="Insert your email">
        <button>send</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/variables" as *;
  @use "../../scss/partials/mixins" as *;

  .fluid-container {
    background-color: $background-newsletter;
    padding: 4rem;

    .width-container {
      @include flex-between-center;
    
      .subscription-info {
        @include flex-between-center;
        gap: 1rem;

        .icon-container {
          background-color: $background-footer;
          @include flex-center-center;
          height: 60px;
          width: 60px;
          border-radius: 50%;

          i {
            font-size: 36px;
            color: $color-text;
          }
        }

        h2 {
          color: $color-primary;
        }
      }

      .subscription-info {

        input {
          width: 300px;
          height: 35px;
          border-radius: 20px;
          border: none;
          padding-left: 15px;
        }

        button {
          background-color: $color-interactive;
          border-radius: 20px;
          text-transform: uppercase;
          border: none;
          padding: 0.7rem 3rem;
          font-weight: 600;
          color: $color-primary;
          letter-spacing: 1px;
        }
      }
    }
  }

  ::placeholder {
    color: $color-text-light;
    opacity: 1;
  }
</style>