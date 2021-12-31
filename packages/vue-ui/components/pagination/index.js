import Pagination from './pagination.vue';
import { prefix } from '../../constants';

Pagination.install = (Vue) => {
  Vue.component(prefix + Pagination.name, Pagination);
};

export default Pagination;
