<template>
  <div class="monitoring-card">
    <g-image class="monitoring-card__arrow" alt="arrow icon" src="~/assets/img/arrow_right.png" width="35" quality="50"/>
    <p class="monitoring-card__text">
      {{ text }}
    </p>
  </div>
</template>

<script>
    export default {
        name: 'monitoringCard',
        props: ['text'],
    }

</script>

<style lang="scss">
  .monitoring-card {
    display: flex;
    align-items: center;

    &__text {
      text-align: left;
      max-width: 350px;
    }

    &__arrow {
      margin-right: 20px;
      max-width: 20px;

      @media screen and (min-width: 769px) {
        max-width: 35px;
      }
    }
  }
</style>
