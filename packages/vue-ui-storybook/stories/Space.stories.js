import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Space 间隔',
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  args: {
    size: 12,
    direction: 'horizontal',
    alignItems: 'center',
  },
  argTypes: {
    size: {
      control: { type: 'number' },
      description: '间距大小',
      table: {
        defaultValue: {
          summary: 12,
        },
        type: { summary: 'Number' },
      },
    },
    direction: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      description: '排列方式',
      table: {
        defaultValue: {
          summary: 'horizontal',
        },
        type: { summary: 'String' },
      },
    },
    alignItems: {
      control: { type: 'select' },
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      description: '对齐方式',
      table: {
        defaultValue: {
          summary: 'center',
        },
        type: { summary: 'String' },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template:
    '<div><c-space v-bind="$props"><div>space</div><c-button>按钮1</c-button><c-button>按钮2</c-button><c-button>按钮3</c-button></c-space></div>',
  methods: {},
});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {};
