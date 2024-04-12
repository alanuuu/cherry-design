"use strict";
var form = require("./form.js");
var formItem = require("./form-item.js");
var index = require("../packages/vue-ui/constants/index.js");
form.item = formItem;
form.install = (Vue) => {
  Vue.component(index.prefix + form.name, form);
  Vue.component(index.prefix + formItem.name, formItem);
};
module.exports = form;
