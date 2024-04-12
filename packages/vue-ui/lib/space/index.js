"use strict";
var space = require("./space.js");
var index = require("../packages/vue-ui/constants/index.js");
space.install = (Vue) => {
  Vue.component(index.prefix + space.name, space);
};
module.exports = space;
