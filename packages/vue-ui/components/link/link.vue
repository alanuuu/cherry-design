<template>
  <a
    v-bind="$attrs"
    :class="cls"
    :href="disabled ? null : href"
    @click="handleClick"
  >
    <span v-if="$slots.default" :class="innerCls">
      <slot></slot>
    </span>
  </a>
</template>

<script>
import { prefix } from '../../constants';

/**
 * 状态
 */
export const btnStatus = [
  'normal',
  'warning',
  'danger',
];

export default {
  name: 'Link',
  props: {
    // 类型
    status: {
      type: String,
      default: 'default',
    },
    // 是否下划线
    underline: {
      type: Boolean,
      default: true,
    },
    // 是否禁用状态
    disabled: {
      type: Boolean,
      default: false,
    },
    // 原生 href 属性
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
  computed: {
    cls() {
      const name = prefix + '-link';
      return {
        [name]: true,
        [`${name}-${this.status}`]: true,
        disabled: this.disabled,
        underline: this.underline && !this.disabled,
      };
    },
    innerCls() {
      return prefix + '-link--inner';
    },
  },
  methods: {
    handleClick(event) {
      if (this.disabled || this.href) return;
      const { to, $router } = this;
      if (to && $router) {
        $router[this.replace ? 'replace' : 'push'](to);
      } else {
        this.$emit('click', event);
      }
    },
  },
};
</script>