"use strict";
var loading = require("./loading.js");
var index = require("../packages/vue-ui/constants/index.js");
loading.install = (Vue) => {
  Vue.component(index.prefix + loading.name, loading);
};
module.exports = loading;
