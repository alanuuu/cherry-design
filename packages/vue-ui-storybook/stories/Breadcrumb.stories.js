// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Breadcrumb 面包屑导航',
  // component: Breadcrumb,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    //
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  // components: { Breadcrumb, BreadcrumbItem },
  template: `
    <c-breadcrumb v-bind="$props">
      <c-breadcrumb-item href="https://www.csdn.net/c/">CSDN社区</c-breadcrumb-item>
      <c-breadcrumb-item :to="{ path: '/' }">前端</c-breadcrumb-item>
      <c-breadcrumb-item>长沙</c-breadcrumb-item>
    </c-breadcrumb>
  `,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

Primary.args = {
  separator: '/',
};
