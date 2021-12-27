import { Checkbox, CheckboxGroup } from '@csdn-design/vue-ui';
import { action } from '@storybook/addon-actions';

export default {
  title: '组件/CheckboxGroup 复选框',
  component: { CheckboxGroup, Checkbox },
  args: {
    size: 'medium',
    checked: [],
    disabled: false,
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
    checked: {
      control: { type: 'array' },
      description: '选中',
      table: {
        defaultValue: {
          summary: '[]',
        },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: '是否禁用',
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
    `<checkbox-group @change="change" :size="size" v-model="checked">
      <checkbox :disabled="disabled" label="1">苹果</checkbox>
      <checkbox :disabled="disabled" label="2">西瓜</checkbox>
    </checkbox-group>
  `,
  methods: {
    change: action('change'),
  },
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {};
