<template>
  <div>
    <div :class="cls" ref="affix" :style="styles">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Affix',
  props: {
    offsetTop: {
      type: Number,
      default: 0,
    },
    offsetBottom: Number,
  },
  data() {
    return {
      styles: {},
      affix: false,
    };
  },
  computed: {
    offsetType() {
      return this.offsetBottom >= 0 ? 'bottom' : 'top';
    },
    cls() {
      const name = 'c-affix';
      return {
        [name]: this.affix,
      };
    },
  },
  mounted() {
    // 监听
    window.addEventListener('resize', this.changeScroll);
    window.addEventListener('scroll', this.changeScroll);
    this.$nextTick(() => {
      this.changeScroll();
    });
  },
  methods: {
    changeScroll() {
      const winHight = window.innerHeight;
      const affixHight = this.$el.getElementsByTagName('div')[0].offsetHeight;
      const divTop = this.$el.getBoundingClientRect().top;
      if (this.offsetType === 'top' && divTop < this.offsetTop && !this.affix) {
        this.affix = true;
        this.styles = {
          top: this.offsetTop + 'px',
        };
        this.$emit('onChange', true);
      } else if (
        this.offsetType === 'top' &&
        divTop > this.offsetTop &&
        this.affix
      ) {
        this.affix = false;
        this.styles = {};
        this.$emit('onChange', false);
      } else if (
        this.offsetType === 'bottom' &&
        divTop + this.offsetBottom + affixHight > winHight &&
        !this.affix
      ) {
        this.affix = true;
        this.styles = {
          bottom: this.offsetBottom + 'px',
        };
        this.$emit('onChange', true);
      } else if (
        this.offsetType === 'bottom' &&
        divTop + this.offsetBottom + affixHight < winHight &&
        this.affix
      ) {
        this.affix = false;
        this.styles = {};
        this.$emit('onChange', false);
      }
    },
  },
  destroyed() {
    window.removeEventListener('resize', this.changeScroll);
    window.removeEventListener('scroll', this.changeScroll);
  },
};
</script>
