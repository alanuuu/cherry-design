<template>
  <div :class="cls">
    <img
      :src="src"
      class="c-image-img"
      :style="imageStyle"
      @click="clickImage"
      :alt="alt"
      @error="handleError"
      @load="handleLoad"
    />
    <template v-if="preview">
      <image-view
        :src="previewSrc && previewSrc !== '' ? previewSrc : src"
        v-show="showView"
        @close="closeView"
      ></image-view>
    </template>
  </div>
</template>

<script>
import ImageView from './image-view.vue';

const name = 'c-image';
export default {
  name: 'Image',
  props: {
    // 图片地址
    src: String,
    // 预览图片地址
    previewSrc: String,
    // 原生object-fit
    fit: {
      type: String,
      default: 'contain',
    },
    // 点击图片预览
    preview: {
      type: Boolean,
      default: true,
    },
    alt: String,
  },
  components: {
    ImageView,
  },
  data() {
    return {
      showView: false,
    };
  },
  computed: {
    cls() {
      return {
        [name]: true,
      };
    },
    imageStyle() {
      const fitType = this.fit && this.fit !== ''
        ? {
          'object-fit': this.fit,
        }
        : { 'object-fit': 'none' };
      if (this.preview) {
        fitType.cursor = 'pointer';
      }
      return fitType;
    },
  },
  methods: {
    clickImage() {
      if (this.preview && !this.showView) {
        this.showView = true;
      }
    },
    closeView() {
      if (this.preview && this.showView) {
        this.showView = false;
      }
    },
    handleError(e) {
      this.$emit('error', e);
    },
    handleLoad(e) {
      this.$emit('load', e);
    },
  },
};
</script>
