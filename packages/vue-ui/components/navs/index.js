import Navs from './navs.vue';
import NavItem from './nav-item.vue';
import { prefix } from '../../constants';

Navs.NavItem = NavItem;

Navs.install = (Vue) => {
  Vue.component(prefix + NavItem.name, NavItem);
  Vue.component(prefix + Navs.name, Navs);
};

export default Navs;
