import Link from "./link.js";
export { default } from "./link.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Link.install = (Vue) => {
  Vue.component(prefix + Link.name, Link);
};
