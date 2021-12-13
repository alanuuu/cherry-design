<template>
  <div class="c-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'RadioGroup',
  props: {
    value: {},
  },
  methods: {
    triggerInput(val) {
      this.$emit('input', val);
    },
  },
};
</script>
