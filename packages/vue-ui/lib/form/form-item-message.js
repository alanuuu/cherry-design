"use strict";
var context = require("./context.js");
var formItemMessage_vue_vue_type_template_lang = require("./form-item-message.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "FormItemMessage",
  props: {
    status: {
      type: String
    }
  },
  computed: {
    cls() {
      const name = "c-form-item--message";
      return {
        [name + "_" + this.status]: this.status
      };
    },
    show() {
      return this.status === context.Status.error;
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, formItemMessage_vue_vue_type_template_lang.render, formItemMessage_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context2) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/form/form-item-message.vue";
var FormItemMessage = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = FormItemMessage;
