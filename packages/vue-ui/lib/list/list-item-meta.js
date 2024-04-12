"use strict";
var avatar = require("../avatar/avatar.js");
var listItemMeta_vue_vue_type_template_lang = require("./list-item-meta.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "ListItemMeta",
  inject: ["itemLayout"],
  components: {
    CAvatar: avatar
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
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, listItemMeta_vue_vue_type_template_lang.render, listItemMeta_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/list/list-item-meta.vue";
var ListItemMeta = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = ListItemMeta;
