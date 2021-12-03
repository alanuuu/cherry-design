<template>
  <div class="c-image-view">
    <div class="c-image-view-mask" @click="clickView"></div>
    <!-- 关闭按钮 -->
    <icon-close-circle class="c-image-view-close" @click.native="close"></icon-close-circle>
    <!-- 改变图片大小按钮 -->
    <div class="c-image-view-size">
      <!-- 缩小 -->
      <icon-narrow
        class="c-image-view-size-narrow"
        @click.native="changeImgSize('down')"
      ></icon-narrow>
      <!-- 放大 -->
      <icon-blow-up
        class="c-image-view-size-blowup"
        @click.native="changeImgSize('up')"
      ></icon-blow-up>
    </div>
    <div class="c-image-view-image">
      <img ref="image" :src="src" class="c-image-view-img" :style="imgStyle" />
    </div>
  </div>
</template>

<script>
import { IconCloseCircle, IconBlowUp, IconNarrow } from '../icon';
export default {
  name: 'Image',
  components: {
    IconCloseCircle,
    IconBlowUp,
    IconNarrow,
  },
  props: {
    src: String,
  },
  data() {
    return {
      scale: 1,
    };
  },
  computed: {
    imgStyle() {
      const scale = this.scale;
      return {
        transform: `scale(${scale})`,
      };
    },
  },
  methods: {
    clickView() {
      this.$emit('close');
    },
    close() {
      this.$emit('close');
    },
    // 点击放大或缩小按钮
    changeImgSize(value) {
      // 每次放大缩小改变的数
      const scaleRate = 0.1;
      if (value === 'down' && this.scale > 0.1) {
        this.scale = parseFloat((this.scale - scaleRate).toFixed(1));
      } else if (value === 'up') {
        this.scale = parseFloat((this.scale + scaleRate).toFixed(1));
      }
    },
  },
};
</script>
