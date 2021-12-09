import DemoRate from './rate/index.vue';

export default {
  title: '组件/Rate 评分',
  component: { DemoRate },
  args: {
    icon: 'icon-heart',
    disabled: false,
    value: 1,
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: '大小',
    },
    icon: {
      control: { type: 'select' },
      options: ['icon-heart', 'icon-star', 'icon-thumb-up'],
      description: 'icon类型，可选heart、thumb、star',
    },
    value: {
      control: { type: 'number', min: 0 },
      description: '分数',
    },
    count: {
      control: { type: 'number', min: 0 },
      description: '总分',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '是否禁用评分，为true时不可修改评分',
    },
    showtext: {
      control: { type: 'boolean' },
      description: '是否展示分数（数字）',
    },
    character: {
      control: { type: 'text' },
      description: '自定义字符',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DemoRate },
  template: '<demo-rate :attr="$props"></demo-rate>',
});

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  count: 5,
  character: '',
  showtext: false,
  disabled: false,
};
