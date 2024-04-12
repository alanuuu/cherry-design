import CAvatar from "../avatar/avatar.js";
import { staticRenderFns, render } from "./list-item-meta.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "ListItemMeta",
  inject: ["itemLayout"],
  components: {
    CAvatar
  },
  props: {
    avatar: String,
    title: String,
    description: String
  },
  computed: {
    metaStyle() {
      return this.itemLayout === "vertical" ? {
        marginBottom: "18px"
      } : {};
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
__component__.options.__file = "components/list/list-item-meta.vue";
var ListItemMeta = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { ListItemMeta as default };
