<template>
  <div class="c-form-item--label">
    <label :for="labelFor">
      <slot></slot>
    </label>
  </div>
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
