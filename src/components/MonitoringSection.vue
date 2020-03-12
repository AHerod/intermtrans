<template>
  <section class="section monitoring-section">
    <div class="monitoring-section__content max-container">
      <h1 class="monitoring-section__title max-container section__title">{{section.title}}</h1>
      <div class="monitoring-section__cards">
        <MonitoringCard :text="section.monitoringCardFirst"/>
        <MonitoringCard :text="section.monitoringCardSecond"/>
        <MonitoringCard :text="section.monitoringCardThird"/>
      </div>
    </div>
    <g-image class="monitoring-section__hero-image" alt="Phone icon" src="~/assets/img/docs_hero.jpg"
             width="1200" immediate="true"/>
  </section>

</template>

<script>
    import MonitoringCard from "../components/MonitoringCard";
    import section from "~/data/monitoringSection.json";

    export default {
        name: 'MonitoringSection',
        components: {
            MonitoringCard,
        },
        data() {
            return {
                section
            }
        }
    }

</script>

<style lang="scss">
  .monitoring-section {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 769px) {
      flex-direction: row;
    }

    &__title {
      margin-bottom: 10px;

      @media screen and (min-width: 480px) {
        margin-bottom: 30px;
      }
    }

    &__cards {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

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
        justify-content: space-between;
        align-items: end;
      }
    }

    &__hero-image {
      width: 100%;
      @media screen and (min-width: 769px) {
        max-width: 50%;

      }
    }
  }
</style>
