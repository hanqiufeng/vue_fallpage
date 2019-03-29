<template>
  <div class="View" ref="main">
    <!-- 内容图片一 -->
    <full-page ref="fullpage" :options="options">
      <div class="section page1">
        <!-- 跳动的三角 -->
        <div class="ICO" v-show="ico_show">
          <button @click="$refs.fullpage.api.moveSectionDown()">下一页</button>
        </div>
        <div class="ICO" v-show="ico_show_up">
          <button @click="$refs.fullpage.api.moveSectionUp()">上一页</button>
        </div>
        <div>
          <router-link to='/warp/page_1'>路由跳转</router-link>
          <router-link :to='{path:"/warp/page_1",query:{name:"haha"}}'>带参传值</router-link>
          <router-link to='/warp/page_4'>锚点跳转</router-link>
          <router-link to='/auto-height/p1'>auto-height</router-link>
          <router-link to='/apps/page1'>apps</router-link>
        </div>
        <h3>vue-fullpage</h3>
      </div>
      <div class="section page2">
      </div>
      <div class="section page3">
      </div>
      <div class="section page4">
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
        // anchors: ["page_1", "page_2", "page_3", "page_4"],
        anchors: ["/", "/", "/", "/"],
        sectionsColor: ["#ddd", "#ccc", "#bbb", "#aaa"],
        afterLoad: this.afterLoad, // 回调函数
        controlArrows: true,
        scrollBar: true
      },
      ico_show: true,
      ico_show_up: false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    // 列表
    getData() {},
    afterLoad(old, now) {
      console.log(now.index);
      if (now.index == 3) {
        this.ico_show = false;
        this.ico_show_up = true;
      } else {
        this.ico_show = true;
        this.ico_show_up = false;
      }
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
  .page1 {
  }
  .page2 {
  }
  .page3 {
  }
}
</style>