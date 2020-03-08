<template>
  <section class="section monitoring-section max-container">
    <h1 class="monitoring-section__title max-container section__title">Monitoring Dostaw 24h</h1>
    <div class="monitoring-section__content max-container">
      <div class="monitoring-section__cards">
        <MonitoringCard text="Transport każdego ładunku jest monitorowany 24
godziny na dobę przez zespół doświadczonych
spedytorów.
"/>
        <MonitoringCard text="Nasi klienci mają możliwość sprawdzić o każdej porze
dnia i nocy status swojego zlecenia.
"/>
        <MonitoringCard text="
Wszystkie nasze samochody posiadają nadajniki GPS
dzięki czemu klienci na bieżąco informowani są o
lokalizacji danego pojazdu."/>
      </div>
      <g-image class="monitoring-section__hero-image" alt="Phone icon" src="~/assets/img/monitoring_hero.png"
               width="435" immediate="true"/>
    </div>
  </section>

</template>

<script>
    import MonitoringCard from "../components/MonitoringCard";

    export default {
        name: 'MonitoringSection',
        components: {
            MonitoringCard,
        }
    }

</script>

<style lang="scss">
  .monitoring-section {
    &__title {
      color: $cRed;
      margin-bottom: 10px;

      @media screen and (min-width: 480px) {
        margin-bottom: 30px;
      }
    }

    &__cards {
      max-width: 550px;

      > div {
        margin-bottom: 20px;
        @media screen and (min-width: 769px) {
          margin-bottom: 35px;
        }
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: end;
      }
    }
  }
</style>
