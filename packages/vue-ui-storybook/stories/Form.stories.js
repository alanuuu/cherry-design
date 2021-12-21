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
        username: [{ required: true, message: '请输入用户名' }],
        password: [
          { required: true, message: '请输入密码' },
          {
            len: 8,
            pattern: /^[a-z0-9]+$/,
            transform(value) {
              return value.trim();
            },
            message: '请输入由字母、数字组成长度为8的密码',
          },
        ],
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
        <c-form-item label="用户名" field="username" :rules="rule.username">
          <c-input v-model="model.username" />
        </c-form-item>
        <c-form-item label="密码" field="password" :rules="rule.password">
          <c-input type="password"  v-model="model.password"/>
        </c-form-item>
        <c-form-item>
          <c-button htmlType="submit">登 录</c-button>
          <c-button @click="onReset">重 置</c-button>
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
    username: '',
    password: '',
  },
};
