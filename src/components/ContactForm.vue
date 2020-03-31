<template>
  <div class="contact-form-wrapper">
    <div class="heading">
      <g-image alt="Intermtrans cube logo" src="../assets/img/logo_cube.svg" width="40" immediate="true"/>
      <h2>mjhu</h2>
    </div>
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
