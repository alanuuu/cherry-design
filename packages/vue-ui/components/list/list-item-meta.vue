<template>
  <div class="c-list-item-meta" :style="metaStyle">
    <div v-if="avatar || $slots.avatar" class="c-list-item-meta-avatar">
      <slot name="avatar">
        <c-avatar :src="avatar"></c-avatar>
      </slot>
    </div>
    <div class="c-list-item-meta-content">
      <div v-if="title || $slots.title" class="c-list-item-meta-title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div
        v-if="description || $slots.description"
        class="c-list-item-meta-description"
      >
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
import CAvatar from '../avatar/avatar.vue';
export default {
  name: 'ListItemMeta',
  inject: ['itemLayout'],
  components: {
    CAvatar,
  },
  props: {
    avatar: String,
    title: String,
    description: String,
  },
  computed: {
    metaStyle() {
      return this.itemLayout === 'vertical'
        ? {
            marginBottom: '18px',
          }
        : {};
    },
  },
};
</script>
