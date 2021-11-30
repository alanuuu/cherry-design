import Switch from './switch.vue';
import { prefix } from '../../constants';

Switch.install = (Vue) => {
  Vue.component(prefix + Switch.name, Switch);
};
export default Switch;
