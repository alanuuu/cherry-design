import CheckboxGroup from './checkbox-group.vue';
import { prefix } from '../../constants';

CheckboxGroup.install = (Vue) => {
  Vue.component(prefix + CheckboxGroup.name, CheckboxGroup);
};

export default CheckboxGroup;
