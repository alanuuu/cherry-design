"use strict";
var navs = require("./navs.js");
var navItem = require("./nav-item.js");
var index = require("../packages/vue-ui/constants/index.js");
navs.NavItem = navItem;
navs.install = (Vue) => {
  Vue.component(index.prefix + navItem.name, navItem);
  Vue.component(index.prefix + navs.name, navs);
};
module.exports = navs;
