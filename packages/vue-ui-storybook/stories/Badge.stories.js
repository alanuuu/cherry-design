import { Badge } from '@csdn-design/vue-ui';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Badge 标记',
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'light'],
      description: 'badge type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'Display value',
      table: {
        type: { summary: 'string' },
      },
    },
    max: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-1' },
      },
      description:
        'The maximum value, if it exceeds the maximum value,{max}+ will be displayed, and the value is required to be of type Number',
    },
    hidden: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      description: 'Hide badge',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Badge },
  template: '<badge v-bind="$props" ><button>标记</button></badge>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
