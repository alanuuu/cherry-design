import { staticRenderFns, render } from "./empty.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "Empty",
  props: {
    image: String,
    width: {
      type: String,
      default: "200px"
    },
    description: {
      type: String,
      default: "\u6682\u65E0\u6570\u636E"
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
__component__.options.__file = "components/empty/empty.vue";
var Empty = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Empty as default };
