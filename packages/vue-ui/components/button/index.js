import Button from './button.vue';
import { prefix } from '../../constants';

Button.install = (Vue) => {
  Vue.component(prefix + Button.name, Button);
};

export default Button;
