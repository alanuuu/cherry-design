import Carousel from "./carousel.js";
export { default } from "./carousel.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Carousel.install = (Vue) => {
  Vue.component(prefix + Carousel.name, Carousel);
};
