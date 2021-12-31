import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Avatar 头像',
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  args: {
    size: 'medium',
    shape: 'circle',
  },
  argTypes: {
    src: {
      control: { type: 'text' },
      description: '图片地址',
      table: {
        defaultValue: {
          summary: '-',
        },
        type: { summary: 'String' },
      },
    },
    size: {
      control: { type: 'radio' },
      options: ['large', 'medium', 'small'],
      description: '头像大小',
      table: {
        defaultValue: {
          summary: 'medium',
        },
        type: { summary: 'String' },
      },
    },
    shape: {
      control: { type: 'radio' },
      options: ['circle', 'square'],
      description: '头像形状',
      table: {
        defaultValue: {
          summary: 'circle',
        },
        type: { summary: 'String' },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<div>
    <c-avatar v-bind="$props" @error="error"></c-avatar>
  </div>`,
  methods: {
    error: action('error'),
  },
});

const TemplateICon = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<div>
    <c-avatar v-bind="$props" @error="error">
      <icon-google-circle-fill />
    </c-avatar>
  </div>`,
  methods: {
    error: action('error'),
  },
});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Flpic%2Fs26866793.jpg',
};

export const Icon = TemplateICon.bind({});
Icon.args = {
  color: 'red',
};