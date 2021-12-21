import Select from './select.vue';
import Option from './option.vue';
import { prefix } from '../../constants';

Select.install = (Vue) => {
  Vue.component(prefix + Select.name, Select);
};
Option.install = (Vue) => {
  Vue.component(prefix + Option.name, Option);
};

export { Select, Option };
