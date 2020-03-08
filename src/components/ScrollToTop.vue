<template>
  <div class="scroll-to-top" @click="scrollViewToTheTop" id="scrollToTop">
    <g-image class="arrow" alt="arrow icon" src="~/assets/img/arrow_right.svg" width="20" immediate="true"/>
  </div>
</template>

<script>
  export default {
      components: {
          name: 'ScrollToTop',
      },

      methods: {
          //@TODO  fix bug with window on build on production
          scrollViewToTheTop() {
              console.log('scrollViewToTheTop is on');
              if (process.isClient) {
                  console.log('IS CLIENT window.scrollTo(0,0)');
                  window.scrollTo(0, 0);
              } else {
                  console.log('IS server window.scrollTo(0,0)');
              }
          }
      }
  }
</script>

<style lang="scss">
  .scroll-to-top {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0px 1px 3px $cRed;
    position: fixed;
    bottom: 20px;
    right: 15px;
    text-align: center;
    display: flex;
    justify-content: center;
    transition: .6s ease-in-out;
    opacity: 0;
    z-index: 1001;
    background: $cWhite;
    cursor: pointer;

    &.visible {
      opacity: 1;
    }

    img {
      transform: rotate(-90deg);
    }
  }

</style>
