<template>
  <div>
    <header class="header">
      <div class="header__content max-container">
        <div class="header__logo">
          <g-image alt="Intermtrans logo" src="~/assets/img/logo.svg" width="135"/>
        </div>
        <div class="header__menu">
          <nav class="nav">
            <g-link class="nav__link" to="/">Oferta</g-link>
            <g-link class="nav__link" to="/about/">Flota</g-link>
            <g-link class="nav__link" to="/about/">Dokumenty</g-link>
            <g-link class="nav__link" to="/about/">Wycena</g-link>
            <g-link class="nav__link" to="/about/">Kontakt</g-link>
          </nav>
          <div class="header__nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
    <div class="contact-bar">
      <a href="https://www.facebook.com/Intermtrans-104479624389862/" target="_blank" rel="noopener"
         class="contact-bar__icon">
        <g-image alt="Facebook icon" src="~/assets/img/icon_facebook.svg" width="35"/>
      </a>
      <a href="https://www.linkedin.com/company/intermtrans-damian-talar/about/" class="contact-bar__icon"
         target="_blank" rel="noopener">
        <g-image alt="Linkedin icon" src="~/assets/img/icon_linkedin.svg" width="35"/>
      </a>
      <a href="" class="contact-bar__icon">
        <g-image alt="Phone icon" src="~/assets/img/icon_phone.svg" width="35"/>
      </a>
      <a href="" class="contact-bar__icon"><span>+ 48 507 473 964</span></a>
    </div>
    <section class="hero-section">
      <div class="hero-section__content max-container">
        <h1 class="hero-section__content--title">Transport</h1>
        <h1 class="hero-section__content--title">Spedycja</h1>
        <h1 class="hero-section__content--title">Logistyka</h1>
      </div>
    </section>
    <section class="section offer-section">
      <div class="max-container">
        <h1 class="offer-section__title section__title">Oferta</h1>
        <p class="offer-section__text">Głównym obszarem działalności naszej firmy jest transport drogowy na terenie Unii
          Europejskiej oraz Szwajcarii.
        </p>
        <p class="offer-section__text">Dysponując flotą własnych pojazdów ora doświadczonych przewoźników kontraktowych
          oferujemy szeroki wachlarz
          rozwiązań, od serwisów drobnicowych po dedykowane rozwiązania logistyczne</p>
        <div class="offer-section__cards">
          <OfferCard message="ładunki całopojazdowe" icon="first"/>
          <OfferCard message="ładunki cześciowe" icon="second"/>
          <OfferCard message="dostawy ekspresowe" icon="third"/>
          <OfferCard message="transport drobnicowy" icon="fourth"/>
        </div>
        <g-image class="offer-section__cube" alt="Intermtrans cube logo" src="~/assets/img/logo_cube.svg" width="150"/>
        <g-image class="offer-section__cube" alt="Intermtrans cube logo" src="~/assets/img/logo_cube.svg" width="150"/>
      </div>
    </section>
    <section class="section monitoring-section max-container">
      <h2 class="monitoring-section__title max-container">Monitoring Dostaw 24h</h2>
      <div class="monitoring-section__content max-container">
        <div class="monitoring-section__cards">
          <MonitoringCard text="Transport każdego ładunku jest monitorowany 24
godziny na dobę przez zespół doświadczonych
spedytorów.
"/>
          <MonitoringCard text="Nasi klienci mają możliwość sprawdzić o każdej porze
dnia i nocy status swojego zlecenia.
"/>
          <MonitoringCard text="
