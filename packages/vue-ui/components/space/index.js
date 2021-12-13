import Space from './space.vue';
import { prefix } from '../../constants';

Space.install = (Vue) => {
  Vue.component(prefix + Space.name, Space);
};

export default Space;
