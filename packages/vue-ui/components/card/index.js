import Card from './card.vue';
import { prefix } from '../../constants';

Card.install = (Vue) => {
  Vue.component(prefix + Card.name, Card);
};

export default Card;
