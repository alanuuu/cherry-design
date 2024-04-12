import ToastDialog from "./toast.js";
export { default } from "./toast.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
ToastDialog.install = (Vue) => {
  Vue.component(prefix + ToastDialog.name, ToastDialog);
};
