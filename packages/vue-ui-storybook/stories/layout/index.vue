<template>
  <c-layout class="section">
    <c-layout-header class="header">Header</c-layout-header>
    <c-layout :hasSider="hasSider">
      <c-layout-content class="content">Content</c-layout-content>
      <c-layout-sider class="sider">Sider</c-layout-sider>
    </c-layout>
    <c-layout-footer class="footer">Footer</c-layout-footer>
  </c-layout>
</template>

<script>
export default {
  props: {
    hasSider: Boolean
  }
};
</script>

<style scoped>
.section {
  font-size: 26px;
  font-weight: bold;
}
.header {
  background-color: aqua;
}
.content {
  height: 120px;
  line-height: 120px;
  text-align: center;
  background-color: #fff;
}
.sider {
  text-align: center;
  width: 400px;
  line-height: 120px;
  background-color: #7dbcea;
}
.footer {
  background-color: aquamarine;
}
</style>