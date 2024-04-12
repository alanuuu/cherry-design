"use strict";
var radioGroup = require("../radio/radio-group.js");
var index = require("../packages/vue-ui/constants/index.js");
radioGroup.install = (Vue) => {
  Vue.component(index.prefix + radioGroup.name, radioGroup);
};
module.exports = radioGroup;
