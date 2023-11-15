import Vue from "vue";
import VueRouter from "vue-router";
import ProfilePage from "@/views/ProfilePage.vue";
import BadgesPage from "@/views/BadgesPage.vue";
import NewsPage from "@/views/NewsFeedPage.vue";
import HabitPage from "@/views/HabitPage.vue";
import HabitsPage from "@/views/HabitsPage.vue";
import ArticlesPage from "@/views/ArticlesPage.vue";
import LeaderboardPage from "@/views/LeaderboardPage.vue";
import SettingsPage from "@/views/SettingsPage.vue";
import StorePage from "@/views/StorePage.vue";
import ArticlePage from "@/views/ArticlePage.vue";
import ChallengesPage from "@/views/ChallengesPage.vue";
import StatisticsPage from "@/views/StatisticsPage.vue";
import AchievementsPage from "@/views/AchievementsPage.vue";
import Store from "@/store";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: NewsPage },
  { path: "/profile", component: ProfilePage },
  { path: "/habits", component: HabitsPage },
  { path: "/badges", component: BadgesPage },
  { path: "/habit/", name: "habit", component: HabitPage, props: true },
  { path: "/articles", component: ArticlesPage },
  { path: "/article", component: ArticlePage },
  { path: "/leaderboard", component: LeaderboardPage },
  { path: "/settings", component: SettingsPage },
  { path: "/store", component: StorePage },
  { path: "/challenges", component: ChallengesPage },
  { path: "/statistics", component: StatisticsPage },
  { path: "/achievements", component: AchievementsPage },
];

const router = new VueRouter({
  routes,
  Store,
});

// Below function is for moving back to the top of the page on route change

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  const contentContainer = document.querySelector(".content-container");
  if (contentContainer) {
    contentContainer.scrollTop = 0; // Scrolls to the top of the content container
  }
  next();
});

export default router;
