<template>
  <div class="c-badge">
    <slot></slot>
    <div v-if="isShow" :class="cls">{{badgeValue}}</div>
  </div>
</template>

<script>

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
    type: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'light'].indexOf(value) !== -1;
      },
    },
    value: {
      type: [String, Number],
      default: null,
    },
  },
  computed: {
    isShow() {
      return this.value && !this.hidden;
    },
    cls() {
      const name = 'c-badge';
      return {
        [name + '-tip']: true,
        [name + '-' + this.type]: true,
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
