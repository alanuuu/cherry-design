import Carousel from './carousel.vue';
import { prefix } from '../../constants';

Carousel.install = (Vue) => {
  Vue.component(prefix + Carousel.name, Carousel);
};
export default Carousel;
