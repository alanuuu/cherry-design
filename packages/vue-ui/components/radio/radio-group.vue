<template>
  <div class="c-radio-group">
    <slot></slot>
  </div>
</template>
<script>
import formMixins from '../mixins/form';

export default {
  name: 'RadioGroup',
  mixins: [formMixins],
  props: {
    value: {
      type: [String, Number],
    },
  },
  methods: {
    triggerInput(val) {
      this.$emit('input', val);
      this.formItem?.onField('change');
    },
  },
};
</script>
