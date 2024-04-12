"use strict";
var toast = require("./toast.js");
var index = require("../packages/vue-ui/constants/index.js");
toast.install = (Vue) => {
  Vue.component(index.prefix + toast.name, toast);
};
module.exports = toast;
