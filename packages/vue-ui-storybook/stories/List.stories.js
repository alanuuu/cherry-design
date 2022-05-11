// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
const img = require('./asset/images/logo.jpg');

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
  data() {
    return {
      img,
    };
  },
  template: `<div>
      <c-list v-bind="$props">
          <c-list-item>
              <c-list-item-meta :avatar="img" title="标题" description="描述" />
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
              <c-list-item-meta :avatar="img" title="标题" description="描述" />
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
  data() {
    return {
      img,
    };
  },
  template: `<div>
      <c-list v-bind="$props">
          <c-list-item>
              <c-list-item-meta :avatar="img" title="标题" description="描述" />
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
                      <c-img style="width: 120px; height: 120px" :src="img"></c-img>
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
  header: null,
  footer: null,
};

export const Vertical = TemplateVertical.bind({});
Vertical.args = {
  header: null,
  footer: null,
  itemLayout: 'vertical',
};
