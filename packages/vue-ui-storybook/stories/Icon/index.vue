<template>
  <div>
    <span class="title">图标集合</span>
    <div class="icons">
      <div v-for="component in icons" :key="component.name" class="icon">
        <component
          :is="`icon-${component.name}`"
        ></component>
        <span class="text">{{`icon-${component.name}`}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconAt,
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
  IconList,
  IconMenuFold,
  IconMenuUnfold,
  IconMessageBanned,
  IconMessage,
  IconMoreVertical,
  IconMore,
  IconPoweroff,
  IconQqCircleFill,
  IconRefresh,
  IconReply,
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
  IconTranslate,
  IconTwitterCircleFill,
  IconUpload,
  IconVoice,
  IconWeiboCircleFill,
} from '@csdn-design/vue-ui/components/icon';

export default {
  name: 'icon',
  components: {
    IconArrowDown,
    IconArrowLeft,
    IconArrowRight,
    IconArrowUp,
    IconAt,
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
    IconList,
    IconMenuFold,
    IconMenuUnfold,
    IconMessageBanned,
    IconMessage,
    IconMoreVertical,
    IconMore,
    IconPoweroff,
    IconQqCircleFill,
    IconRefresh,
    IconReply,
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
    IconTranslate,
    IconTwitterCircleFill,
    IconUpload,
    IconVoice,
    IconWeiboCircleFill,
  },
  computed:{
    icons() {
      return [
        IconArrowDown,
        IconArrowLeft,
        IconArrowRight,
        IconArrowUp,
        IconAt,
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
        IconList,
        IconMenuFold,
        IconMenuUnfold,
        IconMessageBanned,
        IconMessage,
        IconMoreVertical,
        IconMore,
        IconPoweroff,
        IconQqCircleFill,
        IconRefresh,
        IconReply,
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
        IconTranslate,
        IconTwitterCircleFill,
        IconUpload,
        IconVoice,
        IconWeiboCircleFill,
      ]
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .c-icon {
  height: 36px;
  width: 36px;
}
.title {
  color: #99a9bf;
  display: inline-block;
  margin: 24px 0;
  font-size: 24px;
}
.icons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.icon {
  height: 120px;
  width: 150px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
}
.text {
  margin-top: 4px;
  display: inline-block;
  text-align: center;
  color: #99a9bf;
}
</style>