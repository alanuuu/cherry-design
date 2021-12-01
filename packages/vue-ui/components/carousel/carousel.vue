<template>
  <div :class="classes">
    <div class="c-carousel__container" :style="{ height: `${height}px` }">
      <button class="btn left" @click="prev">
        <i class="c-icon arrow-left"></i>
      </button>
      <button class="btn right" @click="next">
        <i class="c-icon arrow-right"></i>
      </button>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Carousel',
  props: {
    autoPlay: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 3000,
    },
    height: {
      type: Number,
      default: 150,
    },
  },
  data() {
    return {
      activeIndex: 0,
      timer: null,
      items: [], // 记录子组件的内容
    };
  },
  methods: {
    startAutoPlay() {
      if (this.autoPlay) {
        this.timer = setInterval(this.next, this.interval);
      }
    },
    stopAutoPlay() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = null;
    },
    prev() {
      if (this.activeIndex - 1 < 0) {
        this.activeIndex = this.itemsLen - 1;
      } else {
        this.activeIndex -= 1;
      }
    },
    next() {
      if (this.activeIndex + 1 > this.itemsLen - 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex += 1;
      }
    },
    setItemPosition() {
      this.items.forEach((item, index) => {
        item.calculateTranslate(index, this.activeIndex);
      });
    },
  },
  computed: {
    classes() {
      const classes = ['c-carousel'];
      return classes;
    },
    itemsLen() {
      return this.items.length;
    },
  },
  mounted() {
    this.items = this.$children.filter((child) => {
      return child.$options.name === 'CarouselItem';
    });
    this.setItemPosition();
    this.startAutoPlay();
  },
  watch: {
    autoPlay(val) {
      if (val) {
        this.startAutoPlay();
      } else {
        this.stopAutoPlay();
      }
    },
    // 监听自动播放间隔的变化，当发生改变时，需要重启定时器，否则会一直
    interval() {
      this.stopAutoPlay();
      this.stopAutoPlay();
    },
    activeIndex() {
      this.setItemPosition();
    },
  },
};
</script>
