<template>
  <div class="c-loading">
    <!-- 遮罩层 -->
    <div class="c-loading-blur" v-if="isLoading && !!$slots.default"></div>
    <!-- 加载中图案和文字 -->
    <div
      class="c-loading-content"
      :class="{ center: !!$slots.default }"
      v-if="isLoading"
    >
      <div class="loading-circle" :style="sizeStyle" v-if="type == 'circle'"></div>
      <beat v-if="type == 'beat'" />
      <div class="loading-tip" v-if="loadingTip">
        <span>{{ loadingTip }}</span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import Beat from './beat.vue';

export default {
  name: 'Loading',
  components: { Beat },
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
    loadingTip: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'circle',
      validator: (val) => {
        return ['circle', 'beat'].indexOf(val) > -1;
      },
    },
    size: {
      type: String,
      default: 'largest',
      validator: (val) => {
        return ['small', 'medium', 'large', 'largest'].indexOf(val) > -1;
      },
    },
  },
  computed: {
    sizeStyle() {
      if (this.size === 'small') {
        return { height: '8px', width: '8px' };
      }
      if (this.size === 'medium') {
        return { height: '10px', width: '10px' };
      }
      if (this.size === 'large') {
        return { height: '12px', width: '12px' };
      }
      return { height: '24px', width: '24px' };
    },
  },
};
</script>
