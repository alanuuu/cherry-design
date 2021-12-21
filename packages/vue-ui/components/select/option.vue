<template>
  <li
    class="c-select-option-item"
    :class="cls"
    @click.stop="select"
    v-if="visiable"
  >
    <slot>{{ label }}</slot>
  </li>
</template>

<script>
export default {
  name: 'Option',
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: [String, Number],
    },
  },
  data() {
    return {
      parent: this.$parent.$options.name === 'Select' ? this.$parent : null,
      inputText: '',
    };
  },
  computed: {
    cls() {
      const name = 'c-select-option-item';
      return {
        [name + '-selected']: this.parent.value === this.value,
      };
    },
    visiable() {
      return this.label.indexOf(this.inputText) > -1 || this.inputText === ''
        ? true
        : false;
    },
  },
  methods: {
    select() {
      if (this.parent) {
        this.parent.selectData(this.value, this.label);
      }
    },
  },
};
</script>
