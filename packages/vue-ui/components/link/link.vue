<template>
  <a
    :class="cls"
    :href="disabled ? null : href"
    @click="handleClick"
  >
    <span v-if="$slots.default" class="c-link--inner">
      <slot></slot>
    </span>
  </a>
</template>

<script>
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
      return {
        'c-link': true,
        [`c-link-${this.status}`]: true,
        disabled: this.disabled,
        underline: this.underline && !this.disabled,
      };
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
