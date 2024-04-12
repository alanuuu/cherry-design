import Pagination from "./pagination.js";
export { default } from "./pagination.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Pagination.install = (Vue) => {
  Vue.component(prefix + Pagination.name, Pagination);
};
