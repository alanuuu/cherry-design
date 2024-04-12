"use strict";
var breadcrumb = require("./breadcrumb.js");
var breadcrumbItem = require("./breadcrumb-item.js");
var index = require("../packages/vue-ui/constants/index.js");
breadcrumb.Item = breadcrumbItem;
breadcrumb.install = (Vue) => {
  Vue.component(index.prefix + breadcrumb.name, breadcrumb);
  Vue.component(index.prefix + breadcrumbItem.name, breadcrumbItem);
};
module.exports = breadcrumb;
