import { Checkbox, CheckboxGroup } from '@csdn-design/vue-ui';

export default {
  title: '组件/CheckboxGroup 复选框',
  component: { CheckboxGroup, Checkbox },
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CheckboxGroup, Checkbox },
  template:
    '<div><checkbox-group @change="change" :size="size" v-model="checked"><checkbox :border="border" :disabled="disabled" v-for="(item, index) in list" :key="index" :label="item.value">{{item.label}}</checkbox></checkbox-group></div>',
});

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  disabled: false,
  border: false,
  checked: ['1'],
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
  change() {
    console.log('change');
  },
};
