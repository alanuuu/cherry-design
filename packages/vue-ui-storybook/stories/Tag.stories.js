import { Tag } from '@csdn-design/vue-ui';

export default {
  title: '组件/Tag 标签',
  component: Tag,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    theme: {
      control: { type: 'radio', defaultValue: 'normal' },
      options: ['normal', 'light'],
    },
    circle: {
      control: { type: 'boolean' },
    },
    active: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tag },
  template: '<tag v-bind="$props">tag</tag>',
});

export const Large = Template.bind({});
Large.args = {

};
