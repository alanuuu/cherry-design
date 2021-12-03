<template>
  <span class="c-tag" :class="classes" @click="clickTag">
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: 'Tag',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: (val) => {
        return ['small', 'medium', 'large'].includes(val);
      },
    },
    theme: {
      type: String,
      default: 'normal',
      validator: (val) => {
        return ['normal', 'light'].includes(val);
      },
    },
    circle: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    classes() {
      return {
        [`c-tag-${this.size}`]: true,
        [`c-tag-${this.theme}`]: true,
        [`c-tag-${this.theme}-active`]: this.active,
        'c-tag-pointer': this.$listeners.hasOwnProperty('click'),
        'c-tag-circle': this.circle,
      };
    },
  },
  methods: {
    clickTag() {
      this.$emit('click');
      console.log(this.$listeners);
    },
  },
};
</script>