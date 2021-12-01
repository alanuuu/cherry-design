import Dialog from './dialog.vue';
import { prefix } from '../../constants';

Dialog.install = (Vue) => {
  Vue.component(prefix + Dialog.name, Dialog);
};

export default Dialog;