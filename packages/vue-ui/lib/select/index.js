"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var select = require("./select.js");
var option = require("./option.js");
var index = require("../packages/vue-ui/constants/index.js");
select.install = (Vue) => {
  Vue.component(index.prefix + select.name, select);
};
option.install = (Vue) => {
  Vue.component(index.prefix + option.name, option);
};
exports.Select = select;
exports.Option = option;
