import Calendar from "./calendar.js";
export { default } from "./calendar.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Calendar.install = (Vue) => {
  Vue.component(prefix + Calendar.name, Calendar);
};
