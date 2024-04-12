import Empty from "./empty.js";
export { default } from "./empty.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Empty.install = (Vue) => {
  Vue.component(prefix + Empty.name, Empty);
};
