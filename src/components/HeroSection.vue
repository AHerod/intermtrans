<template>
  <section class="hero-section" id="hero-section">
    <div class="hero-section__content max-container">
      <h1 class="hero-section__content--title">{{this.lang ? section.eng.titleFirst : section.titleFirst}}</h1>
      <h1 class="hero-section__content--title">{{this.lang ? section.eng.titleSecond : section.titleSecond}}</h1>
      <h1 class="hero-section__content--title">{{this.lang ? section.eng.titleThird : section.titleThird}}</h1>
    </div>
  </section>
</template>

<script>
  import section from "~/data/heroSection.json"
    export default {
        name: 'HeroSection',
        data() {
            return {
                section
            }
        },
        props: ['lang'],
    }

</script>

<style lang="scss">
  .hero-section {
    width: 100%;
    height: 80vh;
    margin-top: -25px;
    background: url("../assets/img/hero_image.jpg");
    background-position: right;
    background-size: cover;

    @media screen and (min-width: 1200px) {
      height: 100vh;
      background-position: center;
    }

    &__content {
      transform: translateY(20%);
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 769px) {
        transform: translateY(50%);
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
      }

      @media screen and (min-width: 992px) {
        height: 100%;
        transform: translateY(10%);
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }

      &--title {
        color: $cWhite;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 800;
        max-width: 100%;

        @media screen and (min-width: 992px) {
          margin-top: 5px;
          margin-bottom: 5px;
          font-size: 45px;

          &:nth-child(2) {
            margin-left: 85px;
          }

          &:nth-child(3) {
            margin-left: 170px;
          }
        }

        &:nth-child(2) {
          color: $cRed;
        }
      }
    }
  }
</style>
