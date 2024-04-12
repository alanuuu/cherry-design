import { staticRenderFns, render } from "./left-circle.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "icon-left-circle",
  computed: {
    cls() {
      return {
        "c-icon": true,
        "c-left-circle": true
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
__component__.options.__file = "components/icon/left-circle.vue";
var IconLeftCircle = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { IconLeftCircle as default };
