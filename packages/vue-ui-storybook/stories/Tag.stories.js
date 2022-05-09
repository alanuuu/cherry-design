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
      description: 'tag大小',
      table: {
        defaultValue: {
          summary: 'medium',
        },
        type: {
          summary: 'string',
        },
      },
    },
    theme: {
      control: { type: 'radio', defaultValue: 'normal' },
      options: ['normal', 'light'],
      description: 'tag主题',
      table: {
        defaultValue: {
          summary: 'normal',
        },
        type: {
          summary: 'string',
        },
      },
    },
    circle: {
      control: { type: 'boolean' },
      description: '是否圆角',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    active: {
      control: { type: 'boolean' },
      description: '是否激活状态',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
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
