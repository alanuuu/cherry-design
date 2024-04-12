import CButton from "./button.js";
export { default } from "./button.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
CButton.install = (Vue) => {
  Vue.component(prefix + CButton.name, CButton);
};
