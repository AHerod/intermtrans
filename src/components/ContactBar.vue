<template>
  <section class="contact-bar">
    <a href="https://www.facebook.com/Intermtrans-104479624389862/" target="_blank" rel="noopener"
       class="contact-bar__icon">
      <g-image alt="Facebook icon" src="~/assets/img/icon_facebook.svg" width="35" immediate="true"/>
    </a>
    <a href="https://www.linkedin.com/company/intermtrans-damian-talar/about/" class="contact-bar__icon"
       target="_blank" rel="noopener">
      <g-image alt="Linkedin icon" src="~/assets/img/icon_linkedin.svg" width="35" immediate="true"/>
    </a>
    <a href="" class="contact-bar__icon">
      <g-image alt="Phone icon" src="~/assets/img/icon_phone.svg" width="35" immediate="true"/>
    </a>
    <a href="" class="contact-bar__icon"><span>+ 48 507 473 964</span></a>
  </section>
</template>

<script>
    export default {
        name: 'ContactBar',
    }

</script>

<style lang="scss">
  .contact-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $cRed;
    margin-top: -20px;
    padding: 10px 12px;
    width: 100%;
    float: right;
    position: relative;
    z-index: 10;
    @include clearfix;

    @media screen and (min-width: 769px) {
      max-width: 400px;

      &::before {
        content: " ";
        position: absolute;
        display: block;
        width: 120%;
        height: 100%;
        top: 0;
        right: -20%;
        z-index: -1;
        background: $cRed;
        transform-origin: bottom left;
        transform: skew(45deg, 0deg);
        box-shadow: 0px 3px 6px #00000029;
      }
    }

    span {
      color: $cWhite;
      font-weight: bolder;
      font-size: large;
      display: none;

      @media screen and (min-width: 769px) {
        display: block;
      }
    }
  }
</style>
