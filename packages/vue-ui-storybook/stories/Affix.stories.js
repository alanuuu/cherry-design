import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Affix 固钉',
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  args: {
    offsetTop: 50,
  },
  argTypes: {
    offsetTop: {
      control: { type: 'number' },
      description: '距离窗口顶部达到指定偏移量后触发',
      table: {
        defaultValue: {
          summary: 0,
        },
        type: { summary: 'Number' },
      },
    },
    offsetBottom: {
      control: { type: 'number' },
      description:
        '距离窗口底部达到指定偏移量后触发（两个都设置时默认offsetBottom生效）',
      table: {
        defaultValue: {
          summary: '-',
        },
        type: { summary: 'Number' },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<div>
      <div style="height: 500px"></div>
      top定位
      <c-affix v-bind="$props" @onChange="change" :offsetTop="50">
        <c-button>top</c-button>
      </c-affix>
      <p style="height: 300px">滚动定位</p>
      bottom定位
      <c-affix :offsetBottom="50">
        <c-button>bottom</c-button>
      </c-affix>
        <div style="height: 400px"></div>
    </div>`,
  methods: {
    change: action('change'),
  },
});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {};
