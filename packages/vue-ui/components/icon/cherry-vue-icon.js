import IconArrowDown from './arrow-down.vue';
import IconArrowLeft from './arrow-left.vue';
import IconArrowRight from './arrow-right.vue';
import IconArrowUp from './arrow-up.vue';
import IconAt from './at.vue';
import IconBlowUp from './blow-up.vue';
import IconCaretDown from './caret-down.vue';
import IconCaretLeft from './caret-left.vue';
import IconCaretRight from './caret-right.vue';
import IconCaretUp from './caret-up.vue';
import IconCheckCircle from './check-circle.vue';
import IconCheckSquare from './check-square.vue';
import IconCloseCircle from './close-circle.vue';
import IconClose from './close.vue';
import IconCodeBlock from './code-block.vue';
import IconCodeSquare from './code-square.vue';
import IconCode from './code.vue';
import IconDownload from './download.vue';
import IconExport from './export.vue';
import IconEyeInvisible from './eye-invisible.vue';
import IconEye from './eye.vue';
import IconFaceBookCircleFill from './faceBook-circle-fill.vue';
import IconFacebookSquareFill from './facebook-square-fill.vue';
import IconGoogleCircleFill from './google-circle-fill.vue';
import IconHeartFill from './heart-fill.vue';
import IconHeart from './heart.vue';
import IconHistory from './history.vue';
import IconHome from './home.vue';
import IconImport from './import.vue';
import IconLeftCircle from './left-circle.vue';
import IconLeft from './left.vue';
import IconList from './list.vue';
import IconLoading from './loading.vue';
import IconMenuFold from './menu-fold.vue';
import IconMenuUnfold from './menu-unfold.vue';
import IconMessageBanned from './message-banned.vue';
import IconMessage from './message.vue';
import IconMoreVertical from './more-vertical.vue';
import IconMore from './more.vue';
import IconNarrow from './narrow.vue';
import IconPlusCircle from './plus-circle.vue';
import IconPlus from './plus.vue';
import IconPoweroff from './poweroff.vue';
import IconQqCircleFill from './qq-circle-fill.vue';
import IconQuestionCircle from './question-circle.vue';
import IconRefresh from './refresh.vue';
import IconReply from './reply.vue';
import IconRightCircle from './right-circle.vue';
import IconRight from './right.vue';
import IconSave from './save.vue';
import IconScan from './scan.vue';
import IconSearch from './search.vue';
import IconSelectAll from './select-all.vue';
import IconSend from './send.vue';
import IconSettings from './settings.vue';
import IconShareAlt from './share-alt.vue';
import IconShareExternal from './share-external.vue';
import IconShareInternal from './share-internal.vue';
import IconStarFill from './star-fill.vue';
import IconStar from './star.vue';
import IconSync from './sync.vue';
import IconThumbDownFill from './thumb-down-fill.vue';
import IconThumbDown from './thumb-down.vue';
import IconThumbUpFill from './thumb-up-fill.vue';
import IconThumbUp from './thumb-up.vue';
import IconToBottom from './to-bottom.vue';
import IconToLeft from './to-left.vue';
import IconToRight from './to-right.vue';
import IconToTop from './to-top.vue';
import IconTranslate from './translate.vue';
import IconTwitterCircleFill from './twitter-circle-fill.vue';
import IconUpload from './upload.vue';
import IconVoice from './voice.vue';
import IconWarningCircle from './warning-circle.vue';
import IconWeiboCircleFill from './weibo-circle-fill.vue';

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

const CherryVueIcon = {
  ...icons,
  install
};

export default CherryVueIcon;
