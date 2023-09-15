import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store"; // Import your Vuex store

Vue.config.productionTip = false;

Vue.use(VueRouter);
// Register your Vuex store
// You can use 'store' as the property name if it matches your import statement
new Vue({
  render: (h) => h(App),
  router,
  store, // Register your Vuex store
}).$mount("#app");
