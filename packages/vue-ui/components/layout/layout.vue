<template>
  <section class="c-layout" :class="cls">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'Layout',
  props: {
    // 一般不使用、主要用于解决服务端渲染闪烁
    hasSider: {
      type: Boolean,
    },
  },
  data() {
    return {
      siders: [],
    };
  },
  provide() {
    return {
      onSiderCreate: this.onSiderCreate,
    };
  },
  methods: {
    onSiderCreate(id) {
      this.siders.push(id);
    },
  },
  computed: {
    cls() {
      return {
        'c-has-sider': this.hasSider || this.siders.length > 0,
      };
    },
  },
};
</script>
