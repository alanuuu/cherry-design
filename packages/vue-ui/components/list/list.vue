<template>
  <div :class="cls">
    <div class="c-list-header" v-if="header || $slots.header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div>
      <ul class="c-list-content">
        <slot></slot>
      </ul>
    </div>
    <div class="c-list-footer" v-if="footer || $slots.footer">
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  provide() {
    return {
      itemLayout: this.itemLayout,
    };
  },
  props: {
    header: String,
    footer: String,
    border: {
      type: Boolean,
      default: true,
    },
    split: {
      type: Boolean,
      default: true,
    },
    itemLayout: {
      type: String,
      default: 'horizontal',
      validator: (val) => {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      },
    },
  },
  computed: {
    cls() {
      const name = 'c-list';
      return {
        [name]: true,
        [name + '-border']: this.border,
        [name + '-split']: this.split,
      };
    },
  },
};
</script>
