<template>
  <span :class="cls">
    <img class="c-avatar-img" v-if="src" :src="src" @error="handleError" />
    <span v-else><slot></slot></span>
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
        return ['large', 'medium', 'small'].includes(val);
      },
    },
    shape: {
      type: String,
      default: 'circle',
      validator(val) {
        return ['circle', 'square'].includes(val);
      },
    },
    src: String,
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
  },
  methods: {
    handleError(e) {
      this.$emit('error', e);
    },
  },
};
</script>
