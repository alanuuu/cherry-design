import RadioGroup from '../radio/radio-group.vue';
import { prefix } from '../../constants';

RadioGroup.install = (Vue) => {
  Vue.component(prefix + RadioGroup.name, RadioGroup);
};

export default RadioGroup;
