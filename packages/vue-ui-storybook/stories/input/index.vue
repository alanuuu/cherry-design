<template>
  <div>
    <div>
      <span class="mb-8">通用</span>
      <c-input v-model="input1" @input="change"></c-input>
    </div>
    <div class="mt-32">
      <span class="mb-8">限制字数</span>
      <c-input v-model="input2" :maxlength="10" :limit="true" @input="change"></c-input>
    </div>
    <div class="mt-32">
      <span class="mb-8">禁用状态</span>
      <c-input v-model="input3" :disabled="true" @input="change"></c-input>
    </div>
  </div>
</template>

<script>
import { Input as CInput } from '@csdn-design/vue-ui';

export default {
  name: 'demo',
  components: {CInput},
  data() {
    return {
      input1: '',
      input2: '',
      input3: ''
    }
  },
  methods: {
    change(e) {
      console.log(e)
    }
  }
}
</script>

<style>
span {
  color: gray;
  font-size: 16px;
  display: inline-block;
}
.mb-8 {
  margin-bottom: 8px;
}
.mt-32 {
  margin-top: 32px;
}
</style>