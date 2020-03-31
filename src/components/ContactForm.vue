<template>
  <div class="contact-form-wrapper">
    <div class="heading">
      <g-image alt="Intermtrans cube logo" src="../assets/img/logo_cube.svg" width="40" immediate="true"/>
      <h2>mjhu</h2>
    </div>
    <form
            name="contact"
            method="post"
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
                section,
            }
        },
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
