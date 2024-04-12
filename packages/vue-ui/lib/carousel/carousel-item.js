"use strict";
var carouselItem_vue_vue_type_template_lang = require("./carousel-item.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  name: "CarouselItem",
  data() {
    return {
      translateVal: 0,
      isAnimating: false
    };
  },
  computed: {
    classes() {
      return [
        "c-carousel-item",
        { "c-carousel-item-animation": this.isAnimating }
      ];
    },
    styles() {
      return {
        transform: `translateX(${this.translateVal}px)`
      };
    }
  },
  methods: {
    calculateTranslate(index, activeIndex, childLen) {
      const parentWidth = this.$parent.$el.offsetWidth;
      let interval = index - activeIndex;
      if (interval > childLen / 2) {
        interval -= childLen;
      }
      if (interval < -childLen / 2) {
        interval += childLen;
      }
      this.translateVal = interval * parentWidth;
      this.isAnimating = false;
    },
    setAnimation() {
      this.isAnimating = true;
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, carouselItem_vue_vue_type_template_lang.render, carouselItem_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/carousel/carousel-item.vue";
var CarouselItem = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = CarouselItem;
