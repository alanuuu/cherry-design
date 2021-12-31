import Toast from './toast';
import { prefix } from '../../constants';

Toast.install = (Vue) => {
  Vue.component(prefix + Toast.name, Toast);
};

export default Toast;
