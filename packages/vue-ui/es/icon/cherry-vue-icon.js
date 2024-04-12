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
import IconArrowDown from "./arrow-down.js";
import IconArrowLeft from "./arrow-left.js";
import IconArrowRight from "./arrow-right.js";
import IconArrowUp from "./arrow-up.js";
import IconAt from "./at.js";
import IconBlowUp from "./blow-up.js";
import IconCaretDown from "./caret-down.js";
import IconCaretLeft from "./caret-left.js";
import IconCaretRight from "./caret-right.js";
import IconCaretUp from "./caret-up.js";
import IconCheckCircle from "./check-circle.js";
import IconCheckSquare from "./check-square.js";
import IconCloseCircle from "./close-circle.js";
import IconClose from "./close.js";
import IconCodeBlock from "./code-block.js";
import IconCodeSquare from "./code-square.js";
import IconCode from "./code.js";
import IconDownload from "./download.js";
import IconExport from "./export.js";
import IconEyeInvisible from "./eye-invisible.js";
import IconEye from "./eye.js";
import IconFaceBookCircleFill from "./faceBook-circle-fill.js";
import IconFacebookSquareFill from "./facebook-square-fill.js";
import IconGoogleCircleFill from "./google-circle-fill.js";
import IconHeartFill from "./heart-fill.js";
import IconHeart from "./heart.js";
import IconHistory from "./history.js";
import IconHome from "./home.js";
import IconImport from "./import.js";
import IconLeftCircle from "./left-circle.js";
import IconLeft from "./left.js";
import IconList from "./list.js";
import IconLoading from "./loading.js";
import IconMenuFold from "./menu-fold.js";
import IconMenuUnfold from "./menu-unfold.js";
import IconMessageBanned from "./message-banned.js";
import IconMessage from "./message.js";
import IconMoreVertical from "./more-vertical.js";
import IconMore from "./more.js";
import IconNarrow from "./narrow.js";
import IconPlusCircle from "./plus-circle.js";
import IconPlus from "./plus.js";
import IconPoweroff from "./poweroff.js";
import IconQqCircleFill from "./qq-circle-fill.js";
import IconQuestionCircle from "./question-circle.js";
import IconRefresh from "./refresh.js";
import IconReply from "./reply.js";
import IconRightCircle from "./right-circle.js";
import IconRight from "./right.js";
import IconSave from "./save.js";
import IconScan from "./scan.js";
import IconSearch from "./search.js";
import IconSelectAll from "./select-all.js";
import IconSend from "./send.js";
import IconSettings from "./settings.js";
import IconShareAlt from "./share-alt.js";
import IconShareExternal from "./share-external.js";
import IconShareInternal from "./share-internal.js";
import IconStarFill from "./star-fill.js";
import IconStar from "./star.js";
import IconSync from "./sync.js";
import IconThumbDownFill from "./thumb-down-fill.js";
import IconThumbDown from "./thumb-down.js";
import IconThumbUpFill from "./thumb-up-fill.js";
import IconThumbUp from "./thumb-up.js";
import IconToBottom from "./to-bottom.js";
import IconToLeft from "./to-left.js";
import IconToRight from "./to-right.js";
import IconToTop from "./to-top.js";
import IconTranslate from "./translate.js";
import IconTwitterCircleFill from "./twitter-circle-fill.js";
import IconUpload from "./upload.js";
import IconVoice from "./voice.js";
import IconWarningCircle from "./warning-circle.js";
import IconWeiboCircleFill from "./weibo-circle-fill.js";
const icons = {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconAt,
  IconBlowUp,
  IconCaretDown,
  IconCaretLeft,
  IconCaretRight,
  IconCaretUp,
  IconCheckCircle,
  IconCheckSquare,
  IconCloseCircle,
  IconClose,
  IconCodeBlock,
  IconCodeSquare,
  IconCode,
  IconDownload,
  IconExport,
  IconEyeInvisible,
  IconEye,
  IconFaceBookCircleFill,
  IconFacebookSquareFill,
  IconGoogleCircleFill,
  IconHeartFill,
  IconHeart,
  IconHistory,
  IconHome,
  IconImport,
  IconLeftCircle,
  IconLeft,
  IconList,
  IconLoading,
  IconMenuFold,
  IconMenuUnfold,
  IconMessageBanned,
  IconMessage,
  IconMoreVertical,
  IconMore,
  IconNarrow,
  IconPlusCircle,
  IconPlus,
  IconPoweroff,
  IconQqCircleFill,
  IconQuestionCircle,
  IconRefresh,
  IconReply,
  IconRightCircle,
  IconRight,
  IconSave,
  IconScan,
  IconSearch,
  IconSelectAll,
  IconSend,
  IconSettings,
  IconShareAlt,
  IconShareExternal,
  IconShareInternal,
  IconStarFill,
  IconStar,
  IconSync,
  IconThumbDownFill,
  IconThumbDown,
  IconThumbUpFill,
  IconThumbUp,
  IconToBottom,
  IconToLeft,
  IconToRight,
  IconToTop,
  IconTranslate,
  IconTwitterCircleFill,
  IconUpload,
  IconVoice,
  IconWarningCircle,
  IconWeiboCircleFill
};
const install = (Vue, options) => {
  for (const key of Object.keys(icons)) {
    Vue.component(icons[key].name, icons[key]);
  }
};
const CherryVueIcon = __spreadProps(__spreadValues({}, icons), {
  install
});
export { CherryVueIcon as default };
