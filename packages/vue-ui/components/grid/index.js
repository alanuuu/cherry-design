import Col from './col.vue';
import Row from './row.vue';
import { prefix } from '../../constants';

Col.install = (Vue) => {
  Vue.component(prefix + Col.name, Col);
};
Row.install = (Vue) => {
  Vue.component(prefix + Row.name, Row);
};

export { Col, Row };
