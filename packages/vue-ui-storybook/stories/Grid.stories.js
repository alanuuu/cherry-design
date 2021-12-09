import DemoGrid from './grid/index.vue';

export default {
  title: '组件/Grid栅栏格',
  args: {
    gutter: 0,
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
  components: { DemoGrid },
  props: Object.keys(argTypes),
  template: '<demo-grid :attr="$props" />',
});

export const Grid = Template.bind({});
Grid.args = {};
