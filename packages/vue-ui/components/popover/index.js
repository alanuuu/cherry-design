import Popover from './popover.vue';
import { prefix } from '../../constants';

Popover.install = (Vue) => {
  Vue.component(prefix + Popover.name, Popover);
};

export default Popover;
