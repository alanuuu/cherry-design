<template>
  <div class="c-card" :class="`is-${shadow}-shadow`">
    <div class="c-card-header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="c-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    // 标题，也可通过slot设置
    header: String,
    // 阴影显示时机，always：一直显示；hover：hover时显示；never：不显示
    shadow: {
      type: String,
      default: 'always',
      validator: (val) => {
        return ['always', 'hover', 'never'].indexOf(val) !== -1;
      },
    },
  },
};
</script>
