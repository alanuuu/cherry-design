import Badge from './badge.vue';
import { prefix } from '../../constants';

Badge.install = (Vue) => {
  Vue.component(prefix + Badge.name, Badge);
};

export default Badge;