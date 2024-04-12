import Tag from "./tag.js";
export { default } from "./tag.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Tag.install = (Vue) => {
  Vue.component(prefix + Tag.name, Tag);
};
