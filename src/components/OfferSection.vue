<template>
  <section class="section offer-section" id="offer-section">
    <div class="max-container">
      <h1 class="offer-section__title section__title">Oferta</h1>
      <p class="offer-section__text center-text-block">Głównym obszarem działalności naszej firmy jest transport drogowy
        na terenie
        Unii
        Europejskiej oraz Szwajcarii.
      </p>
      <p class="offer-section__text center-text-block">Dysponując flotą własnych pojazdów ora doświadczonych
        przewoźników
        kontraktowych
        oferujemy szeroki wachlarz
        rozwiązań, od serwisów drobnicowych po dedykowane rozwiązania logistyczne</p>
      <div class="offer-section__cards">
        <OfferCard message="ładunki całopojazdowe" icon="first"/>
        <OfferCard message="ładunki cześciowe" icon="second"/>
        <OfferCard message="dostawy ekspresowe" icon="third"/>
        <OfferCard message="transport drobnicowy" icon="fourth"/>
      </div>
      <g-image class="offer-section__cube" alt="Intermtrans cube logo" src="~/assets/img/logo_cube.svg"
               width="150" immediate="true"/>
      <g-image class="offer-section__cube" alt="Intermtrans cube logo" src="~/assets/img/logo_cube.svg"
               width="150" immediate="true"/>
    </div>
  </section>
</template>

<script>
    import OfferCard from '~/components/OfferCard.vue'

    export default {
        name: 'OfferSection',
        components: {
            OfferCard,
        }
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
        max-width: 390px;
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

      &:first-of-type {
        top: 80%;
        right: 100%;
      }
    }
  }
</style>
