"use strict";
var affix = require("./affix.js");
var index = require("../packages/vue-ui/constants/index.js");
affix.install = (Vue) => {
  Vue.component(index.prefix + affix.name, affix);
};
module.exports = affix;
