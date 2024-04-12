"use strict";
var empty = require("./empty.js");
var index = require("../packages/vue-ui/constants/index.js");
empty.install = (Vue) => {
  Vue.component(index.prefix + empty.name, empty);
};
module.exports = empty;
