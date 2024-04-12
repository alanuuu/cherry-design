"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var arrowDown = require("./arrow-down.js");
var arrowLeft = require("./arrow-left.js");
var arrowRight = require("./arrow-right.js");
var arrowUp = require("./arrow-up.js");
var at = require("./at.js");
var blowUp = require("./blow-up.js");
var caretDown = require("./caret-down.js");
var caretLeft = require("./caret-left.js");
var caretRight = require("./caret-right.js");
var caretUp = require("./caret-up.js");
var checkCircle = require("./check-circle.js");
var checkSquare = require("./check-square.js");
var closeCircle = require("./close-circle.js");
var close = require("./close.js");
var codeBlock = require("./code-block.js");
var codeSquare = require("./code-square.js");
var code = require("./code.js");
var download = require("./download.js");
var _export = require("./export.js");
var eyeInvisible = require("./eye-invisible.js");
var eye = require("./eye.js");
var faceBookCircleFill = require("./faceBook-circle-fill.js");
var facebookSquareFill = require("./facebook-square-fill.js");
var googleCircleFill = require("./google-circle-fill.js");
var heartFill = require("./heart-fill.js");
var heart = require("./heart.js");
var history = require("./history.js");
var home = require("./home.js");
var _import = require("./import.js");
var leftCircle = require("./left-circle.js");
var left = require("./left.js");
var list = require("./list.js");
var loading = require("./loading.js");
var menuFold = require("./menu-fold.js");
var menuUnfold = require("./menu-unfold.js");
var messageBanned = require("./message-banned.js");
var message = require("./message.js");
var moreVertical = require("./more-vertical.js");
var more = require("./more.js");
var narrow = require("./narrow.js");
var plusCircle = require("./plus-circle.js");
var plus = require("./plus.js");
var poweroff = require("./poweroff.js");
var qqCircleFill = require("./qq-circle-fill.js");
var questionCircle = require("./question-circle.js");
var refresh = require("./refresh.js");
var reply = require("./reply.js");
var rightCircle = require("./right-circle.js");
var right = require("./right.js");
var save = require("./save.js");
var scan = require("./scan.js");
var search = require("./search.js");
var selectAll = require("./select-all.js");
var send = require("./send.js");
var settings = require("./settings.js");
var shareAlt = require("./share-alt.js");
var shareExternal = require("./share-external.js");
var shareInternal = require("./share-internal.js");
var starFill = require("./star-fill.js");
var star = require("./star.js");
var sync = require("./sync.js");
var thumbDownFill = require("./thumb-down-fill.js");
var thumbDown = require("./thumb-down.js");
var thumbUpFill = require("./thumb-up-fill.js");
var thumbUp = require("./thumb-up.js");
var toBottom = require("./to-bottom.js");
var toLeft = require("./to-left.js");
var toRight = require("./to-right.js");
var toTop = require("./to-top.js");
var translate = require("./translate.js");
var twitterCircleFill = require("./twitter-circle-fill.js");
var upload = require("./upload.js");
var voice = require("./voice.js");
var warningCircle = require("./warning-circle.js");
var weiboCircleFill = require("./weibo-circle-fill.js");
const icons = {
  IconArrowDown: arrowDown,
  IconArrowLeft: arrowLeft,
  IconArrowRight: arrowRight,
  IconArrowUp: arrowUp,
  IconAt: at,
  IconBlowUp: blowUp,
  IconCaretDown: caretDown,
  IconCaretLeft: caretLeft,
  IconCaretRight: caretRight,
  IconCaretUp: caretUp,
  IconCheckCircle: checkCircle,
  IconCheckSquare: checkSquare,
  IconCloseCircle: closeCircle,
  IconClose: close,
  IconCodeBlock: codeBlock,
  IconCodeSquare: codeSquare,
  IconCode: code,
  IconDownload: download,
  IconExport: _export,
  IconEyeInvisible: eyeInvisible,
  IconEye: eye,
  IconFaceBookCircleFill: faceBookCircleFill,
  IconFacebookSquareFill: facebookSquareFill,
  IconGoogleCircleFill: googleCircleFill,
  IconHeartFill: heartFill,
  IconHeart: heart,
  IconHistory: history,
  IconHome: home,
  IconImport: _import,
  IconLeftCircle: leftCircle,
  IconLeft: left,
  IconList: list,
  IconLoading: loading,
  IconMenuFold: menuFold,
  IconMenuUnfold: menuUnfold,
  IconMessageBanned: messageBanned,
  IconMessage: message,
  IconMoreVertical: moreVertical,
  IconMore: more,
  IconNarrow: narrow,
  IconPlusCircle: plusCircle,
  IconPlus: plus,
  IconPoweroff: poweroff,
  IconQqCircleFill: qqCircleFill,
  IconQuestionCircle: questionCircle,
  IconRefresh: refresh,
  IconReply: reply,
  IconRightCircle: rightCircle,
  IconRight: right,
  IconSave: save,
  IconScan: scan,
  IconSearch: search,
  IconSelectAll: selectAll,
  IconSend: send,
  IconSettings: settings,
  IconShareAlt: shareAlt,
  IconShareExternal: shareExternal,
  IconShareInternal: shareInternal,
  IconStarFill: starFill,
  IconStar: star,
  IconSync: sync,
  IconThumbDownFill: thumbDownFill,
  IconThumbDown: thumbDown,
  IconThumbUpFill: thumbUpFill,
  IconThumbUp: thumbUp,
  IconToBottom: toBottom,
  IconToLeft: toLeft,
  IconToRight: toRight,
  IconToTop: toTop,
  IconTranslate: translate,
  IconTwitterCircleFill: twitterCircleFill,
  IconUpload: upload,
  IconVoice: voice,
  IconWarningCircle: warningCircle,
  IconWeiboCircleFill: weiboCircleFill
};
const install = (Vue, options) => {
  for (const key of Object.keys(icons)) {
    Vue.component(icons[key].name, icons[key]);
  }
};
const CherryVueIcon = __spreadProps(__spreadValues({}, icons), {
  install
});
module.exports = CherryVueIcon;
