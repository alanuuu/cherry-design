export default {
  title: '组件/Pagination 分页',
  args: {
    total: 20,
    pageSizeOptions: [10, 20, 50, 100],
    showPageSize: false,
  },
  argTypes: {
    total: {
      control: {
        type: 'number',
        min: 1,
        max: 1200,
      },
      description: '最大页码数',
      table: {
        type: { summary: 'number|slot' },
        defaultValue: { summary: '-' },
      },
    },
    pageSizeOptions: {
      control: { type: 'array' },
      description: '指定每页可以显示多少条',
      tabel: {
        type: { summary: 'array' },
        defaultValue: { summary: '[10, 20, 50, 100]' },
      },
    },
    showPageSize: {
      control: { type: 'boolean' },
      description: '是否显示分页器',
      tabel: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
  template: `<c-pagination v-bind="$props" >
    <template v-slot:total>共 {{total}} 件</template>
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
  prevText: '上一页',
  nextText: '下一页',
  li: '',
};
