import CarouselItem from "../carousel/carousel-item.js";
export { default } from "../carousel/carousel-item.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
CarouselItem.install = (Vue) => {
  Vue.component(prefix + CarouselItem.name, CarouselItem);
};
