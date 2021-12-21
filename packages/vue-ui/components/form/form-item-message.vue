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

const name = 'c-form-item--message';

export default {
  name: 'FormItemMessage',
  props: {
    status: {
      type: String,
    },
  },
  computed: {
    cls() {
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
