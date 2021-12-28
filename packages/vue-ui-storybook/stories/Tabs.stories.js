// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Tabs 导航栏',
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <c-tabs v-bind="$props">
      <c-tab-pane name="1" label="栏目1" style="height: 200px; padding: 24px;">栏目1</c-tab-pane>
      <c-tab-pane name="2" label="栏目2" style="height: 200px; padding: 24px;">栏目2</c-tab-pane>
      <c-tab-pane name="3" label="栏目3" style="height: 200px; padding: 24px;">栏目3</c-tab-pane>
    </c-tabs>
  `,
});

export const Primary = Template.bind({});
