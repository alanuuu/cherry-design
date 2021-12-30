<template>
  <div class="c-rate" :class="classes">
    <input type="hidden" :value="clickIndex" />
    <span
      class="c-rate-icon c-rate"
      :class="starCls(item)"
      v-for="(item, index) in count"
      :key="index"
      @mousemove="handleMousemove(item)"
      @mouseleave="handleMouseleave()"
      @click="click(index)"
    >
      <!-- 自定义字符 -->
      <span v-if="character">{{ character }}</span>
      <!-- 自定义图标 -->
      <component v-else :is="icon"></component>
    </span>
    <!-- 显示数据 -->
    <span v-if="showtext" class="c-rate-text">{{ clickIndex }}</span>
  </div>
</template>
<script>
import formMixins from '../mixins/form';

export default {
  name: 'Rate',
  mixins: [formMixins],
  props: {
    // 总共几个等级
    count: {
      type: Number,
      default: 5,
    },
    size: {
      type: String,
      default: 'medium',
    },
    // 选中几个
    value: {
      type: Number,
      default: 1,
    },
    // icon类型
    icon: {
      type: String,
      default: 'icon-star-fill',
    },
    character: {
      type: String,
      default: null,
    },
    showtext: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    value(val) {
      this.clickIndex = val;
    },
  },
  data() {
    return {
      clickIndex: this.value, // 选中的数
      hoverIndex: -1, // 悬停的数
      ishover: false, // 是否悬停
    };
  },
  computed: {
    classes() {
      return {
        [`c-rate-${this.size}`]: true,
      };
    },
    iconClasses() {
      return [
        {
          // [`c-icon-${this.icon}`]: this.icon !== '',
          [`c-rate-${this.size}`]: true,
        },
      ];
    },
  },
  methods: {
    click(val) {
      if (this.itemDisabled) {
        return;
      }
      this.clickIndex = val + 1;
      this.$emit('input', this.clickIndex);
      this.$nextTick(() => {
        this.formItem?.onField('change');
      });
    },
    starCls(val) {
      return [
        {
          'c-rate-point': val <= this.clickIndex && !this.ishover,
          'c-rate-hover': val <= this.hoverIndex && !this.itemDisabled,
          'c-rate-hover-point': val === this.hoverIndex && !this.itemDisabled,
        },
      ];
    },
    handleMousemove(value) {
      if (this.itemDisabled) {
        return;
      }
      this.ishover = true;
      this.hoverIndex = value;
    },
    handleMouseleave() {
      if (this.itemDisabled) {
        return;
      }
      this.hoverIndex = -1;
      this.ishover = false;
    },
  },
};
</script>
