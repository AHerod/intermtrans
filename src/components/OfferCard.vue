<template>
  <div class="offer-card">
    <img class="offer-card__icon" alt="transport type icon" :src="iconPath" width="90"/>
    <p class="offer-card__message">
      {{ message }}
    </p>
  </div>
</template>

<script>
    export default {
        name: 'OfferCard',
        data() {
            return {
                imageDir: '../assets/img/'
            }
        },

        props: ['message', 'icon'],

        computed: {
            iconPath() {

                return require(`@/assets/img/offer_${this.icon}.svg`)
            }
        }
    }

</script>

<style lang="scss">
  .offer-card {
    padding: 25px 30px;
    background: $cBlack;
    width: 200px;
    height: 210px;
    box-shadow: 0px 3px 6px #00000029;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__message {
      color: $cWhite;
      font-size: 16px;
      text-align: center;
      text-transform: uppercase;
    }

    &__icon {
      max-width: 70px;
      padding-bottom: 20px;
    }
  }
</style>
