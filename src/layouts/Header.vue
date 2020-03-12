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
      <ScrollToTop/>
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
    import ScrollToTop from "../components/ScrollToTop"

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
            ScrollToTop,
        },
        // created() {
        //     if (process.isClient) {
        //         window.addEventListener('scroll', this.scrollViewToTheTop);
        //     }
        // },
        // destroyed() {
        //     if (process.isClient) {
        //         window.removeEventListener('scroll', this.scrollViewToTheTop);
        //     }
        // },
        // methods: {
        //     //@TODO  fix bug with window on build on production
        //     scrollViewToTheTop: function () {
        //         console.log('scrollViewToTheTop is on');
        //         if (process.isClient) {
        //             console.log('IS CLIENT window.scrollTo(0,0)');
        //             window.scrollTo(0, 0);
        //         } else {
        //             console.log('IS server window.scrollTo(0,0)');
        //         }
        //
        //         if (process.isClient) {
        //             console.log('IS CLIENT window.scroll');
        //             window.onscroll = function () {
        //
        //                 let topSection = document.getElementById('hero-section'),
        //                     scrollToTop = document.getElementById('scrollToTop');
        //                 if (topSection.getBoundingClientRect().top <= window.innerHeight * 0.95 && topSection.getBoundingClientRect().top > 0) {
        //                     scrollToTop.classList.remove('visible');
        //                 } else {
        //                     scrollToTop.classList.add('visible');
        //                 }
        //
        //             };
        //         } else {
        //             console.log('IS server window.scroll');
        //         }
        //     },
        // }
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
