export default {
  title: '组件/Loading 加载中',
  args: {
    isLoading: true,
    loadingTip: '',
    type: 'circle',
    size: 'largest',
  },
  argTypes: {
    isLoading: {
      type: { control: 'boolean' },
      description: '是否处于正在加载状态',
      table: {
        defaultValue: {
          summary: 'true',
        },
        type: {
          summary: 'boolean',
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
        type: {
          summary: 'string',
        },
      },
    },
    type: {
      control: { type: 'radio' },
      options: ['circle', 'beat'],
      description: '加载样式类型',
      table: {
        defaultValue: {
          summary: 'circle',
        },
        type: {
          summary: 'string',
        },
      },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large', 'largest'],
      description: '大小',
      table: {
        defaultValue: {
          summary: 'largest',
        },
        type: {
          summary: 'string',
        },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
  <c-loading v-bind="$props">
    <c-card>
      <h2>this is a pharagraph</h2>
    </c-card>
  </c-loading>
  `,
});

export const Primary = Template.bind({});
