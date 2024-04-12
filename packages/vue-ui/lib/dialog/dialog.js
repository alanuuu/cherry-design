"use strict";
var button = require("../button/button.js");
require("../icon/cherry-vue-icon.js");
require("../icon/arrow-down.js");
require("../icon/arrow-left.js");
require("../icon/arrow-right.js");
require("../icon/arrow-up.js");
require("../icon/at.js");
require("../icon/blow-up.js");
require("../icon/caret-down.js");
require("../icon/caret-left.js");
require("../icon/caret-right.js");
require("../icon/caret-up.js");
require("../icon/check-circle.js");
require("../icon/check-square.js");
require("../icon/close-circle.js");
var close = require("../icon/close.js");
require("../icon/code-block.js");
require("../icon/code-square.js");
require("../icon/code.js");
require("../icon/download.js");
require("../icon/export.js");
require("../icon/eye-invisible.js");
require("../icon/eye.js");
require("../icon/faceBook-circle-fill.js");
require("../icon/facebook-square-fill.js");
require("../icon/google-circle-fill.js");
require("../icon/heart-fill.js");
require("../icon/heart.js");
require("../icon/history.js");
require("../icon/home.js");
require("../icon/import.js");
require("../icon/left-circle.js");
require("../icon/left.js");
require("../icon/list.js");
require("../icon/loading.js");
require("../icon/menu-fold.js");
require("../icon/menu-unfold.js");
require("../icon/message-banned.js");
require("../icon/message.js");
require("../icon/more-vertical.js");
require("../icon/more.js");
require("../icon/narrow.js");
require("../icon/plus-circle.js");
require("../icon/plus.js");
require("../icon/poweroff.js");
require("../icon/qq-circle-fill.js");
require("../icon/question-circle.js");
require("../icon/refresh.js");
require("../icon/reply.js");
require("../icon/right-circle.js");
require("../icon/right.js");
require("../icon/save.js");
require("../icon/scan.js");
require("../icon/search.js");
require("../icon/select-all.js");
require("../icon/send.js");
require("../icon/settings.js");
require("../icon/share-alt.js");
require("../icon/share-external.js");
require("../icon/share-internal.js");
require("../icon/star-fill.js");
require("../icon/star.js");
require("../icon/sync.js");
require("../icon/thumb-down-fill.js");
require("../icon/thumb-down.js");
require("../icon/thumb-up-fill.js");
require("../icon/thumb-up.js");
require("../icon/to-bottom.js");
require("../icon/to-left.js");
require("../icon/to-right.js");
require("../icon/to-top.js");
require("../icon/translate.js");
require("../icon/twitter-circle-fill.js");
require("../icon/upload.js");
require("../icon/voice.js");
require("../icon/warning-circle.js");
require("../icon/weibo-circle-fill.js");
var dialog_vue_vue_type_template_lang = require("./dialog.vue_vue_type_template_lang.js");
var vueComponentNormalizer = require("../_virtual/vueComponentNormalizer.js");
const __vue2_script = {
  components: { CButton: button, IconClose: close },
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
var __component__ = /* @__PURE__ */ vueComponentNormalizer(__vue2_script, dialog_vue_vue_type_template_lang.render, dialog_vue_vue_type_template_lang.staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
__component__.options.__file = "components/dialog/dialog.vue";
var Dialog = /* @__PURE__ */ function() {
  return __component__.exports;
}();
module.exports = Dialog;
