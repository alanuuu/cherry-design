import './style/grid.less';

export default {
  title: '组件/Grid栅栏格',
  args: {
    gutter: 8,
    type: '',
    justify: 'start',
    align: 'top',
  },
  argTypes: {
    gutter: {
      control: { type: 'number' },
      description: '列之间的间隔',
      table: {
        defaultValue: {
          summary: '0',
        },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['flex', ''],
      description: '布局类型',
      table: {
        defaultValue: {
          summary: '无默认值，可选flex',
        },
      },
    },
    justify: {
      description: 'flex布局下水平布局方式',
      control: { type: 'radio' },
      options: [
        'start',
        'end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      defaultValue: 'start',
      table: {
        defaultValue: { summary: 'start', detail: '默认flex-start' },
      },
    },
    align: {
      description: 'flex布局下垂直布局方式',
      control: { type: 'radio' },
      options: ['top', 'bottom', 'center'],
      defaultValue: 'top',
      table: {
        defaultValue: { summary: 'top', detail: '默认flex-start' },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div style="width: 958px;">
      <c-row :gutter="16">
        <c-col :span="item" v-for="(item, index) in [12, 12]" :key="index">
          <div class="grid-item" >{{ item }}</div>
        </c-col>
      </c-row>
      <c-row :gutter="16" style="margin-top: 10px;">
        <c-col :span="item" v-for="(item, index) in [6, 6, 6, 6]" :key="index">
          <div class="grid-item" >{{ item }}</div>
        </c-col>
      </c-row>
      <c-row :gutter="16" style="margin-top: 10px;">
        <c-col :span="item" v-for="(item, index) in [2, 4, 6, 12]" :key="index">
          <div class="grid-item" >{{ item }}</div>
        </c-col>
      </c-row>
      <c-row :gutter="8" style="margin-top: 10px;">
        <c-col :span="2" v-for="(item, index) in 12" :key="index">
          <div class="grid-item" >2</div>
        </c-col>
      </c-row>
    </div>
  `,
});
const Template1 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <div>偏移量2</div>
      <c-row :gutter="8" style="background: #f9fafc;margin: 6px 0;">
        <c-col :span="4" :offset="2" v-for="item in 4" :key="item">
          <div class="block double" 
            style="border-radius: 2px;display: flex;justify-content: center;align-items: center;text-align: center;height: 30px;background: #e6e9f1;"
          >2</div>
        </c-col>
      </c-row>
    </div>
  `,
});
const Template2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <div>flex布局，垂直对齐方式</div>
      <c-row
        type="flex"
        :align="alig"
        :gutter="8"
        style="background: #f9fafc;margin: 6px 0;"
        v-for="alig in ['top', 'center', 'bottom']"
        :key="alig"
      >
        <c-col :span="4" v-for="item in 4" :key="item">
          <div class="block double"
            :style="{height: (item * 15)+'px'}"
            style="border-radius: 2px;display: flex;justify-content: center;align-items: center;text-align: center;height: 30px;background: #e6e9f1;"
          >
            {{ item * 15 }}
          </div>
        </c-col>
      </c-row>
    </div>
  `,
});
const Template3 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
  <div>
  <div>flex布局，水平方向对齐方式</div>
  <c-row
    type="flex"
    :justify="just"
    :gutter="8"
    style="background: #f9fafc;margin: 6px 0;"
    v-for="just in ['start', 'end', 'space-between', 'space-around', 'space-evenly']"
    :key="just"
  >
    <c-col :span="4" v-for="item in 4" :key="item">
      <div class="block double" 
        :style="{ height: (item * 15)+'px' }"
        style="border-radius: 2px;display: flex;justify-content: center;align-items: center;text-align: center;height: 30px;background: #e6e9f1;"
      >
        {{ item * 15 }}
      </div>
    </c-col>
  </c-row>
  </div>
  `,
});

export const Base = Template.bind({});
export const Offset = Template1.bind({});
export const Align = Template2.bind({});
export const Justify = Template3.bind({});

Base.args = {};
Offset.args = {};
