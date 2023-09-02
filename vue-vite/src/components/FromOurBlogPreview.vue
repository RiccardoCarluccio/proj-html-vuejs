<script>
  export default {

  }
</script>

<template>
  <div class="from-our-blog-container">
    <div class="blog-container">
      <img src="../assets/images/post_img_12-700x441.jpg" alt="Blog Poster">
      <h5>Aenean lobortis sapien enim viverra</h5>
      <p class="date">September 9th, 2015 | 0 comments</p>
      <p class="caption">Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla.</p>
    </div>

    <div class="blog-container">
      <img src="../assets/images/post_img_11-700x441.jpg" alt="Blog Poster">
      <h5>Aenean lobortis sapien enim viverra</h5>
      <p class="date">September 9th, 2015 | 0 comments</p>
      <p class="caption">Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla.</p>
    </div>

    <div class="blog-container">
      <img src="../assets/images/post_img_10-700x441.jpg" alt="Blog Poster">
      <h5>Aenean lobortis sapien enim viverra</h5>
      <p class="date">September 9th, 2015 | 0 comments</p>
      <p class="caption">Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/variables" as *;
  @use "../../scss/partials/mixins" as *;
  .from-our-blog-container {
    @include flex-center-center;
    gap: 2rem;
    .blog-container {
      width: calc(100% / 3.5);
      height: 380px;
      @include flex-col-center-start;
      gap: 0.4rem;

      img {
        width: 100%;
        object-fit: contain;
      }

      h5 {
        font-size: 14px;
      }

      p {
        color: $color-text;
      }
      
      .date {
        font-size: 12px;
      }

      .caption {
        font-size: 13px;
        letter-spacing: 1px;
      }
    }
  }
</style>