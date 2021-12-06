<template>
  <aside class="c-layout-sider">
    <div class="c-layout-sider-inner">
      <slot></slot>
    </div>
  </aside>
</template>

<script>
const genId = ((key) => {
  let i = 0;
  // eslint-disable-next-line func-names
  return function () {
    i += 1;
    return key + i;
  };
})();

const key = 'C_LAYOUT_SIDER';

export default {
  name: 'LayoutSider',
  inject: ['onSiderCreate'],
  mounted() {
    const id = genId(key);
    this.onSiderCreate(id);
  },
};
</script>
