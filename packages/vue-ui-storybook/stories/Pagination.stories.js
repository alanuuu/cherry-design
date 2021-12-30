export default {
  title: '组件/Pagination 分页',
  argTypes: {
    maxNum: {
      control: {
        type: 'number',
        min: 1,
        max: 1200,
        step: 1,
      },
      description: '最大页码数',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
      },
    },
    showPageNum: {
      control: { type: 'number', min: 1, step: 2 },
      description: '展示（不省略）的页码个数',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '7' },
      },
    },
    prevText: {
      control: { type: 'text' },
      description: '【上一页】按钮替代文本',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '上一页' },
      },
    },
    nextText: {
      control: { type: 'text' },
      description: '【下一页】按钮替代文本',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '下一页' },
      },
    },
    li: {
      control: { type: 'text' },
      description: '页码内slot',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<c-pagination v-bind="filterProps" >
    </c-pagination>
  `,
  computed: {
    filterProps() {
      const { prev, ...props } = this.$props;
      return props;
    },
  },
});

export const Primary = Template.bind({});
Primary.args = {
  maxNum: 20,
  showPageNum: 7,
  prevText: '上一页',
  nextText: '下一页',
  li: '',
};
