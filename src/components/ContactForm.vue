<template>
  <div class="contact-form-wrapper">
    <div class="heading">
      <g-image alt="Intermtrans cube logo" src="../assets/img/logo_cube.svg" width="40" immediate="true"/>
      <h2>mjhu</h2>
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
          <input type="text" name="placeOfLoading" v-model="formData.placeOfLoading" />
          <label for="placeOfLoading">test</label>
        </div>
        <div class="form__field">

          <input type="text" name="placeOfUnloading" v-model="formData.placeOfUnloading"/>
          <label for="placeOfUnloading">llkmm</label>
        </div>
        <div class="form__field">
          <input type="text" name="dateOfLoading" v-model="formData.dateOfLoading" />
          <label for="dateOfLoading">mnjnk</label>
        </div>
        <div class="form__field">
          <input type="text" name="dateOfUnloading" v-model="formData.dateOfUnloading" />
          <label for="dateOfUnloading">jkmk</label>
        </div>
        <div class="form__field">
          <input type="text" name="name" v-model="formData.name"/>
          <label for="name" class="label">lokll</label>
        </div>
        <div class="form__field">
          <input type="text" name="lastName" v-model="formData.lastName"/>
          <label for="lastName" class="label">jnj</label>
        </div>
        <div class="form__field">
          <input type="text" name="phoneNumber" v-model="formData.phoneNumber"
                />
          <label for="phoneNumber">mgfxc</label>
        </div>
        <div class="form__field">
          <input type="email" name="email" v-model="formData.email" placeholder="E-mail" />
          <label for="email">mkl</label>
        </div>
        <div class="form__field">
          <textarea type="text" name="notes" v-model="formData.notes"
                   ></textarea>
          <label for="notes">mbhnj</label>
        </div>
      </div>
      <div class="submit-btn-wrapper">
        <button type="submit">jnuhyhn</button>
      </div>
    </form>
  </div>
</template>

<script>
    import section from '~/data/quotationForm.json'
    export default {
        name: 'ContactForm',
        data() {
            return {
                formData: {},
                isDate: false,
                section,
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
            },
            positionLabel(e) {
                // let inputHasValue = e.target.value.length !== 0,
                //     inputLabel = e.target.nextElementSibling;
                //
                // e.target.tagName === 'TEXTAREA'
                //     ? inputHasValue ? inputLabel.classList.add('textareaLabel') : inputLabel.classList.remove('textareaLabel')
                //     : inputHasValue ? inputLabel.classList.add('show') : inputLabel.classList.remove('show');
                console.log('dada')
            },
            isTypeADate(e) {
                return this.isDate = true;
            }
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

        &:focus + label {
          transform: translateY(-130%);
          opacity: 1;
          transition: .2s ease-in all;
          font-size: smaller;
          color: $cBlack;
          left: -8px;
        }

        &:focus::placeholder {
          color: transparent;
          font-size: smaller;
          transition: .2s ease-in all;
        }

        &::placeholder {
          text-transform: capitalize;
          transition: .2s ease-in all;
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
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #A5A5A5;
        font-family: $fRaleway;
        font-size: 14px;
        padding: 8px;
        opacity: 0;
        transition: .2s ease-in all;
        pointer-events: none;

        &.show {
          transform: translateY(-130%);
          opacity: 1;
          transition: .2s ease-in all;
          font-size: smaller;
          color: $cBlack;
          left: -8px;
        }

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
