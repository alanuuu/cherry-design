import Loading from './loading.vue';
import { prefix } from '../../constants';

Loading.install = (Vue) => {
  Vue.component(prefix + Loading.name, Loading);
};

export default Loading;
