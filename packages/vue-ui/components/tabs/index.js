import Tabs from './tabs.vue';
import TabPane from './tab-pane.vue';
import { prefix } from '../../constants';

Tabs.TabPane = TabPane;

Tabs.install = (Vue) => {
  Vue.component(prefix + TabPane.name, TabPane);
  Vue.component(prefix + Tabs.name, Tabs);
};

export default Tabs;
