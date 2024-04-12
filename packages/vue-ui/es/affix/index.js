import Affix from "./affix.js";
export { default } from "./affix.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Affix.install = (Vue) => {
  Vue.component(prefix + Affix.name, Affix);
};
