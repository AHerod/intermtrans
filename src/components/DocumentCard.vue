<template>
  <div class="document-card">
    <p class="document-card__title">
      {{ title }}
    </p>
    <div class="document-card__img">
      <g-image class="document-card__cube" alt="cube icon" src="../assets/img/logo_cube.png" width="35" quality="40"/>
    </div>
    <a v-bind:href="filePath" class="document-card__open-btn" target="_blank">
      {{this.lang ? 'Open' : 'Otwórz'}}
    </a>
  </div>
</template>

<script>
  export default {
    name: 'documentCard',
    props: ['title', 'filePath', 'lang'],
  }

</script>

<style lang="scss">
  .document-card {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 170px;
    height: 240px;
    box-shadow: 1px 6px 6px 1px #2c2c2c9e;
    position: relative;
    transition: .4s ease-in-out all;

    &::before,
    &::after {
      position: absolute;
      content: '';
      display: block;
      bottom: 0;
      width: 0;
      height: 0;
      z-index: 10;
      border-bottom: 50px solid #ccc;
    }

    &::before {
      left: 0;
      border-right: 100px solid transparent;
    }

    &::after {
      right: 0;
      border-left: 100px solid transparent;
    }

    &__title {
      font-size: 18px;
      padding: 20px 0;
      transform: translateY(45px);
      transition: .4s ease-in-out all;
      text-transform: capitalize;

      @media screen and (min-width: 1200px) {
        font-size: 18px;
      }
    }

    &__img {
      width: 100%;
      height: 100%;
      position: absolute;
    }

    &__cube {
      bottom: 0;
      margin: 0 auto;
      display: block;
      padding-top: 90%;
      transition: .4s ease-in-out all;
    }

    &__open-btn {
      color: $cRed;
      text-transform: uppercase;
      border: 1px solid $cRed;
      font-size: 14px;
      padding: 10px;
      position: absolute;
      bottom: 40%;
      visibility: hidden;
      opacity: 0;
      transition: .4s ease-in-out all;
      transform: translateY(100px);
      letter-spacing: 2px;
    }

    &:hover {
      box-shadow: 2px 20px 18px 3px #00000040;
      transition: .4s ease-in-out all;
      cursor: pointer;
      z-index: 9;

      &:before {
        height: 10%;
      }

      .document-card__title {
        transform: translateY(15px);
        transition: .4s ease-in-out all;
      }

      .document-card__open-btn {
        visibility: initial;
        opacity: 1;
        transform: translateY(15px);
        transition: .4s ease-in-out all;
      }

      .document-card__cube {
        padding-top: 100%;
        transition: .4s ease-in-out all;
      }
    }
  }
</style>
