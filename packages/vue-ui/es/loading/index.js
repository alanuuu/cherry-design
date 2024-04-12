import Loading from "./loading.js";
export { default } from "./loading.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Loading.install = (Vue) => {
  Vue.component(prefix + Loading.name, Loading);
};
