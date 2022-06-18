import Vue from "vue";
import App from "./App.vue";

import service from "./service";
import router from "./router";
import ElementUI from "element-ui";
import echarts from "echarts";
import "element-ui/lib/theme-chalk/index.css";

// import "./plugins/element";
import "font-awesome/css/font-awesome.min.css";

Vue.use(ElementUI);

// 挂载到原型上可以全局使用
Vue.prototype.service = service;
// 挂载到原型上
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

//路由导航守卫
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem("username")) {
    if (to.path !== "/login") {
      next("/login");
    } else {
      next();
    }
  }
  next();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// 全局引入element-ui
