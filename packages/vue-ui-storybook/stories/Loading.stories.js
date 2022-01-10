export default {
  title: '组件/Loading 加载中',
  args: {
    tip: '',
  },
  argTypes: {
    tip: {
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
  <c-loading v-bind="$props">
    <c-card>
      <div>this is a pharagraph</div>
    </c-card>
  </c-loading>
  `,
});

export const Primary = Template.bind({});
