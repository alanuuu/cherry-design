<template>
  <div class="c-breadcrumb">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'Breadcrumb',
  props: {
    // 分隔符
    separator: {
      type: String,
      default: '/',
    },
    // 路由参数
    params: {
      type: Object,
      default: () => ({}),
    },
    // 路由栈信息
    routes: {
      type: Array,
      default: () => [],
    },
  },
  provide() {
    return {
      breadcrumb: this,
    };
  },
};
</script>