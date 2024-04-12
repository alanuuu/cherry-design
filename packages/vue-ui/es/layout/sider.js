import { staticRenderFns, render } from "./sider.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const genId = ((key2) => {
  let i = 0;
  return function() {
    i += 1;
    return key2 + i;
  };
})();
const key = "C_LAYOUT_SIDER";
const __vue2_script = {
  name: "LayoutSider",
  inject: ["onSiderCreate"],
  mounted() {
    const id = genId(key);
    this.onSiderCreate(id);
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/layout/sider.vue";
var Sider = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Sider as default };
