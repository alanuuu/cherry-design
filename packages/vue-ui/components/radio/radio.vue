<template>
  <label class="c-radio" :class="{ 'is-disabled': isDisabled }">
    <span class="c-radio-input">
      <span
        class="c-radio-inner"
        :class="{
          'c-radio-inner__selected': model === label,
          'is-disabled': isDisabled,
        }"
      ></span>
      <input
        type="radio"
        class="c-radio-original"
        ref="radio"
        v-model="model"
        :value="label"
        :name="group"
        :disabled="isDisabled"
      />
    </span>
    <span class="c-radio-label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script>
import formMixins from '../mixins/form';

export default {
  name: 'Radio',
  mixins: [formMixins],
  props: {
    group: String,
    label: [String, Number],
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      radioGroup: null,
    };
  },
  methods: {
    setGroup(parent) {
      this.radioGroup = parent;
    },
  },
  computed: {
    inGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== 'RadioGroup') {
          parent = parent.$parent;
        } else {
          this.setGroup(parent);
          return true;
        }
      }
      return false;
    },
    model: {
      get() {
        return this.inGroup ? this.radioGroup.value : this.value;
      },
      set(val) {
        if (this.inGroup) {
          this.radioGroup.triggerInput(val);
        } else {
          this.$emit('input', val);
          if (!this.isGroup) {
            this.formItem?.onField('change');
          }
        }
      },
    },
    isDisabled() {
      return this.itemDisabled;
    },
  },
};
</script>
