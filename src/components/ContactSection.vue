<template>
  <div class="sections-wrapper">
    <section class="contact-section max-container-no-padding fly-in" id="contact-section">
      <div class="contact-form" id="quotation-form">
        <template>
          <div class="contact-form-wrapper">
            <div class="heading">
              <g-image alt="Intermtrans cube logo" src="../assets/img/logo_cube.png" width="40"/>
              <h2>{{this.lang ? formSection.eng.title : formSection.title}}</h2>
            </div>
            <form
                    name="contact"
                    method="post"
                    v-on:submit.prevent="handleSubmit"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="contact-form" value="contact"/>
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field"/>
                </label>
              </p>
              <div class="form__fields-wrapper">
                <div class="form__field">
                  <label for="placeOfLoading">{{this.lang ? formSection.eng.placeOfLoading :
                    formSection.placeOfLoading}}</label>
                  <input type="text" id="placeOfLoading" name="placeOfLoading" v-model="formData.placeOfLoading"/>
                </div>
                <div class="form__field">
                  <label for="placeOfUnloading">{{this.lang ? formSection.eng.placeOfUnloading :
                    formSection.placeOfUnloading}}</label>
                  <input type="text" id="placeOfUnloading" name="placeOfUnloading" v-model="formData.placeOfUnloading"/>
                </div>
                <div class="form__field">
                  <label for="dateOfLoading">{{this.lang ? formSection.eng.dateOfLoading :
                    formSection.dateOfLoading}}</label>
                  <input type="text" id="dateOfLoading" name="dateOfLoading" v-model="formData.dateOfLoading">
                </div>
                <div class="form__field">
                  <label for="dateOfUnloading">{{this.lang ? formSection.eng.dateOfUnloading :
                    formSection.dateOfUnloading}}</label>
                  <input type="text" id="dateOfUnloading" name="dateOfUnloading" v-model="formData.dateOfUnloading"/>
                </div>
                <div class="form__field">
                  <label for="name" class="label">{{this.lang ? formSection.eng.firstName :
                    formSection.firstName}}</label>
                  <input type="text" id="name" name="name" v-model="formData.name"/>
                </div>
                <div class="form__field">
                  <label for="lastName" class="label">{{this.lang ? formSection.eng.lastName :
                    formSection.lastName}}</label>
                  <input type="text" id="lastName" name="lastName" v-model="formData.lastName"/>
                </div>
                <div class="form__field">
                  <label for="phoneNumber">{{this.lang ? formSection.eng.phone : formSection.phone}}</label>
                  <input type="text" id="phoneNumber" name="phoneNumber" v-model="formData.phoneNumber"/>
                </div>
                <div class="form__field">
                  <label for="email">{{formSection.email}}</label>
                  <input type="email" id="email" name="email" v-model="formData.email"/>
                </div>
                <div class="form__field">
                  <label for="notes">{{this.lang ? formSection.eng.notes : formSection.notes}}</label>
                  <textarea type="text" id="notes" name="notes" v-model="formData.notes"></textarea>
                </div>
              </div>
              <div class="submit-btn-wrapper">
                <button type="submit">{{this.lang ? formSection.eng.button : formSection.button}}</button>
              </div>
            </form>
          </div>
        </template>
      </div>
      <div class="contact-info">
        <p>{{this.lang ? section.eng.content : section.content}} <span>{{section.phone}}</span>{{this.lang ?
          section.eng.availability :
          section.availability}}<span>{{this.lang ? section.eng.hours : section.hours}}</span>.
        </p>
      </div>
    </section>
    <section class="contact-details">
      <div class="contact-details__items">
        <span class="contact-details__item">
          <g-image class="phone" alt="phone icon" src="~/assets/img/icon_phone_2.png"
                   width="40"/>{{section.phone}}</span>
        <span class="contact-details__item">
          <g-image class="email" alt="email icon" src="~/assets/img/icon_email.png"
                   width="40"/>{{section.email}}</span>
        <span class="contact-details__item">
          <g-image class="email" alt="world icon" src="~/assets/img/icon_worldwide.png"
                   width="40"/>{{section.address}}</span>
        <div class="contact-details__trans">
          <span class="contact-details__item"><span class="label">TRANS:</span>{{section.trans}}</span>
          <span class="contact-details__item"><span class="label">TIMO:</span>{{section.timo}}</span>
        </div>
        <g-image class="contact-details__cube" alt="Intermtrans cube logo" src="../assets/img/logo_cube.png"
                 width="170"/>
      </div>
    </section>
    <div class="bottom-bg"></div>
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
        formData: {},
        section,
        formSection
      }
    },
    props: ['lang'],
    methods: {
      encode(data) {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&')
      },
      handleSubmit(e) {
        fetch('/', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: this.encode({
            'contact-form': e.target.getAttribute('name'),
            ...this.formData,
          }),
        })
          .then(() => console.log('form sent'))
          .catch(error => alert(error))
      },
    }
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
      position: relative;

      @media screen and (min-width: 992px) {
        margin-left: 30px;
        margin-bottom: 50px;
      }

      @media screen and (min-width: 1300px) {
        &::before {
          content: '';
          width: 250px;
          height: 400px;
          display: block;
          position: absolute;
          border-left: 40px solid $cRed;
          border-top: 40px solid $cRed;
          transform: skew(15deg) rotate(-20deg);
          right: -60%;
          top: -250%;
          z-index: -1;
          box-shadow: 3px 2px 13px 0px;
        }
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
    }
  }
</style>
