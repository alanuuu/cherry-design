import Breadcrumb from "./breadcrumb.js";
export { default } from "./breadcrumb.js";
import BreadcrumbItem from "./breadcrumb-item.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.install = (Vue) => {
  Vue.component(prefix + Breadcrumb.name, Breadcrumb);
  Vue.component(prefix + BreadcrumbItem.name, BreadcrumbItem);
};
