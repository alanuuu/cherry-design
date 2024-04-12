"use strict";
var badge = require("./badge.js");
var index = require("../packages/vue-ui/constants/index.js");
badge.install = (Vue) => {
  Vue.component(index.prefix + badge.name, badge);
};
module.exports = badge;
