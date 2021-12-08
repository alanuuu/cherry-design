import DemoLoading from './loading/index.vue';

export default {
  title: '组件/Loading 加载中',
  component: { DemoLoading },
  args: {
    isLoading: true,
    loadingTip: '正在加载',
  },
  argTypes: {
    isLoading: {
      type: { control: 'boolean' },
      description: '是否处于正在加载状态',
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
    },
    loadingTip: {
      type: { control: 'text' },
      description: '加载中显示的自定义文本',
      table: {
        defaultValue: {
          summary: '正在加载',
        },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DemoLoading },
  template: '<demo-loading :attr="$props"></demo-loading>',
});

export const Primary = Template.bind({});
