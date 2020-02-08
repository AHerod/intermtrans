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
</style>
