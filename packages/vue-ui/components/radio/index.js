import Radio from './radio.vue';
import { prefix } from '../../constants';

Radio.install = (Vue) => {
  Vue.component(prefix + Radio.name, Radio);
};

export default Radio;
