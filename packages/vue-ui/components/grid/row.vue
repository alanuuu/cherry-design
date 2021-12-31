<template>
  <div :class="cls" :style="gutterStyle">
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
  provide() {
    return {
      gutter: this.gutter,
    };
  },
  computed: {
    gutterStyle() {
      if (this.gutter === 0) return null;
      const marginVal = `-${this.gutter / 2}px`;
      return {
        marginLeft: marginVal,
        marginRight: marginVal,
      };
    },
    cls() {
      const name = 'c-row';
      return {
        [name]: true,
        [`is-justify-${this.justify}`]: true,
        [`is-align-${this.align}`]: this.align,
      };
    },
  },
};
</script>
