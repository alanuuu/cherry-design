import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/List 列表',
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  args: {
    header: 'header',
    footer: 'footer',
    border: true,
    split: true,
    itemLayout: 'horizontal',
  },
  argTypes: {
    header: {
      control: { type: 'text' },
      description: '列表头部内容',
      table: {
        defaultValue: {
          summary: '-',
        },
        type: { summary: 'String|slot' },
      },
    },
    footer: {
      control: { type: 'text' },
      description: '列表底部内容',
      table: {
        defaultValue: {
          summary: '-',
        },
        type: { summary: 'String|slot' },
      },
    },
    border: {
      control: { type: 'boolean' },
      description: '是否有边框',
      table: {
        defaultValue: {
          summary: true,
        },
        type: { summary: 'Boolean' },
      },
    },
    itemLayout: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      description: '布局',
      table: {
        defaultValue: {
          summary: 'horizontal',
        },
        type: { summary: 'String' },
      },
    },
    split: {
      control: { type: 'boolean' },
      description: '是否有分割线',
      table: {
        defaultValue: {
          summary: true,
        },
        type: { summary: 'Boolean' },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const TemplatePrimary = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<div>
    <c-list v-bind="$props">
        <c-list-item>cherry</c-list-item>
        <c-list-item>cherry</c-list-item>
        <c-list-item>cherry</c-list-item>
    </c-list>
    </div>`,
});
const TemplateHorizontal = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<div>
      <c-list v-bind="$props">
          <c-list-item>
              <c-list-item-meta avatar="https://iconfont.alicdn.com/t/1493a0ab-652b-40b1-ba59-cdbe455492cb.png@500h_500w.png" title="标题" description="描述" />
              <div>内容</div>
                  <template slot="action">
                      <li>
                          编辑
                      </li>
                      <li>
                          删除
                      </li>
                  </template>
          </c-list-item>
          <c-list-item>
              <c-list-item-meta avatar="https://iconfont.alicdn.com/t/1493a0ab-652b-40b1-ba59-cdbe455492cb.png@500h_500w.png" title="标题" description="描述" />
              <div>内容</div>
                  <template slot="action">
                      <li>
                          编辑
                      </li>
                      <li>
                          删除
                      </li>
                  </template>
          </c-list-item>
      </c-list>
      </div>`,
});
const TemplateVertical = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<div>
      <c-list v-bind="$props">
          <c-list-item>
              <c-list-item-meta avatar="https://iconfont.alicdn.com/t/1493a0ab-652b-40b1-ba59-cdbe455492cb.png@500h_500w.png" title="标题" description="描述" />
              <div>内容</div>
                  <template slot="action">
                      <li>
                          编辑
                      </li>
                      <li>
                          删除
                      </li>
                  </template>
                  <template slot="extra">
                      <c-image style="width: 120px; height: 120px" src="https://iconfont.alicdn.com/t/1493a0ab-652b-40b1-ba59-cdbe455492cb.png@500h_500w.png"></c-image>
                  </template>
          </c-list-item>
      </c-list>
      </div>`,
});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = TemplatePrimary.bind({});
Primary.args = {};

export const Horizontal = TemplateHorizontal.bind({});
Horizontal.args = {
  header: '',
  footer: '',
};

export const Vertical = TemplateVertical.bind({});
Vertical.args = {
  header: '',
  footer: '',
  itemLayout: 'vertical',
};
