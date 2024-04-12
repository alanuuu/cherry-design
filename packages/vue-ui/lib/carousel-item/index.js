"use strict";
var carouselItem = require("../carousel/carousel-item.js");
var index = require("../packages/vue-ui/constants/index.js");
carouselItem.install = (Vue) => {
  Vue.component(index.prefix + carouselItem.name, carouselItem);
};
module.exports = carouselItem;
