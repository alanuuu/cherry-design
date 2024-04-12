"use strict";
var input = require("./input.js");
var index = require("../packages/vue-ui/constants/index.js");
input.install = (Vue) => {
  Vue.component(index.prefix + input.name, input);
};
module.exports = input;
