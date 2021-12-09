<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Col',
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    gutter() {
      // 拿到父元素的gutter值作为col之间的间隔
      let parent = this.$parent;
      while (parent && parent.$options['_componentTag'] !== 'c-row') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    classes() {
      const classes = ['c-col', `c-col-${this.span}`];
      if (this.offset !== 0) {
        classes.push(`c-col-offset-${this.offset}`);
      }
      return classes;
    },
    styles() {
      const style = {};
      if (this.gutter) {
        style.paddingLeft = `${this.gutter / 2}px`;
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
  },
};
</script>
