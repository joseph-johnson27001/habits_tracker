import Vue from "vue";
import VueRouter from "vue-router";
import ProfilePage from "@/views/ProfilePage.vue";
import NewsPage from "@/views/NewsFeedPage.vue";
import HabitPage from "@/views/HabitPage.vue";
import HabitsPage from "@/views/HabitsPage.vue";
import ArticlesPage from "@/views/ArticlesPage.vue";
import LeaderboardPage from "@/views/LeaderboardPage.vue";
import SettingsPage from "@/views/SettingsPage.vue";
import StorePage from "@/views/StorePage.vue";
import AritclePage from "@/views/AritclePage.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: NewsPage },
  { path: "/profile", component: ProfilePage },
  { path: "/habits", component: HabitsPage },
  { path: "/habit/", name: "habit", component: HabitPage, props: true },
  { path: "/articles", component: ArticlesPage },
  { path: "/article", component: AritclePage },
  { path: "/leaderboard", component: LeaderboardPage },
  { path: "/settings", component: SettingsPage },
  { path: "/store", component: StorePage },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
