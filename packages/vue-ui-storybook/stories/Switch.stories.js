import { action } from '@storybook/addon-actions';

export default {
  title: '组件/Switch 开关',
  args: {
    value: true,
    disabled: false,
    width: 40,
  },
  argTypes: {
    value: {
      control: { type: 'boolean' },
      description: 'switch value',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      description: 'is disabled',
    },
    width: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '40' },
      },
      description: 'switch width',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <c-switch v-bind="$props" v-model="value" @change="change"></c-switch>
  `,
  methods: {
    change: action('change'),
  },
});

export const Primary = Template.bind({});
