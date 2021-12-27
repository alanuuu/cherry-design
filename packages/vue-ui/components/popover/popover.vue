<template>
  <div class="c-pop" :class="cls">
    <div class="c-pop-mask" v-if="mask" @click="onMaskClick"></div>
    <div class="c-pop-container">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popover',
  props: {
    mask: {
      type: Boolean,
      default: true,
    },
    useMaskClose: {
      type: Boolean,
      default: true,
    },
    value: Boolean,
    show: Boolean,
    type: {
      type: String,
      default: 'center',
      validator(val) {
        return ['center', 'top', 'bottom', 'left', 'right'].indexOf(val) > -1;
      },
    },
  },
  computed: {
    cls() {
      const name = 'c-pop';
      return {
        [`${name}--${this.type}`]: !!this.type,
        [`${name}--show`]: this.show || this.value,
      };
    },
  },
  methods: {
    onMaskClick() {
      if (!this.useMaskClose) {
        return;
      }
      this.$emit('input');
      this.$emit('close');
    },
  },
};
</script>

<style></style>
