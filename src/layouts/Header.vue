<template>
  <div>
    <div class="page-content">
      <div class="top-wrapper">
        <Header :lang="isEng"/>
        <section class="contact-bar">
          <div class="contact-bar__wrapper">
            <a href="https://www.facebook.com/Intermtrans-104479624389862/" target="_blank" rel="noopener"
               class="contact-bar__icon">
              <g-image alt="Facebook icon" src="~/assets/img/icon_facebook.png" width="35"/>
            </a>
            <a href="https://www.linkedin.com/company/intermtrans-damian-talar/about/" class="contact-bar__icon"
               target="_blank" rel="noopener">
              <g-image alt="Linkedin icon" src="~/assets/img/icon_linkedin.png" width="35"/>
            </a>
            <a href="tel:+48-507-473-964" class="contact-bar__icon">
              <g-image alt="Phone icon" src="~/assets/img/icon_phone.png" width="35"/>
            </a>
            <a href="tel:+48-507-473-964" class="contact-bar__icon-phone"><span>{{section.phone}}</span></a>
            <button class="lang-switcher mobile" @click="isEng = !isEng">{{this.isEng ? 'PL' : 'ENG'}}</button>
          </div>
        </section>
        <button class="lang-switcher desktop" @click="isEng = !isEng">{{this.isEng ? 'PL' : 'ENG'}}</button>
      </div>
      <HeroSection :lang="isEng"/>
      <OfferSection :lang="isEng"/>
      <MonitoringSection :lang="isEng"/>
      <TrucksSection :lang="isEng"/>
      <DocsSection :lang="isEng"/>
      <ContactSection :lang="isEng"/>
    </div>
    <!--    <under-construction/>-->
  </div>
</template>

<script>
    import UnderConstruction from "../components/UnderConstruction";
    import section from "~/data/contactSection.json";

    // import Page parts
    import Header from '~/components/Header.vue'
    import HeroSection from '~/components/HeroSection.vue'
    import OfferSection from "../components/OfferSection";
    import MonitoringSection from "../components/MonitoringSection";
    import DocsSection from "../components/DocsSection";
    import ContactSection from "../components/ContactSection";
    import TrucksSection from "../components/TrucksSection";

    export default {
        data: function () {
            return {
                isEng: false,
                section
            }
        },
        components: {
            ContactSection,
            TrucksSection,
            DocsSection,
            MonitoringSection,
            OfferSection,
            Header,
            HeroSection,
            UnderConstruction,
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

    .contact-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: $cRed;
      margin-top: -20px;
      padding: 10px 12px;
      float: right;
      width: 100%;
      min-width: 245px;
      max-width: 435px;
      box-shadow: 2px 3px 9px 0 #00000085;
      z-index: 1;
      position: relative;
      @include clearfix;

      @media screen and (max-width: 768px) {
        z-index: 1000;
      }

      &::before {
        content: " ";
        position: absolute;
        display: block;
        width: 120%;
        height: 100%;
        top: 0;
        right: -20%;
        z-index: -1;
        background: $cRed;
        transform-origin: bottom left;
        transform: skew(45deg, 0deg);
        box-shadow: 0px 3px 6px #00000029;
      }


      span {
        color: $cWhite;
        font-weight: bolder;
        font-size: large;
        display: block;
      }

      &__wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
      }

      &__icon-phone {
        display: none;
        @media screen and (min-width: 769px) {
          display: block;
        }
      }
    }

    .lang-switcher {
      position: relative;
      font-weight: 600;
      letter-spacing: 1px;
      color: $cRed;

      &.desktop {
        display: none;
        z-index: 999;
        position: fixed;
        right: 20px;
        bottom: 0;
        top: -89%;
      }

      @media screen and (min-width: 769px) {
        &.desktop {
          display: block;

          &::before {
            content: none;
          }
        }

        &.mobile {
          display: none;
        }
      }

      &::before {
        background: $cBlack;
        content: '';
        display: block;
        border-radius: 50%;
        border: 3px solid black;
        position: absolute;
        width: 37px;
        height: 37px;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @media screen and (min-width: 769px) {
          /*display: none;*/
        }
      }
    }

    .top-wrapper {
      position: relative;
    }
  }
</style>
