<template>
  <div class="c-nav" ref="navs">
    <c-nav-bar
      ref="bar"
      :items="itemData"
      @click="tagChange"
      :active="activeKey"
      :fixed="fixed"
      :top="top"
    />
    <div class="c-nav-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import NavBar from './nav-bar.vue';
import {
  getOffsetTop,
  scrollTo,
  getScroll,
  isScrollToBottom,
} from '../../util/scroll';

const name = 'c-nav';
let timer = null;

export default {
  name: 'Navs',
  components: {
    CNavBar: NavBar,
  },
  props: {
    // 距离顶部距离
    top: {
      type: Number,
      default: 0,
    },
    // 一般不需要传；主要是为了防止服务端渲染闪烁
    items: Array,
    layout: {
      type: String,
      default: 'top',
      validator: (val) => {
        return ['top', 'bottom', 'left', 'right'].indexOf(val) > -1;
      },
    },
    duration: {
      type: Number,
      default: 450,
    },
    isWindow: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      activeKey: null,
      itemData: [],
      isTabClicked: false,
      fixed: false,
    };
  },
  computed: {
    container() {
      return this.isWindow ? document.documentElement : this.$refs.navs?.parentElement;
    },
    listener() {
      return this.isWindow ? document : this.$refs.navs?.parentElement;
    },
  },
  created() {
    this.init();
  },
  mounted() {
    this.listener?.addEventListener('scroll', this.onScroll);
    this.onScroll();
  },
  beforeDestroy() {
    this.listener?.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    init() {
      const slots = this.$slots.default;
      if (!slots && slots.length === 0) {
        return;
      }
      // 获取子组件
      const vnodes = slots.filter((v) => {
        return /vue-component-[0-9]+-NavItem/i.test(v.tag);
      });
      if (vnodes.length > 0) {
        const itemData = vnodes.map((v) => v.componentOptions.propsData);
        this.itemData = this.items && this.items.length ? this.items : itemData;
      }
    },
    tagChange(type) {
      this.activeKey = type;
      this.isTabClicked = true;
      this.fixed = true;
      clearTimeout(timer);
      this.$nextTick(() => {
        const barHeight = this.getBarheight();
        const nav = document.querySelector(`.${name}-${this.activeKey}`);
        const offsetHeight = getOffsetTop(nav);
        scrollTo(offsetHeight - barHeight, {
          getContainer: () => this.container,
          callback: () => {
            timer = setTimeout(() => {
              this.isTabClicked = false;
            }, 20);
          },
          duration: this.duration,
        });
      });
      this.$emit('change', type);
    },
    onScroll() {
      return requestAnimationFrame(this._onScroll);
    },
    _onScroll() {
      if (!this.$refs.bar || this.isTabClicked) return;

      const offsetTopNavs = this.itemData.map((v) => {
        const el = document.querySelector(`.${name}-${v.name}`);
        return getOffsetTop(el);
      });
      const offsetTop = getOffsetTop(this.$refs.navs);
      const top = getScroll(this.container, true);
      this.fixed = top + this.top >= offsetTop;
      const barHeight = this.getBarheight();
      const isEnd = isScrollToBottom(this.$refs.navs, {
        getContainer: () => this.container,
      });
      console.log(top, offsetTopNavs);
      // 到底
      if (isEnd) {
        console.log('scroll end');
        this.activeKey = this.itemData[this.itemData.length - 1].name;
        return;
      }
      if (top <= offsetTopNavs[0]) {
        this.activeKey = this.itemData[0].name;
      }
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < offsetTopNavs.length; i++) {
        if (top >= offsetTopNavs[i] - barHeight - this.top) {
          this.activeKey = this.itemData[i].name;
        }
      }
    },
    getBarheight() {
      return this.layout === 'top' ? this.$refs.bar.$el.clientHeight : 0;
    },
  },
};
</script>
