import Vue from "vue";
import App from "./App";
import router from "./router";
import VueFullPage from "vue-fullpage.js";

Vue.config.productionTip = false;
Vue.use(VueFullPage);

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
