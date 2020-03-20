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
    position: relative;

    @media screen and (min-width: 1300px) {
      &::before {
        content: '';
        width: 550px;
        height: 450px;
        display: block;
        position: absolute;
        border-left: 40px solid $cBlack;
        border-top: 40px solid $cBlack;
        transform: skew(15deg) rotate(-240deg);
        z-index: -1;
        left: -28%;
        box-shadow: 3px 2px 16px 0px;
      }
      &::after {
        content: '';
        width: 250px;
        height: 400px;
        display: block;
        position: absolute;
        border-left: 40px solid $cRed;
        border-top: 40px solid $cRed;
        transform: skew(15deg) rotate(-80deg);
        right: 0;
        top: -25%;
        z-index: -1;
        box-shadow: 3px 2px 13px 0px;
      }
    }

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
