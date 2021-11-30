import { Link as CLink } from '@csdn-design/vue-ui';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Link 链接',
  component: CLink,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['default', 'primary'],
    },
    underline: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    href: {
      control: { type: 'text' },
      default: null,
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CLink },
  template: '<c-link v-bind="$props" >文字链接</c-link>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

Primary.args = {
  underline: true,
  disabled: false,
  to: '',
  replace: false,
};
