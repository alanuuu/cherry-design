import { action } from '@storybook/addon-actions';
import dayjs from 'dayjs';

const now = dayjs()
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Calendar 日历',
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  args: {
    showAll: true,
    showChange: false,
    showHead: true,
    selects: [now.subtract(3, 'd'), now.subtract(2, 'd'), now.subtract(1, 'd')]
  },
  argTypes: {
    showAll: {
      control: { type: 'boolean' },
      description: '显示全部',
      table: {
        defaultValue: {
          summary: false,
        },
        type: { summary: 'Boolean' },
      },
    },
    showChange: {
      control: { type: 'boolean' },
      description: '显示切换',
      table: {
        defaultValue: {
          summary: true,
        },
        type: { summary: 'Boolean' },
      },
    },
    showHead: {
      control: { type: 'boolean' },
      description: '显示头部',
      table: {
        defaultValue: {
          summary: true,
        },
        type: { summary: 'Boolean' },
      },
    },
    selects: {
      control: { type: 'array' },
      description: '选中日期',
      table: {
        defaultValue: {
          summary: ['daysjs()'],
        },
        type: { summary: 'array' },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template:
    '<div><c-calendar v-bind="$props"></c-calendar></div>',
  methods: {},
});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {};
