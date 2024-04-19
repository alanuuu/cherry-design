"use strict";
var calendar = require("./calendar.js");
var index = require("../packages/vue-ui/constants/index.js");
calendar.install = (Vue) => {
  Vue.component(index.prefix + calendar.name, calendar);
};
module.exports = calendar;
