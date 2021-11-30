<template>
  <button :class="cls" @click="onClick">
    <img v-if="loading" width="12"  src="../../icon/sync.svg" />
    <span><slot></slot></span>
  </button>
</template>

<script>
import { prefix } from '../../constants';
/**
 * 按钮类型
 */
export const btnTypes = ['primary', 'ghost', 'light'];
/**
 * 按钮状态
 */
export const btnStatus = [
  'normal',
  'warning',
  'danger',
];
/**
 * 按钮大小
 */
export const btnSize = [
  'large',
  'medium',
  'small',
];

export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: (val) => {
        return btnTypes.includes(val);
      },
    },
    status: {
      type: String,
      default: 'normal',
      validator: (val) => {
        return btnStatus.includes(val);
      },
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val) => {
        return btnSize.includes(val);
      },
    },
    loading: Boolean,
  },
  computed: {
    cls() {
      const name = `${prefix}-btn`;
      return {
        [name]: true,
        [`${name}-${this.size}`]: true,
        [`${name}-${this.type}`]: true,
        [`${name}-${this.status}`]: true,
        [`${name}-loading`]: this.loading,
      };
    },
  },
  methods: {
    onClick() {
      if (this.loading) return;

      this.$emit('click');
    },
  },
};
</script>
