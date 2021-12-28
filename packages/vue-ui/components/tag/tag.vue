<template>
  <span
    v-if="!link"
    class="c-tag"
    :class="classes"
    :style="styles"
    @click="onClick"
  >
    <slot></slot>
  </span>
  <a
    class="c-tag"
    :class="classes"
    :style="styles"
    :href="link"
    v-else
    @click="onClick"
  >
    <slot></slot>
  </a>
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
    color: String,
    link: String,
  },
  computed: {
    classes() {
      return {
        [`c-tag-${this.size}`]: true,
        [`c-tag-${this.theme}`]: true,
        [`c-tag-${this.theme}-active`]: this.active,
        'c-tag-circle': this.circle,
      };
    },
    styles() {
      return {
        background: this.color,
      };
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
