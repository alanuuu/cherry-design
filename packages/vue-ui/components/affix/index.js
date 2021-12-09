import Affix from './affix.vue';
import { prefix } from '../../constants';

Affix.install = (Vue) => {
  Vue.component(prefix + Affix.name, Affix);
};

export default Affix;
