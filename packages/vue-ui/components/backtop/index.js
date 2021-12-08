import BackTop from './backtop.vue';
import { prefix } from '../../constants';

BackTop.install = (Vue) => {
  Vue.component(prefix + BackTop.name, BackTop);
};

export default BackTop;
