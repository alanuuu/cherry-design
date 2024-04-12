import Rate from "./rate.js";
export { default } from "./rate.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Rate.install = (Vue) => {
  Vue.component(prefix + Rate.name, Rate);
};
