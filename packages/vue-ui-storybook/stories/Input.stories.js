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
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    maxlength: {
      control: { type: 'number' },
      table: {
        type: { summary: 'boolean' },
      },
    },
    limit: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: { type: 'text' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    value: {
      control: { type: 'text' },
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
