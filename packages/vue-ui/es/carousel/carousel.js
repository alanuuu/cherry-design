import "../icon/cherry-vue-icon.js";
import "../icon/arrow-down.js";
import "../icon/arrow-left.js";
import "../icon/arrow-right.js";
import "../icon/arrow-up.js";
import "../icon/at.js";
import "../icon/blow-up.js";
import "../icon/caret-down.js";
import "../icon/caret-left.js";
import "../icon/caret-right.js";
import "../icon/caret-up.js";
import "../icon/check-circle.js";
import "../icon/check-square.js";
import "../icon/close-circle.js";
import "../icon/close.js";
import "../icon/code-block.js";
import "../icon/code-square.js";
import "../icon/code.js";
import "../icon/download.js";
import "../icon/export.js";
import "../icon/eye-invisible.js";
import "../icon/eye.js";
import "../icon/faceBook-circle-fill.js";
import "../icon/facebook-square-fill.js";
import "../icon/google-circle-fill.js";
import "../icon/heart-fill.js";
import "../icon/heart.js";
import "../icon/history.js";
import "../icon/home.js";
import "../icon/import.js";
import "../icon/left-circle.js";
import "../icon/left.js";
import "../icon/list.js";
import "../icon/loading.js";
import "../icon/menu-fold.js";
import "../icon/menu-unfold.js";
import "../icon/message-banned.js";
import "../icon/message.js";
import "../icon/more-vertical.js";
import "../icon/more.js";
import "../icon/narrow.js";
import "../icon/plus-circle.js";
import "../icon/plus.js";
import "../icon/poweroff.js";
import "../icon/qq-circle-fill.js";
import "../icon/question-circle.js";
import "../icon/refresh.js";
import "../icon/reply.js";
import "../icon/right-circle.js";
import "../icon/right.js";
import "../icon/save.js";
import "../icon/scan.js";
import "../icon/search.js";
import "../icon/select-all.js";
import "../icon/send.js";
import "../icon/settings.js";
import "../icon/share-alt.js";
import "../icon/share-external.js";
import "../icon/share-internal.js";
import "../icon/star-fill.js";
import "../icon/star.js";
import "../icon/sync.js";
import "../icon/thumb-down-fill.js";
import "../icon/thumb-down.js";
import "../icon/thumb-up-fill.js";
import "../icon/thumb-up.js";
import "../icon/to-bottom.js";
import "../icon/to-left.js";
import "../icon/to-right.js";
import "../icon/to-top.js";
import "../icon/translate.js";
import "../icon/twitter-circle-fill.js";
import "../icon/upload.js";
import "../icon/voice.js";
import "../icon/warning-circle.js";
import "../icon/weibo-circle-fill.js";
import { staticRenderFns, render } from "./carousel.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  name: "Carousel",
  props: {
    autoPlay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 3e3
    },
    height: {
      type: Number,
      default: 150
    },
    dots: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      activeIndex: 0,
      timer: null,
      items: []
    };
  },
  methods: {
    startAutoPlay() {
      if (this.autoPlay) {
        this.timer = setInterval(this.next, this.interval);
      }
    },
    stopAutoPlay() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = null;
    },
    prev() {
      if (this.activeIndex - 1 < 0) {
        this.activeIndex = this.itemsLen - 1;
      } else {
        this.activeIndex -= 1;
      }
      this.$emit("prev");
    },
    next() {
      if (this.activeIndex + 1 > this.itemsLen - 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex += 1;
      }
      this.$emit("next");
    },
    setItemPosition(oldVal, newVal) {
      this.items.forEach((item, index) => {
        item.calculateTranslate(index, this.activeIndex, this.itemsLen);
        if (oldVal === index || newVal === index) {
          item.setAnimation();
        }
      });
    }
  },
  computed: {
    classes() {
      const classes = ["c-carousel"];
      return classes;
    },
    itemsLen() {
      return this.items.length;
    }
  },
  mounted() {
    this.items = this.$children.filter((child) => {
      return child.$options.name === "CarouselItem";
    });
    this.setItemPosition();
    this.startAutoPlay();
  },
  watch: {
    autoPlay(val) {
      if (val) {
        this.startAutoPlay();
      } else {
        this.stopAutoPlay();
      }
    },
    interval() {
      this.stopAutoPlay();
      this.stopAutoPlay();
    },
    activeIndex(oldVal, newVal) {
      this.setItemPosition(oldVal, newVal);
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
__component__.options.__file = "components/carousel/carousel.vue";
var Carousel = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Carousel as default };
