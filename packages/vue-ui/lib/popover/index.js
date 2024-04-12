"use strict";
var popover = require("./popover.js");
var index = require("../packages/vue-ui/constants/index.js");
popover.install = (Vue) => {
  Vue.component(index.prefix + popover.name, popover);
};
module.exports = popover;
