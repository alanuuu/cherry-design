import Img from "./img.js";
export { default } from "./img.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Img.install = (Vue) => {
  Vue.component(prefix + Img.name, Img);
};
