<template>
  <section class="trucks-section" id="trucks-section">
    <div class="max-container">
      <h1 class="section__title">{{this.lang ? section.eng.title : section.title}}</h1>
      <p class="center-text-block">{{this.lang ? section.eng.subtitle : section.subtitle}}</p>
    </div>
    <div class="max-container-no-padding">
      <TruckCard :message="this.lang ? section.eng.cardFirst : section.cardFirst" icon="small"/>
      <TruckCard :message="this.lang ? section.eng.cardSecond : section.cardSecond" icon="medium"/>
      <TruckCard :message="this.lang ? section.eng.cardThird : section.cardThird" icon="big"/>
      <TruckCard :message="this.lang ? section.eng.cardFourth : section.cardFourth" icon="huge"/>
    </div>
  </section>
</template>

<script>
    import TruckCard from "../components/TruckCard";
    import section from "~/data/trucksSection.json"

    export default {
        name: 'TrucksSection',
        components: {
            TruckCard
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
  .trucks-section {
    padding-top: 30px;

    .section__title {
      color: $cRed;
    }

    .max-container {
      text-align: center;
      margin-bottom: 50px;
    }

    .max-container-no-padding {
      display: flex;
      flex-wrap: wrap;
      padding: 0 15px;

      .truck-card {
        width: 100%;

        @media screen and (min-width: 480px) {
          width: 50%;
        }

        img {
          width: 60%;
        }

        &:last-of-type {
          img {
            width: 80%;
          }
        }
      }
    }
  }
</style>
