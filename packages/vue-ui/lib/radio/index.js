"use strict";
var radio = require("./radio.js");
var index = require("../packages/vue-ui/constants/index.js");
radio.install = (Vue) => {
  Vue.component(index.prefix + radio.name, radio);
};
module.exports = radio;
