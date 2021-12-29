import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Toast 消息提示',
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  args: {
    content: '这是一个提示',
    closable: false,
    duration: 3000,
    top: 20,
  },
  argTypes: {
    content: {
      control: { type: 'text' },
      description:
        '提示内容，使用方法：this.$toast("这是一个提示") 或者 this.$toast( { content: "这是一个提示"} )',
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    closable: {
      control: { type: 'boolean' },
      description:
        '是否开启关闭按钮，使用方法：this.$toast( { closable: true} )',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    duration: {
      control: { type: 'number' },
      description: '自动关闭时间，使用方法：this.$toast( { duration: 3000} )',
      table: {
        defaultValue: {
          summary: 3000,
        },
      },
    },
    top: {
      control: { type: 'number' },
      description: '离顶部距离，使用方法：this.$toast( { top: 20} )',
      table: {
        defaultValue: {
          summary: 20,
        },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<div>
        <c-button @click="click">提示</c-button>
    </div>`,
  methods: {
    click() {
      this.$toast({
        content: args.content,
        closable: args.closable,
        duration: args.duration,
        top: args.top,
      });
    },
  },
});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {};
