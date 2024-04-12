import Card from "./card.js";
export { default } from "./card.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Card.install = (Vue) => {
  Vue.component(prefix + Card.name, Card);
};
