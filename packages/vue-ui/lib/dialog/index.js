"use strict";
var dialog = require("./dialog.js");
var index = require("../packages/vue-ui/constants/index.js");
dialog.install = (Vue) => {
  Vue.component(index.prefix + dialog.name, dialog);
};
module.exports = dialog;
