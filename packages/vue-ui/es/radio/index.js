import Radio from "./radio.js";
export { default } from "./radio.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Radio.install = (Vue) => {
  Vue.component(prefix + Radio.name, Radio);
};
