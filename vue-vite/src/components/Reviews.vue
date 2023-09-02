<script>
  export default {

  };
</script>

<template>
  <div class="fluid-container">
    <div class="width-container">
      <div class="review-container">
        <h4>featured</h4>
        <ul>
          <li>
            <div class="item-info">
              <p class="item-name">black jacket <span class="item-price">$125</span></p>
              <img src="../assets/images/black_leather_jacket-120x156.jpg" alt="Black Leather Jacket">
            </div>
            <div class="spacer"></div>
          </li>

          <li>
            <div class="item-info">
              <p class="item-name">black jacket <span class="item-price">$125</span></p>
              <img src="../assets/images/black_leather_jacket-120x156.jpg" alt="Black Leather Jacket">
            </div>
            <div class="spacer"></div>
          </li>

          <li>
            <div class="item-info">
              <p class="item-name">black jacket <span class="item-price">$125</span></p>
              <img src="../assets/images/black_leather_jacket-120x156.jpg" alt="Black Leather Jacket">
            </div>
            <div class="spacer"></div>
          </li>
        </ul>
      </div>

      <div class="review-container">
        <h4>featured</h4>
        <ul>
          <li>
            <div class="item-info">
              <p class="item-name">black jacket <span class="item-price">$125</span></p>
              <img src="../assets/images/black_leather_jacket-120x156.jpg" alt="Black Leather Jacket">
            </div>
            <div class="spacer"></div>
          </li>

          <li>
            <div class="item-info">
              <p class="item-name">black jacket <span class="item-price">$125</span></p>
              <img src="../assets/images/black_leather_jacket-120x156.jpg" alt="Black Leather Jacket">
            </div>
            <div class="spacer"></div>
          </li>

          <li>
            <div class="item-info">
              <p class="item-name">black jacket <span class="item-price">$125</span></p>
              <img src="../assets/images/black_leather_jacket-120x156.jpg" alt="Black Leather Jacket">
            </div>
            <div class="spacer"></div>
          </li>
        </ul>
      </div>

      <div class="review-container">
        <h4>featured</h4>
        <ul>
          <li>
            <div class="item-info">
              <p class="item-name">black jacket <span class="item-price">$125</span></p>
              <img src="../assets/images/black_leather_jacket-120x156.jpg" alt="Black Leather Jacket">
            </div>
            <div class="spacer"></div>
          </li>

          <li>
            <div class="item-info">
              <p class="item-name">black jacket <span class="item-price">$125</span></p>
              <img src="../assets/images/black_leather_jacket-120x156.jpg" alt="Black Leather Jacket">
            </div>
            <div class="spacer"></div>
          </li>

          <li>
            <div class="item-info">
              <p class="item-name">black jacket <span class="item-price">$125</span></p>
              <img src="../assets/images/black_leather_jacket-120x156.jpg" alt="Black Leather Jacket">
            </div>
            <div class="spacer"></div>
          </li>
        </ul>
      </div>

      <div class="review-container">
        <h4>featured</h4>
        <ul>
          <li>
            <div class="item-info">
              <p class="item-name">black jacket <span class="item-price">$125</span></p>
              <img src="../assets/images/black_leather_jacket-120x156.jpg" alt="Black Leather Jacket">
            </div>
            <div class="spacer"></div>
          </li>

          <li>
            <div class="item-info">
              <p class="item-name">black jacket <span class="item-price">$125</span></p>
              <img src="../assets/images/black_leather_jacket-120x156.jpg" alt="Black Leather Jacket">
            </div>
            <div class="spacer"></div>
          </li>

          <li>
            <div class="item-info">
              <p class="item-name">black jacket <span class="item-price">$125</span></p>
              <img src="../assets/images/black_leather_jacket-120x156.jpg" alt="Black Leather Jacket">
            </div>
            <div class="spacer"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/variables" as *;
  @use "../../scss/partials/mixins" as *;
  .fluid-container::before {
    content: "";
    border: 1px solid $color-text-light;
    width: 97%;
  }

  .fluid-container {
    @include flex-col-center-center;
    gap: 5rem;
    padding-bottom: 5rem;

    .width-container {
      display: flex;
      gap: 3rem;

      .review-container {
        @include flex-col-center-start;
        gap: 1.5rem;
        width: calc(100% / 6);

        h4 {
          text-transform: uppercase;
          color: $color-text;
          font-weight: 500;
          letter-spacing: 3px;
        }

        ul {
          list-style-type: none;
          width: 100%;

          li {
            display: flex;
            flex-direction: column;
            gap: 5px;
            font-size: 14px;      

            .item-info {
              @include flex-between-start;

              .item-name {
                text-transform: capitalize;

                .item-price {
                  font-weight: 600;
                }
              } 
            }

            img {
              height: 75px;
              width: 58px;
            }
          }

          .spacer {
                content: "";
                border: 1px solid $color-text-light;
                width: 100%;
                height: 0;
          }
        }
      }
    }
  }
</style>