"use strict";
var context = require("../form/context.js");
var formMixins = {
  inject: {
    formItem: {
      from: context.formItemKey,
      default: {
        onField: () => {
        }
      }
    }
  },
  computed: {
    itemDisabled() {
      var _a;
      return this.disabled || ((_a = this.formItem) == null ? void 0 : _a.disabled);
    }
  }
};
module.exports = formMixins;
