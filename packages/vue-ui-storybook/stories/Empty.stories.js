// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Empty 空状态',
  args: {
    description: '暂无数据',
    width: '200px',
    image: '',
  },
  argTypes: {
    image: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
      description: '背景图片',
    },
    description: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '暂无数据' },
      },
      description: '下方描述',
    },
    width: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '200px' },
      },
      description: '背景图片宽度',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <c-empty v-bind="$props" ></c-empty>
  `,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
