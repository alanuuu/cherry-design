<template>
  <transition-group
    tag="ul"
    :class="[
      'c-upload-list',
      'c-upload-list--' + listType,
      { 'is-disabled': disabled },
    ]"
    name="c-list"
  >
    <li
      v-for="file in files"
      :class="[
        'c-upload-list__item',
        'is-' + file.status,
        focusing ? 'focusing' : '',
      ]"
      :key="file.uid"
      tabindex="0"
      @keydown.delete="!disabled && $emit('remove', file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="focusing = false"
    >
      <slot :file="file">
        <img
          class="c-upload-list__item-thumbnail"
          v-if="
            file.status !== 'uploading' &&
            ['picture-card', 'picture'].indexOf(listType) > -1
          "
          :src="file.url"
          alt=""
        />
        <a class="c-upload-list__item-name" @click="handleClick(file)">
          <i class="c-icon-document"></i>{{ file.name }}
        </a>
        <label class="c-upload-list__item-status-label">
          <i
            :class="{
              'c-icon-upload-success': true,
              'c-icon-circle-check': listType === 'text',
              'c-icon-check':
                ['picture-card', 'picture'].indexOf(listType) > -1,
            }"
          ></i>
        </label>
        <i
          class="c-icon-close"
          v-if="!disabled"
          @click="$emit('remove', file)"
        ></i>
        <icon-close v-if="!disabled"></icon-close>
        <!--因为close按钮只在li:focus的时候 display, li blur后就不存在了，所以键盘导航时永远无法 focus到 close按钮上-->
        <c-progress
          v-if="file.status === 'uploading'"
          :process="parsePercentage(file.percentage)"
        >
        </c-progress>
        <span
          class="c-upload-list__item-actions"
          v-if="listType === 'picture-card'"
        >
          <span
            class="c-upload-list__item-preview"
            v-if="handlePreview && listType === 'picture-card'"
            @click="handlePreview(file)"
          >
            <i class="c-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled"
            class="c-upload-list__item-delete"
            @click="$emit('remove', file)"
          >
            <i class="c-icon-delete"></i>
          </span>
        </span>
      </slot>
    </li>
  </transition-group>
</template>
<script>
import { IconClose } from '../icon';
import CProgress from '../progress';

export default {
  name: 'ElUploadList',
  data() {
    return {
      focusing: false,
    };
  },
  components: { CProgress, IconClose },

  props: {
    files: {
      type: Array,
      default() {
        return [];
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    handlePreview: Function,
    listType: String,
  },
  methods: {
    parsePercentage(val) {
      return parseInt(val, 10);
    },
    handleClick(file) {
      // eslint-disable-next-line no-unused-expressions
      this.handlePreview && this.handlePreview(file);
    },
  },
};
</script>
