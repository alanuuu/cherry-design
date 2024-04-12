import Space from "./space.js";
export { default } from "./space.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Space.install = (Vue) => {
  Vue.component(prefix + Space.name, Space);
};
