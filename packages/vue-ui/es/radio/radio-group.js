import formMixins from "../mixins/form.js";
import { staticRenderFns, render } from "./radio-group.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "RadioGroup",
  mixins: [formMixins],
  props: {
    value: {
      type: [String, Number]
    }
  },
  methods: {
    triggerInput(val) {
      var _a;
      this.$emit("input", val);
      (_a = this.formItem) == null ? void 0 : _a.onField("change");
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
__component__.options.__file = "components/radio/radio-group.vue";
var RadioGroup = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { RadioGroup as default };
