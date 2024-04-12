"use strict";
var img = require("./img.js");
var index = require("../packages/vue-ui/constants/index.js");
img.install = (Vue) => {
  Vue.component(index.prefix + img.name, img);
};
module.exports = img;
