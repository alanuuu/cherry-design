<template>
  <div :class="cls" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Space',
  props: {
    size: {
      type: Number,
      default: 12,
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator: (val) => {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      },
    },
    alignItems: {
      type: String,
      default: 'center',
      validator: (val) => {
        return (
          ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'].indexOf(
            val
          ) !== -1
        );
      },
    },
  },
  computed: {
    cls() {
      const name = 'c-space';
      return {
        [name]: true,
        [name + '-' + this.direction]: true,
      };
    },
    styles() {
      return {
        gap: this.size + 'px',
        alignItems: this.alignItems,
      };
    },
  },
};
</script>
