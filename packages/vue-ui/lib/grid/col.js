"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var col_vue_vue_type_template_lang = require("./col.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const spans = ["xxl", "xl", "lg", "md", "sm", "xs", "offset"];
const name = "c-col";
const __vue2_script = {
  name: "Col",
  props: {
    span: {
      type: [Number, Object],
      default: 24
    },
    offset: {
      type: [Number, Object],
      default: 0
    }
  },
  inject: {
    gutter: {
      from: "gutter",
      default: 0
    }
  },
  computed: {
    classes() {
      const span = this.adaptationGrid(this.span, "span");
      const offset = this.adaptationGrid(this.offset, "offset");
      return __spreadValues(__spreadValues({}, span), offset);
    },
    styles() {
      return this.gutter ? {
        "padding-left": `${this.gutter / 2}px`,
        "padding-right": `${this.gutter / 2}px`
      } : null;
    }
  },
  methods: {
    adaptationGrid(layout, type) {
      const cls = {};
      if (typeof layout === "object") {
        Object.keys(layout).map((key) => {
          if (spans.indexOf(key) > -1) {
            if (type === "span") {
              cls[`${name}-${key}-${layout[key]}`] = true;
            } else {
              cls[`${name}-${key}-${type}-${layout[key]}`] = true;
            }
          } else {
            cls[`${name}-${layout[key]}`] = true;
          }
          return "";
        });
      } else if (typeof layout === "number" && layout > 0) {
        if (type === "span") {
          cls[`${name}-${layout}`] = true;
        } else {
          cls[`${name}-${type}-${layout}`] = true;
        }
      }
      return cls;
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, col_vue_vue_type_template_lang.render, col_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/grid/col.vue";
var Col = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = Col;
