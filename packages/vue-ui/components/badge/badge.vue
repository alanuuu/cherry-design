<template>
  <div class="c-badge">
    <slot></slot>
    <div v-if="isShowTip" :class="cls">{{badgeValue}}</div>
    <div v-if="isShowDot" :class="dotCls"></div>
  </div>
</template>

<script>
const preName = 'c-badge';
export default {
  name: 'Badge',
  props: {
    max: {
      type: Number,
      default: -1,
    },
    hidden: {
      type: Boolean,
      default: false,
    },
    dot: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: null,
    },
  },
  computed: {
    isShowTip() {
      return this.value && !this.hidden && !this.dot;
    },
    isShowDot() {
      return this.dot && !this.hidden;
    },
    cls() {
      return {
        [preName + '-tip']: true,
      };
    },
    dotCls() {
      return {
        [preName + '-dot']: true,
      };
    },
    badgeValue() {
      if (!this.value || this.max < 0) return this.value;
      if (+this.value > this.max) return this.max + '+';
      return this.value;
    },
  },
};
</script>
