<template>
  <section id="docs-section" class="section docs-section">
    <div class="docs-section__hero-img">
      <g-image alt="Documents section hero image" src="~/assets/img/monitoring_hero.png" width="2000" />
    </div>
    <div class="docs-section__content">
      <div class="docs-section__content-wrapper max-container">
        <h1 class="section__title">{{this.lang ? section.eng.title : section.title}}</h1>
<!--        <p class="center-text-block">{{this.lang ? section.eng.subtitle : section.subtitle}}</p>-->
        <div class="docs-section__docs-wrapper">
          <DocumentCard :lang="lang" :title="this.lang ? section.eng.docCardFirst.title : section.docCardFirst.title"
                        :file-path="section.docCardFirst.filePath"/>
          <DocumentCard :lang="lang" :title="this.lang ? section.eng.docCardSecond.title : section.docCardSecond.title"
                        :file-path="section.docCardSecond.filePath"/>
          <DocumentCard :lang="lang" :title="this.lang ? section.eng.docCardThird.title : section.docCardThird.title"
                        :file-path="section.docCardThird.filePath"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import DocumentCard from "../components/DocumentCard"
    import section from "~/data/docsSection.json"

    export default {
        name: 'DocsSection',
        components: {
            DocumentCard
        },
        data() {
            return {
                section
            }
        },
        props: ['lang']
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
      width: 100%;
      @media screen and (min-width: 992px) {
        width: 50%;
      }

      h1 {
        margin-top: 0;
      }

      p {
        text-align: center;
        padding: 0 0 20px;
        margin-bottom: 40px;
      }
    }

    &__hero-img {
      width: 100%;

      @media screen and (min-width: 992px) {
        width: 50%;
      }

      img {
        width: 100%;
        height: auto;
      }
    }

    &__docs-wrapper {
      display: flex;
      justify-content: space-evenly;
      padding-bottom: 35px;

      @media screen and (max-width: 768px) {
        flex-wrap: wrap;
      }

      @media screen and (min-width: 992px) {
        padding-bottom: 0;
      }

      .document-card {
        margin: 0 5px;
      }
    }
  }
</style>
