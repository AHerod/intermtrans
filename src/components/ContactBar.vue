<template>
  <section class="contact-bar">
    <div class="contact-bar__wrapper">
      <a href="https://www.facebook.com/Intermtrans-104479624389862/" target="_blank" rel="noopener"
         class="contact-bar__icon">
        <g-image alt="Facebook icon" src="~/assets/img/icon_facebook.svg" width="35" immediate="true"/>
      </a>
      <a href="https://www.linkedin.com/company/intermtrans-damian-talar/about/" class="contact-bar__icon"
         target="_blank" rel="noopener">
        <g-image alt="Linkedin icon" src="~/assets/img/icon_linkedin.svg" width="35" immediate="true"/>
      </a>
      <a href="" class="contact-bar__icon">
        <g-image alt="Phone icon" src="~/assets/img/icon_phone.svg" width="35" immediate="true"/>
      </a>
      <a href="" class="contact-bar__icon-phone"><span>{{section.phone}}</span></a>
      <button class="lang-switcher">ENG</button>
    </div>
  </section>
</template>

<script>
  import section from "~/data/contactSection.json";
    export default {
        name: 'ContactBar',
        data(){
            return {
                section,
            }
        }
    }

</script>

<style lang="scss">
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
    max-width: 400px;
    box-shadow: 2px 3px 9px 0 #00000085;
    z-index: 1;
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
    .lang-switcher {
      position: relative;
      font-weight: 600;
      color: $cRed;

      @media screen and (min-width: 769px) {
        position: absolute;
        top: -80%;
        right: 8px;
      }

      &::before {
        background: $cBlack;
        content: '';
        display: block;
        border-radius: 50%;
        border: 3px solid black;
        position: absolute;
        width: 35px;
        height: 35px;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        @media screen and (min-width: 769px) {
          display: none;
        }

      }
    }
  }
</style>
