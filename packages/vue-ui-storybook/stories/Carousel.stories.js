import { Carousel, CarouselItem } from '@csdn-design/vue-ui';
import DemoCarousel from '../demo/demo-carousel.vue';

export default {
  name: 'carouse走马灯',
  title: '组件/carousel',
  component: [Carousel, CarouselItem, DemoCarousel],
  args: {
    autoPlay: false,
    interval: 3000,
    height: 150,
    dots: true,
  },
  argTypes: {
    autoPlay: {
      control: { type: 'boolean' },
      description: '是否自动播放',
      table: {
        defaultValue: {
          summary: false,
          detail: '默认不自动播放',
        },
      },
    },
    interval: {
      control: { type: 'number' },
      description: '自动播放间隔时间,单位为ms',
      table: {
        defaultValue: {
          summary: 3000,
          detail: '默认间隔3000ms',
        },
      },
    },
    height: {
      control: { type: 'number' },
      description: '轮播图的高度',
      table: {
        defaultValue: {
          summary: 150,
        },
      },
    },
    dots: {
      control: { type: 'boolean' },
      description: '是否显示指示点面板',
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Carousel, CarouselItem, DemoCarousel },
  template: `
    <demo-carousel :attr="$props" />
  `,
});

export const car = Template.bind({});
car.args = {};
