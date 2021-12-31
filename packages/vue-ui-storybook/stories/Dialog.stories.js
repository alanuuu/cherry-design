export default {
  title: '组件/Dialog 对话框',
  args: {
    visible: false,
    title: '标题名称',
    width: '30%',
    showClose: true,
    modal: true,
    center: false,
    top: '30vh',
  },
  argTypes: {
    visible: {
      control: { type: 'boolean' },
      description: '是否显示',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    title: {
      control: { type: 'text' },
      description: '标题',
    },
    width: {
      control: { type: 'text' },
      description: '宽度',
      table: {
        defaultValue: {
          summary: '50%',
        },
      },
    },
    top: {
      control: { type: 'text' },
      description: '距离顶部高度',
      table: {
        defaultValue: {
          summary: '15vh',
        },
      },
    },
    showClose: {
      control: { type: 'boolean' },
      description: '是否需要关闭按钮',
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    modal: {
      control: { type: 'boolean' },
      description: '是否需要遮罩层',
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    center: {
      control: { type: 'boolean' },
      description: '标题和底部按钮是否居中',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <c-dialog v-bind="$props" @close="handleChange">CSDN</c-dialog>
      <c-button @click="handleChange">点击弹窗</c-button>
    </div>
  `,
  methods: {
    handleChange() {
      this.visible = !this.visible;
    },
  },
});

export const Primary = Template.bind({});
Primary.args = {

};
