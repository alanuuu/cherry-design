import { staticRenderFns, render } from "./card.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "Card",
  props: {
    header: String,
    shadow: {
      type: String,
      default: "hover",
      validator: (val) => {
        return ["always", "hover", "never"].indexOf(val) !== -1;
      }
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
__component__.options.__file = "components/card/card.vue";
var Card = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Card as default };
