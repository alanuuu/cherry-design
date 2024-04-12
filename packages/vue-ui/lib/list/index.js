"use strict";
var list = require("./list.js");
var listItem = require("./list-item.js");
var listItemMeta = require("./list-item-meta.js");
var index = require("../packages/vue-ui/constants/index.js");
list.Item = listItem;
list.Item.Meta = listItemMeta;
list.install = (Vue) => {
  Vue.component(index.prefix + list.name, list);
  Vue.component(index.prefix + listItem.name, listItem);
  Vue.component(index.prefix + listItemMeta.name, listItemMeta);
};
module.exports = list;
