import './style/grid.less';

export default {
  title: '组件/Grid栅栏格',
  args: {
    gutter: 8,
    justify: 'start',
    align: 'top',
    offset: 0,
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
      <c-row :gutter="gutter" :justify="justify" :align="align">
        <c-col :span="item" v-for="(item, index) in [12, 12]" :key="index">
          <div class="grid-item" >{{ item }}</div>
        </c-col>
      </c-row>
      <c-row :gutter="gutter" :justify="justify" :align="align" style="margin-top: 10px;">
      <c-col :span="item" v-for="(item, index) in [8, 8]" :key="index">
        <div class="grid-item" >{{ item }}</div>
      </c-col>
      </c-row>
      <c-row  :gutter="gutter" :justify="justify" :align="align" style="margin-top: 10px;">
        <c-col :span="item" v-for="(item, index) in [6, 6]" :key="index">
          <div class="grid-item" >{{ item }}</div>
        </c-col>
      </c-row>
      <c-row :gutter="gutter" :justify="justify" :align="align" style="margin-top: 10px;">
        <c-col :span="item" v-for="(item, index) in [4, 4]" :key="index">
          <div class="grid-item" >{{ item }}</div>
        </c-col>
      </c-row>
      <c-row :gutter="gutter" :justify="justify" :align="align" style="margin-top: 10px;">
        <c-col :offset="offset" :span="2">
          <div class="grid-item" >2</div>
        </c-col>
      </c-row>
    </div>
  `,
});

export const Primary = Template.bind({});

Primary.args = {};
