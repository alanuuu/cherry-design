import List from './list.vue';
import ListItem from './list-item.vue';
import ListItemMeta from './list-item-meta.vue';
import { prefix } from '../../constants';

List.Item = ListItem;
List.Item.Meta = ListItemMeta
List.install = (Vue) => {
  Vue.component(prefix + List.name, List);
  Vue.component(prefix + ListItem.name, ListItem);
  Vue.component(prefix + ListItemMeta.name, ListItemMeta);
};

export default List;