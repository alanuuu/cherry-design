export default {
  title: '组件/Tag 标签',
  args: {
    size: 'medium',
    circle: false,
    theme: 'normal',
    active: false,
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
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
  template: '<c-tag v-bind="$props">标签</c-tag>',
});

export const Primary = Template.bind({});
Primary.args = {

};

export const Link = Template.bind({});
Link.args = {
  link: 'www.cherry.net',
};
