<template>
  <div>
    <c-rate v-bind="attr" />
  </div>
</template>
<script>
export default {
  name: 'DemoRate',
  props: ['attr'],
  data() {
    return {
      rating: 4
    }
  }
};
</script>
<style lang="less" scoped></style>
