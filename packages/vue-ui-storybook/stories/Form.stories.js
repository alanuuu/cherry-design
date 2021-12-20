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
  },
  argTypes: {},
};
// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      rule: {
        username: [{ required: true }],
        password: [{ required: true }],
      },
    };
  },
  template: `<div style="width: 800px;">
    <c-form v-bind="$props" @onSubmit="onClick" name="form">
      <c-form-item label="用户名" field="usename" :rules="rule.username">
        <c-input />
      </c-form-item>
      <c-form-item label="密码" field="password" :rules="rule.password">
        <c-input type="password" />
      </c-form-item>
      <c-form-item>
        <c-button htmltype="submit">登 录</c-button>
      </c-form-item>
    </c-form>
  </div>`,
  methods: {
    onClick: action('click'),
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
