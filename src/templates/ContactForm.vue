<template>
  <div class="contact-form-wrapper">
    <div class="heading">
      <g-image alt="Intermtrans cube logo" src="../assets/img/logo_cube.png" width="40" quality="50"/>
      <h2>{{this.lang ? contactSection.eng.title : contactSection.title}}</h2>
    </div>
    <form
            name="contact"
            method="post"
            v-on:submit.prevent="handleSubmit"
            action="/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <div class="form__fields-wrapper">
        <div class="form__field">
          <label for="placeOfLoading">Miejsce załadunku</label>
          <input type="text" name="placeOfLoading" v-model="formData.placeOfLoading"/>
        </div>
        <div class="form__field">
          <label for="placeOfUnloading">Miejsce rozładunku</label>
          <input type="text" name="placeOfUnloading" v-model="formData.placeOfUnloading"/>
        </div>
        <div class="form__field">
          <label for="dateOfLoading">Data rozładunku</label>
          <input type="text" name="dateOfLoading" v-model="formData.dateOfLoading"/>
        </div>
        <div class="form__field">
          <label for="dateOfUnloading">Data rozładunku</label>
          <input type="text" name="dateOfUnloading" v-model="formData.dateOfUnloading"/>
        </div>
        <div class="form__field">
          <label for="name" class="label">Imię</label>
          <input type="text" name="name" v-model="formData.name"/>
        </div>
        <div class="form__field">
          <label for="lastName" class="label">Nazwisko</label>
          <input type="text" name="lastName" v-model="formData.lastName"/>
        </div>
        <div class="form__field">
          <label for="phoneNumber">Telefon</label>
          <input type="text" name="phoneNumber" v-model="formData.phoneNumber"/>
        </div>
        <div class="form__field">
          <label for="email">Your email</label>
          <input type="email" name="email" v-model="formData.email"/>
        </div>
        <div class="form__field">
          <label for="notes">Uwagi</label>
          <textarea type="text" name="notes" v-model="formData.notes"></textarea>
        </div>
      </div>

      <button type="submit">Submit form</button>
    </form>
  </div>
</template>

<script>
  import contactSection from '~/data/quotationForm.json'

  export default {
    name: 'ContactForm',
    data() {
      return {
        formData: {},
        isDate: false,
        contactSection,
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
            'form-name': e.target.getAttribute('name'),
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
