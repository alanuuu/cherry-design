// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
import './style/popover.less';

export default {
  title: '组件/Popover 弹出器',
  args: {
    type: 'center',
    mask: true,
    show: false,
    useMaskClose: true,
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['center', 'top', 'bottom', 'left', 'right'],
      description: '类型',
      table: {
        defaultValue: {
          summary: 'center',
        },
      },
    },
    mask: {
      control: { type: 'boolean' },
      description: '是否使用遮罩',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    useMaskClose: {
      control: { type: 'boolean' },
      description: '是否使用遮罩关闭',
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
  data() {
    return {
      value: false,
    };
  },
  template: `
    <div>
      <c-button @click="onClick">默认弹出</c-button>
      <c-popover v-bind="$props" v-model="value">
        <div :class="cls">你好呀～</div>
      </c-popover>
    </div>
  `,
  methods: {
    onClick() {
      this.value = true;
    },
  },
  computed: {
    cls() {
      const text = this.type === 'center' ? '' : `--${this.type}`;
      return `pop-example__container${text}`;
    },
  },
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
