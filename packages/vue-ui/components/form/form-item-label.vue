<template>
  <label :for="labelFor">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'FormItemLabel',
  props: {
    labelFor: String,
    required: Boolean,
  },
  computed: {},
};
</script>
