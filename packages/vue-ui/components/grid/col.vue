<template>
  <div :class="classes" class="c-col" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
const spans = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

export default {
  name: 'Col',
  props: {
    /**
     * 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'
     */
    span: {
      type: [Number, Object],
      default: 24,
    },
    offset: {
      type: [Number, Object],
      default: 0,
    },
  },
  inject: ['gutter'],
  computed: {
    classes() {
      const span = this.adaptationGrid(this.span, 'span');
      const offset = this.adaptationGrid(this.offset, 'offset');
      return {
        ...span,
        ...offset,
      };
    },
    styles() {
      return this.gutter
        ? {
          'padding-left': `${this.gutter / 2}px`,
          'padding-right': `${this.gutter / 2}px`,
        }
        : null;
    },
  },
  methods: {
    adaptationGrid(layout, type) {
      const name = 'c-col';
      const cls = {};
      if (typeof layout === 'object') {
        Object.keys(layout).map((key) => {
          if (key === 'span') {
            cls[`${name}-${layout[key]}`] = true;
          } else {
            cls[`${name}-${type}-${key}-${layout[key]}`] = true;
          }
          return '';
        });
      } else if (layout > 0) {
        if (type === 'span') {
          cls[`${name}-${layout}`] = true;
        } else {
          cls[`${name}-${type}-${layout}`] = true;
        }
      }
      return cls;
    },
  },
};
</script>
