<template>
  <div class="c-loading">
    <template v-if="!!$slots.default">
      <div class="c-loading-content">
        <slot></slot>
      </div>
      <div class="c-loading-layer">
        <!-- 加载中图案和文字 -->
        <div class="c-loading-inner">
          <icon-loading class="c-loading-icon" stroke-width="4" />
        </div>
        <div class="c-loading-tip" v-if="tip">
          <span>{{ tip }}</span>
        </div>
      </div>
    </template>
    <template v-else>
      <icon-loading class="c-loading-icon" stroke-width="4" />
    </template>
  </div>
</template>

<script>
import IconLoading from '../icon/loading.vue';

export default {
  name: 'Loading',
  components: {
    IconLoading,
  },
  props: {
    tip: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'largest',
      validator: (val) => {
        return ['small', 'medium', 'large', 'largest'].indexOf(val) > -1;
      },
    },
  },
};
</script>
