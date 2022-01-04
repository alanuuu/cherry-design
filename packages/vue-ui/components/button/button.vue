<template>
  <button :class="cls" @click="onClick" :type="htmlType">
    <loading v-if="loading" class="c-btn-icon" :size="size" :isLoading="loading"></loading>
    <span><slot></slot></span>
  </button>
</template>

<script>
import Loading from '../loading/loading.vue';

export default {
  name: 'Button',
  components: {
    Loading,
  },
  props: {
    // 按钮类型
    type: {
      type: String,
      default: 'primary',
      validator: (val) => {
        return ['primary', 'danger', 'light', 'black'].indexOf(val) !== -1;
      },
    },
    // 按钮大小
    size: {
      type: String,
      default: 'small',
      validator: (val) => {
        return ['large', 'medium', 'small'].indexOf(val) !== -1;
      },
    },
    htmlType: {
      type: String,
      default: 'button',
    },
    disabled: Boolean,
    ghost: Boolean,
    loading: Boolean,
  },
  computed: {
    cls() {
      const name = 'c-btn';
      return {
        [name]: true,
        [`${name}-${this.size}`]: true,
        [`${name}-${this.type}`]: true,
        [`${name}-disabled`]: this.disabled,
        [`${name}-loading`]: this.loading,
        [`${name}-ghost`]: this.ghost,
      };
    },
  },
  methods: {
    onClick(event) {
      if (this.loading || this.disabled) return;
      this.$emit('click', event);
    },
  },
};
</script>
