<template>
  <section class="section offer-section" id="offer-section">
    <div class="max-container">
      <h1 class="offer-section__title section__title">{{this.lang ? section.eng.title : section.title}}</h1>
      <p class="offer-section__text center-text-block">{{this.lang ? section.eng.content : section.content}}
      </p>
      <p class="offer-section__text center-text-block">{{this.lang ? section.eng.moreContent : section.moreContent}}</p>
      <div class="offer-section__cards">
        <OfferCard :message="this.lang ? section.eng.cardFirst : section.cardFirst" icon="first"/>
        <OfferCard :message="this.lang ? section.eng.cardSecond : section.cardSecond" icon="second"/>
        <OfferCard :message="this.lang ? section.eng.cardThird : section.cardThird" icon="third"/>
        <OfferCard :message="this.lang ? section.eng.cardFourth : section.cardFourth" icon="fourth"/>
      </div>
<!--      <g-image class="offer-section__cube" alt="Intermtrans cube logo" src="../assets/img/logo_cube.svg"-->
<!--               width="150" immediate="true"/>-->
    </div>
  </section>
</template>

<script>
    import OfferCard from '~/components/OfferCard.vue'
    import section from '~/data/offerSection.json'

    export default {
        name: 'OfferSection',
        components: {
            OfferCard,
        },
        data() {
            return {
                section
            }
        },
        props: ['lang'],
    }

</script>

<style lang="scss">
  .offer-section {
    position: relative;

    &__title {
      text-align: center;
      color: $cRed;
    }

    &__text {
      text-align: center;
      padding: 0 10px 30px;

      @media screen and (min-width: 992px) {
        padding-bottom: 50px;
      }
    }

    &__cards {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      width: 100%;
      padding: 0 10px;

      @media screen and (min-width: 420px) {
        margin: 0 auto;
      }

      @media screen and (min-width: 992px) {
        max-width: initial;
        padding: 0;
      }


      @media screen and (min-width: 1200px) {
        justify-content: space-between;
      }
    }

    &__cube {
      width: 90px;
      position: absolute;
      right: 0;
      transform: translateX(50%);
      top: 0;
      z-index: -10;

      @media screen and (min-width: 420px) {
        width: 150px;
      }
      @media screen and (min-width: 992px) {
        width: 180px;
      }
      @media screen and (min-width: 1200px) {
        width: 250px;
      }

      /*&:first-of-type {*/
      /*  top: 80%;*/
      /*  right: 100%;*/
      /*}*/
    }
  }
</style>
