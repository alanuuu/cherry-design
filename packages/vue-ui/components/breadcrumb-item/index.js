import BreadcrumbItem from '../breadcrumb/breadcrumb-item.vue';

BreadcrumbItem.install = (Vue) => {
  Vue.component(BreadcrumbItem.name, BreadcrumbItem);
};

export default BreadcrumbItem;
