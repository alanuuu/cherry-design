<template>
  <span :class="cls">
    <img v-if="src" :src="src" @error="handleError" />
    <span v-else><slot></slot></span>
  </span>
</template>

<script>
import { prefix } from '../../constants';
/**
 * 头像大小
 */
export const avatarSize = [
  'large',
  'medium',
  'small'
];
export const avatarTypes = [
  'circle',
  'square'
];
export default {
  name: 'Avatar',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator(val) {
        return avatarSize.includes(val);
      },
    },
    shape: {
      type: String,
      default: 'circle',
      validator(val) {
        return avatarTypes.includes(val);
      },
    },
    src: String,
  },
  computed: {
    cls() {
      const name = prefix + '-avatar';
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
