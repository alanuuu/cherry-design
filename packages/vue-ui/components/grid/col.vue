<template>
  <div :class="classes" class="c-col" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
const spans = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'offset'];

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
  inject: {
    gutter: {
      from: 'gutter',
      default: 0,
    },
  },
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
          if (spans.indexOf(key) > -1) {
            cls[`${name}-${key}-${layout[key]}`] = true;
          } else {
            cls[`${name}-${layout[key]}`] = true;
          }
          return '';
        });
      } else if (typeof layout === 'number' && layout > 0) {
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
