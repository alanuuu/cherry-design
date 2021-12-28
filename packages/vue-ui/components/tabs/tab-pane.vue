<template>
  <div class="c-tab-item"
       :name="name"
       :label="label"
       v-show="active"
  >
    <slot></slot>
  </div>
</template>
Î
<script>
export default {
  name: 'TabPane',
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
    active() {
      return this.$parent.currentName === this.name;
    },
  },
};
</script>