Wszystkie nasze samochody posiadają nadajniki GPS
dzięki czemu klienci na bieżąco informowani są o
lokalizacji danego pojazdu."/>
        </div>
        <g-image class="monitoring-section__hero-image" alt="Phone icon" src="~/assets/img/monitoring_hero.png"
                 width="435"/>
      </div>
    </section>
    <section class="section docs-section">
      <div class="docs-section__hero-img">
        <g-image alt="Documents section hero image" src="~/assets/img/docs_hero.jpg" width="485"/>
      </div>
      <div class="docs-section__content">
        <div class="docs-section__content-wrapper max-container">
          <h2 class="heading">Dokumenty</h2>
          <p>Lorem ipsum ipsum ipsum lorem lorem ipsum ipsum lorem</p>
          <div class="docs-section__docs-wrapper">
            <DocumentCard title="Polisa Ubezpieczeniowa"/>
            <DocumentCard title="Licencja"/>
            <DocumentCard title="Certyfikat Kompetencji Zawodowych"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    import OfferCard from '~/components/OfferCard.vue'
    import MonitoringCard from "../components/MonitoringCard";
    import DocumentCard from "../components/DocumentCard";

    export default {
        components: {
            DocumentCard,
            MonitoringCard,
            OfferCard
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
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 80px;
    box-shadow: 0px 3px 6px #00000029;
    position: relative;

    &__content,
    &__menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__nav-toggle {
      display: flex;
      flex-direction: column;
      height: 20px;
      justify-content: space-between;

      span {
        display: block;
        background: $cRed;
        width: 30px;
        height: 4px;

        @media screen and (min-width: 769px) {
          display: none;
        }
      }
    }
  }

  .nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background: $cWhite;
    margin-top: 20px;
    display: none;

    @media screen and (min-width: 769px) {
      flex-direction: row;
      position: relative;
      min-height: initial;
      margin-top: 0;
      top: 0;
      display: flex;
    }

    &__link {
      margin-left: 40px;
      position: relative;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 22px;
      padding: 20px 0;
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;

      @media screen and (min-width: 769px) {
        text-transform: initial;
        font-size: initial;
        padding: initial;
        display: block;
      }

      @media screen and (min-width: 992px) {
        margin-left: 45px;
      }

      &::after {
        content: '';
        width: 10px;
        height: 28px;
        background: $cRed;
        display: block;
        top: 0;
        right: 100%;
        transform: skew(-25deg);
        margin-right: 20px;

        @media screen and (min-width: 769px) {
          width: 10px;
          height: 28px;
          background: $cRed;
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(270%, -15%) skew(-25deg);
          margin-right: initial;
        }

        @media screen and (min-width: 992px) {
          height: 32px;
        }
      }
    }
  }

  .contact-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $cRed;
    margin-top: -20px;
    padding: 10px 12px;
    width: 100%;
    float: right;
    position: relative;
    z-index: 10;
    @include clearfix;

    @media screen and (min-width: 769px) {
      max-width: 400px;

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
    }

    span {
      color: $cWhite;
      font-weight: bolder;
      font-size: large;
      display: none;

      @media screen and (min-width: 769px) {
        display: block;
      }
    }
  }

  .hero-section {
    width: 100%;
    height: 80vh;
    margin-top: -20px;
    background: url("../assets/img/hero_image.jpg");
    background-position: right;
    background-size: cover;

    @media screen and (min-width: 1200px) {
      height: 100vh;
      background-position: center;
    }

    &__content {
      transform: translateY(20%);

      @media screen and (min-width: 769px) {
        transform: translateY(50%);
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
      }

      @media screen and (min-width: 992px) {
        height: 100%;
        transform: translateY(10%);
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }

      &--title {
        color: $cWhite;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 800;

        @media screen and (min-width: 992px) {
          margin-top: 5px;
          margin-bottom: 5px;
          font-size: 45px;

          &:nth-child(2) {
            margin-left: 85px;
          }

          &:nth-child(3) {
            margin-left: 170px;
          }
        }

        &:nth-child(2) {
          color: $cRed;
        }
      }
    }
  }

  .offer-section {
    position: relative;

    &__title {
      text-align: center;
      color: $cRed;
    }

    &__text {
      margin-bottom: 30px;
      font-size: 16px;
      text-align: center;
      padding: 0 10px;

      @media screen and (min-width: 992px) {
        margin-bottom: 50px;
        font-size: 26px;
      }
    }

    &__cards {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      width: 100%;
      padding: 0 10px;

      @media screen and (min-width: 420px) {
        max-width: 390px;
        margin: 0 auto;
      }

      @media screen and (min-width: 992px) {
        max-width: initial;
        padding: 0;
      }


      @media screen and (min-width: 1200px) {
        justify-content: space-between;
      }
    }

    &__cube {
      width: 90px;
      position: absolute;
      right: 0;
      transform: translateX(50%);
      top: 0;
      z-index: -10;

      @media screen and (min-width: 420px) {
        width: 150px;
      }
      @media screen and (min-width: 992px) {
        width: 180px;
      }
      @media screen and (min-width: 1200px) {
        width: 250px;
      }

      &:first-of-type {
        top: 80%;
        right: 100%;
      }
    }
  }

  .monitoring-section {
    &__title {
      color: $cRed;
      font-size: 20px;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 10px;

      @media screen and (min-width: 480px) {
        font-size: 36px;
        margin-bottom: 30px;

      }
    }

    &__cards {
      max-width: 550px;

      > div {
        margin-bottom: 20px;
        @media screen and (min-width: 769px) {
          margin-bottom: 35px;
        }
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: end;
      }
    }
  }

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
