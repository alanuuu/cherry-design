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
export default {
  name: 'Radio',
  props: {
    group: String,
    label: [String, Number],
    value: {},
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
          console.log('find parent', parent);
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
        }
      },
    },
    isDisabled() {
      return this.disabled;
    },
  },
  mounted() {
    console.log('mounted', this.inGroup);
    console.log('model', this.model);
  },
};
</script>
