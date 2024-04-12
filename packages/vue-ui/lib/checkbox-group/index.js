"use strict";
var checkboxGroup = require("./checkbox-group.js");
var index = require("../packages/vue-ui/constants/index.js");
checkboxGroup.install = (Vue) => {
  Vue.component(index.prefix + checkboxGroup.name, checkboxGroup);
};
module.exports = checkboxGroup;
