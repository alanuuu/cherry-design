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
      <div :class="{ 'large-icon': !!$slots.default }">
        <icon-refresh class="circle" />
      </div>
      <div class="loading-tip" v-if="loadingTip">
        <span>{{ loadingTip }}</span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { IconRefresh } from '../icon';

export default {
  name: 'Loading',
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
    loadingTip: {
      type: String,
      default: '',
    },
  },
  components: {
    IconRefresh,
  },
};
</script>
