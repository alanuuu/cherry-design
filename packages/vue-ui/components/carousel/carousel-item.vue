<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'CarouselItem',
  data() {
    return {
      translateVal: 0,
      bg: ['skyblue', 'gray', 'seagreen'],
    };
  },
  computed: {
    classes() {
      return ['c-carousel-item'];
    },
    styles() {
      // let translate ;
      return {
        transform: `translateX(${this.translateVal}px)`,
      };
    },
  },
  methods: {
    /**
     * 计算item在父元素的偏移量，
     * @param index 当前子项的索引
     * @param activeIndex 展示的子项的索引
     */
    calculateTranslate(index, activeIndex) {
      const parentWidth = this.$parent.$el.offsetWidth;
      console.log('parent width:', parentWidth);
      // console.log("offset:", index, "/", activeIndex);
      this.translateVal = (index - activeIndex) * parentWidth;
    },
  },
};
</script>
