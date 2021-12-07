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
      isAnimating: false,
    };
  },
  computed: {
    classes() {
      return [
        'c-carousel-item',
        { 'c-carousel-item-animation': this.isAnimating },
      ];
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
    calculateTranslate(index, activeIndex, childLen) {
      const parentWidth = this.$parent.$el.offsetWidth;
      // 首先计算出最近的间隔
      let interval = index - activeIndex;
      if (interval > childLen / 2) {
        interval -= childLen;
      }
      if (interval < -childLen / 2) {
        interval += childLen;
      }
      // 计算
      this.translateVal = interval * parentWidth;
      this.isAnimating = false;
    },
    setAnimation() {
      this.isAnimating = true;
    },
  },
};
</script>
