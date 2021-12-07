import CarouselItem from '../carousel/carousel-item.vue';
import { prefix } from '../../constants';

CarouselItem.install = (Vue) => {
  Vue.component(prefix + CarouselItem.name, CarouselItem);
};

export default CarouselItem;
