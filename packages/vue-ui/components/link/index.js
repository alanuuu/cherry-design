import Link from './link.vue';
import { prefix } from '../../constants';

Link.install = (Vue) => {
  Vue.component(prefix + Link.name, Link);
};

export default Link;