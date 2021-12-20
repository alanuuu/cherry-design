<template>
  <transition appear>
    <div class="c-form-item--message" :class="cls">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
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
  },
};
</script>
