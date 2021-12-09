import Rate from './rate.vue';
import { prefix } from '../../constants';

Rate.install = (Vue) => {
  Vue.component(prefix + Rate.name, Rate);
};

export default Rate;
