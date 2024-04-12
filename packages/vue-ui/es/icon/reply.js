import { staticRenderFns, render } from "./reply.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "icon-reply",
  computed: {
    cls() {
      return {
        "c-icon": true,
        "c-reply": true
      };
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/icon/reply.vue";
var IconReply = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { IconReply as default };
