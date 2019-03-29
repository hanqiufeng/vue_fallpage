import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "移动端首页",
      component: resolve => require(["@/components/Index"], resolve)
    },
    {
      path: "/auto-height/:id",
      name: "auto-height",
      component: resolve => require(["@/components/auto-height"], resolve)
    },
    {
      path: "/page",
      name: "page",
      component: resolve => require(["@/components/page"], resolve)
    },
    {
      path: "/apps/:id",
      name: "apps",
      component: resolve => require(["@/components/Apps"], resolve)
    },
    {
      path: "/warp/:id",
      name: "warp",
      component: resolve => require(["@/components/warp"], resolve)
    },
    // 所有错误路由都跳转到error页面
    {
      path: "*",
      name: "error",
      component: resolve => require(["@/components/404"], resolve)
    }
  ]
});
