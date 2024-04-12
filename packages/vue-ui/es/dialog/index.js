import Dialog from "./dialog.js";
export { default } from "./dialog.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Dialog.install = (Vue) => {
  Vue.component(prefix + Dialog.name, Dialog);
};
