<template>
  <div class="contact-form-wrapper">
    <div class="heading">
      <g-image alt="Intermtrans cube logo" src="../assets/img/logo_cube.svg" width="40" immediate="true"/>
      <h2>{{this.lang ? section.eng.title : section.title}}</h2>
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
          <input type="text" name="placeOfLoading" v-model="formData.placeOfLoading" :placeholder="this.lang ? section.eng.placeOfLoading : section.placeOfLoading"
                 @blur="positionLabel"/>
          <label for="placeOfLoading">{{this.lang ? section.eng.placeOfLoading : section.placeOfLoading}}</label>
        </div>
        <div class="form__field">

          <input type="text" name="placeOfUnloading" v-model="formData.placeOfUnloading"
                 :placeholder="this.lang ? section.eng.placeOfUnloading : section.placeOfUnloading" @blur="positionLabel"/>
          <label for="placeOfUnloading">{{this.lang ? section.eng.placeOfUnloading : section.placeOfUnloading}}</label>
        </div>
        <div class="form__field">
          <input type="text" name="dateOfLoading" v-model="formData.dateOfLoading" :placeholder="this.lang ? section.eng.dateOfLoading : section.dateOfLoading"
                 @blur="positionLabel"  @click="isTypeADate">
          <label for="dateOfLoading">{{this.lang ? section.eng.dateOfLoading : section.dateOfLoading}}</label>
        </div>
        <div class="form__field">
          <input type="text" name="dateOfUnloading" v-model="formData.dateOfUnloading" :placeholder="this.lang ? section.eng.dateOfUnloading : section.dateOfUnloading"
                 @blur="positionLabel"  @click="isTypeADate"/>
          <label for="dateOfUnloading">{{this.lang ? section.eng.dateOfUnloading : section.dateOfUnloading}}</label>
        </div>
        <div class="form__field">
          <input type="text" name="name" v-model="formData.name" :placeholder="this.lang ? section.eng.firstName : section.firstName" @blur="positionLabel"/>
          <label for="name" class="label">{{this.lang ? section.eng.firstName : section.firstName}}</label>
        </div>
        <div class="form__field">
          <input type="text" name="lastName" v-model="formData.lastName" :placeholder="this.lang ? section.eng.lastName : section.lastName" @blur="positionLabel"/>
          <label for="lastName" class="label">{{this.lang ? section.eng.lastName : section.lastName}}</label>
        </div>
        <div class="form__field">
          <input type="text" name="phoneNumber" v-model="formData.phoneNumber" :placeholder="this.lang ? section.eng.phone : section.phone"
                 @blur="positionLabel"/>
          <label for="phoneNumber">{{this.lang ? section.eng.phone : section.phone}}</label>
        </div>
        <div class="form__field">
          <input type="email" name="email" v-model="formData.email" placeholder="E-mail" @blur="positionLabel"/>
          <label for="email">{{section.email}}</label>
        </div>
        <div class="form__field">
          <textarea type="text" name="notes" v-model="formData.notes" :placeholder="this.lang ? section.eng.notes : section.notes"
                    @blur="positionLabel"></textarea>
          <label for="notes">{{this.lang ? section.eng.notes : section.notes}}</label>
        </div>
      </div>
      <div class="submit-btn-wrapper">
        <button type="submit">{{this.lang ? section.eng.button : section.button}}</button>
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
                    .then(() => console.log('LOOOL sukces'))
                    .catch(error => alert(error))
            },
            positionLabel(e) {
                let inputHasValue = e.target.value.length !== 0,
                    inputLabel = e.target.nextElementSibling;

                e.target.tagName === 'TEXTAREA'
                    ? inputHasValue ? inputLabel.classList.add('textareaLabel') : inputLabel.classList.remove('textareaLabel')
                    : inputHasValue ? inputLabel.classList.add('show') : inputLabel.classList.remove('show');
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


    button {
      background: $cRed;
      color: $cWhite;
      padding: 10px 55px;
      text-transform: uppercase;
      margin-left: auto;
    }
  }
</style>
