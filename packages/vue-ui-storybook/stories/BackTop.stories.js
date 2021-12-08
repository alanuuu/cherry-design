import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/BackTop 回到顶部',
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  args: {
    height: 300,
  },
  argTypes: {
    height: {
      control: { type: 'number' },
      description: '页面滚动高度达到该值时才显示组件',
      table: {
        defaultValue: {
          summary: 300,
        },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template:
    '<div><div style="height: 1000px">顶部</div><c-back-top v-bind="$props" @back="back" style="bottom: 100px;right: 100px;"><c-button>回到顶部</c-button></c-back-top></div>',
  methods: {
    back: action('back'),
  },
});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {};
