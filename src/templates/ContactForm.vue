<template>
  <div class="contact-form-wrapper">
    <div class="heading">
      <g-image alt="Intermtrans cube logo" src="~/assets/logo_cube.svg" width="40"/>
      <h2>Wycena transportu</h2>
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
      <div class="submit-btn-wrapper">
        <button type="submit">Wyślij</button>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
        name: 'ContactForm',
        data() {
            return {
                formData: {},
            }
        },

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
                    .then(() => console.log('LOOOL sukces'))
                    .catch(error => alert(error))
            }
        }
    }

</script>
<style lang="scss">
  .contact-form-wrapper {
    background: $cWhite;
    box-shadow: 0px 3px 6px #00000029;
    padding: 30px;
    max-width: 500px;

    .heading {
      display: flex;
      align-items: center;
      margin-bottom: 40px;

      img {
        margin-right: 10px;
      }
    }

    .form__field {
      width: 46%;
      margin: 0 15px 15px 0;
      position: relative;

      &:last-of-type {
        flex-basis: 100%;

        label {
          transform: translateY(-150%);
        }
      }

      input, textarea {
        width: 100%;
        background: #E7E7E7;
        height: 40px;
        border: none;
        padding: 8px;
      }

      textarea {
        resize: none;
        height: 120px;
      }

      label {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #A5A5A5;
        font-family: $fRaleway;
        font-size: 14px;
        padding: 8px;
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
      padding: 10px 80px;
      text-transform: uppercase;
      width: 46%;
      margin-left: auto;
    }
  }
</style>
