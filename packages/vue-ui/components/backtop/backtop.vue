<template>
  <div class="c-backtop">
    <div v-if="show" @click="backTop">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  props: {
    height: {
      type: Number,
      default: 300,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    window.addEventListener('resize', this.changeScroll);
    window.addEventListener('scroll', this.changeScroll);
  },
  methods: {
    changeScroll() {
      this.show = window.pageYOffset >= this.height;
    },
    backTop() {
      // 滑动到顶部
      const top = document.documentElement || document.body;
      top.scrollIntoView({
        behavior: 'smooth',
      });
      this.$emit('back');
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.changeScroll);
    window.removeEventListener('scroll', this.changeScroll);
  },
};
</script>
