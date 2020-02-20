<template>
  <div class="under-construction">
    <div class="version">
      <h1>Strona w przebudowie</h1>
      <h3 class="eng">Page under construction</h3>
    </div>
    <g-image class="logo" alt="Intermtrans logo" src="~/assets/img/logo.svg" width="235"/>
    <div class="informations">
      <div class="contact">
        <div>
          <g-image class="logo" alt="Intermtrans logo" src="~/assets/img/contact_phone.svg" width="50"/>
          +48 507 473 964
        </div>
        <div>
          <g-image class="logo" alt="Intermtrans logo" src="~/assets/img/contact_worldwide.svg" width="50"/>
          51-128 Wrocław
        </div>
        <div>
          <g-image class="logo" alt="Intermtrans logo" src="~/assets/img/contact_mail.svg" width="50"/>
          dtalar@intermtrans.com
        </div>
      </div>
      <div class="offer">
        <a href="https://drive.google.com/file/d/1piKusD5fU4Jy9eYusYixEdlZeFQLlxAv/preview" target="_blank">Zapoznaj się
          z naszą ofertą</a>
        <a href="https://drive.google.com/file/d/1p8tguUqNosmQZBm0nymgvlzW4FlQFG3t/preview" target="_blank">See our
          offer</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'underConstruction',
    }

</script>

<style lang="scss">
  .under-construction {
    max-width: 750px;
    color: $cBlack;
    margin: 0 auto;
    text-align: center;
    padding: 0 15px;

    h1 {
      color: $cRed;
      margin-bottom: 10px;
    }

    .logo {
      margin: 20px 0;
    }

    .informations {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 100%;

      @media screen and (max-width: 769px) {
        flex-direction: column;
      }
    }

    .contact {
      > div {
        display: flex;
        align-items: center;
        @media screen and (max-width: 769px) {
          justify-content: center;
        }

        img {
          margin-right: 20px;
          color: red;

          @media screen and (max-width: 769px) {
            width: 30px;
          }
        }
      }
    }

    .offer {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      font-family: $fRaleway;

      a {
        font-family: $fRaleway;
        background: $cRed;
        color: $cWhite;
        padding: 20px;
        text-transform: uppercase;
        margin-left: auto;
        margin-bottom: 30px;
        width: 400px;
        display: block;
        max-width: 100%;
        white-space: nowrap;
        font-weight: 700;
        cursor: pointer;
        text-align: center;

        @media screen and (max-width: 769px) {
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }
    }
  }
</style>
