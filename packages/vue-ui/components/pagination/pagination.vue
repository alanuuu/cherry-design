<template>
  <div class="c-pagination">
    <button
      class="c-pagination-btn"
      :class="{ 'c-pagination-btn-disable': this.curPageNum <= 1 }"
      @click="prevPage"
    >
      {{prevText}}
    </button>
    <ul class="c-page" @click="clickPage">
      <!-- 第一个页码 -->
      <li
        class="num"
        :class="[classes, { active: this.curPageNum === 1 }]"
        @click="changePage(1)"
      >
        1
      </li>
      <li class="num" v-show="showPrev">...</li>
      <!-- 中间页码 -->
      <li
        class="num"
        :class="[classes, { active: num === curPageNum }]"
        v-for="(num, index) in middlePageNum"
        :key="index"
        @click="changePage(num)"
      >
        <slot name="li">{{ num }}</slot>
      </li>
      <li class="num" v-show="showNext">...</li>
      <!-- 最后一个页码 -->
      <li
        class="num"
        :class="[classes, { active: this.curPageNum === this.maxNum }]"
        @click="changePage(maxNum)"
        v-if="maxNum > 1"
      >
        {{ this.maxNum }}
      </li>
    </ul>
    <button
      class="c-pagination-btn"
      :class="{ 'c-pagination-btn-disable': this.curPageNum >= this.maxNum }"
      @click="nextPage"
    >
      {{nextText}}
    </button>
  </div>
</template>
<script>
const defaultShowPageNum = 7; // 默认展示页码按钮数

export default {
  name: 'Pagination',
  props: {
    maxNum: {
      type: Number,
      default: 10,
      validator(value) {
        return value >= 1;
      },
    },
    showPageNum: {
      type: Number,
      default: 7,
    },
    prevText: {
      type: String,
      default: 'prev',
    },
    nextText: {
      type: String,
      default: 'next',
    },
  },
  computed: {
    totalPageNum() {
      return this.maxNum;
    },
    middlePageNum() {
      let startPage = 2;
      let endPage = this.totalPageNum - 1;
      const halfPageSize = (this.showPageNum - 1) / 2;
      if (this.totalPageNum <= this.showPageNum) {
        this.showPrev = false;
        this.showNext = false;
      } else if (this.curPageNum - halfPageSize <= 1) {
        this.showPrev = false; // 不需要显示左边的省略号
        this.showNext = true; // 显示右边的省略号
        endPage = startPage + this.showPageNum - 3;
      } else if (this.curPageNum + halfPageSize >= this.totalPageNum) {
        this.showPrev = true; // 显示左边的省略号
        this.showNext = false; // 不显示右边的省略号
        startPage = endPage - this.showPageNum + 3;
      } else {
        this.showPrev = true; // 两边都需要显示省略号
        this.showNext = true;
        startPage = this.curPageNum - Math.floor((this.showPageNum - 2 - 1) / 2);
        endPage = startPage + this.showPageNum - 3;
      }
      const pageArr = [];
      for (let i = startPage; i <= endPage; i += 1) {
        pageArr.push(i);
      }

      return pageArr;
    },
    classes() {
      return {};
    },
  },
  data() {
    return {
      curPageNum: 6,
      showPrev: false,
      showNext: false,
    };
  },
  methods: {
    clickPage(event) {},
    changePage(pageNum) {
      this.curPageNum = pageNum;
    },
    prevPage() {
      this.curPageNum = this.curPageNum - 1 < 1 ? 1 : this.curPageNum - 1;
    },
    nextPage() {
      this.curPageNum = this.curPageNum + 1 > this.maxNum ? this.maxNum : this.curPageNum + 1;
    },
  },
};
</script>
