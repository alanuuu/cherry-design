import Col from "./col.js";
export { default as Col } from "./col.js";
import Row from "./row.js";
export { default as Row } from "./row.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Col.install = (Vue) => {
  Vue.component(prefix + Col.name, Col);
};
Row.install = (Vue) => {
  Vue.component(prefix + Row.name, Row);
};
