<template>
  <div class="c-form-item--label" :class="cls">
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
  computed: {
    cls() {
      return {
        'is-required': this.required,
      };
    },
  },
};
</script>
