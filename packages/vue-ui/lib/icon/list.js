"use strict";
var list_vue_vue_type_template_lang = require("./list.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "icon-list",
  computed: {
    cls() {
      return {
        "c-icon": true,
        "c-list": true
      };
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, list_vue_vue_type_template_lang.render, list_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/icon/list.vue";
var IconList = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = IconList;
