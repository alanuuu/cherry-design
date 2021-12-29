export default {
  title: '组件/Loading 加载中',
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
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
  <div style="width: 300px;border: 1px solid #ebebeb;padding: 12px;">
    <c-loading v-bind="$props">
      <div>
        <h2>this is a pharagraph</h2>
        <h3>another pharagraph</h3>
        <input />
      </div>
    </c-loading>
    <!-- <c-loading /> -->
  </div>
  `,
});

export const Primary = Template.bind({});
