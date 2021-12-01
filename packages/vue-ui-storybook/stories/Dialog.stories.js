import { Dialog as CDialog } from '@csdn-design/vue-ui';
import { action } from '@storybook/addon-actions';

export default {
  title: '组件/Dialog 对话框',
  args: {
    visible: true,
    title: '标题名称',
    width: '400',
    showClose: true,
    modal: true,
    center: false,
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
      control: { type: 'string' },
      description: '宽度',
      table: {
        defaultValue: {
          summary: '50%',
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
  components: { CDialog },
  template: '<c-dialog v-bind="$props" @close="onClick"></c-dialog>',
  methods: {
    onClick: action('close'),
  },
});

export const Large = Template.bind({});
Large.args = {

};
