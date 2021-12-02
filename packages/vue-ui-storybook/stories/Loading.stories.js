// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Loading 加载中',
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<c-loading v-bind="$props"></c-loading>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
