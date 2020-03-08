<template>
  <section id="docs-section" class="section docs-section">
    <div class="docs-section__hero-img">
      <g-image alt="Documents section hero image" src="~/assets/img/docs_hero.jpg" width="485" immediate="true"/>
    </div>
    <div class="docs-section__content">
      <div class="docs-section__content-wrapper max-container">
        <h1 class="section__title">{{section.title}}</h1>
        <p class="center-text-block">{{section.subtitle}}</p>
        <div class="docs-section__docs-wrapper">
          <DocumentCard :title="section.docCardFirst.title"
                        :file-path="section.docCardFirst.filePath"/>
          <DocumentCard :title="section.docCardSecond.title"
                        :file-path="section.docCardSecond.filePath"/>
          <DocumentCard :title="section.docCardThird.title"
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
