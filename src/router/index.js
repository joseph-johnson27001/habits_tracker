import Vue from "vue";
import VueRouter from "vue-router";
import ProfilePage from "@/views/ProfilePage.vue";
import NewsPage from "@/views/NewsFeedPage.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: ProfilePage },
  { path: "/news", component: NewsPage },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
