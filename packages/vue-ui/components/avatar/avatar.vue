<template>
  <span :class="cls" :style="styles">
    <img class="c-avatar-img" v-if="src" :src="src" @error="handleError" />
    <slot v-else></slot>
  </span>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator(val) {
        return ['large', 'medium', 'small'].indexOf(val) !== -1;
      },
    },
    shape: {
      type: String,
      default: 'circle',
      validator(val) {
        return ['circle', 'square'].indexOf(val) !== -1;
      },
    },
    src: String,
    color: String,
  },
  computed: {
    cls() {
      const name = 'c-avatar';
      return {
        [name]: true,
        [name + '-image']: !!this.src,
        [name + '-' + this.shape]: true,
        [name + '-' + this.size]: true,
      };
    },
    styles() {
      return {
        color: this.color,
      };
    },
  },
  methods: {
    handleError(e) {
      this.$emit('error', e);
    },
  },
};
</script>
