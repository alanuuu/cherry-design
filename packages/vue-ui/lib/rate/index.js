"use strict";
var rate = require("./rate.js");
var index = require("../packages/vue-ui/constants/index.js");
rate.install = (Vue) => {
  Vue.component(index.prefix + rate.name, rate);
};
module.exports = rate;
