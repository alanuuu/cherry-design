"use strict";
var pagination = require("./pagination.js");
var index = require("../packages/vue-ui/constants/index.js");
pagination.install = (Vue) => {
  Vue.component(index.prefix + pagination.name, pagination);
};
module.exports = pagination;
