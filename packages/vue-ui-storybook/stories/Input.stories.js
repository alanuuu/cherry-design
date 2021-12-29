export default {
  title: '组件/Input 输入框',
  args: {
    placeholder: '请输入内容',
    disabled: false,
    maxlength: 50,
    limit: false,
    type: 'primary',
    value: '',
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
      description: '提示',
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      description: '是否禁用',
    },
    maxlength: {
      control: { type: 'number' },
      table: {
        type: { summary: 'boolean' },
      },
      description: '可输入最大长度',
    },
    limit: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      description: '是否显示字数限制文案',
    },
    type: {
      control: { type: 'text' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      description: '输入框类型',
    },
    value: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string|number' },
      },
      description: '值',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<div style="width:600px;"><c-input v-bind="$props" v-model="value"></c-input></div>',
});

export const Primary = Template.bind({});

export const Limit = Template.bind({});
Limit.args = {
  limit: true,
  maxlength: 50,
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
