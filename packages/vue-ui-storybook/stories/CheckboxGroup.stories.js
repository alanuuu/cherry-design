import { Checkbox, CheckboxGroup } from '@csdn-design/vue-ui';
import { action } from '@storybook/addon-actions';

export default {
  title: '组件/CheckboxGroup 复选框',
  component: { CheckboxGroup, Checkbox },
  args: {
    size: 'medium',
    checked: ['1'],
    disabled: false,
    border: false,
    list: [
      {
        value: '1',
        label: '苹果',
      },
      {
        value: '2',
        label: '西瓜',
      },
    ],
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['large', 'medium', 'small'],
      description: '复选框大小',
      table: {
        defaultValue: {
          summary: 'medium',
        },
      },
    },
    list: {
      control: { type: 'array' },
      description: '选择列表',
      table: {
        defaultValue: {
          summary: '[]',
        },
      },
    },
    checked: {
      control: { type: 'array' },
      description: '选中',
      table: {
        defaultValue: {
          summary: '[]',
        },
      },
    },
    border: {
      control: { type: 'boolean' },
      description: '是否有边框',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CheckboxGroup, Checkbox },
  template:
    '<div><checkbox-group @change="change" :size="size" v-model="checked"><checkbox :border="border" :disabled="disabled" v-for="(item, index) in list" :key="index" :label="item.value">{{item.label}}</checkbox></checkbox-group></div>',
  methods: {
    change: action('change'),
  },
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {};
