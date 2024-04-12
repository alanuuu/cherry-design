import { staticRenderFns, render } from "./form-item-label.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "FormItemLabel",
  props: {
    labelFor: String,
    required: Boolean
  },
  computed: {}
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/form/form-item-label.vue";
var FormItemLabel = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { FormItemLabel as default };
