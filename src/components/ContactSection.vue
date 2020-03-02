<template>
  <section class="contact-section max-container-no-padding">
    <div class="contact-form">
      <ContactForm/>
    </div>
    <div class="contact-info">
      Aby otrzymać zupełnie darmową wycenę transportu wypełnij podany formularz lub skontaktuj się z nami
      telefonicznie
      pod numerem <span>+48 5-7 473 964</span> od poniedziałku do piątku w godzinach <span>8:00-16:00</span>.
    </div>
  </section>
</template>

<script>
    import ContactForm from "../templates/ContactForm";

    export default {
        name: 'ContactSection',
        components: {
            ContactForm
        }
    }
</script>

<style lang="scss">
  .contact-section {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    align-items: center;

    @media screen and (min-width: 769px) {
      flex-direction: row;
    }

    .contact-info {
      font-family: $fRaleway;
      text-align: center;
      font-size: 20px;
      width: 70%;
      margin-bottom: 50px;
    }

    .contact-info, .contact-form {
      @media screen and (min-width: 769px) {
        width: 50%;
      }
    }
  }
</style>
