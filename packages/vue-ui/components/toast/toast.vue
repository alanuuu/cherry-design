<template>
  <transition name="c-fade">
    <div class="c-toast" v-show="visible" :style="styles">
      <div class="c-toast-content">
        <div style="display: inline-flex">
          <div class="c-toast-content-text" :class="cls">
            <component
              v-if="icon !== 'none'"
              :is="icon"
              :class="clsIcon"
            ></component>
            <span>{{ message }}</span>
          </div>
          <icon-close
            v-if="showClose"
            class="c-toast-content-close"
            @click.native="close"
          ></icon-close>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { IconClose } from '../icon';
export default {
  name: 'Toast',
  components: {
    IconClose,
  },
  data() {
    return {
      message: '', // 消息文字
      duration: 3000, // 显示时长
      closed: false, // 用来判断消息框是否关闭
      timer: null, // 计时器
      visible: false, // 是否显示
      top: 20,
      showClose: false,
      icon: 'icon-warning-circle',
      type: 'info',
    };
  },
  mounted() {
    this.startTimer();
  },
  computed: {
    styles() {
      return {
        top: this.top + 'px',
      };
    },
    cls() {
      return {
        [`c-toast-content-text-close`]: this.showClose,
      };
    },
    clsIcon() {
      return {
        [`c-toast-content-icon`]: this.icon !== 'none',
        [`c-toast-content-icon-${this.type}`]: this.icon !== 'none',
      };
    },
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.destroyElement();
      }
    },
  },
  methods: {
    destroyElement() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
    },
    startTimer() {
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.closed = true;
          clearTimeout(this.timer);
        }
      }, this.duration);
    },
  },
};
</script>
