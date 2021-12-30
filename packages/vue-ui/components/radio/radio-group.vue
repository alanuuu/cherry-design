<template>
  <div class="c-radio-group">
    <slot></slot>
  </div>
</template>
<script>
import { formItemKey } from '../form/context';

export default {
  name: 'RadioGroup',
  props: {
    value: {
      type: [String, Number],
    },
  },
  inject: {
    formItem: formItemKey,
  },
  methods: {
    triggerInput(val) {
      this.$emit('input', val);
      this.formItem.onField('change');
    },
  },
};
</script>
