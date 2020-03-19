<template>
  <div class="sections-wrapper">
    <section class="contact-section max-container-no-padding fly-in" id="contact-section">
      <div class="contact-form" id="quotation-form">
        <ContactForm :lang="this.lang"/>
      </div>
      <div class="contact-info">
        <p>{{this.lang ? section.eng.content : section.content}} <span>{{section.phone}}</span>{{this.lang ?
          section.eng.availability :
          section.availability}}<span>{{this.lang ? section.eng.hours : section.hours}}</span>.
        </p>
      </div>
    </section>
    <section class="contact-details">
      <div class="contact-details__image">
        <!--        <g-image class="phone" alt="hero image" src="~/assets/img/contact_hero.png"-->
        <!--                 width="1000" immediate="true"/>-->
      </div>
      <div class="contact-details__items">
        <span class="contact-details__item">
          <g-image class="phone" alt="phone icon" src="~/assets/img/icon_phone_2.svg"
                   width="40" />{{section.phone}}</span>
        <span class="contact-details__item">
          <g-image class="email" alt="email icon" src="~/assets/img/icon_email.svg"
                   width="40" />{{section.email}}</span>
        <span class="contact-details__item">
          <g-image class="email" alt="world icon" src="~/assets/img/icon_worldwide.svg"
                   width="40" />{{section.address}}</span>
        <div class="contact-details__trans">
          <span class="contact-details__item"><span class="label">TRANS:</span>{{section.trans}}</span>
          <span class="contact-details__item"><span class="label">TIMO:</span>{{section.timo}}</span>
        </div>
<!--        <g-image class="contact-details__cube" alt="Intermtrans cube logo" src="../assets/img/logo_cube.svg"-->
<!--                 width="170" immediate="true"/>-->
      </div>
    </section>
    <div class="bottom-bg"></div>
  </div>
</template>

<script>
    import ContactForm from "../templates/ContactForm";
    import section from "~/data/contactSection.json";

    export default {
        name: 'ContactSection',
        components: {
            ContactForm
        },
        data() {
            return {
                section
            }
        },
        props: ['lang']
    }
</script>

<style lang="scss">
  .contact-section {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 100px;

    @media screen and (min-width: 769px) {
      flex-direction: row;
    }

    .contact-form {
      padding-top: 60px;
    }

    .contact-info {
      font-family: $fRaleway;
      text-align: center;
      font-size: 20px;
      width: 70%;

      @media screen and (min-width: 992px) {
        margin-left: 30px;
        margin-bottom: 50px;
      }

      span {
        font-weight: 700;
        white-space: nowrap;
      }
    }

    .contact-info, .contact-form {
      @media screen and (min-width: 769px) {
        width: 50%;
      }
    }
  }

  .contact-details {
    display: flex;
    position: relative;
    padding-bottom: 30px;

    &__image {
      @media screen and (min-width: 992px) {
        padding-bottom: 100px;
        padding-top: 100px;
        width: 100%;
        max-width: 15%;
      }
    }

    &__items {
      width: 75%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 650px;
      margin: 0 auto;

      @media screen and (max-width: 480px) {
        background-color: #ffffffbd;
        box-shadow: 5px 0 20px 0;
        padding: 20px 25px;
        min-width: 315px;

        span {
          font-size: 16px;
          word-break: break-word;
          margin: 0 auto;
          margin-bottom: 20px;
        }
      }

      @media screen and (min-width: 1200px) {
        flex-wrap: wrap;
        width: 45%;
      }
    }

    &__item {
      display: flex;
      align-items: center;
      font-weight: 600;
      color: $cRed;
      margin-bottom: 20px;
      font-size: 20px;

      img {
        margin-right: 25px;

        @media screen and (max-width: 480px) {
          width: 35px;
          margin-right: 15px;
        }
      }
    }

    &__trans {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-basis: 100%;

      .label {
        margin-right: 15px;
        color: $cBlack;
        text-transform: uppercase;
        margin-bottom: 0;
      }
    }

    &__cube {
      width: 90px;
      position: absolute;
      right: 0;
      transform: translateX(50%);
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
    }
  }

  .sections-wrapper {
    position: relative;

    .bottom-bg {
      position: absolute;
      width: 100%;
      z-index: -1;
      bottom: 0;
      left: 0;
      height: 115%;
      background-image: url('../assets/img/bottom_bg_v2.png');
      background-position: center left;
      background-repeat: no-repeat;
      background-size: cover;

      @media screen and (min-width: 480px) and (max-width: 991px) {
        display: none;
      }

      @media screen and (min-width: 992px) {
        background-size: cover;
        background-position: center left;
        height: 100%;
      }
    }
  }
</style>
