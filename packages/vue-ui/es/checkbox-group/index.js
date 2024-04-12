import CheckboxGroup from "./checkbox-group.js";
export { default } from "./checkbox-group.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
CheckboxGroup.install = (Vue) => {
  Vue.component(prefix + CheckboxGroup.name, CheckboxGroup);
};
