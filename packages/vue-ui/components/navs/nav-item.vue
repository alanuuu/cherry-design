<template>
  <div class="c-nav-item" :class="cls" :name="name" :label="label">
    <slot></slot>
  </div>
</template>
Î
<script>
export default {
  name: 'NavItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  computed: {
    cls() {
      return {
        ['c-nav-' + this.name]: true,
      };
    },
  },
};
</script>
