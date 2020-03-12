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

      created() {
          if (process.isClient) {
              window.addEventListener('scroll', this.setScrollToTop);
          }
      },
      destroyed() {
          if (process.isClient) {
              window.removeEventListener('scroll', this.setScrollToTop);
          }
      },
      methods: {
          //@TODO  fix bug with window on build on production
          setScrollToTop: function () {

              if (process.isClient) {
                  console.log('IS CLIENT window.scroll');
                  window.onscroll = function () {

                      let topSection = document.getElementById('hero-section'),
                          scrollToTop = document.getElementById('scrollToTop');
                      if (topSection.getBoundingClientRect().top <= window.innerHeight * 0.95 && topSection.getBoundingClientRect().top > 0) {
                          scrollToTop.classList.remove('visible');
                      } else {
                          scrollToTop.classList.add('visible');
                      }

                  };
              } else {
                  console.log('IS server window.scroll');
              }
          },
          scrollViewToTheTop: function () {
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
