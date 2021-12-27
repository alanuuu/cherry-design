import { action } from '@storybook/addon-actions';
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Form 表单',
  args: {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 19,
    },
    disabled: false,
  },
  argTypes: {},
};
// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      rule: {
        input: [{ required: true, message: '请输入' }],
        password: [
          { required: true, message: '请输入' },
          {
            len: 8,
            pattern: /^[a-z0-9]+$/,
            transform(value) {
              return value.trim();
            },
            message: '请输入由字母、数字组成长度为8的密码',
          },
        ],
        checkbox: [{ required: true, message: '请选择' }],
        radio: [{ required: true, message: '请选择' }],
        select: [{ required: true, message: '请选择' }],
        rate: [{ required: true, message: '请选择', type: 'number' }],
      },
    };
  },
  template: `<div style="width: 800px;">
    <c-form 
      v-bind="$props" 
      @submit="onSubmit" 
      @success="onSuccess" 
      @fail="onFail" 
      name="form" 
      ref="formRef">
        <c-form-item label="Input" field="input" :rules="rule.input">
          <c-input v-model="model.input" />
        </c-form-item>
        <c-form-item label="Password" field="password" :rules="rule.password">
          <c-input type="password"  v-model="model.password"/>
        </c-form-item>
        <c-form-item label="CheckBox" field="checkbox" :rules="rule.checkbox">
          <c-checkbox-group v-model="model.checkbox">
            <c-checkbox label="1">item1</c-checkbox>
            <c-checkbox label="0">item0</c-checkbox>
          </c-checkbox-group>
        </c-form-item>
        <c-form-item label="Radio" field="radio" :rules="rule.radio">
          <c-radio-group v-model="model.radio">
            <c-radio label="1">
              item1
            </c-radio>
            <c-radio label="2" >
              item2
            </c-radio>
            <c-radio label="3">
              item3
            </c-radio>
          </c-radio-group>
        </c-form-item>
        <c-form-item label="Switch" field="switch">
          <c-switch v-model="model.switch" ></c-switch>
        </c-form-item>
        <c-form-item label="Select"  field="select" :rules="rule.select" >
          <c-select v-model="model.select">
            <c-option label="csdn2" value="2"></c-option>
            <c-option label="csdn3" value="3"></c-option>
            <c-option label="csdn4" value="4"></c-option>
            <c-option label="csdn5" value="5"></c-option>
          </c-select>
        </c-form-item>
        <c-form-item label="Rate" field="rate" rule="rule.rate">
          <c-rate v-model="model.rate" />
        </c-form-item>
        <c-form-item field="">
          <c-space :size="20">
            <c-button htmlType="submit">登 录</c-button>
            <c-button @click="onReset" ghost>重 置</c-button>
          </c-space>
        </c-form-item>
    </c-form>
  </div>`,
  methods: {
    onSubmit: action('submit'),
    onSuccess: action('success'),
    onFail: action('fail'),
    onReset() {
      this.$refs.formRef.resetFields();
    },
  },
  mounted() {
    console.log(this.rule);
  },
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  model: {
    input: '',
    password: '',
    checkbox: [],
    radio: '',
    switch: false,
    select: '',
    rate: 0,
  },
};
