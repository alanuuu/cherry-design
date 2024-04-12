"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var col = require("./col.js");
var row = require("./row.js");
var index = require("../packages/vue-ui/constants/index.js");
col.install = (Vue) => {
  Vue.component(index.prefix + col.name, col);
};
row.install = (Vue) => {
  Vue.component(index.prefix + row.name, row);
};
exports.Col = col;
exports.Row = row;
