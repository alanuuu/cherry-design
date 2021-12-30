<template>
  <li class="c-list-item" :style="verticalStyle">
    <template v-if="itemLayout === 'vertical'">
      <div style="flex: 1">
        <slot></slot>
        <ul
          v-if="$slots.action"
          class="c-list-item-action c-list-item-action-vertical"
        >
          <slot name="action"></slot>
        </ul>
      </div>
      <div v-if="$slots.extra" class="c-list-item-extra">
        <slot name="extra"></slot>
      </div>
    </template>
    <template v-else>
      <slot></slot>
      <ul v-if="$slots.action" class="c-list-item-action">
        <slot name="action"></slot>
      </ul>
      <div v-if="$slots.extra" class="c-list-item-extra">
        <slot name="extra"></slot>
      </div>
    </template>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  inject: ['itemLayout'],
  data() {
    return {
      itemLayout: this.itemLayout,
    };
  },
  computed: {
    verticalStyle() {
      return this.itemLayout === 'vertical'
        ? {
          alignItems: 'flex-start',
        }
        : {};
    },
  },
};
</script>
