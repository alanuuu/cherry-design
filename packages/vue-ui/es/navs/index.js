import Navs from "./navs.js";
export { default } from "./navs.js";
import NavItem from "./nav-item.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Navs.NavItem = NavItem;
Navs.install = (Vue) => {
  Vue.component(prefix + NavItem.name, NavItem);
  Vue.component(prefix + Navs.name, Navs);
};
