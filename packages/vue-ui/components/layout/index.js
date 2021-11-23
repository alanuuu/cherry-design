import Layout from './layout.vue';
import { prefix } from '../../constants';

Layout.install = (Vue) => {
  Vue.component(prefix + Layout.name, Layout);
};

export default Layout;
