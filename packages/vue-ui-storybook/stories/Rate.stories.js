export default {
  title: '组件/Rate 评分',
  args: {
    icon: 'icon-star-fill',
    disabled: false,
    value: 1,
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: '大小',
      table: {
        defaultValue: { summary: 'large' },
        type: { summary: 'string' },
      },
    },
    icon: {
      control: { type: 'select' },
      options: ['icon-heart-fill', 'icon-star-fill', 'icon-thumb-up-fill'],
      description: 'icon类型，可选heart、thumb、star',
      table: {
        defaultValue: { summary: 'icon-star-fill' },
        type: { summary: 'string' },
      },
    },
    value: {
      control: { type: 'number', min: 0 },
      description: '分数',
      table: {
        defaultValue: { summary: '1' },
        type: { summary: 'number' },
      },
    },
    count: {
      control: { type: 'number', min: 0 },
      description: '总分',
      table: {
        defaultValue: { summary: '5' },
        type: { summary: 'number' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: '是否禁用评分，为true时不可修改评分',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    showtext: {
      control: { type: 'boolean' },
      description: '是否展示分数（数字）',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    character: {
      control: { type: 'text' },
      description: '自定义字符',
      table: {
        defaultValue: { summary: '-' },
        type: { summary: 'string' },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<c-rate v-bind="$props"></c-rate>',
});

export const Primary = Template.bind({});
Primary.args = {
  size: 'large',
  count: 5,
  character: '',
  showtext: false,
  disabled: false,
};
