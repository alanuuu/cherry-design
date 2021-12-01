import Image from './image.vue';
import { prefix } from '../../constants';

Image.install = (Vue) => {
  Vue.component(prefix + Image.name, Image)
};

export default Image;