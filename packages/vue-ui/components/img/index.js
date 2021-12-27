import Img from './img.vue';
import { prefix } from '../../constants';

Img.install = (Vue) => {
  Vue.component(prefix + Img.name, Img);
};

export default Img;
