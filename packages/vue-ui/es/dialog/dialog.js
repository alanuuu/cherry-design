import CButton from "../button/button.js";
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
import IconClose from "../icon/close.js";
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
import { staticRenderFns, render } from "./dialog.vue_vue_type_template_lang.js";
import normalizeComponent from "../_virtual/vueComponentNormalizer.js";
const __vue2_script = {
  components: { CButton, IconClose },
  name: "Dialog",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    width: {
      type: String,
      default: "50%"
    },
    showClose: {
      type: Boolean,
      default: true
    },
    modal: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: "15vh"
    }
  },
  methods: {
    close() {
      this.$emit("close", false);
      this.$emit("input", false);
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
__component__.options.__file = "components/dialog/dialog.vue";
var Dialog = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Dialog as default };
