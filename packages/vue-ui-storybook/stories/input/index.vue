<template>
  <div class="mb-16">
    <span>展示用例，demo在展示用例下方</span>
    <div>
      <span class="mb-8 mt-16">通用</span>
      <c-input v-model="input1" @input="change" :width="400"></c-input>
    </div>
    <div class="mt-32">
      <span class="mb-8">限制字数</span>
      <c-input v-model="input2" :maxlength="10" :limit="true" @input="change"></c-input>
    </div>
    <div class="mt-32 mb-32">
      <span class="mb-8">禁用状态</span>
      <c-input v-model="input3" :disabled="true" @input="change"></c-input>
    </div>
    <span>demo</span>
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

<style scoped>
span {
  color: gray;
  font-size: 16px;
  display: inline-block;
}
.mt-16 {
  margin-top: 16px;
}
.mb-8 {
  margin-bottom: 8px;
}
.mb-16 {
  margin-bottom: 16px;
}
.mt-32 {
  margin-top: 32px;
}
.mb-32 {
  margin-bottom: 32px;
}
</style>