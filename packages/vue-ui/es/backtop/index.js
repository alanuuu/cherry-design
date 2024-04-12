import BackTop from "./backtop.js";
export { default } from "./backtop.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
BackTop.install = (Vue) => {
  Vue.component(prefix + BackTop.name, BackTop);
};
