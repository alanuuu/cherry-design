import Badge from "./badge.js";
export { default } from "./badge.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Badge.install = (Vue) => {
  Vue.component(prefix + Badge.name, Badge);
};
