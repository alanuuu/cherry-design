"use strict";
var row_vue_vue_type_template_lang = require("./row.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "Row",
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "top"
    }
  },
  provide() {
    return {
      gutter: this.gutter
    };
  },
  computed: {
    gutterStyle() {
      if (this.gutter === 0)
        return null;
      const marginVal = `-${this.gutter / 2}px`;
      return {
        marginLeft: marginVal,
        marginRight: marginVal
      };
    },
    cls() {
      const name = "c-row";
      return {
        [name]: true,
        [`is-justify-${this.justify}`]: true,
        [`is-align-${this.align}`]: this.align
      };
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, row_vue_vue_type_template_lang.render, row_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/grid/row.vue";
var Row = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = Row;
