import Input from './input.vue';
import { prefix } from '../../constants';

Input.install = (Vue) => {
  Vue.component(prefix + Input.name, Input);
};

export default Input;
