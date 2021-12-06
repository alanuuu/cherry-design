<template>
  <div class="c-switch" @click="checkValue">
    <span
      :class="cls"
      ref="core"
      :style="{ 'width': `${width}px` }"
    ></span>
  </div>
</template>
<script>
export default {
  name: 'Switch',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 40,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cls() {
      const name = 'c-switch';
      return {
        [name + '-core']: true,
        [name + '-checked']: this.value,
        [name + '-disabled']: this.disabled,
      };
    },
  },
  methods: {
    checkValue() {
      if (this.disabled) return;
      this.$emit('change', !this.value);
      this.$emit('input', !this.value);
    },
  },
};
</script>
