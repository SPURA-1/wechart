<template>
  <view>
    <view>
      <!--
      :images="imageList" // 图片列表，必需属性
      :circular="true" // 是否采用衔接滑动
      :autoplay="true" // 是否自动切换
      :indicatorDots="true" // 是否显示面板指示点
      :interval="3000" // 自动切换时间间隔
      :duration="500" // 滑动动画时长
      -->
      <carousel :images="imageList"  :autoplay="true" :indicatorDots="true" />
    </view>
  </view>
</template>

<script>
import Carousel from '@/components/carouselChart/carouselChart.vue';
import { getlandscapeImages } from '@/api/adminPage.api';
export default {
  name:'Home',
  components: {
    Carousel
  },
data() {
    return {
      imageList: []// 初始化图片列表为空数组
    };
  },
  created() {
    // 在组件创建时发起异步请求获取数据
    this.fetchImageData();
  },
  methods: {
    async fetchImageData() {
      getlandscapeImages()
              .then(res => {
                if (res.status === 200) {
                  // 将获取到的图片数据存储在 imageList 数组中
                  this.imageList = res.data.images
                } else {
                  console.log('报错');
                }
              })
              .catch((error) => {
                console.log(error);
              });
    }
  }
};
</script>
