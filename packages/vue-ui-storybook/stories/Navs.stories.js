// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Navs 导航栏',
  args: {
    top: 0,
    isWindow: true,
    duration: 450,
  },
  argTypes: {
    layout: {
      control: { type: 'radio' },
      options: ['top', 'left', 'right', 'bottom'],
      description: '导航栏类型',
      tabel: {
        defaultValue: {
          summary: 'top',
        },
      },
    },
    top: {
      control: { type: 'number' },
      description: '距离上方的距离',
      tabel: {
        defaultValue: {
          summary: 0,
        },
      },
    },
    isWindow: {
      control: { type: 'boolean' },
      description: '是否是基于window滚动',
      tabel: {
        defaultValue: {
          summary: true,
        },
      },
    },
    items: {
      control: { type: 'array' },
      description: '导航栏默认值，一般不需要传；主要是为了防止服务端渲染闪烁',
    },
    duration: {
      control: { type: 'number' },
      description: '滚动时间',
      tabel: {
        defaultValue: {
          summary: 450,
        },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <c-navs v-bind="$props">
      <c-nav-item name="1" label="栏目1" style="height: 500px; padding: 24px;border: 1px solid #eee;">栏目1</c-nav-item>
      <c-nav-item name="2" label="栏目2" style="height: 500px; padding: 24px;border: 1px solid #eee;">栏目2</c-nav-item>
      <c-nav-item name="3" label="栏目3" style="height: 500px; padding: 24px;border: 1px solid #eee;">栏目3</c-nav-item>
    </c-navs>
  `,
});

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
  <div style="border: 1px solid #eee; overflow-y: scroll; position: relative; height: 500px;">
    <c-navs v-bind="$props">
      <c-nav-item name="1" label="栏目1" style="height: 500px; padding: 24px;border: 1px solid #eee;">栏目1</c-nav-item>
      <c-nav-item name="2" label="栏目2" style="height: 500px; padding: 24px;border: 1px solid #eee;">栏目2</c-nav-item>
      <c-nav-item name="3" label="栏目3" style="height: 500px; padding: 24px;border: 1px solid #eee;">栏目3</c-nav-item>
    </c-navs>
  </div>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  top: 20,
};
export const Content = Template2.bind({});
Content.args = {
  isWindow: false,
};
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
