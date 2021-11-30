import { Button as CButton } from '@csdn-design/vue-ui';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Button 按钮',
  component: CButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '按钮大小',
      table: {
        defaultValue: {
          summary: 'medium',
        },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'ghost', 'light'],
      description: '按钮类型',
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    status: {
      control: { type: 'select' },
      options: ['normal', 'warning', 'danger'],
      description: '按钮状态',
      table: {
        defaultValue: {
          summary: 'normal',
        },
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: '是否处于加载状态',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CButton },
  template: '<c-button v-bind="$props" @click="onClick" >按钮</c-button>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  label: 'Button',
  onClick() {
    console.log('click button');
  }
};
