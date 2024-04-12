import List from "./list.js";
export { default } from "./list.js";
import ListItem from "./list-item.js";
import ListItemMeta from "./list-item-meta.js";
import { prefix } from "../packages/vue-ui/constants/index.js";
List.Item = ListItem;
List.Item.Meta = ListItemMeta;
List.install = (Vue) => {
  Vue.component(prefix + List.name, List);
  Vue.component(prefix + ListItem.name, ListItem);
  Vue.component(prefix + ListItemMeta.name, ListItemMeta);
};
