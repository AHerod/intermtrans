<template>
  <div>
    <div class="page-content">
      <Header/>
      <ContactBar/>
      <HeroSection/>
      <OfferSection/>
      <MonitoringSection/>
      <TrucksSection/>
      <DocsSection/>
      <ContactSection/>
    </div>
<!--    <under-construction/>-->
  </div>
</template>

<script>
    import UnderConstruction from "../components/UnderConstruction";

    // import Page parts
    import Header from '~/components/Header.vue'
    import HeroSection from '~/components/HeroSection.vue'
    import ContactBar from '~/components/ContactBar.vue'
    import OfferSection from "../components/OfferSection";
    import MonitoringSection from "../components/MonitoringSection";
    import DocsSection from "../components/DocsSection";
    import ContactSection from "../components/ContactSection";
    import TrucksSection from "../components/TrucksSection";

    export default {
        components: {
            ContactSection,
            TrucksSection,
            DocsSection,
            MonitoringSection,
            OfferSection,
            Header,
            ContactBar,
            HeroSection,
            UnderConstruction,
        }
    }
</script>

<static-query>
  query {
  metadata {
  siteName
  }
  }
</static-query>

<style lang="scss">
  .page-content {
    /*display: none;*/
    overflow: hidden;
  }
</style>
