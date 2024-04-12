"use strict";
var link = require("./link.js");
var index = require("../packages/vue-ui/constants/index.js");
link.install = (Vue) => {
  Vue.component(index.prefix + link.name, link);
};
module.exports = link;
