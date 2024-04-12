"use strict";
var sync_vue_vue_type_template_lang = require("./sync.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "icon-sync",
  computed: {
    cls() {
      return {
        "c-icon": true,
        "c-sync": true
      };
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, sync_vue_vue_type_template_lang.render, sync_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/icon/sync.vue";
var IconSync = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = IconSync;
