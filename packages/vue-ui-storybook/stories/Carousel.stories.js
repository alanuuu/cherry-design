import { action } from '@storybook/addon-actions';
import Pic1 from './asset/images/pic1.jpg';
import Pic2 from './asset/images/pic2.jpg';
import Pic3 from './asset/images/pic3.jpg';

export default {
  name: 'carouse走马灯',
  title: '组件/Carousel走马灯',
  // component: [Carousel, CarouselItem],
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
        type: {
          summary: 'boolean',
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
        type: {
          summary: 'number',
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
        type: {
          summary: 'number',
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
        type: {
          summary: 'boolean',
        },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  // components: { Carousel, CarouselItem },
  template: `
  <c-row>
    <c-col :span="{md: 8, sm: 24}">
      <c-carousel v-bind="$props" @prev="onPrev" @next="onNext">
        <c-carousel-item
          v-for="(item, index) in pictList"
          :key="index"
          class="carousel-item-demo"
        >
          <img :src="item" height="100%" width="100%" />
        </c-carousel-item>
      </c-carousel>
    </c-col>
  </c-row>
  `,
  methods: {
    onPrev: action('prev'),
    onNext: action('next'),
  },
  data() {
    return {
      pictList: [Pic1, Pic2, Pic3, Pic2, Pic3],
    };
  },
});

export const Primary = Template.bind({});
Primary.args = {};
