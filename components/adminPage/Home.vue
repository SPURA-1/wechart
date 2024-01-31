<template>
  <view>
    <view>
      <carousel :items="carouselItems" :autoplay="true" :indicator-dots="true" />
    </view>
  </view>
</template>

<script>
import Carousel from '@/components/carouselChart/carouselChart.vue';
import { getlandscapeImages } from '@/api/adminPage.api';
export default {
  components: {
    Carousel
  },
data() {
    return {
      imageList: [] // 初始化图片列表为空数组
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
                  this.carouselImages = res.data.images.map(image => image.image_path);
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
