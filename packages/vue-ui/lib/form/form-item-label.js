"use strict";
var formItemLabel_vue_vue_type_template_lang = require("./form-item-label.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "FormItemLabel",
  props: {
    labelFor: String,
    required: Boolean
  },
  computed: {}
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, formItemLabel_vue_vue_type_template_lang.render, formItemLabel_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/form/form-item-label.vue";
var FormItemLabel = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = FormItemLabel;
