"use strict";
var backtop = require("./backtop.js");
var index = require("../packages/vue-ui/constants/index.js");
backtop.install = (Vue) => {
  Vue.component(index.prefix + backtop.name, backtop);
};
module.exports = backtop;
