"use strict";
var avatar = require("./avatar.js");
var index = require("../packages/vue-ui/constants/index.js");
avatar.install = (Vue) => {
  Vue.component(index.prefix + avatar.name, avatar);
};
module.exports = avatar;
