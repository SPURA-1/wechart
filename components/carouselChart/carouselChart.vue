<template>
  <view class="swiper-container">
    <swiper class="swiper" :circular="circular" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
      <swiper-item v-for="(item, index) in images" :key="index">
        <image  class="swiper-item" :src="ImageUrl+item.image_path"></image>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    },
    circular: {
      type: Boolean,
      default: true
    },
    indicatorDots: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000 // 默认间隔时间为 5 秒
    },
    duration: {
      type: Number,
      default: 500 // 默认切换动画时长为 0.5 秒
    }
  },
 data() {
   return {
     ImageUrl: 'http://47.115.231.184:5555'
   };
 }
};
</script>


<style>
</style>