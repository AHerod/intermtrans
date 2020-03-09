<template>
  <section class="trucks-section" id="trucks-section">
    <div class="max-container">
      <h1 class="section__title">{{section.title}}</h1>
      <p class="center-text-block">{{section.subtitle}}</p>
    </div>
    <div class="max-container-no-padding">
      <TruckCard :message="section.cardFirst" icon="small"/>
      <TruckCard :message="section.cardSecond" icon="medium"/>
      <TruckCard :message="section.cardThird" icon="big"/>
      <TruckCard :message="section.cardFourth" icon="huge"/>
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
        }
    }

</script>

<style lang="scss">
  .trucks-section {
    padding-top: 30px;
    .max-container {
      text-align: center;
      margin-bottom: 50px;

      p {
        color: $cRed;
      }
    }
    .max-container-no-padding {
      display: flex;
      flex-wrap: wrap;
      padding: 0 15px;
      .truck-card {
        width: 50%;

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
