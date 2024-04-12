"use strict";
var send_vue_vue_type_template_lang = require("./send.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "icon-send",
  computed: {
    cls() {
      return {
        "c-icon": true,
        "c-send": true
      };
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, send_vue_vue_type_template_lang.render, send_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/icon/send.vue";
var IconSend = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = IconSend;
