import RadioGroup from "../radio/radio-group.js";
export { default } from "../radio/radio-group.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
RadioGroup.install = (Vue) => {
  Vue.component(prefix + RadioGroup.name, RadioGroup);
};
