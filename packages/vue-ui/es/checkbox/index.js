import Checkbox from "./checkbox.js";
export { default } from "./checkbox.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Checkbox.install = (Vue) => {
  Vue.component(prefix + Checkbox.name, Checkbox);
};
