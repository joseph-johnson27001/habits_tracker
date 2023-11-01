import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store";
import loadingOverlay from "./components/Loading/LoadingOverlayComponent.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);
new Vue({
  render: (h) => h(App),
  router,
  store,
  loadingOverlay,
}).$mount("#app");
