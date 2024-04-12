"use strict";
var tabs = require("./tabs.js");
var tabPane = require("./tab-pane.js");
var index = require("../packages/vue-ui/constants/index.js");
tabs.TabPane = tabPane;
tabs.install = (Vue) => {
  Vue.component(index.prefix + tabPane.name, tabPane);
  Vue.component(index.prefix + tabs.name, tabs);
};
module.exports = tabs;
