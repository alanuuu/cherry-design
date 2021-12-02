<template>
  <span :class="cls">
    <img v-if="src" :src="src" @error="handleError" />
    <span v-else><slot></slot>CSDN</span>
  </span>
</template>

<script>
const name = 'c-avatar';
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
  },
  computed: {
    cls() {
      return {
        [name]: true,
        [name + '-image']: !!this.src,
        [name + '-' + this.shape]: true,
        [name + '-' + this.size]: true,
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
