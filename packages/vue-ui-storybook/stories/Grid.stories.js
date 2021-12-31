import './style/grid.less';

export default {
  title: '组件/Grid栅栏格',
  args: {
    gutter: 8,
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
        type: {
          summary: 'number',
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
        type: {
          summary: 'string',
        },
      },
    },
    align: {
      description: 'flex布局下垂直布局方式',
      control: { type: 'radio' },
      options: ['top', 'bottom', 'center'],
      defaultValue: 'top',
      table: {
        defaultValue: { summary: 'top', detail: '默认flex-start' },
        type: {
          summary: 'string',
        },
      },
    },
    offset: {
      description: '每个col的偏移量',
      control: { type: 'object' },
      table: {
        defaultValue: { summary: '0', detail: '默认0' },
        type: {
          summary: 'number|object',
        },
      },
    },
    span: {
      description: '每个col的宽度',
      control: { type: 'object' },
      table: {
        defaultValue: { summary: '0', detail: '默认0' },
        type: {
          summary: 'number｜object',
        },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div style="width: 958px;">
      <c-row style="height: 60px;" :gutter="gutter" :justify="justify" :align="align">
        <c-col :span="item" v-for="(item, index) in [12, 12]" :key="index">
          <div class="grid-item" >{{ item }}</div>
        </c-col>
      </c-row>
      <c-row style="height: 60px;" :gutter="gutter" :justify="justify" :align="align">
        <c-col :span="item" v-for="(item, index) in [8, 8]" :key="index" >
          <div class="grid-item" >{{ item }}</div>
        </c-col>
      </c-row>
      <c-row style="height: 60px;"  :gutter="gutter" :justify="justify" :align="align">
        <c-col :span="item" v-for="(item, index) in [6, 6]" :key="index" >
          <div class="grid-item" >{{ item }}</div>
        </c-col>
      </c-row>
      <c-row style="height: 60px;" :gutter="gutter" :justify="justify" :align="align">
        <c-col :span="item" v-for="(item, index) in [4, 4]" :key="index">
          <div class="grid-item" >{{ item }}</div>
        </c-col>
      </c-row>
      <c-row style="height: 60px;" :gutter="gutter" :justify="justify" :align="align">
        <c-col :offset="offset" :span="2">
          <div class="grid-item" >2</div>
        </c-col>
      </c-row>
    </div>
  `,
});

const Template2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
      <c-row>
        <c-col :span="span" :offset="offset">
          <div class="grid-item" >响应式</div>
        </c-col>
      </c-row>
  `,
});

export const Primary = Template.bind({});

Primary.args = {
  offset: 0,
};

export const Reactive = Template2.bind({});

Reactive.args = {
  span: {
    xxl: 12,
    xl: 8,
    lg: 6,
    md: 12,
    sm: 22,
  },
  offset: {
    xxl: 1,
    xl: 2,
    lg: 6,
    md: 4,
    sm: 2,
  },
};
