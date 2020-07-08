<template>
  <div class="offer-card">
    <g-image class="offer-card__icon" alt="transport type icon" :src="iconPath" width="90" quality="50"/>
    <p class="offer-card__message">
      {{ message }}
    </p>
  </div>
</template>

<script>
    export default {
        name: 'OfferCard',

        props: ['message', 'icon'],

        computed: {
            iconPath() {

                return require(`@/assets/img/offer_${this.icon}.png`)
            }
        }
    }

</script>

<style lang="scss">
  .offer-card {
    background: $cBlack;
    padding: 15px 20px;
    box-shadow: 0px 3px 6px #00000029;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    min-width: 100%;
    min-height: 100%;

    @media screen and (min-width: 420px) {
      min-width: initial;
      min-height: initial;
      width: 180px;
      height: 190px;
      padding: 15px 20px;
    }

    @media screen and (min-width: 992px) {
      width: 200px;
      height: 210px;
      padding: 15px 20px;
    }

    &__message {
      color: $cWhite;
      font-size: 12px;
      text-align: center;
      text-transform: uppercase;

      @media screen and (min-width: 420px) {
        font-size: 16px;
      }
    }

    &__icon {
      max-width: 50px;
      padding-bottom: 10px;

      @media screen and (max-width: 420px) {
        max-width: 70px;
        padding-bottom: 20px;
        max-height: 50px;
      }
    }
  }
</style>
