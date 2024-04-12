import CAvatar from "./avatar.js";
export { default } from "./avatar.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
CAvatar.install = (Vue) => {
  Vue.component(prefix + CAvatar.name, CAvatar);
};
