"use strict";
var progress = require("./progress.js");
progress.install = (Vue) => {
  Vue.component(progress.name, progress);
};
module.exports = progress;
