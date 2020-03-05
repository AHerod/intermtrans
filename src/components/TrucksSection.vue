<template>
  <section class="trucks-section">
    <div class="max-container">
      <h1>Flota</h1>
      <p class="center-text-block">Do dyspozycji naszych klientów mamy następujące środki transportu:</p>
    </div>
    <div class="max-container-no-padding">
      <TruckCard message="pojazdy 8 i 10 paletowe o ładowności do 1,5 tony" icon="small"/>
      <TruckCard message="Auta ciężarowe o ładowności od 1,5 tony do 16 ton" icon="medium"/>
      <TruckCard message="naczepa typu chłodnia / izoterma" icon="big"/>
      <TruckCard message="naczepy typu standard i mega (wysokość wewnętrzna 2,7 m / 3 m, długość 13,6 m, ładowność 24 tony)" icon="huge"/>
    </div>
  </section>
</template>

<script>
    import TruckCard from "../components/TruckCard";

    export default {
        name: 'TrucksSection',
        components: {
            TruckCard
        }
    }

</script>

<style lang="scss">
  .trucks-section {
    .max-container {
      text-align: center;
      margin-bottom: 50px;

      h1 {
        text-transform: uppercase;
      }

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
