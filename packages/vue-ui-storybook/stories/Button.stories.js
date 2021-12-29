import { action } from '@storybook/addon-actions';
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Button 按钮',
  args: {
    size: 'medium',
    type: 'primary',
    loading: false,
    disabled: false,
    ghost: false,
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: '按钮大小',
      table: {
        defaultValue: {
          summary: 'medium',
        },
        type: {
          summary: 'string',
        },
      },
    },
    type: {
      control: { type: 'radio' },
      options: ['primary', 'black', 'light', 'danger'],
      description: '按钮类型',
      table: {
        defaultValue: {
          summary: 'primary',
        },
        type: {
          summary: 'string',
        },
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: '加载状态',
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: '禁用状态',
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    ghost: {
      control: { type: 'boolean' },
      description: '幽灵状态',
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
  },
};
// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<c-button v-bind="$props" @click="onClick">Button</c-button>',
  methods: {
    onClick: action('click'),
  },
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
};
