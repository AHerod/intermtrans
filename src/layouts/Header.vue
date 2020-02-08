<template>
  <div>
    <header class="header">
      <div class="header__content max-container">
        <div class="header__logo">
          <g-image alt="Intermtrans logo" src="~/assets/img/logo.svg" width="135"/>
        </div>
        <div class="header__menu">
          <nav class="nav">
            <g-link class="nav__link" to="/">Oferta</g-link>
            <g-link class="nav__link" to="/about/">Flota</g-link>
            <g-link class="nav__link" to="/about/">Dokumenty</g-link>
            <g-link class="nav__link" to="/about/">Wycena</g-link>
            <g-link class="nav__link" to="/about/">Kontakt</g-link>
          </nav>
        </div>
      </div>
    </header>
    <slot/>
  </div>
</template>

<static-query>
  query {
  metadata {
  siteName
  }
  }
</static-query>

<style lang="scss">
  body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }

  .max-container {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 80px;
    box-shadow: 0px 3px 6px #00000029;

    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .nav {
    &__link {
      margin-left: 45px;
    }
  }

</style>
