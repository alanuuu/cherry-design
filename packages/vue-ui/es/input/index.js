import Input from "./input.js";
export { default } from "./input.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Input.install = (Vue) => {
  Vue.component(prefix + Input.name, Input);
};
