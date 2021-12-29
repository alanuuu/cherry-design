// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Card 卡片',
  args: {
    header: 'CSDN',
    shadow: 'always',
  },
  argTypes: {
    shadow: {
      control: { type: 'radio' },
      options: ['always', 'hover', 'never'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'always' },
      },
      description: '阴影显示方式',
    },
    header: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string|slot' },
      },
      description: '头部内容',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<c-card v-bind="$props" ><span>长沙研发</span></c-card>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
