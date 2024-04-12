import Tabs from "./tabs.js";
export { default } from "./tabs.js";
import TabPane from "./tab-pane.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
Tabs.TabPane = TabPane;
Tabs.install = (Vue) => {
  Vue.component(prefix + TabPane.name, TabPane);
  Vue.component(prefix + Tabs.name, Tabs);
};
