<template>
  <button :class="cls" @click="onClick">
    <!-- <icon-sync class="c-btn-icon c-motion-rotating" v-if="loading" /> -->
    <loading class="c-btn-icon" v-if="loading"></loading>
    <span><slot></slot></span>
  </button>
</template>

<script>
import { IconSync } from '../icon';
import Loading from '../loading/loading.vue';

export default {
  name: 'Button',
  components: {
    IconSync,
    Loading,
  },
  props: {
    // 按钮类型
    type: {
      type: String,
      default: 'primary',
      validator: (val) => {
        return ['primary', 'danger', 'light', 'black'].indexOf(val) !== -1;
      },
    },
    // 按钮大小
    size: {
      type: String,
      default: 'medium',
      validator: (val) => {
        return ['large', 'medium', 'small'].indexOf(val) !== -1;
      },
    },
    disabled: Boolean,
    ghost: Boolean,
    loading: Boolean,
  },
  computed: {
    cls() {
      const name = 'c-btn';
      return {
        [name]: true,
        [`${name}-${this.size}`]: true,
        [`${name}-${this.type}`]: true,
        [`${name}-disabled`]: this.disabled,
        [`${name}-loading`]: this.loading,
        [`${name}-ghost`]: this.ghost,
      };
    },
  },
  methods: {
    onClick(event) {
      if (this.loading || this.disabled) return;
      this.$emit('click', event);
    },
  },
};
</script>
