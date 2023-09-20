import Vue from "vue";
import VueRouter from "vue-router";
import ProfilePage from "@/views/ProfilePage.vue";
import NewsPage from "@/views/NewsFeedPage.vue";
import HabitsPage from "@/views/HabitsPage.vue";
import ArticlesPage from "@/views/ArticlesPage.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: NewsPage },
  { path: "/profile", component: ProfilePage },
  { path: "/habits", component: HabitsPage },
  { path: "/articles", component: ArticlesPage },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
