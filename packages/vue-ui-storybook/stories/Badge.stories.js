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
      description: '类型',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    value: {
      control: { type: 'text' },
      description: '显示的值',
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
      description: '最大值，超出会显示{max+}',
    },
    hidden: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      description: '是否隐藏',
    },
    dot: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      description: '是否为点',
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
