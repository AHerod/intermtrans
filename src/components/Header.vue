<template>
  <header id="header" class="header">
    <div class="header__content max-container">
      <div class="header__logo">
        <g-image alt="Intermtrans logo" src="~/assets/img/logo.svg" width="135" immediate="true"/>
      </div>
      <div class="header__menu">
        <nav id="nav" class="nav" :class="{isMobile: navToggles}">
          <g-link class="nav__link" to="/#offer-section" @click.native="clickNavLink">Oferta</g-link>
          <g-link class="nav__link" to="/#trucks-section" @click.native="clickNavLink">Flota</g-link>
          <g-link class="nav__link" to="/#docs-section" @click.native="clickNavLink">Dokumenty</g-link>
          <g-link class="nav__link" to="/#quotation-form" @click.native="clickNavLink">Wycena</g-link>
          <g-link class="nav__link" to="/#contact-section" @click.native="clickNavLink">Kontakt</g-link>
        </nav>
        <div class="header__nav-toggle" @click="toggleMobileHeader">
          <span :class="{active: navToggles}"></span>
          <span :class="{active: navToggles}"></span>
          <span :class="{active: navToggles}"></span>
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
                navToggles: false,
            }
        },

        created() {
            if (process.isClient) {
                window.addEventListener('scroll', this.handleScroll);
            }
        },
        destroyed() {
            if (process.isClient) {
                window.removeEventListener('scroll', this.handleScroll);
            }
        },
        methods: {
            handleScroll(event) {
                let header = document.getElementById("header"),
                    sticky = header.offsetTop;

                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                } else {
                    if (header.classList.contains('sticky'))
                    header.classList.remove("sticky");
                }
            },

            toggleMobileHeader: function () {
                this.navToggles = !this.navToggles;
            },

            clickNavLink: function () {
                this.isMobileActive = !this.isMobileActive;
                this.navToggles = !this.navToggles;
                console.log('clicked nav')
            }
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
    box-shadow: 0 7px 8px 0 #00000029;
    position: relative;
    background: $cWhite;
    z-index: 999;

    &.sticky {
      position: fixed;
      width: 100%;
      top: 0;

      + .hero-section {
        padding-top: 90px;
      }
    }

    &::before {
      @media screen and (max-width: 769px) {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: transparent;
        box-shadow: 0 7px 8px 0 #00000029;
        z-index: 999;
      }
    }

    &__logo {
      z-index: 999;
    }

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
      z-index: 999;
      cursor: pointer;

      span {
        display: block;
        background: $cRed;
        width: 30px;
        height: 4px;

        &:first-of-type {
          transition: all .4s ease-in-out;

          &.active {
            transform: rotate(45deg) translateX(25%) translateY(100%);
          }
        }

        &:last-of-type {
          transition: all .4s ease-in-out;

          &.active {
            transform: rotate(-45deg) translateX(25%) translateY(-100%);
          }
        }

        &:nth-of-type(2) {
          transition: all .4s ease-in-out;

          &.active {
            opacity: 0;
          }
        }

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
    z-index: 20;
    transform: translateY(100%);
    transition: all .6s ease-in-out;
    visibility: hidden;

    @media screen and (min-width: 769px) {
      flex-direction: row;
      position: relative;
      min-height: initial;
      margin-top: 0;
      top: 0;
      display: flex;
      opacity: 1;
      transform: none;
      visibility: visible;
    }

    @media screen and (max-width: 769px) {
      &.isMobile {
        opacity: 1;
        transform: translateY(0);
        margin: 0;
        padding-top: 60px;
        visibility: visible;
      }
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
      transition: all .4s ease-in-out;

      &:hover {
        color: $cRed;
        transition: all .4s ease-in-out;

        &::after {
          background: $cBlack;
          transition: all .4s ease-in-out;
        }
      }

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
        transition: all .4s ease-in-out;

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
