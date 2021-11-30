import { Breadcrumb, BreadcrumbItem } from '@csdn-design/vue-ui';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Breadcrumb 面包屑导航',
  component: Breadcrumb,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    //
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Breadcrumb, BreadcrumbItem },
  template: `
    <breadcrumb v-bind="$props">
      <breadcrumb-item href="https://www.csdn.net/c/">社区</breadcrumb-item>
      <breadcrumb-item :to="{ path: '/' }">前端</breadcrumb-item>
      <breadcrumb-item>Vue</breadcrumb-item>
    </breadcrumb>
  `,
});

export const 使用自定义导航单元 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

使用自定义导航单元.args = {
  separator: '/',
};
