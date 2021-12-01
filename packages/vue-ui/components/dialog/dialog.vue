<template>
  <transition name="dialog-fade">
    <div class="c-dialog" v-show="visible">
      <div class="c-dialog-body" :style="{width: width+'px'}">
        <div :class="['c-dialog-header',{'c-dialog-center': center}]">
          <slot name="title">
            <div class="c-dialog-title">
              <span>{{title}}</span>
            </div>
          </slot>
          <!-- <span class="c-dialog-close-botton" @click="close" v-show="showClose">
            <img class="c-dialog-close" src="../common/images/close.png">
          </span> -->
        </div>
        <div class="c-dialog-content">
          <slot></slot>
        </div>
        <div :class="['c-dialog-footer',{'c-dialog-center': center}]">
          <slot name="footer">
            <c-button @click="close">确定</c-button>
            <c-button @click="close" style="margin-right:16px">取消</c-button>
          </slot>
        </div>
      </div>
      <div class="c-dialog-shadow" v-show="modal" @click="close"></div>
    </div>
  </transition>
</template>
<script>
import CButton from '../button/button.vue';
import { IconSync } from '../icon';

export default {
  components: { CButton },
  name: 'Dialog',
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '标题名称',
    },
    width: {
      type: Number,
      default: 400,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    modal: {
      type: Boolean,
      default: true,
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
  computed: {

  },
  data() {
    return {

    };
  },
  methods: {
    close() {
      this.$emit('close', false);
    },
  },
};
</script>