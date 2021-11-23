<template>
  <div class="c-btn">
    <button>{{slot}}123</button>
  </div>
</template>

<script>
/**
 * 按钮类型
 */
export const btnTypes = [
  'primary',
  'ghost',
  'light',
];
/**
 * 按钮状态
 */
export const btnStatus = [
  'normal',
  'warning',
  'danger',
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
  },
  computed: {
    cls() {
      return 'c';
    },
  },
};
</script>

<style>
</style>