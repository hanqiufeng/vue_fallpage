<template>
  <div class="View" ref="main">
    <!-- 内容图片一 -->
    <full-page ref="fullpage" :options="options">
      <ul id="menu">
        <li data-menuanchor="auto-height/p1">
          <!-- <a href="#/auto-height/p1">First slide</a> -->
          <a href="javascript:void(0)" @click='moveTo(1)'>First slide</a>
        </li>
        <li data-menuanchor="auto-height/p2">
          <!-- <a href="#/auto-height/p2">Second slide</a> -->
          <a href="javascript:void(0)" @click='moveTo(2)'>Second slide</a>
        </li>
        <li data-menuanchor="auto-height/p3">
          <!-- <a href="#/auto-height/p3">Third slide</a> -->
          <a href="javascript:void(0)" @click='moveTo(3)'>Third slide</a>
        </li>
      </ul>

      <div id="fullpage">
        <div class="section" id="p1">
          <div class="intro">
            <h1>Section 1</h1>
            <p>Scroll down to see auto-height sections</p>
          </div>
        </div>
        <div class="section fp-auto-height" id="p2">
          <!-- <h1>Section 2</h1> -->
          <div class="slide" id="slide1">
            <div class="myContent">
              <h1>Section 2</h1>
            </div>
          </div>
          <div class="slide" id="slide2">
            <h1>Section 2.2</h1>
          </div>
        </div>
        <div class="section fp-auto-height" id="p3">
          <div class="myContent">
            <h1>Section 3</h1>
          </div>
        </div>
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
        verticalCentered: true,
        anchors: ["auto-height/p1", "auto-height/p2", "auto-height/p3"],
        menu: "#menu",
        sectionsColor: ["#1bbc9b", "#4BBFC3", "#7BAABE"]
      }
    };
  },
  created() {},
  mounted() {
    var id = this.$route.params.id;
    console.log(id);
    switch (id) {
      case "p1":
        fullpage_api.moveTo(1);
        break;
      case "p2":
        fullpage_api.moveTo(2);
        break;
      case "p3":
        fullpage_api.moveTo(3);
        break;
    }
  },
  methods: {
    // 列表
    getData() {},
    moveTo(pages, page) {
      fullpage_api.moveTo(pages, page);
    },
    afterLoad(old, now) {
      console.log(now.index);
      if (now.index == 3) {
        this.ico_show = false;
        this.ico_show_up = true;
      } else {
        this.ico_show = true;
        this.ico_show_up = false;
      }
    },
    goAnchor(selector) {
      document.querySelector(selector).scrollIntoView(true);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./css/examples.css";

.View {
  -webkit-user-select: none; // 文本不可选中
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0;
  margin: 0;
  .section {
    text-align: center;
    font-size: 24px;
    .ICO {
      // border: 2px solid #fff;
      bottom: 0;
      width: 100%;
      float: left;
      z-index: 1;
      position: fixed;
      text-align: center;
    }
  }
  .myContent {
    height: 300px;
  }
}
</style>