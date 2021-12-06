<template>
  <carousel v-bind="attr">
    <carousel-item
      v-for="(item, index) in pictList"
      :key="index"
      class="carousel-item-demo"
    >
      <img :src="item" height="100%" />
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
        require('./pic3.jpg'),
        require('./pic2.jpg'),
        require('./pic3.jpg'),
        require('./pic2.jpg'),
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.carousel-item-demo {
  // background: snow;
}
</style>
