"use strict";
var affix_vue_vue_type_template_lang = require("./affix.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "Affix",
  props: {
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetBottom: Number
  },
  data() {
    return {
      styles: {},
      affix: false
    };
  },
  computed: {
    offsetType() {
      return this.offsetBottom >= 0 ? "bottom" : "top";
    },
    cls() {
      const name = "c-affix";
      return {
        [name]: this.affix
      };
    }
  },
  mounted() {
    window.addEventListener("resize", this.changeScroll);
    window.addEventListener("scroll", this.changeScroll);
    this.$nextTick(() => {
      this.changeScroll();
    });
  },
  methods: {
    changeScroll() {
      const winHight = window.innerHeight;
      const affixHight = this.$el.getElementsByTagName("div")[0].offsetHeight;
      const divTop = this.$el.getBoundingClientRect().top;
      if (this.offsetType === "top" && divTop < this.offsetTop && !this.affix) {
        this.affix = true;
        this.styles = {
          top: this.offsetTop + "px"
        };
        this.$emit("onChange", true);
      } else if (this.offsetType === "top" && divTop > this.offsetTop && this.affix) {
        this.affix = false;
        this.styles = {};
        this.$emit("onChange", false);
      } else if (this.offsetType === "bottom" && divTop + this.offsetBottom + affixHight > winHight && !this.affix) {
        this.affix = true;
        this.styles = {
          bottom: this.offsetBottom + "px"
        };
        this.$emit("onChange", true);
      } else if (this.offsetType === "bottom" && divTop + this.offsetBottom + affixHight < winHight && this.affix) {
        this.affix = false;
        this.styles = {};
        this.$emit("onChange", false);
      }
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.changeScroll);
    window.removeEventListener("scroll", this.changeScroll);
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, affix_vue_vue_type_template_lang.render, affix_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/affix/affix.vue";
var Affix = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = Affix;
