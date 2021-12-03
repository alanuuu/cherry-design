<template>
  <div class="c-empty">
    <div class="c-empty-image" :style="{width: width}" >
      <img v-if="image" :src="image">
      <slot v-else name="image">
        <img src="./imgs/empty.png" />
      </slot>
    </div>
    <div class="c-empty-description">
      <slot v-if="$slots.description" name="description"></slot>
      <span v-else>{{ description }}</span>
    </div>
    <div class="c-empty-bottom" v-if="$slots.bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Empty',
  props: {
    // 图片地址,不传为csdn默认图片
    image: String,
    // 图片大小
    width: {
      type: String,
      default: '200px',
    },
    // 图片下方描述
    description: {
      type: String,
      default: '暂无数据',
    },
  },
};
</script>
