<template>
  <header class="header">
    <div class="header__content max-container">
      <div class="header__logo">
        <g-image alt="Intermtrans logo" src="~/assets/img/logo.svg" width="135" immediate="true"/>
      </div>
      <div class="header__menu">
        <nav class="nav" :class="{isMobile: isMobileActive}">
          <g-link class="nav__link" to="/#offer-section" @click="toggleMobileHeader666">Oferta</g-link>
          <g-link class="nav__link" to="/">Flota</g-link>
          <g-link class="nav__link" to="/#docs-section">Dokumenty</g-link>
          <g-link class="nav__link" to="/#quotation-form">Wycena</g-link>
          <g-link class="nav__link" to="/#contact-section">Kontakt</g-link>
        </nav>
        <div class="header__nav-toggle" @click="toggleMobileHeader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: 'Header',
        data: function () {
            return {
                isMobileActive: false,
            }
        },

        methods: {
            toggleMobileHeader: function () {
                this.isMobileActive = !this.isMobileActive;
            },
        }
    }

</script>

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
    opacity: 0;
    transition: all .2s ease-in;
    z-index: 20;


    @media screen and (min-width: 769px) {
      flex-direction: row;
      position: relative;
      min-height: initial;
      margin-top: 0;
      top: 0;
      display: flex;
      opacity: 1;
    }

    &.isMobile {
      opacity: 1;
      transition: all .2s ease-in;

      margin: 0;
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
</style>
