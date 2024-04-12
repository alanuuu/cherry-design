import Popover from "./popover.js";
export { default } from "./popover.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Popover.install = (Vue) => {
  Vue.component(prefix + Popover.name, Popover);
};
