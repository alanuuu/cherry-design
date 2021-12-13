<template>
  <label for="labelFor" class="c-form-item--label">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'FormItemLabel',
  props: {
    labelFor: String,
  },
};
</script>
