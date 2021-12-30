import './style/layout.less';
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Layout 布局',
  args: {
    hasSider: true,
  },
  argTypes: {
    hasSider: {
      control: { type: 'boolean' },
      description: '是否有侧边栏; 一般不需要传；主要用于防止服务端渲染闪烁',
      table: {
        defaultValue: {
          summary: '-',
        },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
  <c-layout class="section">
  <c-layout-header class="header">Header</c-layout-header>
  <c-layout :hasSider="hasSider">
    <c-layout-content class="content">Content</c-layout-content>
    <c-layout-sider class="sider">Sider</c-layout-sider>
  </c-layout>
  <c-layout-footer class="footer">Footer</c-layout-footer>
</c-layout>
  `,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
