import { Avatar } from '@csdn-design/vue-ui';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Avatar 头像',
  component: { Avatar },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      control: {type: 'number'},
      description: "头像大小",
      defaultValue: 'large'
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square'],
      description: '头像形状',
      defaultValue: 'circle'
    }
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Avatar },
  template: '<avatar v-bind="$props" @error="error"></avatar>',
});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
    src: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    size: 50,
    error (e) {
        console.log(e)
    }
};