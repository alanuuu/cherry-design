import Empty from './empty.vue';
import { prefix } from '../../constants';

Empty.install = (Vue) => {
  Vue.component(prefix + Empty.name, Empty);
};

export default Empty;
