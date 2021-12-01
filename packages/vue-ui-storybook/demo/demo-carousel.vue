<template>
  <carousel v-bind="attr">
    <carousel-item
      v-for="(item, index) in pictList"
      :key="index"
      class="carousel-item-demo"
    >
      <img :src="item" width="100%">
    </carousel-item>
  </carousel>
</template>
<script>
import { Carousel, CarouselItem } from '@csdn-design/vue-ui';
export default {
  name: 'CarouselDemo',
  components: {
    Carousel,
    CarouselItem,
  },
  props: ['attr'],
  data() {
    return {
      pictList: [
        require('./pic1.jpg'),
        require('./pic2.jpg'),
        require('./pic3.jpg')
      ]
    }
  }
};
</script>
<style lang="less" scoped>
.carousel-item-demo {
  &:nth-child(3n) {
    background: seagreen;
  }
  &:nth-child(3n + 1) {
    background: skyblue;
  }
  &:nth-child(3n + 2) {
    background: sandybrown;
  }
}
</style>
