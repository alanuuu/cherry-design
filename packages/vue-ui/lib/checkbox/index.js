"use strict";
var checkbox = require("./checkbox.js");
var index = require("../packages/vue-ui/constants/index.js");
checkbox.install = (Vue) => {
  Vue.component(index.prefix + checkbox.name, checkbox);
};
module.exports = checkbox;
