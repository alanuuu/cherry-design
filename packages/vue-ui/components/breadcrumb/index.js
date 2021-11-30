import Breadcrumb from './breadcrumb.vue';
import { prefix } from '../../constants';

Breadcrumb.install = (Vue) => {
  Vue.component(prefix + Breadcrumb.name, Breadcrumb);
};

export default Breadcrumb;