import Tag from './tag.vue';
import { prefix } from '../../constants';

Tag.install = (Vue) => {
  Vue.component(prefix + Tag.name, Tag);
};

export default Tag;