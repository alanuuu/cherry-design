// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: '组件/Progress 进度条',
  args: {
    process: 20,
    color: 'red',
  },
  argTypes: {
    process: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
      },
    },
    color: {
      control: { type: 'color' },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div style="width: 400px">
      <c-progress v-bind="$props"></c-progress>
    </div>
  `,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
