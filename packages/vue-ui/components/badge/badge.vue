<template>
  <div class="c-badge">
    <slot></slot>
    <div v-if="isShow" :class="cls">{{value | badgeValue(max)}}</div>
  </div>
</template>

<script>
import { prefix } from '../../constants';

export default {
  name: 'Badge',
  props: {
    max: {
      type: Number,
      default: -1
    },
    hidden: {
      type: Boolean | String,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    },
    value: {
      type: String | Number
    }
  },
  computed: {
    isShow() {
      return this.value && !this.hidden;
    },
    cls() {
      const name = prefix + '-badge';
      return {
        [name + '-tip']: true,
        [name + '-' + this.type]: true
      };
    }
  },
  filters: {
    badgeValue(value, max) {
      if(!value || max < 0) return value; 
      if(+value > max) return max + '+';
      return value
    }
  }
};
</script>
