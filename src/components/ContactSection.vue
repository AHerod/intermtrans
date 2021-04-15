<template>
  <div class="sections-wrapper">
    <section class="contact-section max-container-no-padding fly-in" id="contact-section">
      <div class="contact-form" id="quotation-form">
        <ContactForm/>
      </div>
      <div class="contact-info">
        <p>{{this.lang ? section.eng.content : section.content}} <span>{{section.phone}}</span>{{this.lang ?
          section.eng.availability :
          section.availability}}<span>{{this.lang ? section.eng.hours : section.hours}}</span>.
        </p>
      </div>
    </section>
    <section class="contact-details">
      <g-image class="contact-details__background" alt="footer background" src="../assets/img/contact_hero.png"
               width="350" fit="inside"/>
      <div class="contact-details__items">
        <div>
          <span class="contact-details__item">
          <g-image class="phone" alt="phone icon" src="~/assets/img/icon_phone_2.png"
                   width="40" quality="50"/>{{section.phone}}</span>
          <span class="contact-details__item">
          <g-image class="email" alt="email icon" src="~/assets/img/icon_email.png"
                   width="40" quality="50"/>{{section.email}}</span>
          <span class="contact-details__item">
          <g-image class="email" alt="world icon" src="~/assets/img/icon_worldwide.png"
                   width="40" quality="50"/>{{section.address}}</span>
        </div>

        <div class="contact-details__trans">
          <span class="contact-details__item"><span class="label">TRANS:</span>{{section.trans}}</span>
          <span class="contact-details__item"><span class="label">TIMO:</span>{{section.timo}}</span>
        </div>
      </div>
      <g-image class="contact-details__cube" alt="Intermtrans cube logo" src="../assets/img/logo_cube.png"
               width="250" quality="50"/>
    </section>
  </div>
</template>

<script>
  import ContactForm from "../templates/ContactForm";
  import formSection from '~/data/quotationForm.json'
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
    margin-bottom: 20px;

    @media screen and (min-width: 769px) {
      flex-direction: row;
      margin-bottom: 100px;
    }

    .contact-form {
      padding-top: 25px;
      @media screen and (min-width: 769px) {
        padding-top: 60px;
      }
    }

    .contact-info {
      font-family: $fRaleway;
      text-align: center;
      font-size: 20px;
      width: 70%;
      position: relative;

      p {
        margin: 0 20px;
      }

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
    align-items: center;

    &__image {
      @media screen and (min-width: 992px) {
        padding-bottom: 100px;
        padding-top: 100px;
        width: 100%;
        max-width: 15%;
      }
    }

    &__items {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 800px;
      width: 100%;

      > div {
        flex: 1;
        max-width: 350px;
        width: 100%;

        @media screen and (max-width: 768px) {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-basis: 100%;
        }
      }

      @media screen and (max-width: 480px) {
        background-color: #ffffffbd;
        box-shadow: 0 3px 15px rgba(0, 0, 0, .16);
        padding: 20px 25px;
        width: 100%;

        span {
          font-size: 14px;
          word-break: break-word;
          margin: 0 auto;
          margin-bottom: 20px;
        }
      }

      @media screen and (min-width: 900px) {
        flex-wrap: wrap;
        flex-direction: row;
        margin: 0 auto;
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
      display: none;

      @media screen and (min-width: 992px) {
        width: 180px;
        display: block;
      }
      @media screen and (min-width: 1200px) {
        width: 250px;
      }
    }

    &__background {
      display: none;
      @media screen and (min-width: 768px) {
        display: block;
      }
    }
  }

  .sections-wrapper {
    position: relative;
  }

  .contact-form-wrapper {
    background: $cWhite;
    box-shadow: 0px 3px 15px #00000029;
    padding: 30px;
    max-width: 500px;

    .heading {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      @media screen and (min-width: 768px) {
        margin-bottom: 40px;
      }

      img {
        margin-right: 10px;
      }
    }

    .form__field {
      width: 100%;
      flex-basis: 45%;
      margin: 0 15px 15px 0;
      position: relative;

      @media screen and (max-width: 480px) {
        flex-basis: 100%;
      }

      @media screen and (min-width: 768px) {
        margin: 0 15px 25px 0;
      }

      &:last-of-type {
        flex-basis: 100%;

        label {
          transform: translateY(-150%);
        }
      }

      input,
      textarea {
        width: 100%;
        background: #E7E7E7;
        height: 40px;
        border: none;
        padding: 8px;
        color: #666;

        &::placeholder {
          text-transform: capitalize;
          color: #666;
        }
      }

      textarea {
        resize: none;
        height: 120px;

        &:focus + label {
          transform: translateY(-260%);
        }
      }

      label {
        text-transform: capitalize;
        width: 100%;
        transform: translateY(-50%);
        color: #A5A5A5;
        font-family: $fRaleway;
        font-size: 14px;

        &.textareaLabel {
          transform: translateY(-260%);
          opacity: 1;
          transition: .2s ease-in all;
          font-size: smaller;
          color: $cBlack;
          left: -8px;
        }
      }
    }

    .form__fields-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-right: -15px;
    }

    .submit-btn-wrapper {
      display: flex;
    }

    button {
      background: $cRed;
      color: $cWhite;
      padding: 10px 55px;
      text-transform: uppercase;
      margin-left: auto;
      font-family: $fOrbitron;
      white-space: pre;
    }
  }
</style>
