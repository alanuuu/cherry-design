"use strict";
var tag = require("./tag.js");
var index = require("../packages/vue-ui/constants/index.js");
tag.install = (Vue) => {
  Vue.component(index.prefix + tag.name, tag);
};
module.exports = tag;
