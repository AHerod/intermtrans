<template>
  <section class="contact-section max-container-no-padding fly-in" id="contact-section">
    <div class="contact-form" id="quotation-form">
      <ContactForm/>
    </div>
    <div class="contact-info">
     <p>{{section.content}} <span>{{section.phone}}</span> {{section.availability}} <span>{{section.hours}}</span>.</p>
    </div>
  </section>
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
</style>
