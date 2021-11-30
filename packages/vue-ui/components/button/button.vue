<template>
  <button :class="cls" @click="onClick">
    <slot></slot>
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
export const btnStatus = ['normal', 'warning', 'danger'];

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
    loading: Boolean,
  },
  computed: {
    cls() {
      const name = prefix + '-btn';
      return {
        [name]: true,
        [name + '-' + this.type]: true,
        [name + '-' + this.status]: true,
        [name + '-loading']: this.loading,
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
