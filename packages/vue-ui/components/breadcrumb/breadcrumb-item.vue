<template>
  <span :class="`c-breadcrumb-item`">
    <Link v-if="isLink" :href="href" :to="to" :replace="replace" :underline="false">
      <slot></slot>
    </Link>

    <span v-else :class="`c-breadcrumb-item--inner`">
      <slot></slot>
    </span>

    <span :class="separatorClass">
      {{ breadcrumb.separator }}
    </span>
  </span>
</template>

<script>
import Link from '../link/link.vue';

export default {
  name: 'BreadcrumbItem',
  components: { Link },
  props: {
    // 自定义类名
    className: {
      type: String,
      default: '',
    },
    // 链接目的地
    href: {
      type: String,
      default: null,
    },
    // 路由跳转对象，同 vue-router 的 to
    to: {
      type: [String, Object],
      default: '',
    },
    // 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录
    replace: {
      type: Boolean,
      default: false,
    },
  },
  inject: ['breadcrumb'],
  computed: {
    isLink() {
      return !!this.to || !!this.href;
    },
    separatorClass() {
      return ['c-breadcrumb-separator', ...this.className.split(' ')];
    },
  },
};
</script>
