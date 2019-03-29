<template>
  <div class="View" ref="main">
    <!-- 内容图片一 -->
    <full-page ref="fullpage" :options="options">
      <div class="section page1">
        page1
      </div>
      <div class="section page2">
        page2
      </div>
      <div class="section page3">
        page3
      </div>
      <div class="section page4">
        page4
      </div>
    </full-page>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      // 单页面滚动
      options: {
        menu: "#menu",
        anchors: [
          "/warp/page_1",
          "/warp/page_2",
          "/warp/page_3",
          "/warp/page_4"
        ],
        // anchors: ["/", "/", "/", "/"],
        sectionsColor: ["#ddd", "#ccc", "#bbb", "#aaa"],
        afterLoad: this.afterLoad, // 回调函数
        controlArrows: true,
        scrollBar: true
      }
    };
  },
  created() {
    this.getData();
  },
  mounted() {},
  methods: {
    // 列表
    getData() {
      var path = this.$route.params.id;
      console.log(path);
    },
    afterLoad(old, now) {
      console.log(now.index);
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../assets/css/header.scss";

.View {
  -webkit-user-select: none; // 文本不可选中
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0;
  margin: 0;
  .section {
    .ICO {
      // border: 2px solid #fff;
      bottom: 0;
      width: 100%;
      float: left;
      z-index: 1;
      position: fixed;
      text-align: center;
    }
    text-align: center;
    font-size: 24px;
  }
  .page1 {
  }
  .page2 {
  }
  .page3 {
  }
  .page4 {
  }
}
</style>