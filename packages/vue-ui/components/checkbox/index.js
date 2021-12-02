import Checkbox from './checkbox.vue';
import { prefix } from '../../constants';

Checkbox.install = (Vue) => {
  Vue.component(prefix + Checkbox.name, Checkbox);
};

export default Checkbox;
