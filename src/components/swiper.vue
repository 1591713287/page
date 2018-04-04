<template>
  <div class='banner'>
    <div class='swiper-container' :class='swiperid'>
      <div class='swiper-wrapper'>
        <slot name='swiper-con'></slot>
      </div>
      <div :class='{"swiper-pagination":paginationshow}' :style='{"text-align":paginationdesition}'></div>
    </div>
  </div>
</template>

<script>
  import '../assets/swiper/js/swiper';
  export default {
    props: {
      swiperid: {
        type: String,
        default: ''
      },
      paginationshow: {
        type: Boolean,
        default: true
      },
      paginationdesition: {
        type: String,
        default: 'center'
      },
      paginationType: {
        type: String,
        default: 'bullets'
      },
      autoplay: {
        type: Number,
        default: 2000
      },
      loop: {
        type: Boolean,
        default: true
      },
      direction: {
        type: String,
        default: 'horizontal'
      },
      effect: {
        type: String,
        default: 'slide'
      }
    },
    mounted: function(){
      var That = this;
      new Swiper('.'+That.swiperid, {
        direction: That.direction,
        loop: That.loop,
        pagination: '.swiper-pagination',
        paginationType: That.paginationType,
        autoplay: That.autoplay,
        autoplayDisableOnInteraction : false,
        effect:That.effect
      })
    }
  }
</script>

<style>
@import '../assets/swiper/css/swiper.css';
  .banner {width: 100%; height: 180px; overflow: hidden;}
  .swiper-slide img {width: 100%;height:180px;}
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 106px;
    left: 0;
    width: 100%;
  }
  .swiper-pagination-bullet-active {background: #eee;}




</style>
