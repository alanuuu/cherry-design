import Avatar from './avatar.vue';
import { prefix } from '../../constants';

Avatar.install = (Vue) => {
  Vue.component(prefix + Avatar.name, Avatar);
};

export default Avatar;
