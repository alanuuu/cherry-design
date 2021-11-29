<template>
  <div :class="cls">
    <slot></slot>
  </div>
</template>

<script>
import { prefix } from '../../constants';

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
  computed: {
    cls() {
      const name = prefix + '-breadcrumb';
      return {
        [name]: true,
      };
    },
  },
  provide() {
    return {
      breadcrumb: this,
    };
  },
};
</script>