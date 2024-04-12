"use strict";
var card = require("./card.js");
var index = require("../packages/vue-ui/constants/index.js");
card.install = (Vue) => {
  Vue.component(index.prefix + card.name, card);
};
module.exports = card;
