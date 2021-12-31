<template>
  <div class="c-form-item--message" :class="cls" >
    <transition appear name="c-inner">
      <div v-if="show">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { Status } from './context';

export default {
  name: 'FormItemMessage',
  props: {
    status: {
      type: String,
    },
  },
  computed: {
    cls() {
      const name = 'c-form-item--message';
      return {
        [name + '_' + this.status]: this.status,
      };
    },
    show() {
      return this.status === Status.error;
    },
  },
};
</script>
