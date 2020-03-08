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
      <div class="back-to-top" @click="scrollViewToTop()" id="scrollToTop">
        <g-image class="arrow" alt="arrow icon" src="~/assets/img/arrow_right.svg" width="20" immediate="true"/>
      </div>
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
        },

        methods: {
            //@TODO  fix bug with window on build on production
            scrollViewToTop() {
                if (process.isClient) {
                    console.log('IS CLIENT window.scrollTo(0,0)');
                    window.scrollTo(0, 0);
                } else {
                    console.log('IS server window.scrollTo(0,0)');
                }
            }
        }
    }

    if (process.isClient) {
        console.log('IS CLIENT window.scroll');
        window.onscroll = function () {

            let topSection = document.getElementById('hero-section'),
                scrollToTop = document.getElementById('scrollToTop');
            if (topSection.getBoundingClientRect().top <= window.innerHeight * 0.95 && topSection.getBoundingClientRect().top > 0) {
                scrollToTop.classList.remove('visible');
            } else {
                scrollToTop.classList.add('visible');
            }

        };
    } else {
        console.log('IS server window.scroll');
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

    .back-to-top {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      box-shadow: 0px 1px 3px $cRed;
      position: fixed;
      bottom: 20px;
      right: 15px;
      text-align: center;
      display: flex;
      justify-content: center;
      transition: .6s ease-in-out;
      opacity: 0;
      z-index: 100;
      background: $cWhite;
      cursor: pointer;

      &.visible {
        opacity: 1;
      }

      img {
        transform: rotate(-90deg);
      }
    }
  }
</style>
