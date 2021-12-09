<template>
  <div>
    <!-- 第一行1 -->
    <c-row v-bind="attr">
      <!-- 1-1 -->
      <c-col :span="2">
        <div style="background: skyblue; height: 20px"></div>
      </c-col>
      <!-- 1-2 -->
      <c-col :span="6">
        <!-- 1-2-1 -->
        <c-row>
          <c-col :span="24">
            <div style="background: aqua; height: 40px"></div>
          </c-col>
        </c-row>
        <c-row>
          <c-col :span="24">
            <div style="background: burlywood; height: 20px"></div>
          </c-col>
        </c-row>
      </c-col>
      <!-- 1-3 -->
      <c-col :span="12">
        <div style="background: skyblue; height: 30px"></div>
      </c-col>
    </c-row>
    <div style="margin-top: 20px"></div>
    <!-- 表单测试 -->
    <c-row v-bind="attr">
      <c-col :span="2" :offset="1">
        <label>用户名：</label>
      </c-col>
      <c-col :span="5">
        <c-input type="text" />
      </c-col>
    </c-row>
    <c-row v-bind="attr">
      <c-col :span="2" :offset="1">
        <label>密码：</label>
      </c-col>
      <c-col :span="5">
        <c-input type="password" />
      </c-col>
    </c-row>
    <c-row>
      <c-col :span="2" :offset="1">
        <c-button type="black" @click="onClick">登录</c-button>
      </c-col>
      <c-col :span="2">
        <c-button type="black" ghost>取消</c-button>
      </c-col>
    </c-row>
  </div>
</template>
<script>
export default {
  name: 'DemoGrid',
  props: ['attr'],
  methods: {
    onClick() {
      alert('登录了');
    },
  },
};
</script>
<style lang="less" scoped></style>
