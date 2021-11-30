<template>
    <span :class="cls" :style="styleSize">
        <img  v-if="src" :src="src" @error="handleError"/>
        <span v-else><slot></slot></span>
    </span>
</template>

<script>
import { prefix } from '../../constants';
/**
 * 头像大小
 */
export const avatarTypes = [
  'large',
  'medium',
  'small',
];
export default {
  name: 'Avatar',
  props: {
    size: {
        type: [Number, String],
        default: 'medium',
        validator(val) {
        if (typeof val === 'string') {
          return avatarTypes.includes(val);
        }
        return typeof val === 'number';
      }
    },
    shape: {
        type: String,
        default: 'circle'
    },
    src: String
  },
  computed: {
    cls () {
      const name = prefix + '-avatar';
      return {
        [name]: true,
        [name + '-image']: !!this.src,
        [name + '-' + this.shape]: true,
        [name + '-' + this.size]: typeof this.size === 'string',
      };
    },
    styleSize () {
      const stylesize = typeof this.size === 'number' ? {
         width: this.size + 'px',
         height: this.size + 'px',
         lineHeight: this.size + 'px'
      } : {}
      return stylesize
    }
  },
  methods: {
    handleError (e) {
      this.$emit('error', e)
    }
  }
};
</script>
