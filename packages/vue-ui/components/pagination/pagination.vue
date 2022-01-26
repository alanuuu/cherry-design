<template>
  <div class="c-pagination">
    <div class="c-pagination-total" v-if="total">
      <slot name="total"> 共 {{ total }} 条 </slot>
    </div>

    <button
      class="c-pagination-btn"
      :disabled="curPageNum <= 1"
      @click="prevPage"
    >
      {{ prevText }}
    </button>
    <ul class="c-page" @click="clickPage">
      <!-- 第一个页码 -->
      <li
        class="num"
        :class="[{ active: curPageNum === 1 }]"
        @click="changePage(1)"
      >
        1
      </li>
      <li class="num" v-show="showPrevEllipsis">...</li>
      <!-- 中间页码 -->
      <li
        class="num"
        :class="[{ active: num === curPageNum }]"
        v-for="(num, index) in middlePageNum"
        :key="index"
        @click="changePage(num)"
      >
        <slot name="li">{{ num }}</slot>
      </li>
      <li class="num" v-show="showNextEllipsis">...</li>
      <!-- 最后一个页码 -->
      <li
        class="num"
        :class="[{ active: curPageNum === total }]"
        @click="changePage(total)"
        v-if="total > 1"
      >
        {{ total }}
      </li>
    </ul>
    <button
      class="c-pagination-btn"
      :disabled="curPageNum >= total"
      @click="nextPage"
    >
      {{ nextText }}
    </button>
    <div class="c-pagination-size">
      <c-select v-model="size">
        <c-option v-for="v in pageSizeOptions" :key="v" :value="v">
          {{ v }} 条/页
        </c-option>
      </c-select>
    </div>
    <div v-if="showJumpPage" class="c-pagination-jumper">
      跳至 <c-input /> 页
    </div>
  </div>
</template>

<script>
import Input from '../input';
import { Select, Option } from '../select';

const defaultShowPageNum = 7; // 默认展示页码按钮数
const halfPageSize = (defaultShowPageNum - 1) / 2;
export default {
  name: 'Pagination',
  components: {
    CInput: Input,
    CSelect: Select,
    COption: Option,
  },
  props: {
    total: {
      type: Number,
    },
    pageSizeOptions: {
      type: Array,
      default: () => [10, 20, 50, 100],
    },
    showPageSize: {
      type: Boolean,
    },
    showJumpPage: {
      type: Boolean,
      default: true,
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
  data() {
    return {
      size: '',
      curPageNum: 1,
    };
  },
  mounted() {
    if (this.pageSizeOptions.length) {
      // eslint-disable-next-line prefer-destructuring
      this.size = this.pageSizeOptions[0];
    }
  },
  watch: {
    pageSizeOptions(val) {
      if (val.length && !val.includes(this.size)) {
        // eslint-disable-next-line prefer-destructuring
        this.size = val[0];
      }
    },
  },
  computed: {
    middlePageNum() {
      let startPage = 2;
      let endPage = this.total - 1;
      if (this.curPageNum - halfPageSize <= 1) {
        endPage = startPage + defaultShowPageNum - 3;
      } else if (this.curPageNum + halfPageSize >= this.total) {
        startPage = endPage - defaultShowPageNum + 3;
      } else {
        startPage =
          this.curPageNum - Math.floor((defaultShowPageNum - 2 - 1) / 2);
        endPage = startPage + defaultShowPageNum - 3;
      }
      const pageArr = [];
      for (let i = startPage; i <= endPage; i += 1) {
        pageArr.push(i);
      }

      return pageArr;
    },
    showPrevEllipsis() {
      return (
        this.curPageNum > defaultShowPageNum && this.total > defaultShowPageNum
      );
    },
    showNextEllipsis() {
      return (
        this.curPageNum < this.total - defaultShowPageNum &&
        this.total > defaultShowPageNum
      );
    },
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
      this.curPageNum =
        this.curPageNum + 1 > this.total ? this.total : this.curPageNum + 1;
    },
  },
};
</script>
