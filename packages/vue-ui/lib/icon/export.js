"use strict";
var export_vue_vue_type_template_lang = require("./export.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "icon-export",
  computed: {
    cls() {
      return {
        "c-icon": true,
        "c-export": true
      };
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, export_vue_vue_type_template_lang.render, export_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/icon/export.vue";
var IconExport = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = IconExport;
