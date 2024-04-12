"use strict";
var button = require("./button.js");
var index = require("../packages/vue-ui/constants/index.js");
button.install = (Vue) => {
  Vue.component(index.prefix + button.name, button);
};
module.exports = button;
