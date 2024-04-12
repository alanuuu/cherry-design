import Select from "./select.js";
export { default as Select } from "./select.js";
import Option from "./option.js";
export { default as Option } from "./option.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Select.install = (Vue) => {
  Vue.component(prefix + Select.name, Select);
};
Option.install = (Vue) => {
  Vue.component(prefix + Option.name, Option);
};
