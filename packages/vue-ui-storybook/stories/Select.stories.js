import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Select 选择器',
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  args: {
    disabled: false,
    filterable: false,
  },
  argTypes: {
    value: {
      control: { type: 'text' },
      description: '指定选中项目的 value 值',
      table: {
        defaultValue: {
          summary: '',
        },
        type: { summary: 'String' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: '选择框默认文字',
      table: {
        defaultValue: {
          summary: '请选择',
        },
        type: { summary: 'String' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: '禁用状态',
      table: {
        defaultValue: {
          summary: false,
        },
        type: { summary: 'Boolean' },
      },
    },
    filterable: {
      control: { type: 'boolean' },
      description: '是否开启搜索模式',
      table: {
        defaultValue: {
          summary: false,
        },
        type: { summary: 'Boolean' },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<div><c-select v-model="selectData" v-bind="$props" @on-change="change" @on-query-change="query" style="width:200px">
        <c-option value="1" label="csdn1"></c-option>
        <c-option label="csdn2" value="2"></c-option>
        <c-option label="csdn3" value="3"></c-option>
        <c-option label="csdn4" value="4"></c-option>
        <c-option label="csdn5" value="5"></c-option>
    </c-select></div>`,
  data() {
    return {
      selectData: '',
    };
  },
  methods: {
    change: action('change'),
    query: action('query'),
  },
});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {};
