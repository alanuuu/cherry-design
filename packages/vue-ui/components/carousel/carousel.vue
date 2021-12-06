<template>
  <div :class="classes">
    <div class="c-carousel-container" :style="{ height: `${height}px` }">
      <button class="c-btn c-btn-left" @click="prev">
        <icon-left />
      </button>
      <button class="c-btn c-btn-right" @click="next">
        <icon-right />
      </button>
      <!-- 面板指示点 -->
      <ul class="c-carousel-dot" v-if="dots">
        <li
          v-for="index in itemsLen"
          :key="index"
          @click="activeIndex = index - 1"
        >
          <button
            class="c-carousel-dot-btn"
            :class="{ 'btn-active': index - 1 === activeIndex }"
          ></button>
        </li>
      </ul>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { IconLeft, IconRight } from '../icon';

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
    dots: {
      type: Boolean,
      default: true,
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
      this.$emit('prev');
    },
    next() {
      if (this.activeIndex + 1 > this.itemsLen - 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex += 1;
      }
      this.$emit('next');
    },
    setItemPosition(oldVal, newVal) {
      this.items.forEach((item, index) => {
        item.calculateTranslate(index, this.activeIndex, this.itemsLen);
        if (oldVal === index || newVal === index) {
          item.setAnimation();
        }
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
    activeIndex(oldVal, newVal) {
      this.setItemPosition(oldVal, newVal);
    },
  },
};
</script>
