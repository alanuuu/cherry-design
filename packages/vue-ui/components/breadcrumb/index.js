import Breadcrumb from './breadcrumb.vue';
import BreadcrumbItem from './breadcrumb-item.vue';
import { prefix } from '../../constants';

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.install = (Vue) => {
  Vue.component(prefix + Breadcrumb.name, Breadcrumb);
  Vue.component(prefix + BreadcrumbItem.name, BreadcrumbItem);
};

export default Breadcrumb;
