// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Badge 标记',
  args: {
    type: 'primary',
    value: '10',
    max: 99,
    hidden: false,
    dot: false,
  },
  argTypes: {
    type: {
      control: { type: 'radio' },
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
    dot: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      description: 'Dot badge',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<c-badge v-bind="$props" ><c-button type="black" style="border-radius:4px">标记</c-button></c-badge>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
