"use strict";
var carousel = require("./carousel.js");
var index = require("../packages/vue-ui/constants/index.js");
carousel.install = (Vue) => {
  Vue.component(index.prefix + carousel.name, carousel);
};
module.exports = carousel;
