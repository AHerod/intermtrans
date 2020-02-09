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
      <a href="https://www.facebook.com/Intermtrans-104479624389862/" target="_blank" rel="noopener" class="contact-bar__icon"><g-image alt="Facebook icon" src="~/assets/img/icon_facebook.svg" width="35"/></a>
      <a href="https://www.linkedin.com/company/intermtrans-damian-talar/about/" class="contact-bar__icon" target="_blank" rel="noopener"><g-image alt="Linkedin icon" src="~/assets/img/icon_linkedin.svg" width="35"/></a>
      <a href="" class="contact-bar__icon"><g-image alt="Phone icon" src="~/assets/img/icon_phone.svg" width="35"/></a>
      <a href="" class="contact-bar__icon"><span>+ 48 507 473 964</span></a>
    </div>
    <slot/>
  </div>
</template>

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

    @media screen and (min-width: 769px) {
      flex-direction: row;
      position: relative;
      min-height: initial;
      margin-top: 0;
      top: 0;
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
    @include clearfix;

    @media screen and (min-width: 769px) {
      max-width: 400px;
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

    &::before {
      content: " ";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      z-index: -1;
      background: $cRed;
      transform-origin: bottom left;
      -ms-transform: skew(45deg, 0deg);
      -webkit-transform: skew(45deg, 0deg);
      transform: skew(45deg, 0deg);
      box-shadow: 0px 3px 6px #00000029;
    }
  }
</style>
