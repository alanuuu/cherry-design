import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '组件/Image 图片',
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  args: {
    src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
    fit: 'contain',
    preview: true,
    alt: '无图片',
    previewSrc: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Flpic%2Fs26866793.jpg',
  },
  argTypes: {
    src: {
      control: { type: 'text' },
      description: '图片地址',
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    previewSrc: {
      control: { type: 'text' },
      description: '预览图片地址',
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    fit: {
      control: { type: 'select' },
      options: ['fill', 'contain', 'cover', 'scale-down', 'none'],
      description: '图片适应容器框',
      table: {
        defaultValue: {
          summary: 'contain',
        },
      },
    },
    preview: {
      control: { type: 'boolean' },
      description: '是否开启点击图片放大预览',
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    alt: {
      control: { type: 'text' },
      description: '原生alt',
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<c-image v-bind="$props" @error="error" @load="load" style="width: 100px;height: 100px;"></c-image>',
  methods: {
    error: action('error'),
    load: action('load'),
  },
});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {};
