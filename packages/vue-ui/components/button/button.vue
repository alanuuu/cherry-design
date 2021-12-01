<template>
  <button :class="cls" @click="onClick">
    <icon-sync />
    <span><slot></slot></span>
  </button>
</template>

<script>
import IconSync from '../icon/sync.vue';
/**
 * 按钮类型
 */
export const btnTypes = ['primary', 'warning', 'light', 'black'];
/**
 * 按钮大小
 */
export const btnSize = ['large', 'medium', 'small'];

export default {
  name: 'Button',
  components: {
    IconSync,
  },
  props: {
    // 按钮类型
    type: {
      type: btnTypes,
      default: 'primary',
    },
    // 按钮大小
    size: {
      type: btnSize,
      default: 'medium',
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
