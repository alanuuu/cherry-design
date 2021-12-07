<template>
  <div :class="flexClasses" :style="gutterStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Row',
  props: {
    // 列之间的间隔，单位为px
    gutter: {
      type: Number,
      default: 0,
    },
    // 布局模式，可设置为flex
    type: String,
    // flex布局下的水平对齐方式
    justify: {
      type: String,
      default: 'start',
    },
    // flex布局下的垂直对齐方式
    align: {
      type: String,
      default: 'top',
    },
  },
  computed: {
    gutterStyle() {
      if (this.gutter === 0) return '';
      // 给row加一个margin的目的是，”col中嵌套row“的情况保证间隔正常
      const marginVal = `-${this.gutter / 2}px`;
      return {
        marginLeft: marginVal,
        marginRight: marginVal,
      };
    },
    flexClasses() {
      return [
        'c-row',
        { 'c-row-flex': this.type === 'flex' },
        `is-justify-${this.justify}`,
        this.align === 'top' ? '' : `is-align-${this.align}`,
      ];
    },
  },
};
</script>
