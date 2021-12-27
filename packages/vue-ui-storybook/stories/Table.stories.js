export default {
  title: '组件/Tag 标签',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    theme: {
      control: { type: 'radio', defaultValue: 'normal' },
      options: ['normal', 'light'],
    },
    circle: {
      control: { type: 'boolean' },
    },
    active: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<c-tag v-bind="$props">tag</c-tag>',
});

export const Large = Template.bind({});
Large.args = {

};
