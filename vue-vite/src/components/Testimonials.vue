<script>
  export default {

  }
</script>

<template>
  <div class="fluid-container testimonials-background">
    <div class="width-container">
      <img src="../assets/images/man_testimonial.png" alt="Man Testimonial">
      <p>Cupcake ipsum dolor sit amet jelly. I love chocolate bar sweet roll I love fruitcake I love fruitcake. I love chocolate bar lemon drops I love muffin shortbread sesame snaps brownie.</p>
      <p class="testimonial-name"><span>darìo pineda,</span> theme fusion</p>
      <p>placeholder</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;
  .testimonials-background {
    background-image: url("../assets/images/testimonials_home_1_bg.jpg");
    background-size: 100%;
    background-position-y: -5rem;
    color: $color-primary;
    
    .width-container {
      @include flex-col-center-center;
      padding: 7.5rem;
      gap: 2rem;
      
      span {
        font-weight: 600;
      }
    }
  }

  .width-container p:nth-child(2) {
    font-style: italic;
    line-height: 30px;
    text-align: center;
  }
  .width-container p:nth-child(3) {
    text-transform: capitalize;
    letter-spacing: 2px;
  }
</style>