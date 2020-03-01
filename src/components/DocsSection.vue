<template>
  <section class="section docs-section">
    <div class="docs-section__hero-img">
      <g-image alt="Documents section hero image" src="~/assets/img/docs_hero.jpg" width="485" immediate="true"/>
    </div>
    <div class="docs-section__content">
      <div class="docs-section__content-wrapper max-container">
        <h2 class="heading">Dokumenty</h2>
        <p>Lorem ipsum ipsum ipsum lorem lorem ipsum ipsum lorem</p>
        <div class="docs-section__docs-wrapper">
          <DocumentCard title="Polisa Ubezpieczeniowa"
                        file-path="https://drive.google.com/file/d/1j5_GlBq_oSnlvYLEg94L2dMykOo-2bBA/preview"/>
          <DocumentCard title="Licencja"
                        file-path="https://drive.google.com/file/d/1RkeJshEg4ufWbpGJ9-wOyKpbtXa7e-1b/preview"/>
          <DocumentCard title="Certyfikat Kompetencji Zawodowych"
                        file-path="https://drive.google.com/file/d/1pQgbBNxYakkdCDUhNu_olO_yDMLqeWYh/preview"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import DocumentCard from "../components/DocumentCard";

    export default {
        name: 'DocsSection',
        components: {
            DocumentCard
        }
    }

</script>

<style lang="scss">
  .docs-section {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    @media screen and (min-width: 992px) {
      flex-direction: row;
      align-items: flex-start;
    }

    &__content {
      flex: 100%;
      @media screen and (min-width: 992px) {
        flex: 50%;
      }

      h2 {
        text-transform: uppercase;
        text-align: center;
        font-size: 45px;
      }

      p {
        text-align: center;
        padding: 20px 0;
      }
    }

    &__hero-img {
      flex: 100%;
      width: 100%;

      @media screen and (min-width: 992px) {
        flex: 50%;
      }

      img {
        width: 100%;
        height: auto;
      }
    }

    &__docs-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding-bottom: 35px;

      @media screen and (min-width: 992px) {
        padding-bottom: 0;
      }
    }
  }
</style>
