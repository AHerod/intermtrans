<template>
  <div class="truck-card">
    <p class="truck-card__message">
      {{ message }}
    </p>
    <img class="truck-card__icon" alt="transport type icon" :src="iconPath" width="90"/>
  </div>
</template>

<script>
    export default {
        name: 'TruckCard',

        props: ['message', 'icon'],

        computed: {
            iconPath() {

                return require(`@/assets/img/truck_${this.icon}.svg`)
            }
        }
    }

</script>

<style lang="scss">
.truck-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 220px;
  text-align: center;
  margin-bottom: 50px;

  &__message {
    font-weight: 500;
    text-transform: capitalize;
    font-size: 1rem;

    @media screen and (max-width: 480px) {
      font-size: .75rem;
    }
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }
}
</style>
