import Layout from './layout/index.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Layout 布局',
  conponent: {
    Layout,
  },
  args: {
    hasSider: true,
  },
  argTypes: {
    hasSider: {
      control: { type: 'boolean' },
      description: '是否有侧边栏',
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
  components: {
    Layout,
  },
  template: `
  <layout v-bind="$props"></layout>
  `,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
