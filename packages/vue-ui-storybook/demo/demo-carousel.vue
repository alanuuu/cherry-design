<template>
  <carousel v-bind="attr" @prev="onPrev" @next="onNext">
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
  methods: {
    onPrev() {
      console.log('点击了上一个');
      this.$emit('prev');
    },
    onNext() {
      console.log('点击了下一个');
      this.$emit('next');
    },
  },
};
</script>
<style lang="less" scoped>
.carousel-item-demo {
  // background: snow;
}
</style>
