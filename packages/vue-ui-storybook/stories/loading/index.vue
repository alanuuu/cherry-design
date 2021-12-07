<template>
<div class="container">
  <c-loading v-bind="attr">
    <div>
      <h2>this is a pharagraph</h2>
      <h3>another pharagraph</h3>
      <input />
    </div>
  </c-loading>
  <c-loading />
</div>
</template>
<script>
import input from '@csdn-design/vue-ui/components/input/input.vue'
export default {
  components: { input },
  name: 'DemoLoading',
  props: ['attr'],
}
</script>
<style lang="less" scoped>
.container {
  width: 300px;
}
</style>